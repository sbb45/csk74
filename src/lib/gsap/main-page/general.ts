import {loadGSAP} from "$lib/gsap";

export function initHeader ({header}:{header: HTMLElement}){
    let cleanup = () => {};

    loadGSAP().then(({gsap})=>{
        if(!gsap) return;

        const tl = gsap.timeline({delay: 0.1});

        tl.to(header, {
            top: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
        }, 0.4);

        cleanup = () =>{
            tl.kill();
        }
    });
    return cleanup()
}

export async function initTitle(section: HTMLElement) {
    const { gsap, ScrollTrigger } = await loadGSAP();
    if (!gsap || !ScrollTrigger) return;

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
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }).from(desc, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.4");
}

