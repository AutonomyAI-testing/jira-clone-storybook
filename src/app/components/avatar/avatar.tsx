import * as Avatar from "@radix-ui/react-avatar";
import { getRandomPastelColor } from "@domain/user";
import { Tooltip } from "@app/components/tooltip";

export const Avatar_ = ({
  name,
  image,
  color,
  size = 48,
  tooltip = false,
}: AvatarProps): JSX.Element => {
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

  const borderStyle = {
    background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
    padding: "3px",
    borderRadius: "50%",
  };

  const innerStyle = {
    width: `${size}px`,
    minWidth: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    overflow: "hidden" as const,
  };

  return (
    <Tooltip title={name} show={tooltip}>
      <div style={borderStyle} className="inline-flex">
        <Avatar.Root
          className="flex items-center rounded-full"
          style={innerStyle}
        >
          <Avatar.Image
            className="rounded-full object-cover"
            src={image ? imageSrc : undefined}
            style={{
              width: "100%",
              height: "100%",
            }}
            alt={name}
          />
          <Avatar.Fallback
            delayMs={0}
            className="flex w-full items-center justify-center rounded-full text-[var(--Neutral1000)]"
            style={{
              height: "100%",
              backgroundColor: color || getRandomPastelColor(),
              fontSize: `${size / 2}px`,
            }}
          >
            {acronym}
          </Avatar.Fallback>
        </Avatar.Root>
      </div>
    </Tooltip>
  );
};

interface AvatarProps {
  /**
   * The full name of the user. Used to generate initials for the fallback avatar and as the tooltip content.
   */
  name: string;

  /**
   * The filename of the user's avatar image (e.g., "andy-davis.webp"). The component automatically handles image path resolution and format optimization.
   */
  image?: string;

  /**
   * The background color for the fallback avatar when no image is provided.
   * If not provided, a random pastel color is generated automatically.
   */
  color?: string;

  /**
   * The size of the avatar in pixels. Controls both width and height of the circular avatar.
   * Defaults to 48px. Images larger than 80px use full-resolution format; smaller sizes use optimized format.
   */
  size?: 48 | 80;

  /**
   * Whether to display a tooltip showing the user's full name on hover.
   * Defaults to false.
   */
  tooltip?: boolean;
}
