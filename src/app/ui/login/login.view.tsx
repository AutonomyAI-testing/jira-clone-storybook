import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

const PIPELINE = [
  {
    label: "Issue created",
    detail: "BUG-142 · checkout latency",
    time: "00:00",
    tone: "info" as const,
  },
  {
    label: "In progress",
    detail: "Assigned · connection pool",
    time: "00:12",
    tone: "warning" as const,
  },
  {
    label: "Done",
    detail: "Verified on the board",
    time: "00:41",
    tone: "success" as const,
  },
];

const nodeColor: Record<(typeof PIPELINE)[number]["tone"], string> = {
  info: "var(--Blue400)",
  warning: "var(--Orange400)",
  success: "var(--Green400)",
};

const nodeGlow: Record<(typeof PIPELINE)[number]["tone"], string> = {
  info: "0 0 0 4px rgba(87, 157, 255, 0.14)",
  warning: "0 0 0 4px rgba(250, 165, 61, 0.14)",
  success: "0 0 0 4px rgba(75, 206, 151, 0.16)",
};

const Wordmark = ({ compact = false }: { compact?: boolean }) => (
  <div className="flex items-center gap-3">
    <span
      className="flex flex-shrink-0 items-center justify-center"
      style={{
        width: 30,
        height: 30,
        borderRadius: 8,
        background:
          "linear-gradient(150deg, var(--Orange500), var(--Orange300))",
        boxShadow:
          "0 0 0 1px rgba(241, 141, 19, 0.35), 0 6px 18px rgba(241, 141, 19, 0.25)",
      }}
      aria-hidden="true"
    >
      <img
        src="/images/logo.png"
        width={16}
        height={16}
        alt=""
        style={{ filter: "brightness(0) invert(1)" }}
      />
    </span>
    <span className="font-primary-black text-lg text-font">
      Jira <span style={{ color: "var(--Orange500)" }}>Clone</span>
    </span>
    {!compact && (
      <>
        <span
          aria-hidden="true"
          className="bg-border"
          style={{ width: 1, height: 18 }}
        />
        <span className="font-primary text-sm text-font-subtle">
          Project board
        </span>
      </>
    )}
  </div>
);

