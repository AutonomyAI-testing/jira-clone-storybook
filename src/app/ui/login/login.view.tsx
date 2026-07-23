import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, userMock1 } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";

export const LoginView = ({ users }: Props) => {
  const [selectedUser, setSelectedUser] = useState<User>(userMock1);
  const [isLoading, setIsLoading] = useState(false);

  const onUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = e.target.value;
    const found = users.find((u) => u.id === userId);
    if (found) setSelectedUser(found);
  };

  const onSubmit = () => {
    setIsLoading(true);
  };

  return (
    <div className="dark" style={{ minHeight: "100vh" }}>
      {/* Scoped styles for elements that can't be expressed in Tailwind alone */}
      <style>{`
        .login-shell {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          min-height: 100vh;
        }
        @media (max-width: 920px) {
          .login-shell { grid-template-columns: 1fr; }
          .login-brand { display: none !important; }
          .login-mobile-mark { display: flex !important; }
        }
        .login-brand::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%),
            radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%);
        }
        .login-pl-row { position: relative; }
        .login-pl-row:not(:last-child)::before {
          content: "";
          position: absolute;
          left: 5px;
          top: 22px;
          bottom: -11px;
          width: 1px;
          background: #3C3B39;
        }
        .login-divider::before,
        .login-divider::after {
          content: "";
          height: 1px;
          flex: 1;
          background: #3C3B39;
        }
        .login-select {
          width: 100%;
          font-family: 'CircularStdMedium', sans-serif;
          font-size: 15px;
          color: #dee4ea;
          background: #333333;
          border: 1px solid #3C3B39;
          border-radius: 8px;
          padding: 12px 14px;
          outline: none;
          -webkit-appearance: none;
          appearance: none;
          cursor: pointer;
          transition: border-color 0.15s cubic-bezier(.2,.7,.2,1), box-shadow 0.15s cubic-bezier(.2,.7,.2,1);
        }
        .login-select:focus {
          border-color: #F25730;
          box-shadow: 0 0 0 3px rgba(242,87,48,.55);
        }
        .login-select option {
          background: #1A1A18;
          color: #dee4ea;
        }
        .login-submit {
          margin-top: 4px;
          width: 100%;
          font-family: 'CircularStdBold', sans-serif;
          font-size: 15px;
          background: #F25730;
          color: #fff;
          border: 0;
          border-radius: 8px;
          padding: 13px 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          box-shadow: 0 0 0 1px rgba(242,87,48,.35), 0 8px 30px rgba(242,87,48,.22);
          transition: background 0.15s cubic-bezier(.2,.7,.2,1), transform 0.12s cubic-bezier(.2,.7,.2,1);
        }
        .login-submit:hover:not(:disabled) { background: #FC816F; transform: translateY(-1px); }
        .login-submit:active:not(:disabled) { background: #ED5339; transform: translateY(0); }
        .login-submit:disabled { cursor: wait; background: #ED5339; transform: none; }
        .login-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,.4);
          border-right-color: #fff;
          border-radius: 50%;
          animation: login-spin .65s linear infinite;
          flex-shrink: 0;
        }
        @keyframes login-spin { to { transform: rotate(360deg); } }
        .login-sso-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-family: 'CircularStdBold', sans-serif;
          font-size: 14px;
          background: #212120;
          color: #dee4ea;
          border: 1px solid #3C3B39;
          border-radius: 8px;
          padding: 12px 16px;
          cursor: pointer;
          transition: border-color .18s cubic-bezier(.2,.7,.2,1), background .18s cubic-bezier(.2,.7,.2,1);
        }
        .login-sso-btn:hover { border-color: #4A4946; background: #2A2A28; }
        .login-check-box {
          width: 17px;
          height: 17px;
          border-radius: 5px;
          border: 1px solid #4A4946;
          background: #333333;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .15s cubic-bezier(.2,.7,.2,1);
          flex-shrink: 0;
        }
        .login-check-input:checked + .login-check-box {
          background: #F25730;
          border-color: #F25730;
        }
        .login-check-input:checked + .login-check-box .login-check-icon { opacity: 1; }
        .login-check-input:focus-visible + .login-check-box {
          box-shadow: 0 0 0 3px rgba(242,87,48,.55);
        }
        .login-check-icon {
          opacity: 0;
          transition: opacity .12s;
        }
      `}</style>

      <main className="login-shell">
        {/* ===================== BRAND PANEL ===================== */}
        <section
          className="login-brand"
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
            background: "#121211",
            borderRight: "1px solid #3C3B39",
            padding: "clamp(36px, 4.5vw, 64px)",
          }}
        >
          {/* Wordmark */}
          <div
            className="flex items-center"
            style={{ position: "relative", zIndex: 1, gap: 11 }}
          >
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                flexShrink: 0,
                background: "linear-gradient(150deg, #F25730, #F69874)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  "0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)",
              }}
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 24 24"
                style={{
                  width: 16,
                  height: 16,
                  stroke: "#fff",
                  fill: "none",
                  strokeWidth: "2.2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
                <circle cx="12" cy="12" r="3.4" />
              </svg>
            </span>
            <span
              className="font-primary-black"
              style={{ fontSize: 19, letterSpacing: "-0.01em", color: "#dee4ea" }}
            >
              Jira<span style={{ color: "#F25730" }}>Clone</span>
            </span>
            <span
              aria-hidden="true"
              style={{
                width: 1,
                height: 18,
                background: "#3C3B39",
                margin: "0 3px",
              }}
            />
            <span
              className="font-primary"
              style={{ fontSize: 14, color: "#9fadbc", letterSpacing: 0 }}
            >
              Project Manager
            </span>
          </div>

          {/* Hero section */}
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
              className="font-primary-bold"
              style={{
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#F25730",
                margin: "0 0 22px",
              }}
            >
              Agile project management
            </p>
            <h1
              className="font-primary-black"
              style={{
                fontSize: "clamp(32px, 3.6vw, 48px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                margin: 0,
                color: "#dee4ea",
              }}
            >
              Ship faster with boards that{" "}
              <span
                style={{
                  background: "linear-gradient(95deg, #F25730, #F69874)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                keep you focused.
              </span>
            </h1>
            <p
              className="font-primary-light"
              style={{
                fontSize: 18,
                lineHeight: 1.55,
                color: "#9fadbc",
                margin: "22px 0 0",
                maxWidth: 420,
              }}
            >
              From backlog to done — drag, drop, and track every issue while
              your team stays aligned.
            </p>

            {/* Pipeline motif */}
            <div
              style={{ marginTop: 40, display: "flex", flexDirection: "column" }}
              aria-hidden="true"
            >
              {/* Row 1 — blue */}
              <div
                className="login-pl-row flex items-center"
                style={{ gap: 14, padding: "11px 0" }}
              >
                <span
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 1,
                    background: "#9FD2ED",
                    boxShadow: "0 0 0 4px rgba(159,210,237,.12)",
                  }}
                />
                <span
                  className="font-primary-light"
                  style={{ fontSize: 12.5, letterSpacing: "0.02em", color: "#9fadbc" }}
                >
                  <b className="font-primary-bold" style={{ color: "#dee4ea" }}>
                    Issue created
                  </b>{" "}
                  — new task in backlog
                </span>
                <span
                  className="font-primary"
                  style={{ marginLeft: "auto", fontSize: 11, color: "#738496" }}
                >
                  00:00
                </span>
              </div>
              {/* Row 2 — amber */}
              <div
                className="login-pl-row flex items-center"
                style={{ gap: 14, padding: "11px 0" }}
              >
                <span
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 1,
                    background: "#E8A13C",
                    boxShadow: "0 0 0 4px rgba(232,161,60,.12)",
                  }}
                />
                <span
                  className="font-primary-light"
                  style={{ fontSize: 12.5, letterSpacing: "0.02em", color: "#9fadbc" }}
                >
                  <b className="font-primary-bold" style={{ color: "#dee4ea" }}>
                    In review
                  </b>{" "}
                  — code reviewed by team
                </span>
                <span
                  className="font-primary"
                  style={{ marginLeft: "auto", fontSize: 11, color: "#738496" }}
                >
                  00:04
                </span>
              </div>
              {/* Row 3 — green */}
              <div
                className="login-pl-row flex items-center"
                style={{ gap: 14, padding: "11px 0" }}
              >
                <span
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 1,
                    background: "#4FB477",
                    boxShadow: "0 0 0 4px rgba(79,180,119,.14)",
                  }}
                />
                <span
                  className="font-primary-light"
                  style={{ fontSize: 12.5, letterSpacing: "0.02em", color: "#9fadbc" }}
                >
                  <b className="font-primary-bold" style={{ color: "#dee4ea" }}>
                    Merged to main
                  </b>{" "}
                  — deployed to production
                </span>
                <span
                  className="font-primary"
                  style={{ marginLeft: "auto", fontSize: 11, color: "#738496" }}
                >
                  00:12
                </span>
              </div>
            </div>
          </div>

          {/* Brand footer */}
          <div
            className="flex items-center"
            style={{
              position: "relative",
              zIndex: 1,
              gap: 18,
              fontSize: 11,
              letterSpacing: "0.04em",
              color: "#738496",
            }}
          >
            <span className="font-primary">Open source</span>
            <span
              aria-hidden="true"
              style={{ width: 4, height: 4, borderRadius: "50%", background: "#4A4946" }}
            />
            <span className="font-primary">Built with Remix</span>
            <span
              aria-hidden="true"
              style={{ width: 4, height: 4, borderRadius: "50%", background: "#4A4946" }}
            />
            <span className="font-primary">Drag &amp; drop boards</span>
          </div>
        </section>

        {/* ===================== AUTH PANEL ===================== */}
        <section
          className="flex items-center justify-center"
          style={{ padding: "clamp(28px, 5vw, 64px)", background: "#121211" }}
        >
          <div style={{ width: "100%", maxWidth: 392 }}>
            {/* Mobile-only wordmark */}
            <div
              className="login-mobile-mark items-center"
              style={{ display: "none", gap: 11, marginBottom: 30 }}
            >
              <span
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  flexShrink: 0,
                  background: "linear-gradient(150deg, #F25730, #F69874)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow:
                    "0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)",
                }}
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  style={{
                    width: 16,
                    height: 16,
                    stroke: "#fff",
                    fill: "none",
                    strokeWidth: "2.2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                >
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
                  <circle cx="12" cy="12" r="3.4" />
                </svg>
              </span>
              <span
                className="font-primary-black"
                style={{ fontSize: 19, letterSpacing: "-0.01em", color: "#dee4ea" }}
              >
                Jira<span style={{ color: "#F25730" }}>Clone</span>
              </span>
            </div>

            {/* Auth header */}
            <div style={{ marginBottom: 30 }}>
              <p
                className="font-primary-bold"
                style={{
                  fontSize: 12,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#738496",
                  margin: "0 0 14px",
                }}
              >
                Sign in
              </p>
              <h2
                className="font-primary-black"
                style={{
                  fontSize: 30,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  margin: 0,
                  color: "#e34935",
                }}
              >
                Welcome back
              </h2>
              <p
                className="font-primary-light"
                style={{ fontSize: 15, lineHeight: 1.5, color: "#9fadbc", margin: "9px 0 0" }}
              >
                Pick a user profile and jump right in.
              </p>
            </div>

            {/* SSO buttons (visual placeholders) */}
            <div className="flex flex-col" style={{ gap: 10, marginBottom: 22 }}>
              <button type="button" className="login-sso-btn">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  style={{ width: 17, height: 17, flexShrink: 0 }}
                >
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
                </svg>
                Continue with GitHub
              </button>
              <button type="button" className="login-sso-btn">
                <svg
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                  style={{ width: 17, height: 17, flexShrink: 0 }}
                >
                  <path
                    fill="#FFC107"
                    d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5Z"
                  />
                  <path
                    fill="#FF3D00"
                    d="m6.3 14.7 6.6 4.8C14.7 15.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.1-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44Z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C39.9 36.3 44 30.8 44 24c0-1.3-.1-2.3-.4-3.5Z"
                  />
                </svg>
                Continue with Google
              </button>
            </div>

            {/* Divider */}
            <div
              className="login-divider flex items-center"
              style={{ gap: 14, margin: "0 0 22px", color: "#738496" }}
            >
              <span
                className="font-primary"
                style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}
              >
                or
              </span>
            </div>

            {/* Login form */}
            <Form
              method="post"
              onSubmit={onSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <input type="hidden" name="_action" value="setUser" />

              {/* User select field */}
              <div>
                <label
                  htmlFor="login-user-select"
                  className="font-primary"
                  style={{
                    display: "block",
                    fontSize: 13,
                    color: "#9fadbc",
                    marginBottom: 7,
                  }}
                >
                  Select user
                </label>
                <div className="flex items-center" style={{ gap: 10 }}>
                  <UserAvatar {...selectedUser} size={32} />
                  <select
                    id="login-user-select"
                    name="user"
                    className="login-select"
                    value={selectedUser.id}
                    onChange={onUserChange}
                  >
                    {users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Remember me */}
              <label
                className="flex items-center"
                style={{
                  gap: 9,
                  fontSize: 13.5,
                  color: "#9fadbc",
                  marginTop: 2,
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                <input
                  type="checkbox"
                  className="login-check-input"
                  style={{
                    position: "absolute",
                    opacity: 0,
                    width: 0,
                    height: 0,
                  }}
                />
                <span className="login-check-box" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    className="login-check-icon"
                    style={{
                      width: 11,
                      height: 11,
                      stroke: "#fff",
                      fill: "none",
                      strokeWidth: "2.6",
                    }}
                  >
                    <path d="M5 12.5 10 17l9-10" />
                  </svg>
                </span>
                <span className="font-primary-light">Keep me signed in</span>
              </label>

              {/* Submit button */}
              <button
                type="submit"
                className="login-submit"
                disabled={isLoading}
                aria-label="Sign in"
              >
                {isLoading && (
                  <span className="login-spinner" aria-hidden="true" />
                )}
                <span className="font-primary-bold" style={{ opacity: isLoading ? 0.85 : 1 }}>
                  {isLoading ? "Signing in\u2026" : "Sign in"}
                </span>
              </button>
            </Form>

            {/* Footnote */}
            <p
              className="font-primary-light"
              style={{
                marginTop: 26,
                textAlign: "center",
                fontSize: 13.5,
                color: "#9fadbc",
              }}
            >
              No authentication required.{" "}
              <span className="font-primary" style={{ color: "#F25730" }}>
                It&apos;s a demo!
              </span>
            </p>

            {/* Security badge */}
            <div
              className="flex items-center justify-center font-primary"
              style={{
                marginTop: 28,
                gap: 8,
                fontSize: 11,
                letterSpacing: "0.05em",
                color: "#738496",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{
                  width: 13,
                  height: 13,
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "1.8",
                }}
              >
                <rect x="4" y="11" width="16" height="10" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              Open source &amp; self-hostable
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

interface Props {
  users: User[];
}
