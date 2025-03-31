"use client";

import ProjectCard from "@components/project/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { PROJECT_CATEGORIES, PROJECT_DATA } from "@lib/constants";
import { cn } from "@lib/utils";
import { useState } from "react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? PROJECT_DATA
      : PROJECT_DATA.filter((project) =>
          project.category.includes(selectedCategory),
        );

  return (
    <section className="mt-36 mb-8">
      <div className="container mx-auto flex flex-col gap-8">
        <h2 className="section-title">My Projects</h2>
        <Tabs
          defaultValue={selectedCategory}
          className="flex flex-col items-center gap-8"
        >
          <TabsList className="md:border w-96 grid md:grid-cols-3 gap-2">
            {PROJECT_CATEGORIES.map((category, index) => {
              const { value, name } = category;
              return (
                <TabsTrigger
                  onClick={() => setSelectedCategory(value)}
                  key={index}
                  value={value}
                  className="w-40 md:w-auto"
                >
                  {name}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <TabsContent
            value={selectedCategory}
            className={cn("grid md:grid-cols-3 gap-4", {
              "md:grid-cols-1": !filteredProjects.length,
            })}
          >
            {filteredProjects.length ? (
              filteredProjects.map((project, index) => {
                return <ProjectCard project={project} key={index} />;
              })
            ) : (
              <p>No projects found</p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
