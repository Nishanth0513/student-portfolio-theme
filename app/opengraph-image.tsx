import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0F172A 0%, #1e293b 50%, #0F172A 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 24,
            background: "linear-gradient(135deg, #2563EB, #06B6D4, #7C3AED)",
            marginBottom: 32,
            fontSize: 48,
            fontWeight: 700,
            color: "white",
          }}
        >
          NR
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "white",
            marginBottom: 16,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
          }}
        >
          Full Stack Developer
        </div>
      </div>
    ),
    { ...size },
  );
}
