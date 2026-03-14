import Footer from "@components/footer";
import Header from "@components/header";
import { ThemeProvider } from "@components/theme-provider";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@lib/utils";
import { Toaster } from "@components/ui/sonner";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"],
});

// Set NEXT_PUBLIC_SITE_URL in .env.local for local dev and in Vercel dashboard for production.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Quoc Nguyen — Frontend Developer",
    template: "%s | Quoc Nguyen",
  },
  description:
    "Quoc Nguyen is a Senior Frontend Developer with 3+ years of experience building fast, scalable web & mobile applications using React, Next.js.",

  keywords: [
    "Quoc Nguyen",
    "Quoc Nguyen",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Portfolio",
    "Vietnam",
  ],
  authors: [{ name: "Quoc Nguyen", url: "https://github.com/AQuoc98" }],
  creator: "Quoc Nguyen",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Quoc Nguyen Portfolio",
    title: "Quoc Nguyen — Frontend Developer",
    description:
      "Senior Frontend Developer building fast, scalable web & mobile apps with React, Next.js.",
    images: [
      {
        url: "https://i.ibb.co/w2MgJP9/SEO.png",
        width: 800,
        height: 800,
        alt: "Quoc Nguyen — Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Quoc Nguyen — Frontend Developer",
    description:
      "Senior Frontend Developer building fast, scalable web & mobile apps with React, Next.js.",
    creator: "@QuocNguyen3398",
    images: ["https://i.ibb.co/w2MgJP9/SEO.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(outfit.className, "bg-background")}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
        {/* Load GA after hydration to avoid blocking the main thread (bundle-defer-third-party) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-NVESLN496H"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NVESLN496H');
          `}
        </Script>
      </body>
    </html>
  );
}
