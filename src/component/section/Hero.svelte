<script lang="ts">
  import SampleCard from "../card/Sample.svelte";
  import Heading from "../text/Heading.svelte";

  import sample from "$lib/constant/sample";
  import { data as social } from "$lib/constant/Social.svelte";
  import { dragscroll } from "$lib/action/dragscroll";

</script>
<div class="section-hero">
  <div class="hero-body">
    <div class="content">
      <div class="content-body">
        <div class="heading">I'm <span class="border-b border-highlight-1">Salman</span></div>
        <div class="tag"><span>Full-Stack</span> web developer</div>
      </div>
      <div class="content-bottom">
        <div class="social">
          {#each Object.entries(social) as [key, { icon, name, link }]}
            <div class="icon">
              <a href="{link}">
                <svelte:component this={icon} />
              </a>
            </div>
          {/each}
        </div>
        <p class="hover:underline font-bold mt-4">
          <a href="mailto:admin@salman2301.com">admin@salman2301.com</a>
        </p>
      </div>
    </div>
    <div class="divider"></div>
    <div class="sample">
      <div class="mt-20">
        <Heading content="Sample Works" />
      </div>
      <div class="cards" use:dragscroll >
        {#each Object.entries(sample) as [key, card]}
          <SampleCard {card}></SampleCard>
        {/each}
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .section-hero {
    width: 100%;
    @apply bg-primary;
    @apply text-secondary;
  }

  .hero-body {
    @apply flex flex-col md:flex-row;
  }

  .hero-body > .content {
    height: 400px;
    @apply w-full;
    min-width: 360px;
    @apply ml-0 lg:ml-10;
    @apply flex flex-col justify-center items-center;
  }
  .content-bottom {
    @apply flex flex-col items-center justify-center;
    @apply mt-20;
    @apply -mb-20;
    @apply md:w-[40vw] w-full;
  }
  .content-body > .heading {
    @apply text-5xl md:text-5xl;
    @apply mb-4;
    @apply w-full;
    @apply text-center;
    @apply w-full;
  }
  

  .content-body > .tag {
    @apply text-center;
    @apply w-full;
    @apply text-sm md:text-2xl;
    font-weight: 800;
  }

  .content-body > .tag > span {
    @apply text-highlight;
  }

  .social {
    @apply flex gap-5 justify-center;
    @apply mt-2;
  }
  .divider {
    width: 2px;
    height: 105%;
    @apply mx-4;
    background-color: rgba(55,55,55);
  }
  .sample {
    @apply h-full;
    @apply flex flex-col;
    @apply md:w-[60vw] w-full;
  }
  .cards {
    @apply flex gap-4;
    @apply w-full;
    /* @apply mt-40; */
    @apply pb-4 px-4;
    @apply overflow-scroll;
  }

  @media screen(md) {
    .cards {
      /* width: 64%; */
    }
  }

  .item > :global(svg) {
    color: white;
    fill: white;
  }

  .icon {
    @apply cursor-pointer;
  }
  .icon:hover :global(svg) {
    color: white;
  }
</style>
