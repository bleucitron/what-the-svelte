<script lang="ts">
  export let number: number;

  const size = 1 + (number * 2) / 10;
</script>

<div>
  <div style:font-size={size + 'rem'}>{number}</div>
</div>
