// GreenVisionEngineOnWheels.tsx
// Drop-in replacement for the existing GreenVision Digital Twin section.
//
// Fonts required (add to layout.tsx or <head>):
//   <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@600;700;800&display=swap" rel="stylesheet"/>
//
// Usage:
//   import GreenVisionEngineOnWheels from "@/components/GreenVisionEngineOnWheels";
//   <GreenVisionEngineOnWheels />

"use client";

import { useEffect, useRef } from "react";

/* ══════════════════════════════════════════════
   SCOPED STYLES
   Using injected <style> for pseudo-elements,
   hover states, and keyframes.
══════════════════════════════════════════════ */
const SCOPED_CSS = `
  .gv-eow *, .gv-eow *::before, .gv-eow *::after { box-sizing: border-box; }

  .gv-eow {
    --dark:    #0d1117;
    --dark-2:  #141b24;
    --dark-3:  #1c2633;
    --border:  rgba(255,255,255,0.07);
    --green:   #2ecc6e;
    --green-2: #1aaf55;
    --green-dim: rgba(46,204,110,0.12);
    --amber:   #f5a623;
    --blue:    #4ba3f5;
    --text:    #e8edf3;
    --muted:   #7a8a9a;
    --card-bg: rgba(255,255,255,0.04);

    background: var(--dark);
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    border-radius: 16px;
    overflow: hidden;
  }

  /* Section layout */
  .gv-eow-grid {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: start;
  }

  /* Left column */
  .gv-eow-left { display: flex; flex-direction: column; gap: 28px; }

  .gv-eow-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(46,204,110,0.1);
    border: 1px solid rgba(46,204,110,0.25);
    border-radius: 100px;
    padding: 6px 14px;
    width: fit-content;
    font-size: 13px;
    font-weight: 500;
    color: var(--green);
    letter-spacing: 0.02em;
  }

  .gv-eow-heading {
    font-family: 'Syne', sans-serif;
    font-size: clamp(26px, 3.5vw, 38px);
    font-weight: 800;
    line-height: 1.15;
    color: #fff;
    margin: 0;
  }
  .gv-eow-heading span { color: var(--green); }

  .gv-eow-body {
    font-size: 15.5px;
    line-height: 1.75;
    color: #a8b8c8;
    max-width: 480px;
    margin: 0;
  }

  /* Feature list */
  .gv-eow-features { display: flex; flex-direction: column; gap: 14px; margin-top: 4px; }

  .gv-eow-feature {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 13px 16px;
    border-radius: 10px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    transition: background 0.2s, border-color 0.2s;
    cursor: default;
  }
  .gv-eow-feature:hover {
    background: rgba(46,204,110,0.06);
    border-color: rgba(46,204,110,0.2);
  }

  .gv-eow-ficon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: var(--green-dim);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
  }
  .gv-eow-ficon svg { width: 16px; height: 16px; color: var(--green); }

  .gv-eow-ftxt strong {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 2px;
  }
  .gv-eow-ftxt span {
    font-size: 13px;
    color: var(--muted);
    line-height: 1.5;
  }

  /* Right column: dashboard */
  .gv-eow-right { position: sticky; top: 32px; }

  .gv-eow-dashboard {
    background: var(--dark-2);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04);
  }

  /* Dashboard top bar */
  .gv-eow-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    background: var(--dark-3);
    border-bottom: 1px solid var(--border);
  }
  .gv-eow-dlogo {
    font-family: 'Syne', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: var(--green);
    letter-spacing: 0.04em;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .gv-eow-dtabs { display: flex; gap: 4px; }
  .gv-eow-dtab {
    font-size: 11px;
    padding: 4px 10px;
    border-radius: 6px;
    color: var(--muted);
    font-family: 'DM Sans', sans-serif;
  }
  .gv-eow-dtab-active {
    background: var(--green-dim);
    color: var(--green);
    font-weight: 600;
  }
  .gv-eow-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--green);
    animation: gvPulse 2s infinite;
  }
  @keyframes gvPulse {
    0%,100% { opacity: 1; box-shadow: 0 0 0 0 rgba(46,204,110,0.4); }
    50%     { opacity: 0.7; box-shadow: 0 0 0 5px rgba(46,204,110,0); }
  }

  /* Stats row */
  .gv-eow-stats {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1px;
    background: var(--border);
    border-bottom: 1px solid var(--border);
  }
  .gv-eow-stat {
    background: var(--dark-2);
    padding: 14px 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .gv-eow-stat-emoji { font-size: 18px; margin-bottom: 2px; }
  .gv-eow-stat-val {
    font-family: 'Syne', sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: #fff;
    line-height: 1;
  }
  .gv-eow-stat-label {
    font-size: 10px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .gv-eow-stat-sub { font-size: 10px; color: var(--muted); margin-top: 1px; }

  /* Chart area */
  .gv-eow-chart-wrap { padding: 16px 16px 8px; }
  .gv-eow-chart-title {
    font-size: 11px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .gv-eow-chart-title span { color: var(--muted); font-weight: 400; }
  .gv-eow-legend { display: flex; gap: 12px; font-size: 10px; }
  .gv-eow-leg { display: flex; align-items: center; gap: 4px; color: var(--muted); }
  .gv-eow-legdot { width: 8px; height: 3px; border-radius: 2px; }
  .gv-eow-chart { width: 100%; overflow: visible; }

  /* Vehicle table */
  .gv-eow-table { padding: 0 16px 16px; }
  .gv-eow-thead {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    font-size: 10px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 8px 0;
    border-bottom: 1px solid var(--border);
    margin-bottom: 4px;
  }
  .gv-eow-trow {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    font-size: 12px;
    color: var(--text);
    padding: 7px 0;
    border-bottom: 1px solid rgba(255,255,255,0.03);
    align-items: center;
  }
  .gv-eow-trow:last-child { border-bottom: none; }
  .gv-eow-vname { display: flex; align-items: center; gap: 6px; }
  .gv-eow-vdot  { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
  .gv-eow-pill {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    font-size: 10px;
    padding: 2px 7px;
    border-radius: 100px;
    font-weight: 600;
  }
  .gv-eow-pill-green { background: rgba(46,204,110,0.15); color: var(--green); }
  .gv-eow-pill-amber { background: rgba(245,166,35,0.15); color: var(--amber); }
  .gv-eow-pill-blue  { background: rgba(75,163,245,0.15); color: var(--blue); }

  /* ESG footer */
  .gv-eow-esg {
    margin: 0 16px 16px;
    padding: 10px 14px;
    background: linear-gradient(135deg, rgba(46,204,110,0.08), rgba(46,204,110,0.03));
    border: 1px solid rgba(46,204,110,0.15);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .gv-eow-esg-left { display: flex; align-items: center; gap: 10px; }
  .gv-eow-esg-icon { font-size: 22px; }
  .gv-eow-esg-txt strong { display: block; font-size: 13px; color: var(--green); font-weight: 600; }
  .gv-eow-esg-txt span   { font-size: 11px; color: var(--muted); }
  .gv-eow-esg-nums { display: flex; gap: 16px; }
  .gv-eow-esg-stat { text-align: right; }
  .gv-eow-esg-stat-val { font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 700; }
  .gv-eow-esg-stat-lbl { font-size: 10px; color: var(--muted); }

  /* Responsive */
  @media (max-width: 900px) {
    .gv-eow-grid {
      grid-template-columns: 1fr;
      gap: 48px;
    }
    .gv-eow-right { position: static; }
    .gv-eow-stats { grid-template-columns: repeat(2,1fr); }
  }
  @media (max-width: 500px) {
    .gv-eow-grid { padding: 48px 20px; }
    .gv-eow-stats { grid-template-columns: repeat(2,1fr); }
    .gv-eow-dtabs { display: none; }
  }
`;

