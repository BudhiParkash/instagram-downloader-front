import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 35%, #a21caf 70%, #ec4899 100%)",
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
            Instagram Downloader
          </div>
          <div style={{ marginTop: 18, fontSize: 30, color: "#334155" }}>
            Reels • Videos • Photos • Carousel
          </div>
          <div style={{ marginTop: 34, fontSize: 22, color: "#475569" }}>
            Paste a public link, preview media, and download instantly — no login.
          </div>
          <div style={{ marginTop: 38, display: "flex", gap: 12, fontSize: 18, color: "#0f172a" }}>
            {["Free", "Fast", "Mobile-friendly"].map((x) => (
              <div
                key={x}
                style={{
                  padding: "10px 16px",
                  borderRadius: 999,
                  background: "rgba(15,23,42,0.06)",
                }}
              >
                {x}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}

