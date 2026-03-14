import {
  EDUCATION_DATA,
  EXPERIENCE_DATA,
  PERSONAL_DATA,
  SKILL_DATA,
  TOOL_DATA,
} from "@lib/constants";
import { RiBriefcaseFill, RiGraduationCapFill } from "react-icons/ri";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

const TABS_VALUE = {
  PERSONAL: "personal",
  QUALIFICATIONS: "qualifications",
  SKILLS: "skills",
} as const;

const About = () => {
  return (
    <section className="mb-16">
      <div className="p-4 lg:container lg:mx-auto flex flex-col gap-4">
        <h2 className="section-title">About Me</h2>
        <Tabs
          defaultValue={TABS_VALUE.PERSONAL}
          className="flex flex-col items-center gap-4"
        >
          <TabsList className="border grid grid-cols-3 gap-2">
            <TabsTrigger className="w-auto" value={TABS_VALUE.PERSONAL}>
              Personal Info
            </TabsTrigger>
            <TabsTrigger className="w-auto" value={TABS_VALUE.QUALIFICATIONS}>
              Qualifications
            </TabsTrigger>
            <TabsTrigger className="w-auto" value={TABS_VALUE.SKILLS}>
              Skills
            </TabsTrigger>
          </TabsList>
          <TabsContent value={TABS_VALUE.PERSONAL}>
            <div className="grid lg:grid-cols-2 gap-4">
              {PERSONAL_DATA.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-2">
                    <item.icon />
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value={TABS_VALUE.QUALIFICATIONS}>
            <div className="grid lg:grid-cols-2 gap-x-40 gap-y-6">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <RiBriefcaseFill size={24} />
                  <h2 className="heading-md capitalize">experience</h2>
                </div>
                <div className="flex flex-col gap-6">
                  {EXPERIENCE_DATA.map((item, index) => {
                    return (
                      <div className="flex gap-6 group" key={index}>
                        <div className="h-24 w-px bg-border relative">
                          <div className="w-3 h-3 rounded-full bg-primary absolute -left-1.25 group-hover:translate-y-24 transition-all duration-500" />
                        </div>
                        <div className="flex flex-col gap-4">
                          <p className="font-semibold text-xl leading-none">
                            {item.company}
                          </p>
                          <p className="text-lg leading-none text-muted-foreground">
                            {item.role}
                          </p>
                          <p>{item.years}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <RiGraduationCapFill size={24} />
                  <h4 className="heading-md capitalize">education</h4>
                </div>
                <div className="flex flex-col gap-6">
                  {EDUCATION_DATA.map((item, index) => {
                    return (
                      <div className="flex gap-6 group" key={index}>
                        <div className="h-24 w-px bg-border relative">
                          <div className="w-3 h-3 rounded-full bg-primary absolute -left-1.25 group-hover:translate-y-24 transition-all duration-500" />
                        </div>
                        <div className="flex flex-col gap-4">
                          <p className="font-semibold text-xl leading-none">
                            {item.university}
                          </p>
                          <p className="text-lg leading-none text-muted-foreground">
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
          <TabsContent value={TABS_VALUE.SKILLS}>
            <div className="flex flex-col items-center gap-4">
              {SKILL_DATA.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="text-center">{item.name}</p>
                  </div>
                );
              })}
              <div className="flex items-center gap-4">
                {TOOL_DATA.map((item, index) => {
                  return <item.icon key={index} size={24} />;
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
