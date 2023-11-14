<script lang="ts">
	import { onMount } from 'svelte';
	import tippy from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/light.css';

	export let placement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
	export let trigger = 'mouseenter focus click';
	export let disabled = false;
	export let style: string | undefined = undefined;

	let triggerButton: HTMLButtonElement;
	let content: HTMLDivElement;
	onMount(() => {
		tippy(triggerButton, {
			content,
			placement,
			theme: 'light',
			trigger,
			appendTo: 'parent',
			interactive: true
		});
	});
</script>

<div class="tooltip-container" role="tooltip">
	<button bind:this={triggerButton} {disabled}>
		<slot name="trigger" />
	</button>

	<div class="content" bind:this={content} {style}>
		<slot />
	</div>
</div>

<style>
	.tooltip-container {
		display: contents;
	}

	button {
		background: none;
		border: none;
		padding: 0;
		margin: 0;
		cursor: pointer;

		display: inline-flex;
		align-items: baseline;
		justify-content: center;
		flex-direction: row;
	}

	button:disabled {
		cursor: not-allowed;
	}

	div {
		padding: 0.5em 0.8em;
		display: flex;
		gap: 0.5em;
		font-size: 1.5em;
	}

	.content {
		width: auto;
	}

	div.content > :global(p) {
		margin: 0;
	}

	.tooltip-container :global(.tippy-content .content) {
		max-width: 16em;
	}
</style>
