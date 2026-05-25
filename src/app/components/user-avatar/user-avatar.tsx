import * as Avatar from "@radix-ui/react-avatar";
import { User, getRandomPastelColor } from "@domain/user";
import { Tooltip } from "@app/components/tooltip";
import { cx } from "classix";

export const UserAvatar = ({
  name,
  image,
  color,
  size = 36,
  tooltip = false,
  outline = false,
}: UserAvatarProps): JSX.Element => {
  // Use smaller image variant (with -min suffix) for smaller avatars to reduce bandwidth
  const imageMinName = image?.replace(".webp", "-min.webp");
  const imageSrc = size > 80 ? `/avatars/${image}` : `/avatars/${imageMinName}`;

  // Size as inline styles to avoid hardcoding dimensions in className
  const imageSize = {
    width: `${size}px`,
    minWidth: `${size}px`,
    height: `${size}px`,
  };

  // Extract initials from first two words for fallback display
  const acronym = name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

  return (
    <Tooltip title={name} show={tooltip}>
      <Avatar.Root
        className={cx(
          "flex items-center rounded-full",
          outline && "ring-2 ring-border-danger"
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
  outline?: boolean;
}
