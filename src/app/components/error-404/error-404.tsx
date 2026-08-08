export const Error404 = ({
  message = "Oops! Page not found.",
  href = "/",
}: Props): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-4">
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-16px);
          }
        }
        .wizard-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-[600px] text-center">
        {/* Wizard Robot SVG */}
        <div className="wizard-float mb-8 flex justify-center">
          <svg
            viewBox="0 0 320 420"
            width="280"
            height="367"
            className="mx-auto"
          >
            {/* Outer Circle (Vitruvian Man style) */}
            <circle
              cx="160"
              cy="180"
              r="140"
              fill="none"
              stroke="var(--Neutral500)"
              strokeWidth="2"
              opacity="0.4"
            />

            {/* Robot Body - Main Box */}
            <rect
              x="110"
              y="160"
              width="100"
              height="110"
              fill="#A0785A"
              rx="8"
            />

            {/* Body Details - Darker shade */}
            <rect
              x="110"
              y="160"
              width="100"
              height="15"
              fill="#7a5a42"
              rx="4"
            />

            {/* Chest Pocket */}
            <rect
              x="130"
              y="210"
              width="60"
              height="40"
              fill="#8a6a4e"
              rx="4"
            />
            <circle cx="160" cy="235" r="6" fill="#FFD700" />

            {/* Left Arm - Stretched */}
            <g>
              {/* Arm segment */}
              <rect
                x="20"
                y="185"
                width="90"
                height="20"
                fill="#4a3a2a"
                rx="10"
              />
              {/* Left Glove */}
              <g>
                {/* Hand base */}
                <ellipse cx="15" cy="195" rx="12" ry="16" fill="#f0e0d0" />
                {/* Fingers - four wavy lines */}
                <path
                  d="M 8 182 Q 6 170 10 160"
                  stroke="#f0e0d0"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 15 180 Q 14 165 18 152"
                  stroke="#f0e0d0"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 22 182 Q 23 165 28 152"
                  stroke="#f0e0d0"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 29 185 Q 32 170 38 160"
                  stroke="#f0e0d0"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>
            </g>

            {/* Right Arm - Stretched */}
            <g>
              {/* Arm segment */}
              <rect
                x="210"
                y="185"
                width="90"
                height="20"
                fill="#4a3a2a"
                rx="10"
              />
              {/* Right Glove */}
              <g>
                {/* Hand base */}
                <ellipse cx="305" cy="195" rx="12" ry="16" fill="#f0e0d0" />
                {/* Fingers */}
                <path
                  d="M 312 182 Q 314 170 310 160"
                  stroke="#f0e0d0"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 305 180 Q 306 165 302 152"
                  stroke="#f0e0d0"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 298 182 Q 297 165 292 152"
                  stroke="#f0e0d0"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 291 185 Q 288 170 282 160"
                  stroke="#f0e0d0"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>
            </g>

            {/* CRT Monitor Head */}
            <g>
              {/* Monitor bezel/frame - brown outer */}
              <rect
                x="90"
                y="80"
                width="140"
                height="95"
                fill="#8a6a4e"
                rx="6"
              />
              {/* Monitor bezel inner - darker brown */}
              <rect
                x="98"
                y="88"
                width="124"
                height="79"
                fill="#7a5a42"
                rx="4"
              />
              {/* Screen glass - green */}
              <rect
                x="105"
                y="95"
                width="110"
                height="65"
                fill="#5CDB6E"
                rx="2"
              />
              {/* Screen glare/shine */}
              <ellipse
                cx="125"
                cy="105"
                rx="35"
                ry="25"
                fill="#8FE999"
                opacity="0.6"
              />
              {/* Screen reflection */}
              <path
                d="M 140 120 Q 145 115 150 125"
                stroke="white"
                strokeWidth="3"
                fill="none"
                opacity="0.7"
                strokeLinecap="round"
              />
            </g>

            {/* Wizard Hat */}
            <g>
              {/* Hat brim */}
              <ellipse cx="160" cy="75" rx="95" ry="20" fill="#2B4B8C" />
              {/* Hat cone */}
              <path
                d="M 100 75 L 160 0 L 220 75"
                fill="#2B4B8C"
                stroke="#1a2d5a"
                strokeWidth="2"
              />
              {/* Hat band detail */}
              <ellipse
                cx="160"
                cy="77"
                rx="93"
                ry="10"
                fill="#1a2d5a"
                opacity="0.5"
              />
              {/* Stars on hat */}
              <g fill="#FFD700">
                {/* Top star */}
                <path
                  d="M 160 15 L 165 30 L 180 32 L 170 40 L 173 55 L 160 48 L 147 55 L 150 40 L 140 32 L 155 30 Z"
                  fill="#FFD700"
                />
                {/* Left star */}
                <path
                  d="M 120 55 L 124 65 L 135 66 L 127 72 L 129 83 L 120 77 L 111 83 L 113 72 L 105 66 L 116 65 Z"
                  fill="#FFD700"
                />
                {/* Right star */}
                <path
                  d="M 200 55 L 204 65 L 215 66 L 207 72 L 209 83 L 200 77 L 191 83 L 193 72 L 185 66 L 196 65 Z"
                  fill="#FFD700"
                />
              </g>
              {/* Crescent moons on hat */}
              <g fill="#FFD700">
                {/* Left crescent */}
                <circle
                  cx="130"
                  cy="50"
                  r="10"
                  fill="none"
                  stroke="#FFD700"
                  strokeWidth="8"
                />
                <circle cx="128" cy="50" r="8" fill="#2B4B8C" />
                {/* Right crescent */}
                <circle
                  cx="190"
                  cy="50"
                  r="10"
                  fill="none"
                  stroke="#FFD700"
                  strokeWidth="8"
                />
                <circle cx="192" cy="50" r="8" fill="#2B4B8C" />
                {/* Bottom crescent */}
                <circle
                  cx="160"
                  cy="65"
                  r="10"
                  fill="none"
                  stroke="#FFD700"
                  strokeWidth="8"
                />
                <circle cx="160" cy="67" r="8" fill="#2B4B8C" />
              </g>
            </g>

            {/* Legs */}
            <g fill="#A0785A">
              {/* Left leg */}
              <rect x="115" y="270" width="20" height="50" fill="#8a6a4e" />
              {/* Left foot */}
              <ellipse cx="125" cy="325" rx="18" ry="14" fill="#7a5a42" />

              {/* Right leg */}
              <rect x="185" y="270" width="20" height="50" fill="#8a6a4e" />
              {/* Right foot */}
              <ellipse cx="195" cy="325" rx="18" ry="14" fill="#7a5a42" />
            </g>
          </svg>
        </div>

        {/* 404 Number */}
        <div
          className="mb-4 font-bold"
          style={{
            fontSize: "72px",
            lineHeight: "1",
            color: "var(--Blue700)",
            letterSpacing: "-2px",
          }}
        >
          404
        </div>

        {/* Heading */}
        <h1
          className="mb-3 text-3xl font-bold"
          style={{ color: "var(--Red600)" }}
        >
          Oops! Page not found
        </h1>

        {/* Subtitle Message */}
        <p className="mb-8 text-lg text-font-subtle">
          {message ||
            "Looks like you've wandered into uncharted territory. Even the wizard couldn't find this page!"}
        </p>

        {/* CTA Button */}
        <a
          href={href}
          className="inline-block cursor-pointer rounded bg-background-brand-bold px-5 py-2.5 font-bold text-font-inverse transition hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
          style={{
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Go back home
        </a>
      </div>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
