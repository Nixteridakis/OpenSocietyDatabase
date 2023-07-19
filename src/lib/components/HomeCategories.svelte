<script>
  import FA from 'svelte-fa'
  import { faMoneyBills } from '@fortawesome/free-solid-svg-icons'
  let { title } = $$props
</script>

<div class="stat bg-base-100">
  <FA icon={faMoneyBills} class="stat-figure" color="var(--clr-primary-400)" />
  <h3>{title}</h3>
</div>
