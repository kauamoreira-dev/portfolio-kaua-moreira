import { useEffect, useRef } from "react";

// Grid de pontos que reage lentamente ao cursor — sutil, apenas desktop.
export const HeroCanvas = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    let dots = [];
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      const gap = 38;
      for (let gx = gap / 2; gx < w; gx += gap)
        for (let gy = gap / 2; gy < h; gy += gap) dots.push({ x: gx, y: gy });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      mouse.x += (mouse.tx - mouse.x) * 0.055;
      mouse.y += (mouse.ty - mouse.y) * 0.055;
      const R = 200;
      for (const d of dots) {
        const dx = d.x - mouse.x;
        const dy = d.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const f = Math.max(0, 1 - dist / R);
        const a = 0.07 + f * 0.5;
        const s = 1 + f * 1.4;
        ctx.beginPath();
        ctx.fillStyle =
          f > 0.05
            ? `rgba(96, 145, 250, ${a})`
            : "rgba(148, 163, 184, 0.07)";
        ctx.arc(d.x, d.y, s, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.tx = e.clientX - rect.left;
      mouse.ty = e.clientY - rect.top;
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduced) {
      draw();
    } else {
      window.addEventListener("mousemove", onMove, { passive: true });
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_75%_70%_at_50%_40%,black,transparent)]"
    />
  );
};
