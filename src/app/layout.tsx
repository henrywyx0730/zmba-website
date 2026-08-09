import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zmbasketball.org"),
  title: {
    default: "ZMBA | ZhongMei Basketball Association",
    template: "%s | ZMBA",
  },
  description:
    "The active official website of the ZhongMei Basketball Association at Jinling High School ZhongMei.",
  applicationName: "ZMBA",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://zmbasketball.org",
    siteName: "ZMBA",
    title: "ZMBA | ZhongMei Basketball Association",
    description:
      "Student-led basketball at Jinling High School ZhongMei, active since 2023.",
    images: [
      {
        url: "/images/events/2023-05-25-court.jpg",
        width: 1600,
        height: 1200,
        alt: "ZMBA group photograph on the outdoor basketball court.",
      },
    ],
  },
  icons: {
    icon: "/images/brand/zmba-mark.jpg",
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
