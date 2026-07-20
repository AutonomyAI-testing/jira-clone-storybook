export const Error404 = ({
  message = "The page you're looking for doesn't exist. It might have been moved, renamed, or the URL may be incorrect.",
  href = "/",
}: Props) => {
  return (
    <div className="relative grid min-h-screen grid-cols-1 overflow-hidden [grid-template-columns:1.05fr_0.95fr] max-[920px]:[grid-template-columns:1fr]">
      {/* Film grain overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[9999]"
        style={{
          opacity: 0.045,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ============ LEFT / BRAND PANEL ============ */}
      <section
        className="relative hidden flex-col overflow-hidden border-r border-border bg-elevation-surface-sunken px-[clamp(36px,4.5vw,64px)] py-[clamp(36px,4.5vw,64px)] [grid-column:1] [display:flex] max-[920px]:hidden"
        aria-hidden="true"
      >
        {/* Warm off-axis glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 55% at 18% 8%, rgba(0,82,204,0.18), transparent 60%), radial-gradient(50% 50% at 92% 100%, rgba(0,82,204,0.08), transparent 62%)",
          }}
        />

        {/* Content is positioned above the glow */}
        <div className="relative z-10 flex flex-1 flex-col">
          {/* Logo / wordmark */}
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Jira Clone"
              className="h-7 w-auto"
            />
          </div>

          {/* Middle illustration area */}
          <div className="my-auto flex flex-col items-center justify-center py-12">
            <img
              src="/images/error-404.svg"
              alt="404 robot illustration"
              className="mb-8 h-[280px] w-auto"
            />

            <p className="font-primary-black text-[clamp(80px,9vw,120px)] font-extrabold leading-none tracking-tight text-font-subtlest opacity-20 select-none">
              404
            </p>
          </div>

          {/* Brand footer */}
          <div className="flex items-center gap-4 font-primary text-xs tracking-widest text-font-subtlest">
            <span>Jira Clone</span>
            <span className="inline-block h-1 w-1 rounded-full bg-border" aria-hidden="true" />
            <span>Error 404</span>
            <span className="inline-block h-1 w-1 rounded-full bg-border" aria-hidden="true" />
            <span>Page Not Found</span>
          </div>
        </div>
      </section>

      {/* ============ RIGHT / CONTENT PANEL ============ */}
      <section className="flex items-center justify-center bg-elevation-surface px-[clamp(28px,5vw,64px)] py-[clamp(28px,5vw,64px)]">
        <div className="w-full max-w-[392px]">
          {/* Mobile-only logo */}
          <div className="mb-8 flex items-center gap-3 [display:none] max-[920px]:[display:flex]">
            <img
              src="/images/logo.png"
              alt="Jira Clone"
              className="h-7 w-auto"
            />
          </div>

          {/* Error header */}
          <div className="mb-8">
            <p className="mb-3.5 font-primary text-xs font-medium uppercase tracking-[0.16em] text-font-subtlest">
              Error 404
            </p>
            <h1 className="font-primary-black text-font-danger text-[30px] font-bold leading-[1.1] tracking-[-0.02em]">
              Page not found
            </h1>
            <p className="mt-2.5 text-[15px] leading-relaxed text-font-subtle">
              {message}
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3">
            <a
              href={href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-[6px] bg-background-brand-bold px-4 py-3 font-primary-bold text-[15px] font-semibold text-font-inverse transition-colors hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
            >
              Go to homepage
            </a>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") window.history.back();
              }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-[6px] border border-border bg-transparent px-4 py-3 font-primary text-[15px] text-font-subtle transition-colors hover:bg-background-neutral-hovered hover:text-font active:bg-background-neutral-pressed"
            >
              Go back
            </button>
          </div>

          {/* Secure / attribution note */}
          <p className="mt-7 text-center font-primary text-xs text-font-subtlest">
            Lost? Try{" "}
            <a
              href="/"
              className="text-link hover:underline"
            >
              visiting the homepage
            </a>{" "}
            or refreshing the page.
          </p>
        </div>
      </section>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
