"use client";
import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { aboutContent } from "@/content/about";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

function CountUp({ to, suffix }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;
    const tail = suffix ?? "";
    if (reduced) { node.textContent = `${to}${tail}`; return; }
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      node.textContent = `${Math.round(to * eased)}${tail}`;
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, suffix, reduced]);
  return <span ref={ref}>0{suffix ?? ""}</span>;
}

export function About() {
  return <section id="about" className="section-space relative overflow-hidden bg-bg">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-secondary-500/8 blur-3xl" />
    </div>
    <Container className="relative">
      <Reveal className="border-t border-white/10 pt-5 font-mono text-[.65rem] uppercase tracking-[.24em] text-white/40">
        <span>{aboutContent.eyebrow}</span>
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
        <div>
          <Reveal>
            <h2 className="font-heading text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[.95] tracking-[-.05em]">{aboutContent.title} <span className="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">{aboutContent.titleAccent}</span></h2>
          </Reveal>
          <Reveal transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }} className="mt-6">
            <p className="text-pretty text-base leading-7 text-white/80 sm:text-lg sm:leading-8">{aboutContent.lead}</p>
          </Reveal>
          {aboutContent.paragraphs.map((paragraph, index) => <Reveal key={paragraph.slice(0, 24)} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.14 + index * 0.07 }} className="mt-4">
            <p className="text-pretty text-sm leading-7 text-muted">{paragraph}</p>
          </Reveal>)}
          <Reveal transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.36 }} className="mt-8">
            <p className="font-mono text-xs uppercase tracking-[.2em] text-secondary-400">{aboutContent.signature}</p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-6">
          <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[.03] p-8">
            <div aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-500/15 blur-2xl" />
            <p className="relative font-heading text-2xl font-semibold leading-snug sm:text-3xl">“{aboutContent.quote}”</p>
            <p className="relative mt-4 font-mono text-[.65rem] uppercase tracking-[.24em] text-white/40">{aboutContent.quoteAttribution}</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10">
            {aboutContent.stats.map((stat, index) => <Reveal key={stat.label} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }} className="bg-bg p-6">
              <p className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl"><CountUp to={stat.value} suffix={stat.suffix} /></p>
              <p className="mt-2 font-mono text-[.62rem] uppercase tracking-[.2em] text-white/45">{stat.label}</p>
            </Reveal>)}
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
        {aboutContent.principles.map((principle, index) => <Reveal key={principle.index} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }} className="group relative bg-bg p-8 transition-colors duration-300 hover:bg-white/[.03]">
          <span aria-hidden="true" className="absolute left-0 top-0 h-full w-px origin-top scale-y-0 bg-gradient-to-b from-primary-400 to-secondary-500 transition-transform duration-500 group-hover:scale-y-100" />
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-secondary-400">{principle.index}</span>
            <h3 className="font-heading text-xl font-semibold">{principle.title}</h3>
          </div>
          <p className="mt-3 text-sm leading-7 text-muted">{principle.body}</p>
        </Reveal>)}
      </div>
    </Container>
  </section>;
}
