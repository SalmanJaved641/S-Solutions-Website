import { aboutContent } from "@/content/about";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() { return <section id="about" className="section-space bg-bg"><Container><Reveal><SectionHeading eyebrow={aboutContent.eyebrow} title={aboutContent.title} sideText={aboutContent.body} /></Reveal><div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">{aboutContent.values.map((value, index) => <Reveal key={value} className="bg-bg p-7" style={{ transitionDelay: `${index * 80}ms` }}><p className="font-heading text-xl font-semibold">{value}</p></Reveal>)}</div></Container></section>; }
