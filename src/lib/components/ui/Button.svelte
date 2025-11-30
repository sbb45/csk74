<script lang="ts">
    import btnArrow from '$lib/assets/icons/arrow-btn.svg';

    export let text: string = "Связаться";
    export let href: string = "#";
    export let type: "button" | "link" = "link";
    export let className: string = "";
</script>

<svelte:element this={type === "button" ? "button" : "a"}
                type={type === "button" ? "submit" : undefined}
                href={type !== "button" ? href : undefined}
                class={`flex justify-between items-center relative bg-primary text-primary w-full h-12.5 rounded-full p-1 2xl:h-14 ${className}`}
>
    <p class="z-2 font-bounded text-lg font-normal bg-white rounded-full h-full w-full flex justify-center items-center 3xl:text-xl">
        {text}
    </p>
    <img src={btnArrow} alt="Стрелочка">
</svelte:element>

