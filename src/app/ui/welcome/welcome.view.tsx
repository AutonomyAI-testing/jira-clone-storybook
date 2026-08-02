import { Link } from "@remix-run/react";
import { Button } from "@app/components/button";

export const WelcomeView = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 px-6 text-center">
      {/* Mascot illustration */}
      <div
        className="animate-bounce-slow relative"
        style={{ animation: "float 4s ease-in-out infinite" }}
      >
        <img
          src="/images/wizard-mascot.png"
          alt="Wizard mascot"
          className="h-56 w-auto drop-shadow-lg"
          style={{ filter: "drop-shadow(0 8px 24px rgba(9, 30, 66, 0.15))" }}
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-primary-black text-5xl" style={{ color: "var(--Red500)" }}>Welcome</h1>
        <p className="max-w-md font-primary-light text-lg text-font-subtle">
          Your team's workspace for tracking issues, managing projects, and
          getting things done — together.
        </p>
      </div>

      {/* CTA */}
      <Link to="/login">
        <Button size="lg" color="primary" variant="contained">
          Get started
        </Button>
      </Link>

      {/* Decorative floating stars */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <span
          className="absolute text-2xl"
          style={{
            top: "15%",
            left: "12%",
            color: "var(--Yellow300)",
            animation: "float 5s ease-in-out infinite",
            animationDelay: "0.5s",
          }}
        >
          ★
        </span>
        <span
          className="absolute text-lg"
          style={{
            top: "20%",
            right: "15%",
            color: "var(--Blue300)",
            animation: "float 6s ease-in-out infinite",
            animationDelay: "1.2s",
          }}
        >
          ★
        </span>
        <span
          className="absolute text-xl"
          style={{
            bottom: "25%",
            left: "18%",
            color: "var(--Green300)",
            animation: "float 4.5s ease-in-out infinite",
            animationDelay: "2s",
          }}
        >
          ★
        </span>
        <span
          className="absolute text-sm"
          style={{
            bottom: "30%",
            right: "20%",
            color: "var(--Magenta300)",
            animation: "float 5.5s ease-in-out infinite",
            animationDelay: "0.8s",
          }}
        >
          ★
        </span>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
};
