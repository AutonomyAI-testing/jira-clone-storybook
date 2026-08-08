import { Link } from "@remix-run/react";
import { Button } from "@app/components/button";

export const Error404 = ({
  message,
  href = "/",
}: Props): JSX.Element => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-8"
      style={{ backgroundColor: "#f0e8d5" }}
    >
      {/* Inline styles and animations for the whimsical wizard robot 404 page design */}
      <style>{`
        /* Floating animation gives the robot a playful, magical appearance */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes rotate-gentle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-2deg);
          }
          75% {
            transform: rotate(2deg);
          }
        }

        /* Twinkling effect on wizard hat stars and moons for magical ambiance */
        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }

        /* Robot container floats gently to enhance the magical theme */
        .robot-container {
          animation: float 4s ease-in-out infinite;
        }

        /* Wizard hat gently rotates, adding whimsy and reinforcing the magic theme */
        .wizard-hat {
          animation: rotate-gentle 3s ease-in-out infinite;
          transform-origin: center bottom;
        }

        /* Stars twinkle at staggered intervals for a cohesive magical effect */
        .star-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .star-twinkle:nth-child(2) {
          animation-delay: 0.3s;
        }

        .star-twinkle:nth-child(3) {
          animation-delay: 0.6s;
        }

        .star-twinkle:nth-child(4) {
          animation-delay: 0.9s;
        }

        .star-twinkle:nth-child(5) {
          animation-delay: 1.2s;
        }

        .star-twinkle:nth-child(6) {
          animation-delay: 1.5s;
        }

        /* Moons twinkle at a different pace than stars for visual variety */
        .moon-twinkle {
          animation: twinkle 2.5s ease-in-out infinite;
          animation-delay: 0.15s;
        }

        .moon-twinkle:nth-child(8) {
          animation-delay: 0.5s;
        }
      `}</style>

      {/* Wizard Robot SVG */}
      <div className="robot-container">
        <svg
          viewBox="-60 -20 500 520"
          width="460"
          height="480"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradient for TV screen */}
            <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8dc63f" stopOpacity="1" />
              <stop offset="30%" stopColor="#a8d85a" stopOpacity="1" />
              <stop offset="60%" stopColor="#7ab930" stopOpacity="1" />
              <stop offset="100%" stopColor="#4e8c1a" stopOpacity="1" />
            </linearGradient>
            {/* Parchment texture speckles filter */}
            <filter id="parchmentNoise" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" result="noise"/>
              <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise"/>
              <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blend"/>
              <feComposite in="blend" in2="SourceGraphic" operator="in"/>
            </filter>
          </defs>

          {/* Vitruvian Man Circle Frame - drawn first so it appears behind robot */}
          <circle cx="190" cy="225" r="178" fill="none" stroke="#7a5c4e" strokeWidth="2" opacity="0.85" />
          {/* Inscribed Square */}
          <rect
            x="62"
            y="97"
            width="256"
            height="256"
            fill="none"
            stroke="#7a5c4e"
            strokeWidth="1.5"
            opacity="0.85"
          />

          {/* Wizard Hat */}
          <g className="wizard-hat">
            {/* Hat cone shadow/depth on left side */}
            <path
              d="M 190 -5 L 143 110 L 190 110 Z"
              fill="#1c3570"
              opacity="0.5"
            />
            {/* Hat body - tall cone with slight curve */}
            <path
              d="M 190 -5 C 185 30 170 70 130 110 L 250 110 C 215 75 195 35 190 -5 Z"
              fill="#1e3d7a"
              stroke="#0a1520"
              strokeWidth="2.5"
            />
            {/* Hat brim - wide ellipse */}
            <ellipse
              cx="190"
              cy="112"
              rx="118"
              ry="23"
              fill="#1e3d7a"
              stroke="#0a1520"
              strokeWidth="2.5"
            />
            {/* Hat brim underside shadow */}
            <ellipse
              cx="190"
              cy="117"
              rx="112"
              ry="18"
              fill="#162f60"
              opacity="0.6"
            />
            {/* Hat highlight - lighter stripe on right of cone */}
            <path
              d="M 210 20 C 225 50 235 80 245 108"
              fill="none"
              stroke="#3060a8"
              strokeWidth="5"
              opacity="0.35"
            />

            {/* Stars on hat - distributed across brim and cone */}
            {/* Top center star on cone */}
            <g className="star-twinkle">
              <polygon
                points="190,15 193,26 205,26 196,33 199,44 190,37 181,44 184,33 175,26 187,26"
                fill="#f5c518"
              />
            </g>
            {/* Upper left star on cone */}
            <g className="star-twinkle">
              <polygon
                points="154,58 157,67 167,67 159,73 162,82 154,76 146,82 149,73 141,67 151,67"
                fill="#f5c518"
              />
            </g>
            {/* Upper right star on cone */}
            <g className="star-twinkle">
              <polygon
                points="230,50 233,59 243,59 235,65 238,74 230,68 222,74 225,65 217,59 227,59"
                fill="#f5c518"
              />
            </g>
            {/* Left brim star */}
            <g className="star-twinkle">
              <polygon
                points="98,107 100,114 108,114 102,118 104,126 98,122 92,126 94,118 88,114 96,114"
                fill="#f5c518"
              />
            </g>
            {/* Right brim star (large) */}
            <g className="star-twinkle">
              <polygon
                points="272,107 274,114 282,114 276,118 278,126 272,122 266,126 268,118 262,114 270,114"
                fill="#f5c518"
              />
            </g>
            {/* Center-left brim star */}
            <g className="star-twinkle">
              <polygon
                points="150,104 152,111 160,111 154,115 156,123 150,119 144,123 146,115 140,111 148,111"
                fill="#f5c518"
              />
            </g>

            {/* Crescent moons on hat - properly rendered as crescent shapes */}
            {/* Left brim large crescent moon */}
            <g className="moon-twinkle">
              <circle cx="122" cy="112" r="11" fill="#f5c518" />
              <circle cx="127" cy="108" r="9" fill="#1e3d7a" />
            </g>
            {/* Right brim crescent moon */}
            <g className="moon-twinkle">
              <circle cx="255" cy="112" r="11" fill="#f5c518" />
              <circle cx="260" cy="108" r="9" fill="#1e3d7a" />
            </g>
            {/* Left cone crescent moon */}
            <g className="moon-twinkle">
              <circle cx="168" cy="80" r="9" fill="#f5c518" />
              <circle cx="173" cy="76" r="7.5" fill="#1e3d7a" />
            </g>
            {/* Right cone crescent moon */}
            <g className="moon-twinkle">
              <circle cx="214" cy="75" r="9" fill="#f5c518" />
              <circle cx="219" cy="71" r="7.5" fill="#1e3d7a" />
            </g>
          </g>

          {/* Body (TV robot) */}
          {/* Outer body rounded rectangle */}
          <rect
            x="105"
            y="148"
            width="170"
            height="165"
            rx="18"
            fill="#8B6F47"
            stroke="#3d2a1a"
            strokeWidth="3"
          />

          {/* Brown body/frame inner */}
          <rect
            x="118"
            y="160"
            width="144"
            height="140"
            rx="12"
            fill="#9c7c52"
            stroke="#6B4C2A"
            strokeWidth="1.5"
          />

          {/* Rivets/bolts at corners */}
          <circle cx="116" cy="162" r="5" fill="#6B4C2A" stroke="#4a3018" strokeWidth="1" />
          <circle cx="264" cy="162" r="5" fill="#6B4C2A" stroke="#4a3018" strokeWidth="1" />
          <circle cx="116" cy="308" r="5" fill="#6B4C2A" stroke="#4a3018" strokeWidth="1" />
          <circle cx="264" cy="308" r="5" fill="#6B4C2A" stroke="#4a3018" strokeWidth="1" />

          {/* TV Screen (green gradient) */}
          <rect
            x="132"
            y="172"
            width="116"
            height="95"
            rx="10"
            fill="url(#screenGradient)"
            stroke="#4a3018"
            strokeWidth="2.5"
          />
          {/* Screen inner border / bevel */}
          <rect
            x="136"
            y="176"
            width="108"
            height="87"
            rx="8"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />

          {/* Screen highlights - organic blob shapes */}
          <ellipse cx="160" cy="185" rx="22" ry="18" fill="rgba(255, 255, 255, 0.35)" />
          <ellipse cx="190" cy="195" rx="18" ry="12" fill="rgba(255, 255, 255, 0.20)" />
          <path d="M 175 178 Q 190 172 198 184 Q 188 195 175 188 Q 170 183 175 178" fill="rgba(255, 255, 255, 0.25)" />
          <ellipse cx="150" cy="225" rx="15" ry="10" fill="rgba(255, 255, 255, 0.12)" />

          {/* Control panel section */}
          <rect x="130" y="278" width="120" height="35" rx="8" fill="#7a5c3a" stroke="#5a3e20" strokeWidth="1.5" />
          {/* Panel button left */}
          <rect x="140" y="286" width="28" height="18" rx="4" fill="#5a3e20" />
          {/* Panel button center */}
          <rect x="176" y="286" width="28" height="18" rx="4" fill="#5a3e20" />
          {/* Panel button right */}
          <rect x="212" y="286" width="18" height="18" rx="4" fill="#5a3e20" />

          {/* Control knob - big circular dial */}
          <circle cx="190" cy="264" r="11" fill="#c8960a" stroke="#5a3e20" strokeWidth="2" />
          <circle cx="190" cy="264" r="7" fill="#e6a800" />
          <circle cx="190" cy="264" r="3" fill="#c8960a" />

          {/* Arms spread wide - dark arms with white gloves */}
          {/* Left arm - upper horizontal segment */}
          <rect
            x="20"
            y="188"
            width="85"
            height="14"
            rx="7"
            fill="#4a4050"
            stroke="#2a2030"
            strokeWidth="1.5"
          />
          {/* Left arm - lower diagonal/vertical segment */}
          <rect
            x="8"
            y="165"
            width="18"
            height="42"
            rx="9"
            fill="#4a4050"
            stroke="#2a2030"
            strokeWidth="1.5"
          />
          {/* Left wrist cuff */}
          <ellipse cx="15" cy="160" rx="12" ry="8" fill="#e8e8e0" stroke="#aaa8a0" strokeWidth="1.5" />
          {/* Left hand - rounded palm */}
          <circle cx="10" cy="145" r="16" fill="#f0efea" stroke="#aaa8a0" strokeWidth="1.5" />
          {/* Left hand fingers */}
          <circle cx="-3" cy="133" r="6.5" fill="#f0efea" stroke="#aaa8a0" strokeWidth="1.5" />
          <circle cx="8" cy="123" r="6.5" fill="#f0efea" stroke="#aaa8a0" strokeWidth="1.5" />
          <circle cx="22" cy="122" r="6.5" fill="#f0efea" stroke="#aaa8a0" strokeWidth="1.5" />
          <circle cx="30" cy="132" r="6.5" fill="#f0efea" stroke="#aaa8a0" strokeWidth="1.5" />

          {/* Right arm - upper horizontal segment */}
          <rect
            x="275"
            y="188"
            width="85"
            height="14"
            rx="7"
            fill="#4a4050"
            stroke="#2a2030"
            strokeWidth="1.5"
          />
          {/* Right arm - lower diagonal/vertical segment */}
          <rect
            x="354"
            y="165"
            width="18"
            height="42"
            rx="9"
            fill="#4a4050"
            stroke="#2a2030"
            strokeWidth="1.5"
          />
          {/* Right wrist cuff */}
          <ellipse cx="365" cy="160" rx="12" ry="8" fill="#e8e8e0" stroke="#aaa8a0" strokeWidth="1.5" />
          {/* Right hand - rounded palm */}
          <circle cx="370" cy="145" r="16" fill="#f0efea" stroke="#aaa8a0" strokeWidth="1.5" />
          {/* Right hand fingers */}
          <circle cx="383" cy="133" r="6.5" fill="#f0efea" stroke="#aaa8a0" strokeWidth="1.5" />
          <circle cx="372" cy="123" r="6.5" fill="#f0efea" stroke="#aaa8a0" strokeWidth="1.5" />
          <circle cx="358" cy="122" r="6.5" fill="#f0efea" stroke="#aaa8a0" strokeWidth="1.5" />
          <circle cx="350" cy="132" r="6.5" fill="#f0efea" stroke="#aaa8a0" strokeWidth="1.5" />

          {/* Legs - articulated with joints */}
          {/* Left leg upper */}
          <rect
            x="142"
            y="320"
            width="22"
            height="42"
            rx="5"
            fill="#7A6453"
            stroke="#3d2a1a"
            strokeWidth="2"
          />
          {/* Left knee joint */}
          <circle cx="153" cy="362" r="10" fill="#6B5344" stroke="#3d2a1a" strokeWidth="1.5" />
          {/* Left leg lower */}
          <rect
            x="142"
            y="362"
            width="22"
            height="30"
            rx="5"
            fill="#7A6453"
            stroke="#3d2a1a"
            strokeWidth="2"
          />
          {/* Left foot - wider */}
          <rect
            x="118"
            y="390"
            width="62"
            height="26"
            rx="9"
            fill="#4a3020"
            stroke="#2a1808"
            strokeWidth="2"
          />

          {/* Right leg upper */}
          <rect
            x="216"
            y="320"
            width="22"
            height="42"
            rx="5"
            fill="#7A6453"
            stroke="#3d2a1a"
            strokeWidth="2"
          />
          {/* Right knee joint */}
          <circle cx="227" cy="362" r="10" fill="#6B5344" stroke="#3d2a1a" strokeWidth="1.5" />
          {/* Right leg lower */}
          <rect
            x="216"
            y="362"
            width="22"
            height="30"
            rx="5"
            fill="#7A6453"
            stroke="#3d2a1a"
            strokeWidth="2"
          />
          {/* Right foot - wider */}
          <rect
            x="200"
            y="390"
            width="62"
            height="26"
            rx="9"
            fill="#4a3020"
            stroke="#2a1808"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Hero number: Large, gold color reinforces the magical theme and draws attention */}
      <div
        className="text-center text-[120px] font-primary-black leading-none"
        style={{ color: "var(--Yellow400)" }}
      >
        404
      </div>

      {/* Main heading: Red color emphasizes the error state while maintaining visual hierarchy */}
      <h1
        className="text-center text-3xl font-primary-bold"
        style={{ color: "red" }}
      >
        You've been magically misdirected
      </h1>

      {/* Subtext: Explains the error and encourages user action */}
      <p className="max-w-md text-center text-lg text-font-subtle">
        The page you're looking for doesn't exist or has been moved. Let's get you back to the
        action!
      </p>

      {/* Call-to-action button with navigation link to homepage or custom href */}
      <Link to={href} className="mt-4">
        <Button color="primary" size="lg" className="px-8 py-3">
          Go Back Home
        </Button>
      </Link>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
