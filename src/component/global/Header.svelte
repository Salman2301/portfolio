<script lang="ts">
  import DownloadIcon from "$lib/svg/Download.svelte";

  import menu from "$lib/constant/menu";
  import { base } from '$app/paths';
  
  export let activeAnchor:string;
</script>

<div class="header">
  {#each menu as { label, themeName, href, hideMobile }}
    <a href="#{href}" class:hidden={hideMobile} class="{hideMobile ? 'hidden md:block' : ''}" >
      <div
        class="menu-item {themeName ? `theme-${themeName}` : ''}"
        class:highlight={activeAnchor===href}
      >
        {label}
      </div>
    </a>
  {/each}
    <a href="{base}/asset/pdf/Resume.pdf" download="Salman_Resume" class="icon">
      <DownloadIcon />
    </a>
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
    bottom: -1px;
  }

  @media screen(md) {
    .header {
      bottom: unset;
      top:0;
    }
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
  
  .theme-download.highlight {
    @apply underline
  }
  .icon {
    margin-left: -10px;
  }
  .top-blank-space {
    height: 40px;
    @apply h-10 lg:h-0;
  }
</style>