<script lang="ts">
	interface Props {
		sections: { id: string; name: string }[];
		inviews: boolean[];
	}

	let { sections, inviews }: Props = $props();
</script>

<ul>
	{#each sections as { id, name }, i (id)}
		<li class:inview={inviews[i]}>
			<a href={`#${id}`} class="text">{name}</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
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
		filter: drop-shadow(0 0 0.1em var(--color-accent-alpha-20)) brightness(1.5);
	}

	li.inview a.text::after {
		width: 100%;
	}

	li.inview::before {
		color: var(--color-accent);
		transform: scale(1.75);
	}
</style>
