<script lang="ts">
  import { onMount } from "svelte";
  import SampleCard from "../card/Sample.svelte";
  import Follow from "../social/Follow.svelte";

  import sample from "$lib/constant/sample";
  import { dragscroll } from "$lib/action/dragscroll";
  import { handleAnimation } from "$lib/animations/matrix";

  let nameMatrix = "";

  onMount(()=>{
    handleAnimation({ text: "Salman", waitTick: 40}, txt=>nameMatrix=txt)
  })

</script>
<div class="section-hero">
  <div class="hero-body">
    <div class="content">
      <div class="content-body">
        <div class="heading">I'm <span class="border-b border-highlight-1 name-matrix">{nameMatrix}</span></div>
        <div class="tag"><span>Full-Stack</span> web developer</div>
      </div>
      <div class="content-bottom">
        <Follow />
      </div>
    </div>
    <div class="divider"></div>
    <div class="sample">
      <div class="mt-20">
        <h1 class="title"><span class="text-highlight-1 pr-1">Sample</span> Work</h1>
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
  .name-matrix {
    width: 70em!;
    letter-spacing: 2px;
    font-family: monospace;
  }
  .section-hero {
    width: 100%;
    @apply bg-primary;
    @apply text-secondary;
  }
  .title {
    @apply text-3xl;
    @apply mb-8 mt-4;
    @apply text-center;
    font-weight: 500;
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

  .divider {
    width: 2px;
    height: 550px;
    @apply mx-4;
    background-color: rgba(55,55,55);
    @apply hidden lg:block;
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

  .item > :global(svg) {
    color: white;
    fill: white;
  }

</style>
