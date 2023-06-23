<script>
  import '../styles/index.css'
  import Fa from 'svelte-fa'
  import { faDatabase } from '@fortawesome/free-solid-svg-icons'
</script>

<header>
  <div class="navbar primary-nav">
    <a href="/" class="navbar-start"><Fa icon={faDatabase} class="mr-1" />Open Society Database</a>
    <nav class="navbar-center flex">
      <ul class="menu menu-horizontal">
        <li><a href="/">European Initiatives</a></li>
        <li><a href="/">European Use Cases</a></li>
        <li>
          <details>
            <summary>Select your country</summary>
            <ul>
              <li><a href="/country/Germany" data-sveltekit-preload-data="tap">Germany</a></li>
              <li><a href="/country/Italy" data-sveltekit-preload-data="tap">Italy</a></li>
              <li><a href="/country/Greece" data-sveltekit-preload-data="tap">Greece</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>
    <div class="navbar-end">
      <a class="btn btn-sm" href="#" on:click|preventDefault role="button">Newsletter Subscribe</a>
    </div>
  </div>
</header>
<slot />
<footer />
