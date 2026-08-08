import cx from "classix";

export const Error404 = ({ message, href = "/" }: Props): JSX.Element => {
  const defaultMessage =
    "The page you're looking for has vanished into another dimension. Even our most powerful wizard can't find it.";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8" style={{ backgroundColor: "#f5eed8" }}>
      {/* Illustration - fades in first */}
      <img
        src="/images/error-404.svg"
        alt="Wizard robot lost in space"
        className="mb-8 h-auto w-64 drop-shadow-lg animate-slide-up"
        style={{
          animationDelay: "0ms",
          animationDuration: "0.6s",
        }}
      />

      {/* Error Code - fades in second */}
      <div
        className="mb-6 animate-slide-up text-8xl font-primary-black text-font-brand"
        style={{
          animationDelay: "150ms",
          animationDuration: "0.6s",
        }}
      >
        404
      </div>

      {/* Main Heading - fades in third */}
      <h1
        className="mb-4 animate-slide-up text-center text-3xl font-primary-bold text-red-600"
        style={{
          animationDelay: "300ms",
          animationDuration: "0.6s",
          color: "var(--Red600)",
        }}
      >
        Oops! Our wizard lost the map
      </h1>

      {/* Body Copy - fades in fourth */}
      <p
        className="mb-8 max-w-md animate-slide-up text-center text-font-subtle"
        style={{
          animationDelay: "450ms",
          animationDuration: "0.6s",
        }}
      >
        {message || defaultMessage}
      </p>

      {/* Primary CTA Button - fades in fifth */}
      <a
        href={href}
        className={cx(
          "mb-6 inline-block animate-slide-up rounded px-6 py-2.5 font-primary-bold text-sm transition-colors duration-200",
          "bg-background-brand-bold text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
        )}
        style={{
          animationDelay: "600ms",
          animationDuration: "0.6s",
        }}
      >
        Return Home ★
      </a>

      {/* Secondary Links - fades in last */}
      <div
        className="flex animate-slide-up gap-6 text-sm"
        style={{
          animationDelay: "750ms",
          animationDuration: "0.6s",
        }}
      >
        <a href="/projects" className="text-link hover:underline">
          Go to Projects
        </a>
        <span className="text-font-subtle">•</span>
        <a
          href="mailto:danielserrano.contacto@gmail.com?subject=404%20Error"
          className="text-link hover:underline"
        >
          Report Issue
        </a>
      </div>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
