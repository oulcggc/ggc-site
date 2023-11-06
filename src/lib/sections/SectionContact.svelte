<script lang="ts">
	import SNSIcon from '$lib/ui/SNSIcon.svelte';

	import SNS_ACCOUNTS from '$data/sns.json';
</script>

<h2>お問い合わせ</h2>

<div class="sns">
	{#each SNS_ACCOUNTS as { link, type, name }}
		<a href={link} target="_blank" rel="noopener">
			<SNSIcon {type} />
			{name}
		</a>
	{/each}
</div>
