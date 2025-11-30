import { browser } from "$app/environment";

let gsapInstance: any = null; // Сам GSAP
let ScrollTriggerInstance: any = null; // Тригер скрола
let ScrollSmootherInstance: any = null; // Плавная прокрутка
let ScrollToPluginInstance: any = null; // Плавная прокрутка к секции

export async function loadGSAP() {
    if (!browser) return { gsap: null, ScrollTrigger: null, ScrollSmoother: null };

    if (!gsapInstance) {
        const gsapModule = await import("gsap");
        const stModule = await import("gsap/ScrollTrigger");
        const ssModule = await import("gsap/ScrollSmoother");
        const stpModule = await import("gsap/ScrollToPlugin");

        const gsap = gsapModule.default;
        const ScrollTrigger = stModule.ScrollTrigger || stModule.default;
        const ScrollSmoother = ssModule.ScrollSmoother || ssModule.default;
        const ScrollToPlugin = stpModule.ScrollToPlugin || stpModule.default;

        gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

        gsapInstance = gsap;
        ScrollTriggerInstance = ScrollTrigger;
        ScrollSmootherInstance = ScrollSmoother;
        ScrollToPluginInstance = ScrollToPlugin;
    }

    return {
        gsap: gsapInstance,
        ScrollTrigger: ScrollTriggerInstance,
        ScrollSmoother: ScrollSmootherInstance,
        ScrollToPlugin: ScrollToPluginInstance
    };
}
