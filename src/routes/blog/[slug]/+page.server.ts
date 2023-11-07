import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { client, type Post } from '$lib/api/newt';

export const load: PageServerLoad = async ({ params: { slug } }) => {
	try {
		const article = await client.getFirstContent<Post>({
			appUid: 'blog',
			modelUid: 'article',
			query: { slug }
		});

		if (!article) throw error(404, 'Article not found');
		return { article };
	} catch (e) {
		console.error(e);
		throw error(500, 'Unable to fetch article');
	}
};
