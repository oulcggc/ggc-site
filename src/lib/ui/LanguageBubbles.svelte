<script lang="ts">
	import { LANGUAGES, LANGUAGE_NAMES_JA, type Lang } from '$data/languages';

	const MAX_BUBBLE_COUNT = 30;

	type BubbleState = {
		key: number;
		lang: Lang;
		text: string;
		color: string;
		fontSize: string;
		top: string;
		left: string;
		duration: string;
		delay: string;
	};

	function clamp(v: number, lo: number, hi: number) {
		return Math.min(Math.max(v, lo), hi);
	}

	function randomColor() {
		return `lch(50% 50 ${Math.random() * 360} / 0.75)`;
	}

	const calcWeight = (i: number) => 1 / (i + 1);

	function pickLang(exclude: Set<Lang>): [Lang, string] {
		const all = Object.keys(LANGUAGES) as Lang[];
		const langs = all.filter((l) => !exclude.has(l));
		const pool = langs.length > 0 ? langs : all;
		const weights = pool.map((_, i) => calcWeight(i));
		const total = weights.reduce((a, b) => a + b, 0);
		let r = Math.random() * total;
		let i = 0;
		for (; i < pool.length; i++) {
			if (r < weights[i]) break;
			r -= weights[i];
		}
		const lang = pool[i] ?? pool[0];
		return [lang, LANGUAGES[lang]];
	}

	function getWikipediaLinkJA(lang: Lang) {
		const name = /^[^（]+/.exec(LANGUAGE_NAMES_JA[lang])?.[0];
		return `https://ja.wikipedia.org/wiki/${encodeURIComponent(name ?? lang)}`;
	}

	let nextKey = 0;

	function makeBubble(exclude: Set<Lang>): BubbleState {
		const [lang, text] = pickLang(exclude);
		return {
			key: ++nextKey,
			lang,
			text,
			color: randomColor(),
			fontSize: `${Math.random() * 2 + 1}em`,
			top: `${Math.random() * 100}%`,
			left: `calc(${clamp(Math.random() * 100, 10, 90)}% - 2ch)`,
			duration: `${Math.random() * 5 + 6}s`,
			delay: `${Math.random() * 5}s`
		};
	}

	function makeInitial(): BubbleState[] {
		const used = new Set<Lang>();
		const out: BubbleState[] = [];
		for (let i = 0; i < MAX_BUBBLE_COUNT; i++) {
			const b = makeBubble(used);
			used.add(b.lang);
			out.push(b);
		}
		return out;
	}

	let bubbles: BubbleState[] = makeInitial();

	function refresh(i: number) {
		// Defer to the next frame so we don't destroy the element mid-event.
		requestAnimationFrame(() => {
			const used = new Set(bubbles.map((b) => b.lang));
			used.delete(bubbles[i].lang);
			const next = makeBubble(used);
			// Reset the delay so refreshed bubbles start immediately.
			next.delay = '0s';
			bubbles[i] = next;
		});
	}
</script>

<div class="bubbles">
	{#each bubbles as bubble, i (bubble.key)}
		<a
			lang={bubble.lang}
			title={LANGUAGE_NAMES_JA[bubble.lang]}
			href={getWikipediaLinkJA(bubble.lang)}
			target="_blank"
			rel="noopener"
			style:color={bubble.color}
			style:font-size={bubble.fontSize}
			style:top={bubble.top}
			style:left={bubble.left}
			style:animation-name="bubbles"
			style:animation-duration={bubble.duration}
			style:animation-delay={bubble.delay}
			style:animation-timing-function="ease-in-out"
			on:animationend={() => refresh(i)}
		>
			{bubble.text}
		</a>
	{/each}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Display&family=Noto+Sans+Mongolian&family=Uchen&display=swap');

	@keyframes -global-bubbles {
		0% {
			opacity: 0;
			transform: translateY(50vh);
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: translateY(-50vh);
		}
	}

	.bubbles {
		position: relative;
		z-index: 1;
	}

	.bubbles a {
		position: absolute;
		opacity: 0;
		white-space: nowrap;
		text-decoration: none;
		font-family: 'Noto Sans Display', sans-serif;
	}

	.bubbles a:hover {
		animation-play-state: paused;
		text-decoration: underline;
		z-index: 2;
		transform: scale(1.5);
		filter: brightness(1.2);
		text-shadow: 0 0 0.5em color-mix(in srgb, currentColor 20%, transparent);
	}

	.bubbles a[lang$='-Mong'] {
		writing-mode: vertical-lr;
		font-family: 'Noto Sans Mongolian', sans-serif;
	}

	.bubbles a[lang$='-Tibt'] {
		font-family: 'Uchen', serif;
	}

	@media (prefers-reduced-motion: reduce) {
		.bubbles {
			visibility: hidden;
		}
	}

	@media (max-width: 600px) {
		.bubbles {
			display: none;
		}
	}
</style>
