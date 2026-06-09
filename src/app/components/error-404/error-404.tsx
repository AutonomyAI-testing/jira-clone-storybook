import { Link } from "@remix-run/react";
import { Button } from "../button";

// Keyframe animations for visual effects
const ANIMATIONS_CSS = `
  @keyframes float-up-fade {
    0% {
      opacity: 1;
      transform: translateY(0) translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-100px) translateX(var(--x));
    }
  }

  @keyframes pulse-glow {
    0%, 100% {
      text-shadow: 0 0 10px var(--Green500), 0 0 20px var(--Green400);
      transform: scale(1);
    }
    50% {
      text-shadow: 0 0 20px var(--Green500), 0 0 40px var(--Green400), 0 0 60px var(--Green300);
      transform: scale(1.05);
    }
  }

  @keyframes bob {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  .star-particle {
    position: absolute;
    pointer-events: none;
    font-size: 1.5rem;
    color: var(--Yellow400);
    animation: float-up-fade linear forwards;
  }

  .glow-number {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    color: var(--Green500);
    animation: pulse-glow 2s ease-in-out infinite;
  }

  .robot-character {
    animation: bob 3s ease-in-out infinite;
  }

  .screen-shine {
    position: absolute;
    top: 8px;
    left: 12px;
    width: 60px;
    height: 35px;
    background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.25) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }
`;

// Configuration constants for robot styling
const ROBOT_COLORS = {
  bodyBg: "var(--Orange800)",
  bodyBorder: "#6B4F35",
  hatColor: "var(--Blue700)",
  hatBorderColor: "var(--Blue800)",
  screenBg: "radial-gradient(circle at center, var(--Green400) 0%, var(--Green700) 100%)",
  screenBorder: "#5a3e28",
  screenGlow: "0 0 10px var(--Green500)",
  bodyLimbs: "var(--Orange900)",
  limbJoint: "var(--Neutral0)",
  limbBorder: "2px solid var(--Orange900)",
} as const;

const BACKGROUND_GLOW = {
  width: "400px",
  height: "400px",
  background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
} as const;

