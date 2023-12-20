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
  tool: {
    label: "Tool",
    href: "#tool"
  },
  timeline: {
    label: "Timeline"
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