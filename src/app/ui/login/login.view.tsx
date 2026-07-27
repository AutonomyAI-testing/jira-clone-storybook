import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

const PIPELINE_ITEMS = [
  {
    label: "Issue created",
    description: "Design new user onboarding flow",
    time: "09:41",
    dotClass: "bg-background-info-bold",
  },
  {
    label: "In progress",
    description: "Reviewing sprint backlog priorities",
    time: "10:15",
    dotClass: "bg-background-warning-bold",
  },
  {
    label: "Done",
    description: "v2.4 shipped, 12 issues closed",
    time: "11:02",
    dotClass: "bg-background-success-bold",
  },
] as const;

const FOOTER_ITEMS = [
  "Drag & Drop Boards",
  "5 Color Themes",
  "Real-time Updates",
];

const gradientStyle = {
  background:
    "linear-gradient(95deg, var(--color-background-brand-bold), var(--color-font-brand))",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

const Wordmark = (): JSX.Element => (
  <div className="flex items-center gap-3">
    <img src="/images/logo.png" alt="Jira Clone" className="h-8 w-auto" />
    <span className="font-primary-black text-lg tracking-tight text-font">
      Jira Clone
    </span>
  </div>
);

const PipelineMotif = (): JSX.Element => (
  <div className="mt-10 flex flex-col" aria-hidden="true">
    {PIPELINE_ITEMS.map((item, index) => (
      <div key={index} className="relative flex items-center gap-3.5 py-3">
        {/* Connector line from this dot to next */}
        {index < PIPELINE_ITEMS.length - 1 && (
          <div
            className="absolute left-[4px] top-[19px] w-[2px]"
            style={{
              height: "calc(100% - 2px)",
              backgroundColor: "var(--color-font-subtlest)",
              opacity: 0.5,
            }}
            aria-hidden="true"
          />
        )}
        <span
          className={`relative z-[1] h-[10px] w-[10px] flex-none rounded-full ${item.dotClass}`}
          style={{ boxShadow: "0 0 0 3px color-mix(in srgb, currentColor 0%, transparent)" }}
        />
        <span className="flex-1 text-xs text-font-subtle">
          <span className="font-primary-bold text-font">{item.label}</span>
          {" — "}
          {item.description}
        </span>
        <span className="shrink-0 pl-4 text-2xs tabular-nums text-font-subtlest">{item.time}</span>
      </div>
    ))}
  </div>
);

const BrandPanel = (): JSX.Element => (
  <section className="relative hidden flex-col overflow-hidden border-r border-border bg-elevation-surface-sunken p-10 min-[920px]:flex lg:p-14">
    {/* Subtle corner glow */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(60% 55% at 18% 8%, var(--color-background-brand-subtlest), transparent 60%), radial-gradient(50% 50% at 92% 100%, var(--color-background-brand-subtlest), transparent 62%)",
        opacity: 0.6,
      }}
      aria-hidden="true"
    />

    {/* Wordmark */}
    <div className="relative z-[1]">
      <Wordmark />
    </div>

    {/* Hero section */}
    <div className="relative z-[1] my-auto max-w-[480px] py-12">
      <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-font-brand">
        Project management, simplified
      </p>
      <h1
        className="font-primary-black text-font"
        style={{
          fontSize: "clamp(32px, 3.6vw, 48px)",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
        }}
      >
        Plan, track, and ship &mdash;{" "}
        <span style={gradientStyle}>your way.</span>
      </h1>
      <p className="mt-5 max-w-[420px] text-lg leading-relaxed text-font-subtle">
        From backlog to done &mdash; organize sprints, manage issues, and
        collaborate across teams in one clean workspace.
      </p>
      <PipelineMotif />
    </div>

    {/* Footer badges */}
    <div className="relative z-[1] mt-10 flex items-center gap-1 border-t border-border pt-6 text-2xs tracking-wide text-font-subtlest">
      {FOOTER_ITEMS.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          {index > 0 && (
            <span
              className="mx-3 h-1 w-1 rounded-full bg-font-subtlest opacity-50"
              aria-hidden="true"
            />
          )}
          {item}
        </span>
      ))}
    </div>
  </section>
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
    <main className="grid min-h-screen grid-cols-1 min-[920px]:grid-cols-[1.05fr_0.95fr]">
      <BrandPanel />

      <section className="flex items-center justify-center bg-elevation-surface p-7 lg:p-16">
        <div className="w-full max-w-[392px]">
          {/* Mobile-only wordmark (hidden on ≥920px) */}
          <div className="mb-8 min-[920px]:hidden">
            <Wordmark />
          </div>

          {/* Header */}
          <div className="mb-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-font-subtlest">
              No auth required
            </p>
            <h2 className="font-primary-black text-3xl tracking-tight text-font-danger">
              Welcome aboard
            </h2>
            <p className="mt-2 text-sm leading-normal text-font-subtle">
              Select your profile to continue. You can switch users anytime.
            </p>
          </div>

          {/* Login form */}
          <Form method="post">
            <div className="mb-4">
              <label className="mb-2 block text-xs font-medium text-font-subtle">
                User profile
              </label>
              <Select.Root
                name="user"
                defaultValue={userMock1.id}
                onValueChange={onValueChange}
              >
                <Select.Trigger
                  className="flex w-full justify-between rounded border border-border-input bg-background-input px-3 py-2.5 hover:bg-background-input-hovered"
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
              aria-label="Login"
              className="mt-1 w-full"
            >
              Login
            </Button>
          </Form>

          {/* Footnote */}
          <p className="mt-7 text-center text-xs text-font-subtlest">
            This is a demo app &mdash; no real authentication required.
          </p>
        </div>
      </section>
    </main>
  );
};

interface Props {
  users: User[];
}
