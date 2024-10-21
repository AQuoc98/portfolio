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
        name: "React, Next.js, Angular",
      },
      {
        name: "Flutter",
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
        icon: <VscVscode className="text-4xl" />,
      },
      {
        icon: <FaGitAlt className="text-4xl" />,
      },
      {
        icon: <FaGithub className="text-4xl" />,
      },
      {
        icon: <FaBitbucket className="text-4xl" />,
      },
      {
        icon: <FaJira className="text-4xl" />,
      },
      {
        icon: <FaFigma className="text-4xl" />,
      },
    ],
  },
];

const getData = (arr: Data[], title: string): Data | undefined => {
  return arr.find((item) => item.title === title);
};

const About = () => {
  return (
    <section className="mt-8 mb-16">
      <div className="container mx-auto flex flex-col gap-8">
        <h2 className="section-title">About Me</h2>
        <Tabs defaultValue="personal" className="flex flex-col items-center">
          <TabsList className="lg:border w-96 grid lg:grid-cols-3 gap-2">
            <TabsTrigger className="w-40 lg:w-auto" value="personal">
              Personal Info
            </TabsTrigger>
            <TabsTrigger className="w-40 lg:w-auto" value="qualifications">
              Qualifications
            </TabsTrigger>
            <TabsTrigger className="w-40 lg:w-auto" value="skills">
              Skills
            </TabsTrigger>
          </TabsList>
          <div className="mt-8 mx-auto">
            <TabsContent value="personal">
              <div className="text-center">
                <h3 className="h3 mb-4">
                  Exceptional experience for over 3 years
                </h3>
                <p className="subtitle max-w-xl mb-4">
                  I leverage cutting-edge technologies to design optimized
                  websites, delivering a seamless and unique user experience.
                </p>
                <div className="grid lg:grid-cols-2 gap-4 mb-4">
                  {infoData.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 mx-auto lg:mx-0"
                      >
                        <div>{item.icon}</div>
                        <div>{item.text}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-y-2">
                  <p>Language Skill</p>
                  <div className="border-b"></div>
                  <p>English, Vietnamese</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="qualifications">
              <h3 className="h3 mb-4 text-center">My Awesome Journey</h3>
              <div className="grid lg:grid-cols-2 gap-y-8 gap-x-20">
                <div className="flex flex-col gap-y-6">
                  <div className="flex gap-x-4 items-center text-2xl">
                    <RiBriefcaseFill />
                    <h4 className="capitalize">
                      {getData(qualificationData, "experience")?.title}
                    </h4>
                  </div>
                  <div className="flex flex-col gap-y-8">
                    {getData(qualificationData, "experience")?.data.map(
                      (item, index) => {
                        const { company, role, years } = item as ExperienceData;
                        return (
                          <div className="flex gap-x-8 group" key={index}>
                            <div className="h-24 w-[1px] bg-border relative ml-2">
                              <div className="w-3 h-3 rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-24 transition-all duration-500"></div>
                            </div>
                            <div>
                              <p className="font-semibold text-xl leading-none mb-4">
                                {company}
                              </p>
                              <p className="text-lg leading-none text-muted-foreground mb-2">
                                {role}
                              </p>
                              <p>{years}</p>
                            </div>
                          </div>
                        );
                      },
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-y-6">
                  <div className="flex gap-x-4 items-center text-2xl">
                    <RiGraduationCapFill />
                    <h4 className="capitalize">
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
                            <div className="h-24 w-[1px] bg-border relative ml-2">
                              <div className="w-3 h-3 rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-24 transition-all duration-500"></div>
                            </div>
                            <div>
                              <p className="font-semibold text-xl leading-none mb-4">
                                {university}
                              </p>
                              <p className="text-lg leading-none text-muted-foreground mb-2">
                                {qualification}
                              </p>
                              <p>{years}</p>
                            </div>
                          </div>
                        );
                      },
                    )}
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
                  {getData(skillData, "skills")?.data.map((item, index) => {
                    const { name } = item as SkillData;
                    return (
                      <div key={index} className="text-center">
                        <p>{name}</p>
                      </div>
                    );
                  })}
                </div>
                <h4 className="text-2xl mb-4">Tools</h4>
                <div className="border-b border-border mb-4"></div>
                <div className="flex gap-x-4 lg:gap-x-8 justify-center">
                  {getData(skillData, "tools")?.data.map((item, index) => {
                    const { icon } = item as ToolData;
                    return <div key={index}>{icon}</div>;
                  })}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default About;
