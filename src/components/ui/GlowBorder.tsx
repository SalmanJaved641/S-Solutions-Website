import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
export function GlowBorder({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) { return <div className={cn("glow-border rounded-3xl p-px", className)} {...props}><div className="h-full rounded-[calc(1.5rem-1px)] bg-bg">{children}</div></div>; }
