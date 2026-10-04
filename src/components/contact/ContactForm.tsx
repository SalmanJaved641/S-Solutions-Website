"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { contactContent, serviceOptions } from "@/content/contact";
import { contactSchema } from "@/lib/validators";
import { siteConfig, whatsappUrl } from "@/config/site";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Record<string, string[]>;
export function ContactForm({ initialService = "" }: { initialService?: string }) {
  const validInitial = serviceOptions.includes(initialService as (typeof serviceOptions)[number]) ? initialService : "Other";
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("submitting"); setErrors({});
    const form = event.currentTarget;
    const input = Object.fromEntries(new FormData(form).entries());
    const parsed = contactSchema.safeParse(input);
    if (!parsed.success) { setErrors(parsed.error.flatten().fieldErrors as Errors); setStatus("idle"); return; }
    try { const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(parsed.data) }); const data = await response.json() as { ok: boolean; errors?: Errors }; if (!response.ok || !data.ok) { if (data.errors) setErrors(data.errors); setStatus("error"); return; } form.reset(); setStatus("success"); }
    catch { setStatus("error"); }
  }
  const fieldClass = "mt-2 min-h-12 w-full rounded-xl border border-white/10 bg-black/25 px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/15";
  const error = (name: string) => errors[name]?.[0];
  return <div className="rounded-[2rem] border border-white/10 bg-white/[.035] p-5 sm:p-8"><h2 className="font-heading text-2xl font-semibold">{contactContent.formHeading}</h2><p className="mt-2 text-xs text-white/45">{contactContent.formIntro}</p><form className="mt-7 grid gap-5" onSubmit={submit} noValidate>
    <div><label htmlFor="name" className="text-sm font-medium">Full name *</label><input id="name" name="name" autoComplete="name" required className={fieldClass} aria-invalid={Boolean(error("name"))} aria-describedby={error("name") ? "name-error" : undefined} />{error("name") && <p id="name-error" className="mt-2 text-xs text-red-300">{error("name")}</p>}</div>
    <div><label htmlFor="email" className="text-sm font-medium">Email *</label><input id="email" name="email" type="email" autoComplete="email" required className={fieldClass} aria-invalid={Boolean(error("email"))} aria-describedby={error("email") ? "email-error" : undefined} />{error("email") && <p id="email-error" className="mt-2 text-xs text-red-300">{error("email")}</p>}</div>
    <div><label htmlFor="phone" className="text-sm font-medium">WhatsApp / phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} /></div>
    <div><label htmlFor="service" className="text-sm font-medium">Service interested in *</label><select id="service" name="service" defaultValue={validInitial} className={fieldClass}>{serviceOptions.map((option) => <option key={option}>{option}</option>)}</select></div>
    <div><label htmlFor="message" className="text-sm font-medium">Message / project details *</label><textarea id="message" name="message" rows={6} required className={`${fieldClass} resize-y py-3`} aria-invalid={Boolean(error("message"))} aria-describedby={error("message") ? "message-error" : undefined} />{error("message") && <p id="message-error" className="mt-2 text-xs text-red-300">{error("message")}</p>}</div>
    <div className="absolute -left-[9999px]" aria-hidden="true"><label htmlFor="companyWebsite">Company website</label><input id="companyWebsite" name="companyWebsite" tabIndex={-1} autoComplete="off" /></div>
    <button disabled={status === "submitting"} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary-400/30 bg-gradient-to-r from-primary-600 to-primary-500 px-6 text-sm font-semibold transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 disabled:opacity-60">{status === "submitting" ? <><LoaderCircle className="animate-spin" size={17} />Sending…</> : <>Send enquiry<ArrowUpRight size={17} /></>}</button>
    <div aria-live="polite" className="text-sm leading-6">{status === "success" && <p className="rounded-xl border border-green-400/20 bg-green-400/8 p-4 text-green-200">{contactContent.success}</p>}{status === "error" && <p className="rounded-xl border border-red-400/20 bg-red-400/8 p-4 text-red-200">{contactContent.fallback} <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or <a className="underline" href={whatsappUrl}>WhatsApp</a>.</p>}</div>
  </form></div>;
}
