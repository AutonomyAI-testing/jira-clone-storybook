import { CSSProperties } from "react";
import cx from "classix";
import { Button } from "../button";

export const Error404Wizard = ({
  message = "Oops! You've cast the wrong spell!",
  subMessage = "The page you're looking for has vanished into the wizard's dimensional portal.",
  href = "/",
  buttonText = "Return Home",
}: Props): JSX.Element => {
  const styles = `
    @keyframes fade-in-404 {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes float-404 {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-12px);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .error-404-wizard-image {
        animation: none !important;
      }
    }

    .error-404-wizard-image {
      animation: fade-in-404 0.6s ease-in-out,
                 float-404 3s ease-in-out infinite;
      animation-fill-mode: both;
      animation-delay: 0s, 0.6s;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="mx-auto max-w-[500px] pt-[10vh] text-center">
        <img
          src="/images/error-404-wizard.svg"
          alt="404 Not Found - Wizard robot character"
          className="error-404-wizard-image mx-auto mb-8 h-[350px] w-auto"
        />
        <h1 className="font-primary-black text-5xl" style={{ color: "var(--Red600)" }}>
          {message}
        </h1>
        <p className="mb-8 mt-3 font-primary-light text-lg text-font-subtle">
          {subMessage}
        </p>
        <Button
          color="primary"
          variant="contained"
          size="md"
          className="mx-auto"
          onClick={() => {
            window.location.href = href;
          }}
        >
          {buttonText}
        </Button>
      </div>
    </>
  );
};

interface Props {
  /**
   * Custom headline message for the 404 page
   * @default "Oops! You've cast the wrong spell!"
   */
  message?: string;

  /**
   * Custom subheading/description text
   * @default "The page you're looking for has vanished into the wizard's dimensional portal."
   */
  subMessage?: string;

  /**
   * URL to navigate to when button is clicked
   * @default "/"
   */
  href?: string;

  /**
   * Button label text
   * @default "Return Home"
   */
  buttonText?: string;
}
