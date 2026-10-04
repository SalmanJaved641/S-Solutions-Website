"use client";
import dynamic from "next/dynamic";
import { HeroShapeFallback } from "./HeroShape3D";

const Scene = dynamic(() => import("./HeroShape3D"), { ssr: false, loading: () => <HeroShapeFallback /> });
export function HeroShape() { return <div className="mx-auto hidden w-full max-w-md place-items-center lg:grid"><Scene /></div>; }
