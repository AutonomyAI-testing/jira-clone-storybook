import * as Avatar from "@radix-ui/react-avatar";
import { User, getRandomPastelColor } from "@domain/user";
import { Tooltip } from "@app/components/tooltip";

// Gradient colors for the avatar border: cyan → indigo → purple
const GRADIENT_BORDER_COLOR = "linear-gradient(to right, #4fd1c5, #667eea, #764ba2)";

export const UserAvatar = ({
  name,
  image,
  color,
  size = 36,
  tooltip = false,
  gradientBorder = false,
}: UserAvatarProps): JSX.Element => {
  const imageMinName = image?.replace(".webp", "-min.webp");
  const imageSrc = size > 80 ? `/avatars/${image}` : `/avatars/${imageMinName}`;
  const imageSize = {
    width: `${size}px`,
    minWidth: `${size}px`,
    height: `${size}px`,
  };
  const acronym = name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

  // Gap between avatar and gradient border: 8% of avatar size
  // Creates visual breathing room while maintaining proportion at any size
  const borderGapSize = size * 0.08;
  const borderWrapperSize = {
    width: `${size + borderGapSize * 2}px`,
    height: `${size + borderGapSize * 2}px`,
  };

  const avatar = (
    <Avatar.Root
      className="flex items-center rounded-full"
      style={{
        ...imageSize,
        borderRadius: "9999px",
        overflow: "hidden",
      }}
    >
      <Avatar.Image
        className="rounded-full object-cover"
        src={image ? imageSrc : undefined}
        style={{
          ...imageSize,
          borderRadius: "9999px",
        }}
        alt={name}
      />
      <Avatar.Fallback
        delayMs={0}
        className="flex items-center justify-center rounded-full"
        style={{
          ...imageSize,
          backgroundColor: color || getRandomPastelColor(),
          fontSize: `${size / 2}px`,
          color: "var(--Red700)",
        }}
      >
        {acronym}
      </Avatar.Fallback>
    </Avatar.Root>
  );

  if (gradientBorder) {
    return (
      <Tooltip title={name} show={tooltip}>
        <div
          style={{
            ...borderWrapperSize,
            borderRadius: "9999px",
            background: GRADIENT_BORDER_COLOR,
            padding: `${borderGapSize}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {avatar}
        </div>
      </Tooltip>
    );
  }

  return (
    <Tooltip title={name} show={tooltip}>
      {avatar}
    </Tooltip>
  );
};

interface UserAvatarProps extends Omit<User, "id"> {
  size?: number;
  tooltip?: boolean;
  gradientBorder?: boolean;
}
