<script lang="ts">
    import tg from '$lib/assets/icons/social/telegram.svg'
    import whatsapp from '$lib/assets/icons/social/whatsapp.svg'

</script>

<footer class="w-full mt-45">
    <h3 class="font-bounded px-4 font-normal text-white text-3xl text-center uppercase pt-6">Создадим дом вашей мечты!</h3>

    <ul class="grid grid-rows-2 grid-flow-col gap-x-6 my-14 px-4">
        <li><a href="/">О компании</a></li>
        <li><a href="/">Контакты</a></li>
        <li><a href="/">Портфолио</a></li>
        <li><a href="/">Услуги</a></li>
        <li><a href="/">Отзывы</a></li>
        <li><a href="/">FAQ</a></li>
    </ul>

    <div class="contacts">
        <h4 class="font-bounded font-normal text-2xl text-white mb-3">+7 (919) 312-51-45</h4>
        <div class="flex justify-start items-center gap-x-4">
            <a href="/"><img src={tg} alt="telegram"></a>
            <a href="/"><img src={whatsapp} alt="whatsapp"></a>
        </div>
    </div>

    <div class="font-bounded text-gray text-lg text-center flex justify-center items-center border-t-2 border-t-gray mt-10 py-10 gap-1 flex-col">
        <a href="mailto:support@site.ru" class="font-normal">support@site.ru</a>
        <a href="/" class="font-light">Политика конфиденциальности</a>
    </div>
</footer>

<style>
    footer {
        position: relative;
        background-color: #202020;
        li a{
            font-family: "Manrope", sans-serif;
            color: #F3F1EF;
            font-size: 20px;
            font-weight: 400;
        }
    }
    footer::before {
        content: "";
        position: absolute;
        top: -90px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 140px;
        background: url('/assets/footer.svg') no-repeat top center;
        background-size: contain;
        pointer-events: none;
    }
    .contacts{
        position: relative;
        padding-left: 16px;
        width: 100%;
    }
    .contacts::before{
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 50px;
        height: 132px;
        background: url('/assets/footer-contact.svg') no-repeat top center;
        background-size: contain;
        pointer-events: none;
    }
</style>
