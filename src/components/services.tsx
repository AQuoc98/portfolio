import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { RiVipDiamondFill, RiApps2Fill } from "react-icons/ri";

const servicesData = [
  {
    icon: <RiVipDiamondFill className="text-6xl" />,
    title: "Web Design",
    description:
      "I focus on creating intuitive and engaging designs that provide a seamless user experience.",
  },
  {
    icon: <RiApps2Fill className="text-6xl" />,
    title: "Web/App Development",
    description:
      "My development services include building fast, scalable, and secure products using cutting-edge technologies.",
  },
];
const Services = () => {
  return (
    <section className="mb-16">
      <div className="container mx-auto flex flex-col gap-16 md:gap-8">
        <h2 className="section-title">My Services</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-md h-72 relative flex flex-col justify-center items-center"
                key={index}
              >
                <CardHeader className="absolute -top-14 bg-background">
                  {item.icon}
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
