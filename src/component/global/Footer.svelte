<div class="section-footer">
  <div class="section-divider"></div>
  <div class="content">
    <a href="https://github.com/salman2301/portfolio">
      This page made using Svelte, Git, TailwindCSS and more
      <span class="source">{"<>"}source_code{"</>"}</span>
    </a>
  </div>
</div>

<style lang="postcss">
  .section-footer {
    width: 100%;
    @apply px-10;
    @apply bg-primary;
    @apply pb-12 md:pb-0
  }
  .content {
    @apply flex flex-col md:flex-row justify-between items-center gap-4;
    @apply py-2;
  }
  .section-divider {
    width: 100%;
    height: 1px;
    background-color: rgba(55,55,55);
  }
  .btn.btn-top {
    @apply bg-secondary;
    @apply px-4 py-2;
    @apply text-black;
    @apply mr-4;
    @apply rounded-sm;
    @apply text-xs;
    @apply cursor-pointer;
  }
  .btn-top:hover {
    @apply underline;
  }
  .source {
    @apply px-2 font-mono;
    @apply pb-1;
  }

  a:hover .source {
    @apply border-b border-secondary;
  }
</style>
