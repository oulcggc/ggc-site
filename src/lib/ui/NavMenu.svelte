<script lang="ts">
	interface Props {
		sections: { id: string; name: string }[];
		inviews: boolean[];
	}

	let { sections, inviews }: Props = $props();
</script>

<ul>
	{#each sections as { id, name }, i (id)}
		<li class:active={inviews[i]}>
			<a href={`#${id}`} aria-current={inviews[i] ? 'location' : undefined}>
				<span class="dot" aria-hidden="true"></span>
				<span class="label">{name}</span>
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		--rail-x: 0.3em;

		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.15em;
		position: relative;
	}

	ul::before {
		content: '';
		position: absolute;
		left: var(--rail-x);
		top: 0.9em;
		bottom: 0.9em;
		width: 1px;
		background: var(--color-accent-alpha-20);
		transform: translateX(-50%);
	}

	a {
		display: flex;
		align-items: center;
		gap: 0.75em;
		padding: 0.3em 0;
		text-decoration: none;
		color: var(--color-theme-alpha-70);
		font-size: 0.9em;
		letter-spacing: 0.05em;
		transition: color 0.2s ease-in-out;
	}

	.dot {
		flex: none;
		width: calc(var(--rail-x) * 2);
		height: calc(var(--rail-x) * 2);
		box-sizing: border-box;
		border-radius: 50%;
		border: 1.5px solid var(--color-theme-alpha-70);
		background: var(--color-bg, #fff);
		position: relative;
		z-index: 1;
		transition:
			transform 0.25s ease-in-out,
			background-color 0.25s ease-in-out,
			border-color 0.25s ease-in-out;
	}

	a:hover,
	a:focus-visible {
		color: var(--color-theme);
	}

	a:hover .dot,
	a:focus-visible .dot {
		border-color: var(--color-accent);
	}

	li.active a {
		color: var(--color-theme);
		font-weight: bold;
	}

	li.active .dot {
		background: var(--color-accent);
		border-color: var(--color-accent);
		transform: scale(1.4);
		box-shadow: 0 0 0 0.25em var(--color-accent-alpha-20);
	}

	@media (prefers-reduced-motion: reduce) {
		a,
		.dot {
			transition: none;
		}
	}
</style>
