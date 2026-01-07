import {loadGSAP} from "$lib/gsap";

/**
 * Focus эффект для инпутов формы
 * Плавное увеличение масштаба и изменение border
 */
export function initInputFocus(input: HTMLInputElement | HTMLTextAreaElement) {
    let cleanup = () => {};

    loadGSAP().then(({gsap}) => {
        if (!gsap) return;

        // Сохраняем оригинальный стиль
        const originalStyle = {
            border: input.style.border,
            boxShadow: input.style.boxShadow
        };

        const tlFocus = gsap.timeline({paused: true});
        const tlBlur = gsap.timeline({paused: true});

        tlFocus.to(input, {
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
        }, 0)
        .to(input, {
            boxShadow: "0 0 0 3px rgba(240, 90, 40, 0.15)",
            duration: 0.25,
            ease: "power2.out"
        }, 0);

        tlBlur.to(input, {
            scale: 1,
            duration: 0.25,
            ease: "power2.out"
        }, 0)
        .to(input, {
            boxShadow: "0 0 0 0px rgba(240, 90, 40, 0)",
            duration: 0.2,
            ease: "power2.out"
        }, 0);

        const focus = () => tlFocus.play();
        const blur = () => {
            tlFocus.reverse();
            tlBlur.play();
        };

        input.addEventListener("focus", focus);
        input.addEventListener("blur", blur);

        cleanup = () => {
            input.removeEventListener("focus", focus);
            input.removeEventListener("blur", blur);
            // Восстанавливаем оригинальный стиль
            input.style.border = originalStyle.border;
            input.style.boxShadow = originalStyle.boxShadow;
        };
    });

    return () => cleanup();
}

/**
 * Инициализация focus эффектов для всех инпутов в форме
 */
export function initFormInputs(form: HTMLFormElement) {
    let cleanup: (() => void)[] = [];

    loadGSAP().then(({gsap}) => {
        if (!gsap) return;

        const inputs = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input[type='text'], input[type='tel'], input[type='email'], textarea");
        cleanup = Array.from(inputs).map(input => initInputFocus(input));
    });

    return () => {
        cleanup.forEach(fn => fn());
    };
}






