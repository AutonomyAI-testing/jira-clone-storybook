export const ErrorBase = ({
  variant,
  message,
  href,
  isLoading = false,
  isDisabled = false,
}: Props) => {
  const imgPath = `/images/error-${variant}.svg`;

  if (isLoading) {
    return (
      <div className="max-w-[500px] text-center">
        <style>{`
          @keyframes sb-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
        `}</style>
        <div
          style={{
            width: "280px",
            height: "350px",
            margin: "0 auto 1rem",
            backgroundColor: "#dde1e7",
            borderRadius: "8px",
            animation: "sb-pulse 1.5s ease-in-out infinite",
          }}
        />
        <div
          style={{
            height: "20px",
            width: "200px",
            margin: "0 auto",
            backgroundColor: "#dde1e7",
            borderRadius: "4px",
            animation: "sb-pulse 1.5s ease-in-out infinite",
          }}
        />
      </div>
    );
  }

  const opacity = isDisabled ? 0.45 : 1;
  const pointerEvents: React.CSSProperties["pointerEvents"] = isDisabled ? "none" : undefined;
  const cursor = isDisabled ? "not-allowed" : undefined;

  return (
    <div
      className="max-w-[500px] text-center"
      style={{ opacity, cursor }}
    >
      <img
        src={imgPath}
        alt="Server error"
        className="mx-auto mb-4 h-[350px] w-auto"
      />
      {href ? (
        <a
          href={isDisabled ? undefined : href}
          aria-disabled={isDisabled}
          className="max-w-[100px] text-lg text-link hover:underline active:text-link-pressed"
          style={{ pointerEvents }}
        >
          {message}
        </a>
      ) : (
        <span className="max-w-[100px] text-lg text-font">{message}</span>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message?: string;
  href?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
}
