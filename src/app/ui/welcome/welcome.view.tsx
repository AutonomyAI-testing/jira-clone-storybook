import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

const FILM_GRAIN_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const GlyphIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width={16}
    height={16}
    fill="none"
    stroke="#fff"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <path d="m9 12 2 2 4-4" />
    <rect x="9" y="2" width="6" height="4" rx="1" />
  </svg>
);

const LockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width={13}
    height={13}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    aria-hidden="true"
  >
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

const Wordmark = () => (
  <div
    className="flex items-center gap-3 font-primary-black"
    style={{ fontSize: 19, letterSpacing: "-0.01em" }}
  >
    <span
      className="flex flex-none items-center justify-center rounded-lg"
      style={{
        width: 30,
        height: 30,
        background: "linear-gradient(150deg, #0c66e4, #388bff)",
        boxShadow:
          "0 0 0 1px rgba(12,102,228,.35), 0 6px 18px rgba(12,102,228,.25)",
      }}
      aria-hidden="true"
    >
      <GlyphIcon />
    </span>
    <span className="text-font">Jira</span>
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: 1,
        height: 18,
        background: "#3C3B39",
        margin: "0 4px",
      }}
    />
    <span
      className="font-primary text-font-subtlest"
      style={{ fontSize: 14, letterSpacing: 0 }}
    >
      Project Manager
    </span>
  </div>
);

interface PipelineRowProps {
  color: string;
  shadow: string;
  label: string;
  detail: string;
  time: string;
  isLast?: boolean;
}

const PipelineRow = ({
  color,
  shadow,
  label,
  detail,
  time,
  isLast = false,
}: PipelineRowProps) => (
  <div
    className="relative flex items-center gap-3.5"
    style={{ padding: "11px 0" }}
  >
    {!isLast && (
      <div
        className="absolute"
        style={{
          left: 5,
          top: 22,
          bottom: -1,
          width: 1,
          background: "#3C3B39",
        }}
        aria-hidden="true"
      />
    )}
    <span
      className="relative z-[1] flex-none rounded-full"
      style={{
        width: 11,
        height: 11,
        background: color,
        boxShadow: shadow,
      }}
    />
    <span
      className="font-primary-light text-font-subtlest"
      style={{ fontSize: 12.5, letterSpacing: "0.02em" }}
    >
      <span className="font-primary-bold text-font">{label}</span> — {detail}
    </span>
    <span
      className="ml-auto font-primary-light text-font-subtlest"
      style={{ fontSize: 11 }}
    >
      {time}
    </span>
  </div>
);

