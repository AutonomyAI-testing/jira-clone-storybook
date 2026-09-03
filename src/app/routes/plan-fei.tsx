export default function PlanFeiRoute() {
  return (
    <div
      className="h-screen w-screen"
      style={{
        backgroundImage: "url('/images/plan-fei.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex h-full w-full items-center justify-center">
        <h1
          className="text-6xl font-bold text-black"
          style={{ color: '#000000', textShadow: '0 2px 8px rgba(255, 255, 255, 0.9)' }}
        >
          Plan Fei
        </h1>
      </div>
    </div>
  );
}
