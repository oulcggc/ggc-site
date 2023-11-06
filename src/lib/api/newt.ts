import { createClient, type Content, type Contents, type Image } from 'newt-client-js';
import { PRIVATE_NEWT_CDN_TOKEN, PRIVATE_NEWT_SPACE_UID } from '$env/static/private';

export interface Post extends Content {
	title: string;
	body: string;
	coverImage: Image;
	author: {
		fullName: string;
		slug: string;
		biography: string;
		profileImage: Image | null;
	};
	tags: string[];
}

const client = createClient({
	spaceUid: PRIVATE_NEWT_SPACE_UID,
	token: PRIVATE_NEWT_CDN_TOKEN,
	apiType: 'cdn'
});

export async function getArticles(): Promise<Contents<Post>> {
	return client.getContents<Post>({ appUid: 'blog', modelUid: 'article' });
}

export async function getArticleBySlug(slug: string): Promise<Post | null> {
	return client.getFirstContent<Post>({ appUid: 'blog', modelUid: 'article', query: { slug } });
}
