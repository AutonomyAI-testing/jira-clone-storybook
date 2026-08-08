/**
 * Wizard Robot Mascot - Retro-style SVG illustration
 * A boxy robot with a TV screen head, dark blue wizard hat with yellow stars/moons,
 * mechanical arms with white gloves, and brown body with rivets — Vitruvian Man style
 */

export const WizardRobotMascot = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      className="mx-auto h-[360px] w-auto"
    >
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#ede0cb" />
          <stop offset="100%" stopColor="#d9c9a8" />
        </radialGradient>
      </defs>

      {/* Beige/parchment background */}
      <rect width="500" height="500" fill="url(#bgGrad)" />
      <rect width="500" height="500" fill="#c8b89a" opacity="0.08" />

      {/* ===== VITRUVIAN MAN GEOMETRIC GUIDES ===== */}
      <circle cx="250" cy="270" r="195" fill="none" stroke="#9b7e6e" strokeWidth="1.5" opacity="0.5" />
      <rect x="85" y="105" width="330" height="330" fill="none" stroke="#9b7e6e" strokeWidth="1.5" opacity="0.5" />
      <line x1="55" y1="270" x2="445" y2="270" stroke="#9b7e6e" strokeWidth="1" opacity="0.35" />
      <line x1="250" y1="105" x2="250" y2="435" stroke="#9b7e6e" strokeWidth="1" opacity="0.35" />

      {/* ===== WIZARD HAT ===== */}
      {/* Main cone - taller and with curved droopy tip */}
      <path d="M 260 20 Q 270 30 280 60 L 335 175 L 165 175 Z" fill="#1e3a6e" stroke="#0d2550" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M 260 20 Q 265 40 270 80 L 280 150 L 265 175 L 250 175 L 220 175 L 215 140 L 245 40 Z" fill="#2a4f90" opacity="0.5" />
      <path d="M 260 20 Q 275 50 290 110 L 335 175 L 300 175 Z" fill="#142a55" opacity="0.4" />
      <ellipse cx="250" cy="175" rx="130" ry="30" fill="#1e3a6e" stroke="#0d2550" strokeWidth="2.5" />
      <ellipse cx="250" cy="172" rx="128" ry="26" fill="none" stroke="#3a5ca0" strokeWidth="1.5" opacity="0.4" />

      {/* Stars on hat */}
      <path d="M 250 58 L 255 74 L 272 74 L 259 83 L 264 99 L 250 90 L 236 99 L 241 83 L 228 74 L 245 74 Z" fill="#f5c518" stroke="#d4a017" strokeWidth="0.5" />
      <path d="M 214 95 L 217 105 L 228 105 L 219 111 L 222 121 L 214 115 L 206 121 L 209 111 L 200 105 L 211 105 Z" fill="#f5c518" stroke="#d4a017" strokeWidth="0.5" />
      <path d="M 286 95 L 289 105 L 300 105 L 291 111 L 294 121 L 286 115 L 278 121 L 281 111 L 272 105 L 283 105 Z" fill="#f5c518" stroke="#d4a017" strokeWidth="0.5" />
      <path d="M 160 165 L 162 173 L 171 173 L 164 178 L 167 186 L 160 181 L 153 186 L 156 178 L 149 173 L 158 173 Z" fill="#f5c518" stroke="#d4a017" strokeWidth="0.5" />
      <path d="M 340 165 L 342 173 L 351 173 L 344 178 L 347 186 L 340 181 L 333 186 L 336 178 L 329 173 L 338 173 Z" fill="#f5c518" stroke="#d4a017" strokeWidth="0.5" />
      <path d="M 112 176 L 113.5 181 L 119 181 L 114.5 184 L 116 189 L 112 186 L 108 189 L 109.5 184 L 105 181 L 110.5 181 Z" fill="#f5c518" stroke="#d4a017" strokeWidth="0.5" />
      <path d="M 388 176 L 389.5 181 L 395 181 L 390.5 184 L 392 189 L 388 186 L 384 189 L 385.5 184 L 381 181 L 386.5 181 Z" fill="#f5c518" stroke="#d4a017" strokeWidth="0.5" />

      {/* Moons on hat - crescent moon shapes using overlapping circles */}
      {/* Left upper moon */}
      <circle cx="228" cy="128" r="12" fill="#f5c518" />
      <circle cx="235" cy="118" r="12" fill="#1e3a6e" />
      {/* Right upper moon */}
      <circle cx="272" cy="128" r="12" fill="#f5c518" />
      <circle cx="265" cy="118" r="12" fill="#1e3a6e" />
      {/* Left brim moon */}
      <circle cx="195" cy="174" r="9" fill="#f5c518" />
      <circle cx="203" cy="166" r="9" fill="#1e3a6e" />
      {/* Right brim moon */}
      <circle cx="305" cy="174" r="9" fill="#f5c518" />
      <circle cx="297" cy="166" r="9" fill="#1e3a6e" />

      {/* ===== TV HEAD ===== */}
      <rect x="185" y="207" width="130" height="115" rx="12" fill="#5a3822" opacity="0.25" />
      <rect x="180" y="202" width="140" height="120" rx="12" fill="#b08050" stroke="#7a4f28" strokeWidth="3" />
      <rect x="183" y="205" width="134" height="114" rx="10" fill="#c49060" opacity="0.6" />
      <rect x="180" y="202" width="14" height="120" rx="12" fill="#7a4f28" opacity="0.35" />
      <rect x="306" y="202" width="14" height="120" rx="12" fill="#7a4f28" opacity="0.35" />
      <rect x="180" y="300" width="140" height="22" rx="8" fill="#7a4f28" opacity="0.3" />

      {/* TV Screen */}
      <rect x="196" y="218" width="108" height="78" rx="6" fill="#90ee50" />
      <rect x="196" y="218" width="108" height="78" rx="6" fill="#88dd44" opacity="0.8" />
      <ellipse cx="222" cy="235" rx="25" ry="16" fill="#d4f0dc" opacity="0.75" />
      <ellipse cx="215" cy="229" rx="14" ry="9" fill="white" opacity="0.5" />
      <ellipse cx="280" cy="270" rx="15" ry="10" fill="#a8e0b0" opacity="0.4" />
      <path d="M 240 285 Q 285 278 304 296 L 304 296 Q 295 296 196 296 Z" fill="#2a6a38" opacity="0.35" />
      <rect x="196" y="218" width="108" height="78" rx="6" fill="none" stroke="#285a35" strokeWidth="1.5" />

      {/* Control knob */}
      <circle cx="250" cy="307" r="11" fill="#7a4f28" stroke="#5a3018" strokeWidth="1.5" />
      <circle cx="250" cy="307" r="7" fill="#f5c518" stroke="#d4a017" strokeWidth="1" />
      <circle cx="247" cy="304" r="2.5" fill="#ffe87a" opacity="0.6" />

      <line x1="195" y1="298" x2="305" y2="298" stroke="#7a4f28" strokeWidth="1" opacity="0.4" />
      <rect x="244" y="195" width="12" height="12" rx="2" fill="#8b5a38" stroke="#6a3e22" strokeWidth="1" />

      {/* ===== MECHANICAL ARMS ===== */}
      {/* UPPER LEFT DIAGONAL ARM (Vitruvian Man pose) */}
      <rect x="80" y="200" width="90" height="20" rx="5" fill="#484848" stroke="#2a2a2a" strokeWidth="1.5" transform="rotate(-35, 125, 210)" />
      <circle cx="170" cy="145" r="10" fill="#8b5a38" stroke="#6a3e22" strokeWidth="1.5" />
      <circle cx="115" cy="185" r="9" fill="#8b5a38" stroke="#6a3e22" strokeWidth="1.5" />
      <rect x="40" y="155" width="75" height="18" rx="4" fill="#383838" stroke="#2a2a2a" strokeWidth="1.5" transform="rotate(-35, 77, 164)" />
      <rect x="15" y="135" width="14" height="24" rx="4" fill="#c0bdb8" stroke="#888" strokeWidth="1.5" transform="rotate(-35, 22, 147)" />
      {/* Upper left glove */}
      <ellipse cx="-5" cy="110" rx="22" ry="26" fill="#eeece8" stroke="#aaaaaa" strokeWidth="2" transform="rotate(-35, 5, 125)" />
      <ellipse cx="10" cy="100" rx="6" ry="14" fill="#dddddd" stroke="#aaaaaa" strokeWidth="1" transform="rotate(-35, 10, 114)" />
      {/* UPPER RIGHT DIAGONAL ARM (Vitruvian Man pose) */}
      <rect x="330" y="200" width="90" height="20" rx="5" fill="#484848" stroke="#2a2a2a" strokeWidth="1.5" transform="rotate(35, 375, 210)" />
      <circle cx="330" cy="145" r="10" fill="#8b5a38" stroke="#6a3e22" strokeWidth="1.5" />
      <circle cx="385" cy="185" r="9" fill="#8b5a38" stroke="#6a3e22" strokeWidth="1.5" />
      <rect x="385" y="155" width="75" height="18" rx="4" fill="#383838" stroke="#2a2a2a" strokeWidth="1.5" transform="rotate(35, 423, 164)" />
      <rect x="460" y="135" width="14" height="24" rx="4" fill="#c0bdb8" stroke="#888" strokeWidth="1.5" transform="rotate(35, 467, 147)" />
      {/* Upper right glove */}
      <ellipse cx="505" cy="110" rx="22" ry="26" fill="#eeece8" stroke="#aaaaaa" strokeWidth="2" transform="rotate(35, 495, 125)" />
      <ellipse cx="490" cy="100" rx="6" ry="14" fill="#dddddd" stroke="#aaaaaa" strokeWidth="1" transform="rotate(35, 490, 114)" />
      {/* LEFT ARM */}
      <rect x="90" y="252" width="92" height="22" rx="5" fill="#484848" stroke="#2a2a2a" strokeWidth="1.5" />
      <circle cx="182" cy="263" r="10" fill="#8b5a38" stroke="#6a3e22" strokeWidth="1.5" />
      <circle cx="125" cy="263" r="9" fill="#8b5a38" stroke="#6a3e22" strokeWidth="1.5" />
      <rect x="50" y="258" width="80" height="18" rx="4" fill="#383838" stroke="#2a2a2a" strokeWidth="1.5" />
      <rect x="48" y="255" width="14" height="24" rx="4" fill="#c0bdb8" stroke="#888" strokeWidth="1.5" />
      {/* Left glove */}
      <ellipse cx="36" cy="268" rx="22" ry="26" fill="#eeece8" stroke="#aaaaaa" strokeWidth="2" />
      <ellipse cx="49" cy="268" rx="6" ry="14" fill="#dddddd" stroke="#aaaaaa" strokeWidth="1" />
      <ellipse cx="18" cy="252" rx="6" ry="10" fill="#eeece8" stroke="#aaa" strokeWidth="1.5" transform="rotate(-20, 18, 252)" />
      <ellipse cx="12" cy="264" rx="6" ry="10" fill="#eeece8" stroke="#aaa" strokeWidth="1.5" transform="rotate(-35, 12, 264)" />
      <ellipse cx="14" cy="279" rx="6" ry="10" fill="#eeece8" stroke="#aaa" strokeWidth="1.5" transform="rotate(-50, 14, 279)" />
      <ellipse cx="24" cy="288" rx="6" ry="10" fill="#eeece8" stroke="#aaa" strokeWidth="1.5" transform="rotate(-70, 24, 288)" />
      <ellipse cx="36" cy="272" rx="16" ry="18" fill="#d5d2cc" opacity="0.4" />

      {/* RIGHT ARM */}
      <rect x="318" y="252" width="92" height="22" rx="5" fill="#484848" stroke="#2a2a2a" strokeWidth="1.5" />
      <circle cx="318" cy="263" r="10" fill="#8b5a38" stroke="#6a3e22" strokeWidth="1.5" />
      <circle cx="375" cy="263" r="9" fill="#8b5a38" stroke="#6a3e22" strokeWidth="1.5" />
      <rect x="370" y="258" width="80" height="18" rx="4" fill="#383838" stroke="#2a2a2a" strokeWidth="1.5" />
      <rect x="438" y="255" width="14" height="24" rx="4" fill="#c0bdb8" stroke="#888" strokeWidth="1.5" />
      {/* Right glove */}
      <ellipse cx="464" cy="268" rx="22" ry="26" fill="#eeece8" stroke="#aaaaaa" strokeWidth="2" />
      <ellipse cx="451" cy="268" rx="6" ry="14" fill="#dddddd" stroke="#aaaaaa" strokeWidth="1" />
      <ellipse cx="482" cy="252" rx="6" ry="10" fill="#eeece8" stroke="#aaa" strokeWidth="1.5" transform="rotate(20, 482, 252)" />
      <ellipse cx="488" cy="264" rx="6" ry="10" fill="#eeece8" stroke="#aaa" strokeWidth="1.5" transform="rotate(35, 488, 264)" />
      <ellipse cx="486" cy="279" rx="6" ry="10" fill="#eeece8" stroke="#aaa" strokeWidth="1.5" transform="rotate(50, 486, 279)" />
      <ellipse cx="476" cy="288" rx="6" ry="10" fill="#eeece8" stroke="#aaa" strokeWidth="1.5" transform="rotate(70, 476, 288)" />
      <ellipse cx="464" cy="272" rx="16" ry="18" fill="#d5d2cc" opacity="0.4" />

      {/* ===== BODY ===== */}
      <rect x="180" y="328" width="140" height="100" rx="8" fill="#5a3822" opacity="0.2" />
      <rect x="180" y="322" width="140" height="100" rx="8" fill="#b08050" stroke="#7a4f28" strokeWidth="2.5" />
      <rect x="180" y="322" width="14" height="100" rx="6" fill="#7a4f28" opacity="0.3" />
      <rect x="306" y="322" width="14" height="100" rx="6" fill="#7a4f28" opacity="0.3" />
      <rect x="200" y="328" width="100" height="18" rx="4" fill="#c49060" opacity="0.5" />
      <rect x="204" y="348" width="92" height="52" rx="5" fill="#7a4f28" stroke="#5a3018" strokeWidth="1.5" />
      <line x1="210" y1="360" x2="290" y2="360" stroke="#5a3018" strokeWidth="1.2" />
      <line x1="210" y1="372" x2="290" y2="372" stroke="#5a3018" strokeWidth="1.2" />
      <line x1="210" y1="384" x2="290" y2="384" stroke="#5a3018" strokeWidth="1.2" />
      <circle cx="198" cy="332" r="3.5" fill="#8b6840" stroke="#6a4f28" strokeWidth="1" />
      <circle cx="310" cy="332" r="3.5" fill="#8b6840" stroke="#6a4f28" strokeWidth="1" />
      <circle cx="198" cy="412" r="3.5" fill="#8b6840" stroke="#6a4f28" strokeWidth="1" />
      <circle cx="310" cy="412" r="3.5" fill="#8b6840" stroke="#6a4f28" strokeWidth="1" />
      <circle cx="192" cy="370" r="5" fill="#6a3e22" stroke="#4a2e12" strokeWidth="1" />
      <circle cx="320" cy="370" r="5" fill="#6a3e22" stroke="#4a2e12" strokeWidth="1" />

      {/* ===== LEGS / FEET ===== */}
      <rect x="210" y="418" width="22" height="24" rx="3" fill="#8b5a38" stroke="#6a3e22" strokeWidth="1.5" />
      <rect x="268" y="418" width="22" height="24" rx="3" fill="#8b5a38" stroke="#6a3e22" strokeWidth="1.5" />
      <rect x="196" y="440" width="54" height="28" rx="6" fill="#6b3e22" stroke="#4a2a12" strokeWidth="2" />
      <rect x="188" y="448" width="22" height="16" rx="4" fill="#5a3018" stroke="#4a2a12" strokeWidth="1.5" />
      <line x1="200" y1="450" x2="244" y2="450" stroke="#4a2a12" strokeWidth="1.2" />
      <line x1="200" y1="457" x2="244" y2="457" stroke="#4a2a12" strokeWidth="1.2" />
      <rect x="250" y="440" width="54" height="28" rx="6" fill="#6b3e22" stroke="#4a2a12" strokeWidth="2" />
      <rect x="290" y="448" width="22" height="16" rx="4" fill="#5a3018" stroke="#4a2a12" strokeWidth="1.5" />
      <line x1="256" y1="450" x2="300" y2="450" stroke="#4a2a12" strokeWidth="1.2" />
      <line x1="256" y1="457" x2="300" y2="457" stroke="#4a2a12" strokeWidth="1.2" />
    </svg>
  );
};
