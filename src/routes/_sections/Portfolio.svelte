<script lang="ts">
    import { onMount } from "svelte";

    import Button from "$lib/components/ui/Button.svelte";
    import img1 from "$lib/images/portfolio/home1/main.png";
    import {loadGSAP} from "$lib/gsap";

    interface Image {
        id: number;
        src: string;
        size: "big" | "small";
    }

    const allImages: Image[] = [
        {id: 0, src: img1, size: "big"},
        {id: 1, src: img1, size: "small"},
        {id: 2, src: img1, size: "big"},
        {id: 3, src: img1, size: "small"},
        {id: 4, src: img1, size: "big"},
        {id: 5, src: img1, size: "small"},
        {id: 6, src: img1, size: "big"},
        {id: 7, src: img1, size: "small"},
        {id: 8, src: img1, size: "big"},
        {id: 9, src: img1, size: "small"},
        {id: 10, src: img1, size: "big"},
        {id: 11, src: img1, size: "small"},
    ];

    const col1: Image[] = [];
    const col2: Image[] = [];
    const col3: Image[] = [];
    const columns = [col1, col2, col3];

    allImages.forEach((item, i) => {
        columns[i % 3].push(item);
    });


</script>

<section>
    <h2 class="title-section text-center">Наши работы</h2>
    <h3 class="desc-section mb-6.5 text-center xl:hidden">Которые мы реализовали</h3>
    <h3 class="desc-section text-center hidden xl:block">Которые мы реализовали под «ПОД КЛЮЧ»</h3>

    <div class="grid grid-cols-2 gap-x-2 px-2 mask-columns
        md:grid-cols-3 md:max-h-200
        lg:px-8 lg:max-h-280
        xl:max-w-[1200px] xl:gap-x-4 xl:max-h-320 xl:mx-auto xl:mt-10
        2xl:max-w-[1414px] 2xl:gap-x-6 2xl:max-h-380
        3xl:max-w-[1700px]!
    ">
        <div class="flex flex-col gap-2 xl:gap-4 2xl:gap-6">
            {#each col1 as img (img.id)}
                <img
                        src={img.src}
                        alt="Фото объекта"
                        class="rounded-xl object-cover {img.size === 'big' ? 'big-image' : 'small-image'} xl:rounded-2xl"
                />
            {/each}
        </div>

        <div class="flex flex-col gap-2 xl:gap-4 2xl:gap-6">
            {#each col2 as img (img.id)}
                <img
                        src={img.src}
                        alt="Фото объекта"
                        class="rounded-xl object-cover {img.size === 'big' ? 'big-image' : 'small-image'} xl:rounded-2xl"
                />
            {/each}
        </div>

        <div class="hidden md:flex flex-col gap-2 xl:gap-4 2xl:gap-6">
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
        <Button text="Посмотреть все работы" href="/" className="mt-7 md:mx-auto md:max-w-96 2xl:max-w-108 2xl:mt-10" />
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
