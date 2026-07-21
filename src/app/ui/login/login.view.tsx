import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

/* ── inline style helpers (typed to silence TS) ─────────────────── */
const S = (s: React.CSSProperties): React.CSSProperties => s;

/* ── Logo glyph shared by both panels ───────────────────────────── */
const LogoGlyph = () => (
  <div
    style={S({
      width: "30px",
      height: "30px",
      borderRadius: "8px",
      background:
        "linear-gradient(150deg, var(--aai-orange), var(--aai-orange-peach))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow:
        "0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)",
      flexShrink: 0,
    })}
  >
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      style={S({
        stroke: "#fff",
        fill: "none",
        strokeWidth: "2.2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      } as React.CSSProperties)}
    >
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
      <circle cx="12" cy="12" r="3.4" />
    </svg>
  </div>
);

/* ── Pipeline status row ─────────────────────────────────────────── */
const PipelineRow = ({
  nodeColor,
  nodeShadow,
  label,
  bold,
  time,
  isLast,
}: {
  nodeColor: string;
  nodeShadow: string;
  label: string;
  bold: string;
  time: string;
  isLast?: boolean;
}) => (
  <div style={S({ position: "relative" })}>
    {/* connector line down to next row */}
    {!isLast && (
      <div
        style={S({
          position: "absolute",
          left: "5px",
          top: "22px",
          width: "1px",
          bottom: "-11px",
          background: "var(--ink-400)",
        })}
      />
    )}
    <div
      style={S({
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "11px 0",
      })}
    >
      <div
        style={S({
          width: "11px",
          height: "11px",
          borderRadius: "50%",
          background: nodeColor,
          boxShadow: nodeShadow,
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        })}
      />
      <span
        style={S({
          fontFamily: "var(--font-mono-login)",
          fontSize: "12.5px",
          letterSpacing: "0.02em",
          color: "var(--fg-muted)",
          flex: 1,
          minWidth: 0,
        })}
      >
        <b
          style={S({
            color: "var(--fg)",
            fontWeight: 600,
            fontFamily: "var(--font-sans-login)",
          })}
        >
          {bold}
        </b>{" "}
        — {label}
      </span>
      <span
        style={S({
          fontFamily: "var(--font-mono-login)",
          fontSize: "11px",
          color: "var(--fg-faint)",
          flexShrink: 0,
        })}
      >
        {time}
      </span>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────────────── */

export const LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const onValueChange = (userId: UserId) => {
    const found = users.find((u) => u.id === userId);
    if (found) setSelectedValue(found);
  };

  const handleSSOClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.style.borderColor = "var(--aai-orange)";
    setTimeout(() => {
      btn.style.borderColor = "";
    }, 500);
  };

  /* ---- input focus / blur helpers ---- */
  const focusInput = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = "var(--aai-orange)";
    e.currentTarget.style.boxShadow = "0 0 0 3px var(--login-ring)";
  };
  const blurInput = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = "var(--ink-400)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <main
      style={S({
        position: "relative",
        minHeight: "100vh",
        background: "var(--ink-950)",
        color: "var(--fg)",
        fontFamily: "var(--font-sans-login)",
        WebkitFontSmoothing: "antialiased",
      })}
    >
      {/* ── Film grain overlay ── */}
      <div
        aria-hidden="true"
        style={S({
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          pointerEvents: "none",
          opacity: 0.045,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        })}
      />

      {/* ── Two-column grid shell ── */}
      <div
        style={S({
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          minHeight: "100vh",
        })}
        className="max-[920px]:grid-cols-1"
      >
        {/* ════════════════ BRAND PANEL (LEFT) ════════════════ */}
        <section
          className="max-[920px]:hidden"
          style={S({
            position: "relative",
            overflow: "hidden",
            background: "var(--ink-900)",
            borderRight: "1px solid var(--ink-400)",
            padding: "clamp(36px,4.5vw,64px)",
            display: "flex",
            flexDirection: "column",
          })}
        >
          {/* Radial glow layer */}
          <div
            aria-hidden="true"
            style={S({
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%), radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%)",
            })}
          />

          {/* All brand content sits above the glow */}
          <div style={S({ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" })}>
            {/* Wordmark */}
            <div
              style={S({
                display: "flex",
                alignItems: "center",
                gap: "11px",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "19px",
                letterSpacing: "-0.01em",
              })}
            >
              <LogoGlyph />
              <span>
                Autonomy
                <span style={S({ color: "var(--aai-orange)" })}>AI</span>
              </span>
              <div
                aria-hidden="true"
                style={S({
                  width: "1px",
                  height: "18px",
                  background: "var(--ink-400)",
                  margin: "0 3px",
                })}
              />
              <span
                style={S({
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "var(--fg-muted)",
                  letterSpacing: 0,
                })}
              >
                On-Call Agent
              </span>
            </div>

            {/* Narrative copy — vertically centred */}
            <div style={S({ margin: "auto 0", padding: "48px 0", maxWidth: "480px" })}>
              <p
                style={S({
                  fontFamily: "var(--font-mono-login)",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--aai-orange)",
                  margin: "0 0 22px",
                })}
              >
                Autonomous incident response
              </p>

              <h1
                style={S({
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(32px,3.6vw,48px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  margin: 0,
                  color: "var(--fg)",
                })}
              >
                Your on-call engineer that{" "}
                <span
                  style={S({
                    background:
                      "linear-gradient(95deg,var(--aai-orange),var(--aai-orange-peach))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  })}
                >
                  never sleeps.
                </span>
              </h1>

              <p
                style={S({
                  fontSize: "18px",
                  lineHeight: 1.55,
                  color: "var(--fg-muted)",
                  margin: "22px 0 0",
                  maxWidth: "420px",
                })}
              >
                From first alert to merged fix — the agent triages, investigates,
                and ships the patch while your team stays asleep.
              </p>

              {/* Pipeline status motif */}
              <div style={S({ marginTop: "40px" })}>
                <PipelineRow
                  nodeColor="var(--aai-blue)"
                  nodeShadow="0 0 0 4px rgba(159,210,237,.12)"
                  bold="Alert received"
                  label="latency spike, checkout-svc"
                  time="00:00"
                />
                <PipelineRow
                  nodeColor="var(--aai-warn)"
                  nodeShadow="0 0 0 4px rgba(232,161,60,.12)"
                  bold="Triaged & root-caused"
                  label="connection pool exhausted"
                  time="00:02"
                />
                <PipelineRow
                  nodeColor="var(--aai-ok)"
                  nodeShadow="0 0 0 4px rgba(79,180,119,.14)"
                  bold="Fix merged"
                  label="PR #1408, verified in staging"
                  time="00:09"
                  isLast
                />
              </div>
            </div>

            {/* Footer trust badges */}
            <div
              style={S({
                display: "flex",
                alignItems: "center",
                gap: "18px",
                fontFamily: "var(--font-mono-login)",
                fontSize: "11px",
                letterSpacing: "0.04em",
                color: "var(--fg-faint)",
                flexWrap: "wrap",
              })}
            >
              <span>SOC 2 Type II</span>
              <span
                aria-hidden="true"
                style={S({
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "var(--ink-300)",
                  flexShrink: 0,
                })}
              />
              <span>Runs in your infra</span>
              <span
                aria-hidden="true"
                style={S({
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "var(--ink-300)",
                  flexShrink: 0,
                })}
              />
              <span>150+ teams on-call</span>
            </div>
          </div>
        </section>

        {/* ════════════════ AUTH PANEL (RIGHT) ════════════════ */}
        <section
          style={S({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(28px,5vw,64px)",
            background: "var(--ink-900)",
          })}
        >
          <div style={S({ width: "100%", maxWidth: "392px" })}>
            {/* Mobile-only wordmark (hidden on desktop via brand panel visible) */}
            <div
              className="hidden max-[920px]:flex"
              style={S({
                alignItems: "center",
                gap: "11px",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "19px",
                letterSpacing: "-0.01em",
                marginBottom: "30px",
              })}
            >
              <LogoGlyph />
              <span>
                Autonomy
                <span style={S({ color: "var(--aai-orange)" })}>AI</span>
              </span>
            </div>

            {/* Heading */}
            <div style={S({ marginBottom: "30px" })}>
              <p
                style={S({
                  fontFamily: "var(--font-mono-login)",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--fg-faint)",
                  margin: "0 0 14px",
                })}
              >
                Sign in
              </p>
              <h2
                style={S({
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "30px",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  margin: 0,
                  color: "red",
                })}
              >
                Welcome back
              </h2>
              <p
                style={S({
                  fontSize: "15px",
                  lineHeight: 1.5,
                  color: "var(--fg-muted)",
                  margin: "9px 0 0",
                })}
              >
                Pick up where the agent left off.
              </p>
            </div>

            {/* SSO buttons */}
            <div
              style={S({
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "22px",
              })}
            >
              {/* GitHub */}
              <button
                type="button"
                onClick={handleSSOClick}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--ink-300)";
                  e.currentTarget.style.background = "var(--ink-600)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--ink-400)";
                  e.currentTarget.style.background = "var(--ink-700)";
                }}
                style={S({
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  fontFamily: "var(--font-sans-login)",
                  fontWeight: 600,
                  fontSize: "14px",
                  background: "var(--ink-700)",
                  color: "var(--fg)",
                  border: "1px solid var(--ink-400)",
                  borderRadius: "8px",
                  padding: "12px 16px",
                  cursor: "pointer",
                  transition:
                    "border-color .18s var(--login-ease-out), background .18s var(--login-ease-out)",
                })}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="17"
                  height="17"
                  style={S({ fill: "currentColor", flexShrink: 0 })}
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
                </svg>
                Continue with GitHub
              </button>

              {/* Google */}
              <button
                type="button"
                onClick={handleSSOClick}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--ink-300)";
                  e.currentTarget.style.background = "var(--ink-600)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--ink-400)";
                  e.currentTarget.style.background = "var(--ink-700)";
                }}
                style={S({
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  fontFamily: "var(--font-sans-login)",
                  fontWeight: 600,
                  fontSize: "14px",
                  background: "var(--ink-700)",
                  color: "var(--fg)",
                  border: "1px solid var(--ink-400)",
                  borderRadius: "8px",
                  padding: "12px 16px",
                  cursor: "pointer",
                  transition:
                    "border-color .18s var(--login-ease-out), background .18s var(--login-ease-out)",
                })}
              >
                {/* Google G icon – coloured paths on 48×48 viewBox */}
                <svg
                  viewBox="0 0 48 48"
                  width="17"
                  height="17"
                  style={S({ flexShrink: 0 })}
                  aria-hidden="true"
                >
                  <path
                    fill="#FFC107"
                    d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
                  />
                  <path
                    fill="#FF3D00"
                    d="m6.3 14.7 6.6 4.8C14.7 15.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.1-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C39.9 36.3 44 30.8 44 24c0-1.3-.1-2.3-.4-3.5z"
                  />
                </svg>
                Continue with Google
              </button>
            </div>

            {/* Divider */}
            <div
              style={S({
                display: "flex",
                alignItems: "center",
                gap: "14px",
                margin: "0 0 22px",
                color: "var(--fg-faint)",
              })}
            >
              <div
                style={S({ height: "1px", flex: 1, background: "var(--ink-400)" })}
              />
              <span
                style={S({
                  fontFamily: "var(--font-mono-login)",
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                })}
              >
                or
              </span>
              <div
                style={S({ height: "1px", flex: 1, background: "var(--ink-400)" })}
              />
            </div>

            {/* ── Main Form ── */}
            <Form
              method="post"
              style={S({ display: "flex", flexDirection: "column", gap: "16px" })}
            >
              {/* Email (visual only — no name attr) */}
              <div>
                <label
                  htmlFor="login-email"
                  style={S({
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--fg-muted)",
                    marginBottom: "7px",
                  })}
                >
                  Work email
                </label>
                <input
                  id="login-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  style={S({
                    width: "100%",
                    fontFamily: "var(--font-sans-login)",
                    fontSize: "15px",
                    color: "var(--fg)",
                    background: "var(--ink-500)",
                    border: "1px solid var(--ink-400)",
                    borderRadius: "8px",
                    padding: "12px 14px",
                    outline: "none",
                    transition:
                      "border-color .15s var(--login-ease-out), box-shadow .15s var(--login-ease-out)",
                  })}
                  onFocus={focusInput}
                  onBlur={blurInput}
                />
              </div>

              {/* Password (visual only — no name attr) */}
              <div>
                <div
                  style={S({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "7px",
                  })}
                >
                  <label
                    htmlFor="login-password"
                    style={S({
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "var(--fg-muted)",
                    })}
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    style={S({
                      fontSize: "12.5px",
                      color: "var(--aai-orange)",
                      textDecoration: "none",
                    })}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.textDecoration = "underline")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.textDecoration = "none")
                    }
                  >
                    Forgot password?
                  </a>
                </div>
                <div
                  style={S({ position: "relative", display: "flex", alignItems: "center" })}
                >
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••••••"
                    minLength={8}
                    style={S({
                      width: "100%",
                      fontFamily: "var(--font-sans-login)",
                      fontSize: "15px",
                      color: "var(--fg)",
                      background: "var(--ink-500)",
                      border: "1px solid var(--ink-400)",
                      borderRadius: "8px",
                      padding: "12px 42px 12px 14px",
                      outline: "none",
                      transition:
                        "border-color .15s var(--login-ease-out), box-shadow .15s var(--login-ease-out)",
                    })}
                    onFocus={focusInput}
                    onBlur={blurInput}
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((v) => !v)}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--fg-muted)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--fg-faint)")
                    }
                    style={S({
                      position: "absolute",
                      right: "6px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "var(--fg-faint)",
                      padding: "8px",
                      borderRadius: "6px",
                      display: "flex",
                      lineHeight: 0,
                    })}
                  >
                    {showPassword ? (
                      <svg
                        viewBox="0 0 24 24"
                        width="17"
                        height="17"
                        style={S({
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                        } as React.CSSProperties)}
                      >
                        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                        <line x1="3" y1="3" x2="21" y2="21" />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        width="17"
                        height="17"
                        style={S({
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.8",
                        } as React.CSSProperties)}
                      >
                        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <label
                style={S({
                  display: "flex",
                  alignItems: "center",
                  gap: "9px",
                  fontSize: "13.5px",
                  color: "var(--fg-muted)",
                  cursor: "pointer",
                  userSelect: "none",
                  marginTop: "2px",
                })}
              >
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  style={S({
                    position: "absolute",
                    opacity: 0,
                    width: 0,
                    height: 0,
                  })}
                />
                <span
                  aria-hidden="true"
                  style={S({
                    width: "17px",
                    height: "17px",
                    borderRadius: "5px",
                    border: `1px solid ${remember ? "var(--aai-orange)" : "var(--ink-300)"}`,
                    background: remember ? "var(--aai-orange)" : "var(--ink-500)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all .15s var(--login-ease-out)",
                    flexShrink: 0,
                  })}
                >
                  {remember && (
                    <svg
                      viewBox="0 0 24 24"
                      width="11"
                      height="11"
                      style={S({
                        stroke: "#fff",
                        fill: "none",
                        strokeWidth: "2.6",
                      } as React.CSSProperties)}
                    >
                      <path d="M5 12.5 10 17l9-10" />
                    </svg>
                  )}
                </span>
                Keep me signed in
              </label>

              {/* ── Demo user selector (functional) ── */}
              <div
                style={S({
                  borderTop: "1px solid var(--ink-400)",
                  paddingTop: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "7px",
                })}
              >
                <label
                  style={S({
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--fg-muted)",
                  })}
                >
                  Select demo user
                </label>
                <Select.Root
                  name="user"
                  defaultValue={userMock1.id}
                  onValueChange={onValueChange}
                >
                  <Select.Trigger
                    className="flex w-full justify-between"
                    aria-label="Open user select"
                  >
                    <div className="flex items-center gap-2">
                      <UserAvatar {...selectedValue} />
                      <Select.Value />
                    </div>
                    <Select.TriggerIcon />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.ScrollUpButton />
                    <Select.Viewport>
                      {users.map((user, index) => (
                        <Select.Item key={index} value={user.id}>
                          <Select.ItemIndicator />
                          <UserAvatar {...user} />
                          <Select.ItemText>{user.name}</Select.ItemText>
                        </Select.Item>
                      ))}
                      <Select.Separator />
                    </Select.Viewport>
                    <Select.ScrollDownButton />
                  </Select.Content>
                </Select.Root>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                name="_action"
                value="setUser"
                aria-label="Sign in"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--aai-orange-bright)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--aai-orange)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.background = "var(--aai-orange-deep)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                style={S({
                  marginTop: "4px",
                  width: "100%",
                  fontFamily: "var(--font-sans-login)",
                  fontWeight: 600,
                  fontSize: "15px",
                  background: "var(--aai-orange)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "13px 16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "9px",
                  boxShadow: "var(--glow-orange)",
                  transition:
                    "background .15s var(--login-ease-out), transform .12s var(--login-ease-out)",
                })}
              >
                Sign in
              </button>
            </Form>

            {/* Footnote */}
            <p
              style={S({
                marginTop: "26px",
                textAlign: "center",
                fontSize: "13.5px",
                color: "var(--fg-muted)",
              })}
            >
              New to the On-Call Agent?{" "}
              <a
                href="#"
                style={S({
                  color: "var(--aai-orange)",
                  textDecoration: "none",
                  fontWeight: 500,
                })}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
              >
                Request access
              </a>
            </p>

            {/* Security badge */}
            <div
              style={S({
                marginTop: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                fontFamily: "var(--font-mono-login)",
                fontSize: "11px",
                letterSpacing: "0.05em",
                color: "var(--fg-faint)",
              })}
            >
              <svg
                viewBox="0 0 24 24"
                width="13"
                height="13"
                aria-hidden="true"
                style={S({
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "1.8",
                } as React.CSSProperties)}
              >
                <rect x="4" y="11" width="16" height="10" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              Encrypted &amp; SSO-ready
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

interface Props {
  users: User[];
}
