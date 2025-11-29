import {loadGSAP} from "$lib/gsap/index";

export async function portfolioScroll(el: HTMLElement){
    const {gsap, ScrollTrigger} = await loadGSAP();
    if(!gsap || ScrollTrigger) return;

    gsap.fromTo(el, {yPercent: 0}, {
        yPercent: -20,
        ScrollTrigger: {
            trigger: el.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
}