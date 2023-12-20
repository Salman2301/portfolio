<script lang="ts">
  import Heading from "../text/Heading.svelte";
</script>

<div class="section-resume">
  <Heading content="Save or Share my Resume"/>
  <div class="btn btn-download">Download</div>
  <div class="share-content">
    <div class="title">Click here to share my resume</div>
    <div class="btn btn-share">Share</div>
  </div>
</div>

<style lang="postcss">
  .section-resume {
    height: 500px;
    @apply bg-primary;
    @apply flex flex-col items-center justify-center;
  }
  .heading {
    @apply text-5xl;
    @apply font-bold;
    @apply py-2;
    @apply my-10;
  }
  .btn {
    @apply bg-primary;
    @apply text-secondary;
    width: 280px;
    height: 40px;
    @apply align-middle;
    @apply border border-secondary;
    @apply rounded-sm;
    @apply flex justify-center items-center;
    @apply cursor-pointer;
    @apply select-none;
  }
  .btn:hover {
    @apply bg-secondary;
    @apply text-primary;
  }
  .btn-download {
    @apply bg-highlight-1;
    @apply text-white;
    @apply border-highlight-1;
  }

  .btn-download:hover {
    @apply bg-highlight;
    @apply text-white;
    @apply border-highlight;
  }
  .share-content {
    @apply flex items-center flex-col;
    @apply gap-2;
    @apply mt-2;
  }

  .btn-share {
    @apply text-base;
    @apply font-bold;
    width: 100px;
    height: 25px;
    @apply border-none;
    @apply underline;
  }
  .btn-share:hover {
    @apply bg-transparent;
    @apply border border-secondary;
    @apply text-highlight;
  }
</style>
