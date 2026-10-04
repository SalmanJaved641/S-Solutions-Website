import { cn } from "@/lib/cn";

export function SectionHeading({ title, sideText, className }: { eyebrow: string; title: string; sideText?: string; className?: string }) {
  return <div className={cn("grid gap-5 md:grid-cols-[1fr_minmax(15rem,26rem)] md:items-end", className)}><div><h2 className="font-heading text-[clamp(2.4rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.05em]">{title}</h2></div>{sideText && <p className="text-pretty text-sm leading-7 text-muted md:pb-2">{sideText}</p>}</div>;
}
