<script>
  import '../styles/index.css'
  import Fa from 'svelte-fa'
  import { faDatabase } from '@fortawesome/free-solid-svg-icons'
</script>

<header>
  <div class="container-fluid primary-nav">
    <a href="#"><Fa icon={faDatabase} /> Open Society Database</a>
    <nav class="primary-navigation">
      <ul role="list" class="nav-list">
        <li><a href="#">European Initiatives</a></li>
        <li><a href="#">European Use Cases</a></li>
        <li role="list" dir="rtl">
          <a href="#" aria-haspopup="listbox">Select your country</a>
          <ul role="listbox">
            <li><a href="/country/Germany" data-sveltekit-preload-data="tap">Germany</a></li>
            <li><a href="/country/Italy" data-sveltekit-preload-data="tap">Italy</a></li>
            <li><a href="/country/Greece" data-sveltekit-preload-data="tap">Greece</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <a class="btn-sm subscribe" href="#" on:click|preventDefault role="button">Newsletter Subscribe</a>
  </div>
</header>
<slot />
<footer />

<style>
  .primary-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
  }
  .primary-navigation,
  .subscribe {
    display: none;
  }
  @media (min-width: 768px) {
    .primary-navigation,
    .subscribe {
      display: block;
    }
  }
  footer {
    padding: 2em 5 em;
    background-color: var(--clr-primary-600);
  }
</style>
