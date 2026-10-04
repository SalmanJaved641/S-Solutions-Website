import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "glass" | "ghost";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { href?: string; variant?: Variant; icon?: ReactNode; external?: boolean }

const styles: Record<Variant, string> = {
  primary: "border-primary-400/30 bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-[0_10px_35px_rgba(31,111,219,.25)] hover:-translate-y-0.5 hover:shadow-[0_14px_42px_rgba(31,111,219,.38)]",
  secondary: "border-secondary-400/30 bg-secondary-500 text-slate-950 hover:-translate-y-0.5 hover:bg-secondary-400",
  glass: "border-white/15 bg-white/5 text-white hover:-translate-y-0.5 hover:border-primary-400/50 hover:bg-white/10",
  ghost: "border-transparent bg-transparent text-white hover:bg-white/5",
};

export function Button({ href, variant = "primary", icon, children, className, external, type = "button", ...props }: ButtonProps) {
  const classes = cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50", styles[variant], className);
  const content = <>{children}{icon}</>;
  if (href) return <Link href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{content}</Link>;
  return <button type={type} className={classes} {...props}>{content}</button>;
}
