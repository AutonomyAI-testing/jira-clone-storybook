export const ErrorWizard = ({
  message = "Oops! Something magical went wrong",
  href,
}: Props) => {
  return (
    <div className="max-w-[500px] text-center">
      <img
        src="/images/error-wizard.jpg"
        alt="Wizard robot"
        className="mx-auto mb-6 w-full max-w-[400px] h-auto"
      />
      {href ? (
        <a
          href={href}
          className="max-w-[100px] text-lg text-link hover:underline active:text-link-pressed"
        >
          {message}
        </a>
      ) : (
        <span className="max-w-[100px] text-lg text-font-danger">{message}</span>
      )}
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
