import * as Avatar from "@radix-ui/react-avatar";
import { User, getRandomPastelColor } from "@domain/user";
import { Tooltip } from "@app/components/tooltip";

export const UserAvatar = ({
  name,
  image,
  color,
  size = 36,
  tooltip = false,
  gradientBorder = false,
}: UserAvatarProps): JSX.Element => {
  // Prepare image source paths: use full-size image for larger avatars, optimized version for small ones
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

  const avatarContent = (
    <Tooltip title={name} show={tooltip}>
      <Avatar.Root className="flex items-center rounded-full" style={imageSize}>
        <Avatar.Image
          className="rounded-full object-cover"
          src={image ? imageSrc : undefined}
          style={imageSize}
          alt={name}
        />
        <Avatar.Fallback
          delayMs={0}
          className="flex items-center justify-center rounded-full"
          style={{
            ...imageSize,
            backgroundColor: color || getRandomPastelColor(),
            fontSize: `${size / 2}px`,
            // Fallback text (initials) always displays in red for consistent visibility across different background colors
            color: "var(--Red700)",
          }}
        >
          {acronym}
        </Avatar.Fallback>
      </Avatar.Root>
    </Tooltip>
  );

  if (gradientBorder) {
    // Calculate border width as 7% of avatar size, with minimum of 4px for smaller avatars
    const borderWidth = Math.max(4, Math.round(size * 0.07));
    const ringSize = size + borderWidth * 2;
    return (
      <span
        style={{
          borderRadius: "9999px",
          background: "linear-gradient(135deg, #6ee7c7, #60a5fa, #818cf8)",
          padding: `${borderWidth}px`,
          width: `${ringSize}px`,
          height: `${ringSize}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            borderRadius: "9999px",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {avatarContent}
        </span>
      </span>
    );
  }

  return avatarContent;
};

interface UserAvatarProps extends Omit<User, "id"> {
  size?: number;
  tooltip?: boolean;
  gradientBorder?: boolean;
}
