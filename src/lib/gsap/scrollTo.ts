import { loadGSAP } from "$lib/gsap";
import { goto } from '$app/navigation';

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
        // "top top" – верх элемента к верху viewport
        // "-=X" – сдвиг на высоту хэдера
        const position = offset ? `top top-=${offset}` : "top top";

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

// Проверка подгружена ли плавная прокрутка перед ней
let smootherReady = false;

export function setSmootherReady() {
    smootherReady = true;
}

export function scrollWhenReady(hash: string) {
    const tryScroll = () => {
        if (!smootherReady) {
            requestAnimationFrame(tryScroll);
            return;
        }

        const el = document.querySelector<HTMLElement>(hash);
        if (!el) {
            requestAnimationFrame(tryScroll);
            return;
        }

        smoothScrollTo(hash);
    };

    tryScroll();
}
// Скролл к объекту даже если мы на другой странице
export function navigateToHash(hash: string) {
    if (window.location.pathname === '/') {
        scrollWhenReady(hash);
        history.replaceState(history.state, '', '/' + hash);
    } else {
        // переходим на главную БЕЗ автоматического скролла
        goto('/', {
            replaceState: false,
            keepFocus: true,
            noScroll: true
        });
        setTimeout(() => {
            scrollWhenReady(hash)
            history.replaceState(history.state, '', '/' + hash);
        }, 50);
    }
}
