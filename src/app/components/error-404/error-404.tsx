export const Error404 = ({
  message = "Error 404: Not Found",
  href,
}: Props) => {
  return (
    <div
      className="flex min-h-[100vh] flex-col items-center justify-center py-16 text-center"
      style={{ backgroundColor: "#F5EDD9" }}
    >
      {/* Decorative speckled texture background */}
      <svg
        className="pointer-events-none fixed inset-0"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="speckles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="8" r="1.5" fill="#D4CFC0" opacity="0.6" />
            <circle cx="15" cy="12" r="1" fill="#D4CFC0" opacity="0.5" />
            <circle cx="28" cy="6" r="1.2" fill="#D4CFC0" opacity="0.4" />
            <circle cx="35" cy="25" r="1" fill="#D4CFC0" opacity="0.5" />
            <circle cx="42" cy="40" r="1.3" fill="#D4CFC0" opacity="0.6" />
            <circle cx="12" cy="35" r="1" fill="#D4CFC0" opacity="0.4" />
            <circle cx="8" cy="45" r="1.2" fill="#D4CFC0" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#speckles)" />
      </svg>

      {/* 404 Big Number */}
      <div
        className="relative mb-4 font-primary-black leading-none"
        style={{ fontSize: "120px", color: "var(--Blue700)" }}
      >
        404
      </div>

      {/* Wizard Robot SVG Illustration */}
      <div className="relative my-8 w-96 max-w-full">
        <svg
          viewBox="-50 0 420 430"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-full"
        >
          {/* Define gradient for screen */}
          <defs>
            <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#CDDC39" />
              <stop offset="100%" stopColor="#8BC34A" />
            </linearGradient>
          </defs>

          {/* Large Decorative Circular Frame - dark reddish-brown */}
          <circle
            cx="160"
            cy="230"
            r="160"
            fill="none"
            stroke="#7B4545"
            strokeWidth="2.5"
          />
          {/* Inner square reference lines - Da Vinci style */}
          <rect
            x="48"
            y="118"
            width="224"
            height="224"
            fill="none"
            stroke="#9A6A5A"
            strokeWidth="1"
            opacity="0.6"
          />

          {/* Wizard Hat */}
          <polygon
            points="160,30 110,110 210,110"
            fill="#2B3D7D"
            stroke="#1a1a1a"
            strokeWidth="2.5"
          />

          {/* Hat Brim */}
          <ellipse
            cx="160"
            cy="112"
            rx="102"
            ry="22"
            fill="#2B3D7D"
            stroke="#1a1a1a"
            strokeWidth="2"
          />

          {/* Crescent Moons on Hat - Large and Visible */}
          <g fill="#FFD700" stroke="#333" strokeWidth="1.5">
            {/* Moon 1 - Left side of hat */}
            <circle cx="120" cy="60" r="12" />
            <circle cx="125" cy="60" r="11" fill="#2B3D7D" />

            {/* Moon 2 - Right side of hat */}
            <circle cx="200" cy="60" r="12" />
            <circle cx="195" cy="60" r="11" fill="#2B3D7D" />

            {/* Moon 3 - Lower left */}
            <circle cx="110" cy="100" r="10" />
            <circle cx="114" cy="100" r="9" fill="#2B3D7D" />

            {/* Moon 4 - Lower right */}
            <circle cx="210" cy="100" r="10" />
            <circle cx="206" cy="100" r="9" fill="#2B3D7D" />
          </g>

          {/* Stars on Hat */}
          <g fill="#FFD700" stroke="#333" strokeWidth="1">
            {/* Star 1 - top center */}
            <polygon points="160,40 163,50 173,50 165,56 168,66 160,60 152,66 155,56 147,50 157,50" />
            {/* Star 2 - middle left */}
            <polygon points="130,75 132,83 141,83 134,88 137,96 130,91 123,96 126,88 119,83 128,83" />
            {/* Star 3 - middle right */}
            <polygon points="190,75 192,83 201,83 194,88 197,96 190,91 183,96 186,88 179,83 188,83" />
          </g>

          {/* Monitor Body - Main Rectangle (Taller) */}
          <rect
            x="70"
            y="130"
            width="180"
            height="200"
            rx="18"
            fill="#A58B6F"
            stroke="#3a3a3a"
            strokeWidth="2.5"
          />

          {/* Screen Area with Gradient */}
          <rect
            x="95"
            y="160"
            width="130"
            height="120"
            rx="10"
            fill="url(#screenGradient)"
            stroke="#3a3a3a"
            strokeWidth="2.5"
          />

          {/* Cloud-like white blob highlights on screen */}
          <g fill="white" opacity="0.7">
            {/* Cloud blob 1 - upper left */}
            <ellipse cx="115" cy="175" rx="18" ry="12" />
            <ellipse cx="125" cy="170" rx="15" ry="10" />
            <ellipse cx="105" cy="178" rx="12" ry="10" />

            {/* Cloud blob 2 - lower right */}
            <ellipse cx="200" cy="255" rx="20" ry="14" />
            <ellipse cx="215" cy="250" rx="16" ry="11" />
            <ellipse cx="190" cy="258" rx="14" ry="11" />
          </g>

          {/* Body Center Button/Knob */}
          <circle cx="160" cy="300" r="9" fill="#FFD700" stroke="#3a3a3a" strokeWidth="1.5" />

          {/* Left Arm - Diagonal Upward at ~45 degrees */}
          <g>
            <line
              x1="70"
              y1="180"
              x2="20"
              y2="120"
              stroke="#3a3a3a"
              strokeWidth="24"
              strokeLinecap="round"
            />
            {/* Left Hand/Glove - Cartoon style */}
            <circle cx="10" cy="105" r="22" fill="white" stroke="#3a3a3a" strokeWidth="2" />
            {/* Left Hand Fingers - Rounded */}
            <circle cx="-5" cy="85" r="6" fill="white" stroke="#3a3a3a" strokeWidth="1.5" />
            <circle cx="5" cy="80" r="7" fill="white" stroke="#3a3a3a" strokeWidth="1.5" />
            <circle cx="18" cy="82" r="6.5" fill="white" stroke="#3a3a3a" strokeWidth="1.5" />
            <circle cx="27" cy="92" r="6" fill="white" stroke="#3a3a3a" strokeWidth="1.5" />
          </g>

          {/* Right Arm - Diagonal Upward at ~45 degrees */}
          <g>
            <line
              x1="250"
              y1="180"
              x2="300"
              y2="120"
              stroke="#3a3a3a"
              strokeWidth="24"
              strokeLinecap="round"
            />
            {/* Right Hand/Glove - Cartoon style */}
            <circle cx="310" cy="105" r="22" fill="white" stroke="#3a3a3a" strokeWidth="2" />
            {/* Right Hand Fingers - Rounded */}
            <circle cx="325" cy="85" r="6" fill="white" stroke="#3a3a3a" strokeWidth="1.5" />
            <circle cx="315" cy="80" r="7" fill="white" stroke="#3a3a3a" strokeWidth="1.5" />
            <circle cx="302" cy="82" r="6.5" fill="white" stroke="#3a3a3a" strokeWidth="1.5" />
            <circle cx="293" cy="92" r="6" fill="white" stroke="#3a3a3a" strokeWidth="1.5" />
          </g>

          {/* Left Leg */}
          <rect
            x="95"
            y="330"
            width="28"
            height="50"
            rx="5"
            fill="#7B4B2A"
            stroke="#3a3a3a"
            strokeWidth="2"
          />

          {/* Left Foot */}
          <rect
            x="88"
            y="380"
            width="42"
            height="25"
            rx="4"
            fill="#5A3520"
            stroke="#3a3a3a"
            strokeWidth="2"
          />

          {/* Right Leg */}
          <rect
            x="197"
            y="330"
            width="28"
            height="50"
            rx="5"
            fill="#7B4B2A"
            stroke="#3a3a3a"
            strokeWidth="2"
          />

          {/* Right Foot */}
          <rect
            x="190"
            y="380"
            width="42"
            height="25"
            rx="4"
            fill="#5A3520"
            stroke="#3a3a3a"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Title */}
      <h1 className="mb-2 font-primary-bold text-2xl" style={{ color: "var(--Red700)" }}>
        Oops! Page not found
      </h1>

      {/* Message/Description */}
      {message && (
        <p className="mb-8 max-w-md font-primary text-font-subtle">{message}</p>
      )}

      {/* CTA Link Button */}
      {href && (
        <a
          href={href}
          className="rounded bg-background-brand-bold px-6 py-2 font-primary text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
        >
          Go back home
        </a>
      )}
    </div>
  );
};

interface Props {
  message: string;
  href: string;
}
