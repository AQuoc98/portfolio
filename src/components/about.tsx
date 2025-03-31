import {
  EDUCATION_DATA,
  EXPERIENCE_DATA,
  INFORMATION_TITLE,
  PERSONAL_DATA,
  SKILL_DATA,
  TOOL_DATA,
} from "@lib/constants";
import { Fragment } from "react";
import { RiBriefcaseFill, RiGraduationCapFill } from "react-icons/ri";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const About = () => {
  return (
    <section className="md:mt-8 mb-16">
      <div className="container mx-auto flex flex-col gap-8">
        <h2 className="section-title">About Me</h2>
        <Tabs
          defaultValue="personal"
          className="flex flex-col items-center gap-8"
        >
          <TabsList className="md:border w-96 grid md:grid-cols-3 gap-2">
            <TabsTrigger className="w-40 md:w-auto" value="personal">
              Personal Info
            </TabsTrigger>
            <TabsTrigger className="w-40 md:w-auto" value="qualifications">
              Qualifications
            </TabsTrigger>
            <TabsTrigger className="w-40 md:w-auto" value="skills">
              Skills
            </TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <Fragment>
              <h3 className="h3 mb-4 text-center">
                Exceptional experience for over 3 years
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {PERSONAL_DATA.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 mx-auto md:mx-0"
                    >
                      <div>
                        <item.icon />
                      </div>
                      <div>{item.text}</div>
                    </div>
                  );
                })}
              </div>
            </Fragment>
          </TabsContent>
          <TabsContent value="qualifications">
            <h3 className="h3 mb-4 text-center">My Awesome Journey</h3>
            <div className="grid md:grid-cols-2 gap-y-8 gap-x-20">
              <div className="flex flex-col gap-y-6">
                <div className="flex gap-x-4 items-center text-2xl">
                  <RiBriefcaseFill />
                  <h4 className="capitalize">{INFORMATION_TITLE.EXPERIENCE}</h4>
                </div>
                <div className="flex flex-col gap-y-8">
                  {EXPERIENCE_DATA.map((item, index) => {
                    return (
                      <div className="flex gap-x-8 group" key={index}>
                        <div className="h-24 w-[1px] bg-border relative ml-2">
                          <div className="w-3 h-3 rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-24 transition-all duration-500"></div>
                        </div>
                        <div>
                          <p className="font-semibold text-xl leading-none mb-4">
                            {item.company}
                          </p>
                          <p className="text-lg leading-none text-muted-foreground mb-2">
                            {item.role}
                          </p>
                          <p>{item.years}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-y-6">
                <div className="flex gap-x-4 items-center text-2xl">
                  <RiGraduationCapFill />
                  <h4 className="capitalize">{INFORMATION_TITLE.EDUCATION}</h4>
                </div>
                <div className="flex flex-col gap-y-8">
                  {EDUCATION_DATA.map((item, index) => {
                    return (
                      <div className="flex gap-x-8 group" key={index}>
                        <div className="h-24 w-[1px] bg-border relative ml-2">
                          <div className="w-3 h-3 rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-24 transition-all duration-500"></div>
                        </div>
                        <div>
                          <p className="font-semibold text-xl leading-none mb-4">
                            {item.university}
                          </p>
                          <p className="text-lg leading-none text-muted-foreground mb-2">
                            {item.qualification}
                          </p>
                          <p>{item.years}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="skills">
            <div className="text-center">
              <h3 className="h3 mb-4">What I Use Everyday</h3>
              <h4 className="text-2xl mb-4">Skills</h4>
              <div className="border-b border-border mb-4"></div>
              <div className="mb-4">
                {SKILL_DATA.map((item, index) => {
                  return (
                    <div key={index} className="text-center">
                      <p>{item.name}</p>
                    </div>
                  );
                })}
              </div>
              <h4 className="text-2xl mb-4">Tools</h4>
              <div className="border-b border-border mb-4"></div>
              <div className="flex gap-x-4 md:gap-x-8 justify-center">
                {TOOL_DATA.map((item, index) => {
                  return <item.icon key={index} className="text-4xl" />;
                })}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default About;
