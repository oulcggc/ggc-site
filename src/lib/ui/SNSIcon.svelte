<script lang="ts">
	export let type: SNS;

	import RiTwitterXFill from '~icons/ri/twitter-x-fill';
	import RiInstagramLine from '~icons/ri/instagram-line';
	import RiGithubLine from '~icons/ri/github-line';
	import RiLinksFill from '~icons/ri/links-fill';
</script>

{#if type === 'twitter'}
	<RiTwitterXFill />
{:else if type === 'instagram'}
	<RiInstagramLine />
{:else if type === 'github'}
	<RiGithubLine />
{:else}
	<RiLinksFill />
{/if}
