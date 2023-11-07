<script lang="ts">
	import Avatar from '$lib/ui/Avatar.svelte';
	import SnsIcon from '$lib/ui/SNSIcon.svelte';
	import { createFacebookShareURL, createLineShareURL, createTwitterShareURL } from '$lib/util/sns';
	import type { PageData } from './$types';

	export let data: PageData;

	const article = data.article;
	console.log('$$props', $$props);
	console.log('data', data);

	import RiShareCircleFill from '~icons/ri/share-circle-fill';
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
	<div class="share">
		<a
			href={createTwitterShareURL(`${article.title}\n阪大言語サークルGGC @oulcggc`)}
			title="X（旧Twitter）でシェア"
			target="_blank"
		>
			<SnsIcon type="twitter" />
		</a>
		<a href={createLineShareURL()} title="LINEでシェア" target="_blank">
			<SnsIcon type="line" />
		</a>
		<a href={createFacebookShareURL()} title="Facebookでシェア" target="_blank">
			<SnsIcon type="facebook" />
		</a>
		<button
			class="icon"
			title="URLをコピー"
			on:click={() => {
				navigator.clipboard.writeText(location.href);
			}}
		>
			<RiShareCircleFill height="1em" />
		</button>
	</div>
	<div class="article-body">
		{@html article.body}
	</div>
	<div class="tags">
		{#each article.tags as tag}
			<div class="tag">
				{tag.name}
			</div>
			<!-- <a href={`/blog/tags/${tag.slug}`}>{tag.name}</a> -->
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

	.share {
		grid-area: s;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 0.5em;
		font-size: 1.25em;
		padding-right: 0.5em;
	}

	.share a {
		color: #a8a8a8;
		text-decoration: none;
		transition: color 0.2s ease-in-out;
		font-size: 1.25em;
	}

	.share a:hover {
		color: #184164;
	}

	.share a:visited {
		color: inherit;
	}

	button.icon {
		background: none;
		border: none;
		cursor: pointer;
		font-size: inherit;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	button.icon:hover {
		color: #184164;
	}

	.share button.icon {
		color: #a8a8a8;
		transition: color 0.2s ease-in-out;
	}

	.share button.icon:hover {
		color: #184164;
	}

	.article-body {
		grid-area: c;
		padding: 1em 0;
	}

	.tags {
		grid-area: g;

		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
	}

	.tag {
		border: 1px solid #a8a8a8;
		padding: 0.25em 0.5em;
		border-radius: 0.25em;
		font-size: 0.75em;
	}

	.tag::before {
		content: '# ';
	}
</style>
