import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@components/ui/sheet";
import { RiMenuFill } from "react-icons/ri";
import Navbar from "./navbar";
import Socials from "./socials";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useState } from "react";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <div>
          <RiMenuFill className="text-2xl" />
        </div>
      </SheetTrigger>
      <SheetContent aria-describedby={undefined}>
        <SheetTitle>
          <VisuallyHidden.Root>Hide Sheet Title</VisuallyHidden.Root>
        </SheetTitle>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <Navbar
            containerStyles="flex flex-col items-center gap-y-6"
            linkStyles="text-2xl"
            handleCloseMobileNavBar={() => setOpen(false)}
          />
          <Socials containerStyles="flex gap-x-4" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
