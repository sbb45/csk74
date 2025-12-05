<script lang="ts">
    import FaqQuestion from "$lib/components/cards/FaqQuestion.svelte";
    import {onMount} from "svelte";
    import {initTitle} from "$lib/gsap/main-page/general";

    interface faq {
        id: number,
        question: string,
        answer: string,
    }

    const faqs: faq[] = [
        {id: 0, question: "Что входит в строительство “под ключ”?", answer: "Проектирование, каркас, кровля, фасад, окна и двери, подбор материалов и отчётность. Фундамент, инженерку и внутреннюю отделку не выполняем."},
        {id: 1, question: "Делаете ли вы фундамент?", answer: "Нет. Работаем только по тем этапам, за качество которых отвечаем полностью."},
        {id: 2, question: "Как формируется стоимость?", answer: "Составляем прозрачную смету без скрытых работ. После согласования цена фиксируется и не меняется."},
        {id: 3, question: "Сколько длится строительство дома?", answer: "В среднем 3–4 месяца, в зависимости от проекта и сезона."},
        {id: 4, question: "Делаете ли вы отчётность по ходу работ?", answer: "Да. Предоставляем фото- и видеоотчёты на каждом этапе."},
        {id: 5, question: "Есть ли гарантия на работы?", answer: "Да. Мы даём гарантию и остаёмся на связи после сдачи дома."},
    ];

    let section: HTMLElement;
    onMount(()=>{
        initTitle(section);
    })

</script>

<section bind:this={section} id="faq" class="lg:px-8 xl:max-w-[1200px]! xl:mx-auto 2xl:max-w-[1464px]! 3xl:min-w-[1700px]">
    <h2 class="title-section text-center">
        Ответы на ваши вопросы
    </h2>
    <h3 class="desc-section mb-6.5 text-center xl:text-right xl:relative xl:-right-16 2xl:mb-14!">
        Чтобы вам было проще
    </h3>
    {#each faqs as faq, i (faq.id)}
        <FaqQuestion
                {...faq}
                isFirst={i === 0}
        />
    {/each}
</section>