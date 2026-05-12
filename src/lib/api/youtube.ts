import { YOUTUBE_CHANNEL_URL, type Video } from '$data/youtube';

let cachedChannelId: string | null = null;

const CHANNEL_ID_PATTERNS = [
	/"channelId":"(UC[A-Za-z0-9_-]{22})"/,
	/"externalId":"(UC[A-Za-z0-9_-]{22})"/,
	/channel\/(UC[A-Za-z0-9_-]{22})/
];

async function resolveChannelId(): Promise<string> {
	if (cachedChannelId) return cachedChannelId;

	const res = await fetch(YOUTUBE_CHANNEL_URL, {
		headers: {
			'user-agent': 'Mozilla/5.0 (compatible; ggc-site/1.0; +https://ggc-osaka.pages.dev/)',
			'accept-language': 'ja,en;q=0.8'
		}
	});
	if (!res.ok) throw new Error(`Failed to load channel page (${res.status})`);

	const html = await res.text();
	for (const pattern of CHANNEL_ID_PATTERNS) {
		const match = html.match(pattern);
		if (match) {
			cachedChannelId = match[1];
			return cachedChannelId;
		}
	}
	throw new Error('Could not extract channel ID from channel page');
}

function unescapeXml(s: string): string {
	return s
		.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&apos;/g, "'")
		.replace(/&#39;/g, "'")
		.replace(/&amp;/g, '&');
}

export async function getLatestVideos(limit = 6): Promise<Video[]> {
	const channelId = await resolveChannelId();
	const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

	const res = await fetch(rssUrl);
	if (!res.ok) throw new Error(`Failed to load channel feed (${res.status})`);
	const xml = await res.text();

	const videos: Video[] = [];
	const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
	let m: RegExpExecArray | null;
	while ((m = entryRegex.exec(xml)) !== null) {
		const entry = m[1];
		const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
		const title = entry.match(/<title>([\s\S]*?)<\/title>/)?.[1];
		const publishedAt = entry.match(/<published>([^<]+)<\/published>/)?.[1];
		const channelTitle = entry.match(
			/<author>[\s\S]*?<name>([^<]+)<\/name>[\s\S]*?<\/author>/
		)?.[1];

		if (id && title && publishedAt) {
			videos.push({
				id,
				title: unescapeXml(title).trim(),
				publishedAt,
				channelTitle: channelTitle ? unescapeXml(channelTitle).trim() : ''
			});
			if (videos.length >= limit) break;
		}
	}

	return videos;
}
