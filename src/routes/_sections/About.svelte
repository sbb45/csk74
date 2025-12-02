<script lang="ts">
    import { isLarge } from "$lib/stores/breakpoint";
    import { derived } from "svelte/store";
    import Button from "$lib/components/ui/Button.svelte";
    import AboutCard from "$lib/components/cards/AboutCard.svelte";
    import coin from "$lib/assets/icons/about/coin.svg";
    import cardSecurity from "$lib/assets/icons/about/card-security.svg";
    import page from "$lib/assets/icons/about/page.svg";
    import security from "$lib/assets/icons/about/security.svg";
    import angleToll from "$lib/assets/icons/about/angle-tool.svg";
    import {onMount} from "svelte";
    import {initAboutSection} from "$lib/gsap/main-page/about";

    interface Card {
        id: number;
        title: string;
        desc: string;
        icon: string;
        type?: "black" | "cut" | undefined;
    }

    //Переменные
    let section: HTMLElement;
    let cardElements: HTMLElement[] = [];
    let btn: HTMLElement;

    //Карточки
    const cards: Card[] = [
        {id: 1, title: "Цена по договору", desc: "Фиксируем стоимость в договоре. Никаких скрытых работ и неожиданных доплат.", icon: coin},
        {id: 2, title: "Честная смета", desc: "Сумма фиксируется до начала работ и остаётся неизменной.", icon: cardSecurity},
        {id: 3, title: "Отчётность", desc: "Регулярные фото- и видеообновления, чтобы вы видели каждый этап стройки.", icon: page},
        {id: 4, title: "Гарантия работ", desc: "Даём гарантию и остаёмся на связи после сдачи дома.", icon: security},
        {id: 5, title: "Надёжные  материалы", desc: "Используем только проверенные и качественные материалы.", icon: angleToll},
    ];

    // Смена цветов от мобильного к десктопу
    const desktopTypes: Record<number, Card["type"]> = {
        2: "cut",
        4: "black",
        5: "black"
    };
    const mobileTypes: Record<number, Card["type"]> = {
        3: "cut",
        5: "black"
    };
    const responsiveCards = derived(isLarge, ($isLarge) =>
        cards.map((card) => ({
            ...card,
            type: $isLarge
                ? desktopTypes[card.id] ?? undefined
                : mobileTypes[card.id] ?? undefined
        }))
    );

    onMount(async ()=>{
         await initAboutSection({section, cards: cardElements, btn});
    });

</script>

<section id="about" class="px-4 lg:px-8 xl:px-10 3xl:max-w-[2000px]!">
    <div bind:this={section}>
        <h2 class="title-section">Наши сильные стороны</h2>
        <h3 class="desc-section md:pl-48 lg:pl-58 xl:pl-110 2xl:pl-170">Которые ценят клиенты</h3>
    </div>
    <div class="block md:grid md:grid-cols-2 md:gap-4 md:items-end md:justify-end
            lg:grid-cols-3 lg:gap-3
            xl:hidden
    ">
        {#each $responsiveCards as card, i (card.id)}
            <AboutCard
                    {...card}
                    bind:el={cardElements[i]}
            />
        {/each}
        <Button text="Подробнее о нас" href="/" className="mt-7 md:mt-0 xl:hidden" />
    </div>
    <div class="hidden xl:grid xl:grid-cols-4 xl:gap-4 xl:auto-rows-[280px] xl:mt-8 2xl:auto-rows-[340px] 2xl:gap-7 2xl:mt-12">
        <span bind:this={btn}>
            <Button
                    text="Подробнее о нас"
                    href="/"
                    className="mt-57.5 w-70! 2xl:mt-72 2xl:w-74! 3xl:min-w-84"
            />
        </span>

        <AboutCard bind:el={cardElements[0]} {...$responsiveCards[0]} />
        <AboutCard bind:el={cardElements[1]} {...$responsiveCards[1]} />

        <AboutCard bind:el={cardElements[4]} {...$responsiveCards[4]} className="row-span-2 mt-36 2xl:mt-42" />

        <AboutCard bind:el={cardElements[2]} {...$responsiveCards[2]} />
        <AboutCard bind:el={cardElements[3]} {...$responsiveCards[3]} />

        <div></div>
    </div>
</section>
