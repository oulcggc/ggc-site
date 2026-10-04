import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { client, type Post } from '#lib/api/newt.ts';

export const load: PageServerLoad = async ({ params: { slug } }) => {
	let article: Post | null;
	try {
		article = await client.getFirstContent<Post>({
			appUid: 'blog',
			modelUid: 'article',
			query: { slug }
		});
	} catch (e) {
		console.error(e);
		error(500, 'Unable to fetch article');
	}

	if (!article) error(404, 'Article not found');
	return { article };
};
