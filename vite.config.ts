import adapter from '@sveltejs/adapter-cloudflare';
import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	environments: {
		ssr: {
			resolve: {
				// The worker has no Node built-ins, so dependencies resolve to their browser builds.
				mainFields: ['browser', 'module', 'jsnext:main', 'jsnext']
			}
		}
	},
	plugins: [
		sveltekit({
			adapter: adapter()
		}),
		Icons({
			compiler: 'svelte'
		})
	]
});
