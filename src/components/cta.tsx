import Link from "next/link";
import { Button } from "./ui/button";

const Cta = () => {
  return (
    <section className="mb-16">
      <div className="container mx-auto flex flex-col gap-8 items-center">
        <h2 className="h2 max-w-xl text-center">
          Prepared to turn your ideas into reality? I&apos;m here to help
        </h2>
        <Link href="/contact">
          <Button>Contact me</Button>
        </Link>
      </div>
    </section>
  );
};

export default Cta;
