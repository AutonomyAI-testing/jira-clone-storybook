// Button styling constants for consistent styling across primary and secondary actions
const primaryButtonClassName =
  "inline-flex items-center justify-center gap-2 rounded px-6 py-2 text-base font-medium bg-background-brand-bold text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed transition-colors";
const secondaryButtonClassName =
  "inline-flex items-center justify-center gap-2 rounded px-6 py-2 text-base font-medium bg-background-neutral text-font hover:bg-background-neutral-hovered active:bg-background-neutral-pressed transition-colors";

export const Error404 = ({
  heading = "Oops! Lost in the Magic?",
  message = "Looks like this page vanished into thin air. Even our wizard robot can't find it!",
  homeHref = "/",
  projectsHref = "/projects",
  showProjectsButton = true,
  imagePath = "/images/error-404.svg",
  href,
}: Props): JSX.Element => {
  // Support legacy href prop for backward compatibility with existing implementations
  const finalHomeHref = href || homeHref;

  return (
    <div className="max-w-[520px] text-center">
      <img
        src={imagePath}
        alt="Robot wizard looking for the page"
        className="mx-auto mb-6 h-[320px] w-auto cursor-pointer transition-transform duration-300 hover:scale-105"
      />

      <h1 className="mb-3 text-3xl font-bold text-font">{heading}</h1>

      <p className="mb-8 text-base text-font-subtle">{message}</p>

      <div className="flex flex-wrap justify-center gap-4">
        <a href={finalHomeHref} className={primaryButtonClassName}>
          Go Home
        </a>

        {showProjectsButton && (
          <a href={projectsHref} className={secondaryButtonClassName}>
            Browse Projects
          </a>
        )}
      </div>
    </div>
  );
};

interface Props {
  heading?: string;
  message?: string;
  homeHref?: string;
  projectsHref?: string;
  showProjectsButton?: boolean;
  imagePath?: string;
  // Legacy compatibility
  href?: string;
}
