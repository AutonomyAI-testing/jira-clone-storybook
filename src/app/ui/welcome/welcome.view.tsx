import { Link } from "@remix-run/react";
import { TaskIcon } from "@app/components/icons";

export const WelcomeView = (): JSX.Element => {
  return (
    <div className="grid min-h-screen grid-cols-[1.05fr_0.95fr] max-[920px]:grid-cols-1">
      {/* ── LEFT / BRAND PANEL ────────────────────────────────── */}
      <section className="relative hidden flex-col overflow-hidden border-r border-border bg-elevation-surface-sunken p-[clamp(36px,4.5vw,64px)] min-[920px]:flex">
        {/* Subtle corner glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 55% at 18% 8%, rgba(66,115,219,.18), transparent 60%), radial-gradient(50% 50% at 92% 100%, rgba(0,82,204,.08), transparent 62%)",
          }}
          aria-hidden="true"
        />

        {/* Content sits above glow */}
        <div className="relative z-10 flex h-full flex-col">
          {/* Wordmark */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-background-brand-bold shadow-blue">
              <TaskIcon size={16} />
            </div>
            <span className="font-primary-black text-[19px] tracking-tight text-font">
              Jira Clone
            </span>
          </div>

          {/* Middle hero */}
          <div className="my-auto max-w-[480px] py-12">
            <p className="mb-6 font-primary text-xs uppercase tracking-[.16em] text-font-brand">
              Project management
            </p>

            <h1 className="font-primary-black text-[clamp(32px,3.6vw,48px)] leading-[1.05] tracking-tight text-font [text-wrap:balance]">
              Everything your team needs,{" "}
              <span className="text-font-brand">in one place.</span>
            </h1>

            <p className="mt-6 font-primary-light text-lg leading-relaxed text-font-subtle">
              Plan sprints, track issues, and ship software faster. A clean,
              open-source take on the tools your team already loves.
            </p>

            {/* Pipeline / status motif */}
            <div className="relative mt-10 flex flex-col" aria-hidden="true">
              {/* Vertical connector line */}
              <div className="absolute bottom-[22px] left-[5px] top-[22px] w-px bg-border" />

              {pipelineRows.map((row, i) => (
                <div
                  key={i}
                  className="relative flex items-center gap-4 py-[11px]"
                >
                  <span
                    className="relative z-10 h-[11px] w-[11px] flex-none rounded-full"
                    style={{
                      background: row.color,
                      boxShadow: `0 0 0 4px ${row.glow}`,
                    }}
                  />
                  <span className="font-primary-light text-[12.5px] tracking-[.02em] text-font-subtle">
                    <strong className="font-primary text-font">
                      {row.label}
                    </strong>{" "}
                    {row.detail}
                  </span>
                  <span className="ml-auto font-primary-light text-[11px] text-font-subtlest">
                    {row.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Brand footer */}
          <div className="flex items-center gap-4 font-primary-light text-[11px] tracking-[.04em] text-font-subtlest">
            <span>Open source</span>
            <span className="h-1 w-1 rounded-full bg-border-bold" aria-hidden="true" />
            <span>MIT license</span>
            <span className="h-1 w-1 rounded-full bg-border-bold" aria-hidden="true" />
            <span>Built with Remix</span>
          </div>
        </div>
      </section>

      {/* ── RIGHT / WELCOME PANEL ─────────────────────────────── */}
      <section className="flex items-center justify-center bg-elevation-surface-sunken p-[clamp(28px,5vw,64px)]">
        <div className="w-full max-w-[392px]">
          {/* Mobile wordmark — only shown when brand panel is hidden */}
          <div className="mb-8 flex items-center gap-3 min-[920px]:hidden">
            <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-background-brand-bold shadow-blue">
              <TaskIcon size={16} />
            </div>
            <span className="font-primary-black text-[19px] tracking-tight text-font">
              Jira Clone
            </span>
          </div>

          {/* Welcome heading block */}
          <div className="mb-8">
            <p className="mb-4 font-primary text-xs uppercase tracking-[.16em] text-font-subtlest">
              Jira Clone
            </p>
            <h2 className="font-primary-black text-[30px] leading-[1.1] tracking-tight text-font-danger">
              Welcome
            </h2>
            <p className="mt-3 font-primary-light text-[15px] leading-relaxed text-font-subtle">
              Select a user to explore projects, issues, and comments.
            </p>
          </div>

          {/* CTA */}
          <Link
            to="/login"
            className="flex w-full items-center justify-center rounded-lg bg-background-brand-bold px-4 py-3 font-primary text-[15px] font-semibold text-font-inverse shadow-blue transition-all duration-150 hover:-translate-y-px hover:bg-background-brand-bold-hovered active:translate-y-0 active:bg-background-brand-bold-pressed"
          >
            Get started
          </Link>

          {/* Footer note */}
          <p className="mt-7 text-center font-primary-light text-[13.5px] text-font-subtle">
            An open-source project made with{" "}
            <a
              href="https://github.com/daniserrano7/jira-clone"
              className="font-primary text-font-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Remix, React &amp; Tailwind
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

/* ── static data ──────────────────────────────────────────────── */
const pipelineRows = [
  {
    label: "Issue created",
    detail: "— add OAuth provider, auth-service",
    tag: "Todo",
    color: "var(--color-background-brand-bold)",
    glow: "rgba(0,82,204,.15)",
  },
  {
    label: "In progress",
    detail: "— implementation started by dev team",
    tag: "Doing",
    color: "var(--color-background-warning-bold)",
    glow: "rgba(226,178,3,.15)",
  },
  {
    label: "PR merged",
    detail: "— verified in staging, deployed",
    tag: "Done",
    color: "var(--color-background-success-bold)",
    glow: "rgba(55,183,74,.15)",
  },
];
