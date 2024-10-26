export type ToolType = "design" | "backend" | "platform" | "tool";
interface ToolData {
  name: string;
  rank: number;
  icon: string;
  type: ToolType;
  highlight?: boolean;
}

const data: Record<ToolType, ToolData[]> = {
  tool: [
    {
      name: "Git",
      rank: 8,
      icon: "git",
      type: "tool",
      highlight: true,
    },
    {
      name: "Typescript",
      rank: 10,
      icon: "typescript",
      type: "tool",
      highlight: true,
    },
    {
      name: "Jest",
      rank: 4,
      icon: "jest",
      type: "tool",
    },
    {
      name: "Github Action",
      rank: 6,
      icon: "github",
      type: "tool",
    },
    {
      name: "Docker",
      rank: 8,
      icon: "docker",
      type: "tool",
    },
    {
      name: "Let's encrypt",
      rank: 7,
      icon: "encrypt",
      type: "tool"
    }
  ],
  backend: [
    {
      name: "Trpc",
      rank: 6,
      icon: "trpc",
      type: "backend",
      highlight: true,
    },
    {
      name: "NextJS",
      rank: 6,
      icon: "nextjs",
      type: "backend",
      highlight: true,
    },
    {
      name: "Nodejs",
      rank: 3,
      icon: "nodejs",
      type: "backend",
    },
    {
      name: "Prisma",
      rank: 3,
      icon: "prisma",
      type: "backend",
    },
    {
      name: "Python",
      rank: 5,
      icon: "python",
      type: "backend",
    },
    {
      name: "Docker",
      rank: 4,
      icon: "docker",
      type: "backend",
    },
  ],
  design: [
    {
      name: "Svelte",
      rank: 10,
      icon: "svelte",
      type: "design",
      highlight: true,
    },
    {
      name: "TailwindCSS",
      rank: 7,
      icon: "tailwindCSS",
      type: "design",
      highlight: true,
    },
    {
      name: "React",
      rank: 6,
      icon: "react",
      type: "design",
    },
    {
      name: "Figma",
      rank: 8,
      icon: "figma",
      type: "design",
    },
    {
      name: "Adobe XD",
      rank: 8,
      icon: "adobe_xd",
      type: "design",
    },
    {
      name: "CSS",
      rank: 6,
      icon: "css",
      type: "design",
    },
  ],
  platform: [
    {
      name: "VS CODE",
      rank: 10,
      icon: "vscode",
      type: "platform",
      highlight: true,
    },
    {
      name: "GCP",
      rank: 6,
      icon: "gcp",
      type: "platform",
      highlight: true,
    },
    {
      name: "Github",
      rank: 9,
      icon: "github",
      type: "platform",
    },
    {
      name: "AWS",
      rank: 5,
      icon: "aws",
      type: "platform",
    },
    {
      name: "Rest API",
      rank: 5,
      icon: "rest_api",
      type: "platform",
    },
    {
      name: "Debian",
      rank: 5,
      icon: "debian",
      type: "platform",
    },
  ],
};

export default data;
