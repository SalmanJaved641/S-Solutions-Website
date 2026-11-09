import { Hero } from "@/components/home/Hero/Hero";
import { WhatYouGet } from "@/components/home/WhatYouGet";
import { ProjectsGrid } from "@/components/home/ProjectsGrid";
import { Pricing } from "@/components/home/Pricing";
import { ContactCta } from "@/components/home/ContactCta";
import { Process } from "@/components/home/Process";
import { BrandsMarquee } from "@/components/home/BrandsMarquee";
import { ServicesStack } from "@/components/home/ServicesStack";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <WhatYouGet />
      <Process />
      <BrandsMarquee />
      <ServicesStack />
      <Pricing />
      <ProjectsGrid />
      <ContactCta />
    </main>
  );
}
