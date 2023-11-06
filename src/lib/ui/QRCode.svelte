<script lang="ts">
	import QRCode from 'qrcode';

	export let text: string;
</script>

{#await QRCode.toDataURL(text, { errorCorrectionLevel: 'H' }) then src}
	<img {src} alt={text} title={text} />
{/await}
