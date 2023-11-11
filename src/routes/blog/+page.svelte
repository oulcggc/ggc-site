<script lang="ts">
	import BlogResult from '$lib/ui/blog/BlogResult.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	console.log('data', data);
</script>

<main>
	{#each data.articles.items as article}
		<BlogResult {article} />
	{/each}
</main>

<style>
	main {
		max-width: 800px;
		margin: 0 auto;

		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: stretch;
		gap: 2em;
	}
</style>
