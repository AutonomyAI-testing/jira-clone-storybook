export const Error404 = ({
  message = "It seems that you have lost! Go to the main page",
  href,
}: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-6 text-center">
      {/* Cat image */}
      <div className="mb-8">
        <img
          src="/images/error-404-cat.jpg"
          alt="A playful cat waving hello"
          className="mx-auto h-[280px] w-[280px] rounded-full object-cover shadow-lg"
        />
      </div>

      {/* 404 heading */}
      <h1 className="mb-3 font-primary-black text-[96px] leading-none tracking-tight text-font">
        404
      </h1>

      {/* Subtitle */}
      <h2 className="mb-4 font-primary-bold text-2xl text-font">
        Page not found
      </h2>

      {/* Message */}
      <p className="mb-8 max-w-[420px] font-primary-light text-base text-font-subtle">
        {message}
      </p>

      {/* CTA button / link */}
      {href && (
        <a
          href={href}
          className="flex cursor-pointer items-center justify-center gap-2 rounded bg-background-brand-bold px-8 py-2 font-primary text-base text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
        >
          Go back home
        </a>
      )}
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
