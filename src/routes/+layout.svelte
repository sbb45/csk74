<script lang="ts">
    import './layout.css';
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import { onMount, onDestroy } from "svelte";
    import { isLarge } from "$lib/stores/breakpoint";
    import { loadGSAP } from "$lib/gsap";
    import { get } from "svelte/store";
    import { scrollWhenReady, setSmootherReady } from "$lib/gsap/scrollTo";
    import { afterNavigate } from "$app/navigation";

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
    
    const lockScroll = () => {
        document.documentElement.classList.add("lock-scroll");
        document.body.classList.add("lock-scroll");
    };

    const unlockScroll = () => {
        document.documentElement.classList.remove("lock-scroll");
        document.body.classList.remove("lock-scroll");
    };

    let smoother: any = null;
    let ScrollTriggerRef: any = null;
    let ScrollSmootherRef: any = null;

    onMount(() => {
        function update() {
            isLarge.set(window.innerWidth > 768);
        }
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    });

    onMount(async () => {
        const lockScroll = () => {
            document.documentElement.classList.add("lock-scroll");
            document.body.classList.add("lock-scroll");
        };
        const unlockScroll = () => {
            document.documentElement.classList.remove("lock-scroll");
            document.body.classList.remove("lock-scroll");
        };

        lockScroll();

        const ready = () => {
            unlockScroll();
            setSmootherReady();
        };

        try {
            const { gsap, ScrollTrigger, ScrollSmoother } = await loadGSAP();
            if (!gsap || !ScrollTrigger || !ScrollSmoother) {
                document.documentElement.classList.add("smoother-off");
                ready();
                return;
            }

            const prefersReducedMotion =
                window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
            const isCoarsePointer =
                window.matchMedia?.("(hover: none) and (pointer: coarse)")?.matches ?? false;
            const isTouchOnly = ScrollTrigger.isTouch === 1;

            const disableSmoother = prefersReducedMotion || isCoarsePointer || isTouchOnly;

            if (disableSmoother) {
                document.documentElement.classList.add("smoother-off");

                ScrollSmoother.get()?.kill?.();
                gsap.set(["#smooth-wrapper", "#smooth-content"], { clearProps: "all" });

                ready();
                return;
            }

            document.documentElement.classList.remove("smoother-off");

            ScrollSmoother.create({
                wrapper: "#smooth-wrapper",
                content: "#smooth-content",
                smooth: 1.2,
                effects: true,
                normalizeScroll: true,
                speed: get(isLarge) ? 0.7 : 1
            });

            requestAnimationFrame(() => {
                ready();
                ScrollTrigger.refresh();
            });
        } catch (e) {
            document.documentElement.classList.add("smoother-off");
            ready();
        }
    });


    afterNavigate((nav) => {
        ScrollTriggerRef?.refresh?.();

        if (!nav?.to) return;
        const { pathname, hash } = nav.to.url;
        if (pathname === '/' && hash) {
            scrollWhenReady(hash);
        }
    });

    onDestroy(() => {
        smoother?.kill?.();
        smoother = null;
        ScrollSmootherRef?.get?.()?.kill?.();
    });
</script>

<svelte:head>
    <title>{seo.title}</title>
    <meta name="description" content={seo.description} />
    <meta name="language" content={siteConfig.language} />
    {#if seo.noindex}
        <meta name="robots" content="noindex, nofollow" />
    {:else}
        <meta name="robots" content="index, follow" />
    {/if}

    <link rel="canonical" href={seo.canonical} />

    <meta property="og:type" content={seo.ogType} />
    <meta property="og:title" content={seo.ogTitle} />
    <meta property="og:description" content={seo.ogDescription} />
    <meta property="og:url" content={seo.url} />
    <meta property="og:site_name" content={`${siteConfig.name} — ${siteConfig.tagline}`} />
    <meta property="og:locale" content={siteConfig.locale} />
    {#if seo.image}
        <meta property="og:image" content={seo.image} />
    {/if}

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
