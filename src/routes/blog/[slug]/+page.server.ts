import type { PageServerLoad } from './$types';
import { getArticleBySlug } from '$lib/api/newt';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const article = await getArticleBySlug(params.slug);
		if (!article) throw error(404, 'Article not found');
		return { article };
	} catch (e) {
		console.error(e);
		throw error(500, 'Unable to fetch article');
	}
};
