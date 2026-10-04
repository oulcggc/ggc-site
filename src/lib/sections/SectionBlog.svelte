<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Contents, Post } from '#lib/api/newt.ts';
	import BlogCard from '#lib/ui/blog/BlogCard.svelte';
	import BlogCardSkeleton from '#lib/ui/blog/BlogCardSkeleton.svelte';
	import RiArticleLine from '~icons/ri/article-line';

	async function fetchArticles(): Promise<Contents<Post>> {
		const res = await fetch(resolve('/api/blog'));
		return await res.json();
	}
</script>

<h2>ブログ</h2>

<!-- TODO: -->
<!-- <h3>注目記事</h3> -->

<h3>最新記事</h3>
<div class="cards">
	{#await fetchArticles()}
		{#each [0, 1, 2] as i (i)}
			<BlogCardSkeleton />
		{/each}
	{:then articles}
		{#each articles.items.slice(0, 3) as article (article._id)}
			<BlogCard {article} />
		{/each}
	{/await}
</div>

<a href={resolve('/blog')} class="text">
	<RiArticleLine height="1.5em" />
	すべての記事を見る
</a>

<style>
	.cards {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
		gap: 1.5em;
	}

	a.text {
		font-weight: bold;
		font-size: 1.15em;
		margin-top: 1em;
	}
</style>