/* ══════════════════════════════════════════════
   FEATURE DATA
══════════════════════════════════════════════ */
const FEATURES = [
  {
    title: "Per-vehicle fuel tracking, from anywhere",
    desc: "Actual savings quantified per truck, per route, per driver — in real time, not month-end reports.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Fleet-wide efficiency dashboard",
    desc: "Monitor every equipped vehicle across your entire fleet — trucks, dumpers, loaders — from a single interface.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <polyline points="7 16 11 11 14 14 19 9" />
      </svg>
    ),
  },
  {
    title: "Predictive maintenance alerts",
    desc: "Detect engine and system degradation before failures — reducing unplanned downtime and expensive roadside breakdowns.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Driver behaviour & route insights",
    desc: "Correlate driving patterns with fuel efficiency to identify best practices and coach underperforming drivers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    title: "Automated ESG reporting (BRSR ready)",
    desc: "CO₂, PM, CO & HC reductions documented per vehicle for BRSR compliance, ESG disclosures, and carbon credit monetisation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Mobile app for fleet managers & operators",
    desc: "Full platform access on-the-go. Real-time alerts, trip summaries, and savings reports on any device.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
];

const VEHICLES = [
  { name: "MH-12 TK-001 · Delhi–Mumbai", fuel: "−12.4%", fuelColor: "#2ecc6e", co2: "48 kg", dot: "#2ecc6e", pill: "▲ Optimal", pillClass: "gv-eow-pill-green" },
  { name: "DMP-003 · Nagpur Mine", fuel: "−9.1%", fuelColor: "#2ecc6e", co2: "132 kg", dot: "#4ba3f5", pill: "Live", pillClass: "gv-eow-pill-blue" },
  { name: "CON-017 · Pune Site B", fuel: "−6.3%", fuelColor: "#f5a623", co2: "87 kg", dot: "#f5a623", pill: "⚙ Maint.", pillClass: "gv-eow-pill-amber" },
  { name: "BUS-042 · Nashik Fleet", fuel: "−10.8%", fuelColor: "#2ecc6e", co2: "61 kg", dot: "#2ecc6e", pill: "▲ Optimal", pillClass: "gv-eow-pill-green" },
];

