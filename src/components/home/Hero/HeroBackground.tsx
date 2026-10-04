"use client";
import { useEffect, useRef } from "react";

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const section = canvas?.parentElement;
    const context = canvas?.getContext("2d");
    if (!canvas || !section || !context) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let visible = true, frame = 0, width = 0, height = 0;
    const resize = () => { const rect = section.getBoundingClientRect(); const dpr = Math.min(devicePixelRatio, 1.25); width = rect.width; height = rect.height; canvas.width = width * dpr; canvas.height = height * dpr; canvas.style.width = `${width}px`; canvas.style.height = `${height}px`; context.setTransform(dpr, 0, 0, dpr, 0, 0); };
    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "#00050f"; context.fillRect(0, 0, width, height);
      const t = reduced ? 0 : time * .000035;
      const blobs = [
        { x: .16 + Math.sin(t * 1.2) * .1, y: .28 + Math.cos(t) * .08, r: .58, color: "rgba(28,53,122,.5)" },
        { x: .77 + Math.cos(t * .8) * .12, y: .22 + Math.sin(t * 1.3) * .1, r: .48, color: "rgba(51,70,139,.36)" },
        { x: .58 + Math.sin(t * .65) * .16, y: .78 + Math.cos(t * 1.1) * .1, r: .55, color: "rgba(15,33,77,.56)" },
      ];
      blobs.forEach((blob) => { const radius = Math.max(width, height) * blob.r; const gradient = context.createRadialGradient(width * blob.x, height * blob.y, 0, width * blob.x, height * blob.y, radius); gradient.addColorStop(0, blob.color); gradient.addColorStop(.55, blob.color.replace(/\.[0-9]+\)/, ".12)")); gradient.addColorStop(1, "rgba(0,5,15,0)"); context.fillStyle = gradient; context.fillRect(0, 0, width, height); });
      if (!reduced && visible && !document.hidden) frame = requestAnimationFrame(draw);
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; cancelAnimationFrame(frame); if (visible) frame = requestAnimationFrame(draw); });
    const visibility = () => { cancelAnimationFrame(frame); if (!document.hidden && visible) frame = requestAnimationFrame(draw); };
    resize(); draw(); observer.observe(section); window.addEventListener("resize", resize); document.addEventListener("visibilitychange", visibility);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener("resize", resize); document.removeEventListener("visibilitychange", visibility); };
  }, []);
  return <div className="absolute inset-0 overflow-hidden" aria-hidden="true"><canvas ref={canvasRef} className="absolute inset-0" /><div className="hero-noise absolute inset-0 opacity-[.055]" /><div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent to-bg" /></div>;
}
