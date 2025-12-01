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