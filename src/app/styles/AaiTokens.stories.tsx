import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";

/* ------------------------------------------------------------------ */
/*  Helpers                                                             */
/* ------------------------------------------------------------------ */

function ColorSwatch({
  varName,
  label,
  textDark = false,
}: {
  varName: string;
  label: string;
  textDark?: boolean;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 100 }}>
      <div
        style={{
          width: "100%",
          height: 56,
          borderRadius: 8,
          background: `var(${varName})`,
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--text-on-dark-muted)",
          wordBreak: "break-all",
        }}
      >
        {varName}
      </span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-on-dark-faint)" }}>
        {label}
      </span>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 56 }}>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--aai-orange)",
          marginBottom: 20,
        }}
      >
        {title}
      </div>
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main showcase component                                             */
/* ------------------------------------------------------------------ */

function AaiTokensShowcase() {
  return (
    <div
      style={{
        background: "var(--ink-900)",
        minHeight: "100vh",
        padding: "48px 40px",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 64, borderBottom: "1px solid var(--ink-400)", paddingBottom: 40 }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--aai-orange)",
            marginBottom: 16,
          }}
        >
          AutonomyAI Design System
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: 1.04,
            letterSpacing: "-0.02em",
            color: "var(--text-on-dark)",
            margin: 0,
          }}
        >
          Token{" "}
          <span
            style={{
              background: "linear-gradient(95deg, var(--aai-orange) 0%, var(--aai-orange-peach) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Showcase
          </span>
        </h1>
        <p style={{ color: "var(--text-on-dark-muted)", marginTop: 12, fontSize: 16, fontFamily: "var(--font-sans)" }}>
          Colors · Typography · Semantic themes · Gradients
        </p>
      </div>

      {/* ── 1. COLOR PALETTE ── */}
      <section style={{ marginBottom: 56 }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "green",
            marginBottom: 20,
          }}
        >
          01 — Color Palette
        </div>
        {/* Brand */}
        <div style={{ marginBottom: 32 }}>
          <p style={{ color: "var(--text-on-dark-faint)", fontSize: 12, marginBottom: 12, fontFamily: "var(--font-mono)" }}>
            Brand
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: 16 }}>
            <ColorSwatch varName="--aai-orange" label="Primary accent" />
            <ColorSwatch varName="--aai-orange-bright" label="Hover / highlight" />
            <ColorSwatch varName="--aai-orange-deep" label="Pressed / dense" />
            <ColorSwatch varName="--aai-orange-peach" label="Gradient terminus" />
            <ColorSwatch varName="--aai-blue" label="Icy secondary" />
            <ColorSwatch varName="--aai-blue-deep" label="Secondary deep" />
          </div>
        </div>

        {/* Ink scale */}
        <div style={{ marginBottom: 32 }}>
          <p style={{ color: "var(--text-on-dark-faint)", fontSize: 12, marginBottom: 12, fontFamily: "var(--font-mono)" }}>
            Ink scale (warm charcoal)
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: 16 }}>
            <ColorSwatch varName="--ink-900" label="Page bg (dark)" />
            <ColorSwatch varName="--ink-800" label="Base panel" />
            <ColorSwatch varName="--ink-700" label="Raised card" />
            <ColorSwatch varName="--ink-600" label="Elevated surface" />
            <ColorSwatch varName="--ink-500" label="Icon tile / input" />
            <ColorSwatch varName="--ink-400" label="Hairline border" />
            <ColorSwatch varName="--ink-300" label="Strong border" />
          </div>
        </div>

        {/* Paper scale */}
        <div style={{ marginBottom: 32 }}>
          <p style={{ color: "var(--text-on-dark-faint)", fontSize: 12, marginBottom: 12, fontFamily: "var(--font-mono)" }}>
            Paper scale (light surfaces)
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: 16 }}>
            <ColorSwatch varName="--paper-0" label="Pure white" />
            <ColorSwatch varName="--paper-50" label="Warm off-white" />
            <ColorSwatch varName="--paper-100" label="Light bg" />
            <ColorSwatch varName="--paper-200" label="Hairline / divider" />
            <ColorSwatch varName="--paper-300" label="Subtle border" />
            <ColorSwatch varName="--paper-400" label="Muted" />
          </div>
        </div>

        {/* Status */}
        <div>
          <p style={{ color: "var(--text-on-dark-faint)", fontSize: 12, marginBottom: 12, fontFamily: "var(--font-mono)" }}>
            Status
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: 16 }}>
            <ColorSwatch varName="--ok" label="Pass / merge" />
            <ColorSwatch varName="--warn" label="Warning" />
            <ColorSwatch varName="--err" label="Error" />
            <ColorSwatch varName="--info" label="Info / icy" />
            <ColorSwatch varName="--pr-purple" label="PR / merge accent" />
          </div>
        </div>
      </section>

      {/* ── 2. TYPOGRAPHY SCALE ── */}
      <Section title="02 — Typography Scale (Poppins)">
        <div
          style={{
            background: "var(--ink-800)",
            borderRadius: 12,
            padding: 32,
            border: "1px solid var(--ink-400)",
          }}
        >
          {/* display */}
          <div style={{ marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid var(--ink-400)" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--aai-orange)",
                letterSpacing: "0.1em",
              }}
            >
              .aai-display
            </span>
            <div className="aai-display" style={{ marginTop: 8, fontSize: "clamp(32px, 5vw, 56px)" }}>
              Shipping Fast
            </div>
          </div>

          {/* h1 */}
          <div style={{ marginBottom: 28, paddingBottom: 28, borderBottom: "1px solid var(--ink-400)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--aai-orange)", letterSpacing: "0.1em" }}>
              .aai-h1
            </span>
            <div className="aai-h1" style={{ marginTop: 8, fontSize: "clamp(28px, 3.5vw, 48px)" }}>
              Deploy with Confidence
            </div>
          </div>

          {/* h2 */}
          <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid var(--ink-400)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--aai-orange)", letterSpacing: "0.1em" }}>
              .aai-h2
            </span>
            <div className="aai-h2" style={{ marginTop: 6, fontSize: "clamp(22px, 2.8vw, 36px)" }}>
              Observe Every Workflow
            </div>
          </div>

          {/* h3 */}
          <div style={{ marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid var(--ink-400)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--aai-orange)", letterSpacing: "0.1em" }}>
              .aai-h3
            </span>
            <div className="aai-h3" style={{ marginTop: 6 }}>
              Real-Time Trace Analysis
            </div>
          </div>

          {/* h4 */}
          <div style={{ marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid var(--ink-400)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--aai-orange)", letterSpacing: "0.1em" }}>
              .aai-h4
            </span>
            <div className="aai-h4" style={{ marginTop: 6 }}>
              Pipeline Configuration
            </div>
          </div>

          {/* body-lg */}
          <div style={{ marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid var(--ink-400)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--aai-orange)", letterSpacing: "0.1em" }}>
              .aai-body-lg
            </span>
            <div className="aai-body-lg" style={{ marginTop: 6, maxWidth: 600 }}>
              Fei Studio gives your engineering team full observability into AI agent runs — from prompt to deploy.
            </div>
          </div>

          {/* body */}
          <div style={{ marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid var(--ink-400)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--aai-orange)", letterSpacing: "0.1em" }}>
              .aai-body
            </span>
            <div className="aai-body" style={{ marginTop: 6, maxWidth: 560 }}>
              Track token usage, latency, and cost across every model call. Drill into any span for full context.
            </div>
          </div>

          {/* eyebrow */}
          <div style={{ marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid var(--ink-400)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--aai-orange)", letterSpacing: "0.1em" }}>
              .aai-eyebrow
            </span>
            <div className="aai-eyebrow" style={{ marginTop: 10 }}>
              New · Feature Release
            </div>
          </div>

          {/* mono */}
          <div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--aai-orange)", letterSpacing: "0.1em" }}>
              .aai-mono
            </span>
            <div className="aai-mono" style={{ marginTop: 8 }}>
              aai-agent run --env prod --trace-id tr_01J9K2X8Q
            </div>
          </div>
        </div>
      </Section>

      {/* ── 3. DARK vs LIGHT THEME ── */}
      <Section title="03 — Dark vs Light Theme">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {/* Dark panel */}
          <div
            style={{
              background: "var(--ink-900)",
              border: "1px solid var(--ink-400)",
              borderRadius: 12,
              padding: 28,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--aai-orange)",
                marginBottom: 20,
              }}
            >
              Default (Dark)
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { token: "--fg", label: "--fg (foreground)", value: "var(--text-on-dark)" },
                { token: "--fg-muted", label: "--fg-muted", value: "var(--text-on-dark-muted)" },
                { token: "--fg-faint", label: "--fg-faint", value: "var(--text-on-dark-faint)" },
              ].map(({ token, label, value }) => (
                <div key={token} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{ width: 32, height: 32, borderRadius: 6, background: value, border: "1px solid var(--ink-400)", flexShrink: 0 }}
                  />
                  <div>
                    <div style={{ color: value, fontFamily: "var(--font-mono)", fontSize: 13 }}>{label}</div>
                    <div style={{ color: "var(--text-on-dark-faint)", fontFamily: "var(--font-mono)", fontSize: 11 }}>{token}</div>
                  </div>
                </div>
              ))}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: 6, background: "var(--ink-700)", border: "1px solid var(--ink-400)", flexShrink: 0 }} />
                <div>
                  <div style={{ color: "var(--text-on-dark-muted)", fontFamily: "var(--font-mono)", fontSize: 13 }}>--surface</div>
                  <div style={{ color: "var(--text-on-dark-faint)", fontFamily: "var(--font-mono)", fontSize: 11 }}>raised card bg</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: 6, background: "var(--aai-orange)", flexShrink: 0 }} />
                <div>
                  <div style={{ color: "var(--text-on-dark-muted)", fontFamily: "var(--font-mono)", fontSize: 13 }}>--accent</div>
                  <div style={{ color: "var(--text-on-dark-faint)", fontFamily: "var(--font-mono)", fontSize: 11 }}>aai-orange #F25730</div>
                </div>
              </div>

              <button
                style={{
                  marginTop: 8,
                  padding: "10px 20px",
                  background: "var(--aai-orange)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: "pointer",
                  alignSelf: "flex-start",
                }}
              >
                Primary CTA
              </button>
            </div>
          </div>

          {/* Light panel */}
          <div
            className="theme-light"
            style={{
              background: "var(--paper-50)",
              border: "1px solid var(--paper-300)",
              borderRadius: 12,
              padding: 28,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--aai-orange)",
                marginBottom: 20,
              }}
            >
              theme-light
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { token: "--fg", label: "--fg (foreground)", value: "var(--ink-ink)" },
                { token: "--fg-muted", label: "--fg-muted", value: "var(--ink-muted)" },
                { token: "--fg-faint", label: "--fg-faint", value: "var(--ink-faint)" },
              ].map(({ token, label, value }) => (
                <div key={token} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{ width: 32, height: 32, borderRadius: 6, background: value, border: "1px solid var(--paper-300)", flexShrink: 0 }}
                  />
                  <div>
                    <div style={{ color: value, fontFamily: "var(--font-mono)", fontSize: 13 }}>{label}</div>
                    <div style={{ color: "var(--ink-faint)", fontFamily: "var(--font-mono)", fontSize: 11 }}>{token}</div>
                  </div>
                </div>
              ))}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: 6, background: "var(--paper-0)", border: "1px solid var(--paper-300)", flexShrink: 0 }} />
                <div>
                  <div style={{ color: "var(--ink-muted)", fontFamily: "var(--font-mono)", fontSize: 13 }}>--surface</div>
                  <div style={{ color: "var(--ink-faint)", fontFamily: "var(--font-mono)", fontSize: 11 }}>paper-0 (white)</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: 6, background: "var(--aai-orange)", flexShrink: 0 }} />
                <div>
                  <div style={{ color: "var(--ink-muted)", fontFamily: "var(--font-mono)", fontSize: 13 }}>--accent</div>
                  <div style={{ color: "var(--ink-faint)", fontFamily: "var(--font-mono)", fontSize: 11 }}>aai-orange #F25730</div>
                </div>
              </div>

              <button
                style={{
                  marginTop: 8,
                  padding: "10px 20px",
                  background: "var(--aai-orange)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: "pointer",
                  alignSelf: "flex-start",
                }}
              >
                Primary CTA
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 4. GRADIENT TEXT ── */}
      <Section title="04 — Gradient Text · .aai-gradient-text">
        <div
          style={{
            background: "var(--ink-800)",
            borderRadius: 16,
            padding: "48px 40px",
            border: "1px solid var(--ink-400)",
            textAlign: "center",
          }}
        >
          <div
            className="aai-eyebrow"
            style={{ marginBottom: 24, display: "block" }}
          >
            The OS for Building in Production
          </div>

          <h2
            className="aai-gradient-text"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              margin: "0 auto 24px",
            }}
          >
            Build in Production
          </h2>

          <p className="aai-body-lg" style={{ maxWidth: 480, margin: "0 auto 32px" }}>
            Fei Studio gives every engineer the observability they need to ship AI agents with confidence.
          </p>

          {/* Smaller gradient text sample */}
          <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap", marginTop: 8 }}>
            <span
              className="aai-gradient-text"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28 }}
            >
              Deploy
            </span>
            <span
              className="aai-gradient-text"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28 }}
            >
              Observe
            </span>
            <span
              className="aai-gradient-text"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28 }}
            >
              Iterate
            </span>
          </div>

          {/* Orange glow code block */}
          <div
            style={{
              marginTop: 40,
              background: "var(--ink-700)",
              border: "1px solid var(--ink-400)",
              borderRadius: 10,
              padding: "16px 20px",
              textAlign: "left",
              display: "inline-block",
              boxShadow: "var(--glow-orange)",
            }}
          >
            <span className="aai-mono">
              <span style={{ color: "var(--aai-orange)" }}>class</span>
              {" "}
              <span style={{ color: "var(--aai-blue)" }}>="aai-gradient-text"</span>
              {" "}
              <span style={{ color: "var(--text-on-dark-faint)" }}>→ orange → peach gradient</span>
            </span>
          </div>
        </div>
      </Section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Story                                                               */
