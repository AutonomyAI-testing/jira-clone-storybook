export const Error404 = ({
  message = "Looks like you've wandered into uncharted territory.",
  href = "/",
}: Props) => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-elevation-surface">
      <div className="flex flex-col items-center gap-8 px-6 text-center">
        {/* Character image — gradient ring is baked into the PNG */}
        <img
          src="/images/error-404-character.png"
          alt="Lost character"
          className="h-[280px] w-[280px] object-cover"
        />

        {/* 404 heading */}
        <div className="flex flex-col items-center gap-3">
          <h1
            className="font-primary-black"
            style={{ fontSize: "6rem", lineHeight: 1, letterSpacing: "-0.04em", color: "#EF4444" }}
          >
            404
          </h1>
          <h2 className="font-primary-bold text-2xl text-font">
            Page not found
          </h2>
          <p className="font-primary-light text-base text-font-subtle max-w-[360px]">
            {message}
          </p>
        </div>

        {/* Go home button */}
        <a
          href={href}
          className="inline-flex items-center justify-center gap-2 rounded bg-background-brand-bold px-8 py-2 font-primary-bold text-base text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed focus-visible:outline outline-2 outline-border-brand"
        >
          Go back home
        </a>
      </div>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
