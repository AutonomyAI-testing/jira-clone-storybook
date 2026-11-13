import { useState } from "react";

export const DEFAULT_PROJECT_IMAGE = "/images/default-project.png";

/**
 * A project's picture, falling back to the app's default image when the stored
 * path cannot be loaded. A project keeps the path it was given when it was
 * created, so a row can point at a file that is not there any more; without the
 * fallback the browser draws its broken-image icon in place of the picture.
 */
export const ProjectImage = ({
  src,
  alt,
  width,
  height,
  className,
}: Props): JSX.Element => {
  const [hasFailed, setHasFailed] = useState(false);
  const imageSrc = src && !hasFailed ? src : DEFAULT_PROJECT_IMAGE;

  /* An image that already failed before hydration never fires `onError` in
     React, so the ref reads the state the browser knows. */
  const checkImage = (image: HTMLImageElement | null) => {
    if (image && image.complete && image.naturalWidth === 0) {
      setHasFailed(true);
    }
  };

  return (
    <img
      ref={checkImage}
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setHasFailed(true)}
    />
  );
};

interface Props {
  src?: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}
