import type { Metadata } from "next";
import { contactContent } from "@/content/contact";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = { title: "Contact", description: "Contact S Solutions in Lahore, Pakistan about web development, Shopify, app development or performance marketing.", alternates: { canonical: "/contact" } };
export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) { const { service = "" } = await searchParams; return <main id="main-content" className="min-h-screen bg-bg pb-28 pt-36"><Container><div className="max-w-4xl"><Tag>{contactContent.eyebrow}</Tag><h1 className="mt-7 font-heading text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[.92] tracking-[-.06em]">{contactContent.heading}</h1><p className="mt-6 max-w-2xl text-base leading-8 text-muted">{contactContent.intro}</p></div><div className="mt-14 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><ContactInfo /><ContactForm initialService={service} /></div></Container></main>; }
