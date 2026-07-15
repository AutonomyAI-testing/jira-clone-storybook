export const ErrorGeneral = ({
  title = "Something went wrong",
  message = "An unexpected error has occurred. Please try again or go back to safety.",
  href = "/",
  linkLabel = "Go back home",
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <img
        src="/images/error-wizard.svg"
        alt="Wizard robot error illustration"
        className="mx-auto h-[360px] w-auto"
      />
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-primary-black text-3xl text-font-danger">{title}</h1>
        <p className="max-w-[420px] font-primary-light text-base text-font-subtle">
          {message}
        </p>
      </div>
      {href && (
        <a
          href={href}
          className="flex cursor-pointer items-center justify-center gap-2 rounded p-2 bg-background-brand-bold text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed font-primary text-base px-5 py-2"
        >
          {linkLabel}
        </a>
      )}
    </div>
  );
};

interface Props {
  title?: string;
  message?: string;
  href?: string;
  linkLabel?: string;
}
