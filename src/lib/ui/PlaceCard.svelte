<script lang="ts">
	import RiMapPin2Line from '~icons/ri/map-pin-2-line';
	import RiAtLine from '~icons/ri/at-line';
	import { onMount } from 'svelte';
	export let id: string;
	export let name: string;
	export let campus: string;
	export let photo: string;
	export let time: string;
	export let access: string;
	export let facility: string;
	export let building: string;

	let photoLink: HTMLAnchorElement;
</script>

<div class="card" {id}>
	<h3>
		{name}
	</h3>
	<p class="campus">
		<a href={access} class="text">
			<RiAtLine height="1.5em" />
			{campus}
		</a>
	</p>

	<a href={access} class="photo" bind:this={photoLink}>
		<img src={photo} alt="{name}の写真" title="{name}の写真" />
	</a>
	<p class="time">{time}</p>
	<p class="building">
		<a href={facility} class="text">
			<RiMapPin2Line height="1.5em" />
			{building}
		</a>
	</p>
</div>

<style>
	.card {
		padding: 1.5em 1em;
		margin: 1em 0;
		border: 1px solid #ccc;
		border-radius: 5px;
		box-shadow: 0 0 10px #ccc;
		display: flex;
		flex-direction: column;
		gap: 0.75em;
	}

	.card:focus-within {
		outline: 2px solid #184164;
	}

	.card .campus {
		text-align: right;
	}

	.card .building {
		text-align: center;
	}

	.card .time {
		text-align: center;
		font-size: 1.2em;
	}

	.photo {
		/* TODO: */
		display: grid;
		grid-template-areas: 'stack';
		margin-left: -1em;
		width: calc(100% + 2em);
		position: relative;
		transition: filter 0.2s ease-in-out;
	}

	.photo::after {
		content: '（ここに部屋の写真）';
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		font-weight: bold;
		text-shadow: 0 0 10px black;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 2;
	}

	a.photo:not(:hover):not(:focus) {
		filter: blur(1px) brightness(0.8);
	}

	img {
		width: 100%;
	}

	h3,
	p {
		margin: 0;
		vertical-align: middle;
	}

	a.text {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: 0.2em;
		text-decoration: none;
		color: #184164;
		position: relative;
		transition: color 0.2s ease-in-out;
		margin: 0 auto;
		width: fit-content;
		position: relative;
	}

	a.text::after {
		content: '';
		display: block;
		position: absolute;
		width: 0;
		height: 2px;
		bottom: 0;
		background: currentColor;
		transition: width 0.3s ease-in-out;
	}

	a.text:hover::after {
		width: 100%;
	}

	.campus a.text {
		justify-content: flex-end;
	}
</style>
