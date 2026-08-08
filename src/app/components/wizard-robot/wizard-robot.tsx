/**
 * WizardRobot - An SVG illustration of a whimsical robot wizard
 *
 * Renders a complete SVG graphic of a robot character wearing a wizard hat.
 * The robot features a TV monitor as its head with a glowing green screen,
 * wooden-textured body, spread arms with white gloves, and a pointed blue
 * wizard hat decorated with golden stars and moon crescents.
 */
export const WizardRobot = () => {
  return (
    <svg
      viewBox="-120 -130 640 610"
      width="420"
      height="420"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {/* SVG gradient definitions for visual effects */}
      <defs>
        {/* Screen glow - radial gradient for monitor screen effect */}
        <radialGradient id="screenGlow" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#d8f890" />
          <stop offset="35%" stopColor="#98d858" />
          <stop offset="70%" stopColor="#5ab840" />
          <stop offset="100%" stopColor="#2a7018" />
        </radialGradient>
        {/* Body gradient - warm wood tones */}
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b09070" />
          <stop offset="25%" stopColor="#d0a878" />
          <stop offset="60%" stopColor="#c8a070" />
          <stop offset="100%" stopColor="#9a7050" />
        </linearGradient>
        {/* Hat gradient */}
        <linearGradient id="hatGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a2e5c" />
          <stop offset="30%" stopColor="#1e4a9a" />
          <stop offset="60%" stopColor="#2258a8" />
          <stop offset="100%" stopColor="#1a2e5c" />
        </linearGradient>
        {/* Arm gradient - dark brownish gray */}
        <linearGradient id="armGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6a5848" />
          <stop offset="100%" stopColor="#3a2818" />
        </linearGradient>
      </defs>

      {/* ===== VITRUVIAN GEOMETRY ===== */}
      <circle cx="200" cy="210" r="200" fill="none" stroke="#9b7060" strokeWidth="3" opacity="0.9" />
      <rect x="22" y="70" width="356" height="290" fill="none" stroke="#9b7060" strokeWidth="2" opacity="0.8" />

      {/* ===== LEGS ===== */}
      {/* Left leg */}
      <rect x="152" y="315" width="36" height="52" rx="10" fill="#7a6050" stroke="#5a4030" strokeWidth="2.5" />
      <rect x="152" y="352" width="36" height="26" rx="7" fill="#6a5040" stroke="#5a4030" strokeWidth="2" />
      {/* Left boot */}
      <rect x="138" y="368" width="54" height="26" rx="10" fill="#2e1e10" stroke="#1a0e06" strokeWidth="2.5" />
      <ellipse cx="192" cy="381" rx="12" ry="13" fill="#2e1e10" stroke="#1a0e06" strokeWidth="2" />

      {/* Right leg */}
      <rect x="212" y="315" width="36" height="52" rx="10" fill="#7a6050" stroke="#5a4030" strokeWidth="2.5" />
      <rect x="212" y="352" width="36" height="26" rx="7" fill="#6a5040" stroke="#5a4030" strokeWidth="2" />
      {/* Right boot */}
      <rect x="208" y="368" width="54" height="26" rx="10" fill="#2e1e10" stroke="#1a0e06" strokeWidth="2.5" />
      <ellipse cx="208" cy="381" rx="12" ry="13" fill="#2e1e10" stroke="#1a0e06" strokeWidth="2" />

      {/* ===== BODY ===== */}
      <rect x="122" y="200" width="156" height="120" rx="14" fill="url(#bodyGrad)" stroke="#7a5830" strokeWidth="3" />
      {/* Body shading */}
      <rect x="122" y="200" width="40" height="120" rx="14" fill="#8a6038" opacity="0.4" />
      <rect x="238" y="200" width="40" height="120" rx="14" fill="#6a4020" opacity="0.3" />
      {/* Body horizontal panel line */}
      <line x1="122" y1="256" x2="278" y2="256" stroke="#7a5830" strokeWidth="1.5" opacity="0.5" />

      {/* Screen on body */}
      <rect x="136" y="208" width="128" height="80" rx="9" fill="#9a7858" stroke="#7a5830" strokeWidth="2.5" />
      <rect x="143" y="215" width="114" height="66" rx="6" fill="#225018" />
      <rect x="147" y="219" width="106" height="58" rx="4" fill="url(#screenGlow)" />
      {/* Screen highlights */}
      <ellipse cx="175" cy="234" rx="26" ry="13" fill="#e8ffa0" opacity="0.65" />
      <ellipse cx="195" cy="243" rx="22" ry="13" fill="#ffffff" opacity="0.4" />
      <ellipse cx="215" cy="256" rx="16" ry="9" fill="#88cc50" opacity="0.45" />

      {/* Control panel */}
      <rect x="154" y="292" width="92" height="24" rx="7" fill="#b89060" stroke="#8a6830" strokeWidth="2" />
      <circle cx="200" cy="304" r="9.5" fill="#c08820" stroke="#906010" strokeWidth="2.5" />
      <circle cx="200" cy="304" r="5.5" fill="#f0c840" />
      <circle cx="197" cy="301" r="2" fill="#ffe890" opacity="0.9" />

      {/* Body corner bolts */}
      <circle cx="127" cy="206" r="5" fill="#9b7b5a" stroke="#7a5a30" strokeWidth="2" />
      <circle cx="273" cy="206" r="5" fill="#9b7b5a" stroke="#7a5a30" strokeWidth="2" />
      <circle cx="127" cy="314" r="5" fill="#9b7b5a" stroke="#7a5a30" strokeWidth="2" />
      <circle cx="273" cy="314" r="5" fill="#9b7b5a" stroke="#7a5a30" strokeWidth="2" />

      {/* ===== ARMS - spread wide, angled upward ~65 degrees ===== */}
      {/* Left arm tube - going from body-left upper up-left to glove */}
      {/* Arm origin at body ~(130, 220), endpoint around (-55, 120) */}
      <line x1="128" y1="225" x2="-30" y2="128" stroke="#4a3828" strokeWidth="24" strokeLinecap="round" />
      <line x1="128" y1="225" x2="-30" y2="128" stroke="#6a5040" strokeWidth="18" strokeLinecap="round" />
      {/* Arm highlight */}
      <line x1="128" y1="220" x2="-28" y2="124" stroke="#8a6858" strokeWidth="6" strokeLinecap="round" opacity="0.5" />

      {/* Right arm tube - going from body-right upper up-right */}
      <line x1="272" y1="225" x2="430" y2="128" stroke="#4a3828" strokeWidth="24" strokeLinecap="round" />
      <line x1="272" y1="225" x2="430" y2="128" stroke="#6a5040" strokeWidth="18" strokeLinecap="round" />
      {/* Arm highlight */}
      <line x1="272" y1="220" x2="428" y2="124" stroke="#8a6858" strokeWidth="6" strokeLinecap="round" opacity="0.5" />

      {/* ===== LEFT GLOVE (white, open hand) ===== */}
      {/* Wrist cuff band */}
      <ellipse cx="-46" cy="118" rx="22" ry="10" fill="#f8f5f0" stroke="#d0c0a8" strokeWidth="2" />
      {/* Palm */}
      <circle cx="-65" cy="98" r="30" fill="#f4f0e8" stroke="#c8b898" strokeWidth="2" />
      {/* Left fingers - spread wide like reference - fan pattern */}
      {/* Thumb - pointing lower left */}
      <ellipse cx="-38" cy="78" rx="9" ry="16" fill="#f4f0e8" stroke="#c8b898" strokeWidth="1.5" transform="rotate(35, -38, 78)" />
      {/* Index finger - pointing upper left */}
      <ellipse cx="-62" cy="60" rx="9" ry="16" fill="#f4f0e8" stroke="#c8b898" strokeWidth="1.5" transform="rotate(5, -62, 60)" />
      {/* Middle finger - pointing up */}
      <ellipse cx="-82" cy="65" rx="9" ry="17" fill="#f4f0e8" stroke="#c8b898" strokeWidth="1.5" transform="rotate(-18, -82, 65)" />
      {/* Ring finger - upper */}
      <ellipse cx="-96" cy="80" rx="9" ry="15" fill="#f4f0e8" stroke="#c8b898" strokeWidth="1.5" transform="rotate(-35, -96, 80)" />
      {/* Palm overlay to clean up base */}
      <circle cx="-64" cy="96" r="24" fill="#f4f0e8" />
      {/* Cuff white band */}
      <ellipse cx="-44" cy="115" rx="20" ry="9" fill="#ffffff" stroke="#d8c8b0" strokeWidth="1.5" />
      <ellipse cx="-44" cy="112" rx="18" ry="6" fill="#ffffff" opacity="0.8" />

      {/* ===== RIGHT GLOVE (white, open hand) ===== */}
      {/* Wrist cuff band */}
      <ellipse cx="446" cy="118" rx="22" ry="10" fill="#f8f5f0" stroke="#d0c0a8" strokeWidth="2" />
      {/* Palm */}
      <circle cx="465" cy="98" r="30" fill="#f4f0e8" stroke="#c8b898" strokeWidth="2" />
      {/* Right fingers - mirror of left */}
      {/* Thumb */}
      <ellipse cx="438" cy="78" rx="9" ry="16" fill="#f4f0e8" stroke="#c8b898" strokeWidth="1.5" transform="rotate(-35, 438, 78)" />
      {/* Index */}
      <ellipse cx="462" cy="60" rx="9" ry="16" fill="#f4f0e8" stroke="#c8b898" strokeWidth="1.5" transform="rotate(-5, 462, 60)" />
      {/* Middle */}
      <ellipse cx="482" cy="65" rx="9" ry="17" fill="#f4f0e8" stroke="#c8b898" strokeWidth="1.5" transform="rotate(18, 482, 65)" />
      {/* Ring */}
      <ellipse cx="496" cy="80" rx="9" ry="15" fill="#f4f0e8" stroke="#c8b898" strokeWidth="1.5" transform="rotate(35, 496, 80)" />
      {/* Palm overlay */}
      <circle cx="464" cy="96" r="24" fill="#f4f0e8" />
      {/* Cuff */}
      <ellipse cx="444" cy="115" rx="20" ry="9" fill="#ffffff" stroke="#d8c8b0" strokeWidth="1.5" />
      <ellipse cx="444" cy="112" rx="18" ry="6" fill="#ffffff" opacity="0.8" />

      {/* ===== HEAD (TV Monitor) ===== */}
      <rect x="106" y="62" width="188" height="142" rx="18" fill="url(#bodyGrad)" stroke="#7a5830" strokeWidth="3" />
      {/* Head inner bezel */}
      <rect x="118" y="74" width="164" height="118" rx="12" fill="#b89070" />
      {/* Screen outer */}
      <rect x="124" y="80" width="152" height="106" rx="8" fill="#245820" />
      {/* Screen inner - green gradient */}
      <rect x="129" y="85" width="142" height="96" fill="url(#screenGlow)" rx="5" />
      {/* Screen highlights */}
      <rect x="136" y="92" width="46" height="26" fill="#e8ffa0" opacity="0.6" rx="5" />
      <ellipse cx="195" cy="122" rx="32" ry="18" fill="#ffffff" opacity="0.35" />
      <ellipse cx="240" cy="155" rx="18" ry="10" fill="#88d850" opacity="0.45" />
      {/* Head corner bolts */}
      <circle cx="112" cy="68" r="6" fill="#9b7b5a" stroke="#7a5a30" strokeWidth="2" />
      <circle cx="288" cy="68" r="6" fill="#9b7b5a" stroke="#7a5a30" strokeWidth="2" />
      <circle cx="112" cy="198" r="6" fill="#9b7b5a" stroke="#7a5a30" strokeWidth="2" />
      <circle cx="288" cy="198" r="6" fill="#9b7b5a" stroke="#7a5a30" strokeWidth="2" />

      {/* Neck connector */}
      <rect x="172" y="199" width="56" height="14" rx="6" fill="#a07050" stroke="#7a5030" strokeWidth="2" />

      {/* ===== WIZARD HAT ===== */}
      {/* Hat cone - very tall, dramatic pointed cone */}
      <path
        d="M 200 -128 L 110 62 L 290 62 Z"
        fill="url(#hatGrad)"
        stroke="#0a1830"
        strokeWidth="3.5"
      />
      {/* Hat cone left shading (lighter blue) */}
      <path
        d="M 200 -128 L 110 62 L 152 62 Z"
        fill="#3068c8"
        opacity="0.45"
      />
      {/* Hat cone right shading (darker) */}
      <path
        d="M 200 -128 L 258 62 L 290 62 Z"
        fill="#0a1830"
        opacity="0.4"
      />
      {/* Hat cone subtle mid shading */}
      <path
        d="M 200 -128 L 172 62 L 228 62 Z"
        fill="#2050a0"
        opacity="0.25"
      />

      {/* Hat brim - wide, dimensional ellipse */}
      <ellipse cx="200" cy="62" rx="155" ry="38" fill="#1a3272" stroke="#0a1830" strokeWidth="3.5" />
      {/* Brim top face */}
      <ellipse cx="200" cy="56" rx="150" ry="30" fill="url(#hatGrad)" />
      {/* Brim highlight */}
      <ellipse cx="150" cy="50" rx="55" ry="14" fill="#3570d0" opacity="0.55" />
      {/* Brim inner shadow */}
      <ellipse cx="200" cy="62" rx="100" ry="16" fill="#0a1830" opacity="0.25" />

      {/* ===== STARS ON HAT ===== */}
      {/* Large star - upper cone center */}
      <g transform="translate(200, -65)">
        <polygon points="0,-13 4.8,-4.8 13,-3 6.5,2.5 8.5,12.5 0,7 -8.5,12.5 -6.5,2.5 -13,-3 -4.8,-4.8" fill="#f5c510" stroke="#c89008" strokeWidth="1.2" />
      </g>
      {/* Star cone upper-right */}
      <g transform="translate(248, -25)">
        <polygon points="0,-11 4,-4 11,-2.5 5.5,2 7,10 0,5.5 -7,10 -5.5,2 -11,-2.5 -4,-4" fill="#f5c510" stroke="#c89008" strokeWidth="1" />
      </g>
      {/* Star cone upper-left */}
      <g transform="translate(152, -25)">
        <polygon points="0,-11 4,-4 11,-2.5 5.5,2 7,10 0,5.5 -7,10 -5.5,2 -11,-2.5 -4,-4" fill="#f5c510" stroke="#c89008" strokeWidth="1" />
      </g>
      {/* Star cone mid-right */}
      <g transform="translate(268, 16)">
        <polygon points="0,-9 3.2,-3.2 9,-2 4.5,1.8 5.5,8.5 0,4.5 -5.5,8.5 -4.5,1.8 -9,-2 -3.2,-3.2" fill="#f5c510" stroke="#c89008" strokeWidth="0.9" />
      </g>
      {/* Star cone mid-left */}
      <g transform="translate(133, 16)">
        <polygon points="0,-9 3.2,-3.2 9,-2 4.5,1.8 5.5,8.5 0,4.5 -5.5,8.5 -4.5,1.8 -9,-2 -3.2,-3.2" fill="#f5c510" stroke="#c89008" strokeWidth="0.9" />
      </g>
      {/* Star brim far-right */}
      <g transform="translate(336, 56)">
        <polygon points="0,-10 3.5,-3.5 10,-2.2 5,2 6,9.5 0,5 -6,9.5 -5,2 -10,-2.2 -3.5,-3.5" fill="#f5c510" stroke="#c89008" strokeWidth="1" />
      </g>
      {/* Star brim far-left */}
      <g transform="translate(64, 56)">
        <polygon points="0,-10 3.5,-3.5 10,-2.2 5,2 6,9.5 0,5 -6,9.5 -5,2 -10,-2.2 -3.5,-3.5" fill="#f5c510" stroke="#c89008" strokeWidth="1" />
      </g>
      {/* Star brim right */}
      <g transform="translate(290, 70)">
        <polygon points="0,-9 3.2,-3.2 9,-2 4.5,1.8 5.5,8.5 0,4.5 -5.5,8.5 -4.5,1.8 -9,-2 -3.2,-3.2" fill="#f5c510" stroke="#c89008" strokeWidth="0.9" />
      </g>
      {/* Star brim left */}
      <g transform="translate(110, 70)">
        <polygon points="0,-9 3.2,-3.2 9,-2 4.5,1.8 5.5,8.5 0,4.5 -5.5,8.5 -4.5,1.8 -9,-2 -3.2,-3.2" fill="#f5c510" stroke="#c89008" strokeWidth="0.9" />
      </g>
      {/* Star brim center-right */}
      <g transform="translate(248, 78)">
        <polygon points="0,-8 2.8,-2.8 8,-1.8 4,1.5 4.8,7.5 0,4 -4.8,7.5 -4,1.5 -8,-1.8 -2.8,-2.8" fill="#f5c510" stroke="#c89008" strokeWidth="0.8" />
      </g>
      {/* Star brim center-left */}
      <g transform="translate(152, 78)">
        <polygon points="0,-8 2.8,-2.8 8,-1.8 4,1.5 4.8,7.5 0,4 -4.8,7.5 -4,1.5 -8,-1.8 -2.8,-2.8" fill="#f5c510" stroke="#c89008" strokeWidth="0.8" />
      </g>

      {/* ===== MOON CRESCENTS ON HAT ===== */}
      {/* Moon upper cone */}
      <g transform="translate(200, -95)">
        <circle cx="0" cy="0" r="11" fill="#f5c510" />
        <circle cx="4.5" cy="-2" r="9.5" fill="#1e4898" />
      </g>
      {/* Moon cone right */}
      <g transform="translate(235, -50)">
        <circle cx="0" cy="0" r="9" fill="#f5c510" />
        <circle cx="3.6" cy="-1.5" r="7.7" fill="#1e4898" />
      </g>
      {/* Moon cone left */}
      <g transform="translate(165, -50)">
        <circle cx="0" cy="0" r="9" fill="#f5c510" />
        <circle cx="3.6" cy="-1.5" r="7.7" fill="#1e4898" />
      </g>
      {/* Moon brim far right */}
      <g transform="translate(316, 60)">
        <circle cx="0" cy="0" r="8" fill="#f5c510" />
        <circle cx="3.2" cy="-1.2" r="6.8" fill="#1e4898" />
      </g>
      {/* Moon brim far left */}
      <g transform="translate(84, 60)">
        <circle cx="0" cy="0" r="8" fill="#f5c510" />
        <circle cx="3.2" cy="-1.2" r="6.8" fill="#1e4898" />
      </g>
      {/* Moon brim center-right */}
      <g transform="translate(268, 75)">
        <circle cx="0" cy="0" r="7" fill="#f5c510" />
        <circle cx="2.8" cy="-1" r="6" fill="#1e4898" />
      </g>
      {/* Moon brim center-left */}
      <g transform="translate(132, 75)">
        <circle cx="0" cy="0" r="7" fill="#f5c510" />
        <circle cx="2.8" cy="-1" r="6" fill="#1e4898" />
      </g>
    </svg>
  );
};
