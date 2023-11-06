<script lang="ts">
	import type { Post } from '$lib/api/newt';

	export let data: Post;

	const article = data.article;
	console.log('$$props', $$props);
	console.log('data', data);
</script>

<main>
	<figure class="conver">
		<img src={article.coverImage.src} alt={article.coverImage.altText} />
	</figure>
	<h1>{article.title}</h1>
	<div>
		<span>{article.author.fullName}</span>
		{#if article.author.profileImage}
			<img src={article.author.profileImage.url} alt={article.author.profileImage.alt} />
		{/if}
		<!-- <span>{data.publishedAt}</span> -->
	</div>
	{@html article.body}
</main>

<style>
	main {
		max-width: 800px;
		margin: 0 auto;
	}

	figure.conver {
		width: 100%;
		height: 300px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	figure.conver img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