export const LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);

    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };

  return (
    <main
      className="login-shell relative grid w-full bg-elevation-surface-sunken text-font"
      style={{
        minHeight: "100vh",
        gridTemplateColumns: "1.05fr 0.95fr",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 40% at 15% 0%, rgba(94, 84, 82, 0.28), transparent 55%), radial-gradient(40% 40% at 95% 100%, rgba(241, 141, 19, 0.1), transparent 55%)",
          zIndex: 0,
        }}
      />

      <section
        className="relative hidden flex-col overflow-hidden border-r border-border bg-elevation-surface lg:flex"
        style={{ padding: "clamp(36px, 4.5vw, 64px)", zIndex: 1 }}
        aria-label="Welcome"
      >
        <div className="relative z-10 flex h-full flex-col">
          <Wordmark />

          <div
            className="flex flex-col"
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
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--Orange500)",
                marginBottom: 22,
              }}
            >
              Task management demo
            </p>
            <h1
              className="font-primary-black text-font"
              style={{
                fontSize: "clamp(32px, 3.6vw, 48px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Pick a user and{" "}
              <span
                style={{
                  background:
                    "linear-gradient(95deg, var(--Orange500), var(--Orange300))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                start exploring.
              </span>
            </h1>
            <p
              className="font-primary-light text-font-subtle"
              style={{
                fontSize: 18,
                lineHeight: 1.55,
                marginTop: 22,
                maxWidth: 420,
              }}
            >
              There is no authentication involved. Jump in as any teammate,
              open the projects they belong to, and see issues and comments
              update in real time.
            </p>

            <div
              className="flex flex-col"
              style={{ marginTop: 40 }}
              aria-hidden="true"
            >
              {PIPELINE.map((step, index) => (
                <div
                  key={step.label}
                  className="relative flex items-center gap-3"
                  style={{ padding: "11px 0" }}
                >
                  {index < PIPELINE.length - 1 && (
                    <span
                      className="absolute bg-border"
                      style={{
                        left: 5,
                        top: 28,
                        bottom: -6,
                        width: 1,
                      }}
                    />
                  )}
                  <span
                    className="relative z-10 flex-shrink-0 rounded-full"
                    style={{
                      width: 11,
                      height: 11,
                      background: nodeColor[step.tone],
                      boxShadow: nodeGlow[step.tone],
                    }}
                  />
                  <span
                    className="font-primary-light text-font-subtle"
                    style={{ fontSize: 12.5 }}
                  >
                    <b className="font-primary text-font">{step.label}</b>
                    {" — "}
                    {step.detail}
                  </span>
                  <span
                    className="font-primary-light text-font-subtlest"
                    style={{ marginLeft: "auto", fontSize: 11 }}
                  >
                    {step.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex items-center gap-4 font-primary-light text-font-subtlest"
            style={{ fontSize: 11, letterSpacing: "0.04em" }}
          >
            <span>Demo only</span>
            <span
              className="rounded-full bg-border"
              style={{ width: 4, height: 4 }}
              aria-hidden="true"
            />
            <span>No real auth</span>
            <span
              className="rounded-full bg-border"
              style={{ width: 4, height: 4 }}
              aria-hidden="true"
            />
            <span>Switch users anytime</span>
          </div>
        </div>
      </section>

      <section
        className="relative z-10 flex items-center justify-center bg-elevation-surface"
        style={{ padding: "clamp(28px, 5vw, 64px)" }}
        aria-label="Sign in"
      >
        <div className="w-full" style={{ maxWidth: 392 }}>
          <div className="mb-8 lg:hidden">
            <Wordmark compact />
          </div>

          <div style={{ marginBottom: 30 }}>
            <p
              className="font-primary text-font-subtlest"
              style={{
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Sign in
            </p>
            <h2
              className="font-primary-black text-font-danger"
              style={{
                fontSize: 30,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Welcome back
            </h2>
            <p
              className="font-primary-light text-font-subtle"
              style={{ fontSize: 15, lineHeight: 1.5, marginTop: 9 }}
            >
              Select a login user to continue to your projects.
            </p>
          </div>

          <Form method="post" className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="user-select"
                className="font-primary text-font-subtle"
                style={{ fontSize: 13 }}
              >
                Login user
              </label>
              <Select.Root
                name="user"
                defaultValue={userMock1.id}
                onValueChange={onValueChange}
              >
                <Select.Trigger
                  id="user-select"
                  className="flex w-full justify-between"
                  aria-label="Open user select"
                  style={{
                    background: "var(--color-background-input)",
                    border: "1px solid var(--color-border-input)",
                    borderRadius: 8,
                    padding: "12px 14px",
                    minHeight: 48,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <UserAvatar {...selectedValue} size={28} />
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
                        <UserAvatar {...user} size={28} />
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
              size="lg"
              className="w-full font-primary-bold text-font-inverse"
              style={{
                marginTop: 4,
                borderRadius: 8,
                padding: "13px 16px",
                background: "var(--Orange500)",
                color: "var(--color-font-inverse)",
                boxShadow: "0 8px 24px rgba(241, 141, 19, 0.28)",
              }}
            >
              Login
            </Button>
          </Form>

          <p
            className="text-center font-primary-light text-font-subtle"
            style={{ marginTop: 26, fontSize: 13.5 }}
          >
            Tip: create issues with different users to see activity update
            across the board.
          </p>

          <div
            className="flex items-center justify-center gap-2 font-primary-light text-font-subtlest"
            style={{
              marginTop: 28,
              fontSize: 11,
              letterSpacing: "0.05em",
            }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <rect x="4" y="11" width="16" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            Demo session · switch free
          </div>
        </div>
      </section>
    </main>
  );
};

interface Props {
  users: User[];
}
