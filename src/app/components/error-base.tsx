export const ErrorBase = ({ variant, message, href }: Props) => {
  const imgPath = "/images/error-character.png";

  return (
    <div className="max-w-[500px] text-center">
      <h1 className="mb-2 text-[120px] font-black leading-none tracking-tight text-font opacity-10 select-none">
        {variant}
      </h1>
      <img
        src={imgPath}
        alt="Error character"
        className="mx-auto mb-4 h-[450px] w-[450px] object-contain"
      />
      {href ? (
        <a
          href={href}
          className="max-w-[100px] text-lg text-link hover:underline active:text-link-pressed"
        >
          {message}
        </a>
      ) : (
        <span className="max-w-[100px] text-lg text-font">{message}</span>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message: string;
  href: string;
}
