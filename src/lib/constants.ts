import { FaBitbucket, FaFigma, FaGitAlt, FaJira } from "react-icons/fa6";
import {
  RiCalendar2Fill,
  RiGraduationCapFill,
  RiHome2Fill,
  RiMailFill,
  RiPhoneFill,
  RiUser3Fill,
} from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import type {
  CategoryItem,
  EducationItem,
  ExperienceItem,
  PersonalItem,
  Project,
  SkillItem,
  ToolItem,
} from "./types/common";

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
] satisfies PersonalItem[];

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
] satisfies EducationItem[];

export const EXPERIENCE_DATA = [
  {
    company: "Simpson Strong-tie Vietnam",
    role: "UX Engineer",
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
] satisfies ExperienceItem[];

export const SKILL_DATA = [
  {
    name: "HTML, CSS, Javascript, Typescript",
  },
  {
    name: "React, Next.js",
  },
  {
    name: "Zustand, Redux",
  },
  {
    name: "Sass/SCSS, Bootstrap, MUI, Tailwindcss, Shadcn/ui",
  },
  {
    name: "React Hook Form, Yup, Zod",
  },
  {
    name: "Git, AI Coding",
  },
] satisfies SkillItem[];

export const TOOL_DATA = [
  {
    icon: VscVscode,
  },
  {
    icon: FaGitAlt,
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
] satisfies ToolItem[];

export const PROJECT_DATA = [
  {
    id: 0,
    image: "/work/word-mate.webp",
    category: ["website"],
    name: "Word Mate",
    description:
      "Challenge your vocabulary with exciting games. Supports English and Vietnamese. Learn and have fun every day!",
    link: "https://www.word-mate.com/",
  },
  {
    id: 1,
    image: "/work/sweetpotato.webp",
    category: ["website"],
    name: "Sweet Potato",
    description:
      "Landing Page introducing handmade products, especially Scrunchies from Lang",
    link: "https://langpotato.netlify.app/",
  },
  {
    id: 2,
    image: "/work/ninequiz.webp",
    category: ["website"],
    name: "Quiz",
    description:
      "Build your own free online multiple-choice exams with our simple and intuitive platform.",
    link: "https://ninequiz.com/",
  },
  {
    id: 3,
    image: "/work/blueprint.webp",
    category: ["website"],
    name: "Blueprint",
    description:
      "Find and explore all the high-quality structural solutions from Simpson Strong-Tie.",
    link: "https://app.strongtie.com/fd/",
  },
] satisfies Project[];

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
] satisfies CategoryItem[];
