import { Button } from "@app/components/button";

/**
 * RobotWizardSVG renders a whimsical illustration of a wizard robot as the visual centerpiece
 * of the 404 error page. The robot combines mechanical/retro styling with magical elements
 * (wizard hat, stars, moons) to create a friendly, non-threatening error experience.
 *
 * The SVG uses absolute positioning for all elements, with gradients and layering to create
 * visual depth. The robot's pose and expression are fixed — this is a static, decorative illustration.
 */
const RobotWizardSVG = (): JSX.Element => {
  /**
   * Generate SVG points for a 5-pointed star.
   * Computes outer (R) and inner (r) radius vertices alternately to create the star shape.
   * The angle is rotated by -PI/2 to position the first point at the top.
   */
  const starPoints = (cx: number, cy: number, R: number = 14, r: number = 6): string => {
    const pts: string[] = [];
    for (let i = 0; i < 10; i++) {
      const angle = (i * Math.PI) / 5 - Math.PI / 2;
      const radius = i % 2 === 0 ? R : r;
      pts.push(
        `${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`
      );
    }
    return pts.join(" ");
  };

  return (
    <svg
      width="700"
      height="620"
      viewBox="0 0 700 620"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {/* Defs: Gradients */}
      <defs>
        <linearGradient
          id="hatGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#1B3A6B", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#0F2850", stopOpacity: 1 }} />
        </linearGradient>

        <linearGradient
          id="screenGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#9DC820", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#7AA820", stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* VITRUVIAN FRAME */}
      {/* Circle */}
      <circle
        cx="350"
        cy="300"
        r="260"
        fill="none"
        stroke="#8B3A4A"
        strokeWidth="3"
      />

      {/* Rectangle */}
      <rect
        x="90"
        y="55"
        width="520"
        height="520"
        fill="none"
        stroke="#8B3A4A"
        strokeWidth="3"
      />

      {/* WIZARD HAT */}
      {/* Tall pointed cone - drooping right */}
      <path
        d="M 370 40 Q 390 80 340 130 Q 320 155 250 175 L 450 175 Z"
        fill="url(#hatGradient)"
        stroke="#000000"
        strokeWidth="3"
      />

      {/* Hat brim - wide ellipse */}
      <ellipse
        cx="350"
        cy="175"
        rx="115"
        ry="38"
        fill="url(#hatGradient)"
        stroke="#000000"
        strokeWidth="3"
      />

      {/* Stars on cone - gold */}
      {/* Top star */}
      <polygon
        points={starPoints(350, 85, 16, 8)}
        fill="#F0C040"
        stroke="#000000"
        strokeWidth="1.5"
      />

      {/* Upper left star */}
      <polygon
        points={starPoints(310, 110, 14, 6)}
        fill="#F0C040"
        stroke="#000000"
        strokeWidth="1.5"
      />

      {/* Upper right star */}
      <polygon
        points={starPoints(390, 105, 14, 6)}
        fill="#F0C040"
        stroke="#000000"
        strokeWidth="1.5"
      />

      {/* Lower right star */}
      <polygon
        points={starPoints(370, 145, 12, 5)}
        fill="#F0C040"
        stroke="#000000"
        strokeWidth="1.5"
      />

      {/* Crescent moons on cone - gold */}
      {/* Left crescent */}
      <circle cx="310" cy="120" r="10" fill="#F0C040" />
      <circle cx="316" cy="118" r="8" fill="url(#hatGradient)" />

      {/* Right crescent */}
      <circle cx="390" cy="125" r="10" fill="#F0C040" />
      <circle cx="396" cy="123" r="8" fill="url(#hatGradient)" />

      {/* Center crescent on lower cone */}
      <circle cx="350" cy="155" r="9" fill="#F0C040" />
      <circle cx="357" cy="152" r="7" fill="url(#hatGradient)" />

      {/* ROBOT HEAD - Monitor */}
      {/* Brown rounded frame */}
      <rect
        x="255"
        y="180"
        width="190"
        height="140"
        rx="16"
        fill="#8B6040"
        stroke="#000000"
        strokeWidth="3"
      />

      {/* Screen - yellow-green */}
      <rect
        x="272"
        y="198"
        width="156"
        height="107"
        rx="10"
        fill="url(#screenGradient)"
        stroke="#000000"
        strokeWidth="2.5"
      />

      {/* White glossy highlights on screen */}
      {/* Left highlight */}
      <ellipse
        cx="285"
        cy="210"
        rx="18"
        ry="20"
        fill="#FFFFFF"
        opacity="0.6"
      />

      {/* Right highlight */}
      <ellipse
        cx="410"
        cy="225"
        rx="15"
        ry="18"
        fill="#FFFFFF"
        opacity="0.4"
      />

      {/* ROBOT BODY */}
      {/* Main body rect */}
      <rect
        x="270"
        y="325"
        width="160"
        height="130"
        rx="10"
        fill="#8B6040"
        stroke="#000000"
        strokeWidth="3"
      />

      {/* Recessed chest panel */}
      <rect
        x="290"
        y="355"
        width="120"
        height="70"
        rx="8"
        fill="#6B4820"
        stroke="#000000"
        strokeWidth="2"
      />

      {/* Center circular button/dial - amber */}
      <circle
        cx="350"
        cy="395"
        r="18"
        fill="#E8A020"
        stroke="#000000"
        strokeWidth="2"
      />

      {/* Inner circle of button */}
      <circle cx="350" cy="395" r="10" fill="#F0A830" />

      {/* LEFT ARM */}
      {/* Shoulder tube - horizontal black */}
      <rect
        x="160"
        y="322"
        width="115"
        height="28"
        rx="14"
        fill="#1a1a1a"
        stroke="#000000"
        strokeWidth="2"
      />

      {/* Forearm tube - angled up-left */}
      <g>
        <rect
          x="70"
          y="285"
          width="105"
          height="28"
          rx="14"
          fill="#1a1a1a"
          stroke="#000000"
          strokeWidth="2"
          transform="rotate(-20 122.5 299)"
        />
      </g>

      {/* Left hand - palm */}
      <ellipse
        cx="65"
        cy="268"
        rx="22"
        ry="26"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="2.5"
      />

      {/* Left hand - fingers (4) pointing up */}
      <ellipse
        cx="45"
        cy="235"
        rx="8"
        ry="20"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="2"
      />
      <ellipse
        cx="58"
        cy="220"
        rx="8"
        ry="22"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="2"
      />
      <ellipse
        cx="72"
        cy="220"
        rx="8"
        ry="22"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="2"
      />
      <ellipse
        cx="85"
        cy="235"
        rx="8"
        ry="20"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="2"
      />

      {/* RIGHT ARM */}
      {/* Shoulder tube - horizontal black */}
      <rect
        x="425"
        y="322"
        width="115"
        height="28"
        rx="14"
        fill="#1a1a1a"
        stroke="#000000"
        strokeWidth="2"
      />

      {/* Forearm tube - angled up-right */}
      <g>
        <rect
          x="525"
          y="285"
          width="105"
          height="28"
          rx="14"
          fill="#1a1a1a"
          stroke="#000000"
          strokeWidth="2"
          transform="rotate(20 577.5 299)"
        />
      </g>

      {/* Right hand - palm */}
      <ellipse
        cx="635"
        cy="268"
        rx="22"
        ry="26"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="2.5"
      />

      {/* Right hand - fingers (4) pointing up */}
      <ellipse
        cx="615"
        cy="235"
        rx="8"
        ry="20"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="2"
      />
      <ellipse
        cx="628"
        cy="220"
        rx="8"
        ry="22"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="2"
      />
      <ellipse
        cx="642"
        cy="220"
        rx="8"
        ry="22"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="2"
      />
      <ellipse
        cx="655"
        cy="235"
        rx="8"
        ry="20"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="2"
      />

      {/* LEGS */}
      {/* Left leg */}
      <rect
        x="298"
        y="452"
        width="45"
        height="40"
        fill="#6B4820"
        stroke="#000000"
        strokeWidth="2"
      />

      {/* Right leg */}
      <rect
        x="360"
        y="452"
        width="45"
        height="40"
        fill="#6B4820"
        stroke="#000000"
        strokeWidth="2"
      />

      {/* BOOTS */}
      {/* Left boot */}
      <rect
        x="280"
        y="488"
        width="75"
        height="52"
        rx="8"
        fill="#5C3015"
        stroke="#000000"
        strokeWidth="2.5"
      />

      {/* Left boot sole */}
      <ellipse
        cx="317.5"
        cy="540"
        rx="40"
        ry="12"
        fill="#3a1f0a"
        stroke="#000000"
        strokeWidth="1.5"
      />

      {/* Right boot */}
      <rect
        x="347"
        y="488"
        width="75"
        height="52"
        rx="8"
        fill="#5C3015"
        stroke="#000000"
        strokeWidth="2.5"
      />

      {/* Right boot sole */}
      <ellipse
        cx="384.5"
        cy="540"
        rx="40"
        ry="12"
        fill="#3a1f0a"
        stroke="#000000"
        strokeWidth="1.5"
      />
    </svg>
  );
};

