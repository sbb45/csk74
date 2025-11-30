import {loadGSAP} from "$lib/gsap/index";

export async function smoothScrollTo(target: string | HTMLElement, offset:number) {
    const { gsap, ScrollSmoother } = await loadGSAP();
    if (!gsap) return;

    let element: HTMLElement | null =
        typeof target === "string"
            ? document.querySelector(target)
            : target;

    if (!element) return;

    const smoother = ScrollSmoother?.get();

    // С ScrollSmoother
    if (smoother) {
        const y = smoother.offset(element, "top") - offset;
        smoother.scrollTo(y, true);
        return;
    }

    // Без ScrollSmoother
    gsap.to(window, {
        duration: 1,
        scrollTo: { y: element, offsetY: offset },
        ease: "power2.out"
    });
}
