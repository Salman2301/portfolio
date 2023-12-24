<script lang="ts">
  import data from "../../lib/constant/portfolio";
</script>

<div class="cards">
  {#each data as item}
    <div class="card" style="border-color:{item.color}">
      <a href="{item.link}" target="_blank" class="hover:underline">
        <div class="title">{item.title}<span class="suffix">.com</span></div>
      </a>
      <div class="description">{item.description}</div>
    </div>
  {/each}
</div>

<style lang="postcss">
  .cards {
    @apply flex flex-col md:flex-row justify-evenly items-center;
    @apply w-full;
    @apply gap-4;
    @apply bg-secondary-1;
    @apply py-4;
  }
  .card {
    @apply bg-primary;
    @apply border-4;
    @apply px-4 pt-1 pb-2;
    @apply rounded-md;
    @apply border-y;
    width: 180px;
  }
  .title {
    @apply text-lg;
  }
  .suffix {
    @apply text-sm;
    color: #706464;
  }
  .description {
    @apply text-xs;
    @apply font-bold;
  }
</style>