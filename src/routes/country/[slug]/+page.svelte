<script>
  /** @type {import('./$types').PageData} */
  export let data
</script>

<div class="container-fluid">
  <div class="bg-primary-400 grid-flow">
    <div>Content1</div>
    <div>
      <h1>{data.post.title}</h1>
      <div>{@html data.post.content}</div>
    </div>
    <div class="bg-accent-600">Content2</div>
  </div>
  <div class="grid-flow content">
    <div class="bg-accent-200">Section 1</div>
    <div>Section 2</div>
    <div class="bg-accent-200">Section 3</div>
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
