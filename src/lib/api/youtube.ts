import { PRIVATE_YOUTUBE_API_KEY } from '$app/env/private';
import { YOUTUBE_CHANNEL_ID, type Video } from '#data/youtube.ts';

// Every channel's uploads live in a playlist whose ID swaps the channel's "UC" prefix for "UU".
const UPLOADS_PLAYLIST_ID = `UU${YOUTUBE_CHANNEL_ID.slice(2)}`;

type PlaylistItem = {
	snippet: { title: string };
	contentDetails: { videoId: string; videoPublishedAt?: string };
};

export async function getLatestVideos(limit = 6): Promise<Video[]> {
	if (!PRIVATE_YOUTUBE_API_KEY) throw new Error('PRIVATE_YOUTUBE_API_KEY is not set');

	const url = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
	url.search = new URLSearchParams({
		part: 'snippet,contentDetails',
		playlistId: UPLOADS_PLAYLIST_ID,
		maxResults: '50',
		key: PRIVATE_YOUTUBE_API_KEY
	}).toString();

	const res = await fetch(url);
	if (!res.ok) throw new Error(`YouTube Data API responded ${res.status}: ${await res.text()}`);
	const { items } = (await res.json()) as { items: PlaylistItem[] };

	// Private and deleted uploads stay in the playlist but have no publish date.
	return items
		.filter((item) => item.contentDetails.videoPublishedAt)
		.map((item) => ({
			id: item.contentDetails.videoId,
			title: item.snippet.title,
			publishedAt: item.contentDetails.videoPublishedAt!
		}))
		.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
		.slice(0, limit);
}
