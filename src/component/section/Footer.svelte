<div class="section-footer">
  <div class="section-divider"></div>
  <div class="content">
    <!-- TODO: ADD TAILWIND CSS GROUP -->
    <a href="https://github.com/salman2301/portfolio">
      This page made using Svelte, Git, TailwindCSS and more<span class="hover:underline px-2 font-mono">{"<> "}Source code{" </>"}</span>
    </a>
    <div class="btn btn-top">
      Go back to top
    </div>
  </div>
</div>

<style lang="postcss">
  .section-footer {
    width: 100%;
    @apply px-10;
    @apply bg-primary;
  }
  .content {
    @apply flex justify-between items-center;
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
</style>
