export const Error404 = ({
  message = "Oops! This page doesn't exist.",
  href = "/",
}: Props) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-12" style={{ backgroundColor: '#f5f0e8' }}>
      {/* Illustration */}
      <div className="mb-8 flex items-center justify-center">
        <img
          src="/images/error-404.svg"
          alt="404 Wizard Robot"
          className="h-[320px] w-auto select-none"
          draggable={false}
        />
      </div>

      {/* Error code */}
      <h1 className="mb-2 font-primary-black text-[96px] leading-none tracking-tight text-font-brand">
        404
      </h1>

      {/* Message */}
      <p className="mb-2 font-primary-bold text-2xl text-font">
        Page Not Found
      </p>
      <p className="mb-8 max-w-[380px] text-center font-primary-light text-base text-font-subtle">
        {message}
      </p>

      {/* CTA Button */}
      <a
        href={href}
        className="inline-flex items-center gap-2 rounded bg-background-brand-bold px-8 py-2 font-primary-bold text-base text-font-inverse shadow-sm transition-colors duration-150 hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        Back to Home
      </a>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
