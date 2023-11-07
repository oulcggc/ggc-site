<script lang="ts">
	import Avatar from '$lib/ui/Avatar.svelte';
	import Tag from '$lib/ui/Tag.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	console.log('data', data);
</script>

<main>
	{#each data.articles.items as article}
		<div class="card">
			<img src={article.coverImage.src} alt={article.coverImage.altText} />
			<h3>
				<a href={`/blog/${article.slug}`}>{article.title}</a>
			</h3>
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
			</div>
			<div class="tags">
				{#each article.tags as { name, slug }}
					<Tag {name} {slug} />
				{/each}
			</div>
			<!-- <p>{@html article.body}</p> -->
		</div>
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

	.card {
		display: grid;
		grid-template-areas:
			'cover cover'
			'title title'
			'metadata tags';
		column-gap: 1em;
		row-gap: 0.5em;
	}

	.card img {
		grid-area: cover;
		width: 100%;
		height: 200px;
		object-fit: cover;
	}

	h3 {
		grid-area: title;
		margin: 0;
	}

	.metadata {
		grid-area: metadata;

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
		grid-area: tags;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
</style>
