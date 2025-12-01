import {loadGSAP} from "$lib/gsap";
import Button from "$lib/components/ui/Button.svelte";

export interface HeroRefs {
    section: HTMLElement;
    img: HTMLImageElement;
    title1: HTMLElement;
    title2: HTMLElement;
    subtitle: HTMLElement;
    btn: HTMLElement;
    maskTop: HTMLElement;
    maskBottom: HTMLElement;
}

export function initHeroReveal({
      section,
      img,
      title1,
      title2,
      subtitle,
      btn,
      maskTop,
      maskBottom
}: HeroRefs) {
    let cleanup = () => {};

    loadGSAP().then(({gsap}) => {
        if(!gsap) return;
        gsap.set(section, {opacity: 1});

        const tl = gsap.timeline({delay:0.1});

        tl.fromTo(img,
            {
                scale: 1.12,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 1.4,
                ease: "power3.out"
            }
        )

            // 2. Нижний скос
            .from(maskBottom, {
                y: 340,
                duration: 0.6,
                ease: "power2.out"
            }, 0.6)

            // 3. Верхний треугольник
            .from(maskTop, {
                y: -200,
                duration: 0.6,
                ease: "power2.out"
            }, 0.6)

            // Кнопка
            .from(btn, {
                x: 80,
                opacity: 0,
                duration: 0.5,
                ease: "power.out"
            }, 0.45)

            // 4. Текст
            .from(title1, {
                x: 100,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out"
            }, 0.3)
            .from(title2, {
                x: -100,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out"
            }, 0.38)
            .from(subtitle, {
                x: -80,
                opacity: 0,
                duration: 0.5,
                ease: "power2.out"
            }, 0.45);

        cleanup = () => {
            tl.kill();
        };
    });

    return cleanup;
}