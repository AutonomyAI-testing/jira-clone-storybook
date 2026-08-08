interface Props {
  isLoading?: boolean;
  isDisabled?: boolean;
}

const SkeletonLoader = (): JSX.Element => (
  <div className="w-full space-y-6">
    <div
      className="mx-auto max-w-4xl animate-pulse rounded-lg bg-gradient-to-r from-background-subtlest via-background-subtle to-background-subtlest bg-[length:1000px_100%]"
      style={{
        height: "80px",
      }}
    />
    <div
      className="mx-auto max-w-2xl animate-pulse rounded-lg bg-gradient-to-r from-background-subtlest via-background-subtle to-background-subtlest bg-[length:1000px_100%]"
      style={{
        height: "32px",
      }}
    />
  </div>
);

export const Hero = ({
  isLoading = false,
  isDisabled = false,
}: Props): JSX.Element => {
  const containerClasses = `flex min-h-screen flex-col items-center justify-center gap-6 bg-[#f5f5f5] px-6 py-24 ${
    isDisabled ? "opacity-50" : ""
  }`;

  return (
    <div className={containerClasses}>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <>
          <h1
            className={`max-w-4xl text-center font-primary-black ${
              isDisabled ? "text-font-disabled" : "text-black"
            }`}
            style={{
              fontSize: "64px",
              lineHeight: "1.2",
            }}
          >
            Let&apos;s Find Your Ideal Space
          </h1>
          <p
            className={`text-center font-primary text-2xl ${
              isDisabled ? "text-font-disabled" : "text-black"
            }`}
            style={{
              lineHeight: "1.2",
            }}
          >
            Discover residential and commercial properties tailored to your
            needs
          </p>
        </>
      )}
    </div>
  );
};
