export const Error404 = ({
  message = "Oops! The page you're looking for doesn't exist.",
  href = "/",
}: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-elevation-surface px-6 py-12 text-center">
      {/* Character illustration */}
      <div className="relative">
        <img
          src="/images/error-404-character.png"
          alt="404 character"
          className="h-[420px] w-[420px] object-cover"
        />
      </div>

      {/* Error code */}
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-primary-black text-[96px] leading-none tracking-tight text-font">
          404
        </h1>
        <h2 className="font-primary-bold text-2xl text-font">
          Page Not Found
        </h2>
        <p className="max-w-[400px] font-primary-light text-base text-font-subtle">
          {message}
        </p>
      </div>

      {/* CTA */}
      <a
        href={href}
        className="flex cursor-pointer items-center justify-center gap-2 rounded bg-background-brand-bold px-8 py-2 text-lg font-primary text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
      >
        Go back home
      </a>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
