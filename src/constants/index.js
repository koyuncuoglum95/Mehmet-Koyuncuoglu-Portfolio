import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  coolage,
  alter,
  backend,
  project1,
  project2,
  project3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Python Django Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "CoolAge",
    icon: coolage,
    iconBg: "white",
    date: "Jun 2020 - Aug 2020",
    points: [
      "Worked on a project that is all about an educational application for the college students.",
      "Developed the project with React JS to develop frontend part of the application.",
      "Designed a landing page by creating navbar, search box and select filtering, changing color of buttons.",
      "Used Google Firebase Realtime Database section to add and fetch REST API from Node JS.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Alter Learning - Educational Platform, Inc.",
    icon: alter,
    iconBg: "white",
    date: "Sep 2019 - Jan 2023",
    points: [
      "Fetched REST API from Node.js and MongoDB database into React frontend framework to show the data in the web application.",
      "Developed CRUD operations with Node.js and Express JS such as authentication for students, teachers, and games.",
      "Worked on e-learning project which is all about playing with VR Glasses, Mobile and PC.",
      "Learned how to integrate Docker with Python/ Django for the backend part of the mobile application such as Django CRUD operations.",
    ],
  },
  {
    title: "Frontend Team Lead",
    company_name: "Alter Learning - Educational Platform, Inc.",
    icon: alter,
    iconBg: "white",
    date: "Feb 2023 - Present",
    points: [
      "Managed a team to lead them how to build responsive frontend application for web and mobile.",
      "Led a team of 5 developers in the design, development, and deployment of 3 web applications.",
      "Collaborated with cross-functional teams to understand business requirements and translate them into technical solutions.",
      "Coordinated with project managers to prioritize tasks, create timelines, and meet project deadlines.",
    ],
  },
];

const projects = [
  {
    name: "AI Image Generator",
    description:
      "This app is built by mern stack technologies. AI generates image based on the prompt.",
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "white-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/koyuncuoglum95/MERN-AI-Image-Generator",
  },
  {
    name: "JoyShare Social",
    description:
      "Mini Social App is made out of python django. Features are authentication, create groups, and add posts inside of the groups.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "white-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/koyuncuoglum95/JoyShareSocial",
  },
  {
    name: "EtherCommerce Dapp",
    description:
      "This is web3/blockchain e-commerce Dapp. It is created by truffle, solidity, and next.js 13.",
    tags: [
      {
        name: "nextjs",
        color: "white-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "orange-text-gradient",
      },
      {
        name: "truffle",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/koyuncuoglum95/EtherCommerce-Dapp/tree/Completed",
  },
];

export { services, technologies, experiences, projects };
