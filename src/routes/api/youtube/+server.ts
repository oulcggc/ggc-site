import { error, json } from '@sveltejs/kit';
import { getLatestVideos } from '$lib/api/youtube';

export const GET = async ({ setHeaders }): Promise<Response> => {
	try {
		const items = await getLatestVideos(6);
		setHeaders({
			'cache-control': 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400'
		});
		return json({ items });
	} catch (e) {
		console.error(e);
		throw error(500, 'Unable to fetch YouTube videos');
	}
};
