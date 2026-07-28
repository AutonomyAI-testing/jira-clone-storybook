import { Link } from "@remix-run/react";

const STARS: Array<{ top: string; left: string; size: number; delay: string; duration: string }> = [
  { top: "8%",  left: "6%",  size: 18, delay: "0s",    duration: "3.2s" },
  { top: "14%", left: "88%", size: 14, delay: "0.8s",  duration: "2.8s" },
  { top: "28%", left: "92%", size: 22, delay: "0.4s",  duration: "3.6s" },
  { top: "72%", left: "4%",  size: 16, delay: "1.2s",  duration: "2.6s" },
  { top: "80%", left: "90%", size: 20, delay: "0.2s",  duration: "4.0s" },
  { top: "55%", left: "94%", size: 12, delay: "1.6s",  duration: "3.0s" },
  { top: "60%", left: "3%",  size: 24, delay: "0.6s",  duration: "3.4s" },
  { top: "88%", left: "30%", size: 10, delay: "1.0s",  duration: "2.4s" },
  { top: "5%",  left: "50%", size: 15, delay: "1.4s",  duration: "3.8s" },
];

const Star = ({
  top, left, size, delay, duration,
}: (typeof STARS)[0]) => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    style={{
      position: "absolute",
      top,
      left,
      width: size,
      height: size,
      opacity: 0.55,
      animation: `welcome-twinkle ${duration} ease-in-out ${delay} infinite`,
      fill: "var(--color-background-brand-bold)",
      pointerEvents: "none",
    }}
  >
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
  </svg>
);

export const WelcomeView = () => {
  return (
    <>
      <style>{`
        @keyframes welcome-twinkle {
          0%, 100% { opacity: 0.25; transform: scale(0.85) rotate(-8deg); }
          50%       { opacity: 0.70; transform: scale(1.15) rotate(8deg); }
        }
      `}</style>
      <div
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, var(--color-background-brand-subtlest) 0%, var(--color-elevation-surface) 70%)",
        }}
      >
        {STARS.map((s, i) => (
          <Star key={i} {...s} />
        ))}

        <img
          src="/images/welcome-mascot.png"
          alt="Wizard robot mascot"
          className="relative z-10 mb-8 w-[300px] max-w-[80vw] drop-shadow-lg"
        />
        <h1 className="relative z-10 font-primary-black text-5xl text-font">Welcome</h1>
        <p className="relative z-10 mb-10 mt-4 font-primary-light text-lg text-font-subtle">
          Your project management tool — simple, fast, and fun.
        </p>
        <Link
          to="/login"
          className="relative z-10 flex cursor-pointer items-center justify-center gap-3 rounded bg-background-brand-bold px-8 py-2 text-lg text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
        >
          Get started
        </Link>
      </div>
    </>
  );
};
