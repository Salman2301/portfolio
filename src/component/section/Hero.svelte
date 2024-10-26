<script lang="ts">
  import { onMount } from "svelte";
  import SampleCard from "../card/Sample.svelte";
  import Follow from "../social/Follow.svelte";

  import sample from "$lib/constant/sample";
  import { dragscroll } from "$lib/action/dragscroll";

  let nameMatrix = "";
  let animationInterval: number;

  onMount(() => {
    animate();
  });

  function animate() {
    const targetName = "Salman";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let currentIndex = 0;

    clearInterval(animationInterval);

    animationInterval = setInterval(() => {
      if (currentIndex < targetName.length) {
        let randomChars = "";
        for (let i = currentIndex; i < targetName.length; i++) {
          randomChars += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        nameMatrix = targetName.slice(0, currentIndex) + randomChars;
        currentIndex++;
      } else {
        nameMatrix = targetName;
        clearInterval(animationInterval);
      }
    }, 50);
  }
</script>

<div class="section-hero">
  <div class="hero-body">
    <div class="content">
      <div class="content-body">
        <div class="heading">I'm
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <span class="border-b border-highlight-1 name-matrix" on:click={animate}>{nameMatrix}</span>
        </div>
        <div class="tag">Software Engineer working at <span>Monto Tech</span></div>
      </div>
      <div class="content-bottom">
        <Follow />
      </div>
    </div>
    <div class="shadow-right"></div>
    <div class="sample">
      <div class="mt-20">
        <h1 class="title">My<span class="text-highlight-1 pl-1">Work</span> </h1>
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
    margin-top: 60px;
  }
  .title {
    @apply text-3xl;
    @apply mb-8 mt-4;
    @apply text-center;
    font-weight: 500;
  }  
  .name-matrix {
    letter-spacing: 2px;
    font-family: monospace;
    transition: all 0.1s ease-in-out;
    min-width: 400px;
  }

  .hero-body {
    @apply flex flex-col md:flex-row;
  }

  .hero-body > .content {
    height: 300px;
    @apply w-full;
    min-width: 360px;
    @apply ml-0 lg:ml-10 mt-44;
    @apply flex flex-col justify-between items-center;
  }
  .content-bottom {
    @apply flex flex-col items-center justify-center;
    @apply md:w-[40vw] w-full;
  }
  .content-body > .heading {
    @apply text-5xl md:text-5xl;
    @apply mb-8;
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

  .shadow-right {
    width: 2px;
    height: 550px;
    @apply mx-4 mt-10;
    background: linear-gradient(to bottom, rgba(55,55,55,0), rgba(55,55,55,0.5), rgba(55,55,55,0));
    @apply hidden lg:block;
    box-shadow: 0 0 10px rgba(55,55,55,0.3);
  }

  .divider {
    width: 2px;
    height: 550px;
    @apply mx-4 mt-10;
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
    @apply pb-4 px-4;
    @apply overflow-x-scroll;
  }

  .item > :global(svg) {
    color: white;
    fill: white;
  }
</style>
