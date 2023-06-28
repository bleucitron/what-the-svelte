<script>
  import { page } from '$app/stores';
  import Header from '../components/Header.svelte';
  import Providers from '../components/providers/Providers.svelte';
  import { player } from '../helpers/stores';

  export let data;

  $: player.set(data);

  $: console.log('USER', $player);
</script>

{#key $page.url.pathname}
  <Header />
  <Providers>
    <slot />
  </Providers>
{/key}
