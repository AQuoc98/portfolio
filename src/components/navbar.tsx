"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "My Projects" },
  { path: "/contact", name: "Contact" },
];

const Navbar = ({
  containerStyles,
  linkStyles,
  underlineStyles,
  handleCloseMobileNavBar,
}: {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
  handleCloseMobileNavBar?: () => void;
}) => {
  const path = usePathname();

  return (
    <nav className={containerStyles}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={linkStyles}
            onClick={handleCloseMobileNavBar}
          >
            {link.path === path && (
              <motion.span
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
