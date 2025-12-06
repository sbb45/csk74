import {loadGSAP} from "$lib/gsap";

/**
 * Hover эффект для навигационных ссылок
 * Подчеркивание снизу с плавной анимацией
 */
export function initLinkHover(link: HTMLElement) {
    let cleanup = () => {};

    loadGSAP().then(({gsap}) => {
        if (!gsap) return;

        // Создаем элемент подчеркивания
        const underline = document.createElement("span");
        underline.style.cssText = `
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #F05A28;
            transition: none;
        `;
        link.style.position = "relative";
        link.appendChild(underline);

        const tlHover = gsap.timeline({paused: true});
        const tlLeave = gsap.timeline({paused: true});

        tlHover.to(underline, {
            width: "100%",
            duration: 0.4,
            ease: "power2.out"
        }, 0)
        .to(link, {
            color: "#F05A28",
            duration: 0.3,
            ease: "power2.out"
        }, 0);

        tlLeave.to(underline, {
            width: "0%",
            duration: 0.3,
            ease: "power2.in"
        }, 0)
        .to(link, {
            color: "#4A4A4A",
            duration: 0.25,
            ease: "power2.out"
        }, 0);

        const enter = () => tlHover.play();
        const leave = () => {
            tlHover.reverse();
            tlLeave.play();
        };

        link.addEventListener("pointerenter", enter);
        link.addEventListener("pointerleave", leave);

        cleanup = () => {
            link.removeEventListener("pointerenter", enter);
            link.removeEventListener("pointerleave", leave);
            underline.remove();
        };
    });

    return () => cleanup();
}

/**
 * Инициализация hover эффектов для всех ссылок в контейнере
 */
export function initLinksHover(container: HTMLElement) {
    let cleanup: (() => void)[] = [];

    loadGSAP().then(({gsap}) => {
        if (!gsap) return;

        const links = container.querySelectorAll<HTMLElement>("button");
        cleanup = Array.from(links).map(link => initLinkHover(link));
    });

    return () => {
        cleanup.forEach(fn => fn());
    };
}



