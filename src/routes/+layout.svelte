<script lang="ts">
	import './layout.css';
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";

	
	let { children } = $props();
</script>

<Header />
{@render children()}
<Footer />
