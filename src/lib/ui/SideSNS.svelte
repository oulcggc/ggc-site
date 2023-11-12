<script lang="ts">
	import SNSIcon from '$lib/ui/SNSIcon.svelte';
	import SNS_ACCOUNTS from '$data/sns.json';

	let opacity = 1;

	import { quadInOut } from 'svelte/easing';
</script>

<svelte:window
	on:scroll={() => {
		const scroll = window.scrollY;
		const height = document.body.scrollHeight - window.innerHeight;
		opacity = quadInOut(1 - scroll / height);
	}}
/>

<ul class="sns" style:opacity style:pointer-events={opacity > 0.1 ? 'auto' : 'none'}>
	{#each SNS_ACCOUNTS as { link, type, name }}
		<li>
			<a href={link} target="_blank" rel="noopener" title={name}>
				<SNSIcon {type} />
			</a>
		</li>
	{/each}
</ul>

<style>
	.sns {
		list-style: none;
		padding: 0.5em 0.25em;
		margin: 0;
		margin-right: 0.75em;

		position: fixed;
		top: 50%;
		right: 0;
		z-index: 100;

		transform: translateY(-50%);

		font-size: 2em;

		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.65em;

		background-color: rgba(255, 255, 255, 0.5);
		backdrop-filter: blur(2px);
		border-radius: 0.5em;
	}

	a {
		color: var(--color-theme);
		transition: color 0.2s ease-in-out, filter 0.2s ease-in-out;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	a:hover {
		color: var(--color-accent);
		filter: drop-shadow(0 0 5px var(--color-accent-alpha-20));
	}

	@media (max-width: 768px) {
		.sns {
			display: none;
		}
	}
</style>
