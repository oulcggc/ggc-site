<script lang="ts">
	import { LANGUAGES, LANGUAGE_NAMES_JA, type Lang } from '$data/languages';
	import { onMount } from 'svelte';
	function generateRandomHueColorInLCH(chroma: number, luminance: number, alpha: number) {
		const hue = Math.random() * 360;
		return `lch(${luminance} ${chroma} ${hue} / ${alpha})`;
	}

	const MAX_BUBBLE_COUNT = 30;

	let bubbles: HTMLSpanElement[] = [];

	onMount(() => {
		for (const bubble of bubbles) {
			animateBubble(bubble);
		}
	});

	function clamp(value: number, min: number, max: number) {
		return Math.min(Math.max(value, min), max);
	}

	let container: HTMLDivElement;

	function animateBubble(old: HTMLSpanElement) {
		// random lang (not duplicate)
		let [lang, text] = pickRandomLanguage();
		const currentLangs = [...document.querySelectorAll('.bubbles a')].map((bubble) =>
			bubble.getAttribute('lang')
		) as Lang[];
		while (currentLangs.includes(lang)) {
			[lang, text] = pickRandomLanguage();
		}

		container.removeChild(old);

		const bubble = document.createElement('a');
		bubble.setAttribute('lang', lang);
		bubble.textContent = text;
		bubble.title = LANGUAGE_NAMES_JA[lang];
		bubble.href = getWikipediaLinkJA(lang);
		bubble.target = '_blank';

		// random font
		bubble.style.color = generateRandomHueColorInLCH(50, 50, 0.75);
		bubble.style.fontSize = `${Math.random() * 2 + 1}em`;

		// random position
		bubble.style.top = `${Math.random() * 100}%`;
		bubble.style.left = `calc(${clamp(Math.random() * 100, 10, 90)}% - 2ch)`;

		// random animation
		bubble.style.animationName = 'bubbles';
		bubble.style.animationDuration = `${Math.random() * 5 + 6}s`;
		bubble.style.animationTimingFunction = 'ease-in-out';
		bubble.style.animationDelay = `${Math.random() * 5}s`;

		bubble.addEventListener('animationend', () => {
			animateBubble(bubble);
		});

		container.appendChild(bubble);
	}

	function calcWeight(i: number) {
		return 1 / (i + 1);
	}

	function pickRandomLanguage(): [Lang, string] {
		const langs = Object.keys(LANGUAGES) as (keyof typeof LANGUAGES)[];
		const weights = langs.map((_, i) => calcWeight(i));
		const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);

		let random = Math.random() * totalWeight;
		let index = 0;
		for (; index < langs.length; index++) {
			if (random < weights[index]) break;
			random -= weights[index];
		}

		const lang = langs[index];
		const text = LANGUAGES[lang];
		return [lang, text];
	}

	function sampleRandomLanguage(amount: number): [Lang, string][] {
		const langs = Object.keys(LANGUAGES) as (keyof typeof LANGUAGES)[];
		const weights = langs.map((_, i) => calcWeight(i)); // Higher weight for lower indices
		const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);

		const sample = new Set<keyof typeof LANGUAGES>();
		while (sample.size < amount) {
			let random = Math.random() * totalWeight;
			let index = 0;
			for (; index < langs.length; index++) {
				if (random < weights[index]) break;
				random -= weights[index];
			}
			sample.add(langs[index]);
		}

		return [...sample].map((lang) => [lang, LANGUAGES[lang]]);
	}

	function getWikipediaLinkJA(lang: Lang) {
		const name = /^[^（]+/.exec(LANGUAGE_NAMES_JA[lang])?.[0];
		return `https://ja.wikipedia.org/wiki/${encodeURIComponent(name ?? lang)}`;
	}
</script>

<div class="bubbles" bind:this={container}>
	{#each sampleRandomLanguage(MAX_BUBBLE_COUNT) as [lang, text], i}
		<a
			{lang}
			title={LANGUAGE_NAMES_JA[lang]}
			bind:this={bubbles[i]}
			href={getWikipediaLinkJA(lang)}
		>
			{text}
		</a>
	{/each}
</div>

<style>
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
		/* top: 0;
		left: 0;
		right: 0;
		bottom: 0; */
	}

	.bubbles :global(a) {
		position: absolute;
		opacity: 0;
		white-space: nowrap;

		text-decoration: none;
	}

	.bubbles :global(a:hover) {
		animation-play-state: paused;
		text-decoration: underline;
	}

	/* Vertical Writing Systems */
	.bubbles :global(a[lang$='-Mong']) {
		writing-mode: vertical-lr;
		text-orientation: upright;
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
