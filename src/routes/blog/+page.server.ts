import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { client, type Post } from '$lib/api/newt';

export const load: PageServerLoad = async () => {
	try {
		const articles = await client.getContents<Post>({ appUid: 'blog', modelUid: 'article' });
		return { articles };
	} catch (e) {
		console.error(e);
		throw error(500, 'Unable to fetch articles');
	}
};
