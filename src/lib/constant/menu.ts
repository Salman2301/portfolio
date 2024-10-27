import { HomeIcon, RouteIcon, WrenchIcon } from 'lucide-svelte';

interface MenuItem {
  label: string;
  href?: string;
  themeName?: "download";
  hideMobile?: boolean;
  Icon?: typeof HomeIcon;
}

const menu: MenuItem[] = [
  {
    href: "sample",
    label: "Home",
    Icon: HomeIcon
  },
  {
    href:"timeline",
    label: "Timeline",
    Icon: RouteIcon
  },
  {
    href:"tool",
    label: "Tool",
    Icon: WrenchIcon
  },
]

export default menu;