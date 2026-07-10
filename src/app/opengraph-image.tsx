import { ImageResponse } from "next/og";

export const alt = "Md Nishath Khandakar — Full-Stack Developer & AI Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0908",
          backgroundImage:
            "radial-gradient(ellipse 70% 55% at 50% 42%, rgba(201,162,78,0.22), transparent 70%)",
          color: "#f5f0e6",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 10,
            color: "#c9a24e",
            textTransform: "uppercase",
            marginBottom: 36,
          }}
        >
          Premium · Full-Stack · AI-Powered
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Md Nishath Khandakar
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            marginTop: 24,
            color: "#d9b876",
          }}
        >
          Full-Stack Developer &amp; AI Builder
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginTop: 56,
            fontSize: 24,
            color: "#8a8272",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <span>7+ Years Experience</span>
          <span style={{ color: "#c9a24e" }}>·</span>
          <span>Any Stack</span>
          <span style={{ color: "#c9a24e" }}>·</span>
          <span>mdnishath.com</span>
        </div>
      </div>
    ),
    size,
  );
}
