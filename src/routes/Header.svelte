<script lang="ts">
    import menu from '$lib/assets/icons/menu.svg'
    import MobileMenu from '$lib/components/ui/MobileMenu.svelte';
    import {navigateToHash, smoothScrollTo} from "$lib/gsap/scrollTo";

    
    let isMobileMenuOpen = $state(false);
    
    // Мобильное меню
    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
    }
    function handleMenuClosed() {
        isMobileMenuOpen = false;
    }
    
    // Прокрутки к секциям


</script>

<header class="fixed top-0 left-0 right-0 bg-white py-3 2xl:max-w-[1760px] 2xl:mx-auto z-50 3xl:max-w-[2000px]!">
    <div class="flex items-center justify-between px-4 lg:px-8 xl:px-10">
        <p class="text-2xl font-bold lg:w-[20%]">Логотип</p>
        <ul class="hidden justify-center items-center gap-4 md:flex xl:gap-6 3xl:gap-10!">
            <li><a href="/about">О компании</a></li>
            <li>
                <a href="/#services" onclick={(e) => {e.preventDefault(); navigateToHash('#services');}}>
                    Услуги
                </a>
            </li>
            <li><a href="/portfolio">Портфолио</a></li>
            <li>
                <a href="/#services" onclick={(e) => {e.preventDefault(); navigateToHash('#faq');}}>
                    Вопросы
                </a>
            </li>
            <li>
                <a href="/#services" onclick={(e) => {e.preventDefault(); navigateToHash('#reviews');}}>
                    Отзывы
                </a>
            </li>
        </ul>
        <div class="hidden lg:flex justify-end items-center w-[20%]">
            <button
               onclick={() => smoothScrollTo("#contacts")}
               class="hidden font-bounded font-normal text-black text-base border-black border-2 rounded-3xl py-2 px-8 w-max
                    lg:block xl:px-12 3xl:px-16! 3xl:text-xl 3xl:py-3
            ">
                Связаться
            </button>
        </div>
        <button 
            class="md:hidden! mobile-menu-toggle"
            onclick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMobileMenuOpen}
            type="button"
        >
            <img 
                src={menu} 
                alt="menu"
                class="menu-icon"
                class:rotate={isMobileMenuOpen}
            >
        </button>
    </div>
</header>

<MobileMenu 
    isOpen={isMobileMenuOpen} 
    onIsOpenChange={(value) => { isMobileMenuOpen = value; }}
    onClosed={handleMenuClosed} 
/>

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

    .mobile-menu-toggle {
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        transition: transform 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .mobile-menu-toggle:hover {
        transform: scale(1.1);
    }

    .mobile-menu-toggle:active {
        transform: scale(0.95);
    }

    .menu-icon {
        transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        display: block;
    }

    .menu-icon.rotate {
        transform: rotate(90deg);
        opacity: 0.7;
    }
</style>