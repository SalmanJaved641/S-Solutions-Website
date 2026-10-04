import { Hero } from "@/components/home/Hero/Hero";
import { About } from "@/components/home/About";
import { WhatYouGet } from "@/components/home/WhatYouGet";
import { Technologies } from "@/components/home/Technologies";
import { ProjectsGrid } from "@/components/home/ProjectsGrid";
import { Pricing } from "@/components/home/Pricing";
import { ContactCta } from "@/components/home/ContactCta";
import { Process } from "@/components/home/Process";
import { BrandsMarquee } from "@/components/home/BrandsMarquee";
import { DesignToolkit } from "@/components/home/DesignToolkit";
import { TrustedBy } from "@/components/home/TrustedBy";
import { ServicesStack } from "@/components/home/ServicesStack";

export default function HomePage() {
  return <main id="main-content"><Hero /><About /><WhatYouGet /><Process /><BrandsMarquee /><DesignToolkit /><Technologies /><TrustedBy /><ServicesStack /><Pricing /><ProjectsGrid /><ContactCta /></main>;
}
