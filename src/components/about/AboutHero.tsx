import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-bg pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
      {/* Subtle ambient lighting */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 size-[42rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-br from-primary-500/15 via-primary-600/10 to-transparent blur-3xl" />
        <div className="absolute -left-24 top-48 size-96 rounded-full bg-secondary-500/8 blur-3xl" />
        <div className="absolute right-0 top-32 size-[32rem] rounded-full bg-primary-600/10 blur-3xl" />
        <div className="hero-noise absolute inset-0 opacity-[0.035]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-secondary-400 shadow-[0_0_8px_#f7941d]" />
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-white/80">
                ABOUT S SOLUTIONS
              </span>
            </div>
          </Reveal>

          <Reveal transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}>
            <h1 className="mt-8 font-heading text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-white">
              We Build, Market &amp;{" "}
              <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-secondary-500 bg-clip-text text-transparent">
                Scale Brands.
              </span>
            </h1>
          </Reveal>

          <Reveal transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.16 }} className="mt-6">
            <p className="max-w-2xl text-pretty text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              S Solutions is a digital growth agency helping businesses build their digital presence, attract the right customers, and grow their sales through technology, creativity, and performance-driven marketing.
            </p>
          </Reveal>

          <Reveal transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.24 }} className="mt-8">
            <div className="inline-flex flex-wrap items-center gap-3 rounded-2xl border border-primary-400/25 bg-primary-500/[0.07] px-5 py-3.5 backdrop-blur-sm sm:gap-4">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-secondary-400">
                Our Tagline
              </span>
              <span className="hidden h-3.5 w-px bg-white/15 sm:block" aria-hidden="true" />
              <p className="font-heading text-sm font-semibold text-white/95 sm:text-base">
                We Build, Market &amp; Scale Brands{" "}
                <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text font-bold text-transparent">
                  From 0x to 3x.
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.32 }} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/contact" icon={<ArrowUpRight size={17} />}>
              Let&apos;s Work Together
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
