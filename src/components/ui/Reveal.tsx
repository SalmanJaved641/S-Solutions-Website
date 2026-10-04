"use client";
import { motion, useReducedMotion } from "motion/react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function Reveal({ className, children, ...props }: ComponentProps<typeof motion.div>) {
  const reduced = useReducedMotion();
  return <motion.div className={cn(className)} initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} {...props}>{children}</motion.div>;
}
