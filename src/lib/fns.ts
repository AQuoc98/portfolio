import { PROJECT_CATEGORIES } from "./constants";
import { IProject } from "./types/project";

export const getProjectCategoryNames = (project: IProject) => {
  return project.category
    .map((cat) => PROJECT_CATEGORIES.find((c) => c.value === cat)?.name)
    .filter(Boolean)
    .join(", ");
};
