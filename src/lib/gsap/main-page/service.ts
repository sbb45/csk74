import {loadGSAP} from "$lib/gsap";

export async function titleScroll(section: HTMLElement){
    const {gsap, ScrollTrigger} = await loadGSAP();
    if(!gsap || !ScrollTrigger) return;

    const left = section.querySelector<HTMLElement>("[data-services-left]");
    const rightMobile = section.querySelector<HTMLElement>('[data-services-right="mobile"]');
    const rightDesktop = section.querySelector<HTMLElement>('[data-services-right="desktop"]');
    if(!left) return;

    const mm = gsap.matchMedia();

    const animateCards = (container: HTMLElement) => {
        const cards = container.querySelectorAll<HTMLElement>(".service-card");
        if (!cards.length) return;

        return gsap.from(cards, {
            y: 48,
            opacity: 0,
            rotateX: -8,
            transformOrigin: "center top",
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger:{
                trigger: container,
                start: "top 45%",
                end: "bottom 55%",
                once: true
            }
        });
    };

    mm.add("(min-width: 1024px)", () => {
        if(!rightDesktop) return;

        const pinTrigger = ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: () => `+=${Math.max(0, rightDesktop.offsetHeight - left.offsetHeight)}`,
            pin: left,
            pinSpacing: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true
        });

        const cardsTween = animateCards(rightDesktop);

        return () => {
            pinTrigger.kill();
            cardsTween?.scrollTrigger?.kill();
            cardsTween?.kill();
        };
    });

    mm.add("(max-width: 1023px)", () => {
        const container = window.matchMedia("(min-width: 768px)").matches ? rightDesktop : rightMobile;
        if (!container) return;
        const cardsTween = animateCards(container);

        return () => {
            cardsTween?.scrollTrigger?.kill();
            cardsTween?.kill();
        };
    });

    return () => mm.revert();
}