/* ------------------------------------------------------------------ */

const meta: Meta = {
  title: "Design System/AaiTokens",
  component: AaiTokensShowcase,
  parameters: {
    layout: "fullscreen",
    backgrounds: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

export const ColorPaletteAndTypography: Story = {
  name: "Color Palette & Typography",
};

export const DarkVsLightTheme: Story = {
  name: "Dark vs Light Theme",
  render: () => (
    <div style={{ background: "var(--ink-900)", padding: "48px 40px", fontFamily: "var(--font-sans)" }}>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--aai-orange)",
          marginBottom: 28,
        }}
      >
        Semantic tokens · Dark vs Light
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* Dark */}
        <div style={{ background: "var(--ink-800)", border: "1px solid var(--ink-400)", borderRadius: 12, padding: 28 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--aai-orange)", marginBottom: 16 }}>
            Default (Dark)
          </div>
          <div className="aai-h3" style={{ marginBottom: 8 }}>Ship Fearlessly</div>
          <div className="aai-body">Full observability into every AI agent run — from prompt to deploy.</div>
          <div className="aai-eyebrow" style={{ marginTop: 16 }}>Now in GA</div>
        </div>
        {/* Light */}
        <div className="theme-light" style={{ background: "var(--paper-50)", border: "1px solid var(--paper-300)", borderRadius: 12, padding: 28 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--aai-orange)", marginBottom: 16 }}>
            theme-light
          </div>
          <div className="aai-h3" style={{ marginBottom: 8 }}>Ship Fearlessly</div>
          <div className="aai-body">Full observability into every AI agent run — from prompt to deploy.</div>
          <div className="aai-eyebrow" style={{ marginTop: 16 }}>Now in GA</div>
        </div>
      </div>
    </div>
  ),
};

export const GradientText: Story = {
  name: "Gradient Text",
  render: () => (
    <div
      style={{
        background: "var(--ink-900)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "64px 40px",
        fontFamily: "var(--font-sans)",
        textAlign: "center",
      }}
    >
      <div className="aai-eyebrow" style={{ marginBottom: 24 }}>
        The OS for Building in Production
      </div>
      <h1
        className="aai-gradient-text"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(40px, 7vw, 92px)",
          lineHeight: 1.04,
          letterSpacing: "-0.02em",
          margin: "0 auto 28px",
          maxWidth: 800,
        }}
      >
        Build in Production
      </h1>
      <p className="aai-body-lg" style={{ maxWidth: 520, margin: "0 auto" }}>
        Fei Studio gives every engineer the observability they need to ship AI agents with confidence.
      </p>
      <div style={{ display: "flex", gap: 32, marginTop: 48, flexWrap: "wrap", justifyContent: "center" }}>
        {["Deploy", "Observe", "Iterate", "Scale"].map((word) => (
          <span
            key={word}
            className="aai-gradient-text"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 32 }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  ),
};
