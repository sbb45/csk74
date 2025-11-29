<script lang="ts">
    import plus from  "$lib/assets/icons/plus.svg"
    import {faqToggle} from "$lib/gsap/faqToggle";

    export let question: string = "";
    export let answer: string = "";
    export let isFirst = false;

    let contentRef: HTMLElement;
    let iconRef: HTMLElement;
    let isOpen: boolean;

    function toggle(){
        faqToggle(contentRef, iconRef, isOpen);
        isOpen = !isOpen;
    }
</script>

<div class={`border-b border-black mx-2 ${isFirst ? 'border-t border-black' : ''}`}>
    <button class="px-2 h-18 flex justify-between items-center gap-8 w-full" on:click={toggle}>
        <h4 class="font-bounded font-medium text-base leading-5 text-left">{question}</h4>
        <img
             src={plus}
             alt="Подробнее"
             bind:this={iconRef}
             class="transition-transform duration-200"
        >
    </button>

    <div class="overflow-hidden"
         style="height: 0; opacity: 0"
         bind:this={contentRef}
    >
        <div class="px-2 pb-4">
            <p class="font-manrope text-gray text-[15px] leading-5">
                {answer}
            </p>
        </div>
    </div>
</div>