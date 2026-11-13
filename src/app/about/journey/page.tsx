import type { Metadata } from "next";
import Link from "next/link";
import CredentialsBlock from "@/components/Shared/CredentialsBlock";
import SavingsDisclaimer from "@/components/Shared/SavingsDisclaimer";
import YouTubeEmbed from "@/components/Shared/YouTubeEmbed";
import {
  CLAIMS,
  COMPANY,
  LINES,
  PLATFORM_LAYERS,
  PRODUCTS,
  ROUTES,
  TECHNOLOGY,
  VIDEOS,
} from "@/data/siteContent";

export const metadata: Metadata = {
  title: `Our Journey & Mission | ${COMPANY.name}`,
  description:
    "SGT HydroEdge was incorporated on 11 September 2023 to build decarbonisation infrastructure for the engines, burners and furnaces the world already runs. Patented CHFA technology, ISO 9001:2015 certified, Made in India.",
  alternates: { canonical: `${COMPANY.url}${ROUTES.journey}` },
};

const PAGE_CSS = `.sgt-purpose {
    --brand:        #1B6B3D;
    --brand-dark:   #155730;
    --brand-light:  #33A04A;
    --brand-faint:  #f0f9f3;
    --accent:       #3ec87e;
    --gold:         #c8a84b;
    --slate-900:    #0f172a;
    --slate-800:    #1e293b;
    --slate-700:    #334155;
    --slate-600:    #475569;
    --slate-500:    #64748b;
    --slate-400:    #94a3b8;
    --slate-200:    #e2e8f0;
    --slate-100:    #f1f5f9;
    --slate-50:     #f8fafc;
    --white:        #ffffff;
    --max-w:        1200px;
  }

  /* ── HERO ── */
  .sgt-purpose .hero {
    padding-top: 0;
    background: var(--slate-900);
    min-height: 68vh;
    display: flex; align-items: center;
    position: relative; overflow: hidden;
  }
  .sgt-purpose .hero::before {
    content: '';
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 70% 50%, rgba(27,107,61,0.18) 0%, transparent 65%),
      radial-gradient(ellipse at 20% 80%, rgba(62,200,126,0.08) 0%, transparent 50%);
    pointer-events: none;
  }
  .sgt-purpose .hero-grid-bg {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }
  .sgt-purpose .hero-inner {
    max-width: var(--max-w); margin: 0 auto; padding: 5rem 2rem;
    position: relative; z-index: 1;
    display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center;
  }
  .sgt-purpose .hero-eyebrow {
    display: inline-flex; align-items: center; gap: 0.5rem;
    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.16em;
    text-transform: uppercase; color: var(--accent);
    margin-bottom: 1.5rem;
  }
  .sgt-purpose .hero-eyebrow::before {
    content: ''; width: 24px; height: 2px; background: var(--accent); border-radius: 1px;
  }
  .sgt-purpose .hero-title {
    font-size: clamp(2.4rem, 4vw, 3.8rem);
    font-weight: 800; line-height: 1.1;
    color: var(--white); letter-spacing: -0.03em;
    margin-bottom: 1.5rem;
  }
  .sgt-purpose .hero-title .highlight { color: var(--accent); }
  .sgt-purpose .hero-desc {
    font-size: 1.05rem; line-height: 1.75;
    color: rgba(255,255,255,0.62); max-width: 500px;
    margin-bottom: 2.5rem;
  }
  .sgt-purpose .hero-stats {
    display: flex; gap: 2rem; padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.1);
  }
  .sgt-purpose .hero-stat-num {
    font-size: 1.8rem; font-weight: 800;
    color: var(--white); line-height: 1;
  }
  .sgt-purpose .hero-stat-label {
    font-size: 0.7rem; font-weight: 500;
    color: rgba(255,255,255,0.45);
    text-transform: uppercase; letter-spacing: 0.08em;
    margin-top: 0.2rem;
  }
  .sgt-purpose .hero-right-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px;
    padding: 2.5rem;
    backdrop-filter: blur(4px);
  }
  .sgt-purpose .hero-card-label {
    font-size: 0.65rem; font-weight: 700; letter-spacing: 0.18em;
    text-transform: uppercase; color: var(--accent); margin-bottom: 1.2rem;
  }
  .sgt-purpose .hero-card-text {
    font-size: 1rem; line-height: 1.8;
    color: rgba(255,255,255,0.75);
  }
  .sgt-purpose .hero-card-text strong { color: white; font-weight: 600; }
  .sgt-purpose .hero-card-points { margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem; }
  .sgt-purpose .hero-card-point {
    display: flex; align-items: flex-start; gap: 0.6rem;
    font-size: 0.9rem; color: rgba(255,255,255,0.7);
  }
  .sgt-purpose .hero-card-point::before {
    content: '→'; color: var(--accent); font-weight: 700;
    flex-shrink: 0; margin-top: 1px;
  }

  /* ── SHARED ── */
  .sgt-purpose .container { max-width: var(--max-w); margin: 0 auto; padding: 0 2rem; }
  .sgt-purpose .section-label {
    display: inline-flex; align-items: center; gap: 0.5rem;
    font-size: 0.7rem; font-weight: 700; letter-spacing: 0.16em;
    text-transform: uppercase; color: var(--brand);
    margin-bottom: 1rem;
  }
  .sgt-purpose .section-label::before {
    content: ''; width: 20px; height: 2px; background: var(--brand); border-radius: 1px;
  }
  .sgt-purpose .section-title {
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    font-weight: 800; line-height: 1.15;
    letter-spacing: -0.025em; color: var(--slate-900);
  }
  .sgt-purpose .section-title .brand { color: var(--brand); }

  /* ── VMG SECTION ── */
  .sgt-purpose .vmg-section { padding: 7rem 0; background: var(--white); }
  .sgt-purpose .vmg-intro { max-width: 680px; margin-bottom: 5rem; }
  .sgt-purpose .vmg-intro-text {
    font-size: 1.08rem; line-height: 1.8;
    color: var(--slate-600); margin-top: 1.2rem;
  }
  .sgt-purpose .vmg-grid { display: flex; flex-direction: column; gap: 0; }
  .sgt-purpose .vmg-row {
    display: grid; grid-template-columns: 260px 1fr;
    border-top: 1px solid var(--slate-200);
    padding: 3.5rem 0;
    gap: 4rem; align-items: start;
    transition: background 0.3s;
    cursor: default;
  }
  .sgt-purpose .vmg-row:hover { background: var(--brand-faint); margin: 0 -2rem; padding: 3.5rem 2rem; }
  .sgt-purpose .vmg-row:last-child { border-bottom: 1px solid var(--slate-200); }
  .sgt-purpose .vmg-num {
    font-size: 0.65rem; font-weight: 700; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--brand);
    display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.5rem;
  }
  .sgt-purpose .vmg-num::after {
    content: ''; flex: 1; height: 1px; background: var(--brand-light);
    opacity: 0.3; max-width: 40px;
  }
  .sgt-purpose .vmg-type {
    font-size: 1.4rem; font-weight: 800;
    color: var(--slate-900); letter-spacing: -0.02em;
  }
  .sgt-purpose .vmg-headline {
    font-size: 1.25rem; font-weight: 700; line-height: 1.4;
    color: var(--slate-900); margin-bottom: 1rem;
    letter-spacing: -0.01em;
  }
  .sgt-purpose .vmg-headline .brand { color: var(--brand); }

  /* ── SECTORS ── */
  .sgt-purpose .sectors-section {
    padding: 7rem 0; background: var(--white);
    border-top: 1px solid var(--slate-200);
  }
  .sgt-purpose .sectors-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 1px; background: var(--slate-200);
    border: 1px solid var(--slate-200); border-radius: 12px; overflow: hidden;
  }
  .sgt-purpose .sector-card {
    background: var(--white); padding: 2rem 1.8rem;
    display: flex; flex-direction: column;
    transition: background 0.2s; cursor: default;
    position: relative; overflow: hidden;
  }
  .sgt-purpose .sector-card::after {
    content: ''; position: absolute; bottom: 0; left: 0; right: 0;
    height: 3px; background: var(--brand);
    transform: scaleX(0); transform-origin: left;
    transition: transform 0.3s ease;
  }
  .sgt-purpose .sector-card:hover { background: var(--brand-faint); }
  .sgt-purpose .sector-card:hover::after { transform: scaleX(1); }
  .sgt-purpose .sector-icon { font-size: 1.8rem; margin-bottom: 1rem; }
  .sgt-purpose .sector-name { font-size: 0.85rem; font-weight: 700; color: var(--slate-900); margin-bottom: 0.4rem; text-transform: uppercase; letter-spacing: 0.04em; }
  .sgt-purpose .sector-desc { font-size: 0.8rem; color: var(--slate-500); line-height: 1.55; flex: 1; }
  .sgt-purpose .sector-category {
    display: inline-block; margin-bottom: 0.75rem;
    font-size: 0.6rem; font-weight: 700; letter-spacing: 0.16em;
    text-transform: uppercase; color: var(--brand);
    background: var(--brand-faint); border: 1px solid rgba(27,107,61,0.18);
    padding: 0.2rem 0.6rem; border-radius: 100px;
  }
  .sgt-purpose .sector-tag {
    margin-top: 1rem; font-size: 0.65rem; font-weight: 700;
    color: var(--brand); letter-spacing: 0.12em; text-transform: uppercase;
  }

  .sgt-purpose .vmg-body { font-size: 0.95rem; line-height: 1.8; color: var(--slate-600); }
  .sgt-purpose .vmg-body + .vmg-body { margin-top: 0.6rem; }
  .sgt-purpose .vmg-body strong { color: var(--slate-900); font-weight: 700; }

  /* ── FILM / MILESTONES ── */
  .sgt-purpose .film-section {
    padding: 7rem 0; background: var(--slate-50);
    border-top: 1px solid var(--slate-200);
  }
  .sgt-purpose .film-intro { max-width: 680px; margin-bottom: 3rem; }
  .sgt-purpose .film-wrap { max-width: 960px; margin: 0 auto; }
  .sgt-purpose .milestone {
    display: grid; grid-template-columns: 260px 1fr; gap: 4rem; align-items: start;
    border-top: 1px solid var(--slate-200); border-bottom: 1px solid var(--slate-200);
    padding: 2.5rem 0; margin: 3rem 0 4rem;
  }
  .sgt-purpose .sectors-header { margin-bottom: 3.5rem; }
  .sgt-purpose .sector-card { text-decoration: none; }
  .sgt-purpose .outcomes-note { margin-top: 1.25rem; }

  /* ── FOUNDER QUOTE ── */
  .sgt-purpose .founder-section {
    padding: 7rem 0;
    background: var(--brand);
    position: relative; overflow: hidden;
  }
  .sgt-purpose .founder-section::before {
    content: '"';
    position: absolute; top: -100px; left: 1rem;
    font-family: 'Inter', sans-serif;
    font-size: 28rem; font-weight: 900;
    color: rgba(255,255,255,0.04);
    line-height: 1; pointer-events: none; user-select: none;
  }
  .sgt-purpose .founder-layout {
    display: grid; grid-template-columns: 260px 1fr;
    gap: 4rem; align-items: center;
    position: relative; z-index: 1;
  }
  .sgt-purpose .founder-photo-wrap {
    display: flex; flex-direction: column; align-items: center; gap: 1rem;
  }
  .sgt-purpose .founder-photo {
    width: 200px; height: 200px;
    border-radius: 50%; overflow: hidden;
    border: 4px solid rgba(255,255,255,0.25);
    box-shadow: 0 8px 32px rgba(0,0,0,0.25);
    flex-shrink: 0;
    background: var(--brand-dark);
  }
  .sgt-purpose .founder-photo img {
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
  }
  .sgt-purpose .founder-name-card { text-align: center; }
  .sgt-purpose .founder-name { font-size: 0.95rem; font-weight: 700; color: white; }
  .sgt-purpose .founder-title-label { font-size: 0.72rem; color: rgba(255,255,255,0.6); margin-top: 0.2rem; }
  .sgt-purpose .founder-quote-text {
    font-size: clamp(1.1rem, 1.8vw, 1.55rem);
    font-weight: 400; font-style: italic;
    line-height: 1.7; color: rgba(255,255,255,0.92);
    margin-bottom: 2rem;
  }
  .sgt-purpose .founder-quote-text em { font-style: normal; font-weight: 700; color: white; }
  .sgt-purpose .founder-divider {
    width: 40px; height: 2px; background: rgba(255,255,255,0.4); border-radius: 1px; margin-bottom: 1rem;
  }

  /* ── OUTCOMES ── */
  .sgt-purpose .outcomes-section {
    padding: 7rem 0; background: var(--slate-50);
    border-top: 1px solid var(--slate-200);
  }
  .sgt-purpose .outcomes-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 1px; background: var(--slate-200);
    border: 1px solid var(--slate-200); border-radius: 12px; overflow: hidden;
    margin-top: 3.5rem;
  }
  .sgt-purpose .outcome-card {
    background: var(--white); padding: 2.5rem 2rem;
    transition: background 0.2s; cursor: default;
  }
  .sgt-purpose .outcome-card:hover { background: var(--brand-faint); }
  .sgt-purpose .outcome-metric {
    font-size: 3rem; font-weight: 800;
    color: var(--brand); line-height: 1; display: block;
    letter-spacing: -0.03em; margin-bottom: 0.5rem;
  }
  .sgt-purpose .outcome-metric .unit { font-size: 1.5rem; }
  .sgt-purpose .outcome-name { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--slate-900); margin-bottom: 0.4rem; }
  .sgt-purpose .outcome-desc { font-size: 0.85rem; color: var(--slate-500); line-height: 1.65; }

  /* ── CLOSING CTA ── */
  .sgt-purpose .cta-section {
    padding: 6rem 0;
    background: linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%);
    text-align: center;
  }
  .sgt-purpose .cta-inner { max-width: 640px; margin: 0 auto; }
  .sgt-purpose .cta-section .section-label { justify-content: center; color: rgba(255,255,255,0.7); }
  .sgt-purpose .cta-section .section-label::before { background: rgba(255,255,255,0.5); }
  .sgt-purpose .cta-title {
    font-size: clamp(1.6rem, 3vw, 2.6rem);
    font-weight: 800; color: white;
    letter-spacing: -0.025em; line-height: 1.2; margin: 1rem 0 0.8rem;
  }
  .sgt-purpose .cta-sub { font-size: 1rem; color: rgba(255,255,255,0.7); margin-bottom: 2.5rem; line-height: 1.7; }
  .sgt-purpose .cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
  .sgt-purpose .btn-white {
    display: inline-flex; align-items: center; gap: 0.4rem;
    background: white; color: var(--brand);
    font-size: 0.88rem; font-weight: 700;
    padding: 0.85rem 1.8rem; border-radius: 8px;
    text-decoration: none; transition: all 0.2s;
  }
  .sgt-purpose .btn-white:hover { background: var(--slate-100); transform: translateY(-1px); }
  .sgt-purpose .btn-outline-white {
    display: inline-flex; align-items: center; gap: 0.4rem;
    border: 2px solid rgba(255,255,255,0.5); color: white;
    font-size: 0.88rem; font-weight: 700;
    padding: 0.85rem 1.8rem; border-radius: 8px;
    text-decoration: none; transition: all 0.2s;
  }
  .sgt-purpose .btn-outline-white:hover { border-color: white; background: rgba(255,255,255,0.1); }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .sgt-purpose .hero-inner { grid-template-columns: 1fr; gap: 3rem; padding: 4rem 1.5rem; }
    .sgt-purpose .vmg-row { grid-template-columns: 1fr; gap: 1.5rem; padding: 2.5rem 0; }
    .sgt-purpose .vmg-row:hover { margin: 0; padding: 2.5rem 0; }
    .sgt-purpose .milestone { grid-template-columns: 1fr; gap: 1rem; }
    .sgt-purpose .hero-stats { flex-wrap: wrap; }
    .sgt-purpose .sectors-grid { grid-template-columns: 1fr; }
    .sgt-purpose .founder-layout { grid-template-columns: 1fr; gap: 2.5rem; text-align: center; }
    .sgt-purpose .founder-photo-wrap { flex-direction: row; justify-content: flex-start; text-align: left; gap: 1.5rem; }
    .sgt-purpose .founder-divider { margin: 0 auto 1rem; }
    .sgt-purpose .outcomes-grid { grid-template-columns: 1fr; }
    .sgt-purpose .container { padding: 0 1.5rem; }
  }`;

