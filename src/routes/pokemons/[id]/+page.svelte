<script>
  import Pokemon from '../../../components/Pokemon.svelte';

  import { pokemons } from '../../../helpers/stores';
  import { page } from '$app/stores';

  const id = parseInt($page.params.id);

  $: pokemon = $pokemons.find(p => p.id === id);
</script>

{#if pokemon}
  <Pokemon {pokemon} />
{/if}
