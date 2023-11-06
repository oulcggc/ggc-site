<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	console.log('data', data);
</script>

<!-- {#await getArticles() then articles} -->
{#each data.articles.items as article}
	<div class="card">
		<h3>
			<a href={`/blog/${article.slug}`}>{article.title}</a>
		</h3>
		<p>{article.body}</p>
	</div>
{/each}
<!-- {/await} -->
