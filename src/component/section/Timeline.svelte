<script lang="ts">
  import data from "$lib/constant/timeline";
  import Heading from "../text/Heading.svelte";
</script>

<div class="section-timeline">
  <Heading content="Timeline view" />
  <div class="timeline-container">
    <div class="line">
    </div>
    {#each data as { timeline, exp, title, company, tag }}
      <div class="timeline-card">
        <div class="item">
          <div class="item-line left"></div>
          <div class="item-content">  
            <div class="title-exp">
              <span class="title">{title}</span>
              <span class="exp">{exp}</span>
            </div>
            <div class="timeline-company">
              <span class="timeline">{timeline}</span>
              <span class="company">{company}</span>
            </div>
            <div class="tags">
              {#each tag as currTag}
                <div class="tag">{currTag}</div>
              {/each}
            </div>
          </div>
          <div class="item-line right"></div>
        </div>
        <div class="item-connect-mobile"></div>
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  .section-timeline {
    @apply bg-primary;
    @apply px-10 py-10;
    @apply gap-4;
  }
  .timeline-container {
    @apply flex flex-col items-center;
    @apply relative;
  }
  .line {
    @apply border-none border-spacing-2;
    border-right: 1px dashed white;
    @apply h-full;
    @apply w-1;
    @apply absolute;
    @apply bg-transparent;
    @apply invisible;
  }
  .item {
    @apply w-full;
    @apply flex items-center justify-center;
    padding-left: 330px;
  }
  .item-line {
    @apply w-10;
    height: 2px;
    @apply bg-secondary;
  }
  .item-connect-mobile {
    width: 1px;
    height: 25px;
    @apply bg-secondary;
    left: 50%;
  }
  .timeline-card {
    @apply flex flex-col items-center;
  }
  .timeline-card:last-child .item-connect-mobile {
    @apply hidden;
  }
  .item-line.left {
    @apply bg-transparent;
  }
  .item-line.right {
    @apply bg-transparent;
  }
  .item-content {
    width: 250px;
    height: 100px;
    border-radius: 10px;
    @apply border rounded-md;
    @apply px-2 pt-4;
  }
  
  .item:nth-child(n) {
    padding-right: 0px;
    padding-left: 0px;
  }
  @media screen(lg) {
    
    .item-connect-mobile {
      @apply invisible;
    }
    .line {
      @apply visible;
    }
    .item-line.left {
      @apply bg-secondary;
    }
    .timeline-card:nth-child(n) {
      padding-right: 0px;
      padding-left: 332px;
    }
    .timeline-card:nth-child(2n) {
      padding-right: 327px;
      padding-left: 0px;
    }
    .timeline-card:nth-child(2n) > .item > .item-line.right {
      @apply bg-secondary;
    }
    .timeline-card:nth-child(2n) > .item > .item-line.left {
      @apply bg-transparent;
    }
    .timeline-card:nth-child(2n) > .item > .item-content > .title-exp {
      @apply flex-row-reverse;
    }
    .timeline-card:nth-child(2n) > .item > .item-content > .timeline-company {
      @apply flex-row;
    }
    .timeline-card:nth-child(2n+1) > .item > .item-content > .timeline-company {
      @apply flex-row-reverse;
    }
    .timeline-card:nth-child(2n) > .item > .item-content > .timeline {
      text-align: left;
    }
  }
  .title-exp {
    @apply flex justify-between;
  }
  .title {
    @apply font-bold;
    @apply text-lg;
  }

  .timeline-company {
    @apply flex justify-between;
  }
  .timeline {
    @apply text-xs;
    text-align: right;
  }
  .company {
    @apply text-xs;
    @apply text-highlight-1;
  }
  .tags {
    @apply flex gap-2 items-center;
    @apply overflow-scroll;
    scrollbar-width: none;  /* Firefox */
    @apply mt-2;
  }
  .tags::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }
  .tag {
    @apply bg-secondary;
    @apply rounded-md;
    @apply text-primary;
    @apply px-2;
    @apply text-xs;
    @apply whitespace-pre;
  }
</style>
