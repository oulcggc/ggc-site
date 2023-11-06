<script lang="ts">
	import SNSIcon from '$lib/ui/SNSIcon.svelte';
	import SNS_ACCOUNTS from '$data/sns.json';

	import SectionContent from '$lib/sections/SectionContent.svelte';
	import SectionPlace from '$lib/sections/SectionPlace.svelte';
	import SectionContact from '$lib/sections/SectionContact.svelte';
	import SectionHome from '$lib/sections/SectionHome.svelte';
</script>

<svelte:head>
	<title>阪大言語サークルGGC</title>
</svelte:head>

<div class="floating">
	<nav>
		<ul>
			<li>
				<a href="#home"> ホーム </a>
			</li>
			<li>
				<a href="/blog" target="_blank">ブログ</a>
			</li>
			<li>
				<a href="#content"> 活動詳細 </a>
			</li>
			<li>
				<a href="#place"> 活動時間・場所 </a>
			</li>
			<li>
				<a href="#contact"> お問い合わせ </a>
			</li>
		</ul>
	</nav>
	<ul class="sns">
		{#each SNS_ACCOUNTS as { link, type }}
			<li>
				<a href={link} target="_blank" rel="noopener">
					<SNSIcon {type} />
				</a>
			</li>
		{/each}
	</ul>
</div>

<section id="home">
	<SectionHome />
</section>

<section id="content">
	<SectionContent />
</section>

<section id="place">
	<SectionPlace />
</section>

<section id="contact">
	<SectionContact />
</section>

<style>
	.floating {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;

		display: flex;
		justify-content: space-between;
		padding: 2em;
	}

	section {
		height: 100vh;
	}

	section:not(:first-of-type) {
		padding: 15em;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	ul.sns {
		font-size: 2.5em;
	}
</style>
