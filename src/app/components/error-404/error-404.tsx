import { Button } from "../button";

// Color values from design system CSS variables
const ERROR_CODE_COLOR = "var(--Red500)";
const ERROR_MESSAGE_COLOR = "var(--Red600)";
const BACKGROUND_COLOR = "var(--Yellow100)";

/**
 * WizardRobotIllustration: A whimsical wizard-themed robot character used for the 404 error page.
 * The illustration features a robot with a wizard hat, vitruvian frame reference, and expressive arms.
 * Implemented as an inline SVG component to keep illustrations easily editable and avoid asset management.
 */
const WizardRobotIllustration = () => (
  <svg
    viewBox="0 0 500 580"
    className="h-auto max-h-[420px] w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* === VITRUVIAN FRAME === */}
    {/* Main circle */}
    <circle
      cx="250"
      cy="280"
      r="230"
      fill="none"
      stroke="#7a4545"
      strokeWidth="3"
      opacity="0.55"
    />
    {/* Inner square */}
    <rect
      x="55"
      y="155"
      width="390"
      height="390"
      fill="none"
      stroke="#7a4545"
      strokeWidth="2"
      opacity="0.45"
    />
    {/* Horizontal line through middle of circle */}
    <line
      x1="20"
      y1="280"
      x2="480"
      y2="280"
      stroke="#7a4545"
      strokeWidth="1.2"
      opacity="0.3"
    />

    {/* === WIZARD HAT === */}
    {/* Hat cone - tall and dramatic, slight lean right */}
    <path
      d="M 185 175 L 248 18 L 272 18 L 320 175 Z"
      fill="#1a3660"
      stroke="#0d1f3c"
      strokeWidth="2.5"
    />
    {/* Hat brim - wide ellipse */}
    <ellipse
      cx="252"
      cy="175"
      rx="90"
      ry="19"
      fill="#1a3660"
      stroke="#0d1f3c"
      strokeWidth="2.5"
    />
    {/* Hat brim highlight */}
    <ellipse cx="252" cy="172" rx="86" ry="13" fill="#243e72" opacity="0.5" />
    {/* Hat band */}
    <rect x="162" y="170" width="180" height="13" fill="#2a5288" rx="6" />

    {/* Stars on hat */}
    <g fill="#f5c518">
      {/* Large star center */}
      <polygon points="250,38 255,56 274,56 259,67 264,85 250,74 236,85 241,67 226,56 245,56" />
      {/* Medium star top left */}
      <polygon points="210,65 214,78 228,78 217,86 221,99 210,91 199,99 203,86 192,78 206,78" />
      {/* Medium star right */}
      <polygon points="278,72 281,82 292,82 284,88 287,98 278,92 269,98 272,88 264,82 275,82" />
      {/* Small star lower left */}
      <polygon points="196,115 198,123 207,123 200,128 202,136 196,132 190,136 192,128 185,123 194,123" />
      {/* Small star lower right */}
      <polygon points="298,108 300,116 309,116 302,121 304,129 298,125 292,129 294,121 287,116 296,116" />
    </g>

    {/* Crescent moons on hat */}
    <g>
      {/* Moon 1 */}
      <circle cx="222" cy="95" r="9" fill="#f5c518" />
      <circle cx="226" cy="92" r="9" fill="#1a3660" />
      {/* Moon 2 */}
      <circle cx="280" cy="55" r="7" fill="#f5c518" />
      <circle cx="284" cy="52" r="7" fill="#1a3660" />
      {/* Moon 3 */}
      <circle cx="235" cy="138" r="6" fill="#f5c518" />
      <circle cx="238" cy="136" r="6" fill="#1a3660" />
    </g>

    {/* === TV BODY === */}
    {/* Main body */}
    <rect
      x="150"
      y="195"
      width="200"
      height="175"
      fill="#c49060"
      stroke="#172b4d"
      strokeWidth="3"
      rx="12"
    />
    {/* Top highlight panel */}
    <rect x="150" y="195" width="200" height="20" fill="#d4a070" rx="12" />
    <rect x="150" y="208" width="200" height="8" fill="#c49060" />
    {/* Side shading */}
    <rect
      x="330"
      y="195"
      width="20"
      height="175"
      fill="#a07040"
      opacity="0.35"
      rx="0"
    />

    {/* Corner bolts */}
    <circle
      cx="168"
      cy="212"
      r="6"
      fill="#8b6030"
      stroke="#172b4d"
      strokeWidth="1.5"
    />
    <circle
      cx="332"
      cy="212"
      r="6"
      fill="#8b6030"
      stroke="#172b4d"
      strokeWidth="1.5"
    />
    <circle
      cx="168"
      cy="356"
      r="6"
      fill="#8b6030"
      stroke="#172b4d"
      strokeWidth="1.5"
    />
    <circle
      cx="332"
      cy="356"
      r="6"
      fill="#8b6030"
      stroke="#172b4d"
      strokeWidth="1.5"
    />

    {/* === SCREEN === */}
    {/* Outer bezel */}
    <rect x="168" y="220" width="164" height="120" fill="#7a5025" rx="8" />
    {/* Screen face */}
    <rect x="174" y="226" width="152" height="108" fill="#6fbe45" rx="5" />
    {/* Screen gradient top */}
    <rect
      x="174"
      y="226"
      width="152"
      height="30"
      fill="#85d455"
      rx="5"
      opacity="0.7"
    />
    {/* Screen glare large */}
    <ellipse cx="218" cy="256" rx="32" ry="20" fill="#9fe060" opacity="0.55" />
    {/* Screen glare small shine */}
    <ellipse cx="222" cy="248" rx="12" ry="7" fill="#ffffff" opacity="0.35" />
    {/* Screen diagonal light */}
    <path
      d="M 200 236 Q 225 228 240 244"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.5"
    />
    {/* Screen reflection arc */}
    <path
      d="M 268 282 Q 285 272 300 284"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.45"
    />

    {/* === CONTROL PANEL === */}
    <rect
      x="168"
      y="344"
      width="164"
      height="24"
      fill="#9a7040"
      stroke="#172b4d"
      strokeWidth="1.5"
    />
    {/* Main golden button */}
    <circle
      cx="250"
      cy="356"
      r="8"
      fill="#f5c518"
      stroke="#8b6030"
      strokeWidth="2"
    />
    <circle cx="280" cy="356" r="4" fill="#6a4020" />
    <circle cx="220" cy="356" r="4" fill="#6a4020" />
    {/* Indicator lights */}
    <circle cx="300" cy="356" r="3" fill="#e34935" />
    <circle cx="200" cy="356" r="3" fill="#2abb7f" />

    {/* === ARMS === */}
    {/* --- Left upper arm (raised ~45deg) --- */}
    <line
      x1="152"
      y1="240"
      x2="80"
      y2="192"
      stroke="#3a2818"
      strokeWidth="14"
      strokeLinecap="round"
    />
    {/* Left upper arm joint */}
    <circle
      cx="80"
      cy="192"
      r="10"
      fill="#6a4020"
      stroke="#3a2818"
      strokeWidth="2"
    />

    {/* --- Left lower arm (horizontal, slightly down) --- */}
    <line
      x1="152"
      y1="300"
      x2="55"
      y2="308"
      stroke="#3a2818"
      strokeWidth="14"
      strokeLinecap="round"
    />
    {/* Left lower arm joint */}
    <circle
      cx="55"
      cy="308"
      r="10"
      fill="#6a4020"
      stroke="#3a2818"
      strokeWidth="2"
    />

    {/* --- Right upper arm (raised ~45deg) --- */}
    <line
      x1="348"
      y1="240"
      x2="420"
      y2="192"
      stroke="#3a2818"
      strokeWidth="14"
      strokeLinecap="round"
    />
    {/* Right upper arm joint */}
    <circle
      cx="420"
      cy="192"
      r="10"
      fill="#6a4020"
      stroke="#3a2818"
      strokeWidth="2"
    />

    {/* --- Right lower arm (horizontal, slightly down) --- */}
    <line
      x1="348"
      y1="300"
      x2="445"
      y2="308"
      stroke="#3a2818"
      strokeWidth="14"
      strokeLinecap="round"
    />
    {/* Right lower arm joint */}
    <circle
      cx="445"
      cy="308"
      r="10"
      fill="#6a4020"
      stroke="#3a2818"
      strokeWidth="2"
    />

    {/* === GLOVES === */}
    {/* Left upper glove */}
    <circle
      cx="72"
      cy="186"
      r="16"
      fill="#efefef"
      stroke="#172b4d"
      strokeWidth="2"
    />
    <g stroke="#efefef" strokeWidth="4.5" strokeLinecap="round">
      <line x1="56" y1="174" x2="44" y2="166" />
      <line x1="56" y1="182" x2="40" y2="180" />
      <line x1="56" y1="190" x2="40" y2="193" />
      <line x1="58" y1="197" x2="46" y2="207" />
    </g>

    {/* Left lower glove */}
    <circle
      cx="45"
      cy="302"
      r="16"
      fill="#efefef"
      stroke="#172b4d"
      strokeWidth="2"
    />
    <g stroke="#efefef" strokeWidth="4.5" strokeLinecap="round">
      <line x1="29" y1="290" x2="16" y2="282" />
      <line x1="29" y1="298" x2="13" y2="298" />
      <line x1="29" y1="306" x2="14" y2="311" />
      <line x1="31" y1="313" x2="20" y2="323" />
    </g>

    {/* Right upper glove */}
    <circle
      cx="428"
      cy="186"
      r="16"
      fill="#efefef"
      stroke="#172b4d"
      strokeWidth="2"
    />
    <g stroke="#efefef" strokeWidth="4.5" strokeLinecap="round">
      <line x1="444" y1="174" x2="456" y2="166" />
      <line x1="444" y1="182" x2="460" y2="180" />
      <line x1="444" y1="190" x2="460" y2="193" />
      <line x1="442" y1="197" x2="454" y2="207" />
    </g>

    {/* Right lower glove */}
    <circle
      cx="455"
      cy="302"
      r="16"
      fill="#efefef"
      stroke="#172b4d"
      strokeWidth="2"
    />
    <g stroke="#efefef" strokeWidth="4.5" strokeLinecap="round">
      <line x1="471" y1="290" x2="484" y2="282" />
      <line x1="471" y1="298" x2="487" y2="298" />
      <line x1="471" y1="306" x2="486" y2="311" />
      <line x1="469" y1="313" x2="480" y2="323" />
    </g>

    {/* === LEGS & BOOTS === */}
    {/* Left leg */}
    <rect
      x="186"
      y="368"
      width="34"
      height="50"
      fill="#3a2818"
      stroke="#172b4d"
      strokeWidth="2"
      rx="5"
    />
    {/* Left boot */}
    <rect
      x="172"
      y="412"
      width="58"
      height="26"
      fill="#2a1a08"
      stroke="#172b4d"
      strokeWidth="2"
      rx="7"
    />
    {/* Left boot toe cap */}
    <ellipse cx="214" cy="438" rx="26" ry="8" fill="#1a0e04" />
    {/* Left boot highlight */}
    <rect
      x="175"
      y="414"
      width="50"
      height="8"
      fill="#3a2818"
      rx="5"
      opacity="0.5"
    />

    {/* Right leg */}
    <rect
      x="280"
      y="368"
      width="34"
      height="50"
      fill="#3a2818"
      stroke="#172b4d"
      strokeWidth="2"
      rx="5"
    />
    {/* Right boot */}
    <rect
      x="270"
      y="412"
      width="58"
      height="26"
      fill="#2a1a08"
      stroke="#172b4d"
      strokeWidth="2"
      rx="7"
    />
    {/* Right boot toe cap */}
    <ellipse cx="312" cy="438" rx="26" ry="8" fill="#1a0e04" />
    {/* Right boot highlight */}
    <rect
      x="273"
      y="414"
      width="50"
      height="8"
      fill="#3a2818"
      rx="5"
      opacity="0.5"
    />
  </svg>
);

