import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import Navbar from "./navbar";
import Socials from "./socials";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>
          <RxHamburgerMenu className="text-xl" />
        </div>
      </SheetTrigger>
      <SheetContent aria-describedby={undefined}>
        <SheetTitle>
          <VisuallyHidden.Root>Hide Sheet Title</VisuallyHidden.Root>
        </SheetTitle>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Navbar
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
            />
          </div>
          <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
