<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import SNS_ACCOUNTS from '$data/sns.json';

	import { Hamburger } from 'svelte-hamburgers';
	import SNSIcon from '$lib/ui/SNSIcon.svelte';

	export let links: { href: string; name: string }[] = [];
	export let open: boolean = false;
</script>

<svelte:window on:resize={() => (open = false)} on:scroll={() => (open = false)} />

<div class="hamburger-container" data-open={open}>
	<div class="hamburger">
		<Hamburger bind:open --padding={0} on:click />
	</div>
	<div class="menu" data-open={open}>
		{#if open}
			<hr
				transition:scale={{
					duration: 750,
					easing: quadOut,
					opacity: 1,
					delay: 50 * SNS_ACCOUNTS.length
				}}
			/>
			<div role="menu" class="links">
				{#each links as { href, name }, i (i)}
					<p
						transition:fly|global={{
							y: -20,
							duration: 750,
							easing: quadOut,
							delay: 50 * i
						}}
					>
						<!-- transition:fly={{ y: -15, delay: 50 * i }} -->
						<a {href} on:click={() => (open = false)}>{name}</a>
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
	</div>
</div>

<style>
	.hamburger-container {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		height: auto;

		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
		flex-direction: column;
		gap: 0.5em;

		transition: background-color 0.5s ease-in-out, backdrop-filter 0.5s ease-in-out;
		z-index: 2;
	}

	.hamburger-container[data-open='true'] {
		bottom: auto;
		background: var(--color-theme-alpha-70);
		backdrop-filter: blur(0.5em);
		z-index: 100;
	}

	.hamburger {
		display: flex;
		align-items: center;
		justify-content: center;

		padding: 0.75rem;
		margin-right: 0.75rem;
		margin-top: 0.75rem;
		border-bottom-left-radius: 1em;
		border-top-right-radius: 1em;

		background: rgba(255, 255, 255, 0.5);
		backdrop-filter: blur(2px);

		transition: background-color 0.5s ease-in-out, backdrop-filter 0.5s ease-in-out;
	}

	.hamburger :global(button.hamburger) {
		display: flex;
		height: 2em;
		width: 2em;
		justify-content: center;
		align-items: center;
	}

	.hamburger-container[data-open='true'] .hamburger {
		background: none;
		backdrop-filter: none;
	}

	.menu {
		width: auto;
		opacity: 0;
		transition: opacity 1s ease-in-out 0.5s, height 1s ease-in-out;

		font-size: 1.5em;

		color: white;

		pointer-events: none;

		display: flex;
		flex-direction: column;
		gap: 0.5em;

		height: 0;

		margin-right: 1.5rem;
	}

	.hamburger-container[data-open='true'] .menu {
		opacity: 1;
		pointer-events: all;
		height: 100vh;
	}

	.links {
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
