"use client";

import { PROJECT_DATA } from "@lib/constants";
import Link from "next/link";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../ui/button";
import ProjectCard from "./project-card";

const LatestProject = () => {
  return (
    <section className="mb-16">
      <div className="container mx-auto flex flex-col gap-8">
        <h2 className="section-title">Latest Projects</h2>
        <div className="flex items-center justify-center">
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        <div>
          <Swiper
            className="h-[500px]"
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
          >
            {PROJECT_DATA.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LatestProject;
