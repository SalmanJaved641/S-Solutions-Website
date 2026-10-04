import { ArrowUpRight, CalendarDays } from "lucide-react";
import { heroContent } from "@/content/hero";
import { whatsappUrl } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroBackground } from "./HeroBackground";
import { TypewriterWord } from "./TypewriterWord";
import { HeroShape } from "./HeroShape";

export function Hero() {
  const booking = `${whatsappUrl}?text=${encodeURIComponent("Hi S Solutions, I'd like to book a 15-minute call.")}`;

  return <section id="home" className="relative flex min-h-svh items-center overflow-hidden pt-14 sm:pt-16">
    <HeroBackground />
    <Container className="relative z-10 grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1.2fr_.8fr] lg:py-20">
      <div>
        <h1 className="max-w-4xl font-heading text-[clamp(2.35rem,7vw,4.85rem)] font-semibold leading-[.94] tracking-[-.055em]"><span className="sr-only">{heroContent.staticHeadline} {heroContent.rotatingWords[0]}</span><span aria-hidden="true">{heroContent.staticHeadline} <TypewriterWord words={heroContent.rotatingWords} /></span></h1>
        <p className="mt-5 max-w-2xl text-pretty text-sm leading-6 text-muted sm:text-base sm:leading-7">{heroContent.subtext}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row"><Button href={booking} external variant="glass" icon={<CalendarDays size={17} />}>{heroContent.bookingLabel}</Button><Button href="/contact" icon={<ArrowUpRight size={17} />}>{heroContent.projectLabel}</Button></div>
      </div>
      <HeroShape />
    </Container>
  </section>;
}
