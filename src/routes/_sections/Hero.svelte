<script lang="ts">
    import hero from '$lib/images/hero.png'
    import Button from "$lib/components/ui/Button.svelte";
</script>

<section class="px-4 relative mt-20 lg:mt-30 lg:px-8 xl:px-10 3xl:mt-40! 3xl:max-w-[2000px]!">
    <h1 class="font-bounded font-bold text-[40px] leading-11 uppercase text-black mt-10
            md:text-right md:text-5xl md:mt-14
            lg:text-6xl lg:mt-20 lg:leading-none
            xl:text-7xl xl:mt-12
            2xl:text-[90px] 2xl:mt-18
    ">
        Каркасные дома
    </h1>
    <h2 class="font-bounded font-light text-[28px] leading-8 uppercase text-black mt-2
        md:pl-26 md:text-4xl md:mt-3
        lg:text-5xl lg:mt-2 lg:pl-0 lg:pr-42 lg:text-center lg:leading-none
        xl:text-6xl xl:pr-80 xl:mt-4
        2xl:text-[90px] 2xl:mt-2 2xl:pr-60
    ">
        в Челябинске
    </h2>
    <div class="block md:flex md:justify-center md:items-center md:gap-x-50 md:mt-10 lg:mt-0">
        <p class="font-manrope font-medium text-lg leading-5.5 text-gray max-w-66 mt-4 md:mt-0
            lg:absolute lg:top-0 lg:left-8 lg:text-base lg:max-w-40 [@media(min-width:1060px)]:max-w-60
            xl:text-xl xl:max-w-74! xl:leading-6 xl:left-10
            2xl:text-2xl 2xl:leading-7 2xl:max-w-90!
        ">
            Строим под ключ с гарантией, честной сметой и контролем на каждом этапе.
        </p>
        <Button text="Оставить заявку" href="/about" className="hidden md:flex lg:absolute lg:top-18 lg:right-8 lg:max-w-[280px] xl:top-23 xl:right-10 2xl:top-33 2xl:max-w-[300px] 3xl:max-w-[340px]!" />
    </div>
    <picture class="block my-6 md:mt-10 lg:mt-16 xl:mt-12 2xl:mt-11">
        <img src={hero} alt="Главное изображение" class="rounded-xl w-full h-[320px] object-cover lg:h-[480px] 2xl:h-[58vh] 2xl:rounded-3xl 3xl:h-[64vh]!">
    </picture>
    <Button text="Оставить заявку" href="/about" className="md:hidden" />
</section>