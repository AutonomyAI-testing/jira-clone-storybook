import * as Avatar from "@radix-ui/react-avatar";
import { User, getRandomPastelColor } from "@domain/user";
import { Tooltip } from "@app/components/tooltip";

export const UserAvatar = ({
  name,
  image,
  color,
  size = 36,
  tooltip = false,
  gradientRing = false,
  customSrc,
}: UserAvatarProps): JSX.Element => {
  const imageMinName = image?.replace(".webp", "-min.webp");
  const imageSrc = customSrc
    ? customSrc
    : size > 80
    ? `/avatars/${image}`
    : `/avatars/${imageMinName}`;
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
    <Avatar.Root
      className="flex items-center rounded-full"
      style={gradientRing ? {} : imageSize}
    >
      {gradientRing ? (
        <span
          style={{
            display: "inline-flex",
            padding: "3px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7ee8fa, #80ff72, #a78bfa, #60a5fa)",
            width: `${size + 6}px`,
            minWidth: `${size + 6}px`,
            height: `${size + 6}px`,
          }}
        >
          <Avatar.Image
            className="rounded-full object-cover"
            src={customSrc || (image ? imageSrc : undefined)}
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
        </span>
      ) : (
        <>
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
        </>
      )}
    </Avatar.Root>
  );

  return <Tooltip title={name} show={tooltip}>{avatarContent}</Tooltip>;
};

interface UserAvatarProps extends Omit<User, "id"> {
  size?: number;
  tooltip?: boolean;
  /** Renders a gradient ring border around the avatar */
  gradientRing?: boolean;
  /** Custom image src that bypasses the /avatars/ path logic */
  customSrc?: string;
}
