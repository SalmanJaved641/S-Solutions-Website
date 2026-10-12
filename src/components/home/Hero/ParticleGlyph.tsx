"use client";
import { useEffect, useRef } from "react";

const GLYPH = "</>";

interface Particle {
  hx: number; hy: number;
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  phase: number;
  twinkle: number;
}

export function ParticleGlyph() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let raf = 0;
    let visible = true;
    let last = performance.now();

    // Pointer state. `energy` accumulates from how fast the pointer moves and
    // decays every frame, so a fast swipe blasts particles wide while a still
    // cursor lets them drift home again.
    const pointer = { x: -9999, y: -9999, px: -9999, py: -9999, inside: false, energy: 0 };

    const sampleGlyph = (): { x: number; y: number }[] => {
      const off = document.createElement("canvas");
      off.width = Math.max(1, width);
      off.height = Math.max(1, height);
      const octx = off.getContext("2d", { willReadFrequently: true });
      if (!octx) return [];
      const fontSize = Math.min(width * 0.5, height * 0.66);
      octx.fillStyle = "#fff";
      octx.textAlign = "center";
      octx.textBaseline = "middle";
      octx.font = `700 ${fontSize}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;
      try { (octx as CanvasRenderingContext2D & { letterSpacing?: string }).letterSpacing = "-0.06em"; } catch { /* older browsers */ }
      octx.fillText(GLYPH, off.width / 2, off.height / 2);
      const { data } = octx.getImageData(0, 0, off.width, off.height);
      const gap = Math.max(2, Math.min(4, Math.round(fontSize / 90)));
      const points: { x: number; y: number }[] = [];
      for (let y = 0; y < off.height; y += gap) {
        for (let x = 0; x < off.width; x += gap) {
          if (data[(y * off.width + x) * 4 + 3] > 128) points.push({ x, y });
        }
      }
      return points;
    };

    const build = () => {
      const rect = wrap.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = sampleGlyph().map((p) => ({
        hx: p.x, hy: p.y,
        x: p.x + (Math.random() - 0.5) * 46,
        y: p.y + (Math.random() - 0.5) * 46,
        vx: 0, vy: 0,
        size: 1.1 + Math.random() * 1.2,
        phase: Math.random() * Math.PI * 2,
        twinkle: 0.6 + Math.random() * 1.6,
      }));
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#fff";
      ctx.globalAlpha = 0.85;
      for (const p of particles) ctx.fillRect(p.hx, p.hy, p.size, p.size);
      ctx.globalAlpha = 1;
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const step = Math.min(48, now - last) / 16.667;
      last = now;
      const t = now / 1000;

      const moved = pointer.inside ? Math.hypot(pointer.x - pointer.px, pointer.y - pointer.py) : 0;
      pointer.px = pointer.x;
      pointer.py = pointer.y;
      pointer.energy = Math.min(70, pointer.energy + moved * 0.55) * 0.9;

      const radius = 46 + pointer.energy * 1.5;
      const strength = pointer.energy * 0.075;

      ctx.clearRect(0, 0, width, height);

      if (pointer.inside && pointer.energy > 3) {
        const glow = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, radius);
        glow.addColorStop(0, "rgba(59,140,240,0.16)");
        glow.addColorStop(1, "rgba(59,140,240,0)");
        ctx.globalAlpha = 1;
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = "#fff";
      for (const p of particles) {
        p.vx += (p.hx - p.x) * 0.028 * step;
        p.vy += (p.hy - p.y) * 0.028 * step;
        if (strength > 0.02) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const d = Math.hypot(dx, dy);
          if (d < radius && d > 0.001) {
            const f = (1 - d / radius) * strength * step;
            p.vx += (dx / d) * f + (Math.random() - 0.5) * f * 0.7;
            p.vy += (dy / d) * f + (Math.random() - 0.5) * f * 0.7;
          }
        }
        const friction = Math.pow(0.88, step);
        p.vx *= friction;
        p.vy *= friction;
        p.x += p.vx * step;
        p.y += p.vy * step;
        ctx.globalAlpha = 0.5 + 0.4 * (0.5 + 0.5 * Math.sin(t * p.twinkle + p.phase));
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }
      ctx.globalAlpha = 1;
    };

    const start = () => {
      cancelAnimationFrame(raf);
      if (reduced) { drawStatic(); return; }
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; };

    build();
    start();

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.inside = true;
      if (pointer.px === -9999) { pointer.px = pointer.x; pointer.py = pointer.y; }
    };
    const onLeave = () => { pointer.inside = false; pointer.x = -9999; pointer.y = -9999; pointer.px = -9999; pointer.py = -9999; pointer.energy = 0; };

    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);

    const ro = new ResizeObserver(() => { build(); if (reduced) drawStatic(); });
    ro.observe(wrap);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !document.hidden) start(); else stop();
    });
    io.observe(wrap);

    const onVisibility = () => { if (document.hidden) stop(); else if (visible) start(); };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative aspect-square w-full max-w-md select-none" aria-hidden="true">
      <div className="absolute inset-[10%] rounded-full bg-primary-500/10 blur-3xl" />
      <canvas ref={canvasRef} className="relative block h-full w-full" />
    </div>
  );
}
