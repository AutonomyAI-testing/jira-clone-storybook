import * as Avatar from "@radix-ui/react-avatar";
import { User, getRandomPastelColor } from "@domain/user";
import { Tooltip } from "@app/components/tooltip";

/**
 * UserAvatar component - renders a circular user avatar with image or initials fallback.
 * Optimizes images by serving minified versions for smaller sizes to improve performance.
 */
export const UserAvatar = ({
  name,
  image,
  color,
  size = 36,
  tooltip = false,
}: UserAvatarProps): JSX.Element => {
  // Use optimized minified image for sizes <= 80px, full resolution for larger avatars
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

  return (
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
}
