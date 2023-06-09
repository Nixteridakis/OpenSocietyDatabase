<script>
  // import { onMount } from 'svelte';
  // import { get } from 'svelte/store';
  // import { topic } from '$lib/stores.js';
  // let name = '';
  // onMount(async () => {
  //     const topicName = get(topic);
  //     name = topicName;
  // });
  let { name, subTopics } = $$props
</script>

<h4>
  {name}
</h4>
{#each subTopics as subTopic}
  <p>{subTopic}</p>
{/each}

<a href="#">See All -></a>
