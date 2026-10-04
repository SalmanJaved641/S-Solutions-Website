import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";
import { footerNav } from "@/config/nav";
import { footerContent } from "@/content/footer";
import { Container } from "@/components/ui/Container";
import { BrandMark } from "./BrandMark";

const socialLabels = ["facebook", "instagram", "linkedin", "tiktok"] as const;
const socialGlyphs = { facebook: "f", instagram: "◎", linkedin: "in", tiktok: "♪" };

export function Footer() {
  const year = new Date().getFullYear();
  return <footer className="border-t border-white/8 bg-bg py-16 sm:py-20">
    <Container>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_.75fr_1fr]">
        <div><BrandMark full /><p className="mt-5 max-w-sm text-sm leading-7 text-muted">{footerContent.tagline}</p><p className="mt-7 font-mono text-[0.68rem] uppercase tracking-[.18em] text-white/45">{footerContent.socialLabel}</p><div className="mt-3 flex gap-2">{socialLabels.map((key) => { const url = siteConfig.social[key]; return <a key={key} href={url || "#"} aria-label={`${key[0].toUpperCase()}${key.slice(1)}${url ? "" : " (link coming soon)"}`} target={url ? "_blank" : undefined} rel={url ? "noopener noreferrer" : undefined} className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[.03] text-xs font-bold text-white/70 transition hover:border-primary-400/50 hover:text-white">{socialGlyphs[key]}</a>; })}</div></div>
        <div><h2 className="font-heading text-base font-semibold">{footerContent.companyLabel}</h2><nav aria-label="Footer navigation" className="mt-5 grid gap-3">{footerNav.map((item) => <Link key={item.href} href={item.href} className="w-fit text-sm text-muted transition hover:text-primary-400">{item.label}</Link>)}</nav></div>
        <div><h2 className="font-heading text-base font-semibold">{footerContent.contactLabel}</h2><div className="mt-5 grid gap-4 text-sm text-muted"><a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 transition hover:text-white"><Mail className="mt-0.5 size-4 text-primary-400" />{siteConfig.email}</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 transition hover:text-white"><MessageCircle className="mt-0.5 size-4 text-primary-400" />{siteConfig.phoneInternationalDisplay}</a><p className="flex items-start gap-3"><MapPin className="mt-0.5 size-4 text-primary-400" />{siteConfig.location}</p></div></div>
      </div>
      <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-7 text-center text-xs text-white/45 sm:flex-row"><p>© {year} | {footerContent.copyrightLabel}</p><p>{footerContent.poweredByLabel} <a href={siteConfig.portfolioUrl || "#"} target={siteConfig.portfolioUrl ? "_blank" : undefined} rel={siteConfig.portfolioUrl ? "noopener noreferrer" : undefined} className="font-semibold text-primary-400 hover:underline">S Solutions</a></p></div>
    </Container>
  </footer>;
}
