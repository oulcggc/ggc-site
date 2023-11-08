<script lang="ts">
	// No script content is needed for a skeleton component
</script>

<div class="card skeleton">
	<div class="thumbnail placeholder" />
	<!-- svelte-ignore a11y-missing-content -->
	<h3 class="title placeholder" />
	<div class="author">
		<div class="avatar placeholder" />
		<div class="name placeholder" />
	</div>
	<div class="date placeholder" />
	<div class="favorite placeholder" />
</div>

<style>
	.skeleton {
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

	.skeleton::before,
	.skeleton .placeholder {
		background: #e0e0e0;
		background-image: linear-gradient(90deg, #e0e0e0 0px, #c0c0c0 50%, #e0e0e0 100%);
		background-size: 200% 100%;
		animation: loading 1s infinite alternate;
	}

	.thumbnail {
		grid-area: thumbnail;
		width: 100%;
		aspect-ratio: 16 / 9;
		border-radius: 0.35em;
	}

	.title,
	.name,
	.date,
	.favorite {
		height: 1em;
		margin: 0.5em 0;
	}

	.title {
		grid-area: title;
		width: 50%;
	}

	.name {
		width: 5em;
	}

	.date {
		width: 3em;
	}

	.favorite {
		width: 2em;
	}

	.author {
		grid-area: author;
		display: flex;
		align-items: center;
		gap: 0.5em;
	}

	.avatar {
		width: 1.2em;
		height: 1.2em;
		border-radius: 50%;
	}

	.favorite {
		grid-area: favorite;
		display: flex;
		align-items: center;
		gap: 0.25em;
	}

	@keyframes loading {
		0% {
			background-position: -50% 0;
		}
		100% {
			background-position: 50% 0;
		}
	}
</style>
