/**
 * WizardRobot Component
 * 
 * An SVG-based illustration of a whimsical wizard robot with a pointed hat,
 * stars, and crescent moons. Used in the 404 error page to provide a friendly,
 * engaging visual that softens the experience of a page-not-found error.
 */
export const WizardRobot = ({ width = 400, height = 340 }: Props): JSX.Element => {
  return (
    <svg
      viewBox="0 0 700 580"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto drop-shadow-lg"
      overflow="visible"
    >
      <defs>
        {/* 
          Gradients for dimensional shading
          Each gradient is tuned for different body parts (hat, body, screen, arms, legs, head)
          to create a cohesive 3D appearance and visual depth.
        */}
        <linearGradient id="hatGradient" x1="0%" y1="0%" x2="20%" y2="100%">
          <stop offset="0%" stopColor="#4B6FA0" stopOpacity="1" />
          <stop offset="50%" stopColor="#2C4A70" stopOpacity="1" />
          <stop offset="100%" stopColor="#1E3A5F" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="10%" y2="100%">
          <stop offset="0%" stopColor="#B89A7A" stopOpacity="1" />
          <stop offset="50%" stopColor="#9D8B77" stopOpacity="1" />
          <stop offset="100%" stopColor="#7A6248" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="screenGradient" x1="0%" y1="0%" x2="20%" y2="100%">
          <stop offset="0%" stopColor="#7AE870" stopOpacity="1" />
          <stop offset="40%" stopColor="#5AE848" stopOpacity="1" />
          <stop offset="100%" stopColor="#3A9A30" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="armGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6A6A6A" stopOpacity="1" />
          <stop offset="100%" stopColor="#3A3A3A" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="legGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7A5A3A" stopOpacity="1" />
          <stop offset="100%" stopColor="#4A3A20" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="headGradient" x1="0%" y1="0%" x2="10%" y2="100%">
          <stop offset="0%" stopColor="#B8855A" stopOpacity="1" />
          <stop offset="100%" stopColor="#8A6040" stopOpacity="1" />
        </linearGradient>
        <radialGradient id="hatBrimGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3D6090" stopOpacity="1" />
          <stop offset="100%" stopColor="#1E3A5F" stopOpacity="1" />
        </radialGradient>
      </defs>

      {/* 
        Background: Vitruvian circle and square guidelines
        Subtle geometric guides that create a sense of proportion and balance,
        drawing inspiration from classical illustration techniques.
      */}
      <g opacity="0.45" stroke="#8B6A50" strokeWidth="1.8" fill="none">
        {/* Outer circle (Vitruvian circle) */}
        <circle cx="350" cy="310" r="240" />
        {/* Inner square (Vitruvian square) */}
        <rect x="118" y="130" width="464" height="355" />
        {/* Horizontal center guide */}
        <line x1="60" y1="310" x2="640" y2="310" strokeWidth="1.2" />
        {/* Vertical center guide */}
        <line x1="350" y1="70" x2="350" y2="565" strokeWidth="1.2" />
      </g>

      {/* 
        Left arm with shoulder joint, upper/lower segments, and white glove with fingers
        The gesture appears welcoming and friendly.
      */}
      <g id="left-arm" stroke="#222222" strokeWidth="2">
        {/* Shoulder joint */}
        <circle cx="210" cy="295" r="16" fill="#5A5A5A" stroke="#222222" strokeWidth="2.5" />
        <circle cx="210" cy="295" r="9" fill="#888888" />

        {/* Upper arm segment */}
        <rect x="65" y="281" width="155" height="28" rx="10" fill="url(#armGradient)" />
        {/* Upper arm highlight */}
        <rect x="65" y="283" width="155" height="8" rx="5" fill="#7A7A7A" opacity="0.5" />

        {/* Elbow joint */}
        <circle cx="80" cy="295" r="14" fill="#5A5A5A" stroke="#222222" strokeWidth="2" />
        <circle cx="80" cy="295" r="8" fill="#888888" />

        {/* Lower arm segment */}
        <rect x="22" y="284" width="65" height="24" rx="9" fill="#525252" stroke="#222222" strokeWidth="2" />
        {/* Lower arm highlight */}
        <rect x="22" y="286" width="65" height="7" rx="4" fill="#7A7A7A" opacity="0.4" />

        {/* Wrist joint / glove cuff */}
        <circle cx="22" cy="296" r="13" fill="#5A5A5A" stroke="#222222" strokeWidth="2" />

        {/* Left white glove */}
        <g id="left-glove" stroke="#3A3A3A" strokeWidth="2">
          {/* Glove wrist cuff */}
          <rect x="-18" y="285" width="30" height="22" rx="5" fill="#E8E8E8" />
          {/* Cuff band */}
          <rect x="-18" y="299" width="30" height="8" rx="3" fill="white" />

          {/* Palm */}
          <ellipse cx="-20" cy="288" rx="28" ry="20" fill="white" />

          {/* Finger 1 - index (top) */}
          <rect x="-38" y="258" width="14" height="36" rx="7" fill="white" stroke="#3A3A3A" strokeWidth="1.5" />
          {/* Finger 2 - middle */}
          <rect x="-22" y="254" width="14" height="40" rx="7" fill="white" stroke="#3A3A3A" strokeWidth="1.5" />
          {/* Finger 3 - ring */}
          <rect x="-6" y="257" width="13" height="37" rx="6.5" fill="white" stroke="#3A3A3A" strokeWidth="1.5" />
          {/* Thumb */}
          <ellipse cx="-45" cy="282" rx="10" ry="15" fill="white" stroke="#3A3A3A" strokeWidth="1.5" transform="rotate(-20 -45 282)" />
        </g>
      </g>

      {/* 
        Right arm with shoulder joint, upper/lower segments, and white glove with fingers
        Mirrors the left arm to create symmetry.
      */}
      <g id="right-arm" stroke="#222222" strokeWidth="2">
        {/* Shoulder joint */}
        <circle cx="490" cy="295" r="16" fill="#5A5A5A" stroke="#222222" strokeWidth="2.5" />
        <circle cx="490" cy="295" r="9" fill="#888888" />

        {/* Upper arm segment */}
        <rect x="480" y="281" width="155" height="28" rx="10" fill="url(#armGradient)" />
        {/* Upper arm highlight */}
        <rect x="480" y="283" width="155" height="8" rx="5" fill="#7A7A7A" opacity="0.5" />

        {/* Elbow joint */}
        <circle cx="620" cy="295" r="14" fill="#5A5A5A" stroke="#222222" strokeWidth="2" />
        <circle cx="620" cy="295" r="8" fill="#888888" />

        {/* Lower arm segment */}
        <rect x="613" y="284" width="65" height="24" rx="9" fill="#525252" stroke="#222222" strokeWidth="2" />
        {/* Lower arm highlight */}
        <rect x="613" y="286" width="65" height="7" rx="4" fill="#7A7A7A" opacity="0.4" />

        {/* Wrist joint / glove cuff */}
        <circle cx="678" cy="296" r="13" fill="#5A5A5A" stroke="#222222" strokeWidth="2" />

        {/* Right white glove */}
        <g id="right-glove" stroke="#3A3A3A" strokeWidth="2">
          {/* Glove wrist cuff */}
          <rect x="688" y="285" width="30" height="22" rx="5" fill="#E8E8E8" />
          {/* Cuff band */}
          <rect x="688" y="299" width="30" height="8" rx="3" fill="white" />

          {/* Palm */}
          <ellipse cx="720" cy="288" rx="28" ry="20" fill="white" />

          {/* Finger 1 - index (top) */}
          <rect x="724" y="258" width="14" height="36" rx="7" fill="white" stroke="#3A3A3A" strokeWidth="1.5" />
          {/* Finger 2 - middle */}
          <rect x="708" y="254" width="14" height="40" rx="7" fill="white" stroke="#3A3A3A" strokeWidth="1.5" />
          {/* Finger 3 - ring */}
          <rect x="693" y="257" width="13" height="37" rx="6.5" fill="white" stroke="#3A3A3A" strokeWidth="1.5" />
          {/* Thumb */}
          <ellipse cx="745" cy="282" rx="10" ry="15" fill="white" stroke="#3A3A3A" strokeWidth="1.5" transform="rotate(20 745 282)" />
        </g>
      </g>

      {/* 
        Robot body: Main torso with panel divisions and rivets
        Creates a mechanical, steampunk-inspired aesthetic.
      */}
      <g stroke="#2A2A2A" strokeWidth="2.5">
        {/* Main torso */}
        <rect x="260" y="295" width="180" height="185" rx="14" fill="url(#bodyGradient)" />
        {/* Left edge shadow */}
        <rect x="260" y="295" width="22" height="185" rx="12" fill="#6A5030" opacity="0.55" />
        {/* Right edge shadow */}
        <rect x="418" y="295" width="22" height="185" rx="12" fill="#6A5030" opacity="0.55" />
        {/* Top highlight */}
        <rect x="260" y="295" width="180" height="20" rx="12" fill="#C8A078" opacity="0.45" />
        {/* Panel divisions */}
        <line x1="262" y1="335" x2="438" y2="335" stroke="#5A4030" strokeWidth="2" opacity="0.5" />
        <line x1="262" y1="375" x2="438" y2="375" stroke="#5A4030" strokeWidth="2" opacity="0.4" />
      </g>

      {/* Body rivets - left column */}
      <circle cx="275" cy="315" r="4" fill="#B8956A" stroke="#2A2A2A" strokeWidth="1.2" />
      <circle cx="275" cy="355" r="4" fill="#B8956A" stroke="#2A2A2A" strokeWidth="1.2" />
      <circle cx="275" cy="395" r="4" fill="#B8956A" stroke="#2A2A2A" strokeWidth="1.2" />
      <circle cx="275" cy="435" r="4" fill="#B8956A" stroke="#2A2A2A" strokeWidth="1.2" />
      <circle cx="275" cy="465" r="4" fill="#B8956A" stroke="#2A2A2A" strokeWidth="1.2" />

      {/* Body rivets - right column */}
      <circle cx="425" cy="315" r="4" fill="#B8956A" stroke="#2A2A2A" strokeWidth="1.2" />
      <circle cx="425" cy="355" r="4" fill="#B8956A" stroke="#2A2A2A" strokeWidth="1.2" />
      <circle cx="425" cy="395" r="4" fill="#B8956A" stroke="#2A2A2A" strokeWidth="1.2" />
      <circle cx="425" cy="435" r="4" fill="#B8956A" stroke="#2A2A2A" strokeWidth="1.2" />
      <circle cx="425" cy="465" r="4" fill="#B8956A" stroke="#2A2A2A" strokeWidth="1.2" />

      {/* 
        TV/Monitor head: Frame with corner screws and neck connector
        References retro technology and adds personality to the robot.
      */}
      <g stroke="#2A2A2A" strokeWidth="2.5">
        {/* Outer frame */}
        <rect x="240" y="120" width="220" height="170" rx="16" fill="url(#headGradient)" />
        {/* Neck connector */}
        <rect x="318" y="290" width="64" height="18" rx="4" fill="#9A7050" stroke="#2A2A2A" strokeWidth="2" />
        {/* Top shadow band */}
        <rect x="240" y="120" width="220" height="28" rx="14" fill="#8A6040" opacity="0.5" />
        {/* Bottom shadow band */}
        <rect x="240" y="265" width="220" height="22" rx="8" fill="#7A5030" opacity="0.4" />
        {/* Corner screws */}
        <circle cx="258" cy="138" r="5" fill="#9A7550" stroke="#2A2A2A" strokeWidth="1.5" />
        <circle cx="442" cy="138" r="5" fill="#9A7550" stroke="#2A2A2A" strokeWidth="1.5" />
        <circle cx="258" cy="270" r="5" fill="#9A7550" stroke="#2A2A2A" strokeWidth="1.5" />
        <circle cx="442" cy="270" r="5" fill="#9A7550" stroke="#2A2A2A" strokeWidth="1.5" />
      </g>

      {/* TV screen */}
      <g stroke="#2A2A2A" strokeWidth="1.5">
        <rect x="268" y="147" width="164" height="118" rx="8" fill="url(#screenGradient)" />
        {/* Screen top dark band */}
        <rect x="268" y="147" width="164" height="20" rx="6" fill="#2A8A3A" opacity="0.5" />
        {/* Screen bottom dark band */}
        <rect x="268" y="248" width="164" height="17" rx="4" fill="#2A8A3A" opacity="0.35" />
      </g>

      {/* Screen highlights / glass reflection */}
      <ellipse cx="300" cy="168" rx="50" ry="22" fill="white" opacity="0.5" />
      <ellipse cx="390" cy="240" rx="28" ry="18" fill="#AAFFCC" opacity="0.4" />
      <circle cx="410" cy="160" r="10" fill="white" opacity="0.35" />
      {/* Diagonal highlight streak */}
      <path d="M 275 155 Q 310 148 330 175 Q 310 182 275 165 Z" fill="white" opacity="0.35" />

      {/* 
        Chest panel with golden button: The focal point of the torso
        Adds visual interest and emphasizes the mechanical nature.
      */}
      <g stroke="#2A2A2A" strokeWidth="2">
        <rect x="278" y="358" width="144" height="85" rx="10" fill="#A87A50" />
        {/* Panel top highlight */}
        <rect x="278" y="358" width="144" height="18" rx="8" fill="#C89A70" opacity="0.45" />
        {/* Panel inner shadow */}
        <rect x="285" y="372" width="130" height="65" rx="7" fill="#8A6038" />
        {/* Panel highlight stripe */}
        <rect x="285" y="372" width="130" height="12" rx="5" fill="#B8855A" opacity="0.4" />
      </g>

      {/* Golden circular button */}
      <g stroke="#2A2A2A" strokeWidth="1.8">
        <circle cx="350" cy="408" r="18" fill="#D4A030" />
        <circle cx="350" cy="408" r="12" fill="#E8C040" />
        <circle cx="346" cy="404" r="6" fill="#FFFAAA" opacity="0.7" />
        <circle cx="350" cy="408" r="3" fill="#B88020" />
      </g>

      {/* 
        Legs: Two sturdy supports with boots, providing visual grounding and balance
        Rivets add mechanical detail.
      */}

      {/* Left leg connector */}
      <rect x="290" y="478" width="38" height="22" rx="5" fill="#8A6A40" stroke="#2A2A2A" strokeWidth="2" />

      {/* Left leg */}
      <g id="left-leg" stroke="#2A2A2A" strokeWidth="2">
        <rect x="278" y="495" width="50" height="55" rx="7" fill="url(#legGradient)" />
        {/* Leg highlight */}
        <rect x="278" y="495" width="50" height="14" rx="6" fill="#9A7A4A" opacity="0.5" />
        {/* Boot foot */}
        <rect x="264" y="540" width="76" height="20" rx="5" fill="#3A2A10" stroke="#2A2A2A" strokeWidth="2" />
        {/* Boot toe cap */}
        <rect x="264" y="540" width="30" height="20" rx="5" fill="#2A1A08" opacity="0.6" />
        {/* Knee rivet */}
        <circle cx="303" cy="510" r="4" fill="#A88050" stroke="#2A2A2A" strokeWidth="1" />
        <circle cx="303" cy="528" r="4" fill="#A88050" stroke="#2A2A2A" strokeWidth="1" />
      </g>

      {/* Right leg connector */}
      <rect x="372" y="478" width="38" height="22" rx="5" fill="#8A6A40" stroke="#2A2A2A" strokeWidth="2" />

      {/* Right leg */}
      <g id="right-leg" stroke="#2A2A2A" strokeWidth="2">
        <rect x="372" y="495" width="50" height="55" rx="7" fill="url(#legGradient)" />
        {/* Leg highlight */}
        <rect x="372" y="495" width="50" height="14" rx="6" fill="#9A7A4A" opacity="0.5" />
        {/* Boot foot */}
        <rect x="358" y="540" width="76" height="20" rx="5" fill="#3A2A10" stroke="#2A2A2A" strokeWidth="2" />
        {/* Boot toe cap */}
        <rect x="406" y="540" width="28" height="20" rx="5" fill="#2A1A08" opacity="0.6" />
        {/* Knee rivet */}
        <circle cx="397" cy="510" r="4" fill="#A88050" stroke="#2A2A2A" strokeWidth="1" />
        <circle cx="397" cy="528" r="4" fill="#A88050" stroke="#2A2A2A" strokeWidth="1" />
      </g>

      {/* 
        Wizard hat: Tall, pointed cone with wide brim and tip curl
        The primary distinguishing feature that signals "wizard" identity and whimsy.
      */}
      <g id="wizard-hat" stroke="#1A3050" strokeWidth="2.5">
        {/* Wide brim - ellipse */}
        <ellipse cx="350" cy="162" rx="185" ry="48" fill="url(#hatBrimGradient)" />
        {/* Brim bottom shadow */}
        <path d="M 165 162 Q 165 145 350 140 Q 535 145 535 162" fill="#152840" opacity="0.7" />
        {/* Brim top highlight streak */}
        <path d="M 175 152 Q 280 145 350 147 Q 420 145 525 152 Q 420 158 350 156 Q 280 158 175 152 Z" fill="#4A78B0" opacity="0.3" />

        {/* Hat cone - tall and pointed with slight left lean */}
        <path d="M 205 162 L 360 15 L 495 162 Z" fill="url(#hatGradient)" />
        {/* Cone right side shadow for depth */}
        <path d="M 360 15 L 495 162 L 430 156 Z" fill="#152840" opacity="0.6" />
        {/* Cone left highlight */}
        <path d="M 360 15 L 220 160 L 260 158 Z" fill="#5A82B8" opacity="0.4" />
        {/* Cone center crease line */}
        <path d="M 360 15 L 360 162" stroke="#1A3050" strokeWidth="1" opacity="0.4" />

        {/* Hat tip curl */}
        <path d="M 360 15 Q 380 -8 400 10 Q 390 32 360 15" fill="#2C508A" stroke="#1A3050" strokeWidth="2" />
        {/* Tip curl highlight */}
        <path d="M 362 15 Q 378 -4 392 8" stroke="#4A78B0" strokeWidth="2" fill="none" opacity="0.5" />
      </g>

      {/* 
        Stars on hat: 12 stars of varying sizes scattered across the hat
        Creates a magical, mystical atmosphere.
      */}
      {/* Star 1 - large near tip */}
      <g transform="translate(360, 45)">
        <path d="M 0 -16 L 4.5 -4 L 17 -2 L 7 8 L 9 20 L 0 14 L -9 20 L -7 8 L -17 -2 L -4.5 -4 Z"
          fill="#FDD835" stroke="#1A3050" strokeWidth="1.2" />
      </g>
      {/* Star 2 - upper right on cone */}
      <g transform="translate(430, 70)">
        <path d="M 0 -12 L 3.5 -3 L 12 -1 L 5 6 L 7 16 L 0 11 L -7 16 L -5 6 L -12 -1 L -3.5 -3 Z"
          fill="#FDD835" stroke="#1A3050" strokeWidth="1" />
      </g>
      {/* Star 3 - upper left on cone */}
      <g transform="translate(282, 72)">
        <path d="M 0 -12 L 3.5 -3 L 12 -1 L 5 6 L 7 16 L 0 11 L -7 16 L -5 6 L -12 -1 L -3.5 -3 Z"
          fill="#FDD835" stroke="#1A3050" strokeWidth="1" />
      </g>
      {/* Star 4 - right mid cone */}
      <g transform="translate(462, 108)">
        <path d="M 0 -10 L 3 -2 L 10 0 L 4 5 L 5.5 14 L 0 9 L -5.5 14 L -4 5 L -10 0 L -3 -2 Z"
          fill="#FDD835" stroke="#1A3050" strokeWidth="0.9" />
      </g>
      {/* Star 5 - left mid cone */}
      <g transform="translate(240, 108)">
        <path d="M 0 -10 L 3 -2 L 10 0 L 4 5 L 5.5 14 L 0 9 L -5.5 14 L -4 5 L -10 0 L -3 -2 Z"
          fill="#FDD835" stroke="#1A3050" strokeWidth="0.9" />
      </g>
      {/* Star 6 - right brim outer */}
      <g transform="translate(490, 148)">
        <path d="M 0 -9 L 2.5 -1.5 L 9 0 L 3.5 4.5 L 5 12 L 0 8 L -5 12 L -3.5 4.5 L -9 0 L -2.5 -1.5 Z"
          fill="#FDD835" stroke="#1A3050" strokeWidth="0.8" />
      </g>
      {/* Star 7 - left brim outer */}
      <g transform="translate(210, 148)">
        <path d="M 0 -9 L 2.5 -1.5 L 9 0 L 3.5 4.5 L 5 12 L 0 8 L -5 12 L -3.5 4.5 L -9 0 L -2.5 -1.5 Z"
          fill="#FDD835" stroke="#1A3050" strokeWidth="0.8" />
      </g>
      {/* Star 8 - far right brim */}
      <g transform="translate(510, 170)">
        <path d="M 0 -8 L 2 -1 L 8 0 L 3 4 L 4 11 L 0 7.5 L -4 11 L -3 4 L -8 0 L -2 -1 Z"
          fill="#FDD835" stroke="#1A3050" strokeWidth="0.7" />
      </g>
      {/* Star 9 - far left brim */}
      <g transform="translate(190, 170)">
        <path d="M 0 -8 L 2 -1 L 8 0 L 3 4 L 4 11 L 0 7.5 L -4 11 L -3 4 L -8 0 L -2 -1 Z"
          fill="#FDD835" stroke="#1A3050" strokeWidth="0.7" />
      </g>
      {/* Star 10 - right cone lower */}
      <g transform="translate(420, 130)">
        <path d="M 0 -7 L 2 -0.5 L 7 0 L 2.5 3.5 L 3.5 10 L 0 7 L -3.5 10 L -2.5 3.5 L -7 0 L -2 -0.5 Z"
          fill="#FDD835" stroke="#1A3050" strokeWidth="0.7" />
      </g>
      {/* Star 11 - left cone lower */}
      <g transform="translate(295, 130)">
        <path d="M 0 -7 L 2 -0.5 L 7 0 L 2.5 3.5 L 3.5 10 L 0 7 L -3.5 10 L -2.5 3.5 L -7 0 L -2 -0.5 Z"
          fill="#FDD835" stroke="#1A3050" strokeWidth="0.7" />
      </g>
      {/* Star 12 - brim center front */}
      <g transform="translate(350, 175)">
        <path d="M 0 -7 L 2 -0.5 L 7 0 L 2.5 3.5 L 3.5 10 L 0 7 L -3.5 10 L -2.5 3.5 L -7 0 L -2 -0.5 Z"
          fill="#FDD835" stroke="#1A3050" strokeWidth="0.7" />
      </g>

      {/* 
        Crescent moons on hat: 10 moons interspersed with stars
        Reinforces the magical, celestial theme of the wizard.
      */}
      {/* Moon 1 - left upper cone */}
      <g transform="translate(250, 75)" stroke="#1A3050" strokeWidth="1">
        <circle cx="0" cy="0" r="14" fill="#FDD835" />
        <circle cx="7" cy="-2" r="14" fill="#2C508A" />
      </g>
      {/* Moon 2 - right upper cone */}
      <g transform="translate(460, 78)" stroke="#1A3050" strokeWidth="1">
        <circle cx="0" cy="0" r="14" fill="#FDD835" />
        <circle cx="-7" cy="-2" r="14" fill="#2C508A" />
      </g>
      {/* Moon 3 - left mid cone */}
      <g transform="translate(222, 120)" stroke="#1A3050" strokeWidth="1">
        <circle cx="0" cy="0" r="12" fill="#FDD835" />
        <circle cx="6" cy="0" r="12" fill="#2C508A" />
      </g>
      {/* Moon 4 - right mid cone */}
      <g transform="translate(478, 118)" stroke="#1A3050" strokeWidth="1">
        <circle cx="0" cy="0" r="12" fill="#FDD835" />
        <circle cx="-6" cy="0" r="12" fill="#2C508A" />
      </g>
      {/* Moon 5 - left brim */}
      <g transform="translate(254, 158)" stroke="#1A3050" strokeWidth="0.9">
        <circle cx="0" cy="0" r="10" fill="#FDD835" />
        <circle cx="5" cy="0" r="10" fill="#2C508A" />
      </g>
      {/* Moon 6 - right brim */}
      <g transform="translate(446, 158)" stroke="#1A3050" strokeWidth="0.9">
        <circle cx="0" cy="0" r="10" fill="#FDD835" />
        <circle cx="-5" cy="0" r="10" fill="#2C508A" />
      </g>
      {/* Moon 7 - center brim */}
      <g transform="translate(350, 148)" stroke="#1A3050" strokeWidth="0.9">
        <circle cx="0" cy="0" r="9" fill="#FDD835" />
        <circle cx="4" cy="0" r="9" fill="#2C508A" />
      </g>
      {/* Moon 8 - right cone upper mid */}
      <g transform="translate(398, 93)" stroke="#1A3050" strokeWidth="0.8">
        <circle cx="0" cy="0" r="8" fill="#FDD835" />
        <circle cx="-4" cy="0" r="8" fill="#2C508A" />
      </g>
      {/* Moon 9 - left cone lower */}
      <g transform="translate(262, 143)" stroke="#1A3050" strokeWidth="0.8">
        <circle cx="0" cy="0" r="8" fill="#FDD835" />
        <circle cx="3.5" cy="0" r="8" fill="#2C508A" />
      </g>
      {/* Moon 10 - right cone lower */}
      <g transform="translate(440, 142)" stroke="#1A3050" strokeWidth="0.8">
        <circle cx="0" cy="0" r="8" fill="#FDD835" />
        <circle cx="-3.5" cy="0" r="8" fill="#2C508A" />
      </g>

    </svg>
  );
};

interface Props {
  width?: number;
  height?: number;
}
