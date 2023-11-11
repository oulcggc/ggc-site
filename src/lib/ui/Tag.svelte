<script lang="ts">
	export let name: string;
	export let slug: string;
</script>

<div class="tag" title="キーワード">
	{name}
</div>

<!-- TODO: -->
<!-- <a href={`/blog/tags/${tag.slug}`}>{tag.name}</a> -->
<style>
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
