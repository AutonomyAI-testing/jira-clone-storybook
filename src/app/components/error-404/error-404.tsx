export const Error404 = ({ href = "/" }: Props) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-elevation-surface px-6 py-12">
      <div className="flex flex-col items-center text-center">
        {/* Wizard Robot Illustration */}
        <div className="mb-6 w-full max-w-[380px] sm:max-w-[440px]">
          <img
            src="/images/error-robot-wizard.jpg"
            alt="A friendly wizard robot shrugging — page not found"
            className="h-auto w-full object-contain"
            draggable={false}
          />
        </div>

        {/* 404 Heading */}
        <h1 className="font-primary-black text-[96px] leading-none tracking-tight text-font-brand">
          404
        </h1>

        {/* Error message */}
        <p className="mb-2 mt-3 font-primary-black text-2xl text-font-danger">
          Page not found
        </p>
        <p className="mb-8 max-w-[340px] font-primary-light text-base text-font-subtle">
          Looks like our wizard couldn't conjure up that page. It may have been
          moved, deleted, or never existed.
        </p>

        {/* CTA */}
        <a
          href={href}
          className="inline-flex items-center rounded-[3px] bg-background-brand-bold px-6 py-2.5 font-primary text-sm text-font-inverse transition-colors hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed focus:outline-none focus-visible:ring-2 focus-visible:ring-border-focused focus-visible:ring-offset-2"
        >
          Go back home
        </a>
      </div>
    </div>
  );
};

interface Props {
  href?: string;
}
