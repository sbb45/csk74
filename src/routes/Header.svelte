<script lang="ts">
    import menu from '$lib/assets/icons/menu.svg'

</script>

<header class="flex items-center justify-between px-4 mt-4">
    <p class="text-2xl font-bold">Логотип</p>
    <ul class="hidden justify-center items-center gap-4 md:flex">
        <li><a href="#">О компании</a></li>
        <li><a href="#">Услуги</a></li>
        <li><a href="#">Портфолио</a></li>
        <li><a href="#">Отзывы</a></li>
        <li><a href="#">Контакты</a></li>
    </ul>
    <button class="md:hidden">
        <img src={menu} alt="menu">
    </button>
</header>

<style>
    li a{
        font-family: "Manrope", sans-serif;
        font-weight: 500;
        font-size: 18px;
        color: #4A4A4A;

    }
</style>