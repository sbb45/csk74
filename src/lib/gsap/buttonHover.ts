import {loadGSAP} from "$lib/gsap/index";


export interface ButtonAnimationRefs {
    btn: HTMLElement;
    inner: HTMLElement;
    arrow: SVGSVGElement;
}

// Главная кнопка
export function initButtonAnimation({btn, inner, arrow}:ButtonAnimationRefs){
    let cleanup = () => {};

    loadGSAP().then(({ gsap }) => {
        if (!gsap) return;
        const arrowPath = arrow.querySelector("path");

        const tlHover = gsap.timeline({paused: true});
        const tlPress = gsap.timeline({paused: true});

        tlHover.to(inner, {
                width: "100%",
                duration: 0.35,
                ease: "power2.out"
                }, 0)
            .to(arrowPath, {
                stroke: "#F05A28",
                duration: 0.25,
                ease: "power2.out"
                }, 0)
            .to(arrow, {
                scale: 1.15,
                x: 4,
                duration: 0.35,
                ease: "back.out(2)"
                }, 0.05);

        tlPress.to(inner, {
                scale: 0.97,
                duration: 0.1,
                ease: "power1.out"
                }, 0)
            .to(arrow, {
                x: 6,
                duration: 0.12,
                ease: "power1.out"
                }, 0);

        // Наведение
        const enter = () => tlHover.play();
        const leave = () => {
            tlHover.reverse();
            tlPress.reverse();
        }
        const down = () => tlPress.play();
        const up = () => tlPress.reverse();

        btn.addEventListener("pointerenter", enter);
        btn.addEventListener("pointerleave", leave);
        btn.addEventListener("pointerdown", down);
        btn.addEventListener("pointerup", up);

        cleanup = () => {
            btn.removeEventListener("pointerenter", enter);
            btn.removeEventListener("pointerleave", leave);
            btn.removeEventListener("pointerdown", down);
            btn.removeEventListener("pointerup", up);
        }
    });

    return () => cleanup();
}

// Кнопка в хедере
export function initMagnetButton(btn:HTMLElement){
    let cleanup = () => {};

    loadGSAP().then(({gsap}) => {
        if(!gsap) return;

        const strength = 0.25;

        function onMove(e: PointerEvent){
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width /2);
            const y = e.clientY - (rect.top + rect.height /2);

            gsap.to(btn, {
                x: x * strength,
                y: y * strength,
                duration: 0.35,
                ease: "power3.out"
            });
        }

        function onEnter() {
            gsap.to(btn, {
                scale: 1.03,
                duration: 0.25,
                ease: "power2.out",
            });
        }

        function onLeave() {
            gsap.to(btn, {
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: "power3.out"
            });
        }

        btn.addEventListener("pointerenter", onEnter);
        btn.addEventListener("pointerleave", onLeave);
        btn.addEventListener("pointermove", onMove);

        cleanup = () => {
            btn.removeEventListener("pointerenter", onEnter);
            btn.removeEventListener("pointerleave", onLeave);
            btn.removeEventListener("pointermove", onMove);
        }
    })
    return cleanup();
}