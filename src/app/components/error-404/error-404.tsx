import { Button } from "../button";

export const Error404 = ({ message = "Error 404: Not Found", href }: Props) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url(/images/wizard-robot.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundSize: "320px auto",
      }}
    >
      <div
        className="flex flex-col items-center justify-start text-center"
        style={{ minHeight: "100vh", paddingTop: "96px" }}
      >
        <h1
          className="font-primary-black text-5xl"
          style={{ color: "var(--color-font)", marginBottom: "12px" }}
        >
          404
        </h1>
        <p className="text-lg text-font-subtle" style={{ maxWidth: "420px" }}>
          {message}
        </p>
        {href ? (
          <a href={href} style={{ marginTop: "20px", textDecoration: "none" }}>
            <Button color="primary" variant="contained">
              Go back home
            </Button>
          </a>
        ) : null}
      </div>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
