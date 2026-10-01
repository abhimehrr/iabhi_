import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Abhishek - AI Software Engineer and Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage(): ImageResponse {
  return new ImageResponse(
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
            fontSize: "82px",
            lineHeight: 0.95,
            letterSpacing: "-3px",
            fontWeight: 700,
          }}
        >
          AI Software Engineer & Full Stack Developer
        </h1>
        <p
          style={{
            margin: 0,
            maxWidth: "900px",
            color: "#57534e",
            fontSize: "34px",
            lineHeight: 1.35,
          }}
        >
          Production backends, ML workflows, DevOps pipelines, and scalable web
          platforms.
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
        <span>Next.js</span>
        <span>NestJS</span>
        <span>PostgreSQL</span>
        <span>AI Systems</span>
      </div>
    </div>,
    size,
  );
}
