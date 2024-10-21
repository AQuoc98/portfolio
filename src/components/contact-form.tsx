"use client";
import {
  RiMailFill,
  RiUser3Fill,
  RiMessage2Fill,
  RiArrowRightLine,
} from "react-icons/ri";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-y-4 lg:w-[500px]">
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <RiUser3Fill className="text-lg absolute right-4" />
      </div>
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <RiMailFill className="text-lg absolute right-4" />
      </div>
      <div className="relative flex items-center">
        <Textarea placeholder="Type Your Message" cols={50} className="resize-none"/>
        <RiMessage2Fill className="text-lg absolute top-4 right-4" />
      </div>
      <Button className="flex items-center gap-x-1 lg:max-w-32">
        Let's Talk
        <RiArrowRightLine className="text-lg" />
      </Button>
    </form>
  );
};

export default ContactForm;
