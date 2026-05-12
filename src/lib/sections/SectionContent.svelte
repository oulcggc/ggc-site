<script>
	import CalenderEvent from '$lib/ui/CalenderEvent.svelte';
	import RiCalendarTodoFill from '~icons/ri/calendar-todo-fill';
</script>

<h2>活動内容（春学期）</h2>

<table>
	<thead>
		<tr>
			<th />
			<th>月</th>
			<th>火</th>
			<th>水</th>
			<th>木</th>
			<th>金</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>昼</th>
			<td />
			<td />
			<td />
			<td />
			<td>
			</td>
		</tr>
		<tr>
			<th>夜</th>
			<td>
				<CalenderEvent
					name="初級アイスランド語"
					place="SSB@豊中"
					href="#tynkb"
					time="18:30–19:50"
					color="b"
					detail="みんなで同じ言語を学びます。"
				/>
			</td>
			<td>
				<CalenderEvent
					name="初級ジョージア語"
					place="SSB@豊中"
					href="#tynkb"
					time="18:30–19:50"
					color="b"
					detail="みんなで同じ言語を学びます。"
				/>
			</td>
			<td>
				<CalenderEvent
					name="ナウル語"
					place="520@箕面"
					href="#minoh"
					time="18:30–20:10"
					color="r"
					detail="みんなで同じ言語を学びます。"
				/>
			</td>
			<td>
				<CalenderEvent
					name="綴りと発音が一致しているという幻想"
					place="SSB@豊中"
					href="#tynkb"
					time="18:30–19:50"
					color="b"
					detail="部員が語学や言語学にまつわることについて教えあいます。"
				/>
			</td>
			<td>
				<CalenderEvent
					name="ワードル（ゲーム）"
					place="SSB@豊中"
					href="#tynkb"
					time="18:30–19:50"
					color="b"
					detail="ことばに関するゲームをみんなで楽しみます。"
				/>
			</td>
		</tr>
	</tbody>
</table>
<p class="notice">※いずれも変更の可能性あり</p>

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
</style>
