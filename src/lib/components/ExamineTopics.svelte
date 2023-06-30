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

<div>
  <h4>
    {name}
  </h4>
  <ul>
    {#each subTopics as subTopic}
      <li>{subTopic}</li>
    {/each}
  </ul>
  <a href="#">See All -></a>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    & li {
      color: var(--clr-primary-600);
      list-style: none;
    }
  }
  a {
    margin-top: auto;
  }
</style>
