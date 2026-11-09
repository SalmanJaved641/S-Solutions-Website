import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function AboutCta() {
  return (
    <section id="about-cta" className="bg-bg pb-24 pt-8 md:pb-32">
      <Container>
        <Reveal className="cta-panel relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-14 lg:py-14">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-heading text-[clamp(2.1rem,4.5vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
              Ready to Build Something Great?
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-sm leading-7 text-muted sm:text-base">
              Let&apos;s turn your ideas into a digital experience that helps your business move forward.
            </p>
          </div>

          <div className="relative z-10 mt-8 flex flex-wrap items-center gap-4 shrink-0 lg:mt-0">
            <Button href="/contact" icon={<ArrowUpRight size={17} />}>
              Start a Project
            </Button>
            <Button href="/#services" variant="glass">
              Explore Our Services
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
