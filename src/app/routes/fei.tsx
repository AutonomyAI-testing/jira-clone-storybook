export default function FeiRoute() {
  return (
    <div
      className="flex h-screen w-screen items-center justify-center"
      style={{
        backgroundImage: "url(/images/fei-bg.png)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <span
        className="text-font-danger text-8xl font-bold rounded-xl px-8 py-4"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.6)", backdropFilter: "blur(4px)" }}
      >
        Fei
      </span>
    </div>
  );
}
