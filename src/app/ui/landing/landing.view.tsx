/**
 * LandingView component - the hero/splash screen for the application.
 * Displays a centered message with a headline and descriptive subtitle.
 * The red text (text-font-danger) and green border (border-border-success) create
 * visual emphasis for the landing page.
 */
export const LandingView = (): JSX.Element => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="text-center">
        <h1 className="font-primary-black text-6xl text-font-danger">
          Let's Find Your Ideal Space
        </h1>
        <h2 className="mt-4 rounded border-2 border-border-success p-4 font-primary text-2xl text-font-danger">
          Discover residential and commercial properties tailored to your needs
        </h2>
      </div>
    </div>
  );
};
