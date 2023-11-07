import { getArticles } from '$lib/api/newt';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const articles = await getArticles();
		return { articles };
	} catch (e) {
		console.error(e);
		throw error(500, 'Unable to fetch articles');
	}
};
