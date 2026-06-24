# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

The official site for 阪大言語サークルGGC (Osaka University language circle). Japanese single-page site plus a blog.

## Commands

Package manager is **Bun** (`engine-strict=true` is set; do not use npm/yarn/pnpm).

- `bun install` — install deps
- `bun dev` (or `bun dev --open`) — Vite dev server
- `bun run build` — production build (Cloudflare Pages output)
- `bun run preview` — preview the built site
- `bun run check` — `svelte-kit sync` + `svelte-check` type/diagnostic pass; use `check:watch` for watch mode
- `bun run lint` — Prettier check + ESLint
- `bun run format` — Prettier write

No test suite exists in this repo.

## Architecture

**Stack:** SvelteKit 2.x (Svelte 5) + TypeScript, Vite 7, deployed to Cloudflare Pages via `@sveltejs/adapter-cloudflare`. Icons via `unplugin-icons` (svelte compiler) — import from `~icons/...`.

Svelte 5 is opt-in to runes: existing components are still in legacy (Svelte 4) mode and `export let` / `$:` / `on:click` continue to work. New components can use runes (`$state`, `$derived`, etc.) if helpful. ESLint uses flat config (`eslint.config.js`) and `prettier-plugin-svelte` is loaded explicitly via `.prettierrc`.

**Path aliases** (defined in `svelte.config.js`, on top of the default `$lib`):

- `$assets` → `src/assets`
- `$data` → `src/data`

**Single-page structure.** `src/routes/+page.svelte` is the home page. The page's content is driven entirely by the `SECTIONS` array in `src/lib/sections/index.ts` — each entry pairs an `id` (used as the anchor link target), a Japanese `name` (shown in nav), and a Svelte `component`. The nav menu, hamburger menu, and main content all iterate over this same array, so adding/removing a section means editing only that file plus creating the section component under `src/lib/sections/`.

**Blog → Newt CMS.** `src/lib/api/newt.ts` exports a `NewtClient` singleton (`client`) plus the `Post`/`Author`/`Tag` content types. It is a vendored/modified port of `newt-client-js`. Two private env vars are required (`$env/static/private`):

- `PRIVATE_NEWT_SPACE_UID`
- `PRIVATE_NEWT_CDN_TOKEN`

The blog data flow is:

- `src/routes/blog/+page.server.ts` — list page, calls `client.getContents<Post>({ appUid: 'blog', modelUid: 'article' })`
- `src/routes/blog/[slug]/+page.server.ts` — article page, uses `getFirstContent` with a `slug` query
- `src/routes/api/blog/+server.ts` — JSON endpoint mirroring the list

Without the env vars set, blog routes and the API endpoint will throw on load. All Newt fetches go through `fetchWithRetry` in `src/lib/util/fetch.ts` (3 retries, only retries 429/500).

**Static data lives in `src/data/`:**

- `sns.json` — SNS account list, typed via the `SNSAccount`/`SNS` declarations in `src/app.d.ts` and `src/lib/util/sns.ts`
- `languages.ts` — `LANGUAGE_NAMES_JA` and `LANGUAGES` maps; `Lang` is derived as `keyof typeof LANGUAGE_NAMES_JA` and used as the canonical language type elsewhere

## Code style

Prettier config (`.prettierrc`): tabs, single quotes, no trailing commas, 100 col width. ESLint extends `@typescript-eslint/recommended` + `plugin:svelte/recommended`. TypeScript is `strict: true` with `checkJs` enabled.
