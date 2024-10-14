import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { RiVipDiamondFill, RiCodeBoxFill } from "react-icons/ri";

const servicesData = [
  {
    icon: <RiVipDiamondFill className="text-6xl" />,
    title: "Web Design",
    description:
      "I focus on creating intuitive and engaging designs that provide a seamless user experience",
  },
  {
    icon: <RiCodeBoxFill className="text-6xl" />,
    title: "Web Development",
    description:
      "My development services include building fast, scalable, and secure websites using cutting-edge technologies. Whether you need a simple landing page or a complex web application, I deliver solutions that work across all devices.",
  },
];
const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        <div className="grid xl:grid-cols-2 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4 text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
