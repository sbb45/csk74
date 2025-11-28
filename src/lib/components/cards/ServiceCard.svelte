<script lang="ts">
    export let title: string;
    export let desc: string;
    export let icon: string;
    export let type: "black" | undefined = undefined;

    $: cardClasses =
        type === "black"
            ? "bg-dark-gray text-white"
            : "text-black border-t-2 border-black last:border-t-0 first:border-t-0";
</script>

<div class={`w-full h-[198px] flex justify-between items-start flex-col py-4 px-4.5 relative ${cardClasses}`}>
    <img src={icon} alt="Иконка карточки">
    <div>
        <h4 class="font-manrope font-semibold text-2xl leading-6.5 mb-1 max-w-[236px] uppercase">{title}</h4>
        <p
            class="font-manrope font-normal text-base leading-5 text-gray
            {type === undefined ? '' : 'text-white'}
        ">
            {desc}
        </p>
    </div>

    {#if type === "black"}
        <span class="decor top-left"></span>
        <span class="decor top-right"></span>
        <span class="decor bottom-right"></span>
        <span class="decor bottom-left"></span>
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