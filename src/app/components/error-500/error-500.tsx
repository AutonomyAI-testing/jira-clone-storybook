export const Error500 = ({
  message = "Error 500: Server error",
  href,
}: Props) => {
  return (
    <div className="mx-auto flex max-w-[500px] flex-col items-center text-center">
      <img
        src="/images/error-500.svg"
        alt="Server error illustration"
        className="mb-6 h-[280px] w-auto"
      />
      <h1 className="font-primary-black text-[6rem] leading-none text-font-danger">
        500
      </h1>
      <h2 className="mb-3 mt-1 font-primary-bold text-2xl text-font">
        Internal Server Error
      </h2>
      {message && (
        <p className="mb-6 text-base text-font-subtlest">{message}</p>
      )}
      {href && (
        <a
          href={href}
          className={[
            "rounded px-6 py-2 text-base font-primary-bold",
            "bg-background-brand-bold text-font-inverse",
            "hover:bg-background-brand-bold-hovered",
            "active:bg-background-brand-bold-pressed",
          ].join(" ")}
        >
          Go back to safety
        </a>
      )}
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
