"use client";

import { PROJECT_DATA } from "@lib/constants";
import { useRouter } from "next/navigation";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "../../components/project/project-card";
import { Button } from "../../components/ui/button";

const LatestProject = () => {
  const router = useRouter();

  return (
    <section className="mb-16">
      <div className="p-4 lg:container lg:mx-auto flex items-center flex-col gap-4">
        <h2 className="section-title">Latest Projects</h2>
        <Button onClick={() => router.push("/projects")}>All projects</Button>
        <div className="w-full">
          <Swiper
            className="h-auto lg:h-125"
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
            {PROJECT_DATA.slice(0, 4).map((project) => {
              return (
                <SwiperSlide key={project.id}>
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
