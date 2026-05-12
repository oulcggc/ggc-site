<script lang="ts">
	import LiteYouTube from '$lib/ui/LiteYouTube.svelte';
	import YouTubeCardSkeleton from '$lib/ui/YouTubeCardSkeleton.svelte';
	import { YOUTUBE_CHANNEL_URL, type Video } from '$data/youtube';
	import RiYoutubeFill from '~icons/ri/youtube-fill';

	async function fetchVideos(): Promise<Video[]> {
		const res = await fetch('/api/youtube');
		if (!res.ok) throw new Error('Failed to load videos');
		const data = (await res.json()) as { items: Video[] };
		return data.items;
	}

	const dateFmt = new Intl.DateTimeFormat('ja-JP', {
		dateStyle: 'long',
		timeZone: 'Asia/Tokyo'
	});
</script>

<h2>YouTube</h2>
<h3>最新の動画</h3>

<div class="grid">
	{#await fetchVideos()}
		{#each Array(3) as _}
			<YouTubeCardSkeleton />
		{/each}
	{:then videos}
		{#if videos.length === 0}
			<p class="empty">まだ動画がありません。</p>
		{:else}
			{#each videos as video}
				<article class="card">
					<LiteYouTube videoId={video.id} title={video.title} />
					<h4>
						<a
							class="text title-link"
							href={`https://www.youtube.com/watch?v=${video.id}`}
							target="_blank"
							rel="noopener"
						>
							{video.title}
						</a>
					</h4>
					<time datetime={video.publishedAt}>
						{dateFmt.format(new Date(video.publishedAt))}
					</time>
				</article>
			{/each}
		{/if}
	{:catch}
		<p class="error">動画を取得できませんでした。後ほどお試しください。</p>
	{/await}
</div>

<a class="text channel-link" href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener">
	<RiYoutubeFill height="1.5em" />
	チャンネルを開く
</a>

<style>
	h2 {
		text-align: center;
	}

	.grid {
		display: grid;
		gap: 1.75em;
		grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
		width: 100%;
		max-width: 60em;
		margin: 0 auto;
	}

	.card {
		display: grid;
		gap: 0.5em;
		align-content: start;
	}

	.card h4 {
		margin: 0;
		font-size: 1em;
		line-height: 1.45;
		color: var(--color-theme);
	}

	.title-link {
		color: inherit;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	time {
		color: #666;
		font-size: 0.85em;
	}

	.empty,
	.error {
		grid-column: 1 / -1;
		color: #888;
		text-align: center;
	}

	.channel-link {
		font-weight: bold;
		margin-top: 1em;
	}
</style>
