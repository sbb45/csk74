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

	let { children } = $props();

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
            speed: get(isLarge) ? 0.6 : 1
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

<Header />
<div id="smooth-wrapper">
    <div id="smooth-content">
        {@render children()}
        <Footer />
    </div>
</div>