export const Error404 = ({ href = "/" }: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-6 py-16 text-center">
      {/* Illustration */}
      <div className="mb-10 w-full max-w-[520px]">
        <img
          src="/images/error-404-wizard.jpg"
          alt="A wizard robot illustration in the style of Leonardo da Vinci's Vitruvian Man"
          className="mx-auto w-full"
        />
      </div>

      {/* Error code */}
      <h1 className="font-primary-black mb-3 text-9xl text-icon-brand">404</h1>

      {/* Headline */}
      <h2 className="font-primary-bold mb-4 text-3xl text-font">
        Lost in the digital void
      </h2>

      {/* Description */}
      <p className="font-primary mb-10 max-w-[480px] text-lg text-font-subtle">
        Even our wizard robot couldn't conjure up the page you were looking for.
        It may have moved, been deleted, or never existed at all.
      </p>

      {/* Back home button */}
      <a
        href={href}
        className="inline-flex items-center rounded bg-background-brand-bold px-8 py-3 font-primary-bold text-base text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
      >
        Back to home
      </a>
    </div>
  );
};

interface Props {
  href?: string;
}
