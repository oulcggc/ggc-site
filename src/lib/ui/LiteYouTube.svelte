<script lang="ts">
	export let videoId: string;
	export let title: string;

	let activated = false;

	function activate() {
		activated = true;
	}

	$: thumbUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
	$: embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
</script>

<div class="lite-yt" class:activated>
	{#if activated}
		<iframe
			src={embedUrl}
			{title}
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	{:else}
		<button type="button" class="play" aria-label={`動画を再生: ${title}`} on:click={activate}>
			<img src={thumbUrl} alt="" loading="lazy" decoding="async" />
			<span class="badge" aria-hidden="true">
				<svg viewBox="0 0 68 48">
					<path
						class="badge-bg"
						d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74 0 13.05 0 24 0 24s0 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C68 34.95 68 24 68 24s0-10.95-1.48-16.26z"
					/>
					<path d="M45 24 27 14v20z" fill="#fff" />
				</svg>
			</span>
		</button>
	{/if}
</div>

<style>
	.lite-yt {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 9;
		background: #000;
		border-radius: 0.5em;
		overflow: hidden;
		box-shadow: 0 4px 18px rgba(24, 65, 100, 0.08);
	}

	.play {
		display: block;
		width: 100%;
		height: 100%;
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
		position: relative;
	}

	.play img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.45s ease;
	}

	.play:hover img,
	.play:focus-visible img {
		transform: scale(1.04);
	}

	.badge {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 4.5em;
		transform: translate(-50%, -50%);
		filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.45));
		transition: transform 0.25s ease;
	}

	.badge svg {
		width: 100%;
		height: auto;
		display: block;
	}

	.badge-bg {
		fill: #212121;
		opacity: 0.85;
		transition:
			fill 0.2s ease,
			opacity 0.2s ease;
	}

	.play:hover .badge,
	.play:focus-visible .badge {
		transform: translate(-50%, -50%) scale(1.08);
	}

	.play:hover .badge-bg,
	.play:focus-visible .badge-bg {
		fill: #ff0000;
		opacity: 1;
	}

	iframe {
		width: 100%;
		height: 100%;
		border: 0;
	}

	@media (prefers-reduced-motion: reduce) {
		.play img,
		.badge,
		.badge-bg {
			transition: none;
		}
	}
</style>
