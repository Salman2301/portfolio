<script lang="ts">
  import Hero from "../component/section/Hero.svelte";
  import Tool from "../component/section/Tool.svelte"
  import Timeline from "../component/section/Timeline.svelte";
  import Resume from "../component/section/Resume.svelte";
  import Footer from "../component/global/Footer.svelte";
  import Header from "../component/global/Header.svelte";
  import { inview } from 'svelte-inview';

  type Anchor = "sample" | "tool" | "timeline" | "resume";
  let activeAnchor:Anchor = "sample";
 
  const inviewOpts = {
    threshold: 0.4
  }
  function setAnchor(anchorName: Anchor) {
    return function (event:any) {
      if(event.detail.inView) {
        activeAnchor = anchorName;
      }
    }
  }

  $:console.log(activeAnchor)
</script>

<Header {activeAnchor}/>
<div id="sample" use:inview={inviewOpts} on:inview_change="{setAnchor("sample")}" >
  <Hero />
</div>
<div id="tool" use:inview={inviewOpts} on:inview_change="{setAnchor("tool")}">
  <Tool />
</div>
<div id="timeline" use:inview={inviewOpts} on:inview_change="{setAnchor("timeline")}">
  <Timeline />
</div>
<div id="resume" use:inview={inviewOpts} on:inview_change="{setAnchor("resume")}">
  <Resume />
</div>
<Footer />
