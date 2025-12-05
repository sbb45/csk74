import {loadGSAP} from "$lib/gsap";

export interface InitAboutSection {
    section: HTMLElement,
    btn?: HTMLElement | null,
    cards: HTMLElement[],
}

export async function initAboutSection({
    section,
    btn,
    cards
}: InitAboutSection) {
    const { gsap, ScrollTrigger } = await loadGSAP();
    if (!gsap || !ScrollTrigger) return;

    const title = section.querySelector(".title-section");
    const desc = section.querySelector(".desc-section");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 40%",
            once: true
        }
    });

    tl.from(title, {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }).from(desc, {
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.4");

    if (btn) {
        tl.from(btn, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        }, 0);
    }

    const cardList = cards.filter((card): card is HTMLElement => Boolean(card));
    const cardsTrigger = section ?? cardList[0]?.closest("section");
    if (!cardList.length || !cardsTrigger) return;

    gsap.from(cardList, {
        y: 50,
        opacity: 0,
        scale: 0.94,
        rotateX: -6,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.14,
        scrollTrigger: {
            trigger: cardsTrigger,
            start: "top 55%",
            once: true
        }
    });
}
