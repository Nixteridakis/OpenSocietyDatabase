<script>
  let { name, subTopics } = $$props
</script>

<div class="space-y-4">
  <h4 class="font-bold text-md">
    {name}
  </h4>
  <ul>
    {#each subTopics as subTopic}
      <li><a class="link">{subTopic}</a></li>
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
