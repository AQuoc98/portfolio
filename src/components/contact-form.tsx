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
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <RiUser3Fill className="text-lg absolute right-6" />
      </div>
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <RiMailFill className="text-lg absolute right-6" />
      </div>
      <div className="relative flex items-center">
        <Textarea placeholder="Type Your Message" />
        <RiMessage2Fill className="text-lg absolute top-4 right-6" />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]">
        Let's Talk
        <RiArrowRightLine className="text-lg" />
      </Button>
    </form>
  );
};

export default ContactForm;
