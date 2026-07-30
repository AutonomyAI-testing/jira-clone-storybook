import { Link } from "@remix-run/react";
import { Button } from "@app/components/button";

export const WelcomeView = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background">
      <img
        src="/images/welcome-mascot.png"
        alt="Friendly wizard robot mascot"
        className="h-64 w-auto drop-shadow-lg"
        draggable={false}
      />
      <h1 className="font-primary-black text-6xl text-font">Welcome</h1>
      <p className="max-w-sm text-center font-primary-light text-lg text-font-subtle">
        Your team's project management hub. Create projects, track issues, and
        collaborate in real time.
      </p>
      <Link to="/projects">
        <Button color="primary" size="lg" className="px-10">
          Get started
        </Button>
      </Link>
    </div>
  );
};
