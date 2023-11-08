<script lang="ts">
	import NavMenu from '$lib/ui/NavMenu.svelte';
	import SideSNS from '$lib/ui/SideSNS.svelte';

	import { SECTIONS } from '$lib/sections';
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

<div class="nav">
	<NavMenu>
		{#each SECTIONS as { id, name }}
			<li>
				<a href={`#${id}`}>{name}</a>
			</li>
		{/each}
	</NavMenu>
</div>

<SideSNS />

<main>
	{#each SECTIONS as { id, component }}
		<section {id}>
			<svelte:component this={component} />
		</section>
	{/each}
</main>

<style>
	section {
		min-height: 100vh;
		display: grid;
		place-items: center;
	}

	section:not(:first-of-type) {
		padding: 10vw;
	}

	@media (max-width: 512px) {
		section:not(:first-of-type) {
			padding: 5vw;
		}
	}

	.nav {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		z-index: 100;

		padding: 1em;
	}
</style>
