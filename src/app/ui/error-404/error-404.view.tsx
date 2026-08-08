import { useNavigate } from "@remix-run/react";
import cx from "classix";
import { Button } from "@app/components/button";

/**
 * Error 404 Page Component
 *
 * Displays a friendly 404 error page with:
 * - An anime avatar image with gradient border
 * - Large 404 heading
 * - Friendly error message
 * - Button to navigate back home
 */

/** Avatar border styling: red outer border (4px) containing a green-to-dark-green gradient inner border (6px) */
const AVATAR_OUTER_BORDER = {
  padding: "4px",
  background: "#ef4444",
} as const;

const AVATAR_INNER_BORDER = {
  backgroundImage:
    "linear-gradient(135deg, #4ade80 0%, #22c55e 40%, #16a34a 100%)",
  padding: "6px",
} as const;

export const Error404View = (): JSX.Element => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div
      className={cx(
        "flex min-h-screen w-full items-center justify-center",
        "bg-elevation-surface px-4 py-8"
      )}
    >
      <div
        className={cx(
          "flex flex-col items-center gap-8",
          "max-w-[600px] text-center"
        )}
      >
        {/* Avatar with decorative border: red outer ring + green gradient inner ring */}
        <div className="rounded-full shadow-lg" style={AVATAR_OUTER_BORDER}>
          <div
            className={cx(
              "relative flex h-[300px] w-[300px] items-center justify-center",
              "rounded-full"
            )}
            style={AVATAR_INNER_BORDER}
          >
            <img
              src="/avatars/anime-404.svg"
              alt="Anime character - page not found"
              className={cx("h-full w-full rounded-full object-cover")}
            />
          </div>
        </div>

        {/* Error number and title */}
        <div className="flex flex-col gap-3">
          <h1 className={cx("font-primary-black text-7xl", "text-font-brand")}>
            404
          </h1>
          <h2 className={cx("font-primary-bold text-3xl", "text-font")}>
            Oops! Page Not Found
          </h2>
        </div>

        {/* Description message */}
        <p
          className={cx(
            "max-w-[450px]",
            "font-primary-light text-lg text-font-subtle",
            "leading-relaxed"
          )}
        >
          It looks like you've wandered into the wrong dimension. The page
          you're looking for doesn't exist here. Let's get you back on track!
        </p>

        {/* Navigation actions: primary CTA to home, fallback browser back button */}
        <Button
          onClick={handleGoHome}
          color="primary"
          variant="contained"
          size="lg"
          className="mt-4"
        >
          Go Back Home
        </Button>

        <button
          onClick={() => window.history.back()}
          className={cx(
            "font-primary text-lg text-font-brand",
            "hover:text-font-brand hover:underline",
            "active:text-font-brand",
            "transition-colors duration-200"
          )}
        >
          Or go back to previous page
        </button>
      </div>
    </div>
  );
};
