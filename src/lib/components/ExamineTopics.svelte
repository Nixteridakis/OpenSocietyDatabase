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

<div class="space-y-4">
  <h4 class="font-bold text-md">
    {name}
  </h4>
  <ul>
    {#each subTopics as subTopic}
      <li><a>{subTopic}</a></li>
    {/each}
  </ul>
  <p><a href="#">See All &#8594;</a></p>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & li {
      color: var(--clr-primary-600);
    }
  }
  a {
    margin-top: auto;
  }
</style>
