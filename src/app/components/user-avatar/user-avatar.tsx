import * as Avatar from "@radix-ui/react-avatar";
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

  const avatar = (
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

  // Calculate ring thickness proportionally to avatar size, with 3px minimum for visibility
  const ringThickness = Math.max(3, Math.round(size * 0.04));
  // Wrap avatar in gradient ring when enabled by rendering the gradient as a container
  const content = ring ? (
    <div
      style={{
        display: "inline-flex",
        padding: `${ringThickness}px`,
        borderRadius: "9999px",
        background: "linear-gradient(135deg, #4FD1C5 0%, #63B3ED 50%, #B794F4 100%)",
      }}
    >
      <div style={{ borderRadius: "9999px", overflow: "hidden", display: "flex" }}>
        {avatar}
      </div>
    </div>
  ) : (
    avatar
  );

  // Wrap content with optional tooltip based on prop
  return <Tooltip title={name} show={tooltip}>{content}</Tooltip>;
};

interface UserAvatarProps extends Omit<User, "id"> {
  size?: number;
  tooltip?: boolean;
  ring?: boolean;
}
