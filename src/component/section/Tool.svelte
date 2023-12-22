<script lang="ts">
  import data from "$lib/constant/tool";
  import type { ToolType } from "$lib/constant/tool";

  let toolType: Record<ToolType, { heading: string}> = {
    design: { heading: "Design" },
    backend: { heading: "Backend" },
    platform: { heading: "Platform" },
    tool: { heading: "Tool" }
  }

  const sortedType: ToolType[] = ["tool", "design", "backend", "platform"]
</script>

<div class="section-tool">
  <h1 class="title"><span class="text-highlight-1 pr-1">Tools</span> I have used and enjoy working with.</h1>
  <div class="cards">
    {#each sortedType as key}
      {@const {heading} = toolType[key]}
      <div class="card">
        <div class="heading">{heading}</div>
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
  }

  .cards {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4;
    @apply bg-primary;
    justify-items: center;
    align-items: center;
  }
  .card {
    @apply border border-highlight;
    height: 100%;
    min-height: 100%;;
    width: 240px;
    max-width: 250px;
    @apply rounded-md;
    @apply p-2;
  }
  .title {
    @apply text-3xl;
    @apply mb-8 mt-4;
    @apply text-center;
    font-weight: 500;
  }
  .heading {
    @apply text-center;
    @apply text-lg font-bold;
    @apply mb-4 mt-2;
  }
  .tags {
    @apply flex flex-wrap items-start gap-2 flex-col;
    @apply justify-start;
    padding-left: 40px;
  }
  .tag {
    @apply flex gap-2 items-center;
    @apply cursor-text;
  }
  .tag:hover > .label{
    @apply text-white;
  }
  .tag:hover > .icon-tag-tool:not(.highlight) {
    @apply bg-white;
  }
  .icon-tag-tool {
    @apply rounded-full;
    @apply bg-secondary;
    width: 12px;
    height: 12px;
  }
  .icon-tag-tool.highlight {
    @apply bg-highlight-1;
  }
</style>
