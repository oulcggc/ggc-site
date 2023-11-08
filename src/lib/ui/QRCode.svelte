<script lang="ts">
	import QRCode from 'qrcode';

	export let text: string;
</script>

{#await QRCode.toDataURL(text, { errorCorrectionLevel: 'H', margin: 2, width: 200 }) then src}
	<img {src} alt={text} title={text} />
{/await}
