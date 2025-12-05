<script lang="ts">
    export let id: number;
    export let title: string;
    export let desc: string;
    export let icon: string;
    export let type: "black" | undefined = undefined;
    export let className: string;

    $: cardClasses =
        type === "black"
            ? "bg-dark-gray text-white md:rounded-br-[6px] xl:rounded-br-[12px] 2xl:rounded-br-[20px]"
            : "text-black border-t-2 border-black last:border-t-0 first:border-t-0";
</script>

<div class={`w-full h-[198px] flex justify-between items-start flex-col py-4 px-4.5 relative
            md:h-[340px] md:gap-y-6 md:justify-center
            xl:h-[380px] xl:px-6
            2xl:h-[440px] 2xl:gap-y-8
            ${cardClasses}
            ${className}
            ${id === 2 ? 'md:border-b-2 md:border-b-black' : ''}`}
>
    <img src={icon} alt="Иконка карточки" class="md:w-19 2xl:w-22">
    <div>
        <h4 class="font-manrope font-semibold text-2xl leading-6.5 mb-1 max-w-[236px] uppercase
            md:text-2xl md:leading-8 md:max-w-[280px] md:mb-3
            xl:text-[28px]
            2xl:text-[30px] 2xl:leading-8.5 2xl:font-medium 2xl:mb-4
        ">
            {title}
        </h4>
        <p
            class="font-manrope font-normal text-base leading-5 text-gray
            md:text-lg md:max-w-[300px]
            xl:text-xl xl:leading-6
            2xl:text-[22px] 2xl:leading-6.5
            {type === undefined ? '' : 'text-white'}
        ">
            {desc}
        </p>
    </div>

    {#if type === "black"}
        <span class="decor top-left"></span>
        <span class="decor bottom-left"></span>
        <span class="decor bottom-right md:hidden"></span>
        <span class="decor top-right md:hidden"></span>
    {/if}
</div>

<style>
    .decor {
        position: absolute;
        width: 37px;
        height: 25px;
        background: url('/assets/rounded.svg') no-repeat center / contain;
    }
    .top-left    { top: -24px; left: -4px; transform: scaleX(-1);}
    .top-right   { top: -24px; right: -4px; }
    .bottom-right{ bottom: -24px; right: -4px; transform: rotate(180deg) scaleX(-1); }
    .bottom-left { bottom: -24px; left: -4px; transform: rotate(180deg) }
</style>