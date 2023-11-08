<script lang="ts">
	import AvatarPlaceholder from '$assets/AvatarPlaceholder.svelte';
	import type { Author } from '$lib/api/newt';
	export let author: Author;

	export let size: 'small' | 'medium' | 'large' = 'large';
</script>

<div class="avatar" data-size={size}>
	{#if author.profileImage}
		<img src={author.profileImage.src} alt={author.profileImage.altText} />
	{:else}
		<AvatarPlaceholder />
	{/if}
</div>

<style>
	.avatar {
		grid-area: avatar;
		border-radius: 50%;
		overflow: hidden;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.avatar[data-size='small'] {
		width: 16px;
		height: 16px;
	}

	.avatar[data-size='medium'] {
		width: 32px;
		height: 32px;
	}

	.avatar[data-size='large'] {
		width: 50px;
		height: 50px;
	}
</style>