/**
 * Error404 page component.
 *
 * Displays a friendly, playful 404 error page with a wizard robot illustration.
 * Users can navigate back to the specified href (default: home page).
 *
 * The page uses warm, welcoming colors (#F0E8D0 background) and maintains a lighthearted tone
 * to reduce user frustration. The illustration and text work together to acknowledge the error
 * while keeping the experience enjoyable.
 */
export const Error404 = ({ href = "/", message }: Props): JSX.Element => {
  // Warm beige background chosen to complement the wizard robot's color palette
  // and create an approachable, non-error-like visual environment
  const backgroundColor = "#F0E8D0";
  // Error text color matches the hat's red accent for visual cohesion
  const errorTextColor = "red";
  // Default message continues the wizard/magic theme
  const defaultMessage =
    "Looks like this wizard conjured the wrong spell. The page you're looking for has vanished into thin air.";

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center"
      style={{ backgroundColor }}
    >
      {/* Hero Illustration */}
      <div className="mb-8">
        <RobotWizardSVG />
      </div>

      {/* 404 Text */}
      <h1
        className="font-primary-black text-6xl font-bold"
        style={{
          color: "var(--Neutral1000)",
        }}
      >
        404
      </h1>

      {/* Subtitle */}
      <h2
        className="mt-4 font-primary-light text-2xl"
        style={{
          color: errorTextColor,
        }}
      >
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p
        className="mt-3 max-w-sm text-center text-lg"
        style={{
          color: "var(--Neutral800)",
        }}
      >
        {message || defaultMessage}
      </p>

      {/* Go Home Button */}
      <div className="mt-8">
        <a href={href}>
          <Button color="primary" variant="contained" size="lg">
            Go Home
          </Button>
        </a>
      </div>
    </div>
  );
};

interface Props {
  href?: string;
  message?: string;
}
