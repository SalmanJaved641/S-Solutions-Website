"use client";
import { useEffect, useState } from "react";

export function useHeaderExpanded() {
  const [expanded, setExpanded] = useState(true);
  useEffect(() => {
    let previous = window.scrollY;
    let accumulated = 0;
    let direction = 0;
    let ticking = false;
    const update = () => {
      const current = window.scrollY;
      const delta = current - previous;
      const nextDirection = Math.sign(delta);

      if (current < 40) {
        setExpanded(true);
        accumulated = 0;
      } else if (nextDirection !== 0) {
        accumulated = nextDirection === direction ? accumulated + delta : delta;
        direction = nextDirection;

        if (accumulated >= 8) {
          setExpanded(false);
          accumulated = 0;
        } else if (accumulated <= -8) {
          setExpanded(true);
          accumulated = 0;
        }
      }
      previous = current;
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return expanded;
}
