"use client";

import Logo from "./logo";
import MobileNavbar from "./mobile-navbar";
import Navbar from "./navbar";
import ThemeToggler from "./theme-toggler";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 transition-all shadow-lg bg-background/95 backdrop-blur">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Navbar
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNavbar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
