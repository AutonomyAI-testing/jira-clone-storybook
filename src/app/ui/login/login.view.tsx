import { User } from "@domain/user";

export const LoginView = ({ users: _users }: Props) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Film grain overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          pointerEvents: "none",
          opacity: 0.045,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Left brand panel */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#13171a",
          borderRight: "1px solid #2a3240",
          padding: "clamp(36px, 4.5vw, 64px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Warm off-axis glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%), radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%)",
          }}
        />

        {/* Wordmark */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            gap: 11,
            fontWeight: 800,
            fontSize: 19,
            letterSpacing: "-0.01em",
            color: "#e8e8e8",
          }}
        >
          <span
            style={{
              width: 30,
              height: 30,
              borderRadius: 8,
              flex: "none",
              background:
                "linear-gradient(150deg, #f25730, #f5a07a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow:
                "0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width={16}
              height={16}
              style={{
                stroke: "#fff",
                fill: "none",
                strokeWidth: 2.2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }}
            >
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
              <circle cx="12" cy="12" r="3.4" />
            </svg>
          </span>
          <span>
            Autonomy
            <span style={{ color: "#f25730" }}>AI</span>
          </span>
          <span
            style={{
              width: 1,
              height: 18,
              background: "#2a3240",
              margin: "0 3px",
            }}
          />
          <span
            style={{
              fontWeight: 500,
              fontSize: 14,
              color: "#8490a0",
              letterSpacing: 0,
            }}
          >
            On-Call Agent
          </span>
        </div>

        {/* Brand mid */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            marginTop: "auto",
            marginBottom: "auto",
            padding: "48px 0",
            maxWidth: 480,
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#f25730",
              margin: "0 0 22px",
            }}
          >
            Autonomous incident response
          </p>
          <h1
            style={{
              fontWeight: 800,
              fontSize: "clamp(32px, 3.6vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: 0,
              color: "#e8e8e8",
              textWrap: "balance" as any,
            }}
          >
            Your on-call engineer that{" "}
            <span
              style={{
                background:
                  "linear-gradient(95deg, #f25730, #f5a07a)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              never sleeps.
            </span>
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.55,
              color: "#8490a0",
              margin: "22px 0 0",
              maxWidth: 420,
            }}
          >
            From first alert to merged fix — the agent triages, investigates,
            and ships the patch while your team stays asleep.
          </p>

          {/* Pipeline status motif */}
          <div
            style={{
              marginTop: 40,
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
            aria-hidden="true"
          >
            {[
              {
                color: "#9fd2ed",
                glow: "rgba(159,210,237,.12)",
                label: "Alert received",
                sub: "— latency spike, checkout-svc",
                time: "00:00",
              },
              {
                color: "#e8a13c",
                glow: "rgba(232,161,60,.12)",
                label: "Triaged & root-caused",
                sub: "— connection pool exhausted",
                time: "00:02",
              },
              {
                color: "#4fb477",
                glow: "rgba(79,180,119,.14)",
                label: "Fix merged",
                sub: "— PR #1408, verified in staging",
                time: "00:09",
              },
            ].map((row, i, arr) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  position: "relative",
                  padding: "11px 0",
                }}
              >
                {i < arr.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      left: 5,
                      top: 22,
                      bottom: -1,
                      width: 1,
                      background: "#2a3240",
                    }}
                  />
                )}
                <span
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    flex: "none",
                    position: "relative",
                    zIndex: 1,
                    background: row.color,
                    boxShadow: `0 0 0 4px ${row.glow}`,
                  }}
                />
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 12.5,
                    letterSpacing: "0.02em",
                    color: "#8490a0",
                  }}
                >
                  <strong style={{ color: "#e8e8e8", fontWeight: 600 }}>
                    {row.label}
                  </strong>{" "}
                  {row.sub}
                </span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontFamily: "monospace",
                    fontSize: 11,
                    color: "#4a5568",
                  }}
                >
                  {row.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Brand footer */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontFamily: "monospace",
            fontSize: 11,
            letterSpacing: "0.04em",
            color: "#4a5568",
          }}
        >
          {["SOC 2 Type II", "Runs in your infra", "150+ teams on-call"].map(
            (text, i, arr) => (
              <span key={text} style={{ display: "contents" }}>
                <span>{text}</span>
                {i < arr.length - 1 && (
                  <span
                    aria-hidden="true"
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#2a3240",
                    }}
                  />
                )}
              </span>
            )
          )}
        </div>
      </div>

      {/* Right auth panel — shows only "Claude Fei" text in green */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#13171a",
        }}
      >
        <span
          style={{
            fontSize: "clamp(40px, 5vw, 72px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "var(--Green500)",
            border: "3px solid red",
            borderRadius: 8,
            padding: "8px 24px",
          }}
        >
          Claude Fei
        </span>
      </div>
    </div>
  );
};

interface Props {
  users: User[];
}
