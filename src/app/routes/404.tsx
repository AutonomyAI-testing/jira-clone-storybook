import { Error404 } from "@app/components/error-404";

export default function NotFound404Route() {
  return (
    <Error404
      headline="Oops! Page Not Found"
      subtext="Looks like this page went on a quest and never came back. Let's get you back to familiar territory."
      ctaLabel="Back to Home"
      ctaHref="/"
      showFullHeight
      showAnimation
    />
  );
}
