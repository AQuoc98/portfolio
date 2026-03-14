"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import Navbar from "./navbar";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <div>
          <RiMenuFill size={24} />
        </div>
      </SheetTrigger>
      <SheetContent aria-describedby={undefined}>
        <SheetTitle>
          <VisuallyHidden.Root>Hide Sheet Title</VisuallyHidden.Root>
        </SheetTitle>
        <div className="flex flex-col items-center h-full py-8">
          <Navbar
            containerStyles="flex flex-col items-center gap-y-6"
            linkStyles="text-xl relative"
            underlineStyles="absolute left-0 top-full h-0.5 bg-primary w-full"
            handleCloseMobileNavBar={() => setOpen(false)}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
