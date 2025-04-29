import {
  FaBitbucket,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaJira,
} from "react-icons/fa6";
import {
  RiCalendar2Fill,
  RiGraduationCapFill,
  RiHome2Fill,
  RiMailFill,
  RiPhoneFill,
  RiUser3Fill,
} from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

export const INFORMATION_TITLE = {
  EDUCATION: "education",
  EXPERIENCE: "experience",
  SKILLS: "skills",
  TOOLS: "tools",
};

export const PERSONAL_DATA = [
  {
    icon: RiUser3Fill,
    text: "Quoc Nguyen (Ken)",
  },
  {
    icon: RiPhoneFill,
    text: "+84 76 575 4399",
  },
  {
    icon: RiMailFill,
    text: "quocnguyen.developer@gmail.com",
  },
  {
    icon: RiCalendar2Fill,
    text: "Born on 03 Mar, 1998",
  },
  {
    icon: RiGraduationCapFill,
    text: "Master on Software Engineering",
  },
  {
    icon: RiHome2Fill,
    text: "Nha Trang, Viet Nam",
  },
];

export const EDUCATION_DATA = [
  {
    university: "IMIC EDU",
    qualification: "Flutter Mobile Programming Course with Projects",
    years: "2025",
  },
  {
    university: "PTI Education Training Group",
    qualification: "Effective Communication Skills",
    years: "2023",
  },
  {
    university: "Keyframe Multimedia School",
    qualification: "Design UX/UI Web/Mobile app product design",
    years: "2023",
  },
  {
    university: "Van Lang University",
    qualification: "Bachelor of Software Engineering",
    years: "2021",
  },
  {
    university: "Cybersoft Academy",
    qualification: "Fullstack MERN",
    years: "2019",
  },
];

export const EXPERIENCE_DATA = [
  {
    company: "Simpson Strong-tie Vietnam",
    role: "Senior Software Developer",
    years: "03/2022 - Current",
  },
  {
    company: "Ninecode Company",
    role: "Junior Front-end Developer",
    years: "01/2021 - 02/2022",
  },
  {
    company: "Vietsoft Company",
    role: "Fresher Front-end Developer",
    years: "01/2020 - 12/2020",
  },
];

export const SKILL_DATA = [
  {
    name: "HTML, CSS, Javascript, Typescript",
  },
  {
    name: "React, Next.js",
  },
  {
    name: "Flutter, Dart",
  },
  {
    name: "Sass/SCSS, Bootstrap, React Bootstrap, MUI, Tailwindcss, Shadcn/ui, Radix",
  },
  {
    name: "Git",
  },
];

export const TOOL_DATA = [
  {
    icon: VscVscode,
  },
  {
    icon: FaGitAlt,
  },
  {
    icon: FaGithub,
  },
  {
    icon: FaBitbucket,
  },
  {
    icon: FaJira,
  },
  {
    icon: FaFigma,
  },
];

export const PROJECT_DATA = [
  {
    value: 0,
    image: "/work/word-mate.png",
    category: ["website"],
    name: "Word Mate",
    description:
      "Challenge your vocabulary with exciting games. Supports English and Vietnamese. Learn and have fun every day!",
    link: "https://www.word-mate.com/",
  },
  {
    value: 1,
    image: "/work/sweetpotato.png",
    category: ["website"],
    name: "Sweet Potato",
    description:
      "Landing Page introducing handmade products, especially Scrunchies from Lang",
    link: "https://sweetpotatoplanet.vercel.app/",
  },
  {
    value: 2,
    image: "/work/ninequiz.png",
    category: ["website"],
    name: "Quiz",
    description:
      "Build your own free online multiple-choice exams with our simple and intuitive platform.",
    link: "https://ninequiz.com/",
  },
  {
    value: 3,
    image: "/work/blueprint.png",
    category: ["website"],
    name: "Blueprint",
    description:
      "Find and explore all the high-quality structural solutions from Simpson Strong-Tie.",
    link: "https://app.strongtie.com/fd/",
  },
];

export const PROJECT_CATEGORIES = [
  {
    value: "all",
    name: "All Projects",
  },
  {
    value: "website",
    name: "Website",
  },
  {
    value: "mobileApp",
    name: "Mobile App",
  },
];
