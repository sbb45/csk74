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
        {id: 2, title: "Монтаж кровли", desc: "Устанавливаем крышу с аккуратными примыканиями и качественными материалами.", icon: houseRoof},
        {id: 3, title: "Наружная отделка фасада", desc: "Планкен, сайдинг, имитация бруса — монтируем аккуратно и технологично.", icon: hammer, type: "black"},
        {id: 4, title: "Установка окон и дверей", desc: "Монтируем окна и двери без мостиков холода с герметичными примыканиями.", icon: doorOpen},
    ]

    const leftColumn:Card[] = [];
    const rightColumn:Card[] = [];

    cards.forEach((item, i)=>{
        if(i % 2 === 0) leftColumn.push(item)
        else rightColumn.push(item)
    })
</script>

<section id="services" class="px-4 relative
    lg:grid lg:grid-cols-[400px_1fr] lg:gap-2 lg:items-start
    xl:grid-cols-[600px_1fr] xl:gap-6 xl:px-6
    2xl:grid-cols-[1fr_1fr] 2xl:px-10 3xl:max-w-[2000px]!
">
    <div class="lg:sticky lg:top-22 xl:top-24">
        <h2 class="title-section lg:text-[40px]! xl:text-5xl! 2xl:text-[64px]! 3xl:max-w-200">
            Что мы делаем для клиента
        </h2>
        <p class="font-manrope font-normal text-gray text-lg leading-5.5
            lg:max-w-[380px] lg:mt-4
            xl:text-xl xl:leading-6.5 xl:max-w-[520px] xl:mt-6
            2xl:text-2xl 2xl:leading-7 2xl:max-w-[615px] 2xl:mt-13
        ">
            Мы подходим к каждому проекту аккуратно и честно.
            <span class="hidden lg:inline">Строим дома продуманно, без спешки и без скрытых решений.</span><br>
            Наша задача — чистая работа и результат, за который не стыдно.
        </p>
    </div>
    <div class="border-2 border-black rounded-xl flex flex-col justify-center items-start mt-6 md:hidden">
        {#each cards as card (card.id)}
            <ServiceCard {...card} />
        {/each}
    </div>
    <div class="hidden md:mt-6 md:grid md:grid-cols-2 lg:mt-0 lg:h-full">
        <div class="border-2 border-black rounded-l-xl rounded-br-xl xl:rounded-l-2xl xl:rounded-br-2xl 2xl:rounded-l-3xl 2xl:rounded-br-3xl">
            {#each leftColumn as card (card.id)}
                <ServiceCard {...card} />
            {/each}
        </div>
        <div>
            <div class="border-2 border-black border-l-0 rounded-r-xl xl:rounded-r-2xl 2xl:rounded-r-3xl">
                {#each rightColumn as card (card.id)}
                    <ServiceCard {...card} />
                {/each}
            </div>

            <div class={`w-[300px] h-[340px] flex justify-center items-center flex-col mx-auto lg:px-4 xl:w-auto 2xl:h-[440px]`}>
                <h4 class="font-manrope font-normal text-2xl leading-6.5 mb-3 text-center
                    lg:text-xl lg:leading-5
                    xl:text-2xl xl:leading-6 xl:mb-4
                    2xl:mb-6
                ">
                    И это далеко не всё, что мы делаем на объекте.
                </h4>
                <Button text="Связаться" href="/about" />
            </div>
        </div>
    </div>
</section>