import { ArrowUpRight, Check } from "lucide-react";
import { pricingContent } from "@/content/pricing";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";

const details = ["What you need built or run", "Custom functionality, integrations and scale", "The pace required to go live", "Maintenance, support or continued management"];
export function Pricing() { return <section id="pricing" className="section-space bg-bg"><Container><Reveal className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[.035] p-6 sm:p-10 lg:p-14"><div className="mx-auto max-w-3xl text-center"><Tag>{pricingContent.eyebrow}</Tag><h2 className="mt-6 font-heading text-[clamp(2.7rem,6vw,5rem)] font-semibold leading-none tracking-[-.055em]">{pricingContent.heading}</h2><p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base">{pricingContent.subtext}</p></div><div className="mt-10 grid gap-3 sm:grid-cols-2">{pricingContent.factors.map((factor, index) => <div key={factor} className="flex gap-4 rounded-2xl border border-white/8 bg-black/20 p-5"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary-500/15 text-primary-400"><Check size={15} /></span><div><h3 className="font-heading font-semibold">{factor}</h3><p className="mt-2 text-xs leading-5 text-muted">{details[index]}</p></div></div>)}</div><div className="mt-9 flex justify-center"><Button href="/contact" icon={<ArrowUpRight size={16} />}>{pricingContent.buttonLabel}</Button></div></Reveal></Container></section>; }
