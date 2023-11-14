<script lang="ts">
	import SnsIcon from '$lib/ui/SNSIcon.svelte';
	import RiShareCircleFill from '~icons/ri/share-circle-fill';
	import type { SNS } from '$lib/util/sns';
	import { onMount } from 'svelte';
	export let links: Map<SNS, string>;

	// Partial<Record<SNS, string>>;
	import RiFileCopyLine from '~icons/ri/file-copy-line';
	import ContextMenu from '../ContextMenu.svelte';
	let smallScreen: boolean = false;

	onMount(() => {
		const query = window.matchMedia('(max-width: 768px)');
		smallScreen = query.matches;
		query.addEventListener('change', (e) => {
			smallScreen = e.matches;
		});
	});
</script>

<div class="share">
	{#if smallScreen}
		<ContextMenu placement="left">
			<button class="icon" slot="trigger">
				<RiShareCircleFill height="1em" />
			</button>
			{#each links.entries() as [type, url]}
				<a href={url} title={`${type}でシェア`} target="_blank">
					<SnsIcon {type} />
				</a>
			{/each}
			<button
				class="icon"
				title="URLをコピー"
				on:click={() => {
					navigator.clipboard.writeText(location.href);
				}}
			>
				<RiFileCopyLine height="1em" />
			</button>
		</ContextMenu>
	{:else}
		{#each links.entries() as [type, url]}
			<a href={url} title={`${type}でシェア`} target="_blank">
				<SnsIcon {type} />
			</a>
		{/each}
		<button
			class="icon"
			title="URLをコピー"
			on:click={() => {
				navigator.clipboard.writeText(location.href);
			}}
		>
			<RiFileCopyLine height="1em" />
		</button>
	{/if}
</div>

<style>
	.share {
		grid-area: s;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 0.5em;
		font-size: 1.25em;
		padding-right: 0.5em;
	}

	.share a:hover {
		color: var(--color-theme);
	}

	.share a:visited {
		color: #a8a8a8;
	}

	.share a:focus {
		color: var(--color-theme);
	}

	.share a {
		color: #a8a8a8;
		text-decoration: none;
		transition: color 0.2s ease-in-out;
		font-size: 1.25em;

		display: contents;
	}

	button.icon {
		background: none;
		border: none;
		cursor: pointer;
		font-size: inherit;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	button.icon:hover {
		color: var(--color-theme);
	}

	.share button.icon {
		color: #a8a8a8;
		transition: color 0.2s ease-in-out;
	}

	.share button.icon:hover {
		color: var(--color-theme);
	}
</style>
