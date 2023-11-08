<script lang="ts">
	export let sections: { id: string; name: string }[] = [];
</script>

<ul>
	{#each sections as { id, name }}
		<li>
			<a href={`#${id}`} class="text">{name}</a>
		</li>
	{/each}
</ul>

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
</style>