export const Error404 = (): JSX.Element => {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "var(--DarkNeutral100)" }}
    >
      {/* Animated Background Stars */}
      <style>{ANIMATIONS_CSS}</style>

      {/* Background Glow Circle */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          ...BACKGROUND_GLOW,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Floating Stars Background - animated particles that fade upward */}
      <div className="absolute inset-0 opacity-40">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="star-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 2}s`,
              animationDelay: `${i * 0.15}s`,
              // Using CSS custom property for random horizontal drift in animation
              // @ts-ignore
              "--x": `${(Math.random() - 0.5) * 60}px`,
            }}
          >
            ✦
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12 text-center">
        {/* Wizard Robot Character */}
        <div className="robot-character mb-8 flex flex-col items-center gap-2">
          {/* Wizard Hat */}
          <div className="relative mb-2 flex items-end justify-center">
            {/* Hat cone - creates triangular wizard hat shape */}
            <div
              className="relative w-0 border-l-[60px] border-r-[60px] border-b-[80px] border-l-transparent border-r-transparent"
              style={{ borderBottomColor: ROBOT_COLORS.hatColor }}
            >
              {/* Stars and moon decorations on hat */}
              <div
                className="absolute left-[-55px] top-[10px] text-2xl"
                style={{ color: "var(--Yellow400)" }}
              >
                ★
              </div>
              <div
                className="absolute right-[-50px] top-[25px] text-xl"
                style={{ color: "var(--Yellow400)" }}
              >
                ★
              </div>
              <div
                className="absolute left-[-10px] top-[35px] text-xl"
                style={{ color: "var(--Yellow400)" }}
              >
                ★
              </div>
              <div
                className="absolute right-[-25px] top-[50px] text-lg"
                style={{ color: "var(--Yellow300)" }}
              >
                ☽
              </div>
            </div>
            {/* Hat brim - wider and more elliptical for realistic proportions */}
            <div
              className="absolute top-[85px] h-7 w-[220px] rounded-full border-4"
              style={{
                backgroundColor: ROBOT_COLORS.hatColor,
                borderColor: ROBOT_COLORS.hatBorderColor,
                boxShadow: "0 3px 10px rgba(0,0,0,0.4), inset 0 -2px 4px rgba(0,0,0,0.3)",
                zIndex: 20,
              }}
            />
          </div>

          {/* Robot Head/Body with Screen */}
          <div
            className="relative rounded-lg p-8"
            style={{
              backgroundColor: ROBOT_COLORS.bodyBg,
              border: `4px solid ${ROBOT_COLORS.bodyBorder}`,
              width: "240px",
              boxShadow: "0 8px 16px rgba(0,0,0,0.4), inset 0 -4px 8px rgba(0,0,0,0.3)",
            }}
          >
            {/* CRT Screen - displays a glowing green screen like retro terminals */}
            <div
              className="relative mb-6 flex items-center justify-center rounded-md overflow-hidden"
              style={{
                background: ROBOT_COLORS.screenBg,
                width: "160px",
                height: "110px",
                margin: "0 auto",
                boxShadow: `inset 0 0 15px rgba(0,0,0,0.4), ${ROBOT_COLORS.screenGlow}`,
                border: `6px solid ${ROBOT_COLORS.screenBorder}`,
              }}
            >
              {/* Screen glossy shine overlay - creates glass reflection effect */}
              <div className="screen-shine" />
            </div>

            {/* Belly Button - yellow accent for character personality */}
            <div
              className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full -translate-x-1/2 translate-y-4"
              style={{
                backgroundColor: "var(--Yellow400)",
              }}
            />

            {/* Robot Arms - angled to create friendly, welcoming pose */}
            <div className="flex items-center justify-between px-2 gap-4" style={{ marginTop: "12px" }}>
              {/* Left Arm - rotated downward for relaxed pose */}
              <div className="flex items-center gap-1">
                <div
                  className="h-4 rounded-lg"
                  style={{
                    width: "100px",
                    backgroundColor: ROBOT_COLORS.bodyLimbs,
                    transform: "rotate(-20deg) skewY(-5deg)",
                    transformOrigin: "right center",
                  }}
                />
                <div
                  className="h-6 w-6 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: ROBOT_COLORS.limbJoint,
                    border: ROBOT_COLORS.limbBorder,
                  }}
                />
              </div>
              {/* Right Arm - rotated upward for symmetric pose */}
              <div className="flex items-center gap-1">
                <div
                  className="h-6 w-6 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: ROBOT_COLORS.limbJoint,
                    border: ROBOT_COLORS.limbBorder,
                  }}
                />
                <div
                  className="h-4 rounded-lg"
                  style={{
                    width: "100px",
                    backgroundColor: ROBOT_COLORS.bodyLimbs,
                    transform: "rotate(20deg) skewY(5deg)",
                    transformOrigin: "left center",
                  }}
                />
              </div>
            </div>

            {/* Robot Legs and Feet - stable stance */}
            <div className="mt-8 flex items-end justify-between gap-3 px-2">
              {/* Left Leg and Foot */}
              <div className="flex flex-col items-center gap-0">
                <div
                  className="w-5 rounded-sm"
                  style={{
                    height: "12px",
                    backgroundColor: ROBOT_COLORS.bodyLimbs,
                  }}
                />
                <div
                  className="rounded"
                  style={{
                    width: "20px",
                    height: "14px",
                    backgroundColor: ROBOT_COLORS.bodyLimbs,
                  }}
                />
              </div>
              {/* Right Leg and Foot */}
              <div className="flex flex-col items-center gap-0">
                <div
                  className="w-5 rounded-sm"
                  style={{
                    height: "12px",
                    backgroundColor: ROBOT_COLORS.bodyLimbs,
                  }}
                />
                <div
                  className="rounded"
                  style={{
                    width: "20px",
                    height: "14px",
                    backgroundColor: ROBOT_COLORS.bodyLimbs,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 404 Number with Glow - animated glowing text for emphasis */}
        <div
          className="mb-4 font-primary-black"
          style={{ fontSize: "120px", lineHeight: 1 }}
        >
          <span className="glow-number">404</span>
        </div>

        {/* Headline - error message in contrasting red */}
        <h1
          className="mb-3 text-3xl font-primary-bold"
          style={{ color: "var(--Red500)" }}
        >
          Lost in the Digital Ether
        </h1>

        {/* Subtext - context and reassurance */}
        <p
          className="mb-8 max-w-md text-lg"
          style={{ color: "var(--DarkNeutral800)" }}
        >
          Even my magic spells couldn't find that page. Let me conjure you back
          to safety.
        </p>

        {/* Go Home Button */}
        <Link to="/">
          <Button color="primary" size="lg">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
};
