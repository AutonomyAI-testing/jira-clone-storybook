import cx from "classix";

// Color palette for the 404 error page
const COLORS = {
  background: "#0d1117",
  textNumber: "var(--Blue700)",
  textMessage: "var(--Red700)",
  buttonBackground: "var(--Blue700)",
  buttonText: "var(--Neutral0)",
  imageBorder:
    "conic-gradient(from 180deg, #37b4c3, #6ea8fe, #a78bfa, #37b4c3)",
  imageInnerBg: "#1a2233",
} as const;

export const Error404 = ({
  message = "Lost in another dimension",
  href = "/",
}: Props): JSX.Element => {
  // Full-screen layout with centered content creates an immersive error experience
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center gap-8 px-4"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* 404 Number */}
      <div
        className="font-primary-black leading-none"
        style={{
          fontSize: "160px",
          color: COLORS.textNumber,
          textShadow:
            "0 0 20px rgba(12, 102, 228, 0.3), 0 0 40px rgba(12, 102, 228, 0.2)",
        }}
      >
        404
      </div>

      {/* Circular Image Frame with Gradient Border
          The gradient provides visual interest and frames the character image.
          The padding creates the visible gradient ring effect. */}
      <div
        className="relative flex h-64 w-64 items-center justify-center rounded-full"
        style={{
          background: COLORS.imageBorder,
          padding: "8px",
        }}
      >
        {/* Inner dark background circle — visible when image is absent.
            Acts as a fallback if the character image fails to load. */}
        <div
          className="absolute rounded-full"
          style={{
            inset: "8px",
            backgroundColor: COLORS.imageInnerBg,
          }}
        />
        <img
          src="/images/manga-404.svg"
          alt="Lost character"
          className="relative h-full w-full rounded-full object-cover"
          style={{ zIndex: 1 }}
          onError={(e) => {
            // Hide image if it fails to load, revealing the inner background circle
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* Tagline */}
      <h1
        className="max-w-md text-center font-primary-bold text-3xl leading-tight"
        style={{ color: COLORS.textMessage }}
      >
        {message}
      </h1>

      {/* Home Button */}
      <a
        href={href}
        className={cx(
          "font-primary-medium rounded-md px-6 py-3 text-lg transition-all duration-200",
          "hover:opacity-90 active:opacity-75"
        )}
        style={{
          backgroundColor: COLORS.buttonBackground,
          color: COLORS.buttonText,
        }}
      >
        Go back home
      </a>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
