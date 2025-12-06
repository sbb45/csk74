import {loadGSAP} from "$lib/gsap";

/**
 * Hover эффект для иконок в карточках
 * Легкое вращение и увеличение
 */
export function initIconHover(icon: HTMLImageElement) {
    let cleanup = () => {};

    loadGSAP().then(({gsap}) => {
        if (!gsap) return;

        const card = icon.closest("div");
        if (!card) return;

        const tlHover = gsap.timeline({paused: true});

        tlHover.to(icon, {
            scale: 1.15,
            rotation: 8,
            duration: 0.4,
            ease: "back.out(1.7)"
        }, 0);

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

/**
 * Hover эффект для социальных иконок в футере
 * Увеличение с легким bounce эффектом
 */
export function initSocialIconHover(icon: HTMLAnchorElement) {
    let cleanup = () => {};

    loadGSAP().then(({gsap}) => {
        if (!gsap) return;

        const img = icon.querySelector("img");
        if (!img) return;

        const tlHover = gsap.timeline({paused: true});
        const tlPress = gsap.timeline({paused: true});

        tlHover.to(img, {
            scale: 1.1,
            rotation: 5,
            duration: 0.35,
            ease: "back.out(2)"
        }, 0);

        tlPress.to(img, {
            scale: 0.9,
            duration: 0.15,
            ease: "power1.out"
        }, 0);

        const enter = () => tlHover.play();
        const leave = () => {
            tlHover.reverse();
            tlPress.reverse();
        };
        const down = () => tlPress.play();
        const up = () => tlPress.reverse();

        icon.addEventListener("pointerenter", enter);
        icon.addEventListener("pointerleave", leave);
        icon.addEventListener("pointerdown", down);
        icon.addEventListener("pointerup", up);

        cleanup = () => {
            icon.removeEventListener("pointerenter", enter);
            icon.removeEventListener("pointerleave", leave);
            icon.removeEventListener("pointerdown", down);
            icon.removeEventListener("pointerup", up);
        };
    });

    return () => cleanup();
}



