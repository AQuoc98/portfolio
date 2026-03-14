import { PROJECT_CATEGORIES } from "./constants";
import type { Project } from "./types/common";

export const getProjectCategoryNames = (project: Project) => {
  const categoryNameMap = new Map(
    PROJECT_CATEGORIES.map((c) => [c.value, c.name]),
  );

  return project.category
    .map((cat) => categoryNameMap.get(cat))
    .filter((name): name is string => name !== undefined)
    .join(", ");
};
