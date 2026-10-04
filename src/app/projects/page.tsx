import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { ProjectsGrid } from "@/components/home/ProjectsGrid";
import { ContactCta } from "@/components/home/ContactCta";

export const metadata: Metadata = { title: "Projects", description: "Explore concept projects demonstrating S Solutions' web, Shopify, app and performance-marketing capabilities.", alternates: { canonical: "/projects" } };
export default function ProjectsPage() { return <main id="main-content" className="bg-bg pt-36"><Container><Tag>PROJECTS</Tag><h1 className="mt-7 font-heading text-[clamp(3.4rem,8vw,7rem)] font-semibold leading-[.9] tracking-[-.065em]">Our Projects</h1><p className="mt-6 max-w-2xl text-base leading-8 text-muted">Concept projects and demos that show what we can design, build and grow.</p><p className="mt-6 inline-flex rounded-full border border-secondary-400/20 bg-secondary-400/8 px-4 py-2 text-xs text-secondary-400">These are concept projects created to demonstrate our capabilities — not work for real clients.</p></Container><ProjectsGrid page /><ContactCta /></main>; }
