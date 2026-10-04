<script lang="ts">
	import type { Snippet } from 'svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import '../main.css';

	let { children }: { children: Snippet } = $props();
</script>

{@render children()}

<Footer />
