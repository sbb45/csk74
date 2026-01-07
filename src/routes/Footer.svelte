<script lang="ts">
    import tg from '$lib/assets/icons/social/telegram.svg'
    import whatsapp from '$lib/assets/icons/social/whatsapp.svg'
    import {navigateToHash, navigateToPath} from "$lib/gsap/scrollTo";


</script>

<footer class="w-full mt-45 lg:px-8 xl:px-10">
    <h3 class="font-bounded px-4 font-normal text-white text-3xl text-center uppercase pt-6
        md:text-4xl lg:text-5xl lg:px-0 lg:pt-14 xl:text-[55px] 2xl:text-7xl 2xl:pt-20 3xl:text-[80px]!
    ">
        Создадим дом вашей мечты!
    </h3>

    <div class="lg:flex lg:items-center lg:justify-between lg:my-16 2xl:max-w-[1760px] 2xl:mx-auto 2xl:my-25 3xl:max-w-[2000px]!">
        <ul class="grid grid-rows-2 grid-flow-col gap-x-6 my-14 px-4
            md:grid-rows-1 md:grid-cols-3 md:grid-flow-row md:justify-start md:gap-x-2 md:max-w-[500px] md:mx-auto
            lg:my-0 lg:px-0 lg:mx-0 lg:gap-x-4 lg:gap-y-1 2xl:gap-x-8
        ">
            <li>
                <button
                        type="button"
                        onclick={() => navigateToPath('/about')}
                >
                    О компании
                </button>
            </li>
            <li>
                <button
                        type="button"
                        onclick={() => {navigateToHash('#contacts')}}
                >
                    Контакты
                </button>
            </li>
            <li>
                <button
                        type="button"
                        onclick={() => {navigateToPath('/portfolio')}}
                >
                    Портфолио
                </button>
            </li>
            <li>
                <button
                        type="button"
                        onclick={() => {navigateToHash('#services')}}
                >
                    Услуги
                </button>
            </li>
            <li>
                <button
                        type="button"
                        onclick={() => {navigateToHash('#reviews')}}
                >
                    Отзывы
                </button>
            </li>
            <li>
                <button
                        type="button"
                        onclick={() => {navigateToHash('#faq')}}
                >
                    Вопросы
                </button>
            </li>
        </ul>


        <div class="contacts">
            <a href="tel:+79193125145" class="font-bounded font-normal text-2xl text-white mb-3 md:text-center lg:mb-1 2xl:text-3xl">
                +7 (919) 312-51-45
            </a>
            <div class="flex justify-start items-center gap-x-4 md:justify-center lg:justify-end">
                <a href="https://t.me/csk174"><img src={tg} alt="telegram"></a>
                <a href="https://wa.me/79193125145"><img src={whatsapp} alt="whatsapp"></a>
            </div>
        </div>
    </div>

    <div class="font-bounded text-gray text-lg text-center flex justify-center items-center border-t-2 border-t-gray mt-10 py-10 gap-1 flex-col
        lg:flex-row lg:justify-between lg:mt-0 2xl:max-w-[1760px] 2xl:mx-auto 2xl:text-xl 3xl:max-w-[2000px]!
    ">
        <a href="mailto:support@site.ru" class="font-normal lg:order-2">csk74@yandex.ru</a>
        <a href="/privacy" class="font-light lg:order-1">Политика конфиденциальности</a>
    </div>
</footer>

<style>
    footer {
        position: relative;
        background-color: #202020;
        z-index: 3;
        li button{
            cursor: pointer;
            font-family: "Manrope", sans-serif;
            color: #F3F1EF;
            font-size: 20px;
            font-weight: 400;
        }
    }
    footer::before {
        content: "";
        position: absolute;
        top: -80px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 140px;
        background: url('/assets/footer.svg') no-repeat top center;
        background-size: contain;
        pointer-events: none;
        z-index: -1;
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
    @media (min-width: 768px) {
        footer::before{
            width: 360px;
            height: 176px;
            top: -60px;
            left: 50%;
            transform: translateX(0);
        }
    }
    @media (min-width: 1024px) {
        footer::before{
            left: 60%;
            background: url('/assets/footer_desktop.svg') no-repeat top center;
        }
        .contacts::before{display: none}
        .contacts{width: auto}
    }
    @media (min-width: 1513px) {
        footer li button{
            font-size: 24px;
        }
        footer::before{left: 70%}
        .contacts img{
            width: 50px;
        }
    }
</style>