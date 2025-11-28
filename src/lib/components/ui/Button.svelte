<script lang="ts">
    import btnArrow from '$lib/assets/icons/arrow-btn.svg';

    export let text: string = "Связаться";
    export let href: string = "#";
    export let type: "button" | "link" = "link";
    export let className: string = "";
</script>

{#if type === "button"}
<button type="submit" class={`flex justify-between items-center relative bg-primary text-primary w-full h-12.5 rounded-full p-1 ${className}`}>
    <p class="z-2 font-bounded text-lg font-normal bg-white rounded-full h-full w-full flex justify-center items-center">
        {text}
    </p>
    <img src={btnArrow} alt="Стрелочка">
</button>
{:else}
    <a href={href} class={`flex justify-between items-center relative bg-primary text-primary w-full h-12.5 rounded-full p-1 ${className}`}>
        <p class="z-2 font-bounded text-lg font-normal bg-white rounded-full h-full w-full flex justify-center items-center">
            {text}
        </p>
        <img src={btnArrow} alt="Стрелочка">
    </a>
{/if}