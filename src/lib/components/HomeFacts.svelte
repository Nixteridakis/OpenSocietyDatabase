<script lang="ts">
  export let title: string
  export let description: string
</script>

<div>
  <slot />
  <h2>{title}</h2>
  <p>{description}</p>
</div>

<style>
  div {
    width: min(220px, 100%);
    justify-self: center;
    @media screen and (max-width: 875px) {
      margin-bottom: 3em;
    }
  }
  h2 {
    font-size: 1em;
  }
  p {
    font-size: 0.75em;
    font-weight: 200;
  }
  *,
  :global(svg) {
    margin-bottom: 0.45rem;
  }
  :global(svg) {
    font-size: 3rem;
  }
  @media screen and (min-width: 875px) {
    :global(svg) {
      font-size: 2.5em;
    }
  }
</style>
