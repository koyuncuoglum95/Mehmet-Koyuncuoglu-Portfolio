import { AL, Coolage, sp } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    docker,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Frontend Developer",
        company_name: "CoolAge App",
        icon: Coolage,
        iconBg: "#00ffff",
        date: "June 2020 – August 2020",
        points: [
            "Collaborated on a project focused on developing an educational application tailored for college students, enhancing the learning experience.",
            "Assumed the role of interim CTO for a week, gaining valuable insights into strategic decision-making and team management.",
            "Integrated Google Firebase Realtime Database for real-time data handling, while leveraging Node.js to interact with REST APIs, ensuring seamless data flow within the application. -making and team management.",
            "Gained practical experience in Agile methodologies, contributing to sprint planning, daily stand-ups, and retrospective meetings.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "ALTER-LEARNING EDUCATIONAL PLATFORM, INC",
        icon: AL,
        iconBg: "#F2F271",
        date: "September 2019 – December 2023",
        points: [
            "Implemented efficient data modeling and performed complex aggregation queries using MongoDB to ensure optimal retrieval and storage of data.",
            "Enhanced application performance by 20% through proficient use of React and Redux for front-end, along with Node.js and Express.js for back-end.",
            "Contributed to continuous integration/continuous delivery (CI/CD) practices by integrating Docker into the development workflow, which improved deployment efficiency.",
            "Utilized Restful APIs to create a seamless flow of data between front-end and back-end services, optimizing the user experience and ensuring real-time data availability.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Super Purposes™",
        icon: sp,
        iconBg: "#00A97C",
        date: "December 2023 – Present",
        points: [
            "",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/koyuncuoglum95',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mehmet-koyuncuoglu-28b607175/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'AI Image Generator',
        description: 'AI Image Generator is designed to crate an realistic images with machine learning techniques based user inputs.',
        link: 'https://github.com/koyuncuoglum95/MERN-AI-Image-Generator',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'JoyShare Social App',
        description: 'JoyShare is a mini social app that allows user to authenticate, create post and comment on it',
        link: 'https://github.com/koyuncuoglum95/JoyShareSocial',
    },
];