"use client";

import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "./ui/button";
import ProjectCard from "./project-card";
import commonData from "@lib/json/commonData.json";

const { projectData } = commonData;

const Work = () => {
  return (
    <section className="mb-16">
      <div className="container mx-auto">
        <h2 className="section-title mb-8">Latest Projects</h2>
        <div className="flex items-center justify-center mb-8">
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        <Swiper
          className="h-[500px]"
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
        >
          {projectData.slice(0, 4).map((project, index) => {
            return (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Work;
