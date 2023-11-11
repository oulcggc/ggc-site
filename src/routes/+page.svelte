<script lang="ts">
	import NavMenu from '$lib/ui/NavMenu.svelte';
	import SideSNS from '$lib/ui/SideSNS.svelte';

	import RiCopyrightLine from '~icons/ri/copyright-line';

	import { SECTIONS } from '$lib/sections';

	import { Hamburger } from 'svelte-hamburgers';
	import HamburgerMenu from '$lib/ui/HamburgerMenu.svelte';
	import Section from '$lib/sections/Section.svelte';
	import Sections from '$lib/sections/Sections.svelte';
	import type { Writable } from 'svelte/store';

	let hamburgerOpen = false;

	let inviews: Writable<boolean[]>;
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

<svelte:window on:resize={() => (hamburgerOpen = false)} />

<nav class="hamburger" data-open={hamburgerOpen}>
	<div class="hamburger-container">
		<Hamburger bind:open={hamburgerOpen} --padding={0} />
		<div class="menu">
			<HamburgerMenu sections={SECTIONS} bind:open={hamburgerOpen} />
		</div>
	</div>
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

<hr />

<footer>
	<p>
		<RiCopyrightLine /> 2022-2023 阪大言語サークルGGC
	</p>
</footer>

<style>
	nav.hamburger {
		display: none;

		text-align: right;
		position: relative;
		height: 5.5em;

		--color: #2c6e99;
		--active-color: white;
	}

	.hamburger-container {
		padding: 1.75em 2em;

		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		display: flex;
		align-items: end;
		justify-content: start;
		flex-direction: column;
		gap: 1.5em;
	}

	nav.hamburger[data-open='true'] .hamburger-container {
		bottom: auto;
		height: 100vh;
		background: color-mix(in srgb, var(--color-theme) 70%, transparent);
		backdrop-filter: blur(0.5em);
		z-index: 100;
	}

	nav.hamburger .menu {
		width: auto;
		padding-left: 2em;
		opacity: 0;
		transition: opacity 0.2s ease-in-out;

		font-size: 1.5em;

		color: white;
	}

	nav.hamburger[data-open='true'] .menu {
		opacity: 1;
	}

	nav.float {
		display: block;
		position: fixed;
		left: 0.5em;
		width: 20vw;
		padding: 1em 1em;
		margin: auto 0;

		top: 50%;
		transform: translateY(-50%);
	}

	@media (max-width: 768px) {
		nav.hamburger {
			display: block;
		}

		nav.float {
			display: none;
		}
	}

	footer p {
		margin: 0;

		padding: 1em;

		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.25em;
	}
</style>
