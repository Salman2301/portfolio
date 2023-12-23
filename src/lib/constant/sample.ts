export interface SampleData {
  heading: string;
  tags: string[];
  link: string;
  description: string;
} 

// Sample of my previous works
// asset location -> ./assets/gif/sample/
const data: Record<string, SampleData> = {
  npm: {
    heading: "Chess notation parser",
    tags: ["Javascript", "npm", "Jest"],
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
    tags: ["Javascript", "Template"],
    link: "https://github.com/Salman2301/code-snippet-template",
    description: "A simple boiler plate repo to stores all the code snippets and display it as an iframe. Take adavantage of free Github hosting and useful to Blog. Under the hood it uses highlight.js and Use github action to build and deploy the github page [gh-page]."
  },
  "wix-alert-component": {
    heading: "Wix Alert Component",
    tags: ["Svelte", "Rollup", "Custom element", "Javascript"],
    link: "https://github.com/Salman2301/wix-alert-component",
    description: "A simple Wix Toast component made using custom element for Wix website. Under the hood using Svelte.js and Rollup to convert a SPA into a custom element. This will help to create toast message that can be displayed on corner of the screen"
  },
  "sticky-hover": {
    heading: "Sticky hover",
    tags: ["Svelte", "Repl", "animation"],
    link: "https://svelte.dev/repl/6ebe2ea7974b4ce6a7bc7816e04a9e0e?version=4.2.8",
    description: "A svelte replication based on Apple hover effect design easy to create a hover effect shadow on mouse move. Click on the link to test the smooth animation."
  }
} 

export default data;