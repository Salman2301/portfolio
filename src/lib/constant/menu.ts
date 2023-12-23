interface Menu {
  [label: string]: {
    label: string;
    href?: string;
    themeName?: "download";
  }
}
const menu: Menu = {
  sample: {
    label: "Sample"
  },
  timeline: {
    label: "Timeline"
  },
  tool: {
    label: "Tool",
    href: "#tool"
  },
  // followMe: {
  //   label:"Follow"
  // },
  resume: {
    label: "Resume",
    themeName: "download"
  }
}
export default menu;