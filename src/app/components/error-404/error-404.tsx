// Color constants for styling
const COLORS = {
  background: "var(--Neutral100)",
  numberColor: "var(--Blue700)",
  headingColor: "var(--Red700)",
  textColor: "var(--Neutral800)",
  buttonColor: "var(--Blue700)",
  buttonHoverColor: "var(--Blue800)",
  buttonTextColor: "var(--Neutral0)",
} as const;

export const Error404 = ({
  message = "Looks like this page took a wrong turn",
  href = "/",
}: Props): JSX.Element => {
  // Handle button hover state by changing background color
  const handleButtonMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLAnchorElement).style.backgroundColor =
      COLORS.buttonHoverColor;
  };

  const handleButtonMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLAnchorElement).style.backgroundColor = COLORS.buttonColor;
  };

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-4 py-12"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Main container with flexbox centering and gap between sections */}
      <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-8">
        {/* Large 404 error code */}
        <div
          className="text-[120px] font-primary-black leading-none"
          style={{ color: COLORS.numberColor }}
        >
          404
        </div>

        {/* Wizard robot illustration */}
        <img
          src="/images/error-404.svg"
          alt="Wizard robot"
          className="h-auto w-full max-w-[400px]"
        />

        {/* Page not found heading */}
        <h1
          className="text-center font-primary-bold text-3xl"
          style={{ color: COLORS.headingColor }}
        >
          Oops! Page not found
        </h1>

        {/* Customizable message text */}
        <p
          className="max-w-md text-center text-lg"
          style={{ color: COLORS.textColor }}
        >
          {message}
        </p>

        {/* CTA button with hover state */}
        <a
          href={href}
          className="mt-4 rounded-md px-8 py-3 font-primary-bold text-lg transition-all duration-200"
          style={{
            backgroundColor: COLORS.buttonColor,
            color: COLORS.buttonTextColor,
          }}
          onMouseEnter={handleButtonMouseEnter}
          onMouseLeave={handleButtonMouseLeave}
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
