export const Error404 = ({ message = "Error 404: Not Found", href }: Props) => {
  return (
    <div className="flex flex-col items-center text-center max-w-[560px] px-6 py-10">
      <p className="text-[120px] font-black leading-none text-font select-none opacity-10">
        404
      </p>
      <img
        src="/images/error-404.svg"
        alt="404 Wizard Robot"
        className="h-[320px] w-auto -mt-6 mb-4"
      />
      <h2 className="text-2xl font-bold text-font mb-2">Page not found</h2>
      {href ? (
        <a
          href={href}
          className="mt-4 inline-block rounded-md bg-background-brand-bold px-6 py-2 text-sm font-medium text-white hover:bg-background-brand-bold-hovered transition-colors"
        >
          {message}
        </a>
      ) : (
        <p className="text-font-subtle text-base mt-2">{message}</p>
      )}
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
