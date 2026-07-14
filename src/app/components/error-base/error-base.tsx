export type ErrorBaseProps = {
  errorCode: string;
  title: string;
  description: string;
  suggestions?: string[];
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  imageUrl?: string;
  titleColor?: string;
};

export const ErrorBase = ({
  errorCode,
  title,
  description,
  suggestions,
  primaryAction,
  secondaryAction,
  imageUrl,
  titleColor,
}: ErrorBaseProps) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0B0B0A",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial glow backdrop */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, rgba(242,87,48,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Film grain texture */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          pointerEvents: "none",
          opacity: 0.045,
          mixBlendMode: "overlay",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        style={{
          textAlign: "center",
          maxWidth: "520px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Eyebrow label */}
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#7C7A75",
            margin: "0 0 12px",
            fontFamily: "monospace",
          }}
        >
          HTTP Error
        </p>

        {/* Error code */}
        <div
          style={{
            fontSize: "clamp(7rem, 18vw, 10rem)",
            fontWeight: 900,
            lineHeight: 1,
            color: "#F25730",
            margin: "0 0 24px",
            textShadow:
              "0 0 60px rgba(242,87,48,0.35), 0 0 120px rgba(242,87,48,0.15)",
            letterSpacing: "-0.04em",
          }}
        >
          {errorCode}
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            fontWeight: 700,
            color: titleColor ?? "#FFFFFF",
            margin: "0 0 12px",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          {title}
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.6,
            color: "#B4B1AC",
            margin: "0 auto 32px",
            maxWidth: "400px",
          }}
        >
          {description}
        </p>

        {/* Suggestions */}
        {suggestions && suggestions.length > 0 && (
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 32px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
            }}
          >
            {suggestions.map((s, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  color: "#8A8680",
                }}
              >
                <span style={{ color: "#4FB477" }}>&#10003;</span>
                {s}
              </li>
            ))}
          </ul>
        )}

        {/* Action buttons */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href={primaryAction.href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 24px",
              background: "#F25730",
              color: "#FFFFFF",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
              cursor: "pointer",
              transition: "background 0.15s ease, transform 0.12s ease",
              boxShadow:
                "0 0 0 1px rgba(242,87,48,0.35), 0 4px 16px rgba(242,87,48,0.25)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#ED5339";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#F25730";
              el.style.transform = "translateY(0)";
            }}
          >
            {primaryAction.label}
          </a>

          {secondaryAction && (
            <a
              href={secondaryAction.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 24px",
                background: "transparent",
                color: "#B4B1AC",
                borderRadius: "8px",
                fontWeight: 500,
                fontSize: "14px",
                textDecoration: "none",
                border: "1px solid #3C3B39",
                cursor: "pointer",
                transition: "border-color 0.15s ease, color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#7C7A75";
                el.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#3C3B39";
                el.style.color = "#B4B1AC";
              }}
            >
              {secondaryAction.label}
            </a>
          )}
        </div>

        {/* Optional image decoration */}
        {imageUrl && (
          <div
            style={{
              marginTop: "48px",
              opacity: 0.12,
            }}
          >
            <img
              src={imageUrl}
              alt=""
              aria-hidden="true"
              style={{
                maxWidth: "280px",
                width: "100%",
                margin: "0 auto",
                display: "block",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
