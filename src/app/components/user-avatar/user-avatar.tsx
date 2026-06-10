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
  outline = false,
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

  const ringThickness = 3;
  const wrapperSize = (gradientRing || outline) ? size + ringThickness * 2 : size;

  const avatarContent = (
    <Avatar.Root
      className="flex items-center rounded-full"
      style={{ ...imageSize, borderRadius: "9999px", overflow: "hidden" }}
    >
      <Avatar.Image
        className="rounded-full object-cover"
        src={image ? imageSrc : undefined}
        style={{ ...imageSize, borderRadius: "9999px" }}
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

  if (!gradientRing && !outline) {
    return (
      <Tooltip title={name} show={tooltip}>
        {avatarContent}
      </Tooltip>
    );
  }

  const ringBackground = outline
    ? "#22c55e"
    : `linear-gradient(135deg, #5EEAD4 0%, #38BDF8 40%, #818CF8 100%)`;

  return (
    <Tooltip title={name} show={tooltip}>
      <div
        style={{
          width: `${wrapperSize}px`,
          height: `${wrapperSize}px`,
          minWidth: `${wrapperSize}px`,
          borderRadius: "50%",
          background: ringBackground,
          padding: `${ringThickness}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {avatarContent}
      </div>
    </Tooltip>
  );
};

interface UserAvatarProps extends Omit<User, "id"> {
  size?: number;
  tooltip?: boolean;
  gradientRing?: boolean;
  outline?: boolean;
}
