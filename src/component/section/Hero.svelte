<script lang="ts">
  import menu from "$lib/constant/menu";
  import sample from "$lib/constant/sample";
  import { data as social } from "$lib/constant/Social.svelte";
</script>

<div class="section-hero">
  <div class="header">
    {#each Object.entries(menu) as [key, { label, themeName }]}
      <div class="menu-item {themeName ? `theme-${themeName}` : ''}">
        {label}
      </div>
    {/each}
  </div>

  <div class="hero-body">
    <div class="content">
      <div class="heading">I'm Salman</div>
      <div class="tag"><span>Full-Stack</span> web developer</div>
      <div class="content-bottom">
        <div class="social">
          {#each Object.entries(social) as [key, { icon, name }]}
            <div class="icon">
              <svelte:component this={icon} />
            </div>
          {/each}
        </div>
        <p class="hover:underline font-bold mt-2">
          <a href="mailto:admin@salman2301.com">admin@salman2301.com</a>
        </p>
      </div>
    </div>
    <div class="divider"></div>
    <div class="sample">
      <!-- Work Sample card -->
      <div class="sample-header">
        Sample Work's
      </div>
      <div class="cards">
        {#each Object.entries(sample) as [key, { heading, gif, link, description }]}
          <a href={link} class="button">
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
                  {description}
                  <div class="underline pt-4 bottom-0">Click here to know more</div>
                </div>
              </div>
            </div></a
          >
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

  .header {
    @apply flex justify-center items-center;
    @apply gap-5;
    @apply bg-secondary-1;
    height: 50px;
  }
  .menu-item {
    @apply hover:text-highlight;
    @apply cursor-pointer;
    @apply bg-secondary-1;
  }
  .theme-download {
    @apply bg-highlight-1;
    @apply text-white;
    @apply py-1;
    @apply px-4;
    @apply rounded-sm;
  }
  .theme-download:hover {
    @apply text-white;
    @apply bg-highlight;
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
  .sample-header {
    @apply bg-primary;
    @apply text-secondary;
    @apply mt-10;
    @apply flex items-center justify-center;
    @apply text-3xl;
  }
  .cards {
    @apply flex gap-4;
    width: 64%;
    @apply overflow-scroll;
    scroll-snap-type: proximity;
    @apply absolute;
    @apply mt-40;
    @apply pb-4;
  }

  .card {
    @apply border-2 border-highlight;
    height: 350px;
    max-height: 350px;
    @apply rounded-md;
  }

  .card > .front {
    display: block;
    width: 250px;
  }

  .card > .back {
    display: none;
    width: 250px;
    overflow: scroll;
    @apply p-2;
    @apply text-justify;
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
</style>
