import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";
import { footerNav } from "@/config/nav";
import { footerContent } from "@/content/footer";
import { Container } from "@/components/ui/Container";
import { BrandMark } from "./BrandMark";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.34 0 .67.06.97.17v-3.5a6.37 6.37 0 0 0-.97-.08 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.05a8.28 8.28 0 0 0 4.76 1.5V7.1a4.83 4.83 0 0 1-1-.41z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
    </svg>
  );
}

const socialPlatforms = [
  { key: "facebook", label: "Facebook", icon: FacebookIcon },
  { key: "instagram", label: "Instagram", icon: InstagramIcon },
  { key: "tiktok", label: "TikTok", icon: TikTokIcon },
  { key: "linkedin", label: "LinkedIn", icon: LinkedInIcon },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/8 bg-bg py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_.75fr_1fr]">
          <div>
            <BrandMark full />
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted">{footerContent.tagline}</p>
            <p className="mt-7 font-mono text-[0.68rem] uppercase tracking-[.18em] text-white/45">
              {footerContent.socialLabel}
            </p>
            <div className="mt-3 flex gap-2.5">
              {socialPlatforms.map(({ key, label, icon: Icon }) => {
                const url = siteConfig.social[key];
                return (
                  <a
                    key={key}
                    href={url}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative grid size-11 place-items-center overflow-hidden rounded-full border border-white/10 bg-white/[.03] transition duration-300 hover:border-secondary-500 hover:shadow-[0_0_18px_rgba(247,148,29,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 rounded-full bg-secondary-500 transition-transform duration-[350ms] ease-out group-hover:scale-y-100 group-focus-visible:scale-y-100"
                    />
                    <Icon className="relative z-10 size-[21px] text-white/80 transition-colors duration-[350ms] group-hover:text-[#00050f] group-focus-visible:text-[#00050f]" />
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="font-heading text-base font-semibold">{footerContent.companyLabel}</h2>
            <nav aria-label="Footer navigation" className="mt-5 grid gap-3">
              {footerNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-muted transition hover:text-primary-400"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="font-heading text-base font-semibold">{footerContent.contactLabel}</h2>
            <div className="mt-5 grid gap-4 text-sm text-muted">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Mail className="mt-0.5 size-4 text-primary-400" />
                {siteConfig.email}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <MessageCircle className="mt-0.5 size-4 text-primary-400" />
                {siteConfig.phoneInternationalDisplay}
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-primary-400" />
                {siteConfig.location}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-7 text-center text-xs text-white/45 sm:flex-row">
          <p>© {year} | {footerContent.copyrightLabel}</p>
          <p>
            {footerContent.poweredByLabel}{" "}
            <a
              href={siteConfig.portfolioUrl || "#"}
              target={siteConfig.portfolioUrl ? "_blank" : undefined}
              rel={siteConfig.portfolioUrl ? "noopener noreferrer" : undefined}
              className="font-semibold text-primary-400 hover:underline"
            >
              S Solutions
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
