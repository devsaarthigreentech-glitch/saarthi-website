"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Pause, Play } from "lucide-react";
import {
  GENSET_COUNTRIES,
  SHOW_FIGURES,
  SOURCE_NOTE,
  formatUnits,
  type GensetCountry,
} from "@/data/gensetGlobe";
import { ROUTES } from "@/data/siteContent";

const MAP_URL = "/data/world-countries-110m.json";
const TOP = GENSET_COUNTRIES.slice(0, 10);
const MAX_UNITS = GENSET_COUNTRIES[0].units;
const LABELLED = GENSET_COUNTRIES.filter((c) => c.units >= 4e5);
const WORLD_TOTAL = GENSET_COUNTRIES.reduce((sum, c) => sum + c.units, 0);

const COLORS = {
  ocean: "#0f2f1f",
  oceanEdge: "#3d8a5c",
  graticule: "rgba(255,255,255,0.07)",
  land: "#2f6f4a",
  landEdge: "rgba(255,255,255,0.22)",
  bubble: "rgba(255,215,0,0.5)",
  bubbleActive: "rgba(255,215,0,0.9)",
  bubbleEdge: "rgba(255,215,0,0.95)",
  label: "#ffffff",
};

/**
 * Rotating globe of the world's diesel-generator installed base. The map
 * libraries and map data load only when the section scrolls into view, and
 * the animation runs only while it is visible.
 */
