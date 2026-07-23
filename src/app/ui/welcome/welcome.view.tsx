import { SuddenlySpacesLogo } from "./suddenly-spaces-logo";

export const WelcomeView = () => {
  return (
    <main className="flex h-full items-center justify-center bg-elevation-surface">
      <h1 aria-label="SuddenlySpaces">
        <SuddenlySpacesLogo className="w-[393px] max-w-[80vw] text-font-danger" />
      </h1>
    </main>
  );
};
