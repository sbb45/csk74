<script lang="ts">
    export let title: string;
    export let desc: string;
    export let icon: string;
    export let className: string = "";
    export let type: "black" | "cut" | undefined;

    $: cardClasses =
        type === "black"
            ? "bg-dark-gray text-white border-black border-2 rounded-xl xl:rounded-2xl"
            : type === "cut"
                ? "bg-dark-gray text-black text-white"
                : "text-black border-black border-2 rounded-2xl";
</script>

<div
    class={`w-full h-[184px] flex justify-between items-start flex-col py-4 px-4.5 mb-4 md:mb-0 lg:h-[200px]
        ${cardClasses} ${className}
        rounded-[24px] overflow-hidden
        ${type === "cut" ? "cut" : ""}
        xl:h-auto xl:max-h-[432px] xl:py-6
        2xl:py-8 2xl:px-6 2xl:max-h-[540px]
    `}
>
    <div>
        <img src={icon} alt="Иконка карточки" class="xl:h-14 2xl:h-16">
        <h4 class="hidden xl:block font-manrope font-extrabold text-[30px] leading-8 mt-3 2xl:text-[36px]">
            {title}
        </h4>
    </div>

    <div>
        <h4 class="xl:hidden font-manrope font-extrabold text-2xl mb-1">{title}</h4>
        <p class="font-manrope font-normal text-base leading-5 text-gray xl:text-lg xl:leading-6 2xl:text-[22px] 2xl:leading-6 {type ? 'text-white' : ''}">
            {desc}
        </p>
    </div>
</div>

<style>
    .cut {
        -webkit-mask-image: url('/assets/mask-about.svg');
        mask-image: url('/assets/mask-about.svg');
        mask-size: 100% 100%;
        -webkit-mask-size: 100% 100%;
        mask-repeat: no-repeat;
        -webkit-mask-repeat: no-repeat;
    }
    @media (min-width: 1280px) {
        .cut{
            -webkit-mask-image: url('/assets/mask-about_desktop.svg');
            mask-image: url('/assets/mask-about_desktop.svg');
        }
    }
</style>
