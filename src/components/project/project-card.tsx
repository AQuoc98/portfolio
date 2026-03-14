import { getProjectCategoryNames } from "@lib/fns";
import { Project } from "@lib/types/common";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RiLink } from "react-icons/ri";
import { Badge } from "../ui/badge";
import { Card, CardHeader } from "../ui/card";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const router = useRouter();
  return (
    <Card className="group relative overflow-hidden lg:h-full">
      <CardHeader className="p-0">
        <div
          className="relative w-full h-80 flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={() => router.push(project.link)}
        >
          <Image
            className="object-cover shadow-2xl"
            src={project.image}
            alt="project image"
            width={245}
            height={250}
            style={{ width: "auto", height: "auto" }}
            priority
          />
          <div className="hidden w-14 h-14 lg:flex justify-center items-center absolute bg-primary rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
            <RiLink className="text-secondary" />
          </div>
        </div>
      </CardHeader>
      <div className="px-6 py-8">
        <Badge className="absolute top-4 left-4 font-medium uppercase text-sm">
          {getProjectCategoryNames(project)}
        </Badge>
        <h4 className="heading-md mb-2">{project.name}</h4>
        <p className="text-muted-foreground text-lg leading-relaxed mb-0">
          {project.description}
        </p>
      </div>
    </Card>
  );
};

export default ProjectCard;
