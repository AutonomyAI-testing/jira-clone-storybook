export const ErrorBase = ({ variant, message, href }: Props) => {
  const imgPath = variant === "404" ? `/images/error-404.png` : `/images/error-${variant}.svg`;

  return (
    <div className="max-w-[500px] text-center">
      <h1 className="mb-2 text-[120px] font-black leading-none tracking-tight text-font opacity-10 select-none">
        {variant}
      </h1>
      <img
        src={imgPath}
        alt="Server error"
        className="mx-auto mb-4 h-[420px] w-auto"
      />
      {href ? (
        <a
          href={href}
          className="max-w-[100px] text-lg text-link hover:underline active:text-link-pressed"
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
  variant: "500" | "404";
  message: string;
  href: string;
}
