<script>
  import { onMount } from 'svelte';
  import { detailedCaught } from '../../helpers/stores';

  onMount(() => {
    detailedCaught.subscribe($detailedCaught => {
      console.log('My list of pokemons', $detailedCaught);
    });
  });
</script>

<slot />
