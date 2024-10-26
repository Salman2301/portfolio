<script lang="ts">
  import { data as social } from "$lib/constant/Social.svelte";
</script>

<div class="social">
  {#each Object.entries(social) as [key, { icon, name, link, color }]}
    <div class="icon" style="--bard-color: {color}">
      <a href="{link}" title="{name}" aria-label="share {name}">
        <svelte:component this={icon} />
      </a>
    </div>
  {/each}
</div>

<p class="hover:underline font-bold mt-4">
  <a href="mailto:admin@salman2301.com">admin@salman2301.com</a>
</p>

<style lang="postcss">
  
  .social {
    @apply flex gap-5 justify-center;
    @apply mt-2;
  }
  
  .icon {
    @apply cursor-pointer;
  }
  .icon:hover :global(svg) {
    color: var(--bard-color);
  }
</style>