<script lang="ts">
	import './layout.css';
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import {onMount} from "svelte";
    import {isLarge} from "$lib/stores/breakpoint";

	let { children } = $props();

    onMount(()=>{
        function update(){
            isLarge.set(window.innerWidth > 768);
        }
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    });
</script>

<Header />
{@render children()}
<Footer />
