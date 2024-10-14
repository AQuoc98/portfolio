import About from "@/components/about";
import Cta from "@/components/cta";
import Hero from "@/components/hero";
// import Reviews from "@/components/reviews";
import Services from "@/components/services";
import Work from "@/components/work";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      {/* <Reviews /> */}
      <Cta />
    </>
  );
}
