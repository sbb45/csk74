<script lang="ts">
    import Button from "$lib/components/ui/Button.svelte";
    import {onMount} from "svelte";
    import {initContacts} from "$lib/gsap/main-page/contact";

    let name = "";
    let phone = "";
    let message = "";
    let isSubmitting = false;
    let error = "";
    let success = "";

    async function handleSubmit() {
        alert("greg")
        error = "";
        success = "";

        const trimmedName = name.trim();
        const trimmedPhone = phone.trim();
        const trimmedMessage = message.trim();

        if (!trimmedName || !trimmedPhone) {
            error = "Пожалуйста, заполните имя и телефон.";
            return;
        }

        isSubmitting = true;
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: trimmedName,
                    phone: trimmedPhone,
                    message: trimmedMessage,
                }),
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok || !data.ok) {
                error = data.error || "Не удалось отправить заявку. Попробуйте позже.";
                return;
            }

            success = "Спасибо! Ваша заявка отправлена.";
            name = "";
            phone = "";
            message = "";
        } catch (e) {
            error = "Ошибка сети. Попробуйте ещё раз.";
        } finally {
            isSubmitting = false;
        }
    }

    let section: HTMLElement;
    onMount(()=>{
        initContacts(section)
    })
</script>

<section bind:this={section} id="contacts" class="mx-2 relative bg-[url('/assets/contacts.png')] bg-cover bg-center rounded-xl py-10 px-5.5
    lg:flex lg:justify-between lg:items-start lg:px-8 lg:mx-4 lg:py-20 lg:relative
    xl:max-w-[1200px]! xl:mx-auto xl:px-10 xl:py-26 xl:rounded-2xl
    2xl:rounded-3xl 2xl:max-w-[1580px]! 2xl:px-12 3xl:min-w-[1700px]
">
    <div class="lg:h-[450px] lg:flex lg:justify-between lg:items-start lg:flex-col lg:py-4 xl:h-[514px] 2xl:py-6">
        <div>
            <h2 class="text title-section text-white! text-[22px]! mb-2! text-center
                md:text-3xl! lg:text-start lg:text-4xl! lg:mb-3! xl:text-[42px]!
                2xl:text-[48px]!
            ">
                Свяжитесь с нами
            </h2>
            <p class="text font-manrope font-normal text-white text-sm leading-4.5 text-center max-w-[308px] mx-auto md:text-xl
                md:max-w-[480px] md:leading-6
                lg:text-start lg:mx-0 lg:text-lg lg:max-w-[420px]
                xl:text-xl xl:max-w-[440px] xl:leading-7
                2xl:text-2xl 2xl:max-w-[516px]
            ">
                Ответим на вопросы, рассчитаем стоимость и поможем начать строительство.
            </p>
        </div>

        <div class="hidden lg:block">
            <h3><a href="mailto:csk74@yandex.ru" class="contact text mb-1.5">csk74@yandex.ru</a></h3>
            <h3><a href="tel:+79193125145" class="contact text">+7 (919) 312-51-45</a></h3>
        </div>
    </div>

    <form class="w-full bg-white rounded-xl my-14 px-4.5 py-8
        md:mx-auto md:max-w-[500px]
        lg:max-w-[400px] lg:mx-0 lg:my-0 lg:px-6 lg:py-10
        xl:py-18 xl:max-w-[420px]
        2xl:max-w-[520px] 2xl:px-9 2xl:py-12
    " on:submit|preventDefault={handleSubmit}>
        <p class="font-manrope text-[16px] leading-5 font-medium text-center mb-6 text-black md:text-xl md:leading-6 2xl:text-[22px]">
            Оставьте контакты, и мы вам<br>перезвоним в ближайшее время.
        </p>
        <input placeholder="Ваше имя" bind:value={name}>
        <input placeholder="Контактные данные" bind:value={phone}>
        <input placeholder="Ваше сообщение" bind:value={message}>
        <Button
                text={isSubmitting ? "Отправляем..." : "Отправить"}
                type="button"
                dop="submit"
                className="h-11.5! text-base! md:h-12.5! lg:h-13! xl:h-14! 2xl:h-15!"
        />
        {#if error}
            <p class="mt-3 text-center text-xs text-red-500 md:text-sm">{error}</p>
        {/if}
        {#if success}
            <p class="mt-3 text-center text-xs text-emerald-500 md:text-sm">{success}</p>
        {/if}
        <p class="font-manrope text-xs font-medium text-center mt-4.5 text-gray md:text-sm md:leading-4.5 2xl:text-base 2xl:max-w-[440px] 2xl:mt-6">
            Отправляя форму, вы соглашаетесь с обработкой данных и
            <a href="/privacy" class="underline">политикой конфиденциальности</a>.
        </p>
    </form>

    <h3 class="lg:hidden"><a href="mailto:support@site.ru" class="contact mb-1.5">support@site.ru</a></h3>
    <h3 class="lg:hidden"><a href="tel:+79193125145" class="contact">+7 (919) 312-51-45</a></h3>

    <span class="none rounded-3xl xl:block cutting"></span>
</section>

<style>
    section span {
        position: absolute;
        top: 50%;
        left: -100px;
        width: 170px;
        height: 170px;
        transform: translateY(-50%) rotate(45deg);
        background-color: #f3f1ef;
        pointer-events: none;
        z-index: 1;
    }
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
        max-width: max-content;
        font-family: "Bounded", sans-serif;
        font-weight: 500;
        color: #F3F1EF;
        font-size: 20px;
        margin: 0 auto;
    }
    @media (min-width: 768px) {
        input{height: 50px;}
        .contact{font-size: 26px}
    }
    @media (min-width: 1024px) {
        input{
            font-size: 18px;
            height: 52px;
            margin-bottom: 12px;
        }
        section::before { display: block; }
    }
    @media (min-width: 1280px) {
        input{height: 56px;}
        .contact{font-size: 32px}
    }
    @media (min-width: 1516px) {
        input{
            height: 60px;
            border-radius: 24px;
            font-size: 20px;
            margin-bottom: 16px;
        }
        .contact{font-size: 42px}
        section::before{
            width: 240px;
            height: 220px;
            left: -100px;
        }
    }
</style>