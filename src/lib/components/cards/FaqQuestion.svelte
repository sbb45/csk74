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
    <button class="px-2 h-18 flex justify-between items-center gap-8 w-full lg:px-4 lg:h-22 2xl:h-32" on:click={toggle}>
        <h4 class="font-bounded font-medium text-base leading-5 text-left
            md:text-xl md:leading-6
            lg:text-2xl lg:leading-7
            2xl:text-3xl
        ">
            {question}
        </h4>
        <img
             src={plus}
             alt="Подробнее"
             bind:this={iconRef}
             class="transition-transform duration-200 lg:w-9 2xl:w-12"
        >
    </button>

    <div class="overflow-hidden"
         style="height: 0; opacity: 0"
         bind:this={contentRef}
    >
        <div class="px-2 pb-4 lg:px-4 lg:pb-8 2xl:pb-12">
            <p class="font-manrope text-gray text-[15px] leading-5 md:text-lg md:leading-6 lg:text-xl lg:max-w-[90%] 2xl:text-2xl 2xl:leading-7 2xl:max-w-[80%]">
                {answer}
            </p>
        </div>
    </div>
</div>