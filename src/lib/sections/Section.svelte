<script lang="ts">
	import { inview } from 'svelte-inview';
	import { getContext, onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import type { Writable } from 'svelte/store';
	export let id: string;
	export let style: string | undefined = undefined;

	let inView = false;

	const register = getContext<() => number>('register');

	const inviews = getContext<Writable<boolean[]>>('inviews');

	let index: number;

	onMount(() => {
		index = register();

		smallScreen = window.innerWidth < 768;
	});

	let smallScreen = false;
</script>

<svelte:window on:resize={() => (smallScreen = window.innerWidth < 768)} />

<section
	{id}
	use:inview={{ rootMargin: '-30%' }}
	class:active={inView}
	{style}
	on:inview_enter={() => ($inviews[index] = inView = true)}
	on:inview_leave={() => ($inviews[index] = inView = false)}
	on:inview_change={({ detail }) => (inView = detail.inView)}
>
	{#if smallScreen || inView}
		<div transition:fly={{ y: -15, duration: 950, opacity: 0.4 }}>
			<slot />
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
