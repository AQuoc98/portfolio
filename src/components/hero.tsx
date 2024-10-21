"use client";

import {
  RiDownloadFill,
  RiSendPlaneFill,
  RiArrowDropDownLine,
} from "react-icons/ri";
import Link from "next/link";
import { Button } from "./ui/button";
import Socials from "./socials";

const Hero = () => {
  const handleDownloadCV = () => {
    fetch("cv.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement("a");

        alink.href = fileURL;
        alink.download = "cv.pdf";
        alink.click();
      });
    });
  };

  return (
    <section className="relative h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex flex-col justify-center gap-y-4 text-center lg:text-left mx-auto lg:mx-0">
            <p className="text-sm font-semibold tracking-[4px]">
              FULLSTACK DEVELOPER
            </p>
            <h1 className="h1">Hello, I&apos;m Ken</h1>
            <p className="subtitle max-w-lg">
              I&apos;m focused on turning ideas into practical software, doing
              my best work when collaborating closely with founders, designers,
              and developers.
            </p>
            <div className="flex flex-col lg:flex-row gap-4 mx-auto lg:mx-0">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <RiSendPlaneFill className="text-xl" />
                </Button>
              </Link>
              <Button
                variant="secondary"
                className="gap-x-2"
                onClick={handleDownloadCV}
              >
                Download CV <RiDownloadFill className="text-xl" />
              </Button>
            </div>
            <Socials containerStyles="flex items-center gap-x-6 mx-auto lg:mx-0" />
          </div>
          <div className="hidden lg:flex relative">
            <div className="bg-hero_shape2 w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <div className="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative"></div>
          </div>
        </div>
        <div className="absolute left-2/4 bottom-0 hidden lg:flex animate-bounce">
          <RiArrowDropDownLine className="text-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
