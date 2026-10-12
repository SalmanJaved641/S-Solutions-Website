"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { headerNav } from "@/config/nav";
import { useHeaderExpanded } from "@/hooks/useScrollDirection";
import { BrandMark } from "./BrandMark";
import { MobileMenu } from "./MobileMenu";

function Status() {
  return (
    <span className="flex items-center gap-2 whitespace-nowrap text-xs font-medium text-white/75">
      Available for work
      <span className="online-dot" aria-hidden="true" />
    </span>
  );
}

export function Header() {
  const expanded = useHeaderExpanded();
  const reduced = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-3 sm:top-5">
      <motion.div
        layout={!reduced}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        className={`glass-header header-shell ${expanded ? "is-expanded" : "is-collapsed"} pointer-events-auto relative mx-auto flex h-16 items-center justify-between rounded-full px-2.5 min-[900px]:px-3`}
      >
        <Link
          href="/"
          aria-label="S Solutions home"
          className="flex size-11 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
        >
          <BrandMark />
        </Link>
        <AnimatePresence initial={false} mode="popLayout">
          {expanded ? (
            <motion.nav
              key="nav"
              aria-label="Primary navigation"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              className="hidden items-center gap-1 min-[900px]:flex"
            >
              {headerNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative rounded-full px-4 py-2 text-sm text-white/65 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </motion.nav>
          ) : (
            <motion.div
              key="status"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="hidden min-[900px]:block"
            >
              <Status />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="hidden min-[900px]:block">
          <AnimatePresence initial={false} mode="wait">
            {expanded ? (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
              >
                <Link
                  href="/contact"
                  className="flex min-h-11 items-center gap-3 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 py-1.5 pl-5 pr-1.5 text-sm font-semibold shadow-[0_8px_30px_rgba(31,111,219,0.3)] transition hover:brightness-110"
                >
                  Contact
                  <span className="grid size-8 place-items-center rounded-full bg-white text-primary-600">
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              </motion.div>
            ) : (
              <span className="block size-11" />
            )}
          </AnimatePresence>
        </div>
        <div className="contents min-[900px]:hidden">
          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2">
            <Status />
          </div>
          <button
            className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/5"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      </motion.div>
    </header>
  );
}
