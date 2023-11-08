<script lang="ts">
	export let sections: { id: string; name: string }[] = [];
	export let inviews: boolean[];
</script>

{#if inviews}
	<ul>
		{#each sections as { id, name }, i}
			{@const inview = inviews[i] ?? false}
			<li class:inview>
				<a href={`#${id}`} class="text">{name}</a>
			</li>
		{/each}
	</ul>
{/if}

<style>
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li::before {
		content: '・';
		color: #184164;
		font-weight: bold;
		display: inline-block;
		width: 1em;
		margin-left: -1em;
	}

	a.text::after {
		left: 0;
	}

	li.inview a.text {
		filter: drop-shadow(0 0 0.1em #2c6e9922) brightness(1.5);
	}

	li.inview a.text::after {
		width: 100%;
	}
</style>
