import { CSSProperties } from "react";

const ANIMATION_STYLE = `
  @keyframes error404Pulse {
    0%   { filter: drop-shadow(0 0 0px rgba(242, 87, 48, 0)); }
    50%  { filter: drop-shadow(0 0 28px rgba(242, 87, 48, 0.55)); }
    100% { filter: drop-shadow(0 0 0px rgba(242, 87, 48, 0)); }
  }
  .error-404-number {
    animation: error404Pulse 3s ease-in-out infinite;
  }
`;

const FILM_GRAIN_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const wrapperStyle: CSSProperties = {
  minHeight: "100vh",
  backgroundColor: "#121211",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
};

const grainStyle: CSSProperties = {
  position: "fixed",
  inset: 0,
  zIndex: 9999,
  pointerEvents: "none",
  opacity: 0.045,
  mixBlendMode: "overlay",
  backgroundImage: FILM_GRAIN_URI,
};

const cardStyle: CSSProperties = {
  position: "relative",
  zIndex: 1,
  maxWidth: "560px",
  width: "100%",
  padding: "48px 32px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const eyebrowStyle: CSSProperties = {
  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
  fontSize: "12px",
  fontWeight: 500,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#F25730",
  margin: "0 0 16px",
};

const bigNumberStyle: CSSProperties = {
  fontFamily: "'Poppins', 'Helvetica Neue', Arial, sans-serif",
  fontWeight: 800,
  fontSize: "clamp(80px, 16vw, 160px)",
  lineHeight: 0.92,
  letterSpacing: "-0.03em",
  background: "linear-gradient(95deg, #F25730 0%, #F69874 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  margin: "0 0 24px",
};

const headlineStyle: CSSProperties = {
  fontFamily: "'Poppins', 'Helvetica Neue', Arial, sans-serif",
  fontWeight: 700,
  fontSize: "clamp(24px, 4vw, 36px)",
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
  color: "#FFFFFF",
  margin: "0 0 12px",
};

const descriptionStyle: CSSProperties = {
  fontFamily: "'Poppins', 'Helvetica Neue', Arial, sans-serif",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: 1.55,
  color: "#B4B1AC",
  margin: "0 0 36px",
  maxWidth: "420px",
};

const illustrationStyle: CSSProperties = {
  width: "280px",
  maxWidth: "100%",
  height: "auto",
  objectFit: "contain",
  margin: "0 0 40px",
  opacity: 0.9,
};

const buttonsRowStyle: CSSProperties = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
};

const primaryButtonStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F25730",
  color: "#FFFFFF",
  fontFamily: "'Poppins', 'Helvetica Neue', Arial, sans-serif",
  fontWeight: 600,
  fontSize: "15px",
  padding: "12px 28px",
  borderRadius: "8px",
  textDecoration: "none",
  border: "none",
  cursor: "pointer",
  boxShadow: "0 0 0 1px rgba(242,87,48,.35), 0 8px 30px rgba(242,87,48,.22)",
};

const secondaryButtonStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#212120",
  color: "#FFFFFF",
  fontFamily: "'Poppins', 'Helvetica Neue', Arial, sans-serif",
  fontWeight: 600,
  fontSize: "15px",
  padding: "12px 28px",
  borderRadius: "8px",
  textDecoration: "none",
  border: "1px solid #3C3B39",
  cursor: "pointer",
};

export const Error404 = ({
  headline = "Page not found",
  description = "The page you're looking for doesn't exist or has been moved.",
  primaryHref = "/",
  primaryLabel = "Back to home",
  secondaryHref,
  secondaryLabel = "Go back",
}: Props) => {
  return (
    <div style={wrapperStyle}>
      {/* Keyframe animation styles */}
      <style dangerouslySetInnerHTML={{ __html: ANIMATION_STYLE }} />

      {/* Film grain overlay — brand texture */}
      <div style={grainStyle} aria-hidden="true" />

      <div style={cardStyle}>
        {/* Eyebrow */}
        <p style={eyebrowStyle}>Error 404</p>

        {/* Large gradient 404 — with gentle orange pulse glow */}
        <div style={bigNumberStyle} className="error-404-number">404</div>

        {/* Headline */}
        <h1 style={headlineStyle}>{headline}</h1>

        {/* Description */}
        <p style={descriptionStyle}>{description}</p>

        {/* Robot illustration */}
        <img
          src="/images/error-404.svg"
          alt=""
          aria-hidden="true"
          style={illustrationStyle}
        />

        {/* Action buttons */}
        <div style={buttonsRowStyle}>
          <a href={primaryHref} style={primaryButtonStyle}>
            {primaryLabel}
          </a>

          {secondaryHref ? (
            <a href={secondaryHref} style={secondaryButtonStyle}>
              {secondaryLabel}
            </a>
          ) : (
            <button
              type="button"
              style={secondaryButtonStyle}
              onClick={() => {
                if (typeof window !== "undefined") window.history.back();
              }}
            >
              {secondaryLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

interface Props {
  headline?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}
