<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

	export let open: boolean;
	export let sections: { id: string; name: string }[] = [];
</script>

{#if open}
	<hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
	<div role="menu" class="menu">
		{#each sections as { id, name }, i}
			<p transition:scale={{ duration: 750, easing: quadOut, opacity: 1, delay: 200 + 50 * i }}>
				<!-- transition:fly={{ y: -15, delay: 50 * i }} -->
				<a href={`#${id}`} on:click={() => (open = false)}>{name}</a>
			</p>
		{/each}
	</div>
	<hr
		transition:scale={{
			duration: 750,
			easing: quadOut,
			opacity: 1
		}}
	/>
{/if}

<style>
	a {
		color: inherit;
		text-decoration: none;
		transition: color 0.2s ease-in-out;
		position: relative;
	}

	a:hover {
		/* text-decoration: underline; */
		/* color: #184164; */
		/* text-shadow: 0 0 0.5em #184164; */
		/* filter: drop-shadow(0 0 0.5em #184164) drop-shadow(0 0 1em #184164); */
	}

	a::after {
		content: '';
		display: block;
		position: absolute;
		width: 0;
		/* height: 2px; */
		top: 0;
		bottom: 0;
		border-radius: 0.1em;

		right: 0;
		bottom: -0.2em;
		background: black;
		transition: width 0.3s ease-in-out;

		mix-blend-mode: difference;
	}

	a:hover::after {
		width: 100%;
	}

	.menu {
		text-align: center;
		padding: 0.1em;
		padding-top: 0;

		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}

	p {
		cursor: pointer;
		text-align: right;
		margin: 0;
		width: 100%;
	}

	hr {
		border-style: solid;
		border-color: white;
		border-width: 1px;
		height: 0;
		width: 100%;
	}
</style>
