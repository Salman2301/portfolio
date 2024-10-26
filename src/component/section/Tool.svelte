<script lang="ts">
  import { onMount } from 'svelte';
  import data from "$lib/constant/tool";
  import type { ToolType } from "$lib/constant/tool";
  import { Code, Palette, Server } from 'lucide-svelte';
  import { fade, fly } from 'svelte/transition';

  let toolType: Record<ToolType, { heading: string, icon: any }> = {
    design: { heading: "Design", icon: Palette },
    backend: { heading: "Backend", icon: Server },
    platform: { heading: "Platform", icon: Code },
    tool: { heading: "Tool", icon: Code }
  }

  const sortedType: ToolType[] = ["tool", "design", "backend", "platform"]

  let sectionTool: HTMLElement;

  onMount(() => {
    const particleCount = 50;
    const particles: HTMLElement[] = [];

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle-tool';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
      return particle;
    };

    for (let i = 0; i < particleCount; i++) {
      const particle = createParticle();
      particles.push(particle);
      sectionTool.appendChild(particle);
    }

    const animateParticles = () => {
      particles.forEach(particle => {
        const x = parseFloat(particle.style.left);
        const y = parseFloat(particle.style.top);
        
        let newX = x + (Math.random() - 0.5) * 2;
        let newY = y + (Math.random() - 0.5) * 2;

        newX = Math.max(0, Math.min(100, newX));
        newY = Math.max(0, Math.min(100, newY));

        particle.style.left = `${newX}%`;
        particle.style.top = `${newY}%`;
      });

      requestAnimationFrame(animateParticles);
    };

    animateParticles();
  });
</script>

<div class="section-tool" bind:this={sectionTool}>
  <h1 class="title">
    <span class="text-highlight-1 pr-1">Tools</span> I have used and enjoy working with.
  </h1>
  <div class="cards">
    {#each sortedType as key}
      {@const {heading, icon: Icon} = toolType[key]}
      <div class="card" in:fly="{{ y: 50, duration: 500, delay: 200 * sortedType.indexOf(key) }}" out:fade>
        <div class="heading">
          <svelte:component this={Icon} size={24} class="mr-2" />
          {heading}
        </div>
        <div class="tags">
          {#each data[key as ToolType] as tag}
            <div class="tag">
              <div
                class="icon-tag-tool"
                class:highlight={tag.highlight}
              ></div>
              <div
                class="label"
                class:highlight={tag.highlight}
              >{tag.name}</div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  .section-tool {
    @apply py-40 px-20;
    @apply bg-primary;
    position: relative;
    overflow: hidden;
  }

  :global(.particle-tool) {
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transition: all 0.5s ease;
  }

  .cards {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8;
    @apply bg-primary;
    justify-items: center;
    align-items: stretch;
    position: relative;
    z-index: 1;
    @apply bg-transparent;
  }
  .card {
    @apply border border-highlight;
    @apply bg-primary bg-opacity-80 backdrop-blur-sm;
    height: 100%;
    width: 240px;
    max-width: 250px;
    @apply rounded-lg;
    @apply p-4;
    @apply shadow-lg hover:shadow-xl transition-shadow duration-300;
    @apply transform hover:-translate-y-1 transition-transform duration-300;
    @apply bg-transparent;
  }
  .title {
    @apply text-4xl;
    @apply mb-12 mt-4;
    @apply text-center;
    font-weight: 600;
    @apply text-white;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    position: relative;
    z-index: 1;
  }
  .heading {
    @apply text-center;
    @apply text-xl font-bold;
    @apply mb-6 mt-2;
    @apply flex items-center justify-center;
    /* @apply text-highlight-1; */
  }
  .tags {
    @apply flex flex-wrap items-start gap-3 flex-col;
    @apply justify-start;
    padding-left: 20px;
    @apply bg-transparent;
  }
  .tag {
    @apply flex gap-3 items-center;
    @apply cursor-pointer;
    @apply transition-all duration-200;
    @apply bg-transparent;
  }
  .tag:hover > .icon-tag-tool:not(.highlight) {
    @apply bg-white;
  }
  .icon-tag-tool {
    @apply rounded-full;
    @apply bg-secondary;
    width: 10px;
    height: 10px;
    @apply transition-all duration-200;
  }
  .icon-tag-tool.highlight {
    @apply bg-highlight-1;
    width: 12px;
    height: 12px;
  }
  .label {
    @apply transition-all duration-200;
  }
  .label.highlight {
    @apply font-semibold;
    @apply text-highlight-1;
  }
</style>
