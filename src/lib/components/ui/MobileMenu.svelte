<script lang="ts">
    import { onMount } from 'svelte';
    import { animateMobileMenuOpen, animateMobileMenuClose } from '$lib/gsap/mobileMenu';
    import { navigateToHash, navigateToPath } from "$lib/gsap/scrollTo";
    import Button from './Button.svelte';
    
    interface Props {
        isOpen?: boolean;
        onIsOpenChange?: (value: boolean) => void;
        onClosed?: () => void;
    }

    let { isOpen = false, onIsOpenChange, onClosed = () => {} }: Props = $props();
    
    function updateIsOpen(value: boolean) {
        isOpen = value;
        onIsOpenChange?.(value);
    }

    let overlay: HTMLElement;
    let menu: HTMLElement;
    let closeButton: HTMLElement;
    let menuItems: HTMLElement[] = [];

    const menuLinks = [
        { id: 0, href: '/about', text: 'О компании' },
        { id: 1, href: '#services', text: 'Услуги' },
        { id: 2, href: '/portfolio', text: 'Портфолио' },
        { id: 3, href: '#faq', text: 'Вопросы' },
        { id: 4, href: '#reviews', text: 'Отзывы' },
    ];

    let animationTimeline: any = null;

    // Блокировка скролла body при открытом меню
    function lockBodyScroll() {
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden';
        }
    }

    function unlockBodyScroll() {
        if (typeof document !== 'undefined') {
            document.body.style.overflow = '';
        }
    }

    async function openMenu() {
        if (!overlay || !menu || !closeButton) return;
        
        lockBodyScroll();
        
        // Получаем все элементы меню после рендера
        await new Promise(resolve => setTimeout(resolve, 50));
        const items = Array.from(menu.querySelectorAll('.menu-item')) as HTMLElement[];
        menuItems = items;
        
        animationTimeline = await animateMobileMenuOpen(overlay, menu, menuItems, closeButton);
    }

    async function closeMenu() {
        if (!overlay || !menu || !closeButton) return;
        
        let closeTimeline: any = null;
        
        if (animationTimeline) {
            // Используем обратную анимацию
            animationTimeline.reverse();
            // Получаем длительность обратной анимации
            const duration = animationTimeline.duration();
            closeTimeline = new Promise(resolve => {
                animationTimeline.eventCallback("onReverseComplete", resolve);
                // Fallback на случай если событие не сработает
                setTimeout(resolve, (duration || 0.6) * 1000);
            });
        } else {
            closeTimeline = animateMobileMenuClose(overlay, menu, menuItems, closeButton);
        }
        
        // Ждем завершения анимации
        await closeTimeline;
        
        // Разблокируем скролл после завершения анимации
        unlockBodyScroll();
        
        // Небольшая задержка перед скрытием элемента для плавности
        setTimeout(() => {
            updateIsOpen(false);
            onClosed();
        }, 50);
    }

    function handleOverlayClick(e: Event) {
        if (e.target === overlay) {
            closeMenu();
        }
    }

    // Обработка ESC клавиши
    function handleKeydown(e: KeyboardEvent) {
        if (e.key === 'Escape' && isOpen) {
            closeMenu();
        }
    }

    onMount(() => {
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
            unlockBodyScroll();
        };
    });

    $effect(() => {
        if (isOpen && overlay && menu && closeButton) {
            // Используем requestAnimationFrame для гарантии, что DOM обновлен
            requestAnimationFrame(() => {
                setTimeout(() => openMenu(), 10);
            });
        } else if (!isOpen) {
            unlockBodyScroll();
        }
    });

    function handleLinkClick(href: string) {
        if (href.startsWith('#')) {
            navigateToHash(href);
        } else {
            navigateToPath(href);
        }
        closeMenu();
    }

</script>

{#if isOpen}
    <div
        bind:this={overlay}
        class="mobile-menu-overlay"
        role="button"
        aria-modal="true"
        aria-label="Мобильное меню"
        onclick={handleOverlayClick}
        onkeydown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                handleOverlayClick(event);
            }
        }}
        tabindex="-1"
    >
        <nav
            bind:this={menu}
            class="mobile-menu"
        >
            <!-- Кнопка закрытия -->
            <button
                bind:this={closeButton}
                class="mobile-menu-close"
                onclick={closeMenu}
                aria-label="Закрыть меню"
                type="button"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>

            <!-- Логотип -->
            <div class="mobile-menu-logo">
                <p class="text-2xl font-bold">Логотип</p>
            </div>

            <!-- Навигационные ссылки -->
            <ul class="mobile-menu-links">
                {#each menuLinks as link}
                    <li class="menu-item">
                        <button
                            type="button"
                            onclick={() => handleLinkClick(link.href)}
                        >
                            {link.text}
                        </button>
                    </li>
                {/each}
            </ul>

            <!-- Кнопка связаться -->
            <div class="mobile-menu-button">
                <Button 
                    text="Связаться" 
                    href="#" 
                    className="w-full"
                />
            </div>
        </nav>
    </div>
{/if}

<style>
    .mobile-menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(32, 32, 32, 0.95);
        backdrop-filter: blur(8px);
        z-index: 9999;
        opacity: 0;
        overflow-y: auto;
    }

    .mobile-menu {
        position: relative;
        width: 100%;
        min-height: 100vh;
        background-color: #F3F1EF;
        padding: 2rem 1rem;
        display: flex;
        flex-direction: column;
        opacity: 0;
        transform: translateY(-100px);
    }

    .mobile-menu-close {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: 2px solid #202020;
        border-radius: 50%;
        cursor: pointer;
        color: #202020;
        transition: all 0.2s ease;
        z-index: 10;
    }

    .mobile-menu-close:hover {
        background-color: #202020;
        color: #F3F1EF;
        transform: rotate(90deg);
    }

    .mobile-menu-close:active {
        transform: rotate(90deg) scale(0.95);
    }

    .mobile-menu-logo {
        margin-top: 4rem;
        margin-bottom: 3rem;
        padding-left: 1rem;
    }

    .mobile-menu-logo p {
        color: #202020;
    }

    .mobile-menu-links {
        list-style: none;
        padding: 0;
        margin: 0 0 2rem 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .menu-item {
        opacity: 0;
        transform: translateX(-50px);
    }

    .menu-item button {
        display: block;
        font-family: "Manrope", sans-serif;
        font-weight: 500;
        font-size: 24px;
        color: #4A4A4A;
        padding: 1rem;
        text-decoration: none;
        border-bottom: 1px solid rgba(74, 74, 74, 0.1);
        transition: all 0.3s ease;
        position: relative;
    }

    .menu-item button::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 2px;
        background-color: #F05A28;
        transition: width 0.3s ease;
    }

    .menu-item button:hover {
        color: #202020;
        padding-left: 1.5rem;
    }

    .menu-item button:hover::before {
        width: 4px;
    }

    .mobile-menu-button {
        margin-top: auto;
        padding: 0 1rem 2rem;
        width: 100%;
    }

    @media (min-width: 768px) {
        .mobile-menu-overlay {
            display: none;
        }
    }
</style>
