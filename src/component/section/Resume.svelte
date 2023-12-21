<script lang="ts">
  import Follow from "../social/Follow.svelte";

  async function handleShare() {
    const shareInfo = {
      title: "Salman's Portfolio",
      text: "Salman's Portfolio!",
      url: "https://salman2301.com",
    };
    try {
      // if(!navigator || !navigator.share) return;
      await navigator.share(shareInfo);
      console.log("shared")
    } catch (err) {
      console.error(err);
      alert(`Error: Failed to share. Trying email service`);
      location.href = "mailto:admin@salman2301.com"
    }
  }
</script>

<div class="section-resume">
  <div class="mb-10">
    <h1 class="heading-title">Save or share my<span class="text-highlight-1 pl-1">Resume</span></h1>
  </div>
  <div class="btn btn-download">Download</div>
  <div class="share-content">
    <div class="share-label">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span  class="underline" role="button" tabindex="0" on:click={handleShare}>Click here</span> to share my Resume </div>
    
    <div class="follow-me">
      <Follow />
    </div>
  </div>
</div>

<style lang="postcss">
  .section-resume {
    height: 400px;
    @apply bg-primary;
    @apply flex flex-col items-center justify-center;
  }
  .heading-title {
    @apply text-3xl;
    @apply mb-8 mt-4;
    @apply text-center;
    font-weight: 500;
  }
  .share-label {
    @apply mt-4;
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
    @apply mt-10 mb-5;
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
