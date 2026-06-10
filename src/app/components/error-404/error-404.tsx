import { Button } from "../button";

export const Error404 = ({
  headline = "Oops! You've wandered into uncharted territory",
  message = "Our wizard couldn't conjure this page into existence. Let's get you back home.",
  href = "/",
}: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-4 py-8">
      <style>{`
        @keyframes gentle-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .float-animation {
          animation: gentle-float 4s ease-in-out infinite;
        }
      `}</style>

      {/* Main container */}
      <div className="flex max-w-[900px] flex-col items-center gap-6">
        {/* Illustration with float animation */}
        <div className="float-animation">
          <img
            src="/images/error-404.svg"
            alt="Wizard robot in an adventure"
            width="400"
            height="400"
            className="h-[350px] w-auto sm:h-[420px] md:h-[500px]"
          />
        </div>

        {/* 404 Big Display */}
        <div
          className="text-center font-primary-black"
          style={{
            fontSize: "clamp(80px, 15vw, 180px)",
            lineHeight: "1",
            color: "var(--Blue700)",
          }}
        >
          404
        </div>

        {/* Headline */}
        <h1
          className="text-center font-primary-bold text-2xl md:text-3xl"
          style={{ color: "var(--Neutral1000)" }}
        >
          {headline}
        </h1>

        {/* Descriptive subtitle */}
        <p className="max-w-[500px] text-center text-lg text-font-subtle md:text-xl">
          {message}
        </p>

        {/* Home button */}
        <div className="mt-4">
          <a href={href}>
            <Button color="primary" variant="contained" size="lg">
              ✨ Return Home ✨
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

interface Props {
  /**
   * Main headline text displayed above the message
   * @default "Oops! You've wandered into uncharted territory"
   */
  headline?: string;
  /**
   * Descriptive message text
   * @default "Our wizard couldn't conjure this page into existence. Let's get you back home."
   */
  message?: string;
  /**
   * URL to link to when clicking the home button
   * @default "/"
   */
  href?: string;
}
