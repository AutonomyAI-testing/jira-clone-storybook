import { Link } from "@remix-run/react";
import cx from "classix";

// Color constants for button states
const BUTTON_COLOR_BASE = "var(--Red600, #DC2626)";
const BUTTON_COLOR_HOVER = "var(--Red700, #B91C1C)";
const ERROR_CODE_COLOR = "#34e33b";

export default function ServerError500Route() {
  return (
    <div
      className="flex min-h-screen w-full items-center justify-center"
      style={{ backgroundColor: "var(--Yellow100)" }}
    >
      <div className="flex flex-col items-center justify-center gap-8 px-6 py-12">
        {/* Robot Crashed Illustration */}
        <div className="w-full max-w-[400px]">
          <img
            src="/images/robot-crashed.svg"
            alt="Robot Crashed"
            className="h-auto w-full drop-shadow-lg"
          />
        </div>

        {/* 500 Heading */}
        <div className="text-center">
          <h1
            className="text-[120px] font-black leading-none"
            style={{ color: ERROR_CODE_COLOR }}
          >
            500
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-center">
          <h2
            className="text-2xl font-bold"
            style={{ color: "var(--Neutral1000)" }}
          >
            Server Error
          </h2>
          <p
            className="mt-2 text-lg"
            style={{ color: "var(--Neutral800)" }}
          >
            Something went wrong on our end. The wizard is on it.
          </p>
        </div>

        {/* Navigation Link */}
        <Link
          to="/"
          className={cx(
            "mt-4 inline-flex items-center justify-center rounded-lg px-8 py-3",
            "text-lg font-semibold",
            "transition-colors duration-200"
          )}
          style={{
            backgroundColor: BUTTON_COLOR_BASE,
            color: "var(--Neutral0)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = BUTTON_COLOR_HOVER;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = BUTTON_COLOR_BASE;
          }}
        >
          Try Again
        </Link>
      </div>
    </div>
  );
}
