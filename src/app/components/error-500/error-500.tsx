export const Error500 = ({
  message = "Error 500: Server error",
  href,
}: Props) => {
  return (
    <div className="max-w-[500px] text-center">
      <img
        src="/images/error-500-custom.png"
        alt="500 Server Error"
        className="mx-auto mb-4 h-[350px] w-auto"
      />
      {href ? (
        <a
          href={href}
          className="max-w-[100px] text-lg text-font-danger hover:underline"
        >
          {message}
        </a>
      ) : (
        <span className="max-w-[100px] text-lg text-font-danger">{message}</span>
      )}
    </div>
  );
};

interface Props {
  message: string;
  href: string;
}
