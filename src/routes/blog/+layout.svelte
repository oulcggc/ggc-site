<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Snippet } from 'svelte';
	import GGCLogo from '#assets/ggc_logo_1240x1240.jpg';
	import HamburgerMenu from '#lib/ui/HamburgerMenu.svelte';

	let { children }: { children: Snippet } = $props();

	const LINKS = [
		{ href: resolve('/'), name: 'ホーム' },
		{ href: resolve('/blog'), name: 'ブログ' },
		{ href: `${resolve('/')}#contact`, name: 'お問い合わせ' }
	];
</script>

<header>
	<a class="logo" href={resolve('/')}>
		<img src={GGCLogo} alt="GGCロゴ" />
		<span> 阪大言語サークルGGC </span>
	</a>

	<nav class="normal">
		{#each LINKS as link (link.href)}
			<a class="text" href={link.href}>{link.name}</a>
		{/each}
	</nav>

	<nav class="hamburger">
		<HamburgerMenu links={LINKS} />
	</nav>
</header>

{@render children()}

<style>
	header {
		position: relative;
		z-index: 2;

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
		color: var(--color-theme);
	}

	@media (max-width: 768px) {
		header {
			margin-bottom: 0;
			box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.25);
		}
	}

	nav.normal {
		display: flex;
		align-items: center;
		gap: 0.75em;
	}

	nav.hamburger {
		display: none;

		text-align: right;
		position: relative;
		height: 4rem;
		width: 4rem;

		--color: var(--color-accent);
		--active-color: white;
	}

	@media (max-width: 768px) {
		nav.hamburger {
			display: block;
		}

		nav.normal {
			display: none;
		}
	}
</style>
