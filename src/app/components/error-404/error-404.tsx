// Animation configuration constants
const ANIMATION_DURATION = {
  FADE_IN_UP: "0.8s",
  FLOAT: "3s",
  SPARKLE: "2s",
} as const;

const ANIMATION_DELAY = {
  HERO: "0s",
  HEADLINE: "0.2s",
  DESCRIPTION: "0.4s",
  BUTTON: "0.6s",
  SPARKLE_1: "0s",
  SPARKLE_2: "0.3s",
  SPARKLE_3: "0.6s",
} as const;

// Styling constants for the 404 illustration
const STYLES = {
  HERO_NUMBER: {
    fontSize: "clamp(80px, 20vw, 200px)",
    color: "var(--Blue700)",
    textShadow: "0 4px 20px rgba(12, 102, 228, 0.2)",
  },
  HEADLINE: {
    fontSize: "clamp(24px, 5vw, 48px)",
    color: "red",
  },
  DESCRIPTION: {
    maxWidth: "500px",
    fontSize: "clamp(14px, 2vw, 18px)",
    lineHeight: "1.6",
    color: "var(--Neutral700)",
  },
  BUTTON: {
    backgroundColor: "var(--Blue700)",
    color: "var(--Neutral0)",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "16px",
    boxShadow: "0 4px 12px rgba(12, 102, 228, 0.3)",
  },
  SPARKLE_YELLOW: { color: "var(--Yellow500)" },
  SPARKLE_BLUE: { color: "var(--Blue500)" },
  SPARKLE_MAGENTA: { color: "var(--Magenta500)" },
} as const;

// Default fallback message when no custom message is provided
const DEFAULT_ERROR_MESSAGE =
  "The page you're looking for has vanished into thin air. Even our wizard robot can't find it!";

const DEFAULT_HREF = "/";

export const Error404 = ({ message, href = DEFAULT_HREF }: Props) => {
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes sparkle {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }
        .error-404-hero {
          animation: fadeInUp ${ANIMATION_DURATION.FADE_IN_UP} ease-out;
        }
        .error-404-illustration {
          animation: float ${ANIMATION_DURATION.FLOAT} ease-in-out infinite;
        }
        .error-404-headline {
          animation: fadeInUp ${ANIMATION_DURATION.FADE_IN_UP} ease-out ${ANIMATION_DELAY.HEADLINE} both;
        }
        .error-404-description {
          animation: fadeInUp ${ANIMATION_DURATION.FADE_IN_UP} ease-out ${ANIMATION_DELAY.DESCRIPTION} both;
        }
        .error-404-button {
          animation: fadeInUp ${ANIMATION_DURATION.FADE_IN_UP} ease-out ${ANIMATION_DELAY.BUTTON} both;
        }
        .error-404-sparkle {
          animation: sparkle ${ANIMATION_DURATION.SPARKLE} ease-in-out infinite;
        }
        .error-404-sparkle-1 {
          animation-delay: ${ANIMATION_DELAY.SPARKLE_1};
        }
        .error-404-sparkle-2 {
          animation-delay: ${ANIMATION_DELAY.SPARKLE_2};
        }
        .error-404-sparkle-3 {
          animation-delay: ${ANIMATION_DELAY.SPARKLE_3};
        }
        .error-404-container {
          min-height: 100vh;
          background: linear-gradient(
            135deg,
            var(--Neutral0) 0%,
            var(--Blue100) 100%
          );
        }
      `}</style>
      <div className="error-404-container flex flex-col items-center justify-center px-4 py-8 relative">
        {/* Decorative sparkles */}
        <div
          className="absolute top-20 left-12 error-404-sparkle error-404-sparkle-1 text-2xl"
          style={STYLES.SPARKLE_YELLOW}
        >
          ✦
        </div>
        <div
          className="absolute bottom-32 right-16 error-404-sparkle error-404-sparkle-2 text-2xl"
          style={STYLES.SPARKLE_BLUE}
        >
          ✦
        </div>
        <div
          className="absolute top-1/2 right-12 error-404-sparkle error-404-sparkle-3 text-2xl"
          style={STYLES.SPARKLE_MAGENTA}
        >
          ✦
        </div>

        {/* Main content */}
        <div className="error-404-hero text-center max-w-2xl">
          {/* Hero 404 number */}
          <div
            className="font-primary-black leading-none mb-6"
            style={STYLES.HERO_NUMBER}
          >
            404
          </div>

          {/* Illustration */}
          <div className="error-404-illustration mb-6 flex justify-center">
            <img
              src="/images/error-404.svg"
              alt="Wizard robot lost in the magic"
              className="h-auto w-full"
              style={{ maxWidth: "300px" }}
            />
          </div>

          {/* Headline */}
          <h1
            className="error-404-headline font-primary-bold mb-4 text-center leading-6"
            style={STYLES.HEADLINE}
          >
            Lost in the Magic?
          </h1>

          {/* Description */}
          <p
            className="error-404-description mb-8 text-center"
            style={STYLES.DESCRIPTION}
          >
            {message || DEFAULT_ERROR_MESSAGE}
          </p>

          {/* CTA Button */}
          <a
            href={href}
            className="error-404-button inline-flex items-center justify-center px-8 py-3 rounded-md cursor-pointer transition-all duration-200 hover:opacity-90 active:opacity-80"
            style={STYLES.BUTTON}
          >
            Go Back Home
          </a>
        </div>
      </div>
    </>
  );
};

interface Props {
  message?: string;
  href?: string;
}
