<script lang="ts">
  import Number from './Number.svelte';

  let nb = 1;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function double() {
    return nb * 2;
  }

  // function changeNumbers() {
  //   numbers.forEach((_, i) => {
  //     const random = 1 + Math.floor(Math.random() * 9);
  //     numbers[i] = random;
  //   });
  // }

  $: doubled = double();
</script>

{#each numbers as number}
  <button class:selected={number === nb} on:click={() => (nb = number)}>
    <Number {number} />
  </button>
{/each}

<!-- <button on:click={changeNumbers}>Change numbers</button> -->
<h2>{doubled}</h2>

<style>
  .selected {
    color: white;
    background-color: black;
  }
</style>
