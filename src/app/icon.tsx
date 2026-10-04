import { ImageResponse } from "next/og";
import { assets } from "@/config/assets";
import { siteConfig } from "@/config/site";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export default function Icon() { if (assets.favicon) return new ImageResponse(
  // ImageResponse requires a native image element for runtime rendering.
  // eslint-disable-next-line @next/next/no-img-element
  <img src={new URL(assets.favicon, siteConfig.siteUrl).toString()} width="64" height="64" alt="" />,
  size,
); return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 16, background: "linear-gradient(145deg,#3b8cf0,#1857b3)", color: "white", fontSize: 42, fontWeight: 800 }}>S</div>, size); }
