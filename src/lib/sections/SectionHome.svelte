<script lang="ts">
	import GGCLogo from '$assets/ggc_logo_1240x1240.jpg';
</script>

<div>
	<h1>阪大言語サークル</h1>
	<img src={GGCLogo} alt="GGC" />
</div>

<style>
	div {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	h1 {
		font-size: 2.85rem;
		font-weight: bold;
		color: var(--color-accent);
		text-shadow: 0 0 5px #13426322;
		margin: 0;
		line-height: 1.5;
	}

	img {
		width: 18em;
		height: 18em;
	}
</style>
