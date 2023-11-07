<script lang="ts">
</script>

<nav>
	<ul>
		<slot />
	</ul>
</nav>

<style>
	nav :global(a) {
		color: inherit;
		text-decoration: none;
		transition: color 0.2s ease-in-out;
		position: relative;
	}

	nav :global(a:hover) {
		/* text-decoration: underline; */
		color: #184164;
	}

	nav :global(a::after) {
		content: '';
		display: block;
		position: absolute;
		width: 0;
		height: 2px;
		bottom: -0.2em;
		background: #184164;
		transition: width 0.3s ease-in-out;
	}

	nav :global(a:hover::after) {
		width: 100%;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>
