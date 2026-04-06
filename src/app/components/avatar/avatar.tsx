interface AvatarProps {
  imageUrl?: string;
  imageAlt?: string;
  size?: number;
  borderGradient?: string;
  borderWidth?: number;
  shadowColor?: string;
  shadowBlur?: number;
  shadowOpacity?: number;
}

export const Avatar = ({
  imageUrl,
  imageAlt = "Avatar",
  size = 200,
  borderGradient = "linear-gradient(135deg, #4dd9e0, #5c9cf5, #b9a6f5)",
  borderWidth = 6,
  shadowColor = "#5c9cf5",
  shadowBlur = 24,
  shadowOpacity = 0.35,
}: AvatarProps): JSX.Element => {
  const imageSize = {
    width: `${size}px`,
    height: `${size}px`,
  };

  const borderSize = {
    width: `${size + borderWidth * 2}px`,
    height: `${size + borderWidth * 2}px`,
    padding: `${borderWidth}px`,
  };

  const shadowValue = `0 6px ${shadowBlur}px rgba(${hexToRgb(shadowColor)}, ${shadowOpacity})`;

  return (
    <div
      style={{
        ...borderSize,
        borderRadius: "50%",
        background: borderGradient,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: shadowValue,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          ...imageSize,
          borderRadius: "50%",
          overflow: "hidden",
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#e0e0e0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#999",
              fontSize: `${size / 4}px`,
            }}
          >
            No image
          </div>
        )}
      </div>
    </div>
  );
};

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return `${r}, ${g}, ${b}`;
  }
  return "92, 156, 245";
}
