import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

// ── Pipeline / timeline rows for the brand panel ──────────────────────────────
const PIPELINE_STEPS = [
  {
    dotColor: "bg-background-info-bold",
    glow: "shadow-[0_0_0_4px_rgba(88,176,254,0.15)]",
    label: "Issue created",
    detail: "— critical bug, payment-svc",
    time: "00:00",
  },
  {
    dotColor: "bg-background-warning-bold",
    glow: "shadow-[0_0_0_4px_rgba(232,161,60,0.15)]",
    label: "Assigned & scoped",
    detail: "— sprint 42, estimate 3 pts",
    time: "00:04",
  },
  {
    dotColor: "bg-background-success-bold",
    glow: "shadow-[0_0_0_4px_rgba(75,206,151,0.15)]",
    label: "PR merged & done",
    detail: "— verified in staging ✓",
    time: "00:31",
  },
] as const;

// ── Left brand panel ──────────────────────────────────────────────────────────
const BrandPanel = (): JSX.Element => (
  <section className="relative hidden flex-col overflow-hidden border-r border-border bg-elevation-surface-sunken lg:flex">
    {/* warm radial glow */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(60% 55% at 18% 8%, rgba(10,70,160,.18), transparent 60%), radial-gradient(50% 50% at 90% 100%, rgba(0,82,204,.09), transparent 62%)",
      }}
      aria-hidden="true"
    />

    <div className="relative z-10 flex h-full flex-col p-14">
      {/* Wordmark */}
      <Wordmark />

      {/* Hero copy */}
      <div className="my-auto max-w-[480px] py-12">
        <p className="mb-5 font-primary text-xs font-semibold uppercase tracking-[.16em] text-font-brand">
          Project management, simplified
        </p>

        <h1 className="font-primary-black text-[clamp(32px,3.6vw,48px)] leading-[1.05] tracking-tight text-font">
          Plan, track, and ship —{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(95deg, var(--color-background-brand-bold), var(--Blue300))",
            }}
          >
            your way.
          </span>
        </h1>

        <p className="mt-5 max-w-[420px] font-primary-light text-lg leading-relaxed text-font-subtle">
          From backlog to deployment — track every issue, sprint, and pull
          request in one place. Built for teams that ship.
        </p>

        {/* Pipeline status motif */}
        <div className="mt-10 flex flex-col" aria-hidden="true">
          {PIPELINE_STEPS.map((step, idx) => (
            <div
              key={step.label}
              className="relative flex items-center gap-3.5 py-2.5"
            >
              {/* connector line */}
              {idx < PIPELINE_STEPS.length - 1 && (
                <span
                  className="absolute left-[5px] top-[calc(50%+8px)] h-full w-px bg-border"
                  aria-hidden="true"
                />
              )}
              {/* dot */}
              <span
                className={`relative z-10 h-2.5 w-2.5 flex-none rounded-full ${step.dotColor} ${step.glow}`}
              />
              <span className="font-primary text-sm text-font-subtle">
                <strong className="font-primary-bold text-font">
                  {step.label}
                </strong>
                {step.detail}
              </span>
              <span className="ml-auto font-primary text-xs text-font-subtlest">
                {step.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer badges */}
      <div className="flex items-center gap-4 font-primary text-xs tracking-wide text-font-subtlest">
        <span>Open source</span>
        <span className="h-1 w-1 rounded-full bg-border-bold" aria-hidden="true" />
        <span>Remix + React</span>
        <span className="h-1 w-1 rounded-full bg-border-bold" aria-hidden="true" />
        <span>Full-stack TypeScript</span>
      </div>
    </div>
  </section>
);

// ── Wordmark (shared between desktop brand panel & mobile header) ─────────────
const Wordmark = ({ compact = false }: { compact?: boolean }): JSX.Element => (
  <div className="flex items-center gap-2.5">
    {/* Logo glyph */}
    <span
      className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-background-brand-bold"
      style={{ boxShadow: "0 0 0 1px rgba(0,82,204,.35), 0 6px 18px rgba(0,82,204,.22)" }}
    >
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="17" />
        <line x1="9" y1="14.5" x2="15" y2="14.5" />
      </svg>
    </span>
    <span className="font-primary-black text-[19px] tracking-tight text-font">
      Jira<span className="text-font-brand">Clone</span>
    </span>
    {!compact && (
      <>
        <span
          className="mx-0.5 h-4 w-px bg-border-bold"
          aria-hidden="true"
        />
        <span className="font-primary text-sm text-font-subtle">
          Project Tracker
        </span>
      </>
    )}
  </div>
);

// ── Right auth/form panel ─────────────────────────────────────────────────────
export const LoginView = ({ users }: Props): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);

  const onValueChange = (userId: UserId) => {
    const found = users.find((u) => u.id === userId);
    if (found) setSelectedValue(found);
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-[1.05fr_.95fr]">
      {/* ── Brand panel (hidden on mobile) ── */}
      <BrandPanel />

      {/* ── Form panel ── */}
      <section className="flex items-center justify-center bg-elevation-surface p-7 sm:p-16">
        <div className="w-full max-w-[360px]">
          {/* Mobile-only wordmark */}
          <div className="mb-8 flex justify-center lg:hidden">
            <Wordmark compact />
          </div>

          {/* Heading */}
          <div className="mb-8">
            <p className="mb-3 font-primary text-xs font-semibold uppercase tracking-[.16em] text-font-subtlest">
              Welcome
            </p>
            <h2 className="font-primary-black text-[30px] leading-tight tracking-tight text-font-danger">
              Select your user
            </h2>
            <p className="mt-2 font-primary-light text-sm leading-relaxed text-font-subtle">
              No authentication needed. Pick any user and explore
              projects, issues, and comments across the board.
            </p>
          </div>

          {/* User select form */}
          <Form method="post" className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="user-select-trigger"
                className="mb-1.5 block font-primary text-xs font-semibold text-font-subtle"
              >
                User account
              </label>
              <Select.Root
                name="user"
                defaultValue={userMock1.id}
                onValueChange={onValueChange}
              >
                <Select.Trigger
                  id="user-select-trigger"
                  className="flex w-full justify-between"
                  aria-label="Open user select"
                >
                  <div className="flex items-center gap-2">
                    <UserAvatar {...selectedValue} size={24} />
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
                        <UserAvatar {...user} size={24} />
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
              className="w-full"
            >
              Continue to projects
            </Button>
          </Form>

          {/* Security note */}
          <div className="mt-7 flex items-center justify-center gap-2 font-primary text-xs tracking-wide text-font-subtlest">
            <svg
              viewBox="0 0 24 24"
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <rect x="4" y="11" width="16" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            Demo app — no real data stored
          </div>
        </div>
      </section>
    </div>
  );
};

interface Props {
  users: User[];
}
