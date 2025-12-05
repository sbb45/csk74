import {loadGSAP} from "$lib/gsap";

export async function initContacts(section: HTMLElement){
    const {gsap, ScrollTrigger} = await loadGSAP();
    if(!gsap || !ScrollTrigger) return;

    const leftText = section.querySelectorAll(".text");
    const cutting = section.querySelectorAll(".cutting");
    const rightForm = section.querySelector("form");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 70%",
            once: true
        }
    });

    tl.from(leftText, {
        x: -100,
        opacity: 0,
        duration: 0.35,
        ease: "power2.out",
    })
        .from(rightForm, {
            x: 100,
            opacity: 0,
            duration: 0.35,
            ease: "power2.out",
        }).from(cutting, {
            x: -100,
            opacity: 0,
            duration: 0.45,
            ease: "power2.out",
        }, 0.4);

}
