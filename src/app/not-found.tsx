import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

const NotFound = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <h1 className="text-5xl">Page Not Found</h1>
    </section>
  );
};

export default NotFound;
