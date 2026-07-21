const DEFAULT_ERROR_CODE = "404";
const DEFAULT_TITLE = "Page not found";
const DEFAULT_MESSAGE = "It seems that you have lost! Go to the main page";
const DEFAULT_LINK_TEXT = "Back to home";
const ILLUSTRATION_SRC = "/images/error-404-wizard.png";

export const Error404 = ({
  errorCode = DEFAULT_ERROR_CODE,
  title = DEFAULT_TITLE,
  message = DEFAULT_MESSAGE,
  href,
  linkText = DEFAULT_LINK_TEXT,
}: Props) => {
  return (
    <div className="mx-auto flex max-w-[500px] flex-col items-center text-center">
      <img
        src={ILLUSTRATION_SRC}
        alt="Friendly wizard robot pointing the way"
        className="mx-auto mb-6 h-[350px] w-auto object-contain"
      />
      <p className="mb-2 font-primary-black text-5xl text-font-brand">
        {errorCode}
      </p>
      <h1 className="mb-3 font-primary-black text-3xl text-font">{title}</h1>
      <p className="mb-6 font-primary text-lg text-font-subtle">{message}</p>
      {href ? (
        <a
          href={href}
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded bg-background-brand-bold px-8 py-2 font-primary-bold text-lg text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
          style={{ textDecoration: "none" }}
        >
          {linkText}
        </a>
      ) : null}
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
