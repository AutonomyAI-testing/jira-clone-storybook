import { BrandPanel } from "./brand-panel";
import { AuthForm } from "./auth-form";

export const LoginView = () => {
  return (
    <div className="relative min-h-screen" style={{ background: "#0B0B0A" }}>
      {/* Film grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[9999]"
        style={{
          opacity: 0.045,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      {/* Split layout */}
      <div
        className="grid min-h-screen"
        style={{
          gridTemplateColumns: "1.05fr 0.95fr",
        }}
      >
        {/* Breakpoint: collapse to single column on mobile */}
        <style>{`
          @media (max-width: 920px) {
            .login-grid { grid-template-columns: 1fr !important; }
            .brand-panel { display: none !important; }
          }
        `}</style>

        <div
          className="grid min-h-screen login-grid"
          style={{
            display: "contents",
          }}
        >
          <BrandPanel />
          <AuthForm />
        </div>
      </div>
    </div>
  );
};
