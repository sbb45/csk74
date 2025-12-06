import {loadGSAP} from "$lib/gsap";

/**
 * Анимация появления текста при скролле с эффектом маски
 * Используется для заголовков и описаний
 */
export async function initTextReveal(element: HTMLElement) {
    const {gsap, ScrollTrigger} = await loadGSAP();
    if (!gsap || !ScrollTrigger) return;

    // Создаем маску для текста
    const mask = document.createElement("div");
    mask.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        transform-origin: left;
    `;
    
    const parent = element.parentElement;
    if (!parent) return;
    
    parent.style.position = "relative";
    parent.appendChild(mask);

    gsap.set(element, {opacity: 1});

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            once: true
        }
    });

    tl.from(element, {
        x: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
    }, 0)
    .to(mask, {
        scaleX: 0,
        duration: 0.8,
        ease: "power3.inOut"
    }, 0);

    return () => {
        mask.remove();
        tl.kill();
    };
}

/**
 * Анимация появления текста с эффектом волны
 * Для длинных текстовых блоков
 */
export async function initTextWave(element: HTMLElement) {
    const {gsap, ScrollTrigger} = await loadGSAP();
    if (!gsap || !ScrollTrigger) return;

    const words = element.textContent?.split(" ") || [];
    if (words.length === 0) return;

    // Обертываем каждое слово в span
    element.innerHTML = words.map((word, i) => 
        `<span style="display: inline-block; opacity: 0;">${word}</span>`
    ).join(" ");

    const spans = element.querySelectorAll<HTMLElement>("span");

    gsap.from(spans, {
        y: 20,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.03,
        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true
        }
    });

    return () => {
        // Восстанавливаем оригинальный текст при cleanup
        element.textContent = words.join(" ");
    };
}



