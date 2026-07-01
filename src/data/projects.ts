export interface Project {
  id: number;
  name: string;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  tech: string[];
  github: string;
  demo: string | null;
  image: string;
  ai: boolean;
  isWIP: boolean;
  hidden: boolean;
  nextProject: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "portfolio",
    title: "Software Developer Portfolio",
    slug: "portfolio",
    description:
      "Portfolio containing projects, contact information and a blog",
    fullDescription:
      "A developer portfolio featuring completed and ongoing projects, with GitHub repositories, live demos, technical documentation, blog posts, and contact details.",
    tech: ["React", "Node.js", "TypeScript"],
    github: "https://github.com/Asimm35818/portfolio",
    demo: "https://asim-m.dev/",
    image:
      "https://images.unsplash.com/photo-1540397106260-e24a507a08ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc4MTExODU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ai: false,
    isWIP: false,
    hidden: false,
    nextProject: false,
  },
  {
    id: 2,
    name: "canwemeet",
    title: "CanWeMeet",
    slug: "canwemeet",
    description: "A fully-featured app that lets users find meeeting times",
    fullDescription:
      "CanWeMeet is a collaborative event scheduling web app that helps groups find the best time to meet. Organizers can propose multiple dates and times, share a link with attendees, and collect availability responses in one place. Includes customizable presets and reusable group scheduling options.",
    tech: ["TypeScript", "GraphQL", "MongoDB", "WebSocket"],
    github: "https://github.com",
    demo: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc4MTExODU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ai: false,
    isWIP: true,
    hidden: true,
    nextProject: false,
  },
  {
    id: 3,
    name: "Structara",
    title: "Structara",
    slug: "structara",
    description:
      "A web application that helps engineers create, organize, and share technical design documents for software systems.",
    fullDescription: "",
    tech: ["TypeScript", "GraphQL", "MongoDB", "WebSocket"],
    github: "https://github.com",
    demo: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc4MTExODU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ai: false,
    isWIP: true,
    hidden: false,
    nextProject: true,
  },
  {
    id: 4,
    name: "XIVDesynth",
    title: "XIVDesynth",
    slug: "XIVDesynth",
    description:
      "A collection of Final Fantasy XIV Tools to view the most profitable items to desynthesise",
    fullDescription: "",
    tech: ["FFXIV", "GraphQL", "MongoDB", "WebSocket"],
    github: "https://github.com",
    demo: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc4MTExODU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ai: false,
    isWIP: true,
    hidden: true,
    nextProject: false,
  },
  {
    id: 5,
    name: "XIVOpenRelay",
    title: "XIVOpenRelay",
    slug: "XIVOpenRelay",
    description:
      "A Final Fantasy XIV plugin that enables players to send and receive in-game messages directly through mobile devices and Discord",
    fullDescription: "",
    tech: [""],
    github: "https://github.com",
    demo: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc4MTExODU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ai: false,
    isWIP: true,
    hidden: true,
    nextProject: false,
  },
  {
    id: 6,
    name: "ConvertR",
    title: "ConvertR",
    slug: "convertr",
    description:
      "A tool that adds Windows context menu options to fast convert files ",
    fullDescription: "",
    tech: [""],
    github: "https://github.com",
    demo: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc4MTExODU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ai: false,
    isWIP: true,
    hidden: true,
    nextProject: false,
  },
  {
    id: 7,
    name: "FastEdit",
    title: "FastEdit",
    slug: "FastEdit",
    description: "A lightweight tool for basic video editing",
    fullDescription: "",
    tech: [""],
    github: "https://github.com",
    demo: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc4MTExODU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ai: false,
    isWIP: true,
    hidden: true,
    nextProject: false,
  },
  {
    id: 8,
    name: "Autoclicker",
    title: "Autoclicker",
    slug: "Autoclicker",
    description: "A lightweight autoclicker, with variable click rate/types",
    fullDescription:
      "A quick autoclicker I created as a side project. Created using WPF + C#. Lightweight and with accurate click counts",
    tech: ["C#", "WPF"],
    github: "https://github.com/Asimm35818/Auto-Clicker",
    demo: "https://github.com/Asimm35818/Auto-Clicker/releases/download/Release/AutoClicker.exe",
    image:
      "https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc4MTExODU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ai: false,
    isWIP: false,
    hidden: false,
    nextProject: false,
  },
  {
    id: 9,
    name: "D2Foundry Reborn",
    title: "D2Foundry Reborn",
    slug: "Foundry-Reborn",
    description: "A replacement for the deprecated D2Foundry platform.",
    fullDescription:
      "This project is a successor to D2Foundry, created after the original platform stopped being actively maintained due to funding and sustainability limitations. Updated with the latest weapon and perk information via the Destiny 2 API",
    tech: ["React", "Typescript", ""],
    github: "https://github.com",
    demo: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc4MTExODU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ai: false,
    isWIP: true,
    hidden: true,
    nextProject: false,
  },
];

//     {
//   id: ,
//   name: "",
//   title: "",
//   description: "",
//   fullDescription:
//   "",
//   tech: [""],
//   github: "https://github.com",
//   demo: "https://example.com",
//   image:
//     "https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc4MTExODU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
//   ai: false,
//   isWIP: true,

// },
