<script lang="ts">
    import hero from '$lib/images/hero.png'
    import Button from "$lib/components/ui/Button.svelte";
</script>

<section class="px-4">
    <h1 class="font-bounded font-bold text-[40px] leading-11 uppercase text-black mt-13">Каркасные дома</h1>
    <h2 class="font-bounded font-light text-[28px] leading-8 uppercase text-black mt-2 ">в Челябинске</h2>
    <p class="font-manrope font-medium text-lg leading-5.5 text-gray max-w-66 mt-4">Строим под ключ с гарантией, честной сметой и контролем на каждом этапе.</p>
    <picture class="block my-9">
        <img src={hero} alt="Главное изображение" class="rounded-xl w-full h-[353px] object-cover">
    </picture>
    <Button text="Оставить заявку" href="/about" />
</section>