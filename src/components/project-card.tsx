import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card, CardHeader } from "./ui/card";
import Link from "next/link";
import { RiLink } from "react-icons/ri";

type ProjectCardProps = {
  project: {
    image: string;
    category: string;
    name: string;
    description: string;
    link: string;
  };
};
const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            alt="project image"
            width={247}
            height={250}
            priority
          />
          <div>
            <Link
              href={project.link}
              className="w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-primary"
            >
              <RiLink className="text-secondary"/>
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
