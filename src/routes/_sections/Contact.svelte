<script lang="ts">
    import Button from "$lib/components/ui/Button.svelte";

    let name = "";
    let phone = "";
    let message = "";

    function handleSubmit(){
        console.log('имя: ', name);
        name = "";
        phone = "";
        message = "";
    }
</script>

<section class="mx-2 relative bg-[url('/assets/contacts.png')] bg-cover bg-center rounded-xl py-10 px-5.5">
    <h2 class="title-section text-white! text-[22px]! mb-2! text-center">Свяжитесь с нами</h2>
    <p class="font-manrope font-normal text-white text-sm leading-4.5 text-center max-w-[308px] mx-auto">Ответим на вопросы, рассчитаем стоимость и поможем начать строительство.</p>

    <form class="w-full bg-white rounded-xl my-14 px-4.5 py-8" on:submit|preventDefault={handleSubmit}>
        <p class="font-manrope text-[16px] leading-5 font-medium text-center mb-6 text-black">Оставьте контакты, и мы вам<br>перезвоним в ближайшее время.</p>
        <input placeholder="Ваше имя" bind:value={name}>
        <input placeholder="Номер телефона" bind:value={phone}>
        <input placeholder="Ваше сообщение" bind:value={message}>
        <Button text="Отправить" type="button" className="h-11.5! text-base!" />
        <p class="font-manrope text-xs font-medium text-center mt-4.5 text-gray">Отправляя форму, вы соглашаетесь с обработкой данных и политикой конфиденциальности.</p>
    </form>

    <h3><a href="mailto:support@site.ru" class="contact mb-1.5">support@site.ru</a></h3>
    <h3><a href="tel:+79193125145" class="contact">+7 (919) 312-51-45</a></h3>
</section>

<style>
    input{
        @apply focus:outline-none focus:ring-0;
        font-family: "Manrope", sans-serif;
        outline: none;
        border: none;
        background-color: #fff;
        border-radius: 24px;
        height: 46px;
        font-size: 16px;
        width: 100%;
        padding: 0 20px;
        margin-bottom: 10px;
    }
    .contact{
        display: block;
        font-family: "Bounded", sans-serif;
        font-weight: 500;
        color: #F3F1EF;
        font-size: 20px;
        text-align: center;
        margin: 0 auto;
    }
</style>