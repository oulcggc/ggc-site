<script lang="ts">
	import QRCode from 'qrcode';

	interface Props {
		text: string;
	}

	let { text }: Props = $props();
</script>

{#await QRCode.toDataURL(text, { errorCorrectionLevel: 'H', margin: 2, width: 205 }) then src}
	<img {src} alt={text} title={text} />
{/await}
