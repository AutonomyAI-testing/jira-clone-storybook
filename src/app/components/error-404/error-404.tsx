import cx from "classix";

export const Error404 = ({
  message = "Page not found",
  description = "The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
  href = "/",
  linkText = "Go to Homepage",
  className,
}: Props) => {
  return (
    <div
      className={cx(
        "flex flex-col items-center justify-center text-center px-6",
        className
      )}
    >
      {/* Circular illustration with gradient ring */}
      <div className="relative mb-8" style={{ width: 230, height: 230 }}>
        {/* Gradient ring layer — sits behind the image circle */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 185deg, #00E5D9 0deg, #00E0D4 40deg, #38BDF8 110deg, #818CF8 180deg, #A855F7 240deg, #D946EF 300deg, #00E5D9 360deg)",
          }}
        />
        {/* White padding ring to separate gradient from image */}
        <div
          className="absolute rounded-full bg-elevation-surface"
          style={{ inset: 3 }}
        />
        {/* Image circle */}
        <div
          className="absolute overflow-hidden rounded-full bg-elevation-surface-sunken"
          style={{ inset: 9 }}
        >
          <img
            src="/images/error-404.svg"
            alt="404 illustration"
            className="w-full h-full object-contain scale-110"
          />
        </div>
      </div>

      {/* 404 Number — gradient text matching the ring */}
      <h1
        className="font-primary-black mb-2"
        style={{
          fontSize: "7rem",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          background:
            "linear-gradient(135deg, #00E5D9 0%, #38BDF8 35%, #818CF8 60%, #A855F7 80%, #D946EF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        404
      </h1>

      {/* Title */}
      <h2 className="font-primary-black text-2xl text-font mb-3">{message}</h2>

      {/* Description */}
      <p
        className="font-primary text-base text-font-subtle mb-8 max-w-sm"
        style={{ lineHeight: 1.6 }}
      >
        {description}
      </p>

      {/* CTA Button */}
      {href ? (
        <a
          href={href}
          className="inline-flex items-center gap-2 rounded px-6 py-2.5 font-primary-bold text-sm text-font-inverse bg-background-brand-bold hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          {linkText}
        </a>
      ) : null}
    </div>
  );
};

interface Props {
  message?: string;
  description?: string;
  href?: string;
  linkText?: string;
  className?: string;
}
