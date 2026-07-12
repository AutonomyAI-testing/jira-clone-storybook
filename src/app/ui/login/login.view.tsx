import { useState } from "react";
import { Form, useTransition } from "@remix-run/react";
import { AiFillGithub } from "react-icons/ai";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { User, UserId, userMock1 } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

// Dark panel hex values (not in project tokens)
const INK_BG = "#1d2125"; // DarkNeutral100
const INK_BORDER = "#454f59"; // DarkNeutral400
const INK_INPUT = "#22272b"; // DarkNeutral200
const INK_INPUT_HOVER = "#2c333a"; // DarkNeutral300
const BRAND_BLUE = "#579dff"; // Blue400 – info/success dots
const BRAND_GREEN = "#4bce97"; // Green400 – success dot
const BRAND_AMBER = "#f8e6a0"; // Yellow200 – warning dot
const ACCENT_ORANGE = "#f2a348"; // brand accent similar to design

export const LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const transition = useTransition();
  const isLoading = transition.state === "submitting";

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);
    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        minHeight: "100vh",
      }}
    >
      {/* ===== LEFT / BRAND PANEL ===== */}
      <section
        aria-label="Brand panel"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: INK_BG,
          borderRight: `1px solid ${INK_BORDER}`,
          padding: "clamp(36px, 4.5vw, 64px)",
          display: "flex",
          flexDirection: "column",
        }}
        className="hidden-on-mobile"
      >
        {/* Radial glow overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.35), transparent 60%), radial-gradient(50% 50% at 92% 100%, rgba(87,157,255,.08), transparent 62%)",
          }}
        />

        {/* Film grain texture */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.04,
            mixBlendMode: "overlay" as const,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* All content above overlays */}
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>

          {/* Wordmark / Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" width={28} height={28} alt="Jira Clone logo" />
            <span
              className="font-primary-black"
              style={{ fontSize: "18px", letterSpacing: "-0.01em", color: "#c7d1db" }}
            >
              Jira Clone
            </span>
          </div>

          {/* Headline + pipeline */}
          <div style={{ marginTop: "auto", marginBottom: "auto", padding: "48px 0", maxWidth: "480px" }}>
            <p
              className="font-primary"
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: ACCENT_ORANGE,
                margin: "0 0 22px",
              }}
            >
              Project management · simplified
            </p>

            <h1
              className="font-primary-black"
              style={{
                fontSize: "clamp(28px, 3.2vw, 44px)",
                lineHeight: 1.07,
                letterSpacing: "-0.02em",
                margin: 0,
                color: "#c7d1db",
              }}
            >
              Your work,{" "}
              <span
                style={{
                  background: `linear-gradient(95deg, ${ACCENT_ORANGE}, #f5c27a)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                organized.
              </span>
            </h1>

            <p
              className="font-primary-light"
              style={{ fontSize: "17px", lineHeight: 1.55, color: "#9fadbc", margin: "20px 0 0", maxWidth: "420px" }}
            >
              Plan sprints, track issues, and ship features — all in one place.
            </p>

            {/* Status pipeline */}
            <div
              aria-hidden="true"
              style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: 0 }}
            >
              {/* Row 1 */}
              <PipelineRow
                color={BRAND_BLUE}
                label={<><b style={{ color: "#c7d1db", fontWeight: 600 }}>Issue created</b> — bug report, checkout-service</>}
                time="00:00"
                isLast={false}
                borderColor={INK_BORDER}
              />
              {/* Row 2 */}
              <PipelineRow
                color={BRAND_AMBER}
                label={<><b style={{ color: "#c7d1db", fontWeight: 600 }}>In review</b> — PR opened, tests passing</>}
                time="00:04"
                isLast={false}
                borderColor={INK_BORDER}
              />
              {/* Row 3 */}
              <PipelineRow
                color={BRAND_GREEN}
                label={<><b style={{ color: "#c7d1db", fontWeight: 600 }}>Done</b> — merged to main, deployed</>}
                time="00:11"
                isLast={true}
                borderColor={INK_BORDER}
              />
            </div>
          </div>

          {/* Footer badges */}
          <div
            className="font-primary"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              fontFamily: "monospace",
              fontSize: "11px",
              letterSpacing: "0.04em",
              color: "#596773",
            }}
          >
            <span>Open source</span>
            <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#454f59", display: "inline-block" }} aria-hidden="true" />
            <span>Remix + React</span>
            <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#454f59", display: "inline-block" }} aria-hidden="true" />
            <span>TypeScript</span>
          </div>
        </div>
      </section>

      {/* ===== RIGHT / AUTH PANEL ===== */}
      <section
        aria-label="Sign in"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(28px, 5vw, 64px)",
          backgroundColor: INK_BG,
        }}
      >
        <div style={{ width: "100%", maxWidth: "392px" }}>

          {/* Mobile-only logo */}
          <div
            className="flex items-center gap-2 mb-8"
            style={{ display: "none" }}
            aria-hidden="true"
          >
            <img src="/logo.png" width={24} height={24} alt="Jira Clone logo" />
            <span className="font-primary-black" style={{ fontSize: "16px", color: "#c7d1db" }}>
              Jira Clone
            </span>
          </div>

          {/* Auth heading */}
          <div style={{ marginBottom: "30px" }}>
            <p
              className="font-primary"
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#596773",
                margin: "0 0 14px",
              }}
            >
              Sign in
            </p>
            <h2
              className="font-primary-black"
              style={{
                fontSize: "28px",
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                margin: 0,
                color: "#ef4444",
              }}
            >
              Welcome back
            </h2>
            <p
              className="font-primary-light"
              style={{ fontSize: "15px", lineHeight: 1.5, color: "#9fadbc", margin: "9px 0 0" }}
            >
              Select your profile to continue
            </p>
          </div>

          {/* SSO buttons (visual placeholders) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "22px" }}>
            <SsoButton
              icon={<AiFillGithub size={18} style={{ color: "#c7d1db" }} />}
              label="Continue with GitHub"
              borderColor={INK_BORDER}
              bgColor={INK_INPUT}
              hoverBgColor={INK_INPUT_HOVER}
            />
            <SsoButton
              icon={<GoogleIcon />}
              label="Continue with Google"
              borderColor={INK_BORDER}
              bgColor={INK_INPUT}
              hoverBgColor={INK_INPUT_HOVER}
            />
          </div>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              margin: "0 0 22px",
              color: "#596773",
            }}
          >
            <div style={{ height: "1px", flex: 1, background: INK_BORDER }} />
            <span
              className="font-primary"
              style={{ fontFamily: "monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase" }}
            >
              or
            </span>
            <div style={{ height: "1px", flex: 1, background: INK_BORDER }} />
          </div>

          {/* Login Form */}
          <Form method="post">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

              {/* User selector field */}
              <div>
                <label
                  className="font-primary"
                  htmlFor="user-select"
                  style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#9fadbc", marginBottom: "7px" }}
                >
                  Profile
                </label>
                <Select.Root
                  name="user"
                  defaultValue={userMock1.id}
                  onValueChange={onValueChange}
                >
                  <Select.Trigger
                    id="user-select"
                    aria-label="Open user select"
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      backgroundColor: INK_INPUT,
                      border: `1px solid ${INK_BORDER}`,
                      borderRadius: "8px",
                      padding: "12px 14px",
                      color: "#c7d1db",
                      transition: "border-color 0.15s",
                    }}
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

              {/* Password field (visual only) */}
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <label
                    className="font-primary"
                    htmlFor="password"
                    style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#9fadbc", marginBottom: "7px" }}
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    tabIndex={0}
                    className="font-primary"
                    style={{ fontSize: "12.5px", color: ACCENT_ORANGE, textDecoration: "none" }}
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </a>
                </div>
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="off"
                    placeholder="••••••••••••"
                    className="font-primary"
                    style={{
                      width: "100%",
                      fontSize: "15px",
                      color: "#c7d1db",
                      backgroundColor: INK_INPUT,
                      border: `1px solid ${INK_BORDER}`,
                      borderRadius: "8px",
                      padding: "12px 44px 12px 14px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = ACCENT_ORANGE;
                      e.currentTarget.style.boxShadow = `0 0 0 3px ${ACCENT_ORANGE}22`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = INK_BORDER;
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "6px",
                      background: "none",
                      border: 0,
                      cursor: "pointer",
                      color: "#596773",
                      padding: "8px",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#9fadbc")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#596773")}
                  >
                    {showPassword ? <HiEyeOff size={17} /> : <HiEye size={17} />}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <label
                className="font-primary"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "9px",
                  fontSize: "13.5px",
                  color: "#9fadbc",
                  cursor: "pointer",
                  userSelect: "none",
                  marginTop: "2px",
                }}
              >
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
                />
                {/* Custom checkbox box */}
                <span
                  aria-hidden="true"
                  style={{
                    width: "17px",
                    height: "17px",
                    minWidth: "17px",
                    borderRadius: "5px",
                    border: `1px solid ${rememberMe ? ACCENT_ORANGE : INK_BORDER}`,
                    backgroundColor: rememberMe ? ACCENT_ORANGE : INK_INPUT,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.15s",
                    flexShrink: 0,
                  }}
                >
                  {rememberMe && (
                    <svg
                      viewBox="0 0 24 24"
                      width="11"
                      height="11"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12.5 10 17l9-10" />
                    </svg>
                  )}
                </span>
                Keep me signed in
              </label>

              {/* Submit button */}
              <button
                type="submit"
                name="_action"
                value="setUser"
                aria-label="Login"
                disabled={isLoading}
                style={{
                  marginTop: "4px",
                  width: "100%",
                  fontFamily: "inherit",
                  fontWeight: 600,
                  fontSize: "15px",
                  background: ACCENT_ORANGE,
                  color: "#fff",
                  border: 0,
                  borderRadius: "8px",
                  padding: "13px 16px",
                  cursor: isLoading ? "wait" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "9px",
                  boxShadow: `0 0 0 1px rgba(242,163,72,.35), 0 6px 18px rgba(242,163,72,.22)`,
                  transition: "background 0.15s, transform 0.12s",
                  opacity: isLoading ? 0.85 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.background = "#f5b55d";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = ACCENT_ORANGE;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.background = "#d4872c";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {isLoading ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="animate-spin"
                      style={{
                        width: "16px",
                        height: "16px",
                        border: "2px solid rgba(255,255,255,.4)",
                        borderRightColor: "#fff",
                        borderRadius: "50%",
                        display: "inline-block",
                      }}
                    />
                    <span className="font-primary">Signing in…</span>
                  </>
                ) : (
                  <span className="font-primary-bold">Sign in</span>
                )}
              </button>
            </div>
          </Form>

          {/* Footnote */}
          <p
            className="font-primary-light"
            style={{ marginTop: "26px", textAlign: "center", fontSize: "13.5px", color: "#9fadbc" }}
          >
            This is a demo app —{" "}
            <span style={{ color: ACCENT_ORANGE, fontWeight: 500 }}>no real authentication</span>
            . Select any profile above to explore.
          </p>

          {/* Secure badge */}
          <div
            className="font-primary"
            style={{
              marginTop: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontFamily: "monospace",
              fontSize: "11px",
              letterSpacing: "0.05em",
              color: "#596773",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="4" y="11" width="16" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            Open-source &amp; self-hostable
          </div>
        </div>
      </section>
    </div>
  );
};

// ---------- Sub-components ----------

function PipelineRow({
  color,
  label,
  time,
  isLast,
  borderColor,
}: {
  color: string;
  label: React.ReactNode;
  time: string;
  isLast: boolean;
  borderColor: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        position: "relative",
        padding: "11px 0",
      }}
    >
      {/* Vertical connector line (except last row) */}
      {!isLast && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "5px",
            top: "22px",
            bottom: "-1px",
            width: "1px",
            background: borderColor,
          }}
        />
      )}
      {/* Status dot */}
      <span
        aria-hidden="true"
        style={{
          width: "11px",
          height: "11px",
          minWidth: "11px",
          borderRadius: "50%",
          background: color,
          boxShadow: `0 0 0 4px ${color}1f`,
          position: "relative",
          zIndex: 1,
          flexShrink: 0,
        }}
      />
      {/* Label */}
      <span
        className="font-primary-light"
        style={{ fontFamily: "monospace", fontSize: "12.5px", letterSpacing: "0.02em", color: "#9fadbc", flex: 1 }}
      >
        {label}
      </span>
      {/* Time */}
      <span
        style={{ fontFamily: "monospace", fontSize: "11px", color: "#596773", marginLeft: "auto", flexShrink: 0 }}
      >
        {time}
      </span>
    </div>
  );
}

function SsoButton({
  icon,
  label,
  borderColor,
  bgColor,
  hoverBgColor,
}: {
  icon: React.ReactNode;
  label: string;
  borderColor: string;
  bgColor: string;
  hoverBgColor: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      disabled
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        fontFamily: "inherit",
        fontWeight: 600,
        fontSize: "14px",
        background: hovered ? hoverBgColor : bgColor,
        color: "#c7d1db",
        border: `1px solid ${borderColor}`,
        borderRadius: "8px",
        padding: "12px 16px",
        cursor: "not-allowed",
        transition: "background 0.18s",
        opacity: 0.7,
      }}
    >
      {icon}
      {label}
    </button>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M21.8 10.25H12v3.5h5.65C17.1 15.45 15.3 16.5 12 16.5a5.5 5.5 0 1 1 0-11 5.4 5.4 0 0 1 3.55 1.35L18.1 4.3A9 9 0 1 0 12 21c5 0 9-3.5 9-8.75 0-.6-.08-1.3-.2-2Z"
      />
      <path
        fill="#FF3D00"
        d="M3.15 7.35 6.3 9.6A5.5 5.5 0 0 1 12 5.5a5.4 5.4 0 0 1 3.55 1.35L18.1 4.3A9 9 0 0 0 3.15 7.35Z"
      />
      <path
        fill="#4CAF50"
        d="M12 21a9 9 0 0 0 6.05-2.3l-2.8-2.35A5.5 5.5 0 0 1 12 17.5a5.45 5.45 0 0 1-5.15-3.6L3.7 16.2A9 9 0 0 0 12 21Z"
      />
      <path
        fill="#1976D2"
        d="M21.8 10.25H12v3.5h5.65c-.45 1.35-1.35 2.5-2.6 3.3l2.8 2.35A9 9 0 0 0 21 12c0-.6-.08-1.3-.2-2Z"
      />
    </svg>
  );
}

interface Props {
  users: User[];
}
