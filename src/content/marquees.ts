import { assets } from "@/config/assets";

export interface MarqueeItem { name: string; logoSrc?: string }
export const brandsMarquee: MarqueeItem[] = Array.from({ length: 8 }, (_, index) => { const name = `Brand ${String(index + 1).padStart(2, "0")}`; return { name, logoSrc: assets.marqueeLogos[name] ?? undefined }; });
