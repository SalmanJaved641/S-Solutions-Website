"use client";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export function FlipCard({ front, back, className, label }: { front: ReactNode; back: ReactNode; className?: string; label: string }) {
  const [flipped, setFlipped] = useState(false);
  return <button type="button" aria-label={`${label}. Flip card for details.`} aria-pressed={flipped} onClick={() => setFlipped((value) => !value)} className={cn("flip-card group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-4 focus-visible:ring-offset-bg", flipped && "is-flipped", className)}>
    <span className="flip-card-inner block h-full"><span className="flip-face block h-full">{front}</span><span className="flip-face flip-back block h-full">{back}</span></span>
  </button>;
}
