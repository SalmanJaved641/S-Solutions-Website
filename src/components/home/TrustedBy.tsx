import { trustedBy } from "@/content/marquees";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
export function TrustedBy() { return <section id="trusted-by" className="border-y border-white/6 bg-bg py-16"><Container><p className="mb-8 text-center text-xs text-white/45">{trustedBy.caption}</p><Marquee items={trustedBy.items} logoForward duration={32} /></Container></section>; }
