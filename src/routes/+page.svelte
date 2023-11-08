<script lang="ts">
	import NavMenu from '$lib/ui/NavMenu.svelte';
	import SideSNS from '$lib/ui/SideSNS.svelte';

	import { SECTIONS } from '$lib/sections';
</script>

<svelte:head>
	<title>阪大言語サークルGGC</title>
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
