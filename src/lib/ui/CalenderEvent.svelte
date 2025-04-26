<script lang="ts">
	import RiBuilding2Line from '~icons/ri/building-2-line';
	import RiQuestionLine from '~icons/ri/question-line';
	import RiTimeLine from '~icons/ri/time-line';
	import Tooltip from './Tooltip.svelte';
	export let name: string;
	export let place: string;
	export let href: string;
	export let detail: string;
	export let time: string;
	export let color: 'r' | 'g' | 'b';
</script>

<div class="event" data-color={color}>
	<h3>
		<span title={name}>
			{name}
		</span>
		<Tooltip>
			<button slot="trigger" title="詳細">
				<RiQuestionLine />
			</button>
			{detail}
		</Tooltip>
	</h3>

	<RiTimeLine height="1em" />
	<span>
		{time}
	</span>

	<!-- TODO: Same color across PlaceCard -->

	<RiBuilding2Line height="1em" />
	<a
		{href}
		title="活動場所"
		class="text"
		on:click|preventDefault={() => {
			const link = document.querySelector(href);
			if (link) {
				link.scrollIntoView({ behavior: 'smooth', block: 'start' });
				const photo = document.querySelector(href + ' .photo');
				if (photo && photo instanceof HTMLAnchorElement) {
					photo.focus();
				}
				return false;
			}
		}}
	>
		{place}
	</a>
</div>

<style>
	.event[data-color='g'] {
		--color-bg: #4fc784;
		--color-bg-trans: #4fc78433;
	}

	.event[data-color='b'] {
		--color-bg: #75a8ce;
		--color-bg-trans: #75a8ce33;
	}

	.event[data-color='r'] {
		--color-bg: #c74f4f;
		--color-bg-trans: #c74f4f33;
	}

	.event {
		border-left: 3px solid var(--color-bg);
		background: var(--color-bg-trans);
		padding: 0.2em 0.5em;
		border-top-right-radius: 0.25em;
		border-bottom-right-radius: 0.25em;
		margin-bottom: 0.25em;

		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: 0.25em;

		min-height: 100%;
	}

	h3 {
		grid-column: 1 / -1;

		margin: 0;
		font-size: 1em;
		vertical-align: middle;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.25em;

		overflow: hidden;
	}

	h3 > span {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	button {
		background: none;
		border: none;
		padding: 0;
		margin: 0;
		cursor: pointer;
		font-size: 1em;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: color 0.2s ease-in-out;
	}

	button:hover {
		color: var(--color-bg);
	}

	@media (max-width: 512px) {
		.event {
			display: flex;
			flex-direction: column;
		}

		.event :global(svg) {
			display: none;
		}
	}
</style>
