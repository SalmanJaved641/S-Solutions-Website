import Image from "next/image";
import { assets } from "@/config/assets";
import { cn } from "@/lib/cn";

export function BrandMark({ full = false, className }: { full?: boolean; className?: string }) {
  const src = full ? assets.logoFull : assets.logoIcon;
  if (src) return <span className={cn("inline-flex items-center gap-2", className)}>
    <Image src={src} alt="S Solutions" width={40} height={40} className="size-10 shrink-0 object-contain" />
    {full && <span className="font-heading text-lg font-bold tracking-[-0.03em]"><span className="text-secondary-500">S</span> SOLUTIONS</span>}
  </span>;
  return <span className={cn("inline-flex items-center gap-2", className)} aria-label="S Solutions"><span className="brand-mark" aria-hidden="true">S</span>{full && <span className="font-heading text-lg font-bold tracking-[-0.03em]"><span className="text-secondary-500">S</span> SOLUTIONS</span>}</span>;
}
