import { useEffect, useRef } from "react";

const GOLD = "212,175,55";
const GOLD_BRIGHT = "240,201,122";
const BRONZE = "139,105,20";
const IVORY = "245,239,224";

type Point = { x: number; y: number };
type VehicleKind = "car" | "van" | "scooter";

type Ping = { r: number; alpha: number };

type Waypoint = {
  x: number;
  y: number;
  nextPing: number;
  pings: Ping[];
};

type RoutePath = {
  p0: Point;
  p1: Point;
  p2: Point;
  p3: Point;
  t: number;
  speed: number;
  kind: VehicleKind;
  startPin: Point;
  endPin: Point;
};

type FloatingBox = {
  x: number;
  y: number;
  baseY: number;
  phase: number;
  speed: number;
  rotation: number;
  rotSpeed: number;
  scale: number;
  depth: number;
};

type Dust = {
  x: number;
  y: number;
  r: number;
  vy: number;
  phase: number;
  speed: number;
};

type Blob = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  phase: number;
};

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function cubicPoint(
  p0: Point,
  p1: Point,
  p2: Point,
  p3: Point,
  t: number,
): Point {
  const mt = 1 - t;
  return {
    x:
      mt * mt * mt * p0.x +
      3 * mt * mt * t * p1.x +
      3 * mt * t * t * p2.x +
      t * t * t * p3.x,
    y:
      mt * mt * mt * p0.y +
      3 * mt * mt * t * p1.y +
      3 * mt * t * t * p2.y +
      t * t * t * p3.y,
  };
}

function cubicTangentAngle(
  p0: Point,
  p1: Point,
  p2: Point,
  p3: Point,
  t: number,
): number {
  const mt = 1 - t;
  const dx =
    3 * mt * mt * (p1.x - p0.x) +
    6 * mt * t * (p2.x - p1.x) +
    3 * t * t * (p3.x - p2.x);
  const dy =
    3 * mt * mt * (p1.y - p0.y) +
    6 * mt * t * (p2.y - p1.y) +
    3 * t * t * (p3.y - p2.y);
  return Math.atan2(dy, dx);
}

function roundRectPath(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawCar(ctx: CanvasRenderingContext2D, s: number) {
  roundRectPath(ctx, -14 * s, -6 * s, 28 * s, 12 * s, 4 * s);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-6 * s, -6 * s);
  ctx.lineTo(-3 * s, -12 * s);
  ctx.lineTo(7 * s, -12 * s);
  ctx.lineTo(9 * s, -6 * s);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(-8 * s, 6 * s, 3 * s, 0, Math.PI * 2);
  ctx.arc(8 * s, 6 * s, 3 * s, 0, Math.PI * 2);
  ctx.stroke();
}

function drawVan(ctx: CanvasRenderingContext2D, s: number) {
  roundRectPath(ctx, -18 * s, -8 * s, 36 * s, 16 * s, 3 * s);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(6 * s, -8 * s);
  ctx.lineTo(6 * s, 8 * s);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(-10 * s, 8 * s, 3.2 * s, 0, Math.PI * 2);
  ctx.arc(10 * s, 8 * s, 3.2 * s, 0, Math.PI * 2);
  ctx.stroke();
}

function drawScooter(ctx: CanvasRenderingContext2D, s: number) {
  ctx.beginPath();
  ctx.arc(-8 * s, 6 * s, 2.6 * s, 0, Math.PI * 2);
  ctx.arc(8 * s, 6 * s, 2.6 * s, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-8 * s, 6 * s);
  ctx.lineTo(2 * s, 6 * s);
  ctx.lineTo(8 * s, -4 * s);
  ctx.moveTo(8 * s, 6 * s);
  ctx.lineTo(8 * s, -8 * s);
  ctx.lineTo(4 * s, -8 * s);
  ctx.stroke();
}

const VEHICLE_DRAWERS: Record<
  VehicleKind,
  (ctx: CanvasRenderingContext2D, s: number) => void
> = {
  car: drawCar,
  van: drawVan,
  scooter: drawScooter,
};

function drawBox(ctx: CanvasRenderingContext2D, s: number) {
  roundRectPath(ctx, -10 * s, -10 * s, 20 * s, 20 * s, 2 * s);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, -10 * s);
  ctx.lineTo(0, 10 * s);
  ctx.moveTo(-10 * s, 0);
  ctx.lineTo(10 * s, 0);
  ctx.stroke();
}

function drawPin(ctx: CanvasRenderingContext2D, s: number) {
  ctx.beginPath();
  ctx.arc(0, -4 * s, 5 * s, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-3 * s, -1 * s);
  ctx.lineTo(0, 7 * s);
  ctx.lineTo(3 * s, -1 * s);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, -4 * s, 1.4 * s, 0, Math.PI * 2);
  ctx.fill();
}

