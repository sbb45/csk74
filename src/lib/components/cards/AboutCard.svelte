<script lang="ts">

    export let title: string = "Цена по договору";
    export let description: string = "Фиксируем стоимость в договоре. Никаких скрытых работ и неожиданных доплат.";
    export let icon: string;
    export let type: "black" | undefined;

    $: cardClasses = type === "black" ?
        "bg-dark-gray text-white border-black" :
        "bg-white text-black border-black";
</script>

<div class={`w-full h-[184px] flex justify-between items-start flex-col  border-2 rounded-xl py-4 px-4.5 mb-4 ${cardClasses}`}>
    <img src={icon} alt="Иконка карточки">
    <div>
        <h4 class="font-manrope font-extrabold text-2xl mb-1">{title}</h4>
        <p class="font-manrope font-normal text-base leading-5 {type === 'black' ? '' : 'text-gray'}">{description}</p>
    </div>
</div>