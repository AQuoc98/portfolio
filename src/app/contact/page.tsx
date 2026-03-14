import ContactForm from "@components/contact-form";
import type { Metadata } from "next";
import { RiHand, RiMailFill, RiPhoneFill } from "react-icons/ri";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ken Nguyen. Available for freelance projects, full-time roles, and collaborations. Send a message or reach out via email.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

const Contact = () => {
  return (
    <section className="mt-36 lg:mt-0 lg:h-screen lg:flex items-center">
      <div className="p-4 lg:container lg:mx-auto flex flex-col gap-6">
        <div className="flex items-center justify-center gap-1 text-lg">
          Say Hello <RiHand />
        </div>
        <h1 className="heading-xxl text-center">Let&apos;s Work Together.</h1>
        <div className="flex flex-col lg:flex-row justify-center gap-x-32 gap-y-8">
          <div className="flex flex-col gap-y-4 text-lg">
            <div className="flex items-center gap-2">
              <RiMailFill />
              <p>quocnguyen.developer@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <RiPhoneFill />
              <p>+84 76 575 4399</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
