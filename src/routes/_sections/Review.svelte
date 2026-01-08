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
        message: string,
        type?: "black",
    }

    const reviews: Review[] = [
        {
            id: 0,
            date: "12.10.2023",
            name: "Денис Никифоров",
            image: img1,
            message:
                "Обращался за тёплым контуром. Сразу честно объяснили, что делают и почему. Смета понятная, цена зафиксирована в договоре — без доплат. По ходу работ регулярно присылали фото и видео с объекта."
        },
        {
            id: 1,
            date: "03.09.2024",
            name: "Павел Трофимов",
            image: img2,
            message:
                "Всё по делу и без лишних обещаний. Работали спокойно, но в срок. Узлы и примыкания аккуратные, фасад ровный, крыша без вопросов. Все нюансы заранее согласовывали."
        },
        {
            id: 2,
            date: "19.08.2024",
            name: "Артём Громов",
            image: img3,
            type: "black",
            message:
                "Выбирал по отзывам и общению — не ошибся. Команда адекватная, работают чисто, порядок на участке. Договор прозрачный, отчётность регулярная. В итоге получили ровную коробку с окнами и крышей."
        },
        {
            id: 3,
            date: "27.07.2025",
            name: "Михаил Савельев",
            image: img4,
            message:
                "Делали баню. Сроки соблюли, материалы качественные, без подмен. По деньгам всё чётко по договору. После сдачи помогли с консультациями — надёжная команда."
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