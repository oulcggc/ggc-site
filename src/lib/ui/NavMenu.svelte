<script lang="ts">
	export let sections: { id: string; name: string }[] = [];
	export let inviews: boolean[];
</script>

{#if inviews}
	<ul>
		{#each sections as { id, name }, i}
			{@const inview = inviews[i] ?? false}
			<li class:inview>
				<a href={`#${id}`} class="text">{name}</a>
			</li>
		{/each}
	</ul>
{/if}

<style>
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 0.25em;
		line-height: 1.5;
		position: relative;
	}

	li::before {
		content: '・';
		color: var(--color-theme);
		font-weight: bold;
		display: inline-block;
		width: 1em;
		margin-left: -1em;
		transition: transform 0.2s ease-in-out;
	}

	a.text::after {
		left: 0;
	}

	li.inview a.text {
		filter: drop-shadow(0 0 0.1em color-mix(in srgb, var(--color-accent) 20%, transparent))
			brightness(1.5);
	}

	li.inview a.text::after {
		width: 100%;
	}

	li.inview::before {
		color: var(--color-accent);
		transform: scale(1.75);
	}
</style>
