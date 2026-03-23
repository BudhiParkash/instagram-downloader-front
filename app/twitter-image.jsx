import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #2563eb 40%, #a855f7 75%, #fb7185 100%)",
        }}
      >
        <div
          style={{
            width: 1040,
            height: 470,
            borderRadius: 48,
            background: "rgba(255,255,255,0.92)",
            boxShadow: "0 30px 90px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 64,
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 800, color: "#0f172a", lineHeight: 1.1 }}>
            InstaDownloader
          </div>
          <div style={{ marginTop: 18, fontSize: 30, color: "#334155" }}>
            Download Reels, Videos, Photos & Carousel
          </div>
          <div style={{ marginTop: 34, fontSize: 22, color: "#475569" }}>
            Preview first, then download — no login required.
          </div>
        </div>
      </div>
    ),
    size
  );
}

