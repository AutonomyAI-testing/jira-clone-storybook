import * as Avatar from "@radix-ui/react-avatar";
import { User, getRandomPastelColor } from "@domain/user";
import { Tooltip } from "@app/components/tooltip";

// Image size threshold: use lower-resolution avatars for sizes <= 80px to optimize bundle
const IMAGE_SIZE_THRESHOLD = 80;

// Ring styling constants
const GRADIENT_RING_COLORS =
  "linear-gradient(225deg, #67e8f9 0%, #38bdf8 35%, #34d399 65%, #818cf8 100%)";
const RING_GAP_SIZE = 2;
const MIN_RING_THICKNESS = 6;
const RING_THICKNESS_RATIO = 0.06;

export const UserAvatar = ({
  name,
  image,
  color,
  size = 36,
  tooltip = false,
  gradientRing = false,
}: UserAvatarProps): JSX.Element => {
  // Use minified images for small avatars; full resolution for large displays
  const imageMinName = image?.replace(".webp", "-min.webp");
  const imageSrc =
    size > IMAGE_SIZE_THRESHOLD
      ? `/avatars/${image}`
      : `/avatars/${imageMinName}`;
  // Dimensions for the avatar itself (applies to both image and fallback)
  const imageSize = {
    width: `${size}px`,
    minWidth: `${size}px`,
    height: `${size}px`,
  };

  // Extract initials from name (max 2 characters from first 2 words)
  const acronym = name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

  // Calculate gradient ring dimensions (~6% of avatar diameter, min 6px)
  const ringThickness = Math.max(
    MIN_RING_THICKNESS,
    Math.round(size * RING_THICKNESS_RATIO)
  );
  const outerRingSize = size + ringThickness * 2 + RING_GAP_SIZE * 2;

  // Outer gradient ring with cyan-blue-teal-purple colors
  const gradientRingStyle = {
    width: `${outerRingSize}px`,
    height: `${outerRingSize}px`,
    minWidth: `${outerRingSize}px`,
    borderRadius: "9999px",
    background: GRADIENT_RING_COLORS,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // White gap between ring and avatar
  const gapStyle = {
    width: `${size + RING_GAP_SIZE * 2}px`,
    height: `${size + RING_GAP_SIZE * 2}px`,
    borderRadius: "9999px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const avatarElement = (
    <Avatar.Root className="flex items-center rounded-full" style={imageSize}>
      <Avatar.Image
        className="rounded-full object-cover"
        src={image ? imageSrc : undefined}
        style={imageSize}
        alt={name}
      />
      <Avatar.Fallback
        delayMs={0}
        className="flex items-center justify-center rounded-full text-[var(--Neutral1000)]"
        style={{
          ...imageSize,
          backgroundColor: color || getRandomPastelColor(),
          fontSize: `${size / 2}px`,
        }}
      >
        {acronym}
      </Avatar.Fallback>
    </Avatar.Root>
  );

  return (
    <Tooltip title={name} show={tooltip}>
      {gradientRing ? (
        <div style={gradientRingStyle}>
          <div style={gapStyle}>{avatarElement}</div>
        </div>
      ) : (
        avatarElement
      )}
    </Tooltip>
  );
};

interface UserAvatarProps extends Omit<User, "id"> {
  size?: number;
  tooltip?: boolean;
  gradientRing?: boolean;
}
