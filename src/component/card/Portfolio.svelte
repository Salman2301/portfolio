<script lang="ts">
  import data from "../../lib/constant/portfolio";
  import { onMount } from 'svelte';

  let cardsElement: HTMLElement;
  let spotsColor: string = "128, 128, 128";
  let spots: { x: number; y: number; size: number; opacity: number; speed: number; angle: number }[] = [];

  onMount(() => {
    createSpots();
    animateSpots();
  });

  function createSpots() {
    const numSpots = 50;
    for (let i = 0; i < numSpots; i++) {
      spots.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        speed: Math.random() * 0.5 + 0.2,
        angle: Math.random() * 20 + 30 // Angle between 30 and 50 degrees
      });
    }
    spots = spots;
  }

  function animateSpots() {
    setInterval(() => {
      spots = spots.map(spot => {
        const radians = spot.angle * (Math.PI / 180);
        const increaseSpeed = spotsColor !== "128, 128, 128" ? 3 : 1;
        const dx = Math.cos(radians) * spot.speed * increaseSpeed;
        const dy = Math.sin(radians) * spot.speed * increaseSpeed;
        
        return {
          ...spot,
          x: (spot.x + dx + 100) % 100,
          y: (spot.y + dy + 100) % 100,
        };
      });
    }, 50);
  }
</script>

<div class="cards" bind:this={cardsElement} on:mouseleave={()=>{
  spotsColor = "128, 128, 128";
}}>
  {#each spots as spot}
    <div
      class="spot"
      style="left: {spot.x}%; top: {spot.y}%; width: {spot.size}px; height: {spot.size}px; opacity: {spot.opacity};--brand-color: {spotsColor};"
    ></div>
  {/each}
  {#each data as item}
    <div class="card" style="--brand-color-raw: {item.color}" on:mouseenter={()=>{
      spotsColor = item.color;
    }} on:mouseleave={()=>{
      spotsColor = "128, 128, 128";
    }}>
      <img src={`/asset/portfolio/${item.logo}`} alt={item.title} class="logo" />
      <a href="{item.link}" target="_blank" class="hover:underline">
        <div class="title">{item.title}</div>
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
    @apply relative;
    @apply overflow-hidden;
    transition: background-color 0.3s ease;
    background-color: var(--hover-color);
    background-opacity: 0;
  }

  .spot {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(var(--brand-color), 0.8);
    pointer-events: none;
    transition: opacity 0.5s ease;
    box-shadow: 0 0 4px 1px rgba(var(--brand-color), 0.5);
  }

  .card {
    position: relative;
    z-index: 2;
    transition: transform 0.3s ease;
    @apply border;
    @apply px-4 pt-1 pb-2;
    @apply rounded-md;
    @apply flex flex-col items-center;
    @apply shadow-sm;
    width: 180px;
    border-color: rgba(var(--brand-color-raw), 0.9);
    background-color: rgba(0,0,0, 0);
  }
  .card:hover {
    background: rgba(var(--brand-color-raw), 0.1);
  }
  .logo {
    @apply w-10;
    @apply h-10;
    @apply my-2;
  }
  .title {
    @apply text-lg;
    @apply bg-transparent;
  }
  .suffix {
    @apply text-sm;
    color: #706464;
  }
  .description {
    @apply text-xs;
    @apply font-bold;
    @apply bg-transparent;
  }
</style>