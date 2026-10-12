import { brandsMarquee } from "@/content/marquees";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
export function BrandsMarquee() { return <section id="brands" className="bg-bg py-12"><Container><p className="mb-7 text-center font-mono text-[.65rem] uppercase tracking-[.2em] text-white/35">Industries and brands in motion</p><Marquee items={brandsMarquee} /></Container></section>; }
