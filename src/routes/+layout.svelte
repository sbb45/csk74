<script lang="ts">
    import './layout.css';
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import {onMount} from "svelte";
    import {isLarge} from "$lib/stores/breakpoint";
    import {loadGSAP} from "$lib/gsap";
    import {get} from "svelte/store";
    import {scrollWhenReady, setSmootherReady} from "$lib/gsap/scrollTo";
    import {afterNavigate} from "$app/navigation";

    let { children, data } = $props();

    // SEO
    const { seo, siteConfig } = data;
    const jsonLdLocalBusiness = {
        '@context': 'https://schema.org',
        '@type': 'HomeAndConstructionBusiness',
        name: siteConfig.name,
        url: siteConfig.url,
        telephone: siteConfig.phone,
        image: siteConfig.logo,
        address: {
            '@type': 'PostalAddress',
            addressLocality: siteConfig.address.locality,
            addressCountry: siteConfig.address.country
        },
        areaServed: {
            '@type': 'AdministrativeArea',
            name: 'Челябинск и Челябинская область'
        },
        description: siteConfig.description
    };

    // Проверка ширины экрана
    onMount(()=>{
        function update(){
            isLarge.set(window.innerWidth > 768);
        }
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    });

    // Запрещаем скрол пока не загрузился сайт
    onMount(() => {
        document.documentElement.classList.add("lock-scroll");
        document.body.classList.add("lock-scroll");
    });

    // Плавная прокрутка
    onMount(async () => {
        const { ScrollSmoother } = await loadGSAP();
        if (!ScrollSmoother) return;

        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.2,
            effects: true,
            normalizeScroll: true,
            smoothTouch: 0.1,
            speed: get(isLarge) ? 0.7 : 1
        });

        setTimeout(() => {
            document.documentElement.classList.remove("lock-scroll");
            document.body.classList.remove("lock-scroll");
            setSmootherReady();
        }, 100);
    });

    afterNavigate((nav) => {
        if (!nav?.to) return;
        const { pathname, hash } = nav.to.url;
        if (pathname === '/' && hash) {
            scrollWhenReady(hash);
        }
    });
</script>

<svelte:head>
    <!-- Основное -->
    <title>{seo.title}</title>
    <meta name="description" content={seo.description} />
    <meta name="language" content={siteConfig.language} />
    {#if seo.noindex}
        <meta name="robots" content="noindex, nofollow" />
    {:else}
        <meta name="robots" content="index, follow" />
    {/if}

    <!-- Canonical -->
    <link rel="canonical" href={seo.canonical} />

    <!-- Open Graph -->
    <meta property="og:type" content={seo.ogType} />
    <meta property="og:title" content={seo.ogTitle} />
    <meta property="og:description" content={seo.ogDescription} />
    <meta property="og:url" content={seo.url} />
    <meta property="og:site_name" content={`${siteConfig.name} — ${siteConfig.tagline}`} />
    <meta property="og:locale" content={siteConfig.locale} />
    {#if seo.image}
        <meta property="og:image" content={seo.image} />
    {/if}

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={seo.ogTitle} />
    <meta name="twitter:description" content={seo.ogDescription} />
    {#if seo.image}
        <meta name="twitter:image" content={seo.image} />
    {/if}

    <!-- JSON-LD LocalBusiness -->
    <script type="application/ld+json">
        {JSON.stringify(jsonLdLocalBusiness)}
    </script>
</svelte:head>


<Header />
<div id="smooth-wrapper">
    <div id="smooth-content">
        {@render children()}
        <Footer />
    </div>
</div>