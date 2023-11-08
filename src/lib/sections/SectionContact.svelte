<script lang="ts">
	import SNSIcon from '$lib/ui/SNSIcon.svelte';
	import QRCode from '$lib/ui/QRCode.svelte';

	import SNS_ACCOUNTS from '$data/sns.json';
	import OPENCHAT_LINK from '$data/openchat-link.txt?raw';
	import OPENCHAT_LOGO from '$assets/line_openchat_400x400.png';
</script>

<h2>お問い合わせ</h2>

<div class="contact">
	<div class="entry">
		<h3>入会について</h3>
		<p>見学・入会は右記の連絡先からお問い合わせください。会費不要です！</p>

		<p>留学生・大学院生・他大生大歓迎！メンバーは暇な時だけ参加しているので、兼部も自由です。</p>
	</div>

	<div class="info">
		<h3>連絡先</h3>
		{#each SNS_ACCOUNTS as { link, type, name }}
			<a href={link} target="_blank" rel="noopener" class="text">
				{name}
				<SNSIcon {type} />
			</a>
		{/each}

		<a href={OPENCHAT_LINK} target="_blank" title="LINEオープンチャット" class="openchat-qr">
			<div class="qr-logo">
				<img src={OPENCHAT_LOGO} alt="LINEオープンチャット" title="LINEオープンチャット" />
			</div>
			<QRCode text={OPENCHAT_LINK} />
		</a>
	</div>
</div>

<style>
	.openchat-qr {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: fit-content;
	}

	.openchat-qr .qr-logo {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.openchat-qr img {
		width: 20%;
		height: 20%;
		border-radius: 50%;
		border: 3px solid white;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
	}

	.contact {
		display: grid;
		grid-template-columns: 16em 16em;
		gap: 3em;

		text-align: center;
	}

	.info {
		display: grid;
		justify-items: center;
		width: 5em;
	}

	.entry p {
		max-width: 16em;
	}

	a {
		justify-content: space-between;
		width: 100%;
	}
</style>
