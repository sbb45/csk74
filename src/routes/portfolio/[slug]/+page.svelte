<script lang="ts">
    import Button from "$lib/components/ui/Button.svelte";
    import {navigateToHash} from "$lib/gsap/scrollTo";
    import { loadGSAP } from "$lib/gsap";
    import { browser } from '$app/environment';
    import { siteConfig } from '$lib/seo';

    export let data;
    const project = data.project;
    const seo = data.seo;
    
    // Schema.org для проекта
    const jsonLdArticle = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: project.title,
        description: project.shortDesc || project.description,
        image: `${siteConfig.url}${project.image}`,
        datePublished: project.date ? `${project.date}-01-01` : undefined,
        author: {
            '@type': 'Organization',
            name: 'Центр Силового Каркаса'
        },
        publisher: {
            '@type': 'Organization',
            name: 'Центр Силового Каркаса',
            logo: {
                '@type': 'ImageObject',
                url: siteConfig.logo
            }
        }
    };

    import { onMount, onDestroy, tick } from 'svelte';

    let selectedImage: string | null = null;
    let overlay: HTMLElement;
    let zoomedImage: HTMLElement;
    let gsapInstance: any = null;
    let scrollY = 0;

    function lockScroll() {
        if (!browser) return;
        
        // Сохраняем текущую позицию скролла
        scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        
        // Блокируем прокрутку профессиональным способом
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        
        // Блокируем touch события на мобильных
        document.body.style.touchAction = 'none';
        
        // Скрываем header
        const header = document.querySelector('header');
        if (header) {
            (header as HTMLElement).style.display = 'none';
        }
    }

    function unlockScroll() {
        if (!browser) return;
        
        // Восстанавливаем прокрутку
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        document.body.style.touchAction = '';
        
        // Показываем header обратно
        const header = document.querySelector('header');
        if (header) {
            (header as HTMLElement).style.display = '';
        }
        
        // Восстанавливаем позицию скролла
        window.scrollTo(0, scrollY);
    }

    async function openZoom(imgSrc: string) {
        selectedImage = imgSrc;
        lockScroll();
        
        // Ждем рендера элементов
        await tick();
        
        if (gsapInstance && overlay && zoomedImage) {
            gsapInstance.set(overlay, { opacity: 0, display: 'flex' });
            gsapInstance.set(zoomedImage, { scale: 0.7, opacity: 0 });
            
            gsapInstance.to(overlay, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out"
            });
            
            gsapInstance.to(zoomedImage, {
                scale: 0.9,
                opacity: 1,
                duration: 0.4,
                ease: "power3.out"
            }, "-=0.1");
        }
    }

    function closeZoom() {
        if (gsapInstance && overlay && zoomedImage) {
            gsapInstance.to([overlay, zoomedImage], {
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    selectedImage = null;
                    unlockScroll();
                }
            });
            
            gsapInstance.to(zoomedImage, {
                scale: 0.7,
                duration: 0.3,
                ease: "power2.in"
            }, "<");
        } else {
            selectedImage = null;
            unlockScroll();
        }
    }

    function handleOverlayClick(e: MouseEvent) {
        if (e.target === overlay) {
            closeZoom();
        }
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === 'Escape' && selectedImage) {
            closeZoom();
        }
    }

    function preventScroll(e: WheelEvent | TouchEvent) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    function handleWheel(e: WheelEvent) {
        e.preventDefault();
        e.stopPropagation();
    }

    function handleTouchMove(e: TouchEvent) {
        e.preventDefault();
        e.stopPropagation();
    }

    onMount(() => {
        if (!browser) return;
        
        loadGSAP().then(({ gsap }) => {
            gsapInstance = gsap;
        });
        
        window.addEventListener('keydown', handleKeydown);
        
        return () => {
            window.removeEventListener('keydown', handleKeydown);
            unlockScroll();
        };
    });

    onDestroy(() => {
        if (browser) {
            unlockScroll();
        }
    });
</script>

<svelte:head>
    <!-- JSON-LD Article для проекта -->
    <script type="application/ld+json">
        {JSON.stringify(jsonLdArticle)}
    </script>
    
    <!-- JSON-LD BreadcrumbList -->
    <script type="application/ld+json">
        {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Главная',
                    item: siteConfig.url
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Портфолио',
                    item: `${siteConfig.url}/portfolio`
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: project.title,
                    item: `${siteConfig.url}/portfolio/${project.slug}`
                }
            ]
        })}
    </script>
</svelte:head>


