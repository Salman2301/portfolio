interface MenuItem {
  label: string;
  href?: string;
  themeName?: "download";
  hideMobile?: boolean;
}

const menu: MenuItem[] = [
  {
    href: "sample",
    label: "Sample"
  },
  {
    href:"timeline",
    label: "Timeline"
  },
  {
    href:"tool",
    label: "Tool",
  },
  {
    href:"resume",
    label: "Resume",
    themeName: "download"
  }
]

export default menu;