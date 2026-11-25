import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PRIVATE_YOUTUBE_API_KEY: { schema: (value) => value }
});
