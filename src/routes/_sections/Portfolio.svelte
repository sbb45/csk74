<script lang="ts">
    import {onDestroy, onMount} from "svelte";

    import Button from "$lib/components/ui/Button.svelte";
    import img1 from "$lib/images/portfolio/01.png";
    import img2 from "$lib/images/portfolio/02.png";
    import img3 from "$lib/images/portfolio/03.png";
    import img4 from "$lib/images/portfolio/04.png";
    import img5 from "$lib/images/portfolio/05.png";
    import img6 from "$lib/images/portfolio/06.png";
    import img7 from "$lib/images/portfolio/07.png";
    import img8 from "$lib/images/portfolio/08.png";
    import img9 from "$lib/images/portfolio/09.png";
    import {initPortfolioScroll} from "$lib/gsap/portfolioScroll";

    interface Image {
        id: number;
        src: string;
        size: "big" | "small";
    }

    const allImages: Image[] = [
        {id: 0, src: img8, size: "big"},
        {id: 1, src: img1, size: "small"},
        {id: 2, src: img2, size: "big"},
        {id: 3, src: img3, size: "small"},
        {id: 4, src: img4, size: "big"},
        {id: 5, src: img5, size: "small"},
        {id: 6, src: img6, size: "big"},
        {id: 7, src: img7, size: "small"},
        {id: 8, src: img8, size: "big"},
        {id: 9, src: img9, size: "small"},
        {id: 10, src: img2, size: "big"},
        {id: 11, src: img1, size: "small"},
    ];

    const col1: Image[] = [];
    const col2: Image[] = [];
    const col3: Image[] = [];
    const columns = [col1, col2, col3];

    allImages.forEach((item, i) => {
        columns[i % 3].push(item);
    });

    let gridRef: HTMLElement;
    let cleanup: (() => void) | undefined;

    onMount(async () => {
        if (!gridRef) return;
        cleanup = await initPortfolioScroll(gridRef);
    });

    onDestroy(() => {
        cleanup?.();
    });
</script>

<section id="portfolio">
    <h2 class="title-section text-center">Наши работы</h2>
    <h3 class="desc-section mb-6.5 text-center xl:hidden">Которые мы реализовали</h3>
    <h3 class="desc-section text-center hidden xl:block">Которые мы реализовали под «ПОД КЛЮЧ»</h3>

    <div bind:this={gridRef} class="grid grid-cols-2 gap-x-2 px-2 mask-columns
        md:grid-cols-3 md:max-h-200
        lg:px-8 lg:max-h-280
        xl:max-w-[1200px] xl:gap-x-4 xl:max-h-320 xl:mx-auto xl:mt-10
        2xl:max-w-[1414px] 2xl:gap-x-6 2xl:max-h-420
        3xl:max-w-[1700px]!
    ">
        <div class="flex flex-col gap-2 xl:gap-4 2xl:gap-6"
             data-portfolio-col
             data-direction="1"
        >
            {#each col1 as img (img.id)}
                <img
                        src={img.src}
                        alt="Фото объекта"
                        class="rounded-xl object-cover {img.size === 'big' ? 'big-image' : 'small-image'} xl:rounded-2xl"
                />
            {/each}
        </div>

        <div class="flex flex-col gap-2 xl:gap-4 2xl:gap-6"
             data-portfolio-col
             data-direction="-1"
        >
            {#each col2 as img (img.id)}
                <img
                        src={img.src}
                        alt="Фото объекта"
                        class="rounded-xl object-cover {img.size === 'big' ? 'big-image' : 'small-image'} xl:rounded-2xl"
                />
            {/each}
        </div>

        <div class="hidden md:flex flex-col gap-2 xl:gap-4 2xl:gap-6"
             data-portfolio-col
             data-direction="1"
        >
            {#each col3 as img (img.id)}
                <img
                        src={img.src}
                        alt="Фото объекта"
                        class="rounded-xl object-cover {img.size === 'big' ? 'big-image' : 'small-image'} xl:rounded-2xl"
                />
            {/each}
        </div>
    </div>

    <div class="px-4">
        <Button text="Посмотреть все работы" href="/portfolio" className="mt-7 md:mx-auto md:max-w-96 2xl:max-w-108 2xl:mt-10" />
    </div>
</section>


<style>
    .mask-columns {
        mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
    }
    .big-image{height: 300px}
    .small-image{height: 200px}
    @media (min-width: 1024px) {
        .big-image{height: 400px}
        .small-image{height: 300px}
    }
    @media (min-width: 1280px) {
        .big-image{height: 500px}
        .small-image{height: 300px}
    }
    @media (min-width: 1536px) {
        .big-image{height: 570px}
        .small-image{height: 380px}
    }
</style>
