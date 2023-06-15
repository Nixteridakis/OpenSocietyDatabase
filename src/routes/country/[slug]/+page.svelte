<script>
  /** @type {import('./$types').PageData} */
  export let data
</script>

<div class="container-fluid">
  <div class="grid hero">
    <div>Content1</div>
    <div>
      <h1>{data.post.title}</h1>
      <div>{@html data.post.content}</div>
    </div>
    <div>Content2</div>
  </div>
</div>

<style>
  @media (min-width: 768px) {
    .hero {
      grid-template-columns: 1fr 2fr 1fr;
      border: 1px solid red;
    }
  }
</style>
