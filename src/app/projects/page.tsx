"use client";

import ProjectCard from "@/components/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const projectData = [
  {
    image: "/work/sweetpotato.png",
    category: "static website",
    name: "Sweet Potato Website",
    description:
      "Landing Page introducing handmade products, especially Scrunchies from Lang",
    link: "https://sweetpotatoplanet.vercel.app/",
  },
  {
    image: "/work/sweetpotato.png",
    category: "static website",
    name: "Sweet Potato Website",
    description:
      "Landing Page introducing handmade products, especially Scrunchies from Lang",
    link: "https://sweetpotatoplanet.vercel.app/",
  },
  {
    image: "/work/sweetpotato.png",
    category: "static website",
    name: "Sweet Potato Website",
    description:
      "Landing Page introducing handmade products, especially Scrunchies from Lang",
    link: "https://sweetpotatoplanet.vercel.app/",
  },
  {
    image: "/work/sweetpotato.png",
    category: "static website",
    name: "Sweet Potato Website",
    description:
      "Landing Page introducing handmade products, especially Scrunchies from Lang",
    link: "https://sweetpotatoplanet.vercel.app/",
  },
  {
    image: "/work/sweetpotato.png",
    category: "static website",
    name: "Sweet Potato Website",
    description:
      "Landing Page introducing handmade products, especially Scrunchies from Lang",
    link: "https://sweetpotatoplanet.vercel.app/",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full h-full grid md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent key={index} value={category}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
