<script lang="ts">
  import menu from "$lib/constant/menu";
  export let activeAnchor:string;
</script>

<div class="header">
  {#each Object.entries(menu) as [key, { label, themeName }]}
    <a href="#{key}">
      <div
        class="menu-item {themeName ? `theme-${themeName}` : ''}"
        class:highlight={activeAnchor===key}
      >
        {label}
      </div>
    </a>
  {/each}
</div>
<div class="top-blank-space"></div>

<style lang="postcss">

.header {
    @apply fixed;
    z-index: 999;
    @apply w-full;
    @apply flex justify-center items-center;
    @apply gap-5;
    @apply bg-secondary-1;
    height: 50px;
    top: 0;
  }
  .menu-item {
    @apply hover:text-highlight;
    @apply cursor-pointer;
    @apply bg-secondary-1;
  }
  .highlight {
    @apply text-highlight;
  }
  .theme-download {
    @apply bg-highlight-1;
    @apply text-white;
    @apply px-4;
    @apply rounded-sm;
  }
  .theme-download:hover {
    @apply text-white;
    @apply bg-highlight;
  }
  .top-blank-space {
    height: 40px;
  }
</style>