<script lang="ts">
	import './layout.css';
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import {onMount} from "svelte";
    import {isLarge} from "$lib/stores/breakpoint";
    import {loadGSAP} from "$lib/gsap";
    import {get} from "svelte/store";

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

    // Плавная прокрутка
    onMount(async ()=>{
        const {ScrollSmoother} = await loadGSAP();
        if(!ScrollSmoother) return;
        const large = get(isLarge)

        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.2,
            effects: true,
            normalizeScroll: true,
            smoothTouch: 0.1,
            speed: large ? 0.5 : 1
        })
    });
</script>

<Header />
<div id="smooth-wrapper">
    <div id="smooth-content">
        {@render children()}
        <Footer />
    </div>
</div>