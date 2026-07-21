import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

const PIPELINE_ITEMS = [
  {
    color: "#388bff",
    title: "Issue created",
    subtitle: "UI bug, checkout-panel",
    time: "09:00",
  },
  {
    color: "#e2b203",
    title: "In Progress",
    subtitle: "assigned to Daniel Serrano",
    time: "09:14",
  },
  {
    color: "#2abb7f",
    title: "Resolved",
    subtitle: "PR #42, verified and closed",
    time: "09:28",
  },
];

const RadarIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
    <circle cx="12" cy="12" r="3.4" />
  </svg>
);

const LockIcon = () => (
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
    <div
      className="dark"
      style={{
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        minHeight: "100vh",
      }}
    >
      {/* ── Brand panel (left, desktop only) ── */}
      <section
        aria-label="Product overview"
        className="relative hidden flex-col justify-between overflow-hidden border-r border-border bg-elevation-surface-sunken px-14 py-12 lg:flex"
      >
        {/* Warm corner glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.35), transparent 60%)",
          }}
        />

        {/* Top wordmark */}
        <div className="relative z-10 flex items-center gap-2.5">
          <span className="text-font">
            <RadarIcon size={22} />
          </span>
          <span className="font-primary-black text-[15px] tracking-tight text-font">
            Jira Clone
          </span>
        </div>

        {/* Middle copy + pipeline */}
        <div className="relative z-10 flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <p
              className="font-primary-bold text-[11px] uppercase tracking-[0.16em]"
              style={{ color: "#e57c35" }}
            >
              Open source project
            </p>
            <h1
              className="font-primary-black leading-[1.05] tracking-[-0.02em] text-font"
              style={{ fontSize: "clamp(30px,3.2vw,44px)" }}
            >
              Your project hub that{" "}
              <span
                style={{
                  background: "linear-gradient(95deg, #e57c35, #f0a76a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                just works.
              </span>
            </h1>
            <p className="font-primary-light max-w-[420px] text-[17px] leading-[1.55] text-font-subtle">
              From backlog to deployment — track issues, manage sprints, and
              collaborate with your team in real-time.
            </p>
          </div>

          {/* Pipeline timeline */}
          <div className="flex flex-col">
            {PIPELINE_ITEMS.map((item, idx) => (
              <div key={idx} className="relative flex items-center gap-3.5 py-[11px]">
                {/* Connector line between items */}
                {idx < PIPELINE_ITEMS.length - 1 && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "5px",
                      top: "22px",
                      bottom: "-1px",
                      width: "1px",
                      background: "var(--color-border)",
                    }}
                  />
                )}
                {/* Status dot */}
                <span
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: item.color,
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 1,
                    boxShadow: `0 0 0 4px ${item.color}22`,
                  }}
                />
                <span className="flex-1 font-primary text-[12.5px] leading-tight text-font-subtle">
                  <b className="font-primary-bold text-font">{item.title}</b>
                  {" — "}
                  {item.subtitle}
                </span>
                <span className="ml-auto font-primary-light text-[11px] text-font-subtlest">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center gap-4 font-primary-light text-[11px] tracking-[0.04em] text-font-subtlest">
          <span>Open source</span>
          <span
            style={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "var(--color-border-bold)",
            }}
          />
          <span>MIT License</span>
          <span
            style={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "var(--color-border-bold)",
            }}
          />
          <span>Built with Remix</span>
        </div>
      </section>

      {/* ── Auth panel (right) ── */}
      <section
        aria-label="Sign in"
        className="flex flex-col items-center justify-center bg-elevation-surface px-8 py-16"
      >
        {/* Mobile-only wordmark */}
        <div className="mb-8 flex items-center gap-2 lg:hidden">
          <span className="text-font">
            <RadarIcon size={20} />
          </span>
          <span className="font-primary-black text-sm tracking-tight text-font">
            Jira Clone
          </span>
        </div>

        {/* Card */}
        <div className="w-full max-w-[392px]">
          {/* Auth head */}
          <div className="mb-8">
            <p className="mb-3.5 font-primary-bold text-[12px] uppercase tracking-[0.16em] text-font-subtlest">
              Sign in
            </p>
            <h2 className="mb-2 font-primary-black text-[28px] leading-[1.1] tracking-[-0.02em] text-font-danger">
              Welcome back
            </h2>
            <p className="font-primary text-[15px] leading-[1.5] text-font-subtle">
              Select your user profile to continue.
            </p>
          </div>

          {/* Form */}
          <Form method="post" className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="user-select"
                className="font-primary-bold text-[13px] text-font-subtle"
              >
                User account
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
              aria-label="Sign in"
              className="mt-1 w-full"
            >
              Sign in
            </Button>
          </Form>

          {/* Footnote */}
          <p className="mt-6 text-center font-primary-light text-[13px] text-font-subtlest">
            No authentication required. Try any user!
          </p>

          {/* Secure badge */}
          <div className="mt-3 flex items-center justify-center gap-1.5 text-font-subtlest">
            <LockIcon />
            <span className="font-primary-light text-[11px] tracking-[0.05em]">
              No credentials stored
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

interface Props {
  users: User[];
}
