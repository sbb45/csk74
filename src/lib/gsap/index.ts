import { browser } from "$app/environment";

let gsapInstance: any = null; // Сам GSAP
let ScrollTriggerInstance: any = null; // Тригер скрола
let ScrollSmootherInstance: any = null; // Плавная прокрутка
let ScrollToPluginInstance: any = null; // Плавная прокрутка к секции

export async function loadGSAP() {
    if (!browser) return {
        gsap: null,
        ScrollTrigger: null,
        ScrollToPlugin: null,
        ScrollSmoother: null
    };

    if (!gsapInstance) {
        const gsapModule = await import("gsap");
        const stModule = await import("gsap/ScrollTrigger");
        const stpModule = await import("gsap/ScrollToPlugin");
        const smModule = await import("gsap/ScrollSmoother");

        const gsap = gsapModule.default;

        const ScrollTrigger = stModule.ScrollTrigger || stModule.default;
        const ScrollToPlugin = stpModule.ScrollToPlugin || stpModule.default;
        const ScrollSmoother = smModule.ScrollSmoother || smModule.default;

        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

        gsapInstance = gsap;
        ScrollTriggerInstance = ScrollTrigger;
        ScrollToPluginInstance = ScrollToPlugin;
        ScrollSmootherInstance = ScrollSmoother;
    }

    return {
        gsap: gsapInstance,
        ScrollTrigger: ScrollTriggerInstance,
        ScrollToPlugin: ScrollToPluginInstance,
        ScrollSmoother: ScrollSmootherInstance
    };
}
