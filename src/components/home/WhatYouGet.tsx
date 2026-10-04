"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";
import { assets } from "@/config/assets";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ServiceVisual } from "./ServiceVisual";

export function WhatYouGet() {
  const [active, setActive] = useState(0);
  const toggle = (index: number) => setActive((current) => current === index ? 0 : index);
  return <section id="services" className="section-space bg-bg"><Container>
    <SectionHeading eyebrow="SERVICES" title="WHAT YOU GET" sideText="A focused set of design, development and growth services, delivered to a brief, a timeline and a price — built for speed, consistency and lasting quality." />
    <div className="mt-14 flex flex-col gap-2 lg:h-[38rem] lg:flex-row" onMouseLeave={() => setActive(0)}>
      {services.map((service, index) => {
        const open = active === index;
        return <article key={service.id} tabIndex={0} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); toggle(index); } }} className={`service-panel ${open ? "is-open" : ""}`}>
          <button type="button" onClick={() => toggle(index)} className="flex min-h-16 w-full items-center gap-4 text-left lg:pointer-events-none lg:block lg:h-full" aria-expanded={open} aria-label={`${open ? "Collapse" : "Expand"} ${service.title}`}>
            <span className="font-heading text-sm font-semibold lg:hidden">{service.title}</span><span className="hidden lg:absolute lg:left-1/2 lg:top-1/2 lg:block lg:-translate-x-1/2 lg:-translate-y-1/2 lg:-rotate-90 lg:whitespace-nowrap lg:font-heading lg:text-lg lg:font-semibold lg:text-white/85">{service.title}</span>
          </button>
          <div className="service-panel-content"><div className="grid gap-7 p-5 pt-1 sm:p-7 lg:grid-cols-[1fr_.9fr] lg:p-9"><div>
            <h3 className="font-heading text-3xl font-semibold tracking-[-.04em] sm:text-4xl">{service.title}</h3><p className="mt-4 max-w-md text-sm leading-7 text-muted">{service.description}</p><div className="mt-7 flex flex-wrap gap-2">{service.offers.map((offer) => <span key={offer} className="rounded-full border border-white/10 bg-white/[.035] px-3 py-1.5 text-xs text-white/65">{offer}</span>)}</div>
          </div>{assets.serviceImages[service.id] ? <div className="relative min-h-44 overflow-hidden rounded-2xl"><Image src={assets.serviceImages[service.id]!} alt={`${service.title} service`} fill className="object-cover" sizes="(min-width: 1024px) 32vw, 90vw" /></div> : <ServiceVisual id={service.id as "web" | "shopify" | "marketing" | "apps"} />}</div></div>
        </article>;
      })}
    </div>
    <div className="mt-5 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center"><p className="font-mono text-xs uppercase tracking-[.14em] text-white/65">Not sure which service fits? Let&apos;s talk.</p><Button href="/contact" variant="glass" icon={<ArrowUpRight size={16} />}>Get in touch</Button></div>
  </Container></section>;
}