export const WelcomeView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);
    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };

  return (
    <div className="relative min-h-screen" style={{ background: "#121211" }}>
      {/* Film grain overlay */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          zIndex: 9999,
          opacity: 0.045,
          mixBlendMode: "overlay",
          backgroundImage: FILM_GRAIN_SVG,
        }}
        aria-hidden="true"
      />

      <main
        className="grid min-h-screen"
        style={{ gridTemplateColumns: "1.05fr 0.95fr" }}
      >
        {/* ============ BRAND PANEL ============ */}
        <section
          className="relative hidden flex-col overflow-hidden md:flex"
          style={{
            background: "#121211",
            borderRight: "1px solid #3C3B39",
            padding: "clamp(36px, 4.5vw, 64px)",
          }}
        >
          {/* Radial glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: [
                "radial-gradient(60% 55% at 18% 8%, rgba(12,102,228,.15), transparent 60%)",
                "radial-gradient(50% 50% at 92% 100%, rgba(56,139,255,.08), transparent 62%)",
              ].join(", "),
            }}
            aria-hidden="true"
          />

          {/* Wordmark */}
          <div className="relative z-[1]">
            <Wordmark />
          </div>

          {/* Brand mid */}
          <div
            className="relative z-[1]"
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              padding: "48px 0",
              maxWidth: 480,
            }}
          >
            <p
              className="font-primary"
              style={{
                fontWeight: 500,
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#388bff",
                margin: "0 0 22px",
              }}
            >
              Project management
            </p>
            <h1
              className="font-primary-black text-font"
              style={{
                fontSize: "clamp(32px, 3.6vw, 48px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Track, manage, and ship projects with your{" "}
              <span
                style={{
                  background: "linear-gradient(95deg, #388bff, #85b8ff)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                team.
              </span>
            </h1>
            <p
              className="font-primary-light text-font-subtle"
              style={{
                fontSize: 18,
                lineHeight: 1.55,
                margin: "22px 0 0",
                maxWidth: 420,
              }}
            >
              From first issue to shipped feature — plan sprints, track bugs,
              and keep your whole team aligned in one place.
            </p>

            {/* Pipeline motif */}
            <div
              className="flex flex-col"
              style={{ marginTop: 40 }}
              aria-hidden="true"
            >
              <PipelineRow
                color="#579dff"
                shadow="0 0 0 4px rgba(87,157,255,.12)"
                label="Issue created"
                detail="PROJ-142, fix login redirect"
                time="09:41"
              />
              <PipelineRow
                color="#E2B203"
                shadow="0 0 0 4px rgba(226,178,3,.12)"
                label="In progress"
                detail="assigned to Woody"
                time="10:03"
              />
              <PipelineRow
                color="#4BCE97"
                shadow="0 0 0 4px rgba(75,206,151,.14)"
                label="Done"
                detail="PR merged, deployed to staging"
                time="10:28"
                isLast
              />
            </div>
          </div>

          {/* Brand footer */}
          <div
            className="relative z-[1] flex items-center text-font-subtlest"
            style={{ gap: 18, fontSize: 11, letterSpacing: "0.04em" }}
          >
            <span className="font-primary">Jira Clone</span>
            <span
              className="rounded-full"
              style={{ width: 4, height: 4, background: "#4A4946", display: "inline-block" }}
              aria-hidden="true"
            />
            <span className="font-primary">Open Source</span>
            <span
              className="rounded-full"
              style={{ width: 4, height: 4, background: "#4A4946", display: "inline-block" }}
              aria-hidden="true"
            />
            <span className="font-primary">Built with Remix</span>
          </div>
        </section>

        {/* ============ AUTH PANEL ============ */}
        <section
          className="flex items-center justify-center"
          style={{
            padding: "clamp(28px, 5vw, 64px)",
            background: "#121211",
          }}
        >
          <div className="w-full" style={{ maxWidth: 392 }}>
            {/* Mobile-only wordmark */}
            <div className="mb-8 md:hidden">
              <Wordmark />
            </div>

            {/* Auth heading */}
            <div style={{ marginBottom: 30 }}>
              <p
                className="font-primary text-font-subtlest"
                style={{
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
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
                className="font-primary text-font-subtle"
                style={{ fontSize: 15, lineHeight: 1.5, margin: "9px 0 0" }}
              >
                Pick up where you left off.
              </p>
            </div>

            {/* User selector form */}
            <Form method="post" className="flex flex-col gap-4">
              <div>
                <label
                  className="mb-2 block font-primary text-sm text-font-subtle"
                  style={{ fontWeight: 500 }}
                >
                  Select your profile
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
              <Button
                type="submit"
                name="_action"
                value="setUser"
                aria-label="Login"
                className="mt-1 w-full"
              >
                Login
              </Button>
            </Form>

            {/* Secure footer */}
            <div
              className="mt-7 flex items-center justify-center gap-2 font-primary text-font-subtlest"
              style={{ fontSize: 11, letterSpacing: "0.05em" }}
            >
              <LockIcon />
              No authentication required
            </div>
          </div>
        </section>
      </main>

      {/* Responsive override */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 920px) {
              .welcome-grid { grid-template-columns: 1fr !important; }
            }
          `,
        }}
      />
    </div>
  );
};

interface Props {
  users: User[];
}
