import {loadGSAP} from "$lib/gsap";

/**
 * Стильная анимация появления футера при скролле
 * Элементы появляются снизу с эффектом волны
 */
export async function initFooterReveal(footer: HTMLElement) {
    const {gsap, ScrollTrigger} = await loadGSAP();
    if (!gsap || !ScrollTrigger) return;

    const title = footer.querySelector("h3");
    const linksContainer = footer.querySelector("ul");
    const contacts = footer.querySelector(".contacts");
    const bottomLinks = footer.querySelector(".font-bounded.text-gray");

    // Фильтруем только существующие элементы
    const elements = [title, linksContainer, contacts, bottomLinks].filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // Устанавливаем начальное состояние
    gsap.set(elements, {
        opacity: 0,
        y: 80
    });

    // Проверяем, виден ли футер уже при загрузке страницы
    const checkVisibility = () => {
        const rect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Если верхняя часть футера уже видна на 90% высоты экрана
        // или если футер находится в видимой области
        return rect.top < windowHeight * 0.9 && rect.top > -rect.height;
    };

    let cleanupFunctions: Array<() => void> = [];
    let tl: gsap.core.Timeline | null = null;
    let staggerAnim: gsap.core.Tween | null = null;

    // Даем небольшую задержку для правильного расчета позиций после навигации
    // Используем requestAnimationFrame для гарантии, что DOM и ScrollSmoother готовы
    const checkAndAnimate = () => {
        // Если футер уже виден, показываем контент сразу
        if (checkVisibility()) {
            const anim = gsap.to(elements, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.1
            });
            cleanupFunctions.push(() => anim.kill());
            return true; // Указываем, что анимация уже запущена
        }
        return false;
    };

    // Проверяем сразу и с небольшой задержкой (для ScrollSmoother)
    const tryAnimate = () => {
        if (checkAndAnimate()) {
            return; // Уже анимировали
        }
        // Если не видно, настраиваем ScrollTrigger
        setupScrollTrigger();
    };

    // Сначала пробуем немедленно
    if (!checkAndAnimate()) {
        // Если не видно, ждем следующего кадра и настраиваем ScrollTrigger
        requestAnimationFrame(tryAnimate);
    }

    function setupScrollTrigger() {
        tl = gsap.timeline({
            scrollTrigger: {
                trigger: footer,
                start: "top 90%",
                once: true
            }
        });

        // Заголовок появляется первым с эффектом масштаба
        if (title) {
            tl.to(title, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.9,
                ease: "power3.out"
            }, 0);
        }

        // Ссылки появляются с задержкой
        if (linksContainer) {
            tl.to(linksContainer, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            }, 0.25);
        }

        // Контакты появляются с задержкой
        if (contacts) {
            tl.to(contacts, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            }, 0.35);
        }

        // Нижние ссылки появляются последними
        if (bottomLinks) {
            tl.to(bottomLinks, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out"
            }, 0.5);
        }

        // Анимация для ссылок внутри списка (stagger эффект)
        if (linksContainer) {
            const links = linksContainer.querySelectorAll<HTMLElement>("li");
            if (links.length > 0) {
                staggerAnim = gsap.from(links, {
                    opacity: 0,
                    y: 40,
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: linksContainer,
                        start: "top 90%",
                        once: true
                    }
                });
                cleanupFunctions.push(() => {
                    if (staggerAnim?.scrollTrigger) {
                        const trigger = ScrollTrigger.getById(staggerAnim.scrollTrigger.vars.id);
                        trigger?.kill();
                    }
                    staggerAnim?.kill();
                });
            }
        }

        cleanupFunctions.push(() => {
            if (tl) {
                if (tl.scrollTrigger) {
                    const trigger = ScrollTrigger.getById(tl.scrollTrigger.vars.id);
                    trigger?.kill();
                }
                tl.kill();
            }
        });
    }

    return () => {
        cleanupFunctions.forEach(fn => fn());
    };
}

