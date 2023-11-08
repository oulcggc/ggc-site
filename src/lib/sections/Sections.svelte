<script lang="ts">
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	export const inviews: Writable<boolean[]> = writable([]);
	setContext('inviews', inviews);

	setContext('register', register);

	function register(): number {
		const index = $inviews.length;
		$inviews = [...$inviews, false];
		return index;
	}
</script>

<slot />
