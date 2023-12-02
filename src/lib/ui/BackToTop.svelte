<script lang="ts">
	let opacity = 1;

	import { quadInOut } from 'svelte/easing';
	import RiArrowUpLine from '~icons/ri/arrow-up-line';
</script>

<svelte:window
	on:scroll={() => {
		const scroll = window.scrollY;
		const height = document.body.scrollHeight - window.innerHeight;
		opacity = quadInOut(scroll / height);
	}}
/>

<button
	class="back-to-top"
	style:opacity
	style:pointer-events={opacity > 0.1 ? 'auto' : 'none'}
	title="ページ初頭に戻る"
	on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
	<RiArrowUpLine />
</button>

<style>
	.back-to-top {
		position: fixed;
		bottom: 1em;
		right: 1em;
		font-size: 2em;
		color: var(--color-accent);
		background: transparent;
		border: none;
		outline: none;
		cursor: pointer;
		transition: 0.2s;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 768px) {
		.back-to-top {
			display: none;
		}
	}
</style>
