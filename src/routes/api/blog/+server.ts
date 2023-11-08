import { error, json } from '@sveltejs/kit';
import { client, type Post } from '$lib/api/newt';

export const GET = async (request: Request): Promise<Response> => {
	try {
		const contents = await client.getContents<Post>({ appUid: 'blog', modelUid: 'article' });
		return json(contents);
	} catch (e) {
		console.error(e);
		throw error(500, 'Unable to fetch contents');
	}
};
