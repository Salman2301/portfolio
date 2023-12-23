<script lang="ts">
  import { dragscroll } from "$lib/action/dragscroll";

  export let tags: string[] = [];
</script>

<div class="tags" use:dragscroll>
  {#each tags as currTag}
    <div class="tag">{currTag}</div>
  {/each}
</div>

<style lang="postcss">
  .tags {
    @apply flex gap-2 items-center;
    @apply overflow-scroll;
    scrollbar-width: none;  /* Firefox */
    @apply my-3;
  }
  .tags::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }
  .tag {
    @apply bg-secondary;
    @apply rounded-md;
    @apply text-primary;
    @apply px-2;
    @apply text-xs;
    @apply whitespace-pre;
  }

</style>