<script lang="ts">
  import { DownloadIcon, HomeIcon } from 'lucide-svelte';

  import menu from "$lib/constant/menu";
  import { base } from '$app/paths';
  
  export let activeAnchor:string;
</script>

<div class="flex items-center justify-center md:max-w-none max-w-screen-sm">
  <div class="header shadow-sm">
    {#each menu as { label, themeName, href, hideMobile, Icon }}
      <a href="#{href}" class:hidden={hideMobile} class="{hideMobile ? 'hidden md:block' : ''}" >
        <div
          class="menu-item {themeName ? `theme-${themeName}` : ''}"
          class:highlight={activeAnchor===href}
        >
          {#if Icon}
            <div class="md:block hidden bg-transparent text-inherit">
              <Icon size={20} />
            </div>
          {/if}
          {label}
        </div>
      </a>
    {/each}
    <div class="flex items-center justify-center text-white">
      <a href="#resume" class="btn-resume" class:active={activeAnchor==="resume"}>Resume</a>
      <a href="{base}/asset/pdf/Resume.pdf" download="Salman_Resume" class="bg-highlight-1 rounded-r-md pr-4 pl-2 w-full h-8 flex items-center hover:bg-highlight-1-dark">
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
    @apply flex items-center gap-2;
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
    @apply h-10 lg:h-0;
  }

  .btn-resume {
    @apply bg-highlight-1;
    @apply h-8;
    @apply border-r border-r-black;
    @apply pr-1;
    @apply w-full;
    @apply pl-4 pr-2;
    @apply rounded-l-md;
    @apply flex;
    @apply items-center;
  }

  .btn-resume:hover {
    @apply hover:bg-highlight-1-dark;
  }

  .btn-resume.active {
    @apply bg-highlight-1-dark;
  }
</style>