<script lang="ts">
  export let title: string
  export let description: string
</script>

<div class="home-facts">
  <div class="svg">
    <slot />
  </div>
  <h2>{title}</h2>
  <p>{description}</p>
</div>

<style>
  div {
    width: min(220px, 100%);
    justify-self: center;
  }
  h2 {
    font-size: 1em;
  }
  p {
    font-size: 0.75em;
    font-weight: 200;
  }
  * {
    margin-bottom: 0.45rem;
  }
  .svg {
    font-size: 3rem;
  }
  @media screen and (min-width: 875px) {
    .svg {
      font-size: 2.5em;
    }
  }
  @media screen and (max-width: 874px) {
    .home-facts {
      text-align: center;
    }
  }
</style>
