<script lang="ts">
	export let content: string;
</script>

<div class="article-body">
	{@html content}
</div>

<style>
	.article-body {
		grid-area: c;
	}

	.article-body :global(pre) {
		background: #f5f5f5;
		padding: 1em;
		border-radius: 0.5em;
	}

	.article-body :global(a) {
		position: relative;

		display: inline-flex;
		justify-content: center;
		align-items: center;

		color: var(--color-theme);
		text-decoration: none;
		transition: color 0.2s ease-in-out;
	}

	.article-body :global(a::after) {
		content: '';
		display: block;
		position: absolute;
		width: 0;
		height: 1px;
		bottom: 1px;
		background: currentColor;
		transition: width 0.3s ease-in-out;
	}

	.article-body :global(a:hover) {
		filter: brightness(1.1);
	}

	.article-body :global(a:hover::after) {
		width: 100%;
	}
</style>
