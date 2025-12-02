import { loadGSAP } from "$lib/gsap";

export async function initPortfolioScroll(wrapper: HTMLElement) {
    const { gsap, ScrollTrigger } = await loadGSAP();
    if (!gsap || !ScrollTrigger) return;

    const columns = Array.from(
        wrapper.querySelectorAll<HTMLElement>("[data-portfolio-col]")
    );

    const triggers: gsap.plugins.ScrollTrigger[] = [];

    const distance = 20; // насколько сильно «плавает» колонка (в % от её высоты)

    columns.forEach((col) => {
        // Направление берём из data-атрибута, по умолчанию 1
        const direction = Number(col.dataset.direction ?? "1") || 1;

        const tween = gsap.fromTo(
            col,
            { yPercent: -distance * direction },
            {
                yPercent: distance * direction,
                ease: "none"
            }
        );

        const trigger = ScrollTrigger.create({
            trigger: wrapper,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            animation: tween
        });

        triggers.push(trigger);
    });

    ScrollTrigger.refresh();

    // Вернём функцию очистки для onDestroy
    return () => {
        triggers.forEach((t) => t.kill());
    };
}
