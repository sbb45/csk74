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
        {id: 2, src: img1, size: "small"},
        {id: 3, src: img1, size: "big"},
        {id: 4, src: img1, size: "big"},
        {id: 5, src: img1, size: "small"},
        {id: 6, src: img1, size: "small"},
        {id: 7, src: img1, size: "big"},
    ];

    const leftImages: Image[] = [];
    const rightImages: Image[] = [];

    allImages.forEach((item, i) => (i % 2 === 0 ? leftImages : rightImages).push(item));


</script>

<style>
    .mask-columns {
        mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
    }
</style>

<section>
    <h2 class="title-section text-center">Наши работы</h2>
    <h3 class="desc-section mb-6.5 text-center">Которые мы реализовали</h3>

    <div class="grid grid-cols-2 gap-x-2.5 px-2 mask-columns">
        <div class="flex flex-col gap-2">
            {#each leftImages as img (img.id)}
                <img
                        src={img.src}
                        alt="Фото объекта"
                        class="rounded-xl object-cover {img.size === 'big' ? 'h-[300px]' : 'h-[200px]'}"
                />
            {/each}
        </div>

        <div class="flex flex-col gap-2">
            {#each rightImages as img (img.id)}
                <img
                        src={img.src}
                        alt="Фото объекта"
                        class="rounded-xl object-cover {img.size === 'big' ? 'h-[300px]' : 'h-[200px]'}"
                />
            {/each}
        </div>
    </div>

    <div class="px-4">
        <Button text="Посмотреть все работы" href="/" className="mt-7" />
    </div>
</section>
