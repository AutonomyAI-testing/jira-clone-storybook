import { Link } from "@remix-run/react";
import { Button } from "@app/components/button";

export const WelcomeView = (): JSX.Element => {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6 text-center">
      <img
        src="/images/wizard-mascot.png"
        alt="Wizard mascot"
        width={220}
        height={258}
        className="mb-8 drop-shadow-md"
      />
      <h1 className="font-primary-black text-5xl text-font-danger">
        Welcome to Jira Clone
      </h1>
      <p className="mt-4 max-w-[480px] font-primary-light text-lg text-font-subtle">
        A simple, collaborative project manager. Create projects, track issues,
        and ship work together — in real time.
      </p>
      <div className="mt-8 flex gap-3">
        <Link to="/login">
          <Button size="lg" color="primary" variant="contained">
            Get started
          </Button>
        </Link>
        <a
          href="https://github.com/daniserrano7/jira-clone"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" color="neutral" variant="subtlest">
            View on GitHub
          </Button>
        </a>
      </div>
    </div>
  );
};
