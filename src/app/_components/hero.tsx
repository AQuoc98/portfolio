"use client";

import Image from "next/image";
import { useState } from "react";
import { RiDownloadFill, RiSendPlaneFill } from "react-icons/ri";
import { toast } from "sonner";
import { Button } from "../../components/ui/button";
import useIsMobile from "@hooks/use-is-mobile";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const [isDownloading, setIsDownloading] = useState(false);
  const isMobile = useIsMobile();
  const buttonSize: "default" | "md" = isMobile ? "md" : "default";

  const handleDownloadCV = async () => {
    if (isDownloading) return;
    setIsDownloading(true);
    try {
      const response = await fetch("cv.pdf");
      if (!response.ok) throw new Error("File not found");
      const blob = await response.blob();
      const fileURL = window.URL.createObjectURL(blob);
      const alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "cv.pdf";
      alink.click();
      window.URL.revokeObjectURL(fileURL);
    } catch {
      toast.error("Could not download CV. Please try again later.");
    } finally {
      setIsDownloading(false);
    }
  };
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="p-4 lg:container lg:mx-auto">
        <div className="flex lg:justify-between items-center gap-4">
          <div className="flex flex-col justify-center gap-6 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[4px]">
              frontend developer
            </p>
            <h1 className="heading-xxl">Hello, I&apos;m Quoc</h1>
            <p className="subtitle">
              I&apos;m focused on turning ideas into practical software, doing
              my best work when collaborating closely with founders, designers,
              QA/QC and developers.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Button
                className="gap-2"
                size={buttonSize}
                onClick={() => router.push("/contact")}
              >
                Contact me
                <RiSendPlaneFill className="text-xl" />
              </Button>
              <Button
                variant="secondary"
                className="gap-2"
                onClick={handleDownloadCV}
                disabled={isDownloading}
                size={buttonSize}
              >
                {isDownloading ? "Downloading…" : "Download CV"}
                <RiDownloadFill className="text-xl" />
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex lg:relative">
            <div className="relative w-85 h-115">
              <div className="absolute inset-0 -translate-x-4 -translate-y-4 rounded-2xl bg-orange-200" />
              <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/my-image.webp"
                  alt="Portrait photo"
                  fill
                  className="object-cover"
                  sizes="340px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
