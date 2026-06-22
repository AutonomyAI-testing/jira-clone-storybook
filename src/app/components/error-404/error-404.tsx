import { CSSProperties } from "react";
import { Button } from "../button";

// Style objects for Error404 component
// Extracted to constants for maintainability and clarity
const errorCodeStyle: CSSProperties = {
  fontSize: "9rem",
  lineHeight: 1,
  fontWeight: 900,
  color: "var(--Neutral1000)",
  margin: 0,
};

const imageBorderStyle: CSSProperties = {
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  background:
    "linear-gradient(135deg, var(--Teal400), var(--Blue500), var(--Blue600))",
  padding: "4px",
  boxSizing: "border-box",
};

const imageWrapperStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  overflow: "hidden",
};

const imageStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const messageContainerStyle: CSSProperties = {
  textAlign: "center",
  maxWidth: "400px",
};

const descriptionStyle: CSSProperties = {
  fontSize: "0.875rem",
  fontWeight: 700,
  color: "var(--Neutral700)",
  margin: "0 0 0.5rem 0",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

const messageStyle: CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 700,
  color: "var(--Red700)",
  margin: "0.5rem 0 0.5rem 0",
};

export const Error404 = ({
  code = "404",
  description = "Page Not Found",
  message = "Oops! It looks like this page doesn't exist.",
  actionText = "Go Back Home",
  actionHref = "/",
  imageSrc = "/images/error-404.svg",
}: Props): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-8">
      {/* Large error code display for immediate visual identification */}
      <h1 style={errorCodeStyle}>{code}</h1>

      {/* Circular image with gradient border - visual focal point */}
      <div style={imageBorderStyle}>
        <div style={imageWrapperStyle}>
          <img src={imageSrc} alt="Error illustration" style={imageStyle} />
        </div>
      </div>

      {/* Error description and message */}
      <div style={messageContainerStyle}>
        <p style={descriptionStyle}>{description}</p>
        <p style={messageStyle}>{message}</p>
      </div>

      {/* Call-to-action button for navigating back to a functional page */}
      <a href={actionHref}>
        <Button color="primary" variant="contained" size="lg">
          {actionText}
        </Button>
      </a>
    </div>
  );
};

interface Props {
  code?: string;
  description?: string;
  message?: string;
  actionText?: string;
  actionHref?: string;
  imageSrc?: string;
}
