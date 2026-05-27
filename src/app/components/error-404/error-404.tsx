import { Button } from "../button";

export const Error404 = ({
  href = "/",
  message = "The page you're looking for doesn't exist or has been moved.",
}: Props): JSX.Element => {
  const handleNavigate = () => {
    window.location.href = href;
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-4 py-8">
      <div className="flex flex-col items-center text-center">
        <h1
          className="mb-2 font-primary-black text-9xl"
          style={{ color: "var(--Blue700)" }}
        >
          404
        </h1>

        <h2 className="mb-8 text-3xl font-primary-bold" style={{ color: "var(--Red500)" }}>
          Oops! Page Not Found
        </h2>

        <img
          src="/images/error-404.svg"
          alt="Wizard robot lost in space"
          className="mb-8 h-[350px] w-auto"
        />

        <p className="mb-8 max-w-md text-lg text-font-subtle">
          {message}
        </p>

        {/* Navigate using window.location for full page navigation instead of router 
            to ensure proper 404 handling and state reset */}
        <Button
          color="primary"
          size="lg"
          onClick={handleNavigate}
          className="mt-4"
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
};

interface Props {
  href?: string;
  message?: string;
}
