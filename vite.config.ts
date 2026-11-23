import adapter from '@sveltejs/adapter-cloudflare';
import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { defaultClientMainFields, defineConfig } from 'vite';

export default defineConfig({
	environments: {
		ssr: {
			resolve: {
				// The worker has no Node built-ins, so dependencies resolve to their browser builds.
				mainFields: [...defaultClientMainFields]
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
