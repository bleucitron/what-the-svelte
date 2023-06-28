<script>
  import DetailsProvider from './DetailsProvider.svelte';
  import LangProvider from './LangProvider.svelte';
  import PokemonProvider from './PokemonProvider.svelte';
  import SubscribeProvider from './SubscribeProvider.svelte';
</script>

<DetailsProvider>
  <SubscribeProvider>
    <LangProvider>
      <PokemonProvider>
        <slot />
      </PokemonProvider>
    </LangProvider>
  </SubscribeProvider>
</DetailsProvider>
