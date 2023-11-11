<script>
	import NavMenu from '$lib/ui/NavMenu.svelte';
	import GGCLogo from '$assets/ggc_logo_1240x1240.jpg';
	import { page } from '$app/stores';
	$: console.log($page);
</script>

<header>
	<a class="logo" href="/">
		<img src={GGCLogo} alt="GGCロゴ" />
		<span> 阪大言語サークルGGC </span>
	</a>

	<nav>
		<a class="text" href="/"> ホーム </a>
		<a class="text" href="/blog"> ブログ </a>
		<a class="text" href="/#contact">お問い合わせ</a>
	</nav>
</header>

<slot />

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		border-bottom: 1px solid #eaeaea;

		padding: 0.5em 1em;

		margin-bottom: 2em;
	}

	a.logo {
		display: flex;
		align-items: center;
		gap: 0.5em;
		text-decoration: none;
	}

	header img {
		width: 3em;
		height: 3em;
		margin-right: 0.5em;
	}

	header span {
		font-size: 1.25em;
		font-weight: bold;
		color: #184164;
	}

	nav {
		display: flex;
		align-items: center;
		gap: 0.75em;
	}
</style>
