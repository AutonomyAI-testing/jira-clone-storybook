export const Error500 = ({
  message = "Error 500: Server error",
  href,
}: Props) => {
  return (
    <div className="max-w-[500px] text-center">
      <img
        src="/images/error-500.svg"
        alt="Server error"
        className="mx-auto mb-4 h-[350px] w-auto"
      />
      {href ? (
        <a
          href={href}
          className="max-w-[100px] text-lg hover:underline active:text-link-pressed"
          style={{ color: "var(--Red600)" }}
        >
          {message}
        </a>
      ) : (
        <span
          className="max-w-[100px] text-lg"
          style={{ color: "var(--Red600)" }}
        >
          {message}
        </span>
      )}
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
