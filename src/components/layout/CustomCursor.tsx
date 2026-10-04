"use client";
import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;
    const node = cursorRef.current;
    if (!node) return;
    document.documentElement.classList.add("custom-cursor-active");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let targetX = -100, targetY = -100, currentX = -100, currentY = -100, scale = 1, targetScale = 1, hoverScale = 1, frame = 0;
    const tick = () => {
      currentX += (targetX - currentX) * (reduced ? 1 : 0.22);
      currentY += (targetY - currentY) * (reduced ? 1 : 0.22);
      scale += (targetScale - scale) * (reduced ? 1 : 0.3);
      node.style.transform = `translate3d(${currentX - 13}px,${currentY - 13}px,0) scale(${scale})`;
      frame = requestAnimationFrame(tick);
    };
    const move = (event: PointerEvent) => { targetX = event.clientX; targetY = event.clientY; node.dataset.visible = "true"; };
    const leave = () => { node.dataset.visible = "false"; };
    const over = (event: PointerEvent) => { const target = event.target as HTMLElement; hoverScale = target.closest("a,button,[role='button'],[data-cursor='interactive']") ? 1.28 : target.closest("input,textarea,select") ? 0.62 : 1; targetScale = hoverScale; };
    const down = () => { targetScale *= 0.78; };
    const up = () => { targetScale = hoverScale; };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);
  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
