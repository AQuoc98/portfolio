"use client";

import { useTheme } from "next-themes";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import { Button } from "./ui/button";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <RiSunLine className="text-xl transition-all scale-100 rotate-0 dark:rotate-90 dark:scale-0" />
      <RiMoonLine className="absolute text-xl transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-90" />
    </Button>
  );
};

export default ThemeToggler;
