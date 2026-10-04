import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCta() { return <section id="contact-cta" className="bg-bg pb-24 pt-8 md:pb-32"><Container><Reveal className="cta-panel relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-14 lg:py-14"><div className="relative z-10 max-w-2xl"><h2 className="font-heading text-[clamp(2rem,4.5vw,4.2rem)] font-semibold leading-[1.02] tracking-[-.05em]">Want to grow your business? Let&apos;s Talk</h2><p className="mt-5 max-w-xl text-sm leading-7 text-muted">Our mission is to empower businesses to thrive in the digital age. We believe in the transformative power of technology &amp; creativity.</p></div><Button href="/contact" className="relative z-10 mt-8 shrink-0 lg:mt-0" icon={<ArrowUpRight size={17} />}>Contact US</Button></Reveal></Container></section>; }
