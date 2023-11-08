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

<ul class="sns" style:opacity>
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
		padding: 0;
		margin: 0;

		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 100;

		font-size: 2.5em;

		margin-right: 0.75em;

		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.65em;
	}

	a {
		color: #184164;
		transition: color 0.2s ease-in-out, filter 0.2s ease-in-out;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	a:hover {
		color: #2c6e99;
		filter: drop-shadow(0 0 5px #2c6e9944);
	}

	@media (max-width: 768px) {
		.sns {
			display: none;
		}
	}
</style>
