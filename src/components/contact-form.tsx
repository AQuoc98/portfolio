"use client";

import {
  RiArrowRightLine,
  RiMailFill,
  RiMessage2Fill,
  RiUser3Fill,
} from "react-icons/ri";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useRef, useState } from "react";
import { useToast } from "@hooks/use-toast";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleResetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      handleResetForm();

      const response = await fetch("/contact/api", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }

      setTimeout(() => {
        toast({
          description: "Your message has been sent.",
        });
        setIsSubmitting(false);
      }, 5000);
    } catch {
      alert("Error, please try resubmitting the form");
    }
  };

  return (
    <form
      ref={formRef}
      className="flex flex-col gap-y-4 lg:w-[500px]"
      onSubmit={handleSubmitForm}
    >
      <div className="relative flex items-center">
        <Input type="name" name="name" placeholder="Name" required />
        <RiUser3Fill className="text-lg absolute right-4" />
      </div>
      <div className="relative flex items-center">
        <Input type="email" name="email" placeholder="Email" required />
        <RiMailFill className="text-lg absolute right-4" />
      </div>
      <div className="relative flex items-center">
        <Textarea
          placeholder="Type Your Message"
          cols={50}
          name="message"
          className="resize-none"
          required
        />
        <RiMessage2Fill className="text-lg absolute top-4 right-4" />
      </div>
      <Button
        className="flex items-center gap-x-1 lg:max-w-32"
        type="submit"
        disabled={isSubmitting}
      >
        Let&apos;s Talk
        <RiArrowRightLine className="text-lg" />
      </Button>
    </form>
  );
};

export default ContactForm;
