<script lang="ts">
  import { pokemons } from '../../helpers/stores';
</script>

{#each $pokemons as pokemon}
  <a href="/pokemons/{pokemon.id}">{pokemon.name}</a>
{/each}

<slot />

<style>
  nav {
    display: flex;
    gap: 0.5rem;
  }
</style>
