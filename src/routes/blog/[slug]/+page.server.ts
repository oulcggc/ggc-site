import type { PageServerLoad } from './$types';
import { getArticleBySlug } from '$lib/api/newt';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const article = await getArticleBySlug(params.slug);

	if (article) return { article };

	throw error(404, 'Article not found');
};
