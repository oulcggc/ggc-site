<script lang="ts">
	import BlogResult from '$lib/ui/blog/BlogResult.svelte';
	import RiCopyrightLine from '~icons/ri/copyright-line';

	import type { PageData } from './$types';

	export let data: PageData;

	console.log('data', data);
</script>

<main>
	{#each data.articles.items as article}
		<BlogResult {article} />
	{/each}
</main>

<hr />

<footer>
	<p>
		<RiCopyrightLine /> 2022-2023 阪大言語サークルGGC
	</p>
</footer>

<style>
	main {
		max-width: 800px;
		margin: 0 auto;

		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: stretch;
		gap: 2em;

		padding: 1em;
	}

	hr {
		margin-top: 2em;
	}

	footer p {
		margin: 0;

		padding: 1em;

		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.25em;
	}
</style>
