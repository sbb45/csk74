<script lang="ts">
    import img1 from "$lib/images/portfolio/home1/main.png";
    export let image: string = img1;
    export let name: string = "Алексей Морозов";
    export let message: string = "Строил дом с sha&vi — всё четко и прозрачно. Регулярные отчёты, без лишних доплат, сроки выдержали. Качество сборки отличное, въехали без проблем. Надёжная команда, рекомендую.";
    export let date: string = "25.11.2025";
    export let type: "black" | undefined = undefined;

    $: cardClasses =
        type === "black"
            ? "bg-dark-gray text-white border-black border-2 rounded-xl"
            : "text-black border-black border-2 rounded-xl";
</script>

<div class="w-[330px] flex-shrink-0 snap-start rounded-xl border-2 border-black bg-white overflow-hidden">
    <div class="font-manrope py-5 px-3.5 flex flex-col gap-3">
        <div>
            <p class="text-lg text-gray">{date}</p>
            <h5 class="font-bold text-2xl text-black uppercase">{name}</h5>
        </div>
        <p class="text-sm leading-5 text-gray">{message}</p>
    </div>
    <div class="w-full h-66.5 overflow-hidden">
        <img src={image} alt="Фото объекта" class="w-full h-full object-cover">
    </div>
</div>