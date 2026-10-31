import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Abhishek - Full Stack Engineer and Project Manager";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fafaf9",
          color: "#1c1917",
          padding: "72px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            color: "#78716c",
            fontSize: "30px",
          }}
        >
          <span>Abhishek</span>
          <span style={{ color: "#f97316" }}>abhias.com</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <h1
            style={{
              margin: 0,
              maxWidth: "980px",
              fontSize: "76px",
              lineHeight: 0.95,
              letterSpacing: "-3px",
              fontWeight: 700,
            }}
          >
            Full Stack Engineer & Project Manager
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: "900px",
              color: "#57534e",
              fontSize: "32px",
              lineHeight: 1.35,
            }}
          >
            Real-time systems, AI-integrated backends, and production platforms
            across healthtech, hiring-tech, and edtech.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "16px",
            color: "#f97316",
            fontSize: "28px",
          }}
        >
          <span>Node.js</span>
          <span>NestJS</span>
          <span>Next.js</span>
          <span>PostgreSQL</span>
          <span>AI Agents</span>
        </div>
      </div>
    ),
    size,
  );
}
