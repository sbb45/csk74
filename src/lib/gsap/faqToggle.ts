import {loadGSAP} from "$lib/gsap/index";

export async function faqToggle (
    content: HTMLElement,
    icon: HTMLElement,
    isOpen: boolean
){
    const {gsap} = await loadGSAP();
    if(!gsap) return;

    if(isOpen){
        gsap.to(content, {
            height: 0,
            opacity: 0,
            duration: 0.35,
            ease: "power2.inOut",
        });
        gsap.to(icon, {
            rotate: 0,
            duration: 0.3,
            ease: "power2.inOut",
        });
    }else{
        gsap.set(content, {height: "auto", opacity: 1})
        gsap.from(content, {
            height: 0,
            duration: 0.35,
            ease: "power2.inOut",
        });
        gsap.to(icon, {
            rotate: 45,
            duration: 0.3,
            ease: "power2.inOut",
        });
    }
}