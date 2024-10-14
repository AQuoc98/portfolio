import ContactForm from "@/components/contact-form";
import { RiMailFill, RiPhoneFill } from "react-icons/ri";
const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, eius, dolore quis nisi cum dolores optio laudantium
              quos saepe totam animi pariatur quidem, itaque tempore perferendis
              temporibus eaque quia eos.
            </p>
          </div>
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8">
              <RiMailFill className="text-lg" />
              <div>quocnguyen.developer@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <RiPhoneFill className="text-lg" />
              <div>+84 76 575 4399</div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
