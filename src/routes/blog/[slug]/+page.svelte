<script lang="ts">
	import Avatar from '$lib/ui/Avatar.svelte';
	import Article from '$lib/ui/blog/Article.svelte';
	import Tag from '$lib/ui/Tag.svelte';
	import {
		SNS,
		createFacebookShareURL,
		createLineShareURL,
		createTwitterShareURL
	} from '$lib/util/sns';
	import type { PageData } from './$types';
	import ArticleShare from '$lib/ui/blog/ArticleShare.svelte';
	import { page } from '$app/stores';

	export let data: PageData;

	const article = data.article;
	console.log('$$props', $$props);
	console.log('data', data);

	const shareLinks = new Map<SNS, string>([
		[
			'twitter',
			createTwitterShareURL($page.url.toString(), `${article.title}\n阪大言語サークルGGC @oulcggc`)
		],
		['facebook', createFacebookShareURL($page.url.toString())],
		['line', createLineShareURL($page.url.toString())]
	] as [SNS, string][]);
</script>

<main>
	<figure class="cover">
		<img src={article.coverImage.src} alt={article.coverImage.altText} />
	</figure>
	<h1>{article.title}</h1>
	<div class="metadata">
		<span class="name">{article.author.fullName}</span>
		<Avatar author={article.author} />
		<span class="date"
			>{new Intl.DateTimeFormat('ja-JP', {
				dateStyle: 'long',
				timeStyle: 'short',
				timeZone: 'Asia/Tokyo'
			}).format(new Date(article._sys.updatedAt))}</span
		>
		<!-- <span>{data.publishedAt}</span> -->
	</div>
	<ArticleShare links={shareLinks} />
	<Article content={article.body} />
	<div class="tags">
		{#each article.tags as tag}
			<Tag name={tag.name} slug={tag.slug} />
		{/each}
	</div>
</main>

<style>
	main {
		max-width: 800px;
		margin: 0 auto;

		display: grid;

		grid-template-areas:
			'f f'
			't t'
			'm s'
			'c c'
			'g g';

		gap: 1em;
	}

	h1 {
		grid-area: t;
	}

	figure.cover {
		grid-area: f;

		width: 100%;
		height: 300px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		margin: 0;
	}

	figure.cover img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.metadata {
		grid-area: m;

		display: grid;
		grid-template-areas:
			'avatar name'
			'avatar date';
		grid-template-columns: 50px 1fr;
		grid-template-rows: 1fr 1fr;

		justify-content: start;
		align-items: center;

		column-gap: 0.8em;

		font-size: 15px;
		line-height: 1.75;
	}

	.metadata .name {
		grid-area: name;
		align-self: end;
		font-weight: bold;
	}

	.tags {
		grid-area: g;

		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
	}

	@media (max-width: 800px) {
		main > :global(*:not(figure)) {
			margin-left: 1rem;
			margin-right: 1rem;
		}
	}
</style>
