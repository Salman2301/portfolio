<script lang="ts">
  import data from "$lib/constant/tool";


  let sortedData = data.sort((a,b)=>a.rank-b.rank);

  console.log({sortedData})
</script>

<div class="section-tool">
  <div class="icons">
    {#each sortedData as data}
      <div class="icon">{data.name}</div>
    {/each}
  </div>
</div>

<style lang="postcss">
  .section-tool {
    @apply py-40 px-20;
    @apply bg-primary;
    height: 400px;
  }
  .icons {
    @apply flex flex-wrap gap-4 justify-center items-center;
    @apply bg-primary;
  }
  .icon {
    @apply border border-white rounded-sm;
    @apply p-1;
  }
</style>
