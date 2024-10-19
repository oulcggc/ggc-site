<script lang="ts">
	import NavMenu from '$lib/ui/NavMenu.svelte';
	import SideSNS from '$lib/ui/SideSNS.svelte';

	import { SECTIONS } from '$lib/sections';

	import HamburgerMenu from '$lib/ui/HamburgerMenu.svelte';
	import Section from '$lib/sections/Section.svelte';
	import Sections from '$lib/sections/Sections.svelte';
	import TopSNS from '$lib/ui/TopSNS.svelte';

	import type { Writable } from 'svelte/store';

	import BackToTop from '$lib/ui/BackToTop.svelte';

	let inviews: Writable<boolean[]>;

	let hamburgerMenuOpen: boolean = false;
</script>

<svelte:head>
	<title>阪大言語サークルGGC</title>
	<meta
		name="description"
		content="大阪大学の言語サークルGGCの公式ホームページです。語学・言語学を楽しむサークルとして、箕面・豊中キャンパスで活動しています。"
	/>
	<meta
		name="keywords"
		content="阪大,大阪大学,言語,語学,言語学,サークル,阪大サークル,言語サークル,阪大外語,留学生,春から阪大,外国語,英語,英会話,英文法,中国語,韓国語,朝鮮語,日本語,古文,フランス語,ドイツ語,スペイン語,イタリア語,ロシア語,ポルトガル語,アラビア語,ペルシア語,ヒンディー語,ウルドゥー語,ベトナム語,タイ語,インドネシア語,マレーシア語,トルコ語,モンゴル語,ビルマ語,デンマーク語,スウェーデン語,フィリピン語,スワヒリ語,ハンガリー語"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ggc-osaka.pages.dev/" />
	<meta property="og:title" content="阪大言語サークルGGC | 公式サイト" />
	<meta
		property="og:description"
		content="大阪大学の言語サークルGGCの公式ホームページです。語学・言語学を楽しむサークルとして、箕面・豊中キャンパスで活動しています。"
	/>
	<meta property="og:image" content="https://ggc-osaka.pages.dev/banner.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://ggc-osaka.pages.dev/" />
	<meta property="twitter:title" content="阪大言語サークルGGC | 公式サイト" />
	<meta
		property="twitter:description"
		content="大阪大学の言語サークルGGCの公式ホームページです。語学・言語学を楽しむサークルとして、箕面・豊中キャンパスで活動しています。"
	/>
	<meta property="twitter:image" content="https://ggc-osaka.pages.dev/banner.png" />
</svelte:head>

<nav class="hamburger">
	{#if !hamburgerMenuOpen}
		<TopSNS />
	{/if}

	<HamburgerMenu
		links={SECTIONS.map(({ id, name }) => ({ href: `#${id}`, name }))}
		bind:open={hamburgerMenuOpen}
	/>
</nav>

<nav class="float">
	<NavMenu sections={SECTIONS} inviews={$inviews} />
</nav>

<SideSNS />

<main>
	<Sections bind:inviews>
		{#each SECTIONS as { id, component }}
			<Section {id}>
				<svelte:component this={component} />
			</Section>
		{/each}
	</Sections>
</main>

<BackToTop />

<style>
	:global(body) {
		overflow-x: hidden;
	}

	nav.hamburger {
		display: none;

		text-align: right;
		position: relative;
		height: 5.5em;

		--color: var(--color-accent);
		--active-color: white;
	}

	nav.float {
		display: block;
		position: fixed;
		left: 0.5em;
		width: auto;
		padding: 1em 1em;
		margin: auto 0;

		top: 50%;
		transform: translateY(-50%);

		z-index: 5;
		background-color: rgba(255, 255, 255, 0.5);
		backdrop-filter: blur(2px);
		border-radius: 0.5em;
	}

	@media (max-width: 768px) {
		nav.hamburger {
			display: block;
		}

		nav.float {
			display: none;
		}
	}
</style>
