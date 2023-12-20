<script lang="ts">
  import data from "$lib/constant/timeline";
</script>

<div class="section-timeline">
  {#each data as { timeline, exp, title }}
    <div class="item">
      <div class="title-exp">
        <span class="title">{title}</span>
        <span class="exp">{exp}</span>
      </div>
      <div class="timeline">{timeline}</div>
    </div>
  {/each}
</div>

<style lang="postcss">
  .section-timeline {
    @apply bg-primary;
    @apply px-10 py-10;
    @apply flex flex-col items-center;
    @apply gap-4;
  }
  .item {
    width: 250px;
    height: 100px;
    border-radius: 10px;
    @apply border rounded-sm;
    margin-left: 50px;
    @apply px-2 pt-4;
    margin-left: calc(25%);
  }
  .item:nth-child(2n) {
    margin-left: -550px;
    /* margin-left: -50%;
    margin-left: -200%; */
    margin-left: calc(-25%);

  }
  .title-exp {
    @apply flex justify-between;
  }
  .title {
    @apply font-bold;
    @apply text-lg;
  }
  .timeline {
    @apply text-xs;
  }
</style>
