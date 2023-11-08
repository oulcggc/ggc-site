import SectionContent from '$lib/sections/SectionContent.svelte';
import SectionPlace from '$lib/sections/SectionPlace.svelte';
import SectionContact from '$lib/sections/SectionContact.svelte';
import SectionHome from '$lib/sections/SectionHome.svelte';
import SectionAbout from '$lib/sections/SectionAbout.svelte';
import SectionBlog from './SectionBlog.svelte';

export type Section = {
	name: string;
	id: string;
	component: string;
};

export const SECTIONS = [
	{
		name: 'ホーム',
		id: 'home',
		component: SectionHome
	},
	{
		name: 'ブログ',
		id: 'blog',
		component: SectionBlog
	},
	{
		name: 'サークル紹介',
		id: 'about',
		component: SectionAbout
	},
	{
		name: '活動内容',
		id: 'content',
		component: SectionContent
	},
	{
		name: '活動拠点',
		id: 'place',
		component: SectionPlace
	},
	{
		name: 'お問い合わせ',
		id: 'contact',
		component: SectionContact
	}
];
