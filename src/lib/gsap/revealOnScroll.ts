import {loadGSAP} from "$lib/gsap/index";

export async function revealOnScroll (el: HTMLElement) {
    const {gsap, ScrollTrigger} = await loadGSAP();
    if (!gsap || !ScrollTrigger) return;

    gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
            trigger: el,
            start: 'top 80%',
        }
    });
}