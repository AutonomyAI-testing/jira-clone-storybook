import { useNavigate } from "@remix-run/react";
import { Button } from "@app/components/button";

export const WelcomeView = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-8 text-center">
      <h1 className="font-primary-black text-5xl text-font md:text-7xl">
        Let’s Find Your Ideal Space
      </h1>
      <p className="mt-3 font-primary-light text-xl text-font-subtle md:text-2xl">
        Discover residential and commercial properties tailored to your needs
      </p>
      <Button className="mt-8" size="lg" onClick={() => navigate("/projects")}>
        Get started
      </Button>
    </div>
  );
};
