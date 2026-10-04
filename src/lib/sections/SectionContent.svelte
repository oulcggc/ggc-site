<script lang="ts">
	import ScheduleSlot from '#lib/ui/ScheduleSlot.svelte';
	import RiCalendarTodoFill from '~icons/ri/calendar-todo-fill';

	const TOYONAKA = {
		campus: '豊中',
		place: 'サイエンススタジオB',
		href: '#tynkb',
		time: '18:30–19:50',
		color: 'b'
	} as const;

	const MINOH = {
		campus: '箕面',
		place: '外520講義室',
		href: '#minoh',
		time: '18:30–20:10',
		color: 'r'
	} as const;

	const WEEK = [
		{ day: '月', slot: TOYONAKA },
		{ day: '火', slot: TOYONAKA },
		{ day: '水', slot: TOYONAKA },
		{ day: '木', slot: MINOH },
		{ day: '金', slot: MINOH }
	];

	const ACTIVITY_TYPES = [
		{ name: '共通語学', detail: 'みんなで同じ言語を学びます。' },
		{ name: '個別発表', detail: '部員が語学や言語学について教えあいます。' },
		{ name: '参加型企画', detail: 'ことばに関するゲームなど、参加型の企画をみんなで楽しみます。' }
	];
</script>

<h2>活動内容</h2>

<p class="lead">
	平日の夜、豊中・箕面の両キャンパスで活動しています。出入り自由で、途中からの参加も歓迎です。
</p>

<table>
	<thead>
		<tr>
			{#each WEEK as { day } (day)}
				<th>{day}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		<tr>
			{#each WEEK as { day, slot } (day)}
				<td><ScheduleSlot {...slot} /></td>
			{/each}
		</tr>
	</tbody>
</table>

<h3>活動の種類</h3>
<dl>
	{#each ACTIVITY_TYPES as { name, detail } (name)}
		<dt>{name}</dt>
		<dd>{detail}</dd>
	{/each}
</dl>

<p class="notice">
	※各回の内容は週ごとに変わります。実際にご参加の際は、Instagram・LINEオープンチャット等のSNSで最新情報をご確認ください。
</p>

<a
	href="https://sites.google.com/view/ggccalendar/%E3%83%9B%E3%83%BC%E3%83%A0"
	target="_blank"
	class="text"
>
	<RiCalendarTodoFill height="1.5em" />
	リアルタイム予定表（Googleカレンダー）
</a>

<style>
	a.text {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: 0.2em;
		text-decoration: none;
		color: var(--color-theme);
		position: relative;
		transition: color 0.2s ease-in-out;
		margin: 0 auto;
		width: fit-content;
		position: relative;
	}

	a.text::after {
		content: '';
		display: block;
		position: absolute;
		width: 0;
		height: 2px;
		bottom: 0;
		background: currentColor;
		transition: width 0.3s ease-in-out;
	}

	a.text:hover::after {
		width: 100%;
	}

	table {
		border-collapse: collapse;
	}

	th,
	td {
		border: 1px solid #ddd;
		padding: 0.5em;
	}

	td {
		vertical-align: top;
		min-width: 8em;
	}

	@media (max-width: 800px) {
		table {
			writing-mode: vertical-lr;
		}
		th,
		td {
			writing-mode: horizontal-tb;
		}

		th {
			padding: 0.25em;
		}

		td {
			min-width: 20%;
			min-height: 5em;
		}
	}

	.notice {
		font-size: 1.2em;
		text-align: center;
	}

	h3 {
		margin-top: 1.5em;
	}

	.lead {
		text-align: center;
	}

	dl {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.5em 1em;
		margin: 0 auto 1em;
		max-width: 36em;
	}

	dt {
		font-weight: bold;
		color: var(--color-theme);
	}

	dd {
		margin: 0;
	}
</style>
