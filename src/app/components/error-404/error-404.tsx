export const Error404 = ({ message = "Looks like you're lost in the void.", href = "/" }: Props) => {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center gap-0 bg-elevation-surface-sunken"
    >
      {/* Big 404 number with character overlaid */}
      <div className="relative flex items-center justify-center select-none">
        {/* Giant 404 text */}
        <span
          style={{
            fontSize: "clamp(120px, 22vw, 280px)",
            fontWeight: 900,
            letterSpacing: "-0.05em",
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: "3px var(--Neutral300)",
            userSelect: "none",
          }}
        >
          404
        </span>

        {/* Character circle image — centered and overlapping the 404 */}
        <div
          className="absolute"
          style={{
            width: "clamp(160px, 20vw, 240px)",
            height: "clamp(160px, 20vw, 240px)",
          }}
        >
          <img
            src="/images/error-404-character.png"
            alt="Lost character"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
              boxShadow: "0 8px 40px rgba(9, 30, 66, 0.18), 0 2px 8px rgba(9, 30, 66, 0.12)",
            }}
          />
        </div>
      </div>

      {/* Content below the 404 */}
      <div className="flex flex-col items-center gap-4 pt-6">
        <h1
          className="text-font-success text-center font-bold"
          style={{ fontSize: "clamp(20px, 3vw, 28px)", marginTop: 0 }}
        >
          Page Not Found
        </h1>

        <p
          className="text-font-subtle text-center"
          style={{ fontSize: "clamp(14px, 1.5vw, 16px)", maxWidth: 360 }}
        >
          {message}
        </p>

        {href && (
          <a
            href={href}
            className="mt-2 inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-font-inverse bg-background-brand-bold hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed transition-colors"
            style={{ textDecoration: "none" }}
          >
            ← Go back home
          </a>
        )}
      </div>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
