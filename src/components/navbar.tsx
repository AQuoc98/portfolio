"use client";

import type { NavLink } from "@lib/types/common";
import Link from "next/link";
import { memo } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const NAV_LINKS: NavLink[] = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "My Projects" },
  { path: "/contact", name: "Contact" },
];

type NavbarProps = {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
  handleCloseMobileNavBar?: () => void;
};

const Navbar = memo(function Navbar({
  containerStyles,
  linkStyles,
  underlineStyles,
  handleCloseMobileNavBar,
}: NavbarProps) {
  const path = usePathname();

  return (
    <nav className={containerStyles}>
      {NAV_LINKS.map((link) => (
        <Link
          href={link.path}
          key={link.path}
          className={linkStyles}
          onClick={handleCloseMobileNavBar}
        >
          {link.path === path ? (
            <motion.span
              transition={{ type: "tween" }}
              layoutId="underline"
              className={underlineStyles}
            />
          ) : null}
          {link.name}
        </Link>
      ))}
    </nav>
  );
});

export default Navbar;
