import cx from "classix";
import { type FC } from "react";

interface Props {
  message?: string;
  href?: string;
}

export const Error404: FC<Props> = ({
  message = "The page you're looking for has vanished into thin air.",
  href,
}) => {
  return (
    <div className="flex max-w-[520px] flex-col items-center gap-4 px-6 text-center">
      {/* Illustration */}
      <img
        src="/images/error-404.svg"
        alt="Wizard robot 404"
        className="h-[300px] w-auto"
      />

      {/* 404 number */}
      <p className="text-[72px] font-black leading-none text-font-danger">
        404
      </p>

      {/* Headline */}
      <h1 className="text-2xl font-bold text-font-danger">
        You&apos;ve been hexed! 🧙
      </h1>

      {/* Message */}
      <p className="text-base text-font-danger">{message}</p>

      {/* Home link */}
      {href && (
        <a
          href={href}
          className={cx(
            "mt-2 inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors",
            "bg-background-brand-bold text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
          )}
        >
          ← Back to safety
        </a>
      )}
    </div>
  );
}
