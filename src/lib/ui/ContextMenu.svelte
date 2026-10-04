<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Attachment } from 'svelte/attachments';
	import tippy, { type Placement } from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/light.css';

	interface Props {
		placement?: Placement;
		style?: string;
		trigger: Snippet<[Attachment<HTMLElement>]>;
		children: Snippet;
	}

	let { placement = 'bottom', style, trigger, children }: Props = $props();

	let content: HTMLDivElement | undefined = $state();

	const attach: Attachment<HTMLElement> = (node) => {
		if (!content) return;
		const instance = tippy(node, {
			content,
			placement,
			theme: 'light',
			trigger: 'mouseenter focus click',
			appendTo: 'parent',
			interactive: true
		});
		return () => instance.destroy();
	};
</script>

<div class="tooltip-container">
	{@render trigger(attach)}

	<div class="content" role="tooltip" bind:this={content} {style}>
		{@render children()}
	</div>
</div>

<style>
	.tooltip-container {
		display: contents;
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
