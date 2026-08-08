import * as Avatar from "@radix-ui/react-avatar";
import cx from "classix";
import { User, getRandomPastelColor } from "@domain/user";
import { Tooltip } from "@app/components/tooltip";

export const UserAvatar = ({
  name,
  image,
  color,
  size = 36,
  tooltip = false,
  ring = false,
}: UserAvatarProps): JSX.Element => {
  // Use optimized image for smaller sizes, full-res for larger avatars
  const imageMinName = image?.replace(".webp", "-min.webp");
  const imageSrc = size > 80 ? `/avatars/${image}` : `/avatars/${imageMinName}`;
  const imageSize = {
    width: `${size}px`,
    minWidth: `${size}px`,
    height: `${size}px`,
  };
  // Generate initials from name (up to 2 first letters of first/last words)
  const acronym = name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

  return (
    <Tooltip title={name} show={tooltip}>
      {/* Apply red ring border for featured/highlighted avatars */}
      <Avatar.Root
        className={cx(
          "flex items-center rounded-full",
          ring && "ring-2 ring-border-danger ring-offset-1"
        )}
        style={imageSize}
      >
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
    </Tooltip>
  );
};

interface UserAvatarProps extends Omit<User, "id"> {
  size?: number;
  tooltip?: boolean;
  ring?: boolean;
}
