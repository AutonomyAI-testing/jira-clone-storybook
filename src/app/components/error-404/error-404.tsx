export const Error404 = ({
  message = "Oops! Page not found.",
  href,
}: Props) => {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      {/* Avatar with gradient border */}
      <div
        className="rounded-full"
        style={{
          padding: "6px",
          background:
            "linear-gradient(135deg, #4ecdc4 0%, #45b7d1 50%, #7b68ee 100%)",
        }}
      >
        <div className="overflow-hidden rounded-full">
          <img
            src="/images/error-404-avatar.png"
            alt="404 illustration"
            className="block h-[240px] w-[240px] rounded-full object-cover"
          />
        </div>
      </div>

      {/* Error code */}
      <div className="flex flex-col gap-2">
        <h1
          className="font-primary-black text-[80px] leading-none"
          style={{
            background:
              "linear-gradient(135deg, #4ecdc4 0%, #45b7d1 50%, #7b68ee 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </h1>
        <p className="font-primary-bold text-xl text-font">
          {message}
        </p>
        <p className="text-base text-font-subtlest">
          The page you&apos;re looking for doesn&apos;t exist or
          has been moved.
        </p>
      </div>

      {/* Go back button */}
      {href && (
        <a
          href={href}
          className="rounded-full px-8 py-3 text-base
            font-primary-bold text-font-inverse
            transition-opacity hover:opacity-90
            active:opacity-75"
          style={{
            background:
              "linear-gradient(135deg, #4ecdc4 0%, #45b7d1 50%, #7b68ee 100%)",
          }}
        >
          Go Back Home
        </a>
      )}
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