export const Error404 = ({
  message = "Oops! Page Not Found",
  description = "Looks like this page went on a magical adventure and got lost.",
  href = "/",
}: Props) => {
  return (
    <div
      className="flex min-h-screen items-center justify-center px-4"
      style={{ backgroundColor: BACKGROUND_COLOR }}
    >
      <div className="flex flex-col items-center gap-8 text-center">
        {/* Illustration */}
        <div className="w-full max-w-sm rounded-lg">
          <WizardRobotIllustration />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4">
          {/* 404 Number */}
          <h1
            className="text-6xl font-bold leading-none"
            style={{ color: ERROR_CODE_COLOR }}
          >
            404
          </h1>

          {/* Main Message */}
          <h2
            className="text-3xl font-bold"
            style={{ color: ERROR_MESSAGE_COLOR }}
          >
            {message}
          </h2>

          {/* Description */}
          <p className="max-w-md text-lg leading-relaxed text-font-subtle">
            {description}
          </p>
        </div>

        {/* Button */}
        {/* Using semantic <a> tag for navigation allows proper browser history and accessibility */}
        <div className="pt-4">
          <a href={href} className="inline-block">
            <Button color="primary" variant="contained" size="lg">
              Go Back Home
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

// Props for customizing the 404 error page
interface Props {
  /** Custom error message displayed as heading **/
  message?: string;
  /** Additional description text below the message **/
  description?: string;
  /** URL for the "Go Back Home" button link **/
  href?: string;
}
