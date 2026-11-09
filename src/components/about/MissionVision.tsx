import { Compass, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function MissionVision() {
  return (
    <section id="mission-vision" className="section-space relative overflow-hidden bg-bg">
      {/* Subtle ambient lighting */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/2 size-80 -translate-y-1/2 rounded-full bg-primary-500/8 blur-3xl" />
        <div className="absolute -right-32 top-1/2 size-80 -translate-y-1/2 rounded-full bg-secondary-500/8 blur-3xl" />
      </div>

      <Container className="relative">
        <Reveal className="border-t border-white/10 pt-5 font-mono text-[.65rem] uppercase tracking-[.24em] text-white/40">
          <span>PURPOSE &amp; DIRECTION</span>
        </Reveal>

        <Reveal transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }} className="mt-8">
          <h2 className="font-heading text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.05em]">
            Built on Mission.{" "}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
              Guided by Vision.
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {/* Mission Card */}
          <Reveal
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-primary-400/40 hover:bg-white/[0.05] sm:p-10"
          >
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 size-44 rounded-full bg-primary-500/12 blur-2xl transition duration-500 group-hover:bg-primary-500/22"
            />
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-primary-400 to-primary-600 transition-transform duration-500 group-hover:scale-y-100"
            />

            <div>
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl border border-primary-400/30 bg-primary-500/10 text-primary-400 shadow-[0_0_20px_rgba(59,140,240,0.15)] transition-transform duration-300 group-hover:scale-105">
                  <Target size={24} />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-400">
                  01 / Our Mission
                </span>
              </div>

              <h3 className="mt-7 font-heading text-2xl font-semibold text-white sm:text-3xl">
                Our Mission
              </h3>

              <p className="mt-4 text-pretty text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                To help businesses build strong digital foundations, attract the right audience, and turn digital experiences into sustainable growth.
              </p>
            </div>

            <div className="mt-8 border-t border-white/5 pt-5">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/40">
                Foundations • Audience • Growth
              </span>
            </div>
          </Reveal>

          {/* Vision Card */}
          <Reveal
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-secondary-400/40 hover:bg-white/[0.05] sm:p-10"
          >
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 size-44 rounded-full bg-secondary-500/12 blur-2xl transition duration-500 group-hover:bg-secondary-500/22"
            />
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-secondary-400 to-secondary-600 transition-transform duration-500 group-hover:scale-y-100"
            />

            <div>
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl border border-secondary-400/30 bg-secondary-500/10 text-secondary-400 shadow-[0_0_20px_rgba(247,148,29,0.15)] transition-transform duration-300 group-hover:scale-105">
                  <Compass size={24} />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-secondary-400">
                  02 / Our Vision
                </span>
              </div>

              <h3 className="mt-7 font-heading text-2xl font-semibold text-white sm:text-3xl">
                Our Vision
              </h3>

              <p className="mt-4 text-pretty text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                To become a trusted growth partner for ambitious brands by connecting thoughtful design, reliable technology, and performance-led marketing.
              </p>
            </div>

            <div className="mt-8 border-t border-white/5 pt-5">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/40">
                Design • Technology • Marketing
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
