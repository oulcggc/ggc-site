import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PRIVATE_NEWT_SPACE_UID: { static: true },
	PRIVATE_NEWT_CDN_TOKEN: { static: true },
	PRIVATE_YOUTUBE_API_KEY: { schema: (value) => value }
});
