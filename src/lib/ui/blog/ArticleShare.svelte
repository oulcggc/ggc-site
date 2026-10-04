<script lang="ts">
	import { MediaQuery } from 'svelte/reactivity';
	import SnsIcon from '$lib/ui/SNSIcon.svelte';
	import ContextMenu from '$lib/ui/ContextMenu.svelte';
	import type { SNS } from '$lib/util/sns';
	import RiShareCircleFill from '~icons/ri/share-circle-fill';
	import RiFileCopyLine from '~icons/ri/file-copy-line';

	interface Props {
		links: Map<SNS, string>;
	}

	let { links }: Props = $props();

	const smallScreen = new MediaQuery('(max-width: 768px)', false);
</script>

<div class="share">
	{#if smallScreen.current}
		<ContextMenu placement="left">
			{#snippet trigger(attach)}
				<button class="icon" title="シェア" {@attach attach}>
					<RiShareCircleFill height="1em" />
				</button>
			{/snippet}
			{#each links.entries() as [type, url] (type)}
				<a href={url} title={`${type}でシェア`} target="_blank">
					<SnsIcon {type} />
				</a>
			{/each}
			<button
				class="icon"
				title="URLをコピー"
				onclick={() => {
					navigator.clipboard.writeText(location.href);
				}}
			>
				<RiFileCopyLine height="1em" />
			</button>
		</ContextMenu>
	{:else}
		{#each links.entries() as [type, url] (type)}
			<a href={url} title={`${type}でシェア`} target="_blank">
				<SnsIcon {type} />
			</a>
		{/each}
		<button
			class="icon"
			title="URLをコピー"
			onclick={() => {
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
