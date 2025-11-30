<script lang="ts">
    import img1 from "$lib/images/portfolio/home1/main.png";
    import ReviewCard from "$lib/components/cards/ReviewCard.svelte";

    interface Review {
        id: number,
        image: string,
        date: string,
        name: string,
        review: string,
        type?: "black",
    }

    const reviews: Review[] = [
        {
            id: 0, date: "25.11.2025", name: "Алексей Морозов", image: img1,
            review: "Строил дом с sha&vi — всё четко и прозрачно. Регулярные отчёты, без лишних доплат, сроки выдержали. Качество сборки отличное, въехали без проблем. Надёжная команда, рекомендую."
        },
        {
            id: 1, date: "25.11.2025", name: "Алексей Морозов", image: img1,
            review: "Строил дом с sha&vi — всё четко и прозрачно. Регулярные отчёты, без лишних доплат, сроки выдержали. Качество сборки отличное, въехали без проблем. Надёжная команда, рекомендую."
        },
        {
            id: 2, date: "25.11.2025", name: "Алексей Морозов", image: img1, type: "black",
            review: "Строил дом с sha&vi — всё четко и прозрачно. Регулярные отчёты, без лишних доплат, сроки выдержали. Качество сборки отличное, въехали без проблем. Надёжная команда, рекомендую."
        },
        {
            id: 3, date: "25.11.2025", name: "Алексей Морозов", image: img1,
            review: "Строил дом с sha&vi — всё четко и прозрачно. Регулярные отчёты, без лишних доплат, сроки выдержали. Качество сборки отличное, въехали без проблем. Надёжная команда, рекомендую."
        },
    ];

</script>

<section class="3xl:min-w-[2000px]">
    <h2 class="title-section px-4">Честные отзывы</h2>
    <h3 class="desc-section mb-6.5 text-right px-4 md:text-left md:pl-64 lg:pl-90 xl:pl-120 2xl:pl-140">о нашей работе</h3>
    <div class="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide ml-2
        md:overflow-x-visible md:grid md:grid-cols-2 md:gap-4 md:mx-4 lg:gap-3 xl:gap-4 2xl:gap-7
    ">
        {#each reviews as review (review.id)}
            <ReviewCard {...review} />
        {/each}
    </div>
</section>

<style>
    .scrollbar-hide {
        scrollbar-width: none;
    }
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
</style>