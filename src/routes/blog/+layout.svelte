<script>
	import NavMenu from '$lib/ui/NavMenu.svelte';
</script>

<div>
	<NavMenu>
		<li>
			<a href="/"> ホーム </a>
		</li>
		<li>
			<a href="/blog"> ブログ </a>
		</li>
	</NavMenu>
</div>

<slot />

<style>
	div {
		padding: 1.5em;
	}
</style>
