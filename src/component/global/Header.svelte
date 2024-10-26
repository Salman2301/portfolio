<script lang="ts">
  import { DownloadIcon } from 'lucide-svelte';

  import menu from "$lib/constant/menu";
  import { base } from '$app/paths';
  
  export let activeAnchor:string;
</script>

<div class="flex items-center justify-center">
  <div class="header shadow-sm">
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
    <div class="flex items-center justify-center gap-4 bg-highlight-1 rounded-md text-white px-4">
      <a href="#resume" class="bg-transparent text-md py-1 hover:underline border-r border-r-white pr-1">Resume</a>
      <a href="{base}/asset/pdf/Resume.pdf" download="Salman_Resume" class="icon">
        <DownloadIcon size=20 />
      </a>
    </div>
  </div>
</div>
<div class="top-blank-space"></div>

<style lang="postcss">

  .header {
    @apply fixed;
    z-index: 999;
    @apply flex justify-center items-center;
    @apply gap-8;
    @apply bg-black;
    height: 60px;
    bottom: -1px;
    @apply rounded-md;
    @apply px-4;
  }

  @media screen(md) {
    .header {
      bottom: unset;
      top:30px;
    }
  }

  .menu-item {
    @apply hover:text-highlight;
    @apply cursor-pointer;
    @apply bg-black;
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
    @apply bg-transparent; 
  }
  .icon:hover {
    opacity: 0.8;
  }
  .top-blank-space {
    height: 40px;
    @apply h-10 lg:h-0;
  }
</style>