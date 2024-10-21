import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  RiFacebookFill,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from "react-icons/ri";

const icons = [
  {
    path: "https://github.com/AQuoc98",
    name: <RiGithubFill />,
  },
  {
    path: "https://x.com/QuocNguyen3398",
    name: <RiTwitterXFill />,
  },
  {
    path: "https://www.linkedin.com/in/quoc-nguyen-k3398/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://www.facebook.com/anhquoc.nguyen.3398/",
    name: <RiFacebookFill />,
  },
];

const Socials = ({
  containerStyles,
  iconsStyles,
}: {
  containerStyles?: string;
  iconsStyles?: string;
}) => {
  return (
    <div className={containerStyles}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={cn("text-3xl", iconsStyles)}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
