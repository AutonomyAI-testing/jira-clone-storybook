import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

// ── Pipeline step data ────────────────────────────────────────────────────────
const PIPELINE_STEPS = [
  {
    color: "bg-background-accent-blue-subtle",
    glow: "shadow-[0_0_0_4px_rgba(85,164,255,0.14)]",
    label: "Issue created",
    detail: "— design system tokens, navbar",
    time: "Sprint 1",
  },
  {
    color: "bg-background-warning-bold",
    glow: "shadow-[0_0_0_4px_rgba(232,161,60,0.14)]",
    label: "In Progress",
    detail: "— assigned to Sarah K.",
    time: "Sprint 2",
  },
  {
    color: "bg-background-success-bold",
    glow: "shadow-[0_0_0_4px_rgba(75,206,151,0.16)]",
    label: "Done",
    detail: "— merged & deployed to production",
    time: "Sprint 3",
  },
] as const;

// ── Badge data ─────────────────────────────────────────────────────────────────
const BADGES = ["Open Source", "5 Themes", "Remix + React"];

// ── Wordmark ──────────────────────────────────────────────────────────────────
const Wordmark = () => (
  <div className="flex items-center gap-3">
    <div
      className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-background-brand-bold shadow-blue"
      aria-hidden="true"
    >
      <img src="/images/logo.png" alt="" className="h-5 w-5 object-contain" />
    </div>
    <span className="font-primary-black text-[17px] tracking-tight text-font">
      Jira Clone
    </span>
  </div>
);

// ── Brand (left) panel ────────────────────────────────────────────────────────
const BrandPanel = () => (
  <section
    className="relative hidden flex-col overflow-hidden border-r border-border bg-elevation-surface-sunken lg:flex"
    aria-label="Product showcase"
  >
    {/* Subtle radial glow — theme-agnostic opacity trick */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(60% 55% at 18% 8%, rgba(var(--Blue500-rgb, 56 139 255) / 0.08), transparent 60%), " +
          "radial-gradient(50% 50% at 92% 100%, rgba(var(--Blue700-rgb, 12 102 228) / 0.06), transparent 62%)",
      }}
      aria-hidden="true"
    />

    <div className="relative z-10 flex flex-1 flex-col p-10 xl:p-14">
      {/* Top wordmark */}
      <Wordmark />

      {/* Mid section — headline + pipeline */}
      <div className="my-auto max-w-[480px] py-12">
        <p className="mb-5 font-primary text-xs uppercase tracking-[.16em] text-font-brand">
          Project Management, simplified
        </p>

        <h1 className="font-primary-black text-[clamp(32px,3.6vw,46px)] leading-[1.06] tracking-tight text-font [text-wrap:balance]">
          Plan, track, and ship —{" "}
          <span className="text-font-brand">together.</span>
        </h1>

        <p className="mt-5 text-[17px] leading-[1.55] text-font-subtle">
          From backlog to done — Jira Clone keeps your team in sync so nothing
          falls through the cracks.
        </p>

        {/* Pipeline timeline */}
        <div className="mt-10 flex flex-col" role="list" aria-label="Issue lifecycle">
          {PIPELINE_STEPS.map((step, i) => (
            <div
              key={i}
              role="listitem"
              className="group relative flex items-center gap-4 py-3"
            >
              {/* Connector line between steps */}
              {i < PIPELINE_STEPS.length - 1 && (
                <span
                  className="absolute left-[5px] top-[calc(50%+8px)] h-full w-px bg-border"
                  aria-hidden="true"
                />
              )}
              {/* Status dot */}
              <span
                className={`relative z-10 h-[11px] w-[11px] flex-none rounded-full ${step.color} ${step.glow}`}
                aria-hidden="true"
              />
              {/* Label */}
              <span className="font-primary text-[12.5px] tracking-[.02em] text-font-subtle">
                <strong className="font-primary-bold text-font">{step.label}</strong>
                {step.detail}
              </span>
              {/* Sprint badge */}
              <span className="ml-auto font-primary text-[11px] text-font-subtlest">
                {step.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer badges */}
      <div className="flex items-center gap-5 font-primary text-[11px] uppercase tracking-[.04em] text-font-subtlest">
        {BADGES.map((badge, i) => (
          <span key={badge} className="flex items-center gap-5">
            {badge}
            {i < BADGES.length - 1 && (
              <span
                className="h-1 w-1 rounded-full bg-border-bold"
                aria-hidden="true"
              />
            )}
          </span>
        ))}
      </div>
    </div>
  </section>
);

// ── Auth (right) panel ────────────────────────────────────────────────────────
export const LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);
    if (foundUser) setSelectedValue(foundUser);
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">
      <BrandPanel />

      {/* Auth panel */}
      <section
        className="flex items-center justify-center bg-elevation-surface px-6 py-10 sm:px-10"
        aria-label="Sign in"
      >
        <div className="w-full max-w-[392px]">
          {/* Mobile-only wordmark */}
          <div className="mb-8 flex lg:hidden">
            <Wordmark />
          </div>

          {/* Header */}
          <div className="mb-8">
            <p className="mb-3 font-primary text-xs uppercase tracking-[.16em] text-font-subtlest">
              Sign in
            </p>
            <h2 className="font-primary-black text-[30px] leading-[1.1] tracking-tight text-font-danger">
              Welcome back
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-font-subtle">
              No credentials needed — pick a user and start exploring.
            </p>
          </div>

          {/* Divider */}
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-border" />
            <span className="font-primary text-[11px] uppercase tracking-[.14em] text-font-subtlest">
              Select account
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          {/* Login form */}
          <Form method="post">
            <div className="flex flex-col gap-4">
              <Select.Root
                name="user"
                defaultValue={userMock1.id}
                onValueChange={onValueChange}
              >
                <Select.Trigger
                  className="flex w-full justify-between rounded-lg border border-border-input bg-background-input px-3 py-3 text-sm hover:bg-background-input-hovered"
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

              <Button
                type="submit"
                name="_action"
                value="setUser"
                aria-label="Login"
                className="w-full"
              >
                Continue →
              </Button>
            </div>
          </Form>

          {/* Demo notice */}
          <p className="mt-7 text-center font-primary text-[12.5px] text-font-subtlest">
            Demo app &mdash; all data resets on reload.{" "}
            <a
              href="https://github.com/radekzien/jira-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="font-primary-bold text-font-brand hover:underline"
            >
              View source
            </a>
          </p>

          {/* Open-source badge */}
          <div className="mt-6 flex items-center justify-center gap-2 font-primary text-[11px] uppercase tracking-[.05em] text-font-subtlest">
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 flex-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.137 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10Z" />
            </svg>
            Open source &amp; free
          </div>
        </div>
      </section>
    </div>
  );
};

interface Props {
  users: User[];
}
