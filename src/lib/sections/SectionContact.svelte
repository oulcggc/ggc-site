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
		<p>見学・入会は下記連絡先からお問い合わせください。会費不要です。</p>

		<p>留学生・大学院生・他大生大歓迎！メンバーは暇な時だけ参加しているので、兼部も自由です。</p>

		<p>
			<a href={null} class="text" title="制作中">注意事項(TBD)</a>
			<a href={null} class="text" title="制作中">会則(TBD)</a>
		</p>
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
		grid-template-columns: 1fr 1fr;
		gap: 3em;
		justify-content: center;

		text-align: center;
	}

	.info {
		display: grid;
		justify-items: center;
	}

	.entry p {
		max-width: 16em;
	}

	.info a {
		justify-content: space-between;
		width: 12em;
	}

	@media (max-width: 768px) {
		.contact {
			grid-template-columns: 1fr;

			gap: 0;
		}

		.info {
			width: 100%;
		}
	}
</style>
