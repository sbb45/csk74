import {loadGSAP} from "$lib/gsap";

export async function initReview(section: HTMLElement){
    const {gsap, ScrollTrigger} = await loadGSAP();
    if(!gsap || !ScrollTrigger) return;

    const cards = section.querySelectorAll(".card");
    const title = section.querySelector(".title-section");
    const desc = section.querySelector(".desc-section");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 70%",
            once: true
        }
    });

    tl.from(title, {
        x: -50,
        opacity: 0,
        duration: 0.35,
        ease: "power2.out",
    }).from(desc, {
        x: -80,
        opacity: 0,
        duration: 0.65,
        ease: "power2.out",
    }, 0.2)

    tl.from(cards, {
        x: -48,
        opacity: 0,
        rotateX: -8,
        transformOrigin: "center top",
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.12,
    }, 0.1);


}
