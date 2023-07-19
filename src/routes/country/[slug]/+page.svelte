<script>
  /** @type {import('./$types').PageData} */
  export let data
</script>

<div class="container-fluid">
  <div class="grid-flow">
    <div class="bg-lime-400">Content1</div>
    <div class="bg-orange-500">
      <h1>{data.post.title}</h1>
      <div>{@html data.post.content}</div>
    </div>
    <div class="bg-yellow-500">Content2</div>
  </div>
  <div class="grid-flow content">
    <div class="bg-indigo-500">Section 1</div>
    <div class="bg-rose-700">Section 2</div>
    <div class="bg-pink-300">Section 3</div>
  </div>
</div>

<style>
  .grid-flow {
    display: grid;
  }

  .content > :not(:nth-child(2)) {
    position: sticky;
    top: 0;
    height: 100dvh;
  }
  .content {
    height: 200vh;
  }
  @media (min-width: 1024px) {
    .grid-flow {
      grid-template-columns: 1fr 2fr 1fr;
    }
  }
</style>
