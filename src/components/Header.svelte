<script lang="ts">
  import { player } from '../helpers/stores';
</script>

<header>
  <nav>
    <a href="/">Accueil</a>
    <a href="/pokemons">Pokemons</a>
  </nav>
  <p>{$player.name}</p>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    margin-block: 1rem;
  }

  p {
    margin: 0;
  }
</style>
