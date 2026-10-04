import { BarChart3, Code2, ShoppingBag, Smartphone } from "lucide-react";
import { cn } from "@/lib/cn";

const icons = { web: Code2, shopify: ShoppingBag, marketing: BarChart3, apps: Smartphone };
export function ServiceVisual({ id, className }: { id: keyof typeof icons; className?: string }) {
  const Icon = icons[id];
  return <div className={cn("service-visual relative grid min-h-44 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-black/20", className)} aria-hidden="true"><div className="absolute inset-5 rounded-xl border border-white/10" /><div className="absolute left-8 right-8 top-9 h-px bg-gradient-to-r from-primary-400/10 via-primary-400/60 to-secondary-400/15" /><Icon className="relative size-14 text-primary-400" strokeWidth={1.2} /><div className="absolute bottom-8 left-8 flex gap-2"><span className="h-1.5 w-16 rounded-full bg-primary-400/45" /><span className="h-1.5 w-8 rounded-full bg-secondary-400/45" /></div></div>;
}
