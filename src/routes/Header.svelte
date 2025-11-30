<script lang="ts">
    import menu from '$lib/assets/icons/menu.svg'

</script>

<header class="fixed top-0 left-0 right-0 bg-white py-4 2xl:max-w-[1760px] 2xl:mx-auto z-50 3xl:max-w-[2000px]!">
    <div class="flex items-center justify-between px-4 lg:px-8 xl:px-10">
        <p class="text-2xl font-bold lg:w-[20%]">Логотип</p>
        <ul class="hidden justify-center items-center gap-4 md:flex xl:gap-6 3xl:gap-10!">
            <li><a href="#">О компании</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Портфолио</a></li>
            <li><a href="#">Отзывы</a></li>
            <li><a href="#">Контакты</a></li>
        </ul>
        <div class="hidden lg:flex justify-end items-center w-[20%]">
            <a
               href="#"
               class="hidden font-bounded font-normal text-black text-base border-black border-2 rounded-3xl py-2 px-8 w-max
                    lg:block xl:px-12 3xl:px-16! 3xl:text-xl 3xl:py-3
            ">
                Связаться
            </a>
        </div>
        <button class="md:hidden">
            <img src={menu} alt="menu">
        </button>
    </div>
</header>

<style>
    li a{
        font-family: "Manrope", sans-serif;
        font-weight: 500;
        font-size: 18px;
        color: #4A4A4A;
    }
    @media (min-width: 1536px) {
        li a{ font-size: 20px }
    }
    @media (min-width: 2300px) {
        li a{ font-size: 26px }
    }
</style>