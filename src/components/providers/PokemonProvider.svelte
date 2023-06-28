<script>
  import { pokemons } from '../../helpers/stores';

  (function () {
    pokemons.set([
      {
        id: 1,
        name: 'Bulbizarre',
      },
      {
        id: 2,
        name: 'Herbizarre',
      },
    ]);
  })();
</script>

<slot />
