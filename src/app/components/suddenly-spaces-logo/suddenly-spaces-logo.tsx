import cx from "classix";

interface Props {
  className?: string;
  size?: number;
}

export const SuddenlySpacesLogo = ({
  className,
  size = 48,
}: Props): JSX.Element => {
  return (
    <div className={cx("flex items-center gap-5", className)}>
      <SuddenlySpacesIcon size={size} />
      <span
        className="font-primary-bold tracking-[0.2em]"
        style={{ fontSize: size * 0.5, color: "#2563EB" }}
      >
        SUDDENLYSPACES
      </span>
    </div>
  );
};

export const SuddenlySpacesIcon = ({
  size = 48,
}: {
  size?: number;
}): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SuddenlySpaces logo mark"
    >
      <defs>
        {/* Upper-left triangle clip: covers top-left half diagonally */}
        <clipPath id="upper-left-clip">
          <polygon points="2,2 46,2 2,46" />
        </clipPath>
      </defs>

      {/* Outer square border */}
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Diagonal lines clipped to upper-left triangle only */}
      <g clipPath="url(#upper-left-clip)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="butt">
        <line x1="0" y1="12" x2="12" y2="0" />
        <line x1="0" y1="24" x2="24" y2="0" />
        <line x1="0" y1="36" x2="36" y2="0" />
        <line x1="0" y1="48" x2="48" y2="0" />
        <line x1="12" y1="48" x2="48" y2="12" />
        <line x1="24" y1="48" x2="48" y2="24" />
        <line x1="36" y1="48" x2="48" y2="36" />
      </g>
    </svg>
  );
};
