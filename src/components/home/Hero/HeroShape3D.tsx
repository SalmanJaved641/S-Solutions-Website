"use client";
import { useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef } from "react";

function BracketObject() {
  const group = useRef<THREE.Group>(null);
  const material = useMemo(() => new THREE.MeshPhysicalMaterial({ color: "#287ee8", metalness: .22, roughness: .14, transmission: .18, thickness: .8, clearcoat: 1, clearcoatRoughness: .08 }), []);
  const orange = useMemo(() => new THREE.MeshStandardMaterial({ color: "#f7941d", metalness: .35, roughness: .2, emissive: "#7a3400", emissiveIntensity: .22 }), []);
  useFrame((state, delta) => { if (!group.current) return; group.current.rotation.y += delta * .18; group.current.rotation.x = Math.sin(state.clock.elapsedTime * .42) * .08; group.current.position.y = Math.sin(state.clock.elapsedTime * .65) * .08; const pointer = state.pointer; group.current.rotation.y += (pointer.x * .18 - group.current.rotation.y * .02) * delta; });
  return <group ref={group} rotation={[.05, -.32, -.04]}>
    <mesh position={[-1.15, 0, 0]} rotation={[0, 0, Math.PI / 4]} material={material}><boxGeometry args={[.38, 1.95, .38]} /></mesh>
    <mesh position={[-1.15, 0, 0]} rotation={[0, 0, -Math.PI / 4]} material={material}><boxGeometry args={[.38, 1.95, .38]} /></mesh>
    <mesh position={[1.15, 0, 0]} rotation={[0, 0, -Math.PI / 4]} material={material}><boxGeometry args={[.38, 1.95, .38]} /></mesh>
    <mesh position={[1.15, 0, 0]} rotation={[0, 0, Math.PI / 4]} material={material}><boxGeometry args={[.38, 1.95, .38]} /></mesh>
    <mesh rotation={[0, 0, -.28]} material={orange}><boxGeometry args={[.3, 2.9, .42]} /></mesh>
  </group>;
}

export function HeroShapeFallback() { return <div className="relative grid aspect-square w-full max-w-md place-items-center" aria-hidden="true"><div className="code-orbit" /><div className="code-glyph"><span>&lt;</span><span className="text-secondary-500">/</span><span>&gt;</span></div><p className="absolute bottom-8 font-mono text-[.65rem] uppercase tracking-[.28em] text-white/35">Design · Code · Growth</p></div>; }

export default function HeroShape3D() {
  const [fallback] = useState(() => { const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches; const touch = matchMedia("(hover: none)").matches; try { return reduced || touch || !Boolean(document.createElement("canvas").getContext("webgl2") || document.createElement("canvas").getContext("webgl")); } catch { return true; } });
  const [visible, setVisible] = useState(true);
  const wrapper = useRef<HTMLDivElement>(null);
  useEffect(() => { const node = wrapper.current; if (!node) return; const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting)); observer.observe(node); return () => observer.disconnect(); }, []);
  if (fallback) return <HeroShapeFallback />;
  return <div ref={wrapper} className="relative aspect-square w-full max-w-md" aria-hidden="true"><div className="absolute inset-[8%] rounded-full bg-primary-500/10 blur-3xl" /><Canvas frameloop={visible && !document.hidden ? "always" : "never"} dpr={[1, 1.35]} camera={{ position: [0, 0, 6.2], fov: 42 }} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}><ambientLight intensity={1.6} /><directionalLight position={[3, 4, 5]} intensity={3.2} color="#8ec5ff" /><pointLight position={[-4, -1, 3]} intensity={2.5} color="#f7941d" /><BracketObject /></Canvas><p className="absolute inset-x-0 bottom-8 text-center font-mono text-[.65rem] uppercase tracking-[.28em] text-white/35">Design · Code · Growth</p></div>;
}
