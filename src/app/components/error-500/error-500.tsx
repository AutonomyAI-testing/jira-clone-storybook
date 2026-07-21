export const Error500 = ({
  errorCode = "500",
  title = "Internal server error",
  message = "Oops! Something went wrong on our end. Please try again later.",
  href,
  linkText = "Go to homepage",
}: Props) => {
  return (
    <div className="flex flex-col items-center text-center max-w-[500px] mx-auto">
      <img
        src="/images/error-500.svg"
        alt="500 server error illustration"
        className="h-[350px] w-auto mb-6"
      />
      <p className="font-primary-black text-5xl text-font-success mb-2">
        {errorCode}
      </p>
      <h1 className="font-primary-black text-3xl text-font mb-4">
        {title}
      </h1>
      <p className="font-primary-light text-lg text-font-subtle mb-8">
        {message}
      </p>
      {href && (
        <a
          href={href}
          className="flex cursor-pointer items-center justify-center gap-2 rounded px-8 py-2 text-lg font-primary-bold bg-background-brand-bold text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
          style={{ textDecoration: "none" }}
        >
          {linkText}
        </a>
      )}
    </div>
  );
};

interface Props {
  errorCode?: string;
  title?: string;
  message?: string;
  href?: string;
  linkText?: string;
}
