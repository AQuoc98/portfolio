import type { IconType } from "react-icons";

// Project
export type ProjectCategory = "website" | "mobileApp";
export type FilterCategory = ProjectCategory | "all";

export type Project = {
  id: number;
  image: string;
  category: ProjectCategory[];
  name: string;
  description: string;
  link: string;
};

export type CategoryItem = {
  value: FilterCategory;
  name: string;
};

// About
export type PersonalItem = {
  icon: IconType;
  text: string;
};

export type EducationItem = {
  university: string;
  qualification: string;
  years: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  years: string;
};

export type SkillItem = {
  name: string;
};

export type ToolItem = {
  icon: IconType;
};

// Navigation & Social
export type NavLink = {
  path: string;
  name: string;
};

export type SocialLink = {
  path: string;
  icon: IconType;
  label: string;
};
