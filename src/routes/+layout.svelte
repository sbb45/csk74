<script lang="ts">
	import './layout.css';
    import Header from "./Header.svelte";

	
	let { children } = $props();
</script>

<Header />
{@render children()}
