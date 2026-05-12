<div class="skeleton" aria-hidden="true">
	<div class="thumb" />
	<div class="line" />
	<div class="line short" />
</div>

<style>
	.skeleton {
		display: grid;
		gap: 0.6em;
	}

	.thumb,
	.line {
		background: linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%);
		background-size: 200% 100%;
		animation: shimmer 1.4s ease-in-out infinite;
		border-radius: 0.4em;
	}

	.thumb {
		width: 100%;
		aspect-ratio: 16 / 9;
		border-radius: 0.5em;
	}

	.line {
		height: 0.9em;
	}

	.line.short {
		width: 55%;
	}

	@keyframes shimmer {
		0% {
			background-position: 200% 0;
		}
		100% {
			background-position: -200% 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.thumb,
		.line {
			animation: none;
		}
	}
</style>
