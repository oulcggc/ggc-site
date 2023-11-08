<script lang="ts">
	import NavMenu from '$lib/ui/NavMenu.svelte';

	import SectionContent from '$lib/sections/SectionContent.svelte';
	import SectionPlace from '$lib/sections/SectionPlace.svelte';
	import SectionContact from '$lib/sections/SectionContact.svelte';
	import SectionHome from '$lib/sections/SectionHome.svelte';
	import SectionIntroduction from '$lib/sections/SectionIntroduction.svelte';
	import SideSNS from '$lib/ui/SideSNS.svelte';
</script>

<svelte:head>
	<title>阪大言語サークルGGC</title>
</svelte:head>

<div class="nav">
	<NavMenu>
		<li>
			<a href="#home"> ホーム </a>
		</li>
		<li>
			<a href="/blog" target="_blank">ブログ</a>
		</li>
		<li>
			<a href="#introduction"> サークル紹介 </a>
		</li>
		<li>
			<a href="#content"> 活動内容 </a>
		</li>
		<li>
			<a href="#place"> 活動拠点 </a>
		</li>
		<li>
			<a href="#contact"> お問い合わせ </a>
		</li>
	</NavMenu>
</div>

<SideSNS />

<main>
	<section id="home">
		<SectionHome />
	</section>

	<section id="introduction">
		<SectionIntroduction />
	</section>

	<section id="content">
		<SectionContent />
	</section>

	<section id="place">
		<SectionPlace />
	</section>

	<section id="contact">
		<SectionContact />
	</section>
</main>

<style>
	section {
		min-height: 100vh;
		display: grid;
		place-items: center;
	}

	section:not(:first-of-type) {
		padding: 5vw;
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
