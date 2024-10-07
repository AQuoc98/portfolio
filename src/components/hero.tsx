import {
  RiDownloadFill,
  RiSendPlaneFill,
  RiArrowDropDownLine,
} from "react-icons/ri";
import Link from "next/link";
import { Button } from "./ui/button";
import Socials from "./socials";
import Badge from "./badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="text-6xl xl:text-[72px] xl:leading-[80px] tracking-[-2px] font-bold mb-4">
              Hello, my name is Ken
            </h1>
            <p className="mb-8 text-lg font-light text-muted-foreground max-w-[490px] mx-auto xl:mx-0">
              I&apos;m focused on turning ideas into practical software, doing
              my best work when collaborating closely with founders, designers,
              and developers.
            </p>
            <div className="flex flex-col mx-auto mb-12 gap-y-3 md:flex-row gap-x-3 xl:mx-0">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <RiSendPlaneFill className="text-xl" />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                {/* TODO: handle download CV */}
                Download CV <RiDownloadFill className="text-xl" />
              </Button>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px]"
            />
          </div>
          <div className="relative hidden xl:flex">
            <div className="bg-hero_shape w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
          </div>
        </div>
        <div className="absolute hidden md:flex left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDropDownLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
