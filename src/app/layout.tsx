import { Suspense } from "react";
import "./globals.css";
import type { Metadata } from "next";
import { SlideNavigation } from "@/components/SlideNavigation/SlideNavigation";
import { readdirSync } from "node:fs";
import { resolve } from "node:path";

export const metadata: Metadata = {
  title:
    "The Rocky Journey of Data Fetching Libraries in React’s NewStreaming SSR",
};
const slides = readdirSync(resolve(process.cwd(), "src/app"))
  .filter((file) => file.match(/^\d+(?:\.\d+)?_/))
  .toSorted(
    (a, b) =>
      Number(a.match(/^(\d+(?:\.\d+)?)_/)![1]) -
      Number(b.match(/^(\d+(?:\.\d+)?)_/)![1])
  )
  .map((path) => `/${path}`);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SlideNavigation slides={slides} />
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
