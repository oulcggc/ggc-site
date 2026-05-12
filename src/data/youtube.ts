export const YOUTUBE_HANDLE = 'oulcggc';
export const YOUTUBE_CHANNEL_URL = `https://www.youtube.com/@${YOUTUBE_HANDLE}`;

export type Video = {
	id: string;
	title: string;
	publishedAt: string;
	channelTitle: string;
};
