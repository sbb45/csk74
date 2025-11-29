import { browser } from "$app/environment";

let gsapInstance: any = null;
let ScrollTriggerInstance: any = null;

export async function loadGSAP() {
    if (!browser) return { gsap: null, ScrollTrigger: null };

    if (!gsapInstance) {
        const gsapModule = await import("gsap");
        const stModule = await import("gsap/ScrollTrigger");

        const gsap = gsapModule.default;
        const ScrollTrigger = stModule.ScrollTrigger || stModule.default;

        gsap.registerPlugin(ScrollTrigger);

        gsapInstance = gsap;
        ScrollTriggerInstance = ScrollTrigger;
    }

    return { gsap: gsapInstance, ScrollTrigger: ScrollTriggerInstance };
}
