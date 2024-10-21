"use client";

import Logo from "./logo";
import MobileNavbar from "./mobile-navbar";
import Navbar from "./navbar";
import ThemeToggler from "./theme-toggler";

const Header = () => {
  return (
    <header className="p-4 fixed w-full top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Navbar
              containerStyles="hidden lg:flex gap-x-6 items-center"
              linkStyles="relative transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            <MobileNavbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
