import {loadGSAP} from "$lib/gsap";

/**
 * Hover эффект для изображений в карточках отзывов
 * Плавное увеличение с эффектом parallax
 */
export function initImageHover(image: HTMLImageElement) {
    let cleanup = () => {};

    loadGSAP().then(({gsap}) => {
        if (!gsap) return;

        const container = image.closest("div");
        if (!container) return;

        // Устанавливаем overflow для контейнера
        container.style.overflow = "hidden";

        const tlHover = gsap.timeline({paused: true});

        tlHover.to(image, {
            scale: 1.1,
            duration: 0.5,
            ease: "power2.out"
        }, 0);

        const enter = () => tlHover.play();
        const leave = () => tlHover.reverse();

        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            container.addEventListener("pointerenter", enter);
            container.addEventListener("pointerleave", leave);
        });

        cleanup = () => {
            mm.revert();
            container.removeEventListener("pointerenter", enter);
            container.removeEventListener("pointerleave", leave);
        };
    });

    return () => cleanup();
}

/**
 * Parallax эффект для изображения при движении мыши
 */
export function initImageParallax(image: HTMLImageElement) {
    let cleanup = () => {};

    loadGSAP().then(({gsap}) => {
        if (!gsap) return;

        const container = image.closest("div");
        if (!container) return;

        container.style.overflow = "hidden";

        const strength = 0.15;

        let currentTween: any = null;

        function onMove(e: PointerEvent) {
            const rect = container.getBoundingClientRect();
            const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
            const y = (e.clientY - (rect.top + rect.height / 2)) * strength;

            // Останавливаем предыдущую анимацию если есть
            if (currentTween) {
                currentTween.kill();
            }

            currentTween = gsap.to(image, {
                x: x,
                y: y,
                scale: 1.05,
                duration: 0.6,
                ease: "power2.out"
            });
        }

        function onEnter() {
            // Останавливаем любые активные анимации
            if (currentTween) {
                currentTween.kill();
            }
            
            currentTween = gsap.to(image, {
                scale: 1.05,
                duration: 0.4,
                ease: "power2.out"
            });
        }

        function onLeave() {
            // Останавливаем любые активные анимации
            if (currentTween) {
                currentTween.kill();
            }

            // Всегда возвращаем изображение в центр плавно
            currentTween = gsap.to(image, {
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: "power3.out",
                onComplete: () => {
                    // Убеждаемся что изображение точно в центре
                    gsap.set(image, { x: 0, y: 0, scale: 1 });
                    currentTween = null;
                }
            });
        }

        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            container.addEventListener("pointerenter", onEnter);
            container.addEventListener("pointerleave", onLeave);
            container.addEventListener("pointermove", onMove);
        });

        cleanup = () => {
            mm.revert();
            container.removeEventListener("pointerenter", onEnter);
            container.removeEventListener("pointerleave", onLeave);
            container.removeEventListener("pointermove", onMove);
        };
    });

    return () => cleanup();
}

