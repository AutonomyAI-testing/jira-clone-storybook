export const WizardRobot = ({ className = "" }: Props): JSX.Element => {
  return (
    <svg
      viewBox="0 0 420 440"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Wizard robot mascot"
    >
      <defs>
        {/* Warm parchment background gradient - unique ID */}
        <linearGradient
          id="wz-bg-grad"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#F5E6D3", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#EDD9B8", stopOpacity: 1 }} />
        </linearGradient>

        {/* Screen gradient - lime to dark green radial - unique ID */}
        <radialGradient
          id="wz-screen-grad"
          cx="40%"
          cy="40%"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" style={{ stopColor: "#AAFF44", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#7FDB4F", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#3A8A20", stopOpacity: 1 }} />
        </radialGradient>

        {/* Screen glow filter - unique ID */}
        <filter id="wz-screen-glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Wizard hat gradient - navy blue - unique ID */}
        <linearGradient
          id="wz-hat-grad"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#2D3F6B", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#1A2A4A", stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Warm parchment background */}
      <rect width="420" height="440" fill="url(#wz-bg-grad)" />

      {/* Vitruvian Man - Circle frame (centered at 210, 220) */}
      <circle
        cx="210"
        cy="220"
        r="140"
        fill="none"
        stroke="#8B6050"
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* Vitruvian Man - Square frame (centered at 210) */}
      <rect
        x="70"
        y="80"
        width="280"
        height="280"
        fill="none"
        stroke="#8B6050"
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* ========== WIZARD HAT ========== */}

      {/* Hat brim - ellipse, dark navy, wide and flat */}
      <ellipse
        cx="210"
        cy="130"
        rx="90"
        ry="16"
        fill="#1A2A5E"
        stroke="#0D1A3A"
        strokeWidth="2"
      />

      {/* Hat cone - pointed polygon, navy blue, sitting on brim */}
      <polygon
        points="210,10 290,128 130,128"
        fill="url(#wz-hat-grad)"
        stroke="#0D1A3A"
        strokeWidth="2"
      />

      {/* Yellow stars on hat cone - scattered placement with absolute coordinates */}
      {/* Star 1 - top center */}
      <polygon
        points="210,30 211.5,35 216,35 212.5,38 214,43 210,40 206,43 207.5,38 204,35 208.5,35"
        fill="#FFD700"
        stroke="#FFC700"
        strokeWidth="0.5"
      />

      {/* Star 2 - upper left */}
      <polygon
        points="170,51 171.2,54.8 175,54.8 171.6,57.8 173.4,61.6 170,58.8 166.6,61.6 168.4,57.8 165,54.8 168.8,54.8"
        fill="#FFD700"
        stroke="#FFC700"
        strokeWidth="0.5"
      />

      {/* Star 3 - upper right */}
      <polygon
        points="250,51 251.2,54.8 255,54.8 251.6,57.8 253.4,61.6 250,58.8 246.6,61.6 248.4,57.8 245,54.8 248.8,54.8"
        fill="#FFD700"
        stroke="#FFC700"
        strokeWidth="0.5"
      />

      {/* Star 4 - mid left */}
      <polygon
        points="152,72 152.9,74.9 156,74.9 153.2,76.6 154.8,79.6 152,77.9 149.2,79.6 150.8,76.6 148,74.9 151.1,74.9"
        fill="#FFD700"
        stroke="#FFC700"
        strokeWidth="0.4"
      />

      {/* Star 5 - mid right */}
      <polygon
        points="268,72 268.9,74.9 272,74.9 269.2,76.6 270.8,79.6 268,77.9 265.2,79.6 266.8,76.6 264,74.9 267.1,74.9"
        fill="#FFD700"
        stroke="#FFC700"
        strokeWidth="0.4"
      />

      {/* Yellow crescent moon on hat - created with overlapping circles */}
      {/* Crescent 1 - upper left area */}
      <circle cx="185" cy="70" r="6" fill="#FFD700" />
      <circle cx="189" cy="70" r="6" fill="url(#wz-bg-grad)" />

      {/* Crescent 2 - lower right area */}
      <circle cx="240" cy="105" r="5" fill="#FFD700" />
      <circle cx="243" cy="105" r="5" fill="url(#wz-bg-grad)" />

      {/* ========== HEAD / MONITOR ========== */}

      {/* Monitor outer casing - brown bezel */}
      <rect
        x="152"
        y="118"
        width="116"
        height="100"
        rx="8"
        fill="#7A5233"
        stroke="#5A3A1A"
        strokeWidth="2.5"
      />

      {/* Monitor screen bezel - dark brown inner frame */}
      <rect
        x="160"
        y="126"
        width="100"
        height="84"
        rx="4"
        fill="#2A1A0A"
        stroke="#1A0A00"
        strokeWidth="1"
      />

      {/* Monitor screen - green gradient display */}
      <rect
        x="166"
        y="132"
        width="88"
        height="72"
        rx="3"
        fill="url(#wz-screen-grad)"
        filter="url(#wz-screen-glow)"
      />

      {/* Screen highlight - white shine reflection on top-left */}
      <ellipse
        cx="178"
        cy="142"
        rx="18"
        ry="10"
        fill="#FFFFFF"
        opacity="0.35"
      />

      {/* ========== BODY / TORSO ========== */}

      {/* Torso main body */}
      <rect
        x="168"
        y="218"
        width="84"
        height="100"
        rx="5"
        fill="#7A5233"
        stroke="#5A3A1A"
        strokeWidth="2"
      />

      {/* Belly button panel - recessed area */}
      <rect
        x="178"
        y="248"
        width="64"
        height="40"
        rx="4"
        fill="#5A3010"
        stroke="#3A1810"
        strokeWidth="1"
      />

      {/* Belly button - golden circle with highlight */}
      <circle cx="210" cy="268" r="10" fill="#D4A017" stroke="#A07010" strokeWidth="1.5" />
      {/* Inner highlight */}
      <circle cx="206" cy="264" r="4" fill="#FFD700" opacity="0.6" />

      {/* ========== LEFT ARM 1 - UPPER LEFT ========== */}
      {/* Upper left arm segment */}
      <rect
        x="100"
        y="225"
        width="68"
        height="16"
        rx="8"
        fill="#8B5A3C"
        stroke="#5A3010"
        strokeWidth="1.5"
      />

      {/* Shoulder joint for left arm 1 */}
      <circle cx="168" cy="232" r="8" fill="#9B6A4B" stroke="#5A3010" strokeWidth="1" />

      {/* Left glove 1 */}
      <circle cx="100" cy="232" r="13" fill="#F5F5F5" stroke="#C0C0C0" strokeWidth="1.5" />

      {/* Left glove 1 fingers */}
      <line x1="97" y1="232" x2="87" y2="232" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="94" y1="222" x2="84" y2="212" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="100" y1="220" x2="95" y2="207" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="106" y1="222" x2="116" y2="212" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="103" y1="242" x2="113" y2="252" stroke="#D0D0D0" strokeWidth="1.2" />

      {/* ========== LEFT ARM 2 - LOWER LEFT ========== */}
      {/* Lower left arm segment */}
      <rect
        x="80"
        y="268"
        width="88"
        height="16"
        rx="8"
        fill="#8B5A3C"
        stroke="#5A3010"
        strokeWidth="1.5"
      />

      {/* Shoulder joint for left arm 2 */}
      <circle cx="168" cy="275" r="8" fill="#9B6A4B" stroke="#5A3010" strokeWidth="1" />

      {/* Left glove 2 */}
      <circle cx="75" cy="275" r="13" fill="#F5F5F5" stroke="#C0C0C0" strokeWidth="1.5" />

      {/* Left glove 2 fingers */}
      <line x1="72" y1="275" x2="62" y2="275" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="69" y1="265" x2="59" y2="255" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="75" y1="263" x2="70" y2="250" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="81" y1="265" x2="91" y2="255" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="78" y1="285" x2="88" y2="295" stroke="#D0D0D0" strokeWidth="1.2" />

      {/* ========== RIGHT ARM 1 - UPPER RIGHT ========== */}
      {/* Upper right arm segment */}
      <rect
        x="252"
        y="225"
        width="68"
        height="16"
        rx="8"
        fill="#8B5A3C"
        stroke="#5A3010"
        strokeWidth="1.5"
      />

      {/* Shoulder joint for right arm 1 */}
      <circle cx="252" cy="232" r="8" fill="#9B6A4B" stroke="#5A3010" strokeWidth="1" />

      {/* Right glove 1 */}
      <circle cx="320" cy="232" r="13" fill="#F5F5F5" stroke="#C0C0C0" strokeWidth="1.5" />

      {/* Right glove 1 fingers */}
      <line x1="323" y1="232" x2="333" y2="232" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="326" y1="222" x2="336" y2="212" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="320" y1="220" x2="325" y2="207" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="314" y1="222" x2="304" y2="212" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="317" y1="242" x2="307" y2="252" stroke="#D0D0D0" strokeWidth="1.2" />

      {/* ========== RIGHT ARM 2 - LOWER RIGHT ========== */}
      {/* Lower right arm segment */}
      <rect
        x="252"
        y="268"
        width="88"
        height="16"
        rx="8"
        fill="#8B5A3C"
        stroke="#5A3010"
        strokeWidth="1.5"
      />

      {/* Shoulder joint for right arm 2 */}
      <circle cx="252" cy="275" r="8" fill="#9B6A4B" stroke="#5A3010" strokeWidth="1" />

      {/* Right glove 2 */}
      <circle cx="345" cy="275" r="13" fill="#F5F5F5" stroke="#C0C0C0" strokeWidth="1.5" />

      {/* Right glove 2 fingers */}
      <line x1="348" y1="275" x2="358" y2="275" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="351" y1="265" x2="361" y2="255" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="345" y1="263" x2="350" y2="250" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="339" y1="265" x2="329" y2="255" stroke="#D0D0D0" strokeWidth="1.2" />
      <line x1="342" y1="285" x2="332" y2="295" stroke="#D0D0D0" strokeWidth="1.2" />

      {/* ========== LEFT LEG ========== */}
      {/* Left leg segment */}
      <rect
        x="178"
        y="318"
        width="18"
        height="50"
        rx="3"
        fill="#8B5A3C"
        stroke="#5A3010"
        strokeWidth="1.5"
      />

      {/* Left boot */}
      <rect
        x="168"
        y="365"
        width="35"
        height="28"
        rx="3"
        fill="#6B4020"
        stroke="#4A2010"
        strokeWidth="1.5"
      />

      {/* Left boot sole */}
      <rect x="167" y="391" width="37" height="5" fill="#3A1C0A" />

      {/* ========== RIGHT LEG ========== */}
      {/* Right leg segment */}
      <rect
        x="224"
        y="318"
        width="18"
        height="50"
        rx="3"
        fill="#8B5A3C"
        stroke="#5A3010"
        strokeWidth="1.5"
      />

      {/* Right boot */}
      <rect
        x="217"
        y="365"
        width="35"
        height="28"
        rx="3"
        fill="#6B4020"
        stroke="#4A2010"
        strokeWidth="1.5"
      />

      {/* Right boot sole */}
      <rect x="216" y="391" width="37" height="5" fill="#3A1C0A" />
    </svg>
  );
};

interface Props {
  className?: string;
}
