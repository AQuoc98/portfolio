"use client";

import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <SunIcon className="w-5 h-5 transition-all scale-100 rotate-0 dark:rotate-90 dark:scale-0" />
      <MoonIcon className="absolute w-5 h-5 transition-all scale-0 rotate-90  dark:rotate-0 dark:scale-90" />
    </Button>
  );
};

export default ThemeToggler;
