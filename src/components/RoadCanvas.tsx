import { useEffect, useRef } from "react";

type Vehicle = {
  kind: "car" | "bike" | "van";
  lane: number;
  x: number;
  speed: number;
  scale: number;
  opacity: number;
  dir: 1 | -1;
};

const GOLD: [number, number, number] = [212, 175, 55];
const GOLD_BRIGHT: [number, number, number] = [240, 201, 122];

function drawCar(ctx: CanvasRenderingContext2D, x: number, y: number, s: number, dir: number, op: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(dir, 1);
  ctx.globalAlpha = op;
  const w = 46 * s;
  const h = 16 * s;
  ctx.fillStyle = `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},0.85)`;
  ctx.beginPath();
  roundRect(ctx, -w / 2, -h / 2, w, h, 6 * s);
  ctx.fill();
  // cabin
  ctx.fillStyle = `rgba(10,10,12,0.55)`;
  ctx.beginPath();
  roundRect(ctx, -w * 0.12, -h * 1.05, w * 0.42, h * 0.9, 4 * s);
  ctx.fill();
  // wheels
  ctx.fillStyle = "rgba(10,10,12,0.9)";
  ctx.beginPath();
  ctx.arc(-w * 0.28, h * 0.5, 3.6 * s, 0, Math.PI * 2);
  ctx.arc(w * 0.28, h * 0.5, 3.6 * s, 0, Math.PI * 2);
  ctx.fill();
  // headlight
  ctx.fillStyle = `rgba(${GOLD_BRIGHT[0]},${GOLD_BRIGHT[1]},${GOLD_BRIGHT[2]},0.9)`;
  ctx.beginPath();
  ctx.arc(w / 2, 0, 2 * s, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawBike(ctx: CanvasRenderingContext2D, x: number, y: number, s: number, dir: number, op: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(dir, 1);
  ctx.globalAlpha = op;
  ctx.strokeStyle = `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},0.85)`;
  ctx.lineWidth = 2.2 * s;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-10 * s, 6 * s);
  ctx.lineTo(2 * s, -6 * s);
  ctx.lineTo(10 * s, 6 * s);
  ctx.moveTo(2 * s, -6 * s);
  ctx.lineTo(-2 * s, 6 * s);
  ctx.stroke();
  ctx.fillStyle = "rgba(10,10,12,0.9)";
  ctx.beginPath();
  ctx.arc(-10 * s, 6 * s, 3.2 * s, 0, Math.PI * 2);
  ctx.arc(10 * s, 6 * s, 3.2 * s, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = `rgba(${GOLD_BRIGHT[0]},${GOLD_BRIGHT[1]},${GOLD_BRIGHT[2]},0.9)`;
  ctx.beginPath();
  ctx.arc(11 * s, 6 * s, 1.6 * s, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawVan(ctx: CanvasRenderingContext2D, x: number, y: number, s: number, dir: number, op: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(dir, 1);
  ctx.globalAlpha = op;
  const w = 62 * s;
  const h = 22 * s;
  ctx.fillStyle = `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},0.8)`;
  ctx.beginPath();
  roundRect(ctx, -w / 2, -h / 2, w, h, 5 * s);
  ctx.fill();
  ctx.fillStyle = "rgba(10,10,12,0.5)";
  ctx.beginPath();
  roundRect(ctx, w * 0.14, -h * 0.42, w * 0.3, h * 0.5, 3 * s);
  ctx.fill();
  ctx.fillStyle = "rgba(10,10,12,0.9)";
  ctx.beginPath();
  ctx.arc(-w * 0.3, h * 0.5, 4.2 * s, 0, Math.PI * 2);
  ctx.arc(w * 0.3, h * 0.5, 4.2 * s, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = `rgba(${GOLD_BRIGHT[0]},${GOLD_BRIGHT[1]},${GOLD_BRIGHT[2]},0.9)`;
  ctx.beginPath();
  ctx.arc(w / 2, -h * 0.15, 2 * s, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export default function RoadCanvas({ intensity = "normal" }: { intensity?: "low" | "normal" }) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(devicePixelRatio || 1, 2);
    let LW = c.offsetWidth;
    let LH = c.offsetHeight;
    c.width = LW * dpr;
    c.height = LH * dpr;
    ctx.scale(dpr, dpr);

    const density = intensity === "low" ? 0.6 : 1;
    const laneCount = 5;
    const laneY = (i: number) => (LH / (laneCount + 1)) * (i + 1);

    const vehicleCount = Math.round(9 * density);
    const kinds: Vehicle["kind"][] = ["car", "car", "bike", "van"];
    const vehicles: Vehicle[] = Array.from({ length: vehicleCount }, (_, i) => {
      const dir: 1 | -1 = i % 2 === 0 ? 1 : -1;
      return {
        kind: kinds[i % kinds.length],
        lane: i % laneCount,
        x: Math.random() * LW,
        speed: (0.35 + Math.random() * 0.55) * dir,
        scale: 0.85 + Math.random() * 0.55,
        opacity: 0.16 + Math.random() * 0.2,
        dir,
      };
    });

    const dashOffset = { v: 0 };

    const draw = () => {
      ctx.clearRect(0, 0, LW, LH);

      // faint horizon glow
      const grad = ctx.createRadialGradient(LW * 0.5, LH * 0.15, 0, LW * 0.5, LH * 0.15, LW * 0.6);
      grad.addColorStop(0, "rgba(212,175,55,0.05)");
      grad.addColorStop(1, "rgba(212,175,55,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, LW, LH);

      // lane dashed lines
      dashOffset.v -= 0.6;
      ctx.strokeStyle = "rgba(212,175,55,0.14)";
      ctx.lineWidth = 1;
      ctx.setLineDash([14, 14]);
      for (let i = 0; i < laneCount + 1; i++) {
        const y = (LH / (laneCount + 1)) * i + (LH / (laneCount + 1)) / 2 - LH / (laneCount + 1) / 2;
        ctx.lineDashOffset = dashOffset.v;
        ctx.beginPath();
        ctx.moveTo(0, laneY(i) - (LH / (laneCount + 1)) / 2);
        ctx.lineTo(LW, laneY(i) - (LH / (laneCount + 1)) / 2);
        ctx.stroke();
        void y;
      }
      ctx.setLineDash([]);

      for (const v of vehicles) {
        v.x += v.speed;
        if (v.speed > 0 && v.x > LW + 60) v.x = -60;
        if (v.speed < 0 && v.x < -60) v.x = LW + 60;
        const y = laneY(v.lane);
        if (v.kind === "car") drawCar(ctx, v.x, y, v.scale, v.dir, v.opacity);
        else if (v.kind === "bike") drawBike(ctx, v.x, y, v.scale, v.dir, v.opacity);
        else drawVan(ctx, v.x, y, v.scale, v.dir, v.opacity);
      }

      raf.current = requestAnimationFrame(draw);
    };
    raf.current = requestAnimationFrame(draw);

    const ro = new ResizeObserver(() => {
      LW = c.offsetWidth;
      LH = c.offsetHeight;
      c.width = LW * dpr;
      c.height = LH * dpr;
      ctx.scale(dpr, dpr);
    });
    ro.observe(c);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      ro.disconnect();
    };
  }, [intensity]);

  return <canvas ref={ref} className="road-canvas" />;
}
