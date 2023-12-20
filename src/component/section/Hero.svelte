<script lang="ts">
  import sample from "$lib/constant/sample";
  import { data as social } from "$lib/constant/Social.svelte";
  import Heading from "../text/Heading.svelte";
  import { dragscroll } from "$lib/action/dragscroll";


  // let isDragging = false;
  // let startX;
  // let scrollContainer;
  // function handleDragStart(e) {
  //   isDragging = true;
  //   console.log({ scrollContainer })
  //   startX = e.pageX || e.touches[0].pageX - scrollContainer.offsetLeft;
  // }

  // function handleDragEnd() {
  //   isDragging = false;
  // }

  // function handleDragMove(e) {
  //   if (!isDragging) return;
  //   const x = e.pageX || e.touches[0].pageX - scrollContainer.offsetLeft;
  //   const scrollLeft = x - startX;
  //   scrollContainer.scrollLeft -= scrollLeft;
  //   console.log({ scrollContainer })
  //   console.log({ scrollLeft, c: scrollContainer.scrollLeft })
  //   startX = x;
  // }

</script>
<div class="section-hero">
  <div class="hero-body">
    <div class="content">
      <div class="heading">I'm <span class="border-b border-highlight-1">Salman</span></div>
      <div class="tag"><span>Full-Stack</span> web developer</div>
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
      <!-- Work Sample card -->
      <div class="mt-20">
        <Heading content="Sample Works" />
      </div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="cards"
        use:dragscroll
      >
        {#each Object.entries(sample) as [key, { heading, gif, link, description }]}
            <div class="card">
              <div class="front">
                <div class="image"></div>
                <div class="gif">
                  <img
                    src="./assets/gif/sample/{gif}.gif"
                    alt="project {heading}"
                    width="250"
                    height="300"
                  />
                  <div class="heading text-center">{heading}</div>
                </div>
              </div>
              <div class="back">
                <div class="content">
                  <div class="heading text-center text-lg font-bold underline mb-2">{heading}</div>
                  {description}
                  
                  <a href={link} class="button">
                    <div class="underline pt-4 bottom-0">Click here to know more</div>
                  </a>
                </div>
              </div>
            </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .section-hero {
    width: 100%;
    height: 500px;
    @apply bg-primary;
    @apply text-secondary;
  }


  .hero-body {
    @apply h-full;
    @apply flex;
  }

  .hero-body > .content {
    height: 100%;
    width: 40%;
    @apply ml-10;
    @apply flex flex-col justify-center items-center;
    @apply p-2;
    @apply relative;
  }
  .content-bottom {
    @apply w-full;
    @apply flex flex-col items-center justify-center;
    @apply absolute;
    @apply bottom-10;
  }
  .hero-body > .content > .heading {
    font-size: 48px;
    @apply text-center;
    @apply w-full;
  }

  .hero-body > .content > .tag {
    font-size: 18px;
    font-weight: 800;
  }

  .hero-body > .content > .tag > span {
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
    @apply w-full h-full;
    @apply flex flex-col;
  }
  .cards {
    @apply flex gap-4;
    width: 64%;
    @apply absolute;
    @apply mt-40;
    @apply pb-4;
    @apply overflow-scroll;
    @apply select-none;
    /* -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory; */
    /* overflow: visible; */
  }

  .card {
    flex: 0 0 auto;
    @apply border border-highlight;
    height: 350px;
    max-height: 350px;
    @apply rounded-lg;
    scroll-snap-align: start;
    @apply overflow-hidden;
  }

  .card > .front {
    display: block;
    width: 250px;
    @apply rounded-md;
  }

  .card > .back {
    display: none;
    width: 250px;
    overflow: scroll;
    @apply p-2;
    @apply pr-4;
    @apply text-justify;
    @apply rounded-md;
    height: 345px;
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