<section class="mt-24 px-2 xl:px-32">
    <div class="relative mb-10 overflow-hidden rounded-b-xl xl:rounded-b-3xl xl:max-h-[70vh]">
        <picture>
            <source srcset={project.image} type="image/webp">
            <img
                    src={project.image2}
                    alt={`${project.title} - каркасный ${project.type || 'дом'} ${project.area ? `${project.area} м²` : ''} ${project.location ? `в ${project.location}` : ''}`}
                    class="aspect-[16/9] w-full object-cover h-[50vh] xl:h-auto"
                    fetchpriority="high"
                    decoding="async"
            />
        </picture>

        <div class="absolute inset-0 bg-black/40"></div>

        <div class="absolute bottom-6 left-6 text-white">
            <h1 class="font-bounded text-3xl md:text-5xl">{project.title}</h1>

            <p class="mt-2 text-sm md:text-base text-white/90">
                {project.location}{project.location && project.date ? " · " : ""}{project.date}
            </p>

            {#if project.area}
                <p class="mt-1 text-sm md:text-base text-white/90">
                    Площадь: {project.area} м²
                </p>
            {/if}
        </div>
    </div>

    <!-- ОСНОВНОЙ ТЕКСТ -->
    {#if project.description}
        <div class="mx-auto max-w-3xl px-2 md:px-0">
            <h2 class="mb-3 font-bounded text-2xl">Описание проекта</h2>

            <p class="text-gray-700 leading-relaxed">
                {project.description}
            </p>
        </div>
    {/if}

    <!-- ГАЛЕРЕЯ -->
    {#if project.gallery?.length}
        <div class="mt-12">
            <h2 class="mb-4 text-center font-bounded text-2xl">Галерея</h2>

            <div class="grid gap-4 px-2 md:grid-cols-3 lg:grid-cols-4">
                {#each project.gallery as img, i}
                    <div
                            class="gallery-item overflow-hidden rounded-[20px] cursor-zoom-in"
                            role="button"
                            tabindex="0"
                            aria-label="Увеличить изображение"
                            onclick={() => openZoom(img)}
                            onkeydown={(e) => e.key === 'Enter' && openZoom(img)}
                    >
                        <picture class="gallery-picture">
                            <source srcset={img} type="image/webp" />
                            <img
                                    src={project.gallery2?.[i] ?? img}
                                    alt={`${project.title} - фото ${i + 1}`}
                                    class="gallery-image w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                    width="400"
                                    height="300"
                            />
                        </picture>
                    </div>
                {/each}
            </div>
        </div>
    {/if}


    <!-- ZOOM OVERLAY -->
    {#if selectedImage}
        <div
            bind:this={overlay}
            class="image-zoom-overlay"
            onclick={closeZoom}
            onkeydown={(e) => e.key === 'Enter' && handleOverlayClick(e as any)}
            onwheel={handleWheel}
            ontouchmove={handleTouchMove}
            role="button"
            aria-label="Закрыть увеличенное изображение"
            tabindex="0"
        >
            <button
                class="image-zoom-close"
                onclick={closeZoom}
                aria-label="Закрыть"
                type="button"
            >
                ✕
            </button>
            <div class="image-zoom-img-wrapper">
                <img
                    bind:this={zoomedImage}
                    src={selectedImage}
                    alt="Увеличенное изображение"
                    class="image-zoom-img"
                />
            </div>
        </div>
    {/if}

    <!-- ХАРАКТЕРИСТИКИ -->
    <div class="mx-auto mt-16 max-w-3xl px-2 md:px-0">
        <h2 class="mb-4 font-bounded text-2xl">Характеристики</h2>

        <div class="grid gap-4 sm:grid-cols-2">
            {#if project.area}
                <div class="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                    <p class="text-gray-500 text-sm">Площадь</p>
                    <p class="text-xl font-bounded">{project.area} м²</p>
                </div>
            {/if}

            {#if project.floors}
                <div class="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                    <p class="text-gray-500 text-sm">Этажность</p>
                    <p class="text-xl font-bounded">{project.floors}</p>
                </div>
            {/if}

            {#if project.tech}
                <div class="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                    <p class="text-gray-500 text-sm">Технология</p>
                    <p class="text-xl font-bounded">{project.tech}</p>
                </div>
            {/if}

            {#if project.foundation}
                <div class="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                    <p class="text-gray-500 text-sm">Фундамент</p>
                    <p class="text-xl font-bounded">{project.foundation}</p>
                </div>
            {/if}
        </div>
        <Button
                text="Обсудить ваш проект"
                href="/"
                className="mt-14! mx-auto w-80! 2xl:mt-82 2xl:w-84! 3xl:min-w-94"
        />
    </div>

</section>

<style>
    .image-zoom-overlay {
        position: fixed;
        top: -96px;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
        cursor: zoom-out;
        overflow: hidden;
        touch-action: none;
        -webkit-overflow-scrolling: none;
    }

    .image-zoom-img-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        max-width: 100vw;
        max-height: 102vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
    }

    .image-zoom-img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
        border-radius: 0;
        box-shadow: none;
        cursor: default;
        pointer-events: none;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }

    .image-zoom-close {
        position: absolute;
        top: 2rem;
        right: 2rem;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.1);
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        color: white;
        font-size: 24px;
        cursor: pointer;
        transition: all 0.2s ease;
        z-index: 10000;
    }

    .image-zoom-close:hover {
        background-color: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.5);
        transform: rotate(90deg);
    }

    .image-zoom-close:active {
        transform: rotate(90deg) scale(0.95);
    }

    @media (max-width: 768px) {
        .image-zoom-close {
            top: 1rem;
            right: 1rem;
            width: 40px;
            height: 40px;
            font-size: 20px;
        }
    }

    /* Галерея - одинаковый размер для всех изображений */
    .gallery-item {
        aspect-ratio: 4 / 3;
        position: relative;
    }

    .gallery-picture {
        width: 100%;
        height: 100%;
        display: block;
    }

    .gallery-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
</style>
