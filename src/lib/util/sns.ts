export const SNS = ['twitter', 'line', 'facebook', 'instagram', 'github'] as const;
export type SNS = (typeof SNS)[number];

export const SNS_NAMES = {
	twitter: 'X（旧Twitter）',
	line: 'LINE',
	facebook: 'Facebook',
	instagram: 'Instagram',
	github: 'GitHub'
} as const;

export function createTwitterShareURL(link: string, text: string): string {
	const url = new URL('https://twitter.com/intent/tweet');
	url.searchParams.set('text', text);
	url.searchParams.set('related', 'oulcggc');
	url.searchParams.set('url', link);
	url.searchParams.set('hashtags', '阪大サークル,言語サークル');
	return url.toString();
}

export function createLineShareURL(link: string): string {
	const url = new URL('https://social-plugins.line.me/lineit/share');
	url.searchParams.set('url', link);
	return url.toString();
}

export function createFacebookShareURL(link: string): string {
	const url = new URL('https://www.facebook.com/sharer/sharer.php');
	url.searchParams.set('u', link);
	return url.toString();
}
