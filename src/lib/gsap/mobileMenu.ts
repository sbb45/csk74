import { loadGSAP } from "$lib/gsap/index";

export async function animateMobileMenuOpen(
    overlay: HTMLElement,
    menu: HTMLElement,
    menuItems: HTMLElement[],
    closeButton: HTMLElement
) {
    const { gsap } = await loadGSAP();
    if (!gsap) return;

    const tl = gsap.timeline();

    // Анимация overlay (фон)
    tl.to(overlay, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
    });

    // Анимация самого меню (появление с верха)
    tl.fromTo(menu, 
        {
            y: -100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out"
        },
        "-=0.2"
    );

    // Анимация кнопки закрытия
    tl.fromTo(closeButton,
        {
            scale: 0,
            rotation: -180,
            opacity: 0
        },
        {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(1.7)"
        },
        "-=0.3"
    );

    // Анимация пунктов меню (появление с задержкой)
    tl.fromTo(menuItems,
        {
            x: -50,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.08
        },
        "-=0.2"
    );

    return tl;
}

export async function animateMobileMenuClose(
    overlay: HTMLElement,
    menu: HTMLElement,
    menuItems: HTMLElement[],
    closeButton: HTMLElement
) {
    const { gsap } = await loadGSAP();
    if (!gsap) return;

    const tl = gsap.timeline();

    // Обратная анимация пунктов меню (более плавно)
    tl.to(menuItems, {
        x: -50,
        opacity: 0,
        duration: 0.35,
        ease: "power1.out",
        stagger: {
            amount: 0.3,
            from: "start"
        }
    });

    // Анимация кнопки закрытия (более плавно)
    tl.to(closeButton, {
        scale: 0.8,
        rotation: 90,
        opacity: 0,
        duration: 0.35,
        ease: "power2.out"
    }, "-=0.15");

    // Анимация самого меню (исчезновение - более плавно, вверх)
    tl.to(menu, {
        y: -60,
        opacity: 0,
        duration: 0.55,
        ease: "power1.out"
    }, "-=0.25");

    // Анимация overlay (самая последняя, плавно)
    tl.to(overlay, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out"
    }, "-=0.2");

    return tl;
}
