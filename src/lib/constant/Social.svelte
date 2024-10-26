<script lang="ts" context="module">
  import GithubIcon from "$lib/svg/Github.svelte";
  import LinkedinIcon from "$lib/svg/Linkedin.svelte";
  import TwitterIcon from "$lib/svg/TwitterX.svelte";
  import WhatsAppIcon from "$lib/svg/WhatsApp.svelte";

  export const data = {
    x: {
      name: "Twitter",
      link: "https://twitter.com/salman2301",
      color: "#FFF",
      icon: TwitterIcon
    },
    linkedIn: {
      name: "LinkedIn",
      link: "https://linkedIn.com/in/asalman2301",
      color: "#0A66C2",
      icon: LinkedinIcon
    },
    github: {
      name: "Github",
      link: "https://github.com/salman2301",
      color: "#FFF",
      icon: GithubIcon
    },
    whatsapp: {
      name: "WhatsApp",
      link: "tel:+919791097309",
      color: "#25D366",
      icon: WhatsAppIcon
    }
  }

  // export data;
</script>