"use client";
import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { headerNav } from "@/config/nav";
import { Button } from "@/components/ui/Button";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);
  return <AnimatePresence>{open && <>
    <button aria-label="Close navigation" className="fixed inset-0 z-[-1] cursor-default" onClick={onClose} />
    <motion.div id="mobile-menu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="absolute inset-x-0 top-[calc(100%+0.6rem)] rounded-3xl border border-white/10 bg-[#07101f]/95 p-3 shadow-2xl backdrop-blur-2xl min-[900px]:hidden">
      <nav aria-label="Mobile navigation" className="grid gap-1">{headerNav.map((item) => <Link key={item.href} href={item.href} onClick={onClose} className="flex min-h-11 items-center rounded-2xl px-4 text-sm font-medium text-muted hover:bg-white/5 hover:text-white">{item.label}</Link>)}<Button href="/contact" icon={<ArrowUpRight size={16} />} className="mt-2 w-full" onClick={onClose}>Contact</Button></nav>
    </motion.div>
  </>}</AnimatePresence>;
}
