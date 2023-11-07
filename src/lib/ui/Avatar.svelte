<script lang="ts">
	import AvatarPlaceholder from '$assets/AvatarPlaceholder.svelte';
	import type { Author } from '$lib/api/newt';
	export let author: Author;
</script>

<div class="avatar">
	{#if author.profileImage}
		<img src={author.profileImage.src} alt={author.profileImage.altText} />
	{:else}
		<AvatarPlaceholder />
	{/if}
</div>

<style>
	.avatar {
		grid-area: avatar;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		overflow: hidden;
	}
</style>
