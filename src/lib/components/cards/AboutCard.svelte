<script lang="ts">
    export let title: string;
    export let description: string;
    export let icon: string;
    export let type: "black" | "cut" | undefined;

    $: cardClasses =
        type === "black"
            ? "bg-dark-gray text-white border-black border-2 rounded-xl"
            : type === "cut"
                ? "bg-dark-gray text-black text-white"
                : "text-black border-black border-2 rounded-xl";
</script>

<div
        class={`w-full h-[184px] flex justify-between items-start flex-col py-4 px-4.5 mb-4 md:mb-0 ${cardClasses}`}
        style={type === 'cut'
		? `-webkit-mask-image:url('/assets/mask-about.svg'); mask-image:url('/assets/mask-about.svg'); mask-size:100% 100%; -webkit-mask-size:100% 100%; mask-repeat:no-repeat; -webkit-mask-repeat:no-repeat;`
		: ''}
>
    <img src={icon} alt="Иконка карточки">
    <div>
        <h4 class="font-manrope font-extrabold text-2xl mb-1">{title}</h4>
        <p
            class="font-manrope font-normal text-base leading-5 text-gray
            {type === undefined ? '' : 'text-white'}
        ">
            {description}
        </p>
    </div>
</div>
