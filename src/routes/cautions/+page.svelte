<script lang="ts">
	import RiCopyrightLine from '~icons/ri/copyright-line';

	import type { PageData } from './$types';

	export let data: PageData;

	console.log('data', data);
</script>

<main>
  <h1>注意事項</h1>
  <div>
    <section>
      <h2>１．SNS運用について</h2>
      <p>こんな感じで注意事項を書いていきます。こんな感じで注意事項を書いていきます。こんな感じで注意事項を書いていきます。こんな感じで注意事項を書いていきます。こんな感じで注意事項を書いていきます。こんな感じで注意事項を書いていきます。</p>
    </section>

    <section>
      <h2>２．活動場所について</h2>
      <p>こんな感じで注意事項を書いていきます。こんな感じで注意事項を書いていきます。こんな感じで注意事項を書いていきます。こんな感じで注意事項を書いていきます。こんな感じで注意事項を書いていきます。こんな感じで注意事項を書いていきます。</p>
    </section>
    
    <section>
      <h2>３．学外活動について</h2>
      <p>こんな感じで注意事項を書いていきます。こんな感じで注意事項を書いていきます。こんな感じで注意事項を書いていきます。こんな感じで注意事項を書いていきます。こんな感じで注意事項を書いていきます。こんな感じで注意事項を書いていきます。</p>
    </section>

  </div>
</main>

<style>
	main {
		max-width: 800px;
		margin: 0 auto;

		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: stretch;
		gap: 2em;

		padding: 1em;
	}

  section {
    margin-bottom: 2em;
  }

  h1 {
    text-align: center;
  }

  section h2 {
    padding-left: 0.4em;
  }

</style>
