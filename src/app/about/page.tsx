import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { About } from "@/components/home/About";
import { MissionVision } from "@/components/about/MissionVision";
import { WhatWeBring } from "@/components/about/WhatWeBring";
import { DesignToolkit } from "@/components/home/DesignToolkit";
import { Technologies } from "@/components/home/Technologies";
import { AboutCta } from "@/components/about/AboutCta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about S Solutions, our mission, vision, principles, and the technologies we use to build, market, and scale brands.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-bg">
      <AboutHero />
      <About />
      <MissionVision />
      <WhatWeBring />
      <DesignToolkit />
      <Technologies />
      <AboutCta />
    </main>
  );
}
