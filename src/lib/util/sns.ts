export const SNS = ['twitter', 'line', 'facebook', 'instagram', 'github'] as const;
export type SNS = (typeof SNS)[number];

export function createTwitterShareURL(content: string): string {
	const url = new URL('https://twitter.com/intent/tweet');
	url.searchParams.set('text', content);
	url.searchParams.set('related', 'oulcggc');
	url.searchParams.set('url', location.href);
	url.searchParams.set('hashtags', '阪大サークル,言語サークル');
	return url.toString();
}

export function createLineShareURL(): string {
	const url = new URL('https://social-plugins.line.me/lineit/share');
	url.searchParams.set('url', location.href);
	return url.toString();
}

export function createFacebookShareURL(): string {
	const url = new URL('https://www.facebook.com/sharer/sharer.php');
	url.searchParams.set('u', location.href);
	return url.toString();
}
