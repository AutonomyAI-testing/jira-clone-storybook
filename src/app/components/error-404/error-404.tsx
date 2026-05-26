import { Button } from "../button";

/**
 * Wizard robot SVG illustration component for the 404 page.
 * Features a stylized wizard character with a pointed hat, magical elements,
 * and a robot screen head.
 */
const WizardRobotSVG = (): JSX.Element => (
  <svg
    width="340"
    height="480"
    viewBox="0 0 340 480"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-lg"
  >
    {/* Background circle with parchment */}
    <circle
      cx="170"
      cy="270"
      r="200"
      fill="#F5E6D3"
      stroke="#7B3F3F"
      strokeWidth="4"
    />

    {/* Inner square frame (Vitruvian style) */}
    <rect
      x="55"
      y="115"
      width="230"
      height="280"
      fill="none"
      stroke="#7B3F3F"
      strokeWidth="1.5"
    />

    {/* Wizard Hat - Tall Pointed Cone */}
    <g>
      {/* Hat cone - tall triangle */}
      <path
        d="M 60 215 L 170 5 L 280 215 Z"
        fill="#3A5BA8"
        stroke="#1E3A7A"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Hat brim - wide ellipse */}
      <ellipse
        cx="170"
        cy="215"
        rx="130"
        ry="40"
        fill="#3A5BA8"
        stroke="#1E3A7A"
        strokeWidth="3"
      />

      {/* Hat brim highlight for 3D effect */}
      <ellipse
        cx="170"
        cy="210"
        rx="100"
        ry="18"
        fill="#4A6DC0"
        opacity="0.5"
      />

      {/* Stars on hat - 5-pointed star polygons */}
      {/* Star 1 - (110, 100) with R=10 */}
      <path
        d="M 110,90 L 112.9,98.1 L 121.5,98.1 L 114.8,103.1 L 117.3,111.5 L 110,106.8 L 102.7,111.5 L 105.2,103.1 L 98.5,98.1 L 107.1,98.1 Z"
        fill="#FFD700"
      />

      {/* Star 2 - (170, 50) with R=10 */}
      <path
        d="M 170,40 L 172.9,48.1 L 181.5,48.1 L 174.8,53.1 L 177.3,61.5 L 170,56.8 L 162.7,61.5 L 165.2,53.1 L 158.5,48.1 L 167.1,48.1 Z"
        fill="#FFD700"
      />

      {/* Star 3 - (230, 95) with R=10 */}
      <path
        d="M 230,85 L 232.9,93.1 L 241.5,93.1 L 234.8,98.1 L 237.3,106.5 L 230,101.8 L 222.7,106.5 L 225.2,98.1 L 218.5,93.1 L 227.1,93.1 Z"
        fill="#FFD700"
      />

      {/* Star 4 - (95, 165) with R=10 */}
      <path
        d="M 95,155 L 97.9,163.1 L 106.5,163.1 L 99.8,168.1 L 102.3,176.5 L 95,171.8 L 87.7,176.5 L 90.2,168.1 L 83.5,163.1 L 92.1,163.1 Z"
        fill="#FFD700"
      />

      {/* Star 5 - (245, 160) with R=10 */}
      <path
        d="M 245,150 L 247.9,158.1 L 256.5,158.1 L 249.8,163.1 L 252.3,171.5 L 245,166.8 L 237.7,171.5 L 240.2,163.1 L 233.5,158.1 L 242.1,158.1 Z"
        fill="#FFD700"
      />

      {/* Crescent moons using two-circle technique */}
      {/* Moon 1 - (145, 135) */}
      <circle cx="145" cy="135" r="10" fill="#FFD700" />
      <circle cx="137" cy="135" r="8" fill="#F5E6D3" />

      {/* Moon 2 - (200, 125) */}
      <circle cx="200" cy="125" r="10" fill="#FFD700" />
      <circle cx="192" cy="125" r="8" fill="#F5E6D3" />

      {/* Moon 3 - (158, 175) */}
      <circle cx="158" cy="175" r="10" fill="#FFD700" />
      <circle cx="150" cy="175" r="8" fill="#F5E6D3" />
    </g>

    {/* Robot Head */}
    <g>
      {/* Head body container */}
      <rect
        x="115"
        y="218"
        width="110"
        height="87"
        fill="#A0714F"
        stroke="#6B4C35"
        strokeWidth="3"
        rx="5"
      />

      {/* Monitor screen bezel */}
      <rect
        x="121"
        y="224"
        width="98"
        height="72"
        fill="#5B8C3A"
        stroke="#4A7A2E"
        strokeWidth="2"
        rx="4"
      />

      {/* Monitor screen inner - dark green base */}
      <rect x="127" y="230" width="86" height="60" fill="#5A8F3A" rx="3" />

      {/* Screen blob 1 - organic light green shape */}
      <ellipse
        cx="150"
        cy="250"
        rx="20"
        ry="18"
        fill="#95C944"
        opacity="0.85"
      />

      {/* Screen blob 2 - organic light green shape */}
      <ellipse cx="185" cy="265" rx="25" ry="16" fill="#95C944" opacity="0.8" />

      {/* Screen glass highlight - bright white */}
      <ellipse cx="155" cy="245" rx="18" ry="22" fill="white" opacity="0.55" />
    </g>

    {/* Robot Torso */}
    <g>
      {/* Main torso body */}
      <rect
        x="130"
        y="305"
        width="80"
        height="65"
        fill="#A0714F"
        stroke="#6B4C35"
        strokeWidth="3"
      />

      {/* Chest panel detail */}
      <rect
        x="140"
        y="315"
        width="60"
        height="45"
        fill="#8B5A3C"
        stroke="#6B4C35"
        strokeWidth="2"
      />

      {/* Chest button */}
      <circle
        cx="170"
        cy="338"
        r="7"
        fill="#FFD700"
        stroke="#DAA520"
        strokeWidth="1"
      />
    </g>

    {/* Upper Left Arm */}
    <g transform="rotate(25, 130, 230)" opacity="0.95">
      {/* Upper arm segment */}
      <rect
        x="75"
        y="230"
        width="55"
        height="20"
        fill="#2B2B2B"
        stroke="#1A1A1A"
        strokeWidth="2"
        rx="4"
      />

      {/* Forearm highlight */}
      <line
        x1="23"
        y1="231"
        x2="71"
        y2="231"
        stroke="#555"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Elbow joint */}
      <circle
        cx="75"
        cy="240"
        r="9"
        fill="#3B3B3B"
        stroke="#1A1A1A"
        strokeWidth="1"
      />

      {/* Forearm segment */}
      <rect
        x="18"
        y="228"
        width="58"
        height="18"
        fill="#2B2B2B"
        stroke="#1A1A1A"
        strokeWidth="2"
        rx="4"
      />

      {/* Hand fingers */}
      <ellipse
        cx="18"
        cy="240"
        rx="4"
        ry="8"
        fill="#E8D7C3"
        stroke="#1A2340"
        strokeWidth="1"
      />
      <ellipse
        cx="10"
        cy="232"
        rx="3"
        ry="6"
        fill="#E8D7C3"
        stroke="#1A2340"
        strokeWidth="1"
      />
      <ellipse
        cx="8"
        cy="248"
        rx="3"
        ry="6"
        fill="#E8D7C3"
        stroke="#1A2340"
        strokeWidth="1"
      />
    </g>

    {/* Upper Right Arm */}
    <g transform="rotate(-25, 210, 230)" opacity="0.95">
      {/* Upper arm segment */}
      <rect
        x="210"
        y="230"
        width="55"
        height="20"
        fill="#2B2B2B"
        stroke="#1A1A1A"
        strokeWidth="2"
        rx="4"
      />

      {/* Forearm highlight */}
      <line
        x1="269"
        y1="231"
        x2="317"
        y2="231"
        stroke="#555"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Elbow joint */}
      <circle
        cx="265"
        cy="240"
        r="9"
        fill="#3B3B3B"
        stroke="#1A1A1A"
        strokeWidth="1"
      />

      {/* Forearm segment */}
      <rect
        x="264"
        y="228"
        width="58"
        height="18"
        fill="#2B2B2B"
        stroke="#1A1A1A"
        strokeWidth="2"
        rx="4"
      />

      {/* Hand fingers */}
      <ellipse
        cx="322"
        cy="240"
        rx="4"
        ry="8"
        fill="#E8D7C3"
        stroke="#1A2340"
        strokeWidth="1"
      />
      <ellipse
        cx="330"
        cy="232"
        rx="3"
        ry="6"
        fill="#E8D7C3"
        stroke="#1A2340"
        strokeWidth="1"
      />
      <ellipse
        cx="332"
        cy="248"
        rx="3"
        ry="6"
        fill="#E8D7C3"
        stroke="#1A2340"
        strokeWidth="1"
      />
    </g>

    {/* Lower Left Arm */}
    <g opacity="0.95">
      {/* Upper arm segment */}
      <rect
        x="75"
        y="295"
        width="55"
        height="20"
        fill="#2B2B2B"
        stroke="#1A1A1A"
        strokeWidth="2"
        rx="4"
      />

      {/* Forearm highlight */}
      <line
        x1="23"
        y1="296"
        x2="71"
        y2="296"
        stroke="#555"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Elbow joint */}
      <circle
        cx="75"
        cy="305"
        r="9"
        fill="#3B3B3B"
        stroke="#1A1A1A"
        strokeWidth="1"
      />

      {/* Forearm segment */}
      <rect
        x="18"
        y="293"
        width="58"
        height="18"
        fill="#2B2B2B"
        stroke="#1A1A1A"
        strokeWidth="2"
        rx="4"
      />

      {/* Hand fingers */}
      <ellipse
        cx="18"
        cy="305"
        rx="4"
        ry="8"
        fill="#E8D7C3"
        stroke="#1A2340"
        strokeWidth="1"
      />
      <ellipse
        cx="10"
        cy="297"
        rx="3"
        ry="6"
        fill="#E8D7C3"
        stroke="#1A2340"
        strokeWidth="1"
      />
      <ellipse
        cx="8"
        cy="313"
        rx="3"
        ry="6"
        fill="#E8D7C3"
        stroke="#1A2340"
        strokeWidth="1"
      />
    </g>

    {/* Lower Right Arm */}
    <g opacity="0.95">
      {/* Upper arm segment */}
      <rect
        x="210"
        y="295"
        width="55"
        height="20"
        fill="#2B2B2B"
        stroke="#1A1A1A"
        strokeWidth="2"
        rx="4"
      />

      {/* Forearm highlight */}
      <line
        x1="269"
        y1="296"
        x2="317"
        y2="296"
        stroke="#555"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Elbow joint */}
      <circle
        cx="265"
        cy="305"
        r="9"
        fill="#3B3B3B"
        stroke="#1A1A1A"
        strokeWidth="1"
      />

      {/* Forearm segment */}
      <rect
        x="264"
        y="293"
        width="58"
        height="18"
        fill="#2B2B2B"
        stroke="#1A1A1A"
        strokeWidth="2"
        rx="4"
      />

      {/* Hand fingers */}
      <ellipse
        cx="322"
        cy="305"
        rx="4"
        ry="8"
        fill="#E8D7C3"
        stroke="#1A2340"
        strokeWidth="1"
      />
      <ellipse
        cx="330"
        cy="297"
        rx="3"
        ry="6"
        fill="#E8D7C3"
        stroke="#1A2340"
        strokeWidth="1"
      />
      <ellipse
        cx="332"
        cy="313"
        rx="3"
        ry="6"
        fill="#E8D7C3"
        stroke="#1A2340"
        strokeWidth="1"
      />
    </g>

    {/* Left Leg */}
    <g>
      {/* Upper leg */}
      <rect
        x="140"
        y="370"
        width="30"
        height="55"
        fill="#8B5A3C"
        stroke="#6B4C35"
        strokeWidth="2"
      />

      {/* Knee joint */}
      <circle
        cx="155"
        cy="425"
        r="8"
        fill="#7A4A2C"
        stroke="#6B4C35"
        strokeWidth="1"
      />

      {/* Lower leg */}
      <rect
        x="140"
        y="423"
        width="30"
        height="27"
        fill="#7A4A2C"
        stroke="#6B4C35"
        strokeWidth="2"
      />

      {/* Foot */}
      <rect
        x="130"
        y="447"
        width="48"
        height="16"
        fill="#654321"
        stroke="#3D2817"
        strokeWidth="2"
        rx="3"
      />
    </g>

    {/* Right Leg */}
    <g>
      {/* Upper leg */}
      <rect
        x="170"
        y="370"
        width="30"
        height="55"
        fill="#8B5A3C"
        stroke="#6B4C35"
        strokeWidth="2"
      />

      {/* Knee joint */}
      <circle
        cx="185"
        cy="425"
        r="8"
        fill="#7A4A2C"
        stroke="#6B4C35"
        strokeWidth="1"
      />

      {/* Lower leg */}
      <rect
        x="170"
        y="423"
        width="30"
        height="27"
        fill="#7A4A2C"
        stroke="#6B4C35"
        strokeWidth="2"
      />

      {/* Foot */}
      <rect
        x="162"
        y="447"
        width="48"
        height="16"
        fill="#654321"
        stroke="#3D2817"
        strokeWidth="2"
        rx="3"
      />
    </g>
  </svg>
);

export const Error404 = ({ href = "/", message }: Props): JSX.Element => {
  const handleHomeClick = (): void => {
    window.location.href = href;
  };

  return (
    <div className="bg-background flex min-h-screen items-center justify-center p-4">
      <div className="flex flex-col items-center text-center">
        {/* 404 Heading */}
        <h1
          className="mb-8 font-primary-black text-9xl text-font"
          style={{
            color: "red",
          }}
        >
          404
        </h1>

        {/* Wizard Robot SVG Illustration */}
        <div className="mb-8 flex justify-center">
          <WizardRobotSVG />
        </div>

        {/* Main Heading */}
        <h2 className="mb-4 font-primary-bold text-4xl text-font">
          Oops! Page Not Found
        </h2>

        {/* Description Text */}
        <p className="mb-8 max-w-md text-lg text-font-subtle">
          {message ||
            "Looks like this wizard couldn't find the page you were looking for. Let's get you back on track."}
        </p>

        {/* Go Home Button */}
        <Button
          color="primary"
          variant="contained"
          size="lg"
          onClick={handleHomeClick}
        >
          Go Home
        </Button>
      </div>
    </div>
  );
};

interface Props {
  href?: string;
  message?: string;
}
