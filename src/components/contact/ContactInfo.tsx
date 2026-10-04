import { Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/config/site";
import { Button } from "@/components/ui/Button";

const details = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "WhatsApp / Phone", value: siteConfig.phoneDisplay, href: whatsappUrl, icon: MessageCircle },
  { label: "Location", value: siteConfig.location, href: "", icon: MapPin },
];
export function ContactInfo() { return <div className="grid gap-3">{details.map(({ label, value, href, icon: Icon }) => { const content = <><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-500/12 text-primary-400"><Icon size={19} /></span><span><span className="block font-mono text-[.58rem] uppercase tracking-[.16em] text-white/40">{label}</span><span className="mt-1 block text-sm text-white/80">{value}</span></span></>; return href ? <a key={label} href={href} target={label.startsWith("WhatsApp") ? "_blank" : undefined} rel={label.startsWith("WhatsApp") ? "noopener noreferrer" : undefined} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.035] p-4 transition hover:border-primary-400/35">{content}</a> : <div key={label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.035] p-4">{content}</div>; })}<Button href={whatsappUrl} external variant="glass" className="mt-2 w-fit" icon={<MessageCircle size={16} />}>Chat on WhatsApp</Button></div>; }
