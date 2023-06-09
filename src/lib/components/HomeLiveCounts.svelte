<script lang="ts">
  export let count: number
  export let title: string
  export let description: string
</script>

<div>
  <p>{count}</p>
  <p>{title}</p>
  <p>{description}</p>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    padding: 1rem;
    border-radius: 1rem;
    @media screen and (max-width: 600px) {
      align-items: center;
    }
    & > * {
      font-size: 0.75em;
      margin: 0 0 0.35em;
    }
    & > *:not(:last-child) {
      font-weight: 700;
    }
    & :first-of-type {
      font-size: 1.225em;
    }
  }
</style>
