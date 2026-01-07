<script lang="ts">
    import img1 from "$lib/images/portfolio/01.png";
    import img2 from "$lib/images/portfolio/02.png";
    import img3 from "$lib/images/portfolio/03.png";
    import img4 from "$lib/images/portfolio/04.png";
    import ReviewCard from "$lib/components/cards/ReviewCard.svelte";
    import {onMount} from "svelte";
    import {initTitle} from "$lib/gsap/main-page/general";
    import {initReview} from "$lib/gsap/main-page/review";

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
            id: 0,
            date: "12.10.2024",
            name: "Денис Никифоров",
            image: img1,
            review:
                "Обращался за тёплым контуром. Ребята адекватные: сразу сказали, что делают, а что нет, и почему. Смету расписали понятно, цену закрепили в договоре — никаких «ой, ещё доплатите». По ходу стройки кидали фото/видео, я реально видел, что происходит на объекте."
        },
        {
            id: 1,
            date: "03.09.2025",
            name: "Павел Трофимов",
            image: img2,
            review:
                "Понравилось, что всё без понтов и по делу. По этапам шли спокойно, но в срок уложились. Узлы и примыкания сделаны аккуратно, фасад ровный, крыша без вопросов. Если появлялись нюансы — звонили, объясняли и согласовывали, а не делали «как решили сами»."
        },
        {
            id: 2,
            date: "19.08.2025",
            name: "Артём Громов",
            image: img3,
            type: "black",
            review:
                "Выбирал подрядчика по отзывам и общению. Тут всё совпало: нормальная команда, работают чисто, на участке порядок. В договоре всё прозрачно, отчётность регулярная. В итоге получили ровную коробку с окнами и крышей — дальше спокойно продолжаем отделку с другими ребятами."
        },
        {
            id: 3,
            date: "27.07.2025",
            name: "Михаил Савельев",
            image: img4,
            review:
                "Делали баню. Сроки выдержали, материалы нормальные, ничего «дешёвого вместо» не подсовывали. По деньгам — как договорились, так и вышло. После сдачи ещё пару раз консультировали по мелочам, не морозились. В целом — надёжно, рекомендую."
        },
    ];



    let section: HTMLElement;
    onMount(()=>{
        initReview(section);
    })
</script>

<section bind:this={section} id="reviews" class="3xl:min-w-[2000px]">
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