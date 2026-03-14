import type { SocialLink } from "@lib/types/common";
import Link from "next/link";
import {
  RiFacebookFill,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from "react-icons/ri";

const SOCIAL_LINKS: SocialLink[] = [
  { path: "https://github.com/AQuoc98", icon: RiGithubFill, label: "GitHub" },
  {
    path: "https://x.com/QuocNguyen3398",
    icon: RiTwitterXFill,
    label: "Twitter / X",
  },
  {
    path: "https://www.linkedin.com/in/quoc-nguyen-k3398/",
    icon: RiLinkedinFill,
    label: "LinkedIn",
  },
  {
    path: "https://www.facebook.com/anhquoc.nguyen.3398/",
    icon: RiFacebookFill,
    label: "Facebook",
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-6">
      {SOCIAL_LINKS.map((social) => {
        const Icon = social.icon;
        return (
          <Link href={social.path} key={social.label} aria-label={social.label}>
            <Icon size={32} />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
