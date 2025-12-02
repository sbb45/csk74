import {loadGSAP} from "$lib/gsap";

export interface InitAboutSection {
    section: HTMLElement,
    btn: HTMLElement,
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
    }, "-=0.4").from(btn, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
    }, 0);

    gsap.from(cards, {
        y:40,
        opacity: 0,
        scale: 0.96,
        duration: 0.4,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
            trigger: cards[0].closest("section"),
            start: "top 40%",
            once: true
        }
    })
}