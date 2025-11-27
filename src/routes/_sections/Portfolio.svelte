<script lang="ts">
    import Button from "$lib/components/ui/Button.svelte";
    import img1 from "$lib/images/portfolio/home1/main.png";

    interface Image {
        id: number,
        src: string,
        size: "big" | "small"
    }

    const allImages: Image[] = [
        {id: 0,src: img1, size: "big"},
        {id: 1,src: img1, size: "small"},
        {id: 2,src: img1, size: "small"},
        {id: 3,src: img1, size: "big"},
        {id: 4,src: img1, size: "big"},
        {id: 5,src: img1, size: "small"},
        {id: 6,src: img1, size: "small"},
        {id: 6,src: img1, size: "big"},
    ];
    const leftImages: Image[] = [];
    const rightImages: Image[] = [];
    allImages.forEach((item, index) => {
        if (index % 2 === 0) leftImages.push(item)
        else rightImages.push(item)
    })
</script>

<section>
    <h2 class="title-section text-center">Наши работы</h2>
    <h3 class="desc-section mb-6.5 text-center">Которые мы реализовали</h3>
    <div class="grid grid-cols-2 gap-x-2.5 px-2">
        <div class="flex flex-col gap-2">
            {#each leftImages as img (img.id)}
                <img src={img.src} class={`rounded-xl ${img.size === "big" ? "h-[300px] object-cover" : "h-[200px]"}`} alt="Фото объекта">
            {/each}
        </div>
        <div class="flex flex-col gap-2">
            {#each rightImages as img (img.id)}
                <img src={img.src} class={`rounded-xl ${img.size === "big" ? "h-[300px] object-cover" : "h-[200px]"}`} alt="Фото объекта">
            {/each}
        </div>
    </div>

    <div class="px-4">
        <Button text="Посмотреть все работы" href="/" className="mt-7" />
    </div>
</section>