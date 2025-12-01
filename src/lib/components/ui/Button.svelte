<script lang="ts">
    import {onMount} from "svelte";
    import {initButtonAnimation} from "$lib/gsap/buttonHover";

    export let text: string = "Связаться";
    export let href: string = "#";
    export let type: "button" | "link" = "link";
    export let className: string = "";

    let btn: HTMLElement;
    let inner: HTMLElement;
    let arrow: SVGSVGElement;

    onMount(() => {
        const cleanup = initButtonAnimation({ btn, inner, arrow });
        return cleanup;
    });
</script>

<svelte:element
        bind:this={btn}
        this={type === "button" ? "button" : "a"}
        type={type === "button" ? "submit" : undefined}
        href={type !== "button" ? href : undefined}
        class={`group flex justify-between items-center relative bg-primary text-primary w-full h-12.5 rounded-full p-1 2xl:h-14 ${className}`}
>
    <p
       bind:this={inner}
       style="width: 88%"
       class="z-2 font-bounded text-lg font-normal bg-white rounded-full h-full w-full flex justify-center items-center 3xl:text-xl">
        {text}
    </p>
    <svg
            bind:this={arrow}
            width="50"
            height="47"
            viewBox="0 0 47 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute top-1/2 -translate-y-1/2 right-0 z-4"
    >
        <path
                d="M19.2306 29.1667L26.923 21.875L19.2306 14.5834"
                stroke="#F3F1EF"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
        />
    </svg>
</svelte:element>
