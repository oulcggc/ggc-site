<script lang="ts">
	import RiBuilding2Line from '~icons/ri/building-2-line';
	import RiTimeLine from '~icons/ri/time-line';

	interface Props {
		campus: string;
		place: string;
		href: string;
		time: string;
		color: 'r' | 'b';
	}

	let { campus, place, href, time, color }: Props = $props();

	function scrollToPlace(event: MouseEvent) {
		const target = document.querySelector(href);
		if (!target) return;
		event.preventDefault();
		target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		const photo = target.querySelector('.photo');
		if (photo instanceof HTMLAnchorElement) photo.focus();
	}
</script>

<div class="slot" data-color={color}>
	<h3>{campus}</h3>

	<RiBuilding2Line height="1em" />
	<a {href} title="活動場所" class="text" onclick={scrollToPlace}>{place}</a>

	<RiTimeLine height="1em" />
	<span>{time}</span>
</div>

<style>
	.slot[data-color='b'] {
		--color-bg: #75a8ce;
		--color-bg-trans: #75a8ce33;
	}

	.slot[data-color='r'] {
		--color-bg: #c74f4f;
		--color-bg-trans: #c74f4f33;
	}

	.slot {
		border-left: 3px solid var(--color-bg);
		background: var(--color-bg-trans);
		padding: 0.2em 0.5em;
		border-top-right-radius: 0.25em;
		border-bottom-right-radius: 0.25em;

		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: 0.25em;

		min-height: 100%;
		box-sizing: border-box;
	}

	h3 {
		grid-column: 1 / -1;
		margin: 0;
		font-size: 1em;
	}

	@media (max-width: 512px) {
		.slot {
			display: flex;
			flex-direction: column;
		}

		.slot :global(svg) {
			display: none;
		}
	}
</style>
