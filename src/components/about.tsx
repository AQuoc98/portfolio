import {
  RiUser3Fill,
  RiPhoneFill,
  RiMailFill,
  RiCalendar2Fill,
  RiGraduationCapFill,
  RiHome2Fill,
  RiBriefcaseFill,
} from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import {
  FaFigma,
  FaGitAlt,
  FaBitbucket,
  FaJira,
  FaGithub,
} from "react-icons/fa6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

type ExperienceData = {
  company: string;
  role: string;
  years: string;
};

type EducationData = {
  university: string;
  qualification: string;
  years: string;
};

type SkillData = {
  name: string;
};

type ToolData = {
  icon: JSX.Element;
};

type Data =
  | {
      title: "education";
      data: EducationData[];
    }
  | {
      title: "experience";
      data: ExperienceData[];
    }
  | {
      title: "skills";
      data: SkillData[];
    }
  | {
      title: "tools";
      data: ToolData[];
    };

const infoData = [
  {
    icon: <RiUser3Fill />,
    text: "Quoc Nguyen (Ken)",
  },
  {
    icon: <RiPhoneFill />,
    text: "+84 76 575 4399",
  },
  {
    icon: <RiMailFill />,
    text: "quocnguyen.developer@gmail.com",
  },
  {
    icon: <RiCalendar2Fill />,
    text: "Born on 03 Mar, 1998",
  },
  {
    icon: <RiGraduationCapFill />,
    text: "Master on Software Engineering",
  },
  {
    icon: <RiHome2Fill />,
    text: "Nha Trang, Viet Nam",
  },
];

const qualificationData: Data[] = [
  {
    title: "education",
    data: [
      {
        university: "PTI Education Training Group",
        qualification: "Effective Communication Skills",
        years: "2023",
      },
      {
        university: "Keyframe Multimedia School",
        qualification: "Design UX/UI Web/Mobile app product design",
        years: "2023",
      },
      {
        university: "Van Lang University",
        qualification: "Bachelor of Software Engineering",
        years: "2021",
      },
      {
        university: "Cybersoft Academy",
        qualification: "Fullstack MERN",
        years: "2019",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Simpson Strong-tie Vietnam",
        role: "Senior Software Developer",
        years: "03/2022 - Current",
      },
      {
        company: "Ninecode Company",
        role: "Junior Front-end Developer",
        years: "01/2021 - 02/2022",
      },
      {
        company: "Vietsoft Company",
        role: "Fresher Front-end Developer",
        years: "01/2020 - 12/2020",
      },
    ],
  },
];

const skillData: Data[] = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS, Javascript",
      },
      {
        name: "React, Next.js",
      },
      {
        name: "SASS, Tailwindcss, Shadcn/ui, MUI, Bootstrap",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        icon: <VscVscode className="text-5xl" />,
      },
      {
        icon: <FaGitAlt className="text-5xl" />,
      },
      {
        icon: <FaGithub className="text-5xl" />,
      },
      {
        icon: <FaBitbucket className="text-5xl" />,
      },
      {
        icon: <FaJira className="text-5xl" />,
      },
      {
        icon: <FaFigma className="text-5xl" />,
      },
    ],
  },
];

const getData = (arr: Data[], title: string): Data | undefined => {
  return arr.find((item) => item.title === title);
};

const About = () => {
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-lg xl:border dark:border-none">
                <TabsTrigger className="w-40 xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-40 xl:w-auto" value="qualifications">
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-40 xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Exceptional experience for over 3 years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I leverage cutting-edge technologies to design optimized
                      websites, delivering a seamless and unique user
                      experience.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Vietnamese</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <RiBriefcaseFill />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience")?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience")?.data.map(
                            (item, index) => {
                              const { company, role, years } =
                                item as ExperienceData;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <RiGraduationCapFill />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education")?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education")?.data.map(
                            (item, index) => {
                              const { university, qualification, years } =
                                item as EducationData;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skillData, "skills")?.data.map(
                          (item, index) => {
                            const { name } = item as SkillData;
                            return (
                              <div
                                key={index}
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools")?.data.map(
                          (item, index) => {
                            const { icon } = item as ToolData;
                            return <div key={index}>{icon}</div>;
                          },
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
