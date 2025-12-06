import { loadGSAP } from "$lib/gsap";
import { goto } from "$app/navigation";

let smootherReady = false;

export function setSmootherReady() {
    smootherReady = true;
}

// внутренний helper: дождаться готовности smoother + элемента
function rafUntil(cond: () => boolean) {
    return new Promise<void>((resolve) => {
        const tick = () => (cond() ? resolve() : requestAnimationFrame(tick));
        tick();
    });
}

// Прокрутка к секции
export async function smoothScrollTo(target: string | HTMLElement) {
    const { gsap, ScrollSmoother } = await loadGSAP();
    if (!gsap) return;

    const el =
        typeof target === "string"
            ? document.querySelector<HTMLElement>(target)
            : target;

    if (!el) return;

    const smoother = ScrollSmoother?.get();
    const header = document.querySelector<HTMLElement>("header");
    const offset = (header?.offsetHeight ?? 0) + 8;

    if (smoother) {
        // ScrollSmoother: можно задать позицию выравнивания
        // "top top" = верх элемента к верху viewport
        // сдвиг под хедер лучше делать через position со строкой "+= / -="
        const position = offset ? `top top+=${offset}` : "top top";
        smoother.scrollTo(el, true, position);
        return;
    }

    // Фоллбек без ScrollSmoother
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: el,
            offsetY: offset
        },
        ease: "power2.out"
    });
}

export function scrollWhenReady(hash: string) {
    const tryScroll = async () => {
        await rafUntil(() => smootherReady);
        await rafUntil(() => !!document.querySelector<HTMLElement>(hash));
        void smoothScrollTo(hash);
    };

    void tryScroll();
}

// Скролл к объекту даже если мы на другой странице
export function navigateToHash(hash: string) {
    if (window.location.pathname === "/") {
        scrollWhenReady(hash);
    } else {
        goto("/", { replaceState: false, keepFocus: true, noScroll: true }).then(
            () => {
                scrollWhenReady(hash);
            }
        );
    }
}

// Переход на страницу + скролл наверх (корректно с ScrollSmoother)
export function navigateToPath(path: string) {
    if (window.location.pathname === path) return;

    goto(path, {
        replaceState: false,
        keepFocus: true,
        noScroll: true
    }).then(async () => {
        // ждём готовности smoother (если он используется на странице)
        await rafUntil(() => smootherReady);

        const { ScrollSmoother } = await loadGSAP();
        const smoother = ScrollSmoother?.get();

        if (smoother) {
            // важно: scrollTo через smoother, иначе останешься "низко"
            smoother.scrollTo(0, false); // false = без анимации
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
    });
}
