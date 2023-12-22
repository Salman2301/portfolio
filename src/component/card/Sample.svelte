<script lang="ts">
  import type { SampleData } from "$lib/constant/sample";

  export let card: SampleData;
</script>

<div class="card">
  <div class="front">
    <div class="image"></div>
    <div class="gif">
      <!-- src="./assets/gif/sample/{card.gif}.gif" -->
      <img
        alt="project {card.heading}"
        width="250"
        height="300"
      />
      <div class="heading text-center">{card.heading}</div>
    </div>
  </div>
  <div class="back">
    <div class="content">
      <div class="heading text-center text-lg font-bold underline mb-2">{card.heading}</div>
      {card.description}
      
      <a href={card.link} class="button">
        <div class="underline pt-4 bottom-0">Click here to know more</div>
      </a>
    </div>
  </div>
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

  .card > .front {
    display: block;
    width: 250px;
    @apply rounded-md;
  }

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
  }
</style>