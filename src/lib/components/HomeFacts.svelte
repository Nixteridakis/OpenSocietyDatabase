<script lang="ts">
  export let title: string
  export let description: string
</script>

<div class="stat w-sm">
  <div class="stat-value svg mx-auto">
    <slot />
  </div>
  <h2 class="stat-title text-xl font-bold">{title}</h2>
  <p class="stat-desc">{description}</p>
</div>

<style>
  .stat {
    gap: 0.75em;
  }
  .stat-title,
  .stat-desc {
    text-wrap: balance;
  }
  .svg {
    font-size: 3rem;
  }
  @media screen and (min-width: 875px) {
    .svg {
      font-size: 2.5em;
    }
  }
</style>
