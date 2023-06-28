<script lang="ts">
  import type { Pokemon } from '../helpers/stores';
  export let pokemon: Pokemon;

  $: id = pokemon.id;
  $: name = pokemon.name;
  $: attacks = pokemon.attacks;
  $: types = pokemon.types;
  $: generation = pokemon.generation;
  $: region = pokemon.region;
  $: img = pokemon.img;
</script>

<div>
  <h1 class="name">{name}</h1>
  <p>{id}</p>
  <p>{attacks}</p>
  <p>{types}</p>
  <p>{generation}</p>
  <p>{region}</p>
  <p>{img}</p>
</div>

<style>
  div {
    text-align: center;
  }
  h1 {
    font-size: 2rem;
  }

  h1 + p {
    font-size: 1.2rem;
  }
</style>
