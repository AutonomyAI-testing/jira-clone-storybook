export const Error404 = ({
  message = "Oops! Page not found.",
  href,
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img
        src="/images/error-404-wizard.jpg"
        alt="404 - Wizard robot mascot"
        className="mx-auto mb-4 h-[440px] w-[440px] object-cover"
      />
      <h1 className="mb-2 font-primary-black text-8xl text-font-danger">404</h1>
      <p className="mb-6 font-primary text-xl text-font-subtle">{message}</p>
      {href && (
        <a
          href={href}
          className="rounded bg-background-brand-bold px-6 py-2.5 font-primary-bold text-base text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
        >
          Go back home
        </a>
      )}
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
