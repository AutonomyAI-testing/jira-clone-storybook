import { Link } from "@remix-run/react";
import { Button } from "@app/components/button";

export const WelcomeView = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface">
      <div className="flex flex-col items-center gap-6 text-center">
        <img
          src="/images/welcome-mascot.png"
          alt="Friendly robot wizard mascot"
          className="w-[280px] drop-shadow-lg"
        />
        <h1 className="font-primary-black text-6xl text-font-danger">
          Welcome
        </h1>
        <p className="max-w-sm font-primary-light text-lg text-font-subtle">
          Your project management companion is ready. Let's get things done!
        </p>
        <Link to="/login">
          <Button aria-label="Get Started" className="mt-2 px-10 py-3 text-lg">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};
