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
      "Collaborated on a project focused on developing an educational application tailored for college students, enhancing the learning experience.",
      "Assumed the role of interim CTO for a week, gaining valuable insights into strategic decision-making and team management.",
      "Integrated Google Firebase Realtime Database for real-time data handling, while leveraging Node.js to interact with REST APIs, ensuring seamless data flow within the application. -making and team management.",
      "Gained practical experience in Agile methodologies, contributing to sprint planning, daily stand-ups, and retrospective meetings.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Alter Learning - Educational Platform, Inc.",
    icon: alter,
    iconBg: "white",
    date: "Sep 2019 - Jan 2023",
    points: [
      "Implemented efficient data modeling and performed complex aggregation queries using MongoDB to ensure optimal retrieval and storage of data.",
      "Enhanced application performance by 20% through proficient use of React and Redux for front-end, along with Node.js and Express.js for back-end.",
      "Contributed to continuous integration/continuous delivery (CI/CD) practices by integrating Docker into the development workflow, which improved deployment efficiency.",
      "Utilized Restful APIs to create a seamless flow of data between front-end and back-end services, optimizing the user experience and ensuring real-time data availability.",
    ],
  },
  {
    title: "Frontend Team Lead",
    company_name: "Alter Learning - Educational Platform, Inc.",
    icon: alter,
    iconBg: "white",
    date: "Feb 2023 - Present",
    points: [
      "Guided a team of 6 full-stack developers through the lifecycle of 4 major web applications, from initial design through development to successful deployment.",
      "Oversaw a team of software engineers in building intuitive and responsive applications for various platforms including web and mobile.",
      "Ensured project timelines were adhered to by effectively coordinating with project managers, prioritizing tasks, and overseeing the efficient allocation of resources.",
      "Evaluated and introduced new technologies and tools as necessary to keep up with industry trends and to maintain competitive edge.",
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
