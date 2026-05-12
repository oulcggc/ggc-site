<script lang="ts">
	import { inview, type Options } from 'svelte-inview';
	import RiStarSmileLine from '~icons/ri/star-smile-line';
	import RiCalendarEventLine from '~icons/ri/calendar-event-line';
	import RiTeamLine from '~icons/ri/team-line';

	type Entry = {
		year: string;
		title: string;
		body: string;
		icon: typeof RiStarSmileLine;
	};

	const TIMELINE: Entry[] = [
		{
			year: '2022',
			title: 'サークル設立',
			body: '松浦氏により創設。初期メンバーはわずか3人からのスタートでした。',
			icon: RiStarSmileLine
		},
		{
			year: '2022 〜',
			title: 'いちょう祭・まちかね祭に参加',
			body: '春のいちょう祭、秋のまちかね祭に毎年出展。語学体験やサークル紹介を行っています。',
			icon: RiCalendarEventLine
		},
		{
			year: '現在',
			title: '約90名のメンバーで活動中',
			body: '箕面・豊中の両キャンパスを拠点に、語学・言語学を楽しむ仲間が集まっています。',
			icon: RiTeamLine
		}
	];

	const inviewOptions: Options = {
		rootMargin: '0px 0px -10% 0px',
		unobserveOnEnter: true
	};

	let visible: boolean[] = TIMELINE.map(() => false);
</script>

<div class="history">
	<h2>沿革</h2>

	<ol class="timeline">
		{#each TIMELINE as entry, i}
			<li
				class="entry"
				class:visible={visible[i]}
				data-side={i % 2 === 0 ? 'left' : 'right'}
				style="--delay: {i * 120}ms"
				use:inview={inviewOptions}
				on:inview_enter={() => (visible[i] = true)}
			>
				<span class="marker" aria-hidden="true">
					<svelte:component this={entry.icon} />
				</span>

				<article class="card">
					<span class="year">{entry.year}</span>
					<h3>{entry.title}</h3>
					<p>{entry.body}</p>
				</article>
			</li>
		{/each}
	</ol>
</div>

<style>
	.history {
		width: 100%;
		max-width: 60em;
		margin: 0 auto;
	}

	h2 {
		text-align: center;
	}

	.timeline {
		position: relative;
		list-style: none;
		padding: 1em 0;
		margin: 0 auto;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: 50%;
		top: 0;
		bottom: 0;
		width: 3px;
		background: linear-gradient(
			180deg,
			transparent 0%,
			var(--color-accent) 8%,
			var(--color-accent) 92%,
			transparent 100%
		);
		transform: translateX(-50%);
		border-radius: 2px;
	}

	.entry {
		position: relative;
		width: 50%;
		padding: 1em 2.5em;
		box-sizing: border-box;
		opacity: 0;
		transform: translateY(24px);
		transition: opacity 0.7s ease-out var(--delay, 0ms),
			transform 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) var(--delay, 0ms);
	}

	.entry[data-side='left'] {
		margin-right: auto;
		text-align: right;
		transform: translateY(24px) translateX(-16px);
	}

	.entry[data-side='right'] {
		margin-left: auto;
		text-align: left;
		transform: translateY(24px) translateX(16px);
	}

	.entry.visible,
	.entry.visible[data-side='left'],
	.entry.visible[data-side='right'] {
		opacity: 1;
		transform: translateY(0) translateX(0);
	}

	.card {
		display: inline-block;
		background: #fff;
		border: 1px solid var(--color-accent-alpha-20);
		border-radius: 0.6em;
		padding: 1em 1.4em;
		box-shadow: 0 4px 18px rgba(24, 65, 100, 0.06);
		max-width: 100%;
		text-align: left;
		transition: box-shadow 0.3s ease;
	}

	.card:hover {
		box-shadow: 0 6px 22px rgba(24, 65, 100, 0.12);
	}

	.year {
		display: inline-block;
		font-weight: bold;
		font-size: 0.95em;
		color: var(--color-accent);
		letter-spacing: 0.04em;
	}

	.card h3 {
		margin: 0.2em 0 0.5em;
		color: var(--color-theme);
		line-height: 1.4;
	}

	.card p {
		margin: 0;
		color: #444;
		line-height: 1.65;
	}

	.marker {
		position: absolute;
		top: 1.4em;
		width: 2.1em;
		height: 2.1em;
		border-radius: 50%;
		background: #fff;
		border: 3px solid var(--color-accent);
		color: var(--color-accent);
		display: grid;
		place-items: center;
		font-size: 0.95em;
		z-index: 1;
		box-shadow: 0 0 0 0 var(--color-accent-alpha-20);
		transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) var(--delay, 0ms);
		transform: scale(0.4);
	}

	.entry.visible .marker {
		transform: scale(1);
		animation: pulse 2.8s ease-in-out infinite;
		animation-delay: calc(var(--delay, 0ms) + 700ms);
	}

	@keyframes pulse {
		0%,
		100% {
			box-shadow: 0 0 0 0 var(--color-accent-alpha-20);
		}
		50% {
			box-shadow: 0 0 0 10px transparent;
		}
	}

	.entry[data-side='left'] .marker {
		right: 0;
		transform: translateX(50%) scale(0.4);
	}

	.entry[data-side='right'] .marker {
		left: 0;
		transform: translateX(-50%) scale(0.4);
	}

	.entry.visible[data-side='left'] .marker {
		transform: translateX(50%) scale(1);
	}

	.entry.visible[data-side='right'] .marker {
		transform: translateX(-50%) scale(1);
	}

	@media (prefers-reduced-motion: reduce) {
		.entry,
		.entry[data-side='left'],
		.entry[data-side='right'],
		.marker {
			transition: none;
		}
		.entry.visible .marker {
			animation: none;
		}
	}

	@media (max-width: 768px) {
		.timeline::before {
			left: 0.95em;
			transform: none;
		}

		.entry,
		.entry[data-side='left'],
		.entry[data-side='right'] {
			width: 100%;
			margin: 0;
			padding: 0.75em 0 0.75em 3em;
			text-align: left;
		}

		.entry[data-side='left'] {
			transform: translateY(24px) translateX(-12px);
		}
		.entry[data-side='right'] {
			transform: translateY(24px) translateX(12px);
		}
		.entry.visible[data-side='left'],
		.entry.visible[data-side='right'] {
			transform: translateY(0) translateX(0);
		}

		.entry[data-side='left'] .marker,
		.entry[data-side='right'] .marker {
			left: 0;
			right: auto;
			transform: translateX(0) scale(0.4);
		}

		.entry.visible[data-side='left'] .marker,
		.entry.visible[data-side='right'] .marker {
			transform: translateX(0) scale(1);
		}

		.card {
			display: block;
		}
	}
</style>
