import type { Metadata } from "next";
import ProjectsTabs from "./_components/projects-tabs";

export const metadata: Metadata = {
  title: "My Projects",
  description:
    "Browse Ken Nguyen's web and mobile projects — real-world apps built with React and Next.js",
  alternates: { canonical: "/projects" },
  openGraph: { url: "/projects" },
};

export default function ProjectsPage() {
  return <ProjectsTabs />;
}
