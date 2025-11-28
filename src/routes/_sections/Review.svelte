<script lang="ts">
    import img1 from "$lib/images/portfolio/home1/main.png";
    import ReviewCard from "$lib/components/cards/ReviewCard.svelte";

    interface Review {
        id: number,
        image: string,
        date: string,
        name: string,
        review: string,
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
            id: 2, date: "25.11.2025", name: "Алексей Морозов", image: img1,
            review: "Строил дом с sha&vi — всё четко и прозрачно. Регулярные отчёты, без лишних доплат, сроки выдержали. Качество сборки отличное, въехали без проблем. Надёжная команда, рекомендую."
        },
        {
            id: 3, date: "25.11.2025", name: "Алексей Морозов", image: img1,
            review: "Строил дом с sha&vi — всё четко и прозрачно. Регулярные отчёты, без лишних доплат, сроки выдержали. Качество сборки отличное, въехали без проблем. Надёжная команда, рекомендую."
        },
    ];

</script>

<section>
    <h2 class="title-section px-4">Честные отзывы</h2>
    <h3 class="desc-section mb-6.5 text-right px-4">о нашей работе</h3>
    <div class="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide ml-2">
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