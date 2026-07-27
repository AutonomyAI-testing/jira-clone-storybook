export const Error500 = ({
  message = "Something went wrong on our end. Please try again later.",
  href,
}: Props) => {
  return (
    <div className="flex flex-col items-center text-center max-w-[500px]">
      <img
        src="/images/error-500.svg"
        alt="500 server error"
        className="mx-auto mb-4 h-[350px] w-auto"
      />
      <h1
        className="font-primary-black text-5xl text-font-danger mb-2"
        style={{ letterSpacing: "-0.02em" }}
      >
        500
      </h1>
      <h2 className="font-primary-bold text-2xl text-font mb-4">
        Internal server error
      </h2>
      <p className="font-primary-light text-lg text-font-subtle mb-8">
        {message}
      </p>
      {href && (
        <a
          href={href}
          className="bg-background-brand-bold text-font-inverse font-primary-bold text-lg rounded py-2 px-8 cursor-pointer transition duration-200 hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
          style={{ textDecoration: "none" }}
        >
          Go back home
        </a>
      )}
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
