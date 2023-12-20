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
  ],
  backend: [
    {
      name: "Nodejs",
      rank: 6,
      icon: "ubuntu",
      type: "backend",
      highlight: true,
    },
    {
      name: "PostgreSQL",
      rank: 6,
      icon: "psql",
      type: "backend",
      highlight: true,
    },
    {
      name: "Mongo",
      rank: 3,
      icon: "mongo",
      type: "backend",
    },
    {
      name: "Go",
      rank: 3,
      icon: "go",
      type: "backend",
    },
    {
      name: "Python",
      rank: 5,
      icon: "python",
      type: "backend",
    },
    {
      name: "Kubernetes",
      rank: 4,
      icon: "kube",
      type: "backend",
    },
    {
      name: "Ubuntu",
      rank: 6,
      icon: "ubuntu",
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
    },
    {
      name: "Github",
      rank: 9,
      icon: "github",
      type: "platform",
    },
    {
      name: "GCP",
      rank: 6,
      icon: "gcp",
      type: "platform",
      highlight: true,
    },
    {
      name: "AWS",
      rank: 5,
      icon: "aws",
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
