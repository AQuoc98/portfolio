import About from "./_components/about";
import Hero from "./_components/hero";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

// Swiper is a large library — load it only on the client after hydration (bundle-dynamic-imports)
const LatestProject = dynamic(() => import("./_components/latest-project"), {
  ssr: false,
});

export const metadata: Metadata = {
  // absolute overrides the root template so the home title has no suffix
  title: { absolute: "Quoc Nguyen — Frontend Developer" },
  description:
    "Welcome to Quoc Nguyen's portfolio — a Senior Frontend Developer specialising in React, Next.js. Available for freelance & full-time opportunities.",
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <LatestProject />
    </>
  );
}