export default function GensetGlobe() {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playingRef = useRef(true);
  const [playing, setPlaying] = useState(true);
  const [facing, setFacing] = useState<GensetCountry | null>(null);
  const [tip, setTip] = useState<{ x: number; y: number; country: GensetCountry } | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!stage || !canvas) return;

    let disposed = false;
    let cleanup = () => {};

    const start = async () => {
      const [{ geoOrthographic, geoPath, geoGraticule10, geoDistance }, { feature }, topo] =
        await Promise.all([
          import("d3-geo"),
          import("topojson-client"),
          fetch(MAP_URL).then((r) => r.json()),
        ]);
      if (disposed) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const land = feature(topo, topo.objects.countries);
      const graticule = geoGraticule10();
      const projection = geoOrthographic().clipAngle(90).precision(0.4);
      const path = geoPath(projection, ctx);

      let width = 0;
      let height = 0;
      let radius = 0;
      const rot: [number, number] = [-70, -18];
      let dragging = false;
      let visible = true;
      let last = performance.now();
      let frame = 0;
      let current: GensetCountry | null = null;
      let pointer: { x: number; y: number } | null = null;
      let screen: { c: GensetCountry; x: number; y: number; r: number }[] = [];

      const bubbleRadius = (units: number) => Math.sqrt(units / MAX_UNITS) * radius * 0.15;

      const resize = () => {
        const box = stage.getBoundingClientRect();
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = box.width;
        height = box.height;
        radius = Math.max(60, Math.min(width, height) / 2 - 12);
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        projection.translate([width / 2, height / 2]).scale(radius);
      };

      const draw = () => {
        projection.rotate(rot);
        ctx.clearRect(0, 0, width, height);

        ctx.beginPath();
        path({ type: "Sphere" });
        ctx.fillStyle = COLORS.ocean;
        ctx.fill();

        ctx.beginPath();
        path(graticule);
        ctx.strokeStyle = COLORS.graticule;
        ctx.lineWidth = 0.6;
        ctx.stroke();

        ctx.beginPath();
        path(land);
        ctx.fillStyle = COLORS.land;
        ctx.fill();
        ctx.strokeStyle = COLORS.landEdge;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // soft highlight, top-left
        const shade = ctx.createRadialGradient(
          width / 2 - radius * 0.35,
          height / 2 - radius * 0.4,
          radius * 0.1,
          width / 2,
          height / 2,
          radius,
        );
        shade.addColorStop(0, "rgba(255,255,255,0.14)");
        shade.addColorStop(1, "rgba(0,0,0,0.28)");
        ctx.beginPath();
        path({ type: "Sphere" });
        ctx.fillStyle = shade;
        ctx.fill();
        ctx.strokeStyle = COLORS.oceanEdge;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        const centre = projection.invert?.([width / 2, height / 2]) ?? [0, 0];
        let best: GensetCountry | null = null;
        let bestScore = Infinity;
        screen = [];

        for (const c of GENSET_COUNTRIES) {
          const dist = geoDistance([c.lon, c.lat], centre);
          if (dist >= Math.PI / 2 - 0.05) continue;
          const p = projection([c.lon, c.lat]);
          if (!p) continue;
          screen.push({ c, x: p[0], y: p[1], r: bubbleRadius(c.units) });
          const score = dist / Math.sqrt(c.units);
          if (score < bestScore) {
            bestScore = score;
            best = c;
          }
        }

        for (const b of screen) {
          ctx.beginPath();
          ctx.arc(b.x, b.y, Math.max(2, b.r), 0, Math.PI * 2);
          ctx.fillStyle = b.c === best ? COLORS.bubbleActive : COLORS.bubble;
          ctx.fill();
          ctx.strokeStyle = COLORS.bubbleEdge;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        const fontSize = Math.max(11, radius * 0.036);
        ctx.font = `600 ${fontSize}px Inter, system-ui, sans-serif`;
        ctx.textAlign = "center";
        ctx.lineJoin = "round";
        for (const c of LABELLED) {
          if (geoDistance([c.lon, c.lat], centre) >= Math.PI / 2 - 0.3) continue;
          const p = projection([c.lon, c.lat]);
          if (!p) continue;
          const text = SHOW_FIGURES ? `${c.name} · ${formatUnits(c.units)}` : c.name;
          const y = p[1] - bubbleRadius(c.units) - 6;
          ctx.strokeStyle = "rgba(8,24,16,0.85)";
          ctx.lineWidth = 3;
          ctx.strokeText(text, p[0], y);
          ctx.fillStyle = COLORS.label;
          ctx.fillText(text, p[0], y);
        }

        if (best && best !== current) {
          current = best;
          setFacing(best);
        }
      };

      const tick = (t: number) => {
        const dt = Math.min(60, t - last);
        last = t;
        if (playingRef.current && !dragging) rot[0] += dt * 0.012;
        draw();
        if (visible) frame = requestAnimationFrame(tick);
      };

      const hitTest = () => {
        if (!pointer) return setTip(null);
        const { x, y } = pointer;
        let hit: (typeof screen)[number] | null = null;
        for (const b of screen) {
          const r = Math.max(8, b.r);
          if ((b.x - x) ** 2 + (b.y - y) ** 2 <= r * r && (!hit || b.r < hit.r)) hit = b;
        }
        setTip(hit ? { x, y, country: hit.c } : null);
      };

      let lastX = 0;
      let lastY = 0;
      const onDown = (e: PointerEvent) => {
        dragging = true;
        lastX = e.clientX;
        lastY = e.clientY;
        canvas.setPointerCapture(e.pointerId);
      };
      const onMove = (e: PointerEvent) => {
        const box = canvas.getBoundingClientRect();
        pointer = { x: e.clientX - box.left, y: e.clientY - box.top };
        if (dragging) {
          const k = 75 / radius;
          rot[0] += (e.clientX - lastX) * k;
          rot[1] = Math.max(-70, Math.min(70, rot[1] - (e.clientY - lastY) * k));
          lastX = e.clientX;
          lastY = e.clientY;
          setTip(null);
          if (!visible || !playingRef.current) draw();
        } else {
          hitTest();
        }
      };
      const onUp = () => {
        dragging = false;
      };
      const onLeave = () => {
        pointer = null;
        setTip(null);
      };

      canvas.addEventListener("pointerdown", onDown);
      canvas.addEventListener("pointermove", onMove);
      canvas.addEventListener("pointerup", onUp);
      canvas.addEventListener("pointercancel", onUp);
      canvas.addEventListener("pointerleave", onLeave);

      const resizeObserver = new ResizeObserver(() => {
        resize();
        draw();
      });
      resizeObserver.observe(stage);

      // animate only while on screen
      const visibility = new IntersectionObserver(([entry]) => {
        const now = entry.isIntersecting;
        if (now && !visible) {
          visible = true;
          last = performance.now();
          frame = requestAnimationFrame(tick);
        } else if (!now) {
          visible = false;
          cancelAnimationFrame(frame);
        }
      });
      visibility.observe(stage);

      resize();
      frame = requestAnimationFrame(tick);

      cleanup = () => {
        cancelAnimationFrame(frame);
        resizeObserver.disconnect();
        visibility.disconnect();
        canvas.removeEventListener("pointerdown", onDown);
        canvas.removeEventListener("pointermove", onMove);
        canvas.removeEventListener("pointerup", onUp);
        canvas.removeEventListener("pointercancel", onUp);
        canvas.removeEventListener("pointerleave", onLeave);
      };
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      playingRef.current = false;
      setPlaying(false);
    }

    // load the libraries and map only when the globe is about to be seen
    const lazy = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lazy.disconnect();
          start();
        }
      },
      { rootMargin: "300px" },
    );
    lazy.observe(stage);

    return () => {
      disposed = true;
      lazy.disconnect();
      cleanup();
    };
  }, []);

  const toggle = () => {
    playingRef.current = !playingRef.current;
    setPlaying(playingRef.current);
  };

  return (
    <section className="bg-[#0b1f15] py-20 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#4ADE80]">
            The installed base
          </p>
          <h2 className="mb-5 text-3xl font-bold leading-tight md:text-4xl">
            The world already runs on diesel generators.
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-gray-300">
            Each circle shows the relative size of a country&apos;s installed base of diesel
            generator sets — standby, prime and off-grid. They will not be replaced any time
            soon. We make them cleaner, and we prove it.
          </p>

          <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Now facing
            </p>
            <p className="mt-1 text-3xl font-bold" aria-live="polite">
              {facing ? facing.name : "—"}
            </p>
            {facing && (
              <p className="mt-1 text-sm text-[#FFD700]">
                {SHOW_FIGURES ? `~${formatUnits(facing.units)} units · ` : ""}#
                {GENSET_COUNTRIES.indexOf(facing) + 1} of {GENSET_COUNTRIES.length} by estimated
                installed base
              </p>
            )}
          </div>

          <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Largest installed bases
            </p>
            <ol className="space-y-1.5">
              {TOP.map((c, i) => {
                const on = facing?.name === c.name;
                return (
                  <li key={c.name} className="grid grid-cols-[20px_minmax(0,1fr)_auto] items-center gap-2 text-sm">
                    <span className="text-xs text-gray-500">{i + 1}</span>
                    <span className="relative flex h-6 items-center overflow-hidden rounded">
                      <span
                        className={`absolute inset-y-0 left-0 rounded transition-colors ${on ? "bg-[#FFD700]" : "bg-white/15"}`}
                        style={{ width: `${Math.max(6, (c.units / MAX_UNITS) * 100)}%` }}
                      />
                      <span className={`relative truncate pl-2 ${on ? "font-semibold text-gray-900" : "text-gray-100"}`}>
                        {c.name}
                      </span>
                    </span>
                    {SHOW_FIGURES && (
                      <span className="tabular-nums text-gray-300">{formatUnits(c.units)}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={ROUTES.greenx}
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-bold text-[#1B6B3D] transition-colors hover:bg-[#FFD700] hover:text-gray-900"
            >
              See GreenX for DG sets <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button
              type="button"
              onClick={toggle}
              className="inline-flex items-center rounded-lg border border-white/30 px-5 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              {playing ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
              {playing ? "Pause rotation" : "Rotate globe"}
            </button>
          </div>
        </div>

        <div>
          <div ref={stageRef} className="relative mx-auto aspect-square w-full max-w-[640px]">
            <canvas
              ref={canvasRef}
              role="img"
              aria-label="Rotating globe with a circle on each country sized by its estimated installed base of diesel generator sets. The largest are China, the United States, India and Nigeria."
              className="absolute inset-0 h-full w-full cursor-grab touch-pan-y active:cursor-grabbing"
            />
            {tip && (
              <div
                className="pointer-events-none absolute z-10 whitespace-nowrap rounded-md bg-white px-3 py-1.5 text-xs font-medium text-gray-900 shadow-lg"
                style={{ left: tip.x + 14, top: tip.y + 14 }}
              >
                <strong>{tip.country.name}</strong>
                {SHOW_FIGURES
                  ? ` · ~${formatUnits(tip.country.units)} diesel gensets`
                  : ` · #${GENSET_COUNTRIES.indexOf(tip.country) + 1} by estimated installed base`}
              </div>
            )}
          </div>
          {SHOW_FIGURES && (
            <p className="mt-2 text-center text-sm text-gray-300">
              World total (approx.): ~{formatUnits(WORLD_TOTAL)} units
            </p>
          )}
          <p className="mx-auto mt-4 max-w-xl text-center text-xs leading-relaxed text-gray-400">
            {SOURCE_NOTE} Drag the globe to rotate it.
          </p>
        </div>
      </div>
    </section>
  );
}
