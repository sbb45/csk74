import {loadGSAP} from "$lib/gsap";

/**
 * Hover эффект для ссылок в футере
 * Плавное изменение цвета и подчеркивание
 */
export function initFooterLinkHover(link: HTMLElement) {
    let cleanup = () => {};

    loadGSAP().then(({gsap}) => {
        if (!gsap) return;

        const tlHover = gsap.timeline({paused: true});

        tlHover.to(link, {
            color: "#F05A28",
            y: -2,
            duration: 0.35,
            ease: "power2.out"
        }, 0);

        const enter = () => tlHover.play();
        const leave = () => tlHover.reverse();

        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            link.addEventListener("pointerenter", enter);
            link.addEventListener("pointerleave", leave);
        });

        cleanup = () => {
            mm.revert();
            link.removeEventListener("pointerenter", enter);
            link.removeEventListener("pointerleave", leave);
        };
    });

    return () => cleanup();
}

/**
 * Инициализация hover эффектов для всех ссылок в футере
 */
export function initFooterLinks(footer: HTMLElement) {
    let cleanup: (() => void)[] = [];

    loadGSAP().then(({gsap}) => {
        if (!gsap) return;

        const links = footer.querySelectorAll<HTMLElement>("a");
        cleanup = Array.from(links).map(link => initFooterLinkHover(link));
    });

    return () => {
        cleanup.forEach(fn => fn());
    };
}



