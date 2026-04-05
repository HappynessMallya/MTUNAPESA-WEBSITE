import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "MTU NA PESA — Personal financial operating system";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "linear-gradient(145deg, #f7f8fa 0%, #e8eefc 45%, #f7f8fa 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#0f1729",
            }}
          />
          <span style={{ fontSize: 52, fontWeight: 700, color: "#0f1729", letterSpacing: -1 }}>
            MTU NA PESA
          </span>
        </div>
        <p
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: "#1e293b",
            lineHeight: 1.25,
            maxWidth: 900,
            margin: 0,
            letterSpacing: -0.5,
          }}
        >
          Personal financial OS · TZS, USD, KES, UGX · iOS & Android
        </p>
        <p
          style={{
            marginTop: 20,
            fontSize: 24,
            color: "#475569",
            maxWidth: 820,
            lineHeight: 1.4,
            marginBottom: 0,
          }}
        >
          Allocation, goals, loans, AI insights, and exports—built for Tanzania and beyond.
        </p>
      </div>
    ),
    { ...size },
  );
}
