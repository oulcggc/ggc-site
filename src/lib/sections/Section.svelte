<script lang="ts">
	import type { Snippet } from 'svelte';
	import { MediaQuery } from 'svelte/reactivity';
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	interface Props {
		id: string;
		inView?: boolean;
		children: Snippet;
	}

	let { id, inView = $bindable(false), children }: Props = $props();

	const smallScreen = new MediaQuery('(width < 768px)', false);
</script>

<section
	{id}
	use:inview={{ rootMargin: '-30%' }}
	class:active={inView}
	oninview_change={({ detail }) => (inView = detail.inView)}
>
	{#if smallScreen.current || inView}
		<div transition:fly={{ y: -15, duration: 950, opacity: 0.4 }}>
			{@render children()}
		</div>
	{/if}
</section>

<style>
	div {
		display: grid;
		place-items: center;
		width: 100%;
	}

	section :global(h2) {
		margin: 0.75em 0;
	}

	section :global(h3) {
		margin: 0.5em 0;
	}

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

	@media (max-width: 768px) {
		section {
			min-height: 0;
		}
	}
</style>
