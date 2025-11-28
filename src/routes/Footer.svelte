<script lang="ts">
    import menu from '$lib/assets/icons/menu.svg'

</script>

<footer class="w-full px-4 mt-40">
    <h3 class="font-bounded font-normal text-white text-3xl text-center uppercase">Создадим дом вашей мечты!</h3>

    <ul class="grid grid-rows-2 grid-flow-col gap-x-6 my-14">
        <li><a href="/">О компании</a></li>
        <li><a href="/">Контакты</a></li>
        <li><a href="/">Портфолио</a></li>
        <li><a href="/">Услуги</a></li>
        <li><a href="/">Отзывы</a></li>
        <li><a href="/">FAQ</a></li>
    </ul>

    <div class="">
        <h4>+7 (919) 312-51-45</h4>

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
            font-weight: 500;
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

</style>
