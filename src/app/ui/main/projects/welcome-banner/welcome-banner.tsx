import { useUserStore } from "@app/store/user.store";
import { Button } from "@app/components/button";
import { Link } from "@remix-run/react";

export const WelcomeBanner = (): JSX.Element => {
  const { user } = useUserStore();
  const firstName = user.name.split(" ")[0];

  return (
    <div className="relative overflow-hidden rounded-lg bg-background-brand-bold px-8 py-6 text-font-inverse shadow-md">
      {/* Background decorative stars */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5%" cy="20%" r="3" fill="white" />
        <circle cx="10%" cy="70%" r="2" fill="white" />
        <circle cx="15%" cy="40%" r="4" fill="white" />
        <circle cx="22%" cy="85%" r="2" fill="white" />
        <circle cx="30%" cy="10%" r="3" fill="white" />
        <circle cx="40%" cy="60%" r="2" fill="white" />
        <circle cx="55%" cy="25%" r="4" fill="white" />
        <circle cx="65%" cy="80%" r="2" fill="white" />
        <circle cx="80%" cy="15%" r="3" fill="white" />
        <circle cx="90%" cy="55%" r="2" fill="white" />
        <circle cx="95%" cy="30%" r="4" fill="white" />
        <circle cx="72%" cy="40%" r="2" fill="white" />
      </svg>

      <div className="relative flex items-center justify-between gap-6">
        {/* Text content */}
        <div className="flex flex-col gap-3">
          <div>
            <h2 className="font-primary-black text-3xl text-white">
              Welcome back, {firstName}! 🎉
            </h2>
            <p className="mt-2 font-primary-light text-base text-white opacity-90">
              Ready to tackle today's work? Your projects are waiting for you.
              Keep the momentum going!
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="new">
              <Button
                variant="contained"
                color="neutral"
                className="border border-white/20 bg-white/15 text-white hover:bg-white/25 active:bg-white/30"
              >
                Create Project
              </Button>
            </Link>
            <p className="font-primary-light text-sm text-white opacity-70">
              or pick up where you left off below
            </p>
          </div>
        </div>

        {/* Wizard mascot */}
        <div className="flex-shrink-0">
          <img
            src="/images/wizard-mascot.png"
            alt="Wizard mascot"
            className="h-[160px] w-auto drop-shadow-lg"
            style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))" }}
          />
        </div>
      </div>
    </div>
  );
};
