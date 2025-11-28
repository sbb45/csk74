<script lang="ts">
    import Button from "$lib/components/ui/Button.svelte";
    import AboutCard from "$lib/components/cards/AboutCard.svelte";
    import coin from "$lib/assets/icons/about/coin.svg";
    import cardSecurity from "$lib/assets/icons/about/card-security.svg";
    import page from "$lib/assets/icons/about/page.svg";
    import security from "$lib/assets/icons/about/security.svg";
    import angleToll from "$lib/assets/icons/about/angle-tool.svg";

    interface Card {
        id: number;
        title: string;
        desc: string;
        icon: string;
        type?: "black" | "cut" | undefined;
    }

    const cards: Card[] = [
        {id: 1, title: "Цена по договору", desc: "Фиксируем стоимость в договоре. Никаких скрытых работ и неожиданных доплат.", icon: coin},
        {id: 2, title: "Честная смета", desc: "Сумма фиксируется до начала работ и остаётся неизменной.", icon: cardSecurity},
        {id: 3, title: "Отчётность", desc: "Регулярные фото- и видеообновления, чтобы вы видели каждый этап стройки.", icon: page, type: "cut"},
        {id: 4, title: "Гарантия работ", desc: "Даём гарантию и остаёмся на связи после сдачи дома.", icon: security},
        {id: 5, title: "Надёжные  материалы", desc: "Используем только проверенные и качественные материалы.", icon: angleToll, type: "black"},
    ];
</script>

<section class="px-4">
    <h2 class="title-section">Наши сильные стороны</h2>
    <h3 class="desc-section">Которые ценят клиенты</h3>
    {#each cards as card (card.id)}
        <AboutCard title={card.title} description={card.desc} icon={card.icon} type={card.type} />
    {/each}
    <Button text="Подробнее о нас" href="/" className="mt-7" />
</section>