/* ══════════════════════════════════════════════
   COMPONENT
══════════════════════════════════════════════ */
export default function GreenVisionEngineOnWheels() {
  const stylesRef = useRef(false);

  useEffect(() => {
    if (stylesRef.current) return;
    const el = document.createElement("style");
    el.textContent = SCOPED_CSS;
    document.head.appendChild(el);
    stylesRef.current = true;
  }, []);

  return (
    <div className="gv-eow">
      <section className="gv-eow-grid">

        {/* ═══ LEFT COLUMN ═══ */}
        <div className="gv-eow-left">

          {/* Badge */}
          <div className="gv-eow-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M3 12h1M20 12h1M12 3v1M12 20v1M5.6 5.6l.7.7M17.7 17.7l.7.7M17.7 6.3l-.7.7M6.3 17.7l-.7.7" />
            </svg>
            IoT Digital Twin
          </div>

          {/* Heading */}
          <h2 className="gv-eow-heading">
            GreenVision<br />Digital Twin Platform<br />
            <span>for Engine on Wheels</span>
          </h2>

          {/* Body text */}
          <p className="gv-eow-body">
            Every GreenDrive installation includes IoT connectivity to the GreenVision platform — your fleet&apos;s digital twin for complete visibility, verified fuel savings, and automated ESG reporting across trucks, mining equipment, and construction machinery.
          </p>

          {/* Feature cards */}
          <div className="gv-eow-features">
            {FEATURES.map((f, i) => (
              <div key={i} className="gv-eow-feature">
                <div className="gv-eow-ficon">{f.icon}</div>
                <div className="gv-eow-ftxt">
                  <strong>{f.title}</strong>
                  <span>{f.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ RIGHT COLUMN: DASHBOARD ═══ */}
        <div className="gv-eow-right">
          <div className="gv-eow-dashboard">

            {/* Top bar */}
            <div className="gv-eow-topbar">
              <div className="gv-eow-dlogo">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                GreenVision™
              </div>
              <div className="gv-eow-dtabs">
                <div className="gv-eow-dtab gv-eow-dtab-active">Fleet</div>
                <div className="gv-eow-dtab">Routes</div>
                <div className="gv-eow-dtab">ESG</div>
              </div>
              <div className="gv-eow-dot" />
            </div>

            {/* Stat cards */}
            <div className="gv-eow-stats">
              <div className="gv-eow-stat">
                <div className="gv-eow-stat-emoji">🚛</div>
                <div className="gv-eow-stat-val">248</div>
                <div className="gv-eow-stat-label">Total Vehicles</div>
                <div className="gv-eow-stat-sub">30-day window</div>
              </div>
              <div className="gv-eow-stat">
                <div className="gv-eow-stat-emoji">⛽</div>
                <div className="gv-eow-stat-val" style={{ color: "#2ecc6e" }}>52,400 L</div>
                <div className="gv-eow-stat-label">Fuel Saved</div>
                <div className="gv-eow-stat-sub">vs baseline</div>
              </div>
              <div className="gv-eow-stat">
                <div className="gv-eow-stat-emoji">📈</div>
                <div className="gv-eow-stat-val" style={{ color: "#4ba3f5" }}>11.3 km/L</div>
                <div className="gv-eow-stat-label">Avg Efficiency</div>
                <div className="gv-eow-stat-sub">Baseline: 9.8 km/L</div>
              </div>
              <div className="gv-eow-stat">
                <div className="gv-eow-stat-emoji">🌿</div>
                <div className="gv-eow-stat-val" style={{ color: "#f5a623" }}>−140.4 t</div>
                <div className="gv-eow-stat-label">CO₂ Reduced</div>
                <div className="gv-eow-stat-sub">vs 30-day base</div>
              </div>
            </div>

            {/* Line chart */}
            <div className="gv-eow-chart-wrap">
              <div className="gv-eow-chart-title">
                Actual vs Baseline Fuel Efficiency — Fleet Average
                <div className="gv-eow-legend">
                  <div className="gv-eow-leg">
                    <div className="gv-eow-legdot" style={{ background: "#2ecc6e" }} />
                    Actual
                  </div>
                  <div className="gv-eow-leg">
                    <div className="gv-eow-legdot" style={{ background: "#7a8a9a", opacity: 0.5 }} />
                    Baseline
                  </div>
                </div>
              </div>
              <svg className="gv-eow-chart" viewBox="0 0 540 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gvEowArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2ecc6e" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#2ecc6e" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Y-axis */}
                <text x="0" y="14" fontSize="9" fill="#7a8a9a">14</text>
                <text x="0" y="44" fontSize="9" fill="#7a8a9a">12</text>
                <text x="0" y="74" fontSize="9" fill="#7a8a9a">10</text>
                <text x="0" y="98" fontSize="9" fill="#7a8a9a">8</text>
                {/* X-axis */}
                <text x="22" y="99" fontSize="9" fill="#7a8a9a" textAnchor="middle">W1</text>
                <text x="102" y="99" fontSize="9" fill="#7a8a9a" textAnchor="middle">W2</text>
                <text x="182" y="99" fontSize="9" fill="#7a8a9a" textAnchor="middle">W3</text>
                <text x="262" y="99" fontSize="9" fill="#7a8a9a" textAnchor="middle">W4</text>
                <text x="342" y="99" fontSize="9" fill="#7a8a9a" textAnchor="middle">W5</text>
                <text x="422" y="99" fontSize="9" fill="#7a8a9a" textAnchor="middle">W6</text>
                <text x="502" y="99" fontSize="9" fill="#7a8a9a" textAnchor="middle">W7</text>
                {/* Baseline dashed */}
                <line x1="20" y1="66" x2="520" y2="66" stroke="#7a8a9a" strokeWidth="1" strokeDasharray="5,4" opacity="0.4" />
                {/* Area fill */}
                <path d="M20,62 C60,58 80,52 100,54 C140,50 160,42 180,44 C220,40 240,38 260,36 C300,32 320,30 340,28 C380,24 400,22 420,24 C460,20 480,22 500,20 L500,90 L20,90 Z" fill="url(#gvEowArea)" />
                {/* Actual line */}
                <polyline points="20,62 100,54 180,44 260,36 340,28 420,24 500,20" fill="none" stroke="#2ecc6e" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
                {/* Data dots */}
                <circle cx="20" cy="62" r="3" fill="#2ecc6e" />
                <circle cx="100" cy="54" r="3" fill="#2ecc6e" />
                <circle cx="180" cy="44" r="3" fill="#2ecc6e" />
                <circle cx="260" cy="36" r="3" fill="#2ecc6e" />
                <circle cx="340" cy="28" r="3" fill="#2ecc6e" />
                <circle cx="420" cy="24" r="3" fill="#2ecc6e" />
                <circle cx="500" cy="20" r="4" fill="#2ecc6e" stroke="#0d1117" strokeWidth="2" />
                {/* Tooltip */}
                <rect x="464" y="4" width="68" height="18" rx="4" fill="#1c2633" />
                <text x="498" y="16" fontSize="9" fill="#2ecc6e" textAnchor="middle" fontWeight="600">11.3 km/L ↑</text>
              </svg>
            </div>

            {/* Vehicle table */}
            <div className="gv-eow-table">
              <div className="gv-eow-thead">
                <div>Vehicle / Route</div>
                <div>Fuel Δ</div>
                <div>CO₂ saved</div>
                <div>Status</div>
              </div>
              {VEHICLES.map((v, i) => (
                <div key={i} className="gv-eow-trow">
                  <div className="gv-eow-vname">
                    <div className="gv-eow-vdot" style={{ background: v.dot }} />
                    {v.name}
                  </div>
                  <div style={{ color: v.fuelColor }}>{v.fuel}</div>
                  <div>{v.co2}</div>
                  <div><span className={`gv-eow-pill ${v.pillClass}`}>{v.pill}</span></div>
                </div>
              ))}
            </div>

            {/* ESG footer */}
            <div className="gv-eow-esg">
              <div className="gv-eow-esg-left">
                <div className="gv-eow-esg-icon">🌱</div>
                <div className="gv-eow-esg-txt">
                  <strong>140.4 t CO₂ saved vs baseline</strong>
                  <span>52,400 L less fuel · ₹44.5 L savings · BRSR report ready</span>
                </div>
              </div>
              <div className="gv-eow-esg-nums">
                <div className="gv-eow-esg-stat">
                  <div className="gv-eow-esg-stat-val" style={{ color: "#f5a623" }}>−52.4k L</div>
                  <div className="gv-eow-esg-stat-lbl">Fuel Saved</div>
                </div>
                <div className="gv-eow-esg-stat">
                  <div className="gv-eow-esg-stat-val" style={{ color: "#2ecc6e" }}>−140 t</div>
                  <div className="gv-eow-esg-stat-lbl">CO₂ Reduced</div>
                </div>
              </div>
            </div>
            <img
              src="/images/technology/digital-twin.png"
              alt="GreenVision Dashboard"
              className="w-full rounded-xl shadow-2xl"
            />
            <div className='mt-3' />
            <img
              src="/images/technology/digital-twin-2.png"
              alt="GreenVision Dashboard"
              className="w-full rounded-xl shadow-2xl"
            />

          </div>
        </div>

      </section>
    </div>
  );
}