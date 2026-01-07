import {loadGSAP} from "$lib/gsap";

/**
 * Hover эффект для карточек услуг и о нас
 * Плавное увеличение масштаба и легкий подъем
 */
export function initCardHover(card: HTMLElement) {
    let cleanup = () => {};

    loadGSAP().then(({gsap}) => {
        if (!gsap) return;

        const icon = card.querySelector("img");
        const title = card.querySelector("h4");
        const desc = card.querySelector("p");

        const tlHover = gsap.timeline({paused: true});
        const tlLeave = gsap.timeline({paused: true});

        // Hover анимация
        tlHover.to(icon, {
            scale: 1.05,
            duration: 0.35,
            ease: "back.out(1.5)"
        }, 0)

        // Leave анимация
        tlLeave.to(icon, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        }, 0)

        const enter = () => tlHover.play();
        const leave = () => {
            tlHover.reverse();
            tlLeave.play();
        };

        // Только для десктопа
        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            card.addEventListener("pointerenter", enter);
            card.addEventListener("pointerleave", leave);
        });

        cleanup = () => {
            mm.revert();
            card.removeEventListener("pointerenter", enter);
            card.removeEventListener("pointerleave", leave);
        };
    });

    return () => cleanup();
}

/**
 * Hover эффект для карточек отзывов
 * Более тонкий эффект с акцентом на изображение
 */
export function initReviewCardHover(card: HTMLElement) {
    let cleanup = () => {};

    loadGSAP().then(({gsap}) => {
        if (!gsap) return;

        const image = card.querySelector("img");
        const content = card.querySelector("div");

        const tlHover = gsap.timeline({paused: true});

        tlHover.to(card, {
            y: -6,
            scale: 1.015,
            duration: 0.4,
            ease: "power2.out"
        }, 0)
        .to(image, {
            scale: 1.05,
            duration: 0.5,
            ease: "power2.out"
        }, 0)
        .to(content, {
            y: -3,
            duration: 0.35,
            ease: "power2.out"
        }, 0.1);

        const enter = () => tlHover.play();
        const leave = () => tlHover.reverse();

        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            card.addEventListener("pointerenter", enter);
            card.addEventListener("pointerleave", leave);
        });

        cleanup = () => {
            mm.revert();
            card.removeEventListener("pointerenter", enter);
            card.removeEventListener("pointerleave", leave);
        };
    });

    return () => cleanup();
}






