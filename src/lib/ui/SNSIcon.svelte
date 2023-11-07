<script lang="ts">
	import type { SNS } from '$lib/util/sns';
	export let type: SNS;

	import RiTwitterXFill from '~icons/ri/twitter-x-fill';
	import RiInstagramLine from '~icons/ri/instagram-line';
	import RiGithubLine from '~icons/ri/github-line';
	import RiLinksFill from '~icons/ri/links-fill';
	import RiLineFill from '~icons/ri/line-fill';
	import RiFacebookCircleFill from '~icons/ri/facebook-circle-fill';
</script>

{#if type === 'twitter'}
	<RiTwitterXFill height="1em" />
{:else if type === 'instagram'}
	<RiInstagramLine height="1em" />
{:else if type === 'github'}
	<RiGithubLine height="1em" />
{:else if type === 'line'}
	<RiLineFill height="1em" />
{:else if type === 'facebook'}
	<RiFacebookCircleFill height="1em" />
{:else}
	<RiLinksFill height="1em" />
{/if}
