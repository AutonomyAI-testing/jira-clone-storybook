export const Error404 = ({ href = "/" }: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-6 py-12">
      {/* Wizard robot illustration */}
      <img
        src="/images/error-404-wizard.jpg"
        alt="A steampunk wizard robot — our magical guide for lost pages"
        className="mb-6 w-full max-w-lg object-contain"
        draggable={false}
      />

      {/* 404 error code */}
      <h1 className="font-primary-black mb-3 text-[96px] leading-none tracking-tight text-font">
        404
      </h1>

      {/* Friendly heading */}
      <h2 className="font-primary-bold mb-3 text-center text-2xl text-font-danger">
        Looks like this page vanished into the void!
      </h2>

      {/* Description */}
      <p className="font-primary mb-8 max-w-sm text-center text-base text-font-subtle">
        Even our wizard-bot couldn't conjure this page. It may have been moved,
        deleted, or perhaps it never existed in the first place.
      </p>

      {/* Go home button */}
      <a
        href={href}
        className="font-primary-bold inline-flex items-center rounded px-5 py-2.5 text-sm text-font-inverse bg-background-brand-bold hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand transition-colors"
      >
        Go back home
      </a>
    </div>
  );
};

interface Props {
  href?: string;
}
