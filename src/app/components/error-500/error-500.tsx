export const Error500 = ({
  message = "Oops! Server error.",
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
            "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #c0392b 100%)",
        }}
      >
        <div className="overflow-hidden rounded-full">
          <img
            src="/images/error-500.svg"
            alt="500 illustration"
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
              "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #c0392b 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          500
        </h1>
        <p className="font-primary-bold text-xl text-font-danger">
          {message}
        </p>
        <p className="text-base text-font-subtlest">
          Something went wrong on our end. Please try again
          later.
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
              "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #c0392b 100%)",
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
