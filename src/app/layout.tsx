import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zmbasketball.org"),
  title: {
    default: "ZMBA | ZhongMei Basketball Association",
    template: "%s | ZMBA",
  },
  description:
    "The active official website of the ZhongMei Basketball Association.",
  applicationName: "ZMBA",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
