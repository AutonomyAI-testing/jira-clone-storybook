/**
 * A whimsical wizard robot character rendered as an SVG illustration.
 * Features a tall wizard hat with stars and moons, CRT monitor head with green screen,
 * mechanical body with panel details, four articulated arms with gloved hands, and legs.
 * Used as a decorative element for error pages and other UI components.
 */
export const WizardRobot = ({
  width = "100%",
  height = "100%",
  className = "",
}: Props): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 500 520"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Hat main gradient - rich dark blue */}
        <linearGradient id="hatGrad" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#4268b0" />
          <stop offset="40%" stopColor="#2a4898" />
          <stop offset="80%" stopColor="#1a3278" />
          <stop offset="100%" stopColor="#122460" />
        </linearGradient>
        {/* Brim gradient */}
        <linearGradient id="brimGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3458a8" />
          <stop offset="50%" stopColor="#263888" />
          <stop offset="100%" stopColor="#1a2c6e" />
        </linearGradient>
        {/* Body/monitor frame - warm brown */}
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#cb9050" />
          <stop offset="50%" stopColor="#b07838" />
          <stop offset="100%" stopColor="#8c5a28" />
        </linearGradient>
        {/* Screen green */}
        <linearGradient id="screenGrad" x1="5%" y1="5%" x2="95%" y2="95%">
          <stop offset="0%" stopColor="#b8e058" />
          <stop offset="35%" stopColor="#88cc30" />
          <stop offset="75%" stopColor="#68a820" />
          <stop offset="100%" stopColor="#4a8010" />
        </linearGradient>
        {/* Screen lower shade */}
        <linearGradient id="screenLow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a018" />
          <stop offset="100%" stopColor="#387808" />
        </linearGradient>
        {/* Arm gradient */}
        <linearGradient id="armGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6a6a6a" />
          <stop offset="100%" stopColor="#2a2a2a" />
        </linearGradient>
        {/* Leg gradient */}
        <linearGradient id="legGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7e4c22" />
          <stop offset="100%" stopColor="#5a3010" />
        </linearGradient>
        {/* Foot gradient */}
        <linearGradient id="footGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6a3e1a" />
          <stop offset="100%" stopColor="#3a1e06" />
        </linearGradient>
        {/* Chest box gradient */}
        <linearGradient id="chestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9a6028" />
          <stop offset="100%" stopColor="#703a10" />
        </linearGradient>
        {/* Power button gradient */}
        <radialGradient id="btnGrad" cx="38%" cy="32%" r="60%">
          <stop offset="0%" stopColor="#fce060" />
          <stop offset="100%" stopColor="#c89010" />
        </radialGradient>
        {/* Background radial - parchment */}
        <radialGradient id="bgCircle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ede0c6" />
          <stop offset="65%" stopColor="#e5d5b0" />
          <stop offset="100%" stopColor="#d5c498" />
        </radialGradient>
      </defs>

      {/* ====== PAGE BACKGROUND ====== */}
      <rect width="500" height="520" fill="#e8dcc8" />

      {/* Speckle texture on background */}
      <g opacity="0.45">
        {[
          [42,18],[88,55],[135,24],[178,68],[224,12],[268,48],[312,16],[358,72],[402,30],[446,58],
          [20,95],[75,112],[128,88],[172,130],[218,96],[265,115],[308,84],[355,118],[398,100],[448,90],
          [35,155],[82,172],[130,148],[175,190],[220,160],[262,178],[308,150],[352,188],[398,162],[445,180],
          [18,225],[72,240],[120,215],[168,252],[214,228],[260,245],[308,218],[352,255],[395,235],[448,248],
          [30,295],[78,310],[125,285],[170,318],[215,298],[262,315],[308,288],[354,322],[398,302],[448,318],
          [22,368],[70,382],[118,355],[165,390],[212,368],[258,385],[305,358],[352,392],[398,368],[446,388],
          [40,438],[88,452],[135,428],[180,462],[225,440],[270,458],[315,432],[360,468],[405,442],[448,460],
          [55,495],[100,510],[150,490],[195,508],[240,492],[285,510],[330,488],[375,505],[420,492],[462,508],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.2" fill="#b0985e" />
        ))}
      </g>

      {/* ====== CIRCLE BACKDROP ====== */}
      <circle cx="250" cy="268" r="222" fill="url(#bgCircle)" stroke="#9a7050" strokeWidth="2.5" />

      {/* Vitruvian-style square frame (inside circle) */}
      <rect x="118" y="202" width="264" height="252" fill="none" stroke="#9a7050" strokeWidth="1.5" opacity="0.7" />
      {/* Cross lines */}
      <line x1="28" y1="268" x2="472" y2="268" stroke="#9a7050" strokeWidth="1.2" opacity="0.65" />
      <line x1="250" y1="46" x2="250" y2="490" stroke="#9a7050" strokeWidth="1.2" opacity="0.65" />

      {/* ====== WIZARD HAT ====== */}
      {/* Hat main cone — tall with slight lean left */}
      <path
        d="M250,46 C252,46 256,48 260,54 L316,202 L184,202 Z"
        fill="url(#hatGrad)"
        stroke="#08142e"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Left face of hat — lighter highlight */}
      <path
        d="M250,46 L184,202 L216,202 Z"
        fill="#5070c0"
        opacity="0.3"
      />
      {/* Hat tip curl */}
      <path
        d="M250,46 C255,40 264,44 266,54 C262,65 256,76 252,84 C250,70 248,56 250,46 Z"
        fill="#3055a8"
        stroke="#08142e"
        strokeWidth="1.8"
      />
      {/* Tip fold crease line */}
      <path d="M260,54 C265,50 268,57 265,65"
        fill="none" stroke="#060e22" strokeWidth="1.8" strokeLinecap="round" />

      {/* Hat brim — large wide ellipse */}
      <ellipse cx="250" cy="204" rx="130" ry="32" fill="url(#brimGrad)" stroke="#08142e" strokeWidth="2.5" />
      {/* Brim highlight */}
      <ellipse cx="250" cy="199" rx="126" ry="27" fill="#3d65b8" opacity="0.35" />
      {/* Brim underside shadow */}
      <ellipse cx="250" cy="212" rx="122" ry="23" fill="#10204a" opacity="0.5" />

      {/* === Stars on hat === */}
      {/* Large star - right upper cone */}
      <polygon points="284,92 289,106 303,106 292,116 296,130 284,120 272,130 276,116 265,106 279,106"
        fill="#f8c820" stroke="#c89010" strokeWidth="1" />
      {/* Large star - left mid cone */}
      <polygon points="212,118 217,132 231,132 220,141 224,155 212,146 200,155 204,141 193,132 207,132"
        fill="#f8c820" stroke="#c89010" strokeWidth="1" />
      {/* Star - lower right cone */}
      <polygon points="284,158 288,169 299,169 290,176 293,187 284,180 275,187 278,176 269,169 280,169"
        fill="#f8c820" stroke="#c89010" strokeWidth="0.9" />
      {/* Star - brim left edge */}
      <polygon points="162,198 165,207 174,207 167,212 169,221 162,216 155,221 157,212 150,207 159,207"
        fill="#f8c820" stroke="#c89010" strokeWidth="0.7" />
      {/* Star - brim far left */}
      <polygon points="134,196 137,205 146,205 139,210 141,219 134,214 127,219 129,210 122,205 131,205"
        fill="#f8c820" stroke="#c89010" strokeWidth="0.6" />
      {/* Star - brim right */}
      <polygon points="338,198 341,207 350,207 343,212 345,221 338,216 331,221 333,212 326,207 335,207"
        fill="#f8c820" stroke="#c89010" strokeWidth="0.7" />
      {/* Star - brim far right */}
      <polygon points="368,196 371,205 380,205 373,210 375,219 368,214 361,219 363,210 356,205 365,205"
        fill="#f8c820" stroke="#c89010" strokeWidth="0.6" />
      {/* Star - near tip */}
      <polygon points="262,68 265,76 273,76 267,81 269,89 262,84 255,89 257,81 251,76 259,76"
        fill="#f8c820" stroke="#c89010" strokeWidth="0.6" />

      {/* === Crescent moons on hat === */}
      {/* Moon - upper left cone */}
      <path d="M226,80 C214,89 213,108 225,117 C210,111 208,90 220,80 Z"
        fill="#f8c820" />
      {/* Moon - right side cone */}
      <path d="M302,142 C291,150 291,166 302,173 C289,167 287,150 296,142 Z"
        fill="#f8c820" />
      {/* Moon - brim left */}
      <path d="M198,202 C191,207 191,218 198,222 C189,218 188,207 195,202 Z"
        fill="#f8c820" />
      {/* Moon - brim right */}
      <path d="M308,202 C301,207 301,218 308,222 C299,218 298,207 305,202 Z"
        fill="#f8c820" />
      {/* Moon - brim left far */}
      <path d="M172,201 C165,206 165,215 172,218 C164,214 163,205 169,201 Z"
        fill="#f8c820" />
      {/* Moon - brim right far */}
      <path d="M338,201 C331,206 331,215 338,218 C330,214 329,205 335,201 Z"
        fill="#f8c820" />

      {/* ====== CRT MONITOR HEAD ====== */}
      {/* Monitor outer frame */}
      <rect x="186" y="220" width="128" height="98" rx="13" fill="url(#bodyGrad)" stroke="#622c0c" strokeWidth="2.5" />
      {/* Monitor left side depth */}
      <rect x="186" y="220" width="12" height="98" rx="13" fill="#6e4010" opacity="0.65" />
      {/* Monitor bottom depth */}
      <rect x="186" y="302" width="128" height="16" rx="8" fill="#6e4010" opacity="0.55" />

      {/* Screen bezel (dark inner rim) */}
      <rect x="199" y="232" width="104" height="78" rx="7" fill="#1a0800" opacity="0.45" />

      {/* Green screen */}
      <rect x="204" y="237" width="94" height="68" rx="6" fill="url(#screenGrad)" stroke="#386010" strokeWidth="1.5" />
      {/* Screen lower half darker */}
      <rect x="204" y="265" width="94" height="40" rx="0" fill="url(#screenLow)" opacity="0.4" />

      {/* Screen highlight - irregular white shape top-left */}
      <path d="M212,244 Q228,238 246,248 Q252,256 245,268 Q232,274 214,264 Q205,256 212,244 Z"
        fill="white" opacity="0.58" />
      {/* Screen secondary highlight - bottom right */}
      <path d="M252,272 Q272,265 284,275 Q288,283 282,290 Q266,294 254,287 Q246,279 252,272 Z"
        fill="white" opacity="0.38" />

      {/* Monitor bolts */}
      <circle cx="193" cy="227" r="4.5" fill="#d4a018" stroke="#8b5c08" strokeWidth="1" />
      <circle cx="307" cy="227" r="4.5" fill="#d4a018" stroke="#8b5c08" strokeWidth="1" />
      <circle cx="193" cy="311" r="4.5" fill="#d4a018" stroke="#8b5c08" strokeWidth="1" />
      <circle cx="307" cy="311" r="4.5" fill="#d4a018" stroke="#8b5c08" strokeWidth="1" />

      {/* Monitor base lip */}
      <rect x="194" y="314" width="112" height="9" rx="3.5" fill="#622c0c" stroke="#3e1c06" strokeWidth="1" />

      {/* ====== ROBOT TORSO ====== */}
      <rect x="204" y="323" width="92" height="68" rx="7" fill="url(#bodyGrad)" stroke="#622c0c" strokeWidth="2" />
      {/* Torso side depth */}
      <rect x="204" y="323" width="10" height="68" rx="7" fill="#6a3e10" opacity="0.6" />

      {/* Vertical panel dividers */}
      <line x1="224" y1="323" x2="224" y2="391" stroke="#9a6028" strokeWidth="1.3" opacity="0.6" />
      <line x1="276" y1="323" x2="276" y2="391" stroke="#9a6028" strokeWidth="1.3" opacity="0.6" />

      {/* Torso bolts */}
      <circle cx="212" cy="332" r="3.8" fill="#d4a018" stroke="#8b5c08" strokeWidth="0.9" />
      <circle cx="288" cy="332" r="3.8" fill="#d4a018" stroke="#8b5c08" strokeWidth="0.9" />
      <circle cx="212" cy="383" r="3.8" fill="#d4a018" stroke="#8b5c08" strokeWidth="0.9" />
      <circle cx="288" cy="383" r="3.8" fill="#d4a018" stroke="#8b5c08" strokeWidth="0.9" />

      {/* Chest panel box */}
      <rect x="224" y="338" width="52" height="36" rx="5" fill="url(#chestGrad)" stroke="#481c06" strokeWidth="1.3" />
      {/* Chest panel inset shadow */}
      <rect x="229" y="343" width="42" height="26" rx="3.5" fill="#3c1804" opacity="0.5" />

      {/* Power button */}
      <circle cx="250" cy="356" r="12" fill="#b07810" stroke="#7a4c06" strokeWidth="1.8" />
      <circle cx="250" cy="356" r="9" fill="url(#btnGrad)" />
      <circle cx="247" cy="353" r="3.5" fill="white" opacity="0.58" />

      {/* ====== ARMS — 4 total ====== */}
      {/* Arms attach to the sides of the monitor (head), spreading wide */}

      {/* === LEFT UPPER ARM — upper pair, extends to upper-left === */}
      <g>
        {/* Arm tube */}
        <rect x="50" y="244" width="140" height="18" rx="9" fill="url(#armGrad)" stroke="#181818" strokeWidth="1.8" />
        {/* Elbow joint */}
        <circle cx="144" cy="253" r="13" fill="#505050" stroke="#1a1a1a" strokeWidth="1.8" />
        <circle cx="144" cy="253" r="7.5" fill="#383838" />
        {/* Glove - large cartoon hand, palm */}
        <ellipse cx="42" cy="253" rx="18" ry="23" fill="#f2f2f2" stroke="#c8c8c8" strokeWidth="1.5" />
        {/* Wrist cuff strap */}
        <rect x="47" y="270" width="14" height="11" rx="3" fill="#e0e0e0" stroke="#c0c0c0" strokeWidth="1" />
        {/* Fingers spread */}
        <ellipse cx="20" cy="242" rx="7.5" ry="12" fill="#f2f2f2" stroke="#c8c8c8" strokeWidth="1.2" />
        <ellipse cx="11" cy="254" rx="6.5" ry="10" fill="#f2f2f2" stroke="#c8c8c8" strokeWidth="1.2" />
        <ellipse cx="20" cy="268" rx="7.5" ry="12" fill="#f2f2f2" stroke="#c8c8c8" strokeWidth="1.2" />
        {/* Thumb */}
        <ellipse cx="40" cy="234" rx="6.5" ry="10.5" fill="#f2f2f2" stroke="#c8c8c8" strokeWidth="1.2" />
      </g>

      {/* === LEFT LOWER ARM — lower pair, extends to lower-left === */}
      <g transform="rotate(15, 190, 320)">
        {/* Arm tube */}
        <rect x="42" y="285" width="155" height="16" rx="8" fill="url(#armGrad)" stroke="#181818" strokeWidth="1.8" />
        {/* Elbow joint */}
        <circle cx="142" cy="293" r="11.5" fill="#505050" stroke="#1a1a1a" strokeWidth="1.8" />
        <circle cx="142" cy="293" r="6.5" fill="#383838" />
        {/* Lower left glove */}
        <ellipse cx="34" cy="293" rx="16" ry="20" fill="#f2f2f2" stroke="#c8c8c8" strokeWidth="1.5" />
        <rect x="39" y="308" width="12" height="10" rx="3" fill="#e0e0e0" stroke="#c0c0c0" strokeWidth="1" />
        <ellipse cx="14" cy="283" rx="6.5" ry="10.5" fill="#f2f2f2" stroke="#c8c8c8" strokeWidth="1.2" />
        <ellipse cx="6" cy="294" rx="5.5" ry="8.5" fill="#f2f2f2" stroke="#c8c8c8" strokeWidth="1.2" />
        <ellipse cx="14" cy="306" rx="6.5" ry="10.5" fill="#f2f2f2" stroke="#c8c8c8" strokeWidth="1.2" />
        <ellipse cx="30" cy="275" rx="6" ry="9.5" fill="#f2f2f2" stroke="#c8c8c8" strokeWidth="1.2" />
      </g>

      {/* === RIGHT UPPER ARM — upper pair, extends to upper-right === */}
      <g>
        {/* Arm tube */}
        <rect x="310" y="244" width="140" height="18" rx="9" fill="url(#armGrad)" stroke="#181818" strokeWidth="1.8" />
        {/* Elbow joint */}
        <circle cx="356" cy="253" r="13" fill="#505050" stroke="#1a1a1a" strokeWidth="1.8" />
        <circle cx="356" cy="253" r="7.5" fill="#383838" />
        {/* Right upper glove */}
        <ellipse cx="458" cy="253" rx="18" ry="23" fill="#f2f2f2" stroke="#c8c8c8" strokeWidth="1.5" />
        <rect x="439" y="270" width="14" height="11" rx="3" fill="#e0e0e0" stroke="#c0c0c0" strokeWidth="1" />
        <ellipse cx="480" cy="242" rx="7.5" ry="12" fill="#f2f2f2" stroke="#c8c8c8" strokeWidth="1.2" />
        <ellipse cx="489" cy="254" rx="6.5" ry="10" fill="#f2f2f2" stroke="#c8c8c8" strokeWidth="1.2" />
        <ellipse cx="480" cy="268" rx="7.5" ry="12" fill="#f2f2f2" stroke="#c8c8c8" strokeWidth="1.2" />
        <ellipse cx="460" cy="234" rx="6.5" ry="10.5" fill="#f2f2f2" stroke="#c8c8c8" strokeWidth="1.2" />
      </g>

      {/* === RIGHT LOWER ARM — lower pair, extends to lower-right === */}
      <g transform="rotate(-15, 310, 320)">
        {/* Arm tube */}
        <rect x="303" y="285" width="155" height="16" rx="8" fill="url(#armGrad)" stroke="#181818" strokeWidth="1.8" />
        {/* Elbow joint */}
        <circle cx="358" cy="293" r="11.5" fill="#505050" stroke="#1a1a1a" strokeWidth="1.8" />
        <circle cx="358" cy="293" r="6.5" fill="#383838" />
        {/* Right lower glove */}
        <ellipse cx="466" cy="293" rx="16" ry="20" fill="#f2f2f2" stroke="#c8c8c8" strokeWidth="1.5" />
        <rect x="449" y="308" width="12" height="10" rx="3" fill="#e0e0e0" stroke="#c0c0c0" strokeWidth="1" />
        <ellipse cx="486" cy="283" rx="6.5" ry="10.5" fill="#f2f2f2" stroke="#c8c8c8" strokeWidth="1.2" />
        <ellipse cx="494" cy="294" rx="5.5" ry="8.5" fill="#f2f2f2" stroke="#c8c8c8" strokeWidth="1.2" />
        <ellipse cx="486" cy="306" rx="6.5" ry="10.5" fill="#f2f2f2" stroke="#c8c8c8" strokeWidth="1.2" />
        <ellipse cx="470" cy="275" rx="6" ry="9.5" fill="#f2f2f2" stroke="#c8c8c8" strokeWidth="1.2" />
      </g>

      {/* ====== LEGS ====== */}
      {/* Left upper leg */}
      <rect x="216" y="391" width="26" height="38" rx="6" fill="url(#legGrad)" stroke="#481e08" strokeWidth="1.8" />
      {/* Left foot */}
      <rect x="200" y="424" width="50" height="26" rx="7" fill="url(#footGrad)" stroke="#3a1808" strokeWidth="1.8" />
      {/* Left foot toes */}
      <rect x="204" y="434" width="16" height="13" rx="4" fill="#5c3010" />
      <rect x="224" y="434" width="16" height="13" rx="4" fill="#5c3010" />

      {/* Right upper leg */}
      <rect x="258" y="391" width="26" height="38" rx="6" fill="url(#legGrad)" stroke="#481e08" strokeWidth="1.8" />
      {/* Right foot */}
      <rect x="250" y="424" width="50" height="26" rx="7" fill="url(#footGrad)" stroke="#3a1808" strokeWidth="1.8" />
      {/* Right foot toes */}
      <rect x="254" y="434" width="16" height="13" rx="4" fill="#5c3010" />
      <rect x="274" y="434" width="16" height="13" rx="4" fill="#5c3010" />
    </svg>
  );
};

interface Props {
  /** SVG width attribute — can be a string (e.g., "100%") or number (pixels). Defaults to "100%" */
  width?: string | number;
  /** SVG height attribute — can be a string (e.g., "100%") or number (pixels). Defaults to "100%" */
  height?: string | number;
  /** Additional CSS classes to apply to the SVG element. Defaults to empty string */
  className?: string;
}
