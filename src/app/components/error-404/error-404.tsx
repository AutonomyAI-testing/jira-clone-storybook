import cx from "classix";

export const Error404 = ({
  message = "Oops! We couldn't find that page.",
  href = "/",
}: Props) => {
  return (
    <div
      className={cx(
        "flex min-h-screen w-full flex-col items-center justify-center gap-8",
        "bg-elevation-surface px-6 py-12 text-center"
      )}
    >
      {/* Circular mascot avatar — gradient ring is baked into the PNG */}
      <img
        src="/images/error-404-mascot.png"
        alt="404 mascot"
        className="flex-shrink-0"
        style={{
          width: "320px",
          height: "320px",
          objectFit: "cover",
          borderRadius: "50%",
          display: "block",
        }}
      />

      {/* Error code */}
      <div className="space-y-3">
        <h1
          className="font-primary-black"
          style={{ fontSize: "6rem", lineHeight: "1", letterSpacing: "-0.04em", color: "#ef4444" }}
        >
          404
        </h1>
        <p
          className="font-primary text-font-subtle"
          style={{ fontSize: "1.125rem", maxWidth: "340px" }}
        >
          {message}
        </p>
      </div>

      {/* Go Home button */}
      <a
        href={href}
        className={cx(
          "inline-flex items-center justify-center rounded px-6 py-2.5",
          "font-primary text-sm font-medium",
          "bg-background-brand-bold text-font-inverse",
          "hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand",
          "transition-colors duration-150"
        )}
      >
        Go Home
      </a>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
