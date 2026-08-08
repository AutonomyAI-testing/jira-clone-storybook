import cx from "classix";

export const Error404 = ({
  message = "The page you're looking for has wandered off. Click below to go back.",
  href = "/",
}: Props): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8">
      {/* Large 404 heading with fade-in animation for visual hierarchy */}
      <h1
        className="mb-4 text-center font-primary-black leading-none"
        style={{
          fontSize: "clamp(80px, 20vw, 200px)",
          color: "var(--Neutral1000)",
          animation: "fadeIn 0.8s ease-out",
        }}
      >
        404
      </h1>

      {/* Robot illustration with drop shadow for depth */}
      <div className="mb-8 flex justify-center">
        <img
          src="/images/error-404-wizard.svg"
          alt="Wizard Robot"
          className="h-auto w-full max-w-sm"
          style={{
            filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1))",
          }}
        />
      </div>

      {/* Title - Error heading with emphasis color */}
      <h2
        className="mb-3 text-center font-primary-bold"
        style={{
          fontSize: "clamp(24px, 5vw, 36px)",
          color: "var(--Red700)",
          animation: "slideDown 0.6s ease-out 0.1s backwards",
        }}
      >
        Oops! Page Not Found
      </h2>

      {/* Explanatory message with staggered animation */}
      <p
        className="mb-8 max-w-md text-center leading-relaxed"
        style={{
          fontSize: "clamp(14px, 3vw, 18px)",
          color: "var(--Neutral700)",
          animation: "slideDown 0.6s ease-out 0.2s backwards",
        }}
      >
        {message}
      </p>

      {/* Conditional action button - only rendered when href is provided */}
      {href ? (
        <a
          href={href}
          className={cx(
            "inline-flex items-center justify-center rounded-lg px-8 py-3 font-primary-bold transition-all duration-200",
            "bg-background-brand-bold text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
          )}
          style={{
            fontSize: "clamp(14px, 2vw, 16px)",
            animation: "slideDown 0.6s ease-out 0.3s backwards",
            cursor: "pointer",
          }}
        >
          Back to Home
        </a>
      ) : null}

      {/* CSS animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
