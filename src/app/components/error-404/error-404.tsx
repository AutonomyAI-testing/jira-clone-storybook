import { Button } from "../button";

const WizardRobot = (): JSX.Element => {
  const HAT_COLOR = "#1a3070"; // dark navy blue
  const HAT_ACCENT = "#f0c040"; // golden yellow
  const HEAD_OUTER = "#8b6347"; // brown frame
  const HEAD_INNER = "#a0745a"; // lighter brown
  const SCREEN_COLOR = "#4ade80"; // green phosphor
  const SCREEN_GLARE = "#f5f5f5"; // white glare
  const BODY_COLOR = "#c4976a"; // tan/brown torso
  const PANEL_COLOR = "#8b6347"; // darker brown
  const BUTTON_COLOR = "#f0c040"; // golden button
  const ARM_COLOR = "#444854"; // dark grey
  const GLOVE_COLOR = "#f5f5f5"; // white gloves
  const GLOVE_STROKE = "#d0ccc8"; // subtle glove outline
  const BOOT_COLOR = "#5c3d2e"; // brown boots
  const VITRUVIAN_STROKE = "#8b5e6e"; // dark reddish-maroon

  return (
    <svg
      viewBox="0 0 500 560"
      className="h-auto w-full max-w-xs"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Vitruvian Circle */}
      <circle
        cx="250"
        cy="270"
        r="190"
        fill="none"
        stroke={VITRUVIAN_STROKE}
        strokeWidth="1.5"
        opacity="0.4"
      />

      {/* Vitruvian Square */}
      <rect
        x="60"
        y="80"
        width="380"
        height="380"
        fill="none"
        stroke={VITRUVIAN_STROKE}
        strokeWidth="1.5"
        opacity="0.4"
      />

      {/* LEGS */}
      {/* Left leg */}
      <rect x="210" y="420" width="20" height="30" fill={ARM_COLOR} />
      {/* Right leg */}
      <rect x="270" y="420" width="20" height="30" fill={ARM_COLOR} />

      {/* BOOTS/FEET */}
      {/* Left boot */}
      <rect
        x="195"
        y="448"
        width="50"
        height="28"
        rx="4"
        fill={BOOT_COLOR}
      />
      {/* Right boot */}
      <rect
        x="255"
        y="448"
        width="50"
        height="28"
        rx="4"
        fill={BOOT_COLOR}
      />

      {/* BODY/TORSO */}
      <rect
        x="170"
        y="280"
        width="160"
        height="140"
        rx="16"
        fill={BODY_COLOR}
      />

      {/* Inner panel in torso */}
      <rect
        x="195"
        y="310"
        width="110"
        height="80"
        rx="8"
        fill={PANEL_COLOR}
      />

      {/* Golden button */}
      <circle cx="250" cy="360" r="12" fill={BUTTON_COLOR} />
      <circle cx="250" cy="360" r="10" fill={BUTTON_COLOR} opacity="0.7" />

      {/* Left side rivet */}
      <circle cx="190" cy="320" r="4" fill={PANEL_COLOR} />
      {/* Right side rivet */}
      <circle cx="310" cy="320" r="4" fill={PANEL_COLOR} />

      {/* UPPER ARMS - extending horizontally outward (slightly upward) */}
      {/* Left upper arm tube */}
      <line x1="170" y1="310" x2="20" y2="280" stroke={ARM_COLOR} strokeWidth="16" strokeLinecap="round" />
      {/* Right upper arm tube */}
      <line x1="330" y1="310" x2="480" y2="280" stroke={ARM_COLOR} strokeWidth="16" strokeLinecap="round" />

      {/* UPPER ARMS GLOVES */}
      {/* Left upper glove */}
      <g>
        <circle cx="15" cy="275" r="16" fill={GLOVE_COLOR} stroke={GLOVE_STROKE} strokeWidth="2" />
        {/* Fingers */}
        <path d="M 5 265 Q 0 255 -2 245" stroke={GLOVE_COLOR} strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 15 260 Q 15 248 15 235" stroke={GLOVE_COLOR} strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 25 265 Q 30 255 32 245" stroke={GLOVE_COLOR} strokeWidth="5" fill="none" strokeLinecap="round" />
      </g>
      {/* Right upper glove */}
      <g>
        <circle cx="485" cy="275" r="16" fill={GLOVE_COLOR} stroke={GLOVE_STROKE} strokeWidth="2" />
        {/* Fingers */}
        <path d="M 495 265 Q 500 255 502 245" stroke={GLOVE_COLOR} strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 485 260 Q 485 248 485 235" stroke={GLOVE_COLOR} strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 475 265 Q 470 255 468 245" stroke={GLOVE_COLOR} strokeWidth="5" fill="none" strokeLinecap="round" />
      </g>

      {/* LOWER ARMS - extending diagonally down-outward */}
      {/* Left lower arm tube */}
      <line x1="170" y1="390" x2="30" y2="490" stroke={ARM_COLOR} strokeWidth="16" strokeLinecap="round" />
      {/* Right lower arm tube */}
      <line x1="330" y1="390" x2="470" y2="490" stroke={ARM_COLOR} strokeWidth="16" strokeLinecap="round" />

      {/* LOWER ARMS GLOVES */}
      {/* Left lower glove */}
      <g>
        <circle cx="22" cy="495" r="16" fill={GLOVE_COLOR} stroke={GLOVE_STROKE} strokeWidth="2" />
        {/* Fingers */}
        <path d="M 12 505 Q 7 515 5 525" stroke={GLOVE_COLOR} strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 22 508 Q 22 520 22 530" stroke={GLOVE_COLOR} strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 32 505 Q 37 515 39 525" stroke={GLOVE_COLOR} strokeWidth="5" fill="none" strokeLinecap="round" />
      </g>
      {/* Right lower glove */}
      <g>
        <circle cx="478" cy="495" r="16" fill={GLOVE_COLOR} stroke={GLOVE_STROKE} strokeWidth="2" />
        {/* Fingers */}
        <path d="M 488 505 Q 493 515 495 525" stroke={GLOVE_COLOR} strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 478 508 Q 478 520 478 530" stroke={GLOVE_COLOR} strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 468 505 Q 463 515 461 525" stroke={GLOVE_COLOR} strokeWidth="5" fill="none" strokeLinecap="round" />
      </g>

      {/* TV HEAD - outer frame */}
      <rect
        x="180"
        y="180"
        width="140"
        height="110"
        rx="12"
        fill={HEAD_INNER}
        stroke={HEAD_OUTER}
        strokeWidth="8"
      />

      {/* TV screen inner */}
      <rect
        x="200"
        y="200"
        width="100"
        height="70"
        rx="4"
        fill={SCREEN_COLOR}
      />

      {/* Screen glare/reflection */}
      <ellipse cx="220" cy="215" rx="20" ry="15" fill={SCREEN_GLARE} opacity="0.6" />
      <path d="M 250 240 Q 260 245 265 235" stroke={SCREEN_GLARE} strokeWidth="2" fill="none" opacity="0.4" />

      {/* TV antenna left */}
      <line x1="205" y1="175" x2="195" y2="155" stroke={HEAD_OUTER} strokeWidth="3" strokeLinecap="round" />
      {/* TV antenna right */}
      <line x1="295" y1="175" x2="305" y2="155" stroke={HEAD_OUTER} strokeWidth="3" strokeLinecap="round" />

      {/* WIZARD HAT - brim (base) */}
      <ellipse cx="250" cy="165" rx="110" ry="28" fill={HAT_COLOR} />
      {/* Brim rim highlight */}
      <ellipse cx="250" cy="163" rx="108" ry="24" fill="none" stroke={HAT_ACCENT} strokeWidth="0.5" opacity="0.5" />

      {/* Wizard hat - cone */}
      <path
        d="M 170 165 L 250 60 L 330 165 Z"
        fill={HAT_COLOR}
        stroke={HEAD_OUTER}
        strokeWidth="2"
      />

      {/* Hat tip point */}
      <circle cx="250" cy="55" r="5" fill={HAT_COLOR} />

      {/* Stars on hat - positioned INSIDE the triangle */}
      {/* Safe star positions within triangle (170,165) to (250,60) to (330,165) */}
      <text x="215" y="110" fontSize="18" fontWeight="bold" fill={HAT_ACCENT}>
        ★
      </text>
      <text x="280" y="130" fontSize="16" fontWeight="bold" fill={HAT_ACCENT}>
        ★
      </text>
      <text x="190" y="140" fontSize="14" fontWeight="bold" fill={HAT_ACCENT}>
        ★
      </text>
      <text x="250" y="90" fontSize="16" fontWeight="bold" fill={HAT_ACCENT}>
        ★
      </text>

      {/* Crescent moons on hat - positioned INSIDE the triangle */}
      <text x="225" y="150" fontSize="16" fontWeight="bold" fill={HAT_ACCENT}>
        ☽
      </text>
      <text x="285" y="105" fontSize="14" fontWeight="bold" fill={HAT_ACCENT}>
        ☽
      </text>
      <text x="195" y="125" fontSize="12" fontWeight="bold" fill={HAT_ACCENT}>
        ☽
      </text>
    </svg>
  );
};

