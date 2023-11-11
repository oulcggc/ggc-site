<script lang="ts">
	import type { Post } from '$lib/api/newt';
	import Avatar from './Avatar.svelte';

	import RiHeart3Line from '~icons/ri/heart-3-line';

	export let article: Post;
</script>

<div class="card">
	<a href={`/blog/${article.slug}`}>
		<img
			class="thumbnail"
			src={article.coverImage.src}
			alt="{article.title}のサムネイル"
			title="{article.title}のサムネイル"
		/>
	</a>
	<h3>
		<a href={`/blog/${article.slug}`} class="text" title={article.title}>
			{article.title}
		</a>
	</h3>
	<div class="author">
		<Avatar author={article.author} size="small" />
		<span>{article.author.fullName}</span>
	</div>
	<div class="date">
		{new Intl.RelativeTimeFormat('ja-JP', {
			style: 'narrow',
			numeric: 'auto'
		}).format(
			Math.round(
				(new Date(article._sys.updatedAt).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
			),
			'day'
		)}
	</div>
	<div class="favorite">
		<RiHeart3Line height="1em" />
		<span> 0 </span>
	</div>
</div>

<style>
	.card {
		display: grid;
		grid-template-areas:
			'thumbnail thumbnail thumbnail'
			'title title title'
			'author date favorite';
		grid-template-columns: 1fr auto auto;

		justify-items: start;
		align-items: center;

		gap: 0.5em;

		width: 100%;

		container: card / inline-size;
	}

	.card:focus-within {
		outline: 2px solid var(--color-theme);
	}

	a:not(.text) {
		display: contents;
	}

	.card .thumbnail {
		grid-area: thumbnail;

		width: 100%;
		aspect-ratio: 16 / 9;

		border-radius: 0.35em;

		object-fit: cover;
		transition: opacity 0.2s ease-in-out;
	}

	.card:hover .thumbnail {
		opacity: 0.75;
	}

	.card h3 {
		grid-area: title;

		width: 100%;

		font-size: 1.25rem;
		font-weight: bold;
		margin: 0;
		line-height: 1.5;
		overflow: hidden;

		color: transparent;

		background: linear-gradient(to right, transparent, gray);
		background-clip: text;
		-webkit-background-clip: text;

		position: relative;
		mix-blend-mode: hard-light;
	}

	.card h3::after {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: linear-gradient(to right, transparent 80%, rgba(255, 255, 255, 0.3) 100%);
		pointer-events: none;
	}

	a.text {
		display: flex;
		justify-content: left;

		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.card .author {
		grid-area: author;

		display: flex;
		align-items: center;
		gap: 0.5em;
		font-size: 0.85rem;

		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.card .date {
		grid-area: date;
		font-size: 0.75rem;
		transition: opacity 0.2s ease-in-out;
	}

	.card .favorite {
		grid-area: favorite;

		display: flex;
		align-items: center;
		gap: 0.25em;
	}

	@container card (max-width: 15em) {
		.card .date {
			opacity: 0;
		}
	}
</style>
