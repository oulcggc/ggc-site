import { getArticles } from '$lib/api/newt';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const articles = await getArticles();
	console.log(articles);
	return { articles };
};
