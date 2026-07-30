import { Link } from "@remix-run/react";
import { useUserStore } from "@app/store/user.store";
import { Button } from "@app/components/button";

export const WelcomeView = (): JSX.Element => {
  const { user } = useUserStore();

  return (
    <div className="flex h-full items-center justify-center bg-elevation-surface px-4">
      <div className="animate-slide-up flex flex-col items-center gap-6 text-center">
        {/* Mascot illustration */}
        <img
          src="/images/wizard-robot.png"
          alt="Wizard robot mascot"
          width={220}
          height={220}
          className="select-none"
          draggable={false}
        />

        {/* Heading */}
        <h1 className="font-primary-black text-5xl text-font-danger">Welcome</h1>

        {/* Personalized greeting */}
        <p className="font-primary-light text-lg text-font-subtle">
          Welcome back,{" "}
          <span className="font-primary-bold text-font">{user.name}</span>!
          Let&apos;s get to work.
        </p>

        {/* CTA */}
        <Link to="/projects">
          <Button color="primary" variant="contained" size="lg" className="mt-2 px-8">
            Go to Projects
          </Button>
        </Link>
      </div>
    </div>
  );
};
