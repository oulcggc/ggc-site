<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import SNS_ACCOUNTS from '$data/sns.json';
	import SNSIcon from '$lib/ui/SNSIcon.svelte';

	export let open: boolean;
	export let sections: { id: string; name: string }[] = [];
</script>

{#if open}
	<hr
		transition:scale={{
			duration: 750,
			easing: quadOut,
			opacity: 1,
			delay: 50 * SNS_ACCOUNTS.length
		}}
	/>
	<div role="menu" class="menu">
		{#each sections as { id, name }, i (i)}
			<p
				transition:fly|global={{
					y: -20,
					duration: 750,
					easing: quadOut,
					delay: 50 * i
				}}
			>
				<!-- transition:fly={{ y: -15, delay: 50 * i }} -->
				<a href={`#${id}`} on:click={() => (open = false)}>{name}</a>
			</p>
		{/each}
	</div>
	<hr
		transition:scale={{
			duration: 750,
			easing: quadOut,
			opacity: 1,
			delay: 50 * SNS_ACCOUNTS.length
		}}
	/>
	<ul class="sns">
		{#each SNS_ACCOUNTS as { link, type, name }, i (i)}
			<li
				transition:fly|global={{
					y: 30,
					duration: 750,
					easing: quadOut,
					delay: 50 * i
				}}
			>
				<a href={link} target="_blank" rel="noopener" title={name}>
					<SNSIcon {type} />
				</a>
			</li>
		{/each}
	</ul>
{/if}

<style>
	.menu {
		text-align: center;
		padding: 0.1em;
		padding-top: 0;

		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}

	a {
		color: inherit;
		text-decoration: none;
		transition: color 0.2s ease-in-out;
		position: relative;
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
		/* bottom: -0.2em; */
		background: black;
		transition: width 0.3s ease-in-out;

		mix-blend-mode: difference;
	}

	a:hover::after {
		width: 100%;
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

	.sns {
		list-style: none;
		padding: 0;
		margin: 0;

		font-size: 1.25em;

		display: flex;
		justify-content: center;
		gap: 0.1em;
	}

	.sns a {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.15em;
	}
</style>
