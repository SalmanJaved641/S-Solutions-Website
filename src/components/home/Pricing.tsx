import { ArrowUpRight, Check } from "lucide-react";
import { pricingContent } from "@/content/pricing";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function Pricing() {
  return <section id="pricing" className="section-space bg-bg"><Container>
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="font-mono text-[.65rem] uppercase tracking-[.24em] text-white/40">{pricingContent.eyebrow}</p>
      <h2 className="mt-4 font-heading text-[clamp(2.7rem,6vw,5rem)] font-semibold leading-none tracking-[-.055em]">{pricingContent.heading}</h2>
      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">{pricingContent.subtext}</p>
    </Reveal>
    <div className="mt-14 grid items-stretch gap-5 md:grid-cols-3">
      {pricingContent.plans.map((plan, index) => <Reveal key={plan.id} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }} className={cn("relative flex flex-col rounded-[2rem] border p-7 sm:p-8", plan.featured ? "border-primary-400/40 bg-gradient-to-b from-primary-500/12 to-white/[.02] shadow-[0_24px_70px_rgba(31,111,219,.18)]" : "border-white/10 bg-white/[.03]")}>
        {plan.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary-500 px-3 py-1 font-mono text-[.55rem] uppercase tracking-[.16em] text-white">Most popular</span>}
        <h3 className="font-heading text-lg font-semibold">{plan.name}</h3>
        <p className="mt-4 flex items-end gap-2"><span className="font-heading text-5xl font-semibold tracking-[-.04em]">{plan.price}</span>{plan.period && <span className="pb-1.5 text-xs text-white/45">{plan.period}</span>}</p>
        <p className="mt-3 text-xs leading-6 text-muted">{plan.tagline}</p>
        <ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-white/10 pt-6">
          {plan.features.map((feature) => <li key={feature} className="flex gap-3 text-sm leading-6 text-white/75"><Check size={15} className="mt-1 shrink-0 text-primary-400" />{feature}</li>)}
        </ul>
        <Button href="/contact" variant={plan.featured ? "primary" : "glass"} icon={<ArrowUpRight size={16} />} className="mt-8 w-full">{plan.cta}</Button>
      </Reveal>)}
    </div>
  </Container></section>;
}
