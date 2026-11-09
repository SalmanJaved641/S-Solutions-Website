import { Code2, Megaphone, ShoppingBag } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const areas = [
  {
    index: "01",
    title: "Shopify & E-Commerce",
    description:
      "We build professional Shopify stores designed to provide excellent shopping experiences and support business growth.",
    icon: ShoppingBag,
    tags: ["Store Architecture", "Custom Themes", "Conversion Focus"],
  },
  {
    index: "02",
    title: "Web Development",
    description:
      "We create modern, responsive, high-performance websites tailored to business requirements.",
    icon: Code2,
    tags: ["Next.js & React", "Responsive Layouts", "High Performance"],
  },
  {
    index: "03",
    title: "Performance Marketing",
    description:
      "We help businesses reach their target audiences and grow through strategic Meta advertising and performance-driven campaigns.",
    icon: Megaphone,
    tags: ["Meta Advertising", "Audience Strategy", "Campaign Scaling"],
  },
];

export function WhatWeBring() {
  return (
    <section id="what-we-bring" className="section-space relative overflow-hidden bg-bg">
      <Container className="relative">
        <Reveal className="border-t border-white/10 pt-5 font-mono text-[.65rem] uppercase tracking-[.24em] text-white/40">
          <span>CORE CAPABILITIES</span>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-[1fr_minmax(15rem,24rem)] md:items-end">
          <Reveal transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}>
            <h2 className="font-heading text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.05em]">
              What We Bring{" "}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
          </Reveal>
          <Reveal transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}>
            <p className="text-pretty text-sm leading-7 text-muted">
              Connecting e-commerce craft, engineering discipline, and performance marketing to fuel end-to-end brand growth.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Reveal
                key={area.index}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 + index * 0.08 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-primary-400/35 hover:bg-white/[0.05] sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="absolute -bottom-10 -right-10 size-36 rounded-full bg-primary-500/10 blur-2xl transition duration-500 group-hover:bg-primary-500/20"
                />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-xl bg-primary-500/12 text-primary-400 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={22} />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-secondary-400">
                      {area.index}
                    </span>
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-semibold text-white sm:text-2xl">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {area.description}
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-2 border-t border-white/5 pt-5">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