const HERO_STATS = [
  { num: "3+ years", label: "Tested on real engines" },
  { num: CLAIMS.greendrive.km, label: "Driven with GreenDrive" },
  { num: "Patented", label: `Patent No. ${TECHNOLOGY.patentNo}` },
  { num: "ISO", label: "9001:2015 certified" },
];

const OUTCOMES = [
  {
    metric: CLAIMS.greendrive.fuelSaving,
    name: "Fuel saving* — GreenDrive",
    desc: `Diesel vehicles on the road. ${CLAIMS.greendrive.install}, with no engine modification.`,
  },
  {
    metric: CLAIMS.greenx.fuelSaving,
    name: "Fuel saving* — GreenX and GreenEdge",
    desc: "Diesel generator sets, and industrial burners and furnaces on any hydrocarbon fuel.",
  },
  {
    metric: "Up to 80%",
    name: "PM — engines",
    desc: `${CLAIMS.greendrive.pm} and ${CLAIMS.greendrive.nox} on engines. ${CLAIMS.co2}`,
  },
];

export default function JourneyPage() {
  const products = Object.values(PRODUCTS);

  return (
    <div className="sgt-purpose">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      {/* HERO */}
      <section className="hero mt-7">
        <div className="hero-grid-bg" />
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow">About {COMPANY.name}</div>
            <h1 className="hero-title">
              Our journey
              <br />
              <span className="highlight">and mission.</span>
            </h1>
            <p className="hero-desc">{LINES.positioning}</p>
            <div className="hero-stats">
              {HERO_STATS.map((s) => (
                <div key={s.label}>
                  <div className="hero-stat-num">{s.num}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-right-card">
            <div className="hero-card-label">The problem we chose to work on</div>
            <p className="hero-card-text">
              The world&apos;s <strong>trucks, generators, ships, boilers and furnaces</strong> won&apos;t be
              replaced any time soon, and part of every litre of fuel never fully burns.
              <br />
              <br />
              {LINES.core}
            </p>
            <div className="hero-card-points">
              <div className="hero-card-point">{LINES.onDemand}</div>
              <div className="hero-card-point">{LINES.saveCutProve}</div>
              <div className="hero-card-point">{CLAIMS.madeIn}, for a pan-India and international market</div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION · TECHNOLOGY · PLATFORM */}
      <section className="vmg-section">
        <div className="container">
          <div className="vmg-intro">
            <span className="section-label">Mission</span>
            <h2 className="section-title">
              What we stand for,
              <br />
              <span className="brand">and what we build.</span>
            </h2>
            <p className="vmg-intro-text">
              {COMPANY.name} is a {COMPANY.positioning} company and solutions provider.
            </p>
          </div>
          <div className="vmg-grid">
            <div className="vmg-row">
              <div>
                <div className="vmg-num">01 · Mission</div>
                <div className="vmg-type">Mission</div>
              </div>
              <div>
                <h3 className="vmg-headline">&ldquo;{LINES.ceo}&rdquo;</h3>
                <p className="vmg-body">
                  — {COMPANY.founder.name}, {COMPANY.founder.shortTitle}
                </p>
              </div>
            </div>
            <div className="vmg-row">
              <div>
                <div className="vmg-num">02 · Technology</div>
                <div className="vmg-type">Technology</div>
              </div>
              <div>
                <h3 className="vmg-headline">
                  <span className="brand">{TECHNOLOGY.full}</span>
                </h3>
                <p className="vmg-body">
                  {TECHNOLOGY.credit}. Hydrogen is made from water, on demand, with nothing stored, and dosed
                  precisely as a combustion booster. {LINES.control}
                </p>
              </div>
            </div>
            <div className="vmg-row">
              <div>
                <div className="vmg-num">03 · Platform</div>
                <div className="vmg-type">Platform</div>
              </div>
              <div>
                <h3 className="vmg-headline">{LINES.equation}</h3>
                {PLATFORM_LAYERS.map((l) => (
                  <p className="vmg-body" key={l.layer}>
                    <strong>
                      {l.layer} — {l.title}.
                    </strong>{" "}
                    {l.body}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORPORATE FILM + MILESTONES */}
      <section className="film-section">
        <div className="container">
          <div className="film-intro">
            <span className="section-label">Our story</span>
            <h2 className="section-title">
              Watch the film.
              <br />
              <span className="brand">{LINES.measure}</span>
            </h2>
          </div>
          <div className="film-wrap">
            <YouTubeEmbed youtubeId={VIDEOS.corporate.youtubeId} title={VIDEOS.corporate.title} />
          </div>

          <div className="milestone">
            <div>
              <div className="vmg-num">Incorporated</div>
              <div className="vmg-type">{COMPANY.incorporated}</div>
            </div>
            <div>
              <h3 className="vmg-headline">
                {COMPANY.name} was incorporated on {COMPANY.incorporated}.
              </h3>
              <p className="vmg-body">
                The milestones and credentials below include ISO 9001:2015 certification and a patent for the
                company&apos;s hydrogen-generation apparatus.
              </p>
            </div>
          </div>

          <CredentialsBlock heading="Milestones and credentials" />
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="sectors-section">
        <div className="container">
          <div className="sectors-header">
            <span className="section-label">One platform</span>
            <h2 className="section-title">
              One platform. Two applications:
              <br />
              <span className="brand">engines, and burners and furnaces.</span>
            </h2>
          </div>

          <div className="sectors-grid">
            {products.map((p) => (
              <Link href={p.href} className="sector-card" key={p.name}>
                <span className="sector-category" style={{ alignSelf: "flex-start" }}>
                  {p.group}
                  {p.badge ? ` · ${p.badge}` : ""}
                </span>
                <div className="sector-name">{p.name}</div>
                <div className="sector-desc">{p.oneLiner}</div>
                <div className="sector-tag">{p.segment}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER QUOTE */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-layout">
            <div className="founder-photo-wrap">
              <div className="founder-photo">
                <img src="/images/team/alok-kumar.png" alt={COMPANY.founder.name} loading="lazy" />
              </div>
              <div className="founder-name-card">
                <div className="founder-name">{COMPANY.founder.name}</div>
                <div className="founder-title-label">{COMPANY.founder.shortTitle}</div>
                <div className="founder-title-label">{COMPANY.name}</div>
              </div>
            </div>
            <div>
              <p className="founder-quote-text">&ldquo;{LINES.ceo}&rdquo;</p>
              <div className="founder-divider" />
              <div style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)" }}>
                {COMPANY.founder.name}, {COMPANY.founder.title}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="outcomes-section">
        <div className="container">
          <div>
            <span className="section-label">What the technology delivers</span>
            <h2 className="section-title">
              Save fuel. Cut carbon.
              <br />
              <span className="brand">Prove it with data.</span>
            </h2>
          </div>
          <div className="outcomes-grid">
            {OUTCOMES.map((o) => (
              <div className="outcome-card" key={o.name}>
                <span className="outcome-metric">{o.metric}</span>
                <div className="outcome-name">{o.name}</div>
                <div className="outcome-desc">{o.desc}</div>
              </div>
            ))}
          </div>
          <SavingsDisclaimer className="outcomes-note text-gray-500" />
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <span className="section-label">Work with us</span>
          <h2 className="cta-title">{LINES.partner}</h2>
          <p className="cta-sub">
            Tell us about the engines, burners and furnaces you run, or the market you would like to serve.
          </p>
          <div className="cta-btns">
            <Link href={ROUTES.contact} className="btn-white">
              Talk to us →
            </Link>
            <Link href={ROUTES.partners} className="btn-outline-white">
              Become a partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
