<script lang="ts">
	import SNSIcon from '$lib/ui/SNSIcon.svelte';
	import SNS_ACCOUNTS from '$data/sns.json';

	let opacity = 1;

	import { quadOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
</script>

<ul class="sns" style:opacity style:pointer-events={opacity > 0.1 ? 'auto' : 'none'}>
	{#each SNS_ACCOUNTS as { link, type, name }, i (i)}
		<li
			transition:fly|global={{
				y: -100,
				duration: 750,
				delay: i * 100,
				easing: quadOut,
				opacity: 0
			}}
		>
			<a href={link} target="_blank" rel="noopener" title={name}>
				<SNSIcon {type} />
			</a>
		</li>
	{/each}
</ul>

<style>
	.sns {
		list-style: none;
		padding: 0.5em 1em;

		position: relative;
		z-index: 100;
		margin-top: 0.25em;
		margin-left: auto;
		margin-right: auto;

		width: max-content;

		font-size: 2em;

		display: flex;
		flex-direction: rows;
		justify-content: center;
		gap: 0.65em;
	}

	a {
		color: var(--color-accent);
		transition: color 0.2s ease-in-out, filter 0.2s ease-in-out;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	a:hover {
		color: var(--color-theme);
		filter: drop-shadow(0 0 10px var(--color-accent-alpha-10));
	}

	@media screen and (max-width: 360px) {
		.sns {
			display: none;
		}
	}
</style>
