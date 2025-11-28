<script lang="ts">
    import Button from "$lib/components/ui/Button.svelte";
    import construction from "$lib/assets/icons/services/construction.svg";
    import projectHome from "$lib/assets/icons/services/project_home.svg";
    import houseRoof from "$lib/assets/icons/services/houseroof.svg";
    import hammer from "$lib/assets/icons/services/hammer.svg";
    import doorOpen from "$lib/assets/icons/services/door_open.svg";
    import ServiceCard from "$lib/components/cards/ServiceCard.svelte";

    interface Card {
        id: number;
        title: string;
        desc: string;
        icon: string;
        type?: "black";
    }

    const cards: Card[] = [
        {id: 0, title: "Проектирование и смета", desc: "Продумываем конструкцию и считаем прозрачную смету без скрытых работ.", icon: construction},
        {id: 1, title: "Силовой каркас и перекрытия", desc: "Возводим коробку дома с соблюдением геометрии, утепления и технологии.", icon: projectHome},
        {id: 2, title: "Монтаж кровли", desc: "Монтаж кровлиУстанавливаем крышу с аккуратными примыканиями и качественными материалами.", icon: houseRoof},
        {id: 3, title: "Наружная отделка фасада", desc: "Планкен, сайдинг, имитация бруса — монтируем аккуратно и технологично.", icon: hammer, type: "black"},
        {id: 4, title: "Установка окон и дверей", desc: "Монтируем окна и двери без мостиков холода с герметичными примыканиями.", icon: doorOpen},
    ]
</script>

<section class="px-4">
    <h2 class="title-section">Что мы делаем для клиента</h2>
    <p class="font-manrope font-normal text-gray text-lg leading-5.5">Мы подходим к каждому проекту аккуратно и честно.<br/> Наша задача — чистая работа и результат, за который не стыдно.</p>
    <div class="border-2 border-black rounded-xl flex flex-col justify-center items-start mt-6">
        {#each cards as card (card.id)}
            <ServiceCard {...card} />
        {/each}
    </div>
</section>