<script lang="ts">
	import GGCLogo from '$assets/ggc_logo_1240x1240.jpg';
	import LanguageBubbles from '$lib/ui/LanguageBubbles.svelte';
</script>

<div class="logo">
	<LanguageBubbles />
	<div class="symbol">
		<h1><span>阪大</span><span>言語サークル</span></h1>
		<img src={GGCLogo} alt="GGC" />
	</div>
	<LanguageBubbles />
</div>

<p class="catchphrase">「言語を楽しく。」</p>

<style>
	.logo {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		text-align: center;

		position: relative;
	}

	@media (max-width: 768px) {
		.logo {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 480px) {
		.logo h1 {
			font-size: 2.5rem;
		}

		.logo img {
			width: 15em;
			height: 15em;
		}
	}

	h1 {
		font-size: 2.85rem;
		font-weight: bold;
		color: var(--color-accent);
		text-shadow: 0 0 5px #13426322;
		margin: 0;
		line-height: 1.5;
	}

	img {
		width: 18em;
		height: 18em;
	}

	span {
		white-space: nowrap;
		/* word-break: keep-all; */
	}

	.catchphrase {
		font-family: serif;
		font-size: 1.5rem;
		font-weight: bold;
		margin: 0;
	}
</style>
