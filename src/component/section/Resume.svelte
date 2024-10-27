<script lang="ts">
  import { base } from '$app/paths';
  import Follow from "../social/Follow.svelte";
</script>

<div class="section-resume">
  <div class="mb-10">
    <h1 class="heading-title">Download my<span class="text-highlight-1 pl-1">Resume</span> below</h1>
    <p class="text-sm text-center w-full mb-8 mt-4">Last updated on 26th October 2024</p>
  </div>
  <a href="{base}/asset/pdf/Resume.pdf" download="Salman_Resume.pdf">
    <div class="btn btn-download">Download</div>
  </a>
  <div class="divider-content"></div>
    <div class="follow-me">
      <Follow />
    </div>
</div>

<style lang="postcss">
  .section-resume {
    /* height: 400px; */
    @apply bg-primary;
    @apply flex flex-col items-center justify-center;
    @apply pb-40 pt-20;
  }
  .heading-title {
    @apply text-3xl;
    @apply mt-4;
    @apply text-center;
    font-weight: 500;
  }
  .divider-content {
    width: 180px;
    height: 1px;
    @apply my-10;
    @apply bg-gradient-to-r from-transparent via-secondary to-transparent;
    opacity: 0.4;
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
    @apply rounded-md;
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
  .follow-me {
    @apply mb-5;
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