export default function RoadCanvas({
  intensity = "normal",
}: {
  intensity?: "low" | "normal";
}) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    const reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const speedFactor = reduceMotion ? 0.15 : 1;

    const dpr = Math.min(devicePixelRatio || 1, 2);
    let LW = c.offsetWidth;
    let LH = c.offsetHeight;

    const applySize = () => {
      LW = c.offsetWidth;
      LH = c.offsetHeight;
      c.width = Math.max(1, LW * dpr);
      c.height = Math.max(1, LH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    applySize();

    const density = intensity === "low" ? 0.6 : 1;

    let blobs: Blob[] = [];
    let dust: Dust[] = [];
    let routes: RoutePath[] = [];
    let boxes: FloatingBox[] = [];
    const waypoints: Waypoint[] = [];

    const buildScene = () => {
      if (LW <= 0 || LH <= 0) return;

      const palette = [GOLD, GOLD_BRIGHT, BRONZE];
      blobs = Array.from({ length: Math.round(3 * density) }, () => ({
        x: rand(0, LW),
        y: rand(0, LH),
        vx: rand(-0.1, 0.1),
        vy: rand(-0.08, 0.08),
        r: rand(LW * 0.18, LW * 0.3),
        color: palette[Math.floor(Math.random() * palette.length)],
        phase: rand(0, Math.PI * 2),
      }));

      dust = Array.from({ length: Math.round(40 * density) }, () => ({
        x: rand(0, LW),
        y: rand(0, LH),
        r: rand(0.6, 1.6),
        vy: -rand(0.05, 0.16),
        phase: rand(0, Math.PI * 2),
        speed: rand(0.01, 0.03),
      }));

      const kinds: VehicleKind[] = ["car", "van", "scooter"];
      const routeCount = Math.round(4 * density);
      routes = Array.from({ length: routeCount }, (_, i) => {
        const fromLeft = Math.random() > 0.5;
        const p0: Point = {
          x: fromLeft ? -30 : LW + 30,
          y: rand(LH * 0.15, LH * 0.85),
        };
        const p3: Point = {
          x: fromLeft ? LW + 30 : -30,
          y: rand(LH * 0.15, LH * 0.85),
        };
        const p1: Point = {
          x: p0.x + (p3.x - p0.x) * rand(0.25, 0.4),
          y: rand(LH * 0.1, LH * 0.9),
        };
        const p2: Point = {
          x: p0.x + (p3.x - p0.x) * rand(0.6, 0.75),
          y: rand(LH * 0.1, LH * 0.9),
        };
        return {
          p0,
          p1,
          p2,
          p3,
          t: rand(0, 1),
          speed: rand(0.0009, 0.0016),
          kind: kinds[i % kinds.length],
          startPin: cubicPoint(p0, p1, p2, p3, 0.08),
          endPin: cubicPoint(p0, p1, p2, p3, 0.92),
        };
      });

      boxes = Array.from({ length: Math.round(6 * density) }, () => ({
        x: rand(LW * 0.1, LW * 0.9),
        y: rand(LH * 0.1, LH * 0.9),
        baseY: 0,
        phase: rand(0, Math.PI * 2),
        speed: rand(0.15, 0.35),
        rotation: rand(-0.2, 0.2),
        rotSpeed: rand(-0.0004, 0.0004),
        scale: rand(0.7, 1.3),
        depth: rand(0.4, 1),
      }));
      boxes.forEach((b) => (b.baseY = b.y));

      waypoints.length = 0;
    };
    buildScene();

    const registerPing = (pt: Point) => {
      let wp = waypoints.find(
        (w) => Math.abs(w.x - pt.x) < 1 && Math.abs(w.y - pt.y) < 1,
      );
      if (!wp) {
        wp = { x: pt.x, y: pt.y, nextPing: rand(500, 2500), pings: [] };
        waypoints.push(wp);
      }
      return wp;
    };

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: PointerEvent) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove);

    let t = 0;

    const drawFrame = () => {
      if (LW <= 0 || LH <= 0) return;

      ctx.clearRect(0, 0, LW, LH);
      ctx.globalCompositeOperation = "lighter";
      for (const b of blobs) {
        b.x += b.vx * speedFactor;
        b.y += b.vy * speedFactor;
        if (b.x < -b.r) b.x = LW + b.r;
        if (b.x > LW + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = LH + b.r;
        if (b.y > LH + b.r) b.y = -b.r;
        const pulse = 1 + Math.sin(t * 0.0006 + b.phase) * 0.1;
        const grad = ctx.createRadialGradient(
          b.x,
          b.y,
          0,
          b.x,
          b.y,
          b.r * pulse,
        );
        grad.addColorStop(0, `rgba(${b.color},0.09)`);
        grad.addColorStop(1, `rgba(${b.color},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r * pulse, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";

      for (const r of routes) {
        ctx.strokeStyle = `rgba(${GOLD},0.12)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(r.p0.x, r.p0.y);
        ctx.bezierCurveTo(r.p1.x, r.p1.y, r.p2.x, r.p2.y, r.p3.x, r.p3.y);
        ctx.stroke();

        r.t += r.speed * speedFactor;
        if (r.t > 1) r.t -= 1;

        for (let trail = 6; trail >= 1; trail--) {
          const tt = Math.max(0, r.t - trail * 0.01);
          const tp = cubicPoint(r.p0, r.p1, r.p2, r.p3, tt);
          const op = (1 - trail / 7) * 0.4;
          ctx.fillStyle = `rgba(${GOLD_BRIGHT},${op})`;
          ctx.beginPath();
          ctx.arc(tp.x, tp.y, 2 * (1 - trail / 9), 0, Math.PI * 2);
          ctx.fill();
        }

        const pos = cubicPoint(r.p0, r.p1, r.p2, r.p3, r.t);
        const angle = cubicTangentAngle(r.p0, r.p1, r.p2, r.p3, r.t);
        ctx.save();
        ctx.translate(pos.x, pos.y);
        ctx.rotate(angle);
        ctx.shadowColor = `rgba(${GOLD_BRIGHT},0.8)`;
        ctx.shadowBlur = 8;
        ctx.strokeStyle = `rgba(${GOLD_BRIGHT},0.85)`;
        ctx.lineWidth = 1.3;
        VEHICLE_DRAWERS[r.kind](ctx, 0.9);
        ctx.shadowBlur = 0;
        ctx.restore();

        const wStart = registerPing(r.startPin);
        const wEnd = registerPing(r.endPin);
        for (const w of [wStart, wEnd]) {
          w.nextPing -= 16 * speedFactor;
          if (w.nextPing <= 0) {
            w.pings.push({ r: 2, alpha: 0.5 });
            w.nextPing = rand(1800, 3400);
          }
          w.pings = w.pings.filter((p) => p.alpha > 0.01);
          for (const p of w.pings) {
            p.r += 0.35 * speedFactor;
            p.alpha *= 0.985;
            ctx.strokeStyle = `rgba(${GOLD_BRIGHT},${p.alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(w.x, w.y, p.r * 6, 0, Math.PI * 2);
            ctx.stroke();
          }
          ctx.save();
          ctx.translate(w.x, w.y);
          ctx.strokeStyle = `rgba(${GOLD_BRIGHT},0.75)`;
          ctx.fillStyle = `rgba(${GOLD_BRIGHT},0.9)`;
          ctx.lineWidth = 1.1;
          drawPin(ctx, 0.9);
          ctx.restore();
        }
      }

      for (const bx of boxes) {
        bx.rotation += bx.rotSpeed * speedFactor;
        const floatY =
          bx.baseY + Math.sin(t * 0.0006 * bx.speed + bx.phase) * 16;
        const mx = bx.x + mouse.x * 14 * bx.depth;
        const my = floatY + mouse.y * 14 * bx.depth;
        ctx.save();
        ctx.translate(mx, my);
        ctx.rotate(bx.rotation);
        ctx.globalAlpha = 0.22 + bx.depth * 0.18;
        ctx.strokeStyle = `rgba(${IVORY},1)`;
        ctx.lineWidth = 1.1;
        drawBox(ctx, bx.scale);
        ctx.restore();
      }

      for (const d of dust) {
        d.y += d.vy * speedFactor;
        if (d.y < -10) d.y = LH + 10;
        const tw = Math.max(0, 0.2 + Math.sin(t * d.speed + d.phase) * 0.22);
        ctx.fillStyle = `rgba(${IVORY},${tw})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }

      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;

      t += 16;
    };

    let errorLogged = false;
    const tick = () => {
      try {
        drawFrame();
      } catch (err) {
        if (!errorLogged) {
          console.error("RoadCanvas failed to draw a frame:", err);
          errorLogged = true;
        }
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    const ro = new ResizeObserver(() => {
      applySize();
      buildScene();
    });
    ro.observe(c);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("pointermove", onMove);
      ro.disconnect();
    };
  }, [intensity]);

  return <canvas ref={ref} className="road-canvas" />;
}
