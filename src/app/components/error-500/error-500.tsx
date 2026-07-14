export const Error500 = ({
  message = "Error 500: Server error",
  href,
}: Props) => {
  return (
    <div className="flex flex-col items-center text-center max-w-[560px] gap-6">
      <div className="relative flex items-end justify-center">
        <img
          src="/images/error-500.svg"
          alt="500 error"
          className="h-[280px] w-auto"
        />
        <div className="absolute right-0 bottom-0 translate-x-4 translate-y-2">
          <div
            className="h-[140px] w-[140px] rounded-full p-[3px] shadow-lg"
            style={{ background: "linear-gradient(135deg, #64d9c8 0%, #7ba7e8 50%, #a78bfa 100%)" }}
          >
            <img
              src="/images/error-404-avatar.png"
              alt="Lost character"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-primary-bold" style={{ color: "#ef4444" }}>Oops! Something went wrong</h1>
        {href ? (
          <a
            href={href}
            className="text-lg text-link hover:underline active:text-link-pressed"
          >
            {message}
          </a>
        ) : (
          <span className="text-lg text-font-subtlest">{message}</span>
        )}
      </div>
    </div>
  );
};

interface Props {
  message: string;
  href: string;
}
