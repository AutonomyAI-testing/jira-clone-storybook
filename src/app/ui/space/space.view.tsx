import { useEffect, useRef } from "react";

export const SpaceView = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate stars
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.008 + 0.002,
      phase: Math.random() * Math.PI * 2,
    }));

    let animId: number;
    let t = 0;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;

      // Night sky gradient
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "#01030f");
      grad.addColorStop(0.45, "#050c2e");
      grad.addColorStop(1, "#0a1a4a");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Draw stars with twinkling
      stars.forEach((star) => {
        const alpha = 0.4 + 0.6 * Math.abs(Math.sin(t * star.speed + star.phase));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      // Subtle nebula glow near center-top
      const nebula = ctx.createRadialGradient(w * 0.65, h * 0.2, 0, w * 0.65, h * 0.2, w * 0.3);
      nebula.addColorStop(0, "rgba(80, 50, 160, 0.15)");
      nebula.addColorStop(0.5, "rgba(30, 20, 90, 0.08)");
      nebula.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = nebula;
      ctx.fillRect(0, 0, w, h);

      t++;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      className="relative flex h-screen w-screen items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#01030f" }}
    >
      {/* Animated star canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />

      {/* "Space" text */}
      <h1
        className="relative z-10 select-none text-center font-primary-black leading-none"
        style={{
          fontSize: "clamp(5rem, 18vw, 18rem)",
          color: "#ff0000",
          textShadow:
            "0 0 60px rgba(255, 60, 60, 0.7), 0 0 120px rgba(200, 20, 20, 0.4)",
          letterSpacing: "-0.02em",
        }}
      >
        Space
      </h1>
    </div>
  );
};
