"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
];

const Navbar = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}: {
  containerStyles: string;
  linkStyles: string;
  underlineStyles: string;
}) => {
  const path = usePathname();

  return (
    <nav className={containerStyles}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={cn("capitalize", linkStyles)}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={underlineStyles}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;