"use client";

import { useCallback } from "react";

const BUTTON_COLORS = {
  primary: {
    base: "var(--Blue700)",
    hover: "var(--Blue800)",
  },
  secondary: {
    base: "var(--Blue100)",
    hover: "var(--Blue200)",
  },
  text: "var(--Neutral0)",
} as const;

const DECORATIVE_STAR_COLOR = "#F5C518";
const GRADIENT_BACKGROUND = "linear-gradient(135deg, #F5EDD6 0%, #EDE4C8 100%)";

export const Error404 = (): JSX.Element => {
  // Navigate back in browser history when user clicks 'Go back' button
  // Window check prevents SSR issues
  const handleGoBack = useCallback(() => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  }, []);

  // Handle hover state changes for buttons by updating inline styles
  const handleMouseEnter = (color: string) => (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor = color;
  };

  const handleMouseLeave = (color: string) => (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor = color;
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-neutral-50 to-neutral-100 p-4" style={{ background: GRADIENT_BACKGROUND }}>
      <style>{`
        @keyframes float-pulse {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        
        @keyframes bob {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }
        
        .error-404-number {
          animation: float-pulse 4s ease-in-out infinite;
        }
        
        .robot-image {
          animation: bob 3s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative stars background - adds whimsical visual context to the wizard robot */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] text-4xl opacity-20" style={{ color: DECORATIVE_STAR_COLOR }}>✦</div>
        <div className="absolute top-1/4 right-[5%] text-3xl opacity-15" style={{ color: DECORATIVE_STAR_COLOR }}>✧</div>
        <div className="absolute bottom-1/3 left-[8%] text-2xl opacity-20" style={{ color: DECORATIVE_STAR_COLOR }}>★</div>
        <div className="absolute bottom-1/4 right-[12%] text-3xl opacity-15" style={{ color: DECORATIVE_STAR_COLOR }}>✦</div>
        <div className="absolute top-1/3 right-1/4 text-2xl opacity-10" style={{ color: DECORATIVE_STAR_COLOR }}>✧</div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 max-w-2xl">
        {/* Large 404 number */}
        <div className="error-404-number text-center">
          <div
            className="font-primary-black text-9xl leading-none"
            style={{
              color: "var(--Blue700)",
              textShadow: "0 0 20px rgba(12, 102, 228, 0.3)",
            }}
          >
            404
          </div>
        </div>

        {/* Robot image */}
        <div className="robot-image">
          <img
            src="/images/error-wizard-robot.svg"
            alt="Wizard robot character"
            className="h-auto w-full max-w-sm"
          />
        </div>

        {/* Headline - using red for high visual emphasis on error state */}
        <h1
          className="text-center text-4xl font-primary-bold leading-tight"
          style={{ color: "red" }}
        >
          Oops! Page not found
        </h1>

        {/* Subtext */}
        <p
          className="text-center text-lg leading-relaxed max-w-xl"
          style={{ color: "var(--Neutral600)" }}
        >
          Looks like this page wandered off into a magical dimension. Even our wizard
          robot couldn't find it.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col gap-4 pt-4">
          <a
            href="/"
            className="flex cursor-pointer items-center justify-center gap-2 rounded px-8 py-3 text-lg font-primary-bold transition-colors"
            style={{
              backgroundColor: BUTTON_COLORS.primary.base,
              color: BUTTON_COLORS.text,
            }}
            onMouseEnter={handleMouseEnter(BUTTON_COLORS.primary.hover)}
            onMouseLeave={handleMouseLeave(BUTTON_COLORS.primary.base)}
          >
            Take me home
          </a>
          <button
            onClick={handleGoBack}
            className="px-8 py-3 text-lg font-primary-bold text-center rounded transition-colors"
            style={{
              color: BUTTON_COLORS.primary.base,
              backgroundColor: BUTTON_COLORS.secondary.base,
            }}
            onMouseEnter={handleMouseEnter(BUTTON_COLORS.secondary.hover)}
            onMouseLeave={handleMouseLeave(BUTTON_COLORS.secondary.base)}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};
