<script lang="ts">
  export let count: number
  export let title: string
  export let description: string
</script>

<div class="stat place-items-center">
  <div class="stat-title">{title}</div>
  <div class="stat-value">{count}</div>
  <div class="stat-desc">{description}</div>
</div>
