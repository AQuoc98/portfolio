import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card, CardHeader } from "./ui/card";
import Link from "next/link";
import { RiLink } from "react-icons/ri";
import { Project } from "@lib/types/project";
import commonData from "@lib/json/commonData.json";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { projectCategories } = commonData;

  const projectCategoryName = projectCategories.find(
    (category) => (project.category = category.value),
  )?.name;

  return (
    <Card className="group h-full overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
          <Image
            className="absolute shadow-2xl"
            src={project.image}
            alt="project image"
            width={245}
            height={250}
            priority
          />
          <Link
            href={project.link}
            className="w-14 h-14 flex justify-center items-center bg-primary rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
          >
            <RiLink className="text-secondary" />
          </Link>
        </div>
      </CardHeader>
      <div className="px-6 py-8">
        <Badge className="absolute top-4 left-4 font-medium uppercase text-sm">
          {projectCategoryName}
        </Badge>
        <h4 className="h4 mb-2">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
