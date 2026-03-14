"use client";

import ProjectCard from "@components/project/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { PROJECT_CATEGORIES, PROJECT_DATA } from "@lib/constants";
import type { FilterCategory, ProjectCategory } from "@lib/types/common";
import { cn } from "@lib/utils";
import { useMemo, useState } from "react";

const PROJECT_CATEGORIES_VALUE = {
  ALL: "all",
  WEB: "website",
  MOBILE: "mobileApp",
} as const;

const ProjectsTabs = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>(
    PROJECT_CATEGORIES_VALUE.ALL,
  );

  const visibleCategories = useMemo(() => {
    const usedValues = new Set<ProjectCategory>(
      PROJECT_DATA.flatMap((p) => p.category),
    );

    if (usedValues.size <= 1)
      return PROJECT_CATEGORIES.filter(
        (c) => c.value === PROJECT_CATEGORIES_VALUE.ALL,
      );

    return PROJECT_CATEGORIES.filter(
      (c) =>
        c.value === PROJECT_CATEGORIES_VALUE.ALL ||
        usedValues.has(c.value as ProjectCategory),
    );
  }, []);

  const filteredProjects = useMemo(
    () =>
      selectedCategory === PROJECT_CATEGORIES_VALUE.ALL
        ? PROJECT_DATA
        : PROJECT_DATA.filter((project) =>
            (project.category as string[]).includes(selectedCategory),
          ),
    [selectedCategory],
  );

  return (
    <section className="mt-36">
      <div className="p-4 lg:container lg:mx-auto flex flex-col gap-4">
        <h2 className="section-title">My Projects</h2>
        <Tabs
          value={selectedCategory}
          onValueChange={(value) =>
            setSelectedCategory(value as FilterCategory)
          }
          className="flex flex-col items-center gap-4"
        >
          <TabsList
            className={cn("border grid gap-2", {
              "lg:grid-cols-1": visibleCategories.length === 1,
              "lg:grid-cols-2": visibleCategories.length === 2,
              "lg:grid-cols-3": visibleCategories.length >= 3,
            })}
          >
            {visibleCategories.map((category) => (
              <TabsTrigger
                key={category.value}
                value={category.value}
                className="w-40 lg:w-auto"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent
            value={selectedCategory}
            className={cn("grid lg:grid-cols-3 gap-4", {
              "lg:grid-cols-1": !filteredProjects.length,
            })}
          >
            {filteredProjects.length ? (
              filteredProjects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))
            ) : (
              <p>No projects found</p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsTabs;
