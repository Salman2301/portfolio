interface Menu {
  [label: string]: {
    label: string;
    href?: string;
    themeName?: "download";
  }
}
const menu: Menu = {
  tool: {
    label: "Tool",
    href: "#tool"
  },
  timeline: {
    label: "Timeline"
  },
  exploring: {
    label: "Exploring"
  },
  followMe: {
    label:"Follow"
  },
  resume: {
    label: "Resume",
    themeName: "download"
  }
}
export default menu;