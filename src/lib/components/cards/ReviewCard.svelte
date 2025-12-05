<script lang="ts">
    import img1 from "$lib/images/portfolio/home1/main.png";
    export let id: number = 1;
    export let image: string = img1;
    export let name: string = "Алексей Морозов";
    export let message: string = "Строил дом с sha&vi — всё четко и прозрачно. Регулярные отчёты, без лишних доплат, сроки выдержали. Качество сборки отличное, въехали без проблем. Надёжная команда, рекомендую.";
    export let date: string = "25.11.2025";
    export let type: "black" | undefined = undefined;

    $: cardClasses =
        type === "black"
            ? "bg-dark-gray text-white border-black border-2 rounded-xl xl:rounded-2xl"
            : "bg-white text-gray border-black border-2 rounded-xl xl:rounded-2xl";
</script>

<div class={`card w-[350px] flex-shrink-0 snap-start border-2 border-dark-gray overflow-hidden last:mr-2 ${cardClasses} md:w-auto md:last:mr-0 lg:flex`}>
    <div class="font-manrope py-5 px-3.5 flex flex-col gap-3 lg:w-[110%] lg:justify-between
        xl:py-7 xl:px-4.5 2xl:w-[100%] 2xl:py-8 2xl:px-6
        {id === 2 || id === 3 ? 'lg:order-2' : 'lg:order-1'}
    ">
        <div>
            <p class="text-lg xl:text-xl">
                {date}
            </p>
            <h5 class="font-bold text-2xl uppercase lg:leading-7 lg:text-[26px]
                xl:text-3xl xl:leading-none
                2xl:text-[40px] 2xl:w-[80%]
                {type === 'black' ? 'text-white' : 'text-black'}
            ">
                {name}
            </h5>
        </div>
        <p class="text-sm leading-5 xl:text-lg xl:leading-6 2xl:text-xl">
            {message}
        </p>
    </div>
    <div class="w-full h-66.5 overflow-hidden xl:h-76 2xl:h-90 {id === 2 || id === 3 ? 'lg:order-1' : 'lg:order-2'}">
        <img src={image} alt="Фото объекта" class="w-full h-full object-cover">
    </div>
</div>