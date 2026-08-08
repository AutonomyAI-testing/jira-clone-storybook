export const ErrorBase = ({ variant, message, href }: Props) => {
  const imgPath = `/images/error-${variant}.svg`;

  return (
    <div className="max-w-[500px] text-center">
      <img
        src={imgPath}
        alt="Server error"
        className="mx-auto mb-4 h-[350px] w-auto"
      />
      {href ? (
        <a
          href={href}
          className="max-w-[100px] text-lg hover:underline active:[color:var(--Red700)]"
          style={{ color: "var(--Red500)" }}
        >
          {message}
        </a>
      ) : (
        <span className="max-w-[100px] text-lg" style={{ color: "var(--Red500)" }}>{message}</span>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message: string;
  href: string;
}
