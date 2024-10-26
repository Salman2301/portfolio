<script lang="ts">
  import type { SampleData } from "$lib/constant/sample";
  import Tags from "../tag/Tags.svelte";

  export let card: SampleData;
</script>

<div class="card">
  <h2 class="heading text-center">{card.heading}</h2>
  <div class="divider"></div>
 <div class="px-2 flex flex-col">
    <div class="description">
      {card.description}
    </div>
    <Tags tags={card.tags}/>
    <a href={card.link} class="button" target="_blank">
      View more
    </a>
  </div>
</div>

<style>
  
  .card {
    flex: 0 0 auto;
    width: 240px;
    height: 350px;
    max-height: 350px;
    scroll-snap-align: start;
    @apply border border-gray-600 shadow-md border-opacity-50;
    @apply rounded;
    @apply overflow-hidden;
    @apply select-none;
    @apply py-2;
    @apply rounded-md;
    @apply flex flex-col;
  }

  h2 {
    @apply text-base;

    @apply my-3;
    @apply font-bold;
    @apply text-white;

    @apply uppercase;
  }
  .divider {
    @apply w-full;
    @apply border-gray-600 border-opacity-50 border-b;
    @apply my-2;
  }
  .description {
    height: 200px;
    @apply overflow-auto;
    @apply pb-5;
    /* @apply text-justify; */
    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
  }

  .button {
    @apply bg-secondary-1 text-highlight;
    @apply rounded-md rounded-b-none;
    @apply text-center text-sm;
    width: 100px;
    @apply mx-auto my-2 py-1;
    @apply border border-primary;
  }
  .card {
    transition: border-color 0.3s ease;
  }

  .card:hover {
    @apply border-highlight;
  }

  .button:hover {
    @apply border border-highlight;
  }
</style>
