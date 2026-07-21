import { Link } from "@remix-run/react";
import { Button } from "@app/components/button";
import { SelctTheme } from "@app/ui/main/header/select-theme";

export const WelcomeView = (): JSX.Element => {
  return (
    <div className="flex h-full min-h-screen flex-col bg-elevation-surface">
      <div
        className="h-1.5 w-full bg-background-brand-boldest"
        aria-hidden
      />

      <header className="flex items-center justify-end gap-3 px-6 py-4 sm:px-8">
        <Link to="/login" className="flex items-center">
          <Button
            variant="text"
            color="primary"
            className="px-3 py-1.5 font-primary-bold leading-none"
          >
            Login
          </Button>
        </Link>
        <SelctTheme showSettingsIcon />
      </header>

      <main className="flex flex-1 items-center justify-center px-6 pb-16 sm:px-10">
        <div className="flex w-full max-w-4xl flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-16 lg:gap-20">
          <img
            src="/images/welcome-mascot.png"
            alt="Friendly wizard robot"
            className="h-auto w-[220px] shrink-0 select-none sm:w-[260px] md:w-[300px]"
            draggable={false}
          />

          <div className="flex w-full max-w-md flex-col items-center text-center md:items-start md:text-left">
            <h1 className="font-primary-black text-3xl leading-tight text-font-danger sm:text-4xl md:text-[2.5rem] md:leading-[1.15]">
              Are you ready to take off?
            </h1>

            <p className="mt-6 font-primary text-base leading-relaxed text-font sm:text-lg">
              jira_clone is a companion tool for your jira that takes care of
              all the busywork. Our bots and agents automate tasks
              end-to-end—so that your team can focus.
            </p>

            <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
              <Link to="/login" className="w-full sm:w-auto">
                <Button
                  color="primary"
                  size="lg"
                  className="w-full min-w-[148px] px-10 py-3.5 font-primary-bold sm:w-auto"
                >
                  Login
                </Button>
              </Link>
              <Link to="/login" className="w-full sm:w-auto">
                <Button
                  color="primary"
                  variant="text"
                  size="lg"
                  className="w-full min-w-[148px] border-2 border-border-brand bg-elevation-surface px-10 py-3.5 font-primary-bold text-font-brand hover:bg-background-brand-subtlest-hovered sm:w-auto"
                >
                  Register
                </Button>
              </Link>
            </div>

            <Link
              to="/login"
              className="mt-6 font-primary text-sm text-font-subtle hover:text-font-brand"
            >
              Already have an account
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
