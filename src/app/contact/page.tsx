import ContactForm from "@components/contact-form";
import { RiMailFill, RiPhoneFill } from "react-icons/ri";
const Contact = () => {
  return (
    <section className="mt-36 md:mt-0 md:h-screen md:flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center mb-12">
          <div className="flex items-center gap-x-4 mb-4 text-lg">
            <span className="w-8 h-[2px] bg-primary"></span>
            Say Hello 👋
          </div>
          <h1 className="h1 text-center">Let&apos;s Work Together.</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-x-16 gap-y-8">
          <div className="flex flex-col gap-y-4 md:text-lg">
            <div className="flex items-center gap-x-8">
              <RiMailFill className="text-lg" />
              <p>quocnguyen.developer@gmail.com</p>
            </div>
            <div className="flex items-center gap-x-8">
              <RiPhoneFill className="text-lg" />
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
