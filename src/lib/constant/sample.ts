export interface SampleData {
  heading: string;
  tags: string[];
  link: string;
  description: string;
} 

// Sample of my previous works
const data: Record<string, SampleData> = {
  infisical: {
    heading: "Infisical - Contributor",
    tags: ["react", "radix", "react-query", "knex"],
    link: "https://github.com/Infisical/infisical/pulls/Salman2301",
    description: "Implementing GitHub Integration to support multiple different secrets sync to GitHub environment, Org and Repo. Implemented Integration filter and sort mechanisim using Knex, FastAPI, React hook form, React hook query. etc for more pull request check the link"
  },
  npm: {
    heading: "Chess notation parser",
    tags: ["Javascript", "npm", "Jest", "JsDoc"],
    link: "https://github.com/Salman2301/chess-notation-parser",
    description: "Publish npm package online for chess notation parser. This package takes chess notation like bxc8 and convert it to a standardized JSON format. Full tested using Jest and deployed to npm."
  },
  "pgn-nlt": {
    heading: "Create training dataset",
    tags: ["Python", "Jupyter", "Audio Service"],
    link: "https://github.com/Salman2301/pgn-nlt",
    description: "Generate 100_000's of audio training dataset using Jupyter Nodebook python script using Google Audio generating service. The code is open source. Written using python 3.x."
  },
  "code-snippets-template": {
    heading: "Code snippets template",
    tags: ["NodeJs", "Github Action", "Github pages"],
    link: "https://github.com/Salman2301/code-snippet-template",
    description: "A simple boiler plate repo to stores all the code snippets and host it via github pages for free. Use github action to build and deploy the Github page."
  },
  "react-native": {
    heading: "React native game",
    tags: ["Mobile app", "React", "React Native", "Hooks"],
    link: "https://github.com/Salman2301/tic-tac-toe-app",
    description: "A Tic-tac-toe app to test out React and React native. Working tic-tag-toe game with basic animation and proper logic. Written just to for fun and showcase my work"
  },
  "wix-alert-component": {
    heading: "Wix Alert Component",
    tags: ["Svelte", "Rollup", "Custom element", "Javascript"],
    link: "https://github.com/Salman2301/wix-alert-component",
    description: "A simple Wix Toast component made using custom element for Wix website. Under the hood using Svelte.js and Rollup to convert a SPA into a custom element. Create toast message that can be displayed on corner of the screen"
  },
  "sticky-hover": {
    heading: "Sticky hover",
    tags: ["Svelte", "Repl", "animation"],
    link: "https://svelte.dev/repl/6ebe2ea7974b4ce6a7bc7816e04a9e0e?version=4.2.8",
    description: "A svelte replication based on Apple hover effect design easy to create a hover effect shadow on mouse move. Click on the link to test the smooth animation."
  }
} 

export default data;