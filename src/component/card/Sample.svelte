<script lang="ts">
  import type { SampleData } from "$lib/constant/sample";
  import Tags from "../tag/Tags.svelte";

  export let card: SampleData;
</script>

<div class="card">
  <h2 class="heading text-center">{card.heading}</h2>
  <div class="description">
    {card.description}
  </div>
  <Tags tags={card.tags}/>
  <a href={card.link} class="button" target="_blank">
    View more
  </a>
</div>

<style>
  
  .card {
    flex: 0 0 auto;
    height: 350px;
    max-height: 350px;
    scroll-snap-align: start;
    @apply border border-highlight;
    @apply rounded-lg;
    @apply overflow-hidden;
    @apply select-none;
  }

  .card {
    width: 240px;
    @apply p-2;
    @apply rounded-md;
    @apply flex flex-col;
  }
  h2 {
    @apply text-lg;

    @apply mb-2;
    @apply font-bold;
    @apply text-white;
  }
  .description {
    height: 200px;
    @apply overflow-auto;
    @apply text-justify;
  }

  .button {
    @apply bg-secondary-1 text-highlight;
    @apply rounded-md;
    @apply text-center text-sm;
    width: 100px;
    @apply mx-auto my-2 py-1;
  }
  .button:hover {
    @apply underline;
  }
/* 
  .card > .back {
    display: none;
    width: 250px;
    height: 345px;
    overflow: scroll;
    @apply p-2;
    @apply pr-4;
    @apply text-justify;
    @apply rounded-md;
  }

  .card:hover > .front {
    display: none;
  }
  .card:hover > .back {
    display: block;
  }
  .card:hover > .back > .content {
    @apply cursor-pointer;
  } */
</style>