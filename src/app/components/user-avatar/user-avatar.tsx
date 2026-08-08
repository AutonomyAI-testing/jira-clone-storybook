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
  // Use optimized image for small sizes, full-res for larger displays
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

  // Scale border width proportionally: minimum 4px, otherwise 6% of size
  const borderWidth = Math.max(4, Math.round(size * 0.06));
  const totalSize = size + borderWidth * 2;

  const avatar = (
    <Avatar.Root
      className="flex items-center"
      style={{
        ...imageSize,
        borderRadius: "9999px",
        overflow: "hidden",
      }}
    >
      <Avatar.Image
        className="object-cover"
        src={image ? imageSrc : undefined}
        style={{ ...imageSize, borderRadius: "9999px" }}
        alt={name}
      />
      <Avatar.Fallback
        delayMs={0}
        className="flex items-center justify-center text-[var(--Neutral1000)]"
        style={{
          ...imageSize,
          borderRadius: "9999px",
          backgroundColor: color || getRandomPastelColor(),
          fontSize: `${size / 2}px`,
        }}
      >
        {acronym}
      </Avatar.Fallback>
    </Avatar.Root>
  );

  // If gradient border is enabled, wrap avatar in a colored div that acts as a ring border
  const wrappedAvatar = gradientBorder ? (
    <div
      style={{
        background:
          "linear-gradient(135deg, #60A5FA 0%, #38BDF8 40%, #22D3EE 70%, #34D399 100%)",
        width: `${totalSize}px`,
        height: `${totalSize}px`,
        minWidth: `${totalSize}px`,
        borderRadius: "9999px",
        padding: `${borderWidth}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {avatar}
    </div>
  ) : (
    avatar // No wrapper if gradient border is disabled
  );

  return (
    <Tooltip title={name} show={tooltip}>
      {wrappedAvatar}
    </Tooltip>
  );
};

interface UserAvatarProps extends Omit<User, "id"> {
  size?: number;
  tooltip?: boolean;
  gradientBorder?: boolean;
}
