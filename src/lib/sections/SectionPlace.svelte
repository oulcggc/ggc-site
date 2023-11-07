<script lang="ts">
	// TODO: LINK TO ACCESS MAP
	import PlaceCard from '$lib/ui/PlaceCard.svelte';
</script>

<h2>活動拠点</h2>

<div class="cards">
	<PlaceCard
		id="minoh"
		name="外520講義室"
		campus="箕面キャンパス"
		photo="https://picsum.photos/seed/1/300/200"
		time="月～水曜日 18:30–20:15"
		access="https://www1.lang.osaka-u.ac.jp/access.html"
		facility="https://www.osaka-u.ac.jp/ja/guide/campus/projects/minoh/"
		building="外国学講義棟 5階"
	/>
	<PlaceCard
		id="tynkb"
		name="サイエンススタジオB"
		campus="豊中キャンパス"
		photo="https://picsum.photos/seed/2/300/200"
		time="木～金曜日 18:00–19:45"
		access="https://www.celas.osaka-u.ac.jp/facilities/"
		facility="https://www.celas.osaka-u.ac.jp/facilities/commons/science/"
		building="サイエンス・コモンズ 1階"
	/>
	<PlaceCard
		id="oumlp"
		name="OUマルチリンガルプラザ"
		campus="豊中キャンパス"
		photo="https://picsum.photos/seed/3/300/200"
		time="金曜日 12:00–15:00"
		access="https://plaza.cme.osaka-u.ac.jp/facility/"
		facility="https://www.cmc.osaka-u.ac.jp/?page_id=2489"
		building="サイバーメディアセンター 4階"
	/>
</div>
<p class="notice">※いずれも変更の可能性あり</p>

<div class="sns" />

<style>
	.cards {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
		gap: 1em;
	}

	.notice {
		font-size: 1.2em;
		text-align: center;
	}
</style>
