<script lang="ts">
  import type { SampleData } from "$lib/constant/sample";

  export let card: SampleData;
</script>

<div class="card">
  <h2 class="heading text-center">{card.heading}</h2>
  <div class="description">
    {card.description}
  </div>
  
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
    @apply border border-secondary-1;
    @apply rounded-lg;
    @apply overflow-hidden;
    @apply select-none;
  }

  .card {
    width: 250px;
    @apply p-2;
    @apply rounded-md;
    @apply flex flex-col;
  }
  h2 {
    @apply text-xl;
    /* @apply underline; */
    @apply mb-2;
    @apply font-bold;
    @apply text-white;
  }
  .description {
    height: 300px;
  }

  .button {
    @apply bg-highlight text-white;
    @apply rounded-md;
    @apply text-center text-sm;
    width: 100px;
    @apply mx-auto my-2 py-1;

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