// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

/// <reference types="unplugin-icons/types/svelte" />

declare module '$data/sns.json' {
	const value: SNSAccount[];
	export default value;
}

declare type SNSAccount = {
	type: SNS;
	name: string;
	link: string;
};

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

// export {};
