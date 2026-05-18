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
        {/* Avatar Container with Gradient Border */}
        <div
          className={cx(
            "relative flex h-[300px] w-[300px] items-center justify-center",
            "rounded-full shadow-lg"
          )}
          style={{
            backgroundImage:
              "linear-gradient(135deg, #5ee7df 0%, #63b3ed 40%, #a78bfa 100%)",
            padding: "6px",
          }}
        >
          {/* Inner Avatar Image */}
          <img
            src="/avatars/anime-404.svg"
            alt="Anime character - page not found"
            className={cx("h-full w-full rounded-full object-cover")}
          />
        </div>

        {/* 404 Heading */}
        <div className="flex flex-col gap-3">
          <h1
            className={cx(
              "text-7xl font-primary-black",
              "text-font-brand"
            )}
          >
            404
          </h1>

          {/* Error Title */}
          <h2
            className={cx(
              "text-3xl font-primary-bold",
              "text-font"
            )}
          >
            Oops! Page Not Found
          </h2>
        </div>

        {/* Error Message */}
        <p
          className={cx(
            "max-w-[450px]",
            "text-lg text-font-subtle font-primary-light",
            "leading-relaxed"
          )}
        >
          It looks like you've wandered into the wrong dimension. 
          The page you're looking for doesn't exist here.
          Let's get you back on track!
        </p>

        {/* Action Button */}
        <Button
          onClick={handleGoHome}
          color="primary"
          variant="contained"
          size="lg"
          className="mt-4"
        >
          Go Back Home
        </Button>

        {/* Optional secondary action */}
        <button
          onClick={() => window.history.back()}
          className={cx(
            "text-lg font-primary text-font-brand",
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