export const Error404 = ({
  message = "The page you're looking for doesn't exist or has been moved.",
  href,
}: Props) => {
  return (
    <div
      className="flex flex-col items-center justify-center px-4 py-4"
      style={{
        background: "linear-gradient(to bottom, #f0e6ce, #e0d4b4)",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        flex: 1,
      }}
    >
      {/* Decorative background elements - circles, lines, sparkles */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        {/* Background decorative circles/lines - Vitruvian geometry */}
        <div
          className="absolute flex items-center justify-center opacity-10"
          style={{ inset: 0 }}
        >
          <div
            className="rounded-full border border-[#8b5e6e]"
            style={{ height: "24rem", width: "24rem" }}
          />
        </div>
        <div
          className="absolute flex items-center justify-center opacity-10"
          style={{ inset: 0 }}
        >
          <div
            className="border border-[#8b5e6e]"
            style={{ height: "20rem", width: "20rem" }}
          />
        </div>

        {/* Stars decoration - top left */}
        <div
          className="absolute text-2xl"
          style={{ color: "#f0c040", left: "2rem", top: "4rem" }}
        >
          ✦
        </div>
        {/* Stars decoration - top right */}
        <div
          className="absolute text-2xl"
          style={{ color: "#f0c040", right: "2rem", top: "5rem" }}
        >
          ✦
        </div>
        {/* Stars decoration - bottom left */}
        <div
          className="absolute text-xl"
          style={{ color: "#f0c040", bottom: "6rem", left: "3rem" }}
        >
          ✦
        </div>
        {/* Stars decoration - bottom right */}
        <div
          className="absolute text-xl"
          style={{ color: "#f0c040", bottom: "8rem", right: "2.5rem" }}
        >
          ✦
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-2 text-center">
        {/* Large 404 text */}
        <div
          className="font-bold"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            color: "#1a2744",
            letterSpacing: "0.05em",
            textShadow:
              "2px 2px 0 rgba(224, 212, 180, 0.4), -1px -1px 0 rgba(26, 39, 68, 0.1)",
            lineHeight: "1",
          }}
        >
          404
        </div>

        {/* Wizard Robot Illustration */}
        <div style={{ width: "100%", maxWidth: "280px" }}>
          <WizardRobot />
        </div>

        {/* Headline */}
        <h1 className="text-2xl font-bold text-[#1a2744]">
          You've Been Lost in the Void!
        </h1>

        {/* Message */}
        <p className="max-w-md text-base text-[#626f86]">
          {message}
        </p>

        {/* CTA Button */}
        {href && (
          <a href={href} className="mt-2">
            <Button color="primary" variant="contained" size="lg">
              Take Me Home
            </Button>
          </a>
        )}
      </div>
    </div>
  );
}

interface Props {
  message?: string;
  href?: string;
}
