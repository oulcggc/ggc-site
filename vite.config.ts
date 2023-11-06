import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// Unplugin Icons
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte'
		})
	]
});
