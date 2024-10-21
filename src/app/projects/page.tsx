"use client";

import ProjectCard from "@/components/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import commonData from "@lib/json/commonData.json";

const { projectCategories, projectData } = commonData;

const uniqueCategories = [
  { value: "all", name: "All Projects" },
  ...projectCategories,
];

const Projects = () => {
  const [category, setCategory] = useState(uniqueCategories[0].value);

  const filteredProjects = projectData.filter((project) => {
    return category === "all" ? project : project.category === category;
  });

  return (
    <section className="mt-36 mb-8">
      <div className="container mx-auto flex flex-col gap-8">
        <h2 className="section-title">My Projects</h2>
        <Tabs defaultValue={category} className="flex flex-col items-center">
          <TabsList className="lg:border w-96 grid lg:grid-cols-3 gap-2">
            {uniqueCategories.map((category, index) => {
              const { value, name } = category;
              return (
                <TabsTrigger
                  onClick={() => setCategory(value)}
                  key={index}
                  value={value}
                  className="w-40 lg:w-auto"
                >
                  {name}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="mt-8 grid lg:grid-cols-3 gap-4">
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
