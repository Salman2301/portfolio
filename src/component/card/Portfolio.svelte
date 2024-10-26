<script lang="ts">
  import data from "../../lib/constant/portfolio";
  import { onMount } from 'svelte';

  let cardsElement: HTMLElement;
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
        const dx = Math.cos(radians) * spot.speed;
        const dy = Math.sin(radians) * spot.speed;
        
        return {
          ...spot,
          x: (spot.x + dx + 100) % 100,
          y: (spot.y + dy + 100) % 100,
          opacity: Math.max(0.1, spot.opacity - 0.01)
        };
      });
    }, 50);
  }
</script>

<div class="cards" bind:this={cardsElement}>
  {#each spots as spot}
    <div
      class="spot"
      style="left: {spot.x}%; top: {spot.y}%; width: {spot.size}px; height: {spot.size}px; opacity: {spot.opacity};"
    ></div>
  {/each}
  {#each data as item}
    <div class="card" style="--brand-color-raw: {item.color}">
      <img src={`/asset/portfolio/${item.logo}`} alt={item.title} class="logo" />
      <a href="{item.link}" target="_blank" class="hover:underline">
        <div class="title">{item.title}<span class="suffix">.com</span></div>
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
    background-color: rgba(255, 255, 255, 0.8);
    pointer-events: none;
    transition: opacity 0.5s ease;
    box-shadow: 0 0 4px 1px rgba(255, 255, 255, 0.5);
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card {
    position: relative;
    z-index: 2;
    transition: transform 0.3s ease;
    /* @apply bg-primary; */
    @apply border;
    @apply px-4 pt-1 pb-2;
    @apply rounded-md;
    /* @apply border-y; */
    @apply flex flex-col items-center;
    @apply shadow-sm;
    width: 180px;
    border-color: rgba(var(--brand-color-raw), 0.9);
  }
  .logo {
    @apply w-10;
    @apply h-10;
    @apply my-2;
  }
  .title {
    @apply text-lg;
  }
  .suffix {
    @apply text-sm;
    color: #706464;
  }
  .description {
    @apply text-xs;
    @apply font-bold;
  }
</style>