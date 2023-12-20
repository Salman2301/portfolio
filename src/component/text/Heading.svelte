<script lang="ts">
  export let content: string = "";
</script>


<h1>{content}</h1>

<style lang="postcss">
  h1 {
    @apply text-3xl;
    @apply mb-8 mt-4;
    @apply text-center;
    font-weight: 500;
  }
</style>