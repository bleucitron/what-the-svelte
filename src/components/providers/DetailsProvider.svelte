<script>
  import { pokemons, catched, detailedCaught } from '../../helpers/stores';

  $: if ($pokemons && $catched) {
    $catched.forEach(id => {
      const caught = $pokemons.find(p => p.id === id);

      if (caught) {
        $detailedCaught[id] = caught;
      }
    });
  }
</script>

<slot />
