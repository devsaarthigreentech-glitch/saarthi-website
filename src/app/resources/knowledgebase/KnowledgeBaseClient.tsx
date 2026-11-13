// Knowledge base (FAQ). All CSS is scoped under the .sgt-faq wrapper.
// Figures, routes and contact details come from src/data/siteContent.ts.

"use client";

import { useEffect, useRef } from "react";
import {
  CLAIMS,
  COMPANY,
  DISCLAIMER,
  GREENMARINE_COPY,
  LINES,
  ROUTES,
  TECHNOLOGY,
} from "@/data/siteContent";

const PAGE_CSS = `
  .sgt-faq {
    --green: #1B6B3D;
    --green-light: #2a8f53;
    --green-pale: #e8f5ee;
    --green-xpale: #f2faf5;
    --yellow: #FFD700;
    --yellow-soft: #fff8d0;
    --charcoal: #1a1f1c;
    --mid: #4a5550;
    --muted: #8a9490;
    --line: #d8e4dc;
    --white: #ffffff;
    --bg: #f7faf8;
  }

  .sgt-faq, .sgt-faq *, .sgt-faq *::before, .sgt-faq *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .sgt-faq { scroll-behavior: smooth; }

  .sgt-faq {
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    color: var(--charcoal);
    font-size: 15px;
    line-height: 1.65;
    overflow-x: hidden;
  }

  /* ── HEADER ── */

  

  

  

  

  .sgt-faq .header-tag {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    color: var(--muted);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  /* ── HERO ── */
  .sgt-faq .hero {
    background: var(--green);
    padding: 80px 48px 64px;
    position: relative;
    overflow: hidden;
  }

  .sgt-faq .hero::before {
    content: '';
    position: absolute;
    top: -80px; right: -80px;
    width: 400px; height: 400px;
    border-radius: 50%;
    background: rgba(255,215,0,0.07);
    pointer-events: none;
  }

  .sgt-faq .hero::after {
    content: '';
    position: absolute;
    bottom: -60px; left: 20%;
    width: 260px; height: 260px;
    border-radius: 50%;
    background: rgba(255,255,255,0.04);
    pointer-events: none;
  }

  .sgt-faq .hero-label {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--yellow);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .sgt-faq .hero-label::before {
    content: '';
    display: block;
    width: 32px; height: 1px;
    background: var(--yellow);
  }

  .sgt-faq .hero h1 {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(36px, 5vw, 58px);
    color: var(--white);
    line-height: 1.1;
    max-width: 680px;
    margin-bottom: 20px;
  }

  .sgt-faq .hero h1 em {
    color: var(--yellow);
    font-style: italic;
  }

  .sgt-faq .hero-sub {
    color: rgba(255,255,255,0.65);
    max-width: 560px;
    font-size: 15px;
    font-weight: 300;
  }

  /* ── SEARCH BAR ── */
  .sgt-faq .search-wrap {
    max-width: 560px;
    margin: 36px 0 0;
    position: relative;
  }

  .sgt-faq .search-wrap input {
    width: 100%;
    padding: 14px 20px 14px 48px;
    border-radius: 8px;
    border: none;
    background: rgba(255,255,255,0.12);
    color: var(--white);
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    outline: none;
    backdrop-filter: blur(8px);
    transition: background 0.2s;
  }

  .sgt-faq .search-wrap input::placeholder { color: rgba(255,255,255,0.4); }
  .sgt-faq .search-wrap input:focus { background: rgba(255,255,255,0.18); }

  .sgt-faq .search-icon {
    position: absolute;
    left: 16px; top: 50%;
    transform: translateY(-50%);
    color: rgba(255,255,255,0.45);
    pointer-events: none;
  }

  .sgt-faq .search-clear {
    position: absolute;
    right: 14px; top: 50%;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.2);
    border: none;
    color: white;
    border-radius: 50%;
    width: 20px; height: 20px;
    font-size: 11px;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    transition: background 0.15s;
  }

  .sgt-faq .search-clear:hover { background: rgba(255,255,255,0.35); }

  /* ── PERSONA TABS ── */
  .sgt-faq .tabs-bar {
    background: var(--white);
    border-bottom: 1px solid var(--line);
    padding: 0 48px;
    display: flex;
    gap: 0;
    overflow-x: auto;
    scrollbar-width: none;
    position: sticky;
    top: 64px;
    z-index: 90;
  }

  .sgt-faq .tabs-bar::-webkit-scrollbar { display: none; }

  .sgt-faq .tab-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 18px 24px 14px;
    border: none;
    background: none;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: var(--muted);
    border-bottom: 3px solid transparent;
    white-space: nowrap;
    transition: color 0.2s, border-color 0.2s;
  }

  .sgt-faq .tab-btn .tab-icon { font-size: 16px; }

  .sgt-faq .tab-btn:hover { color: var(--green); }

  .sgt-faq .tab-btn.active {
    color: var(--green);
    border-bottom-color: var(--yellow);
    font-weight: 600;
  }

  .sgt-faq .tab-btn .tab-count {
    background: var(--green-pale);
    color: var(--green);
    font-size: 10px;
    font-family: 'Space Mono', monospace;
    padding: 1px 6px;
    border-radius: 20px;
    font-weight: 700;
  }

  .sgt-faq .tab-btn.active .tab-count {
    background: var(--yellow);
    color: var(--charcoal);
  }

  /* ── LAYOUT ── */
  .sgt-faq .main-layout {
    max-width: 1100px;
    margin: 0 auto;
    padding: 56px 48px 100px;
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 56px;
    align-items: start;
  }

  /* ── SIDEBAR ── */
  .sgt-faq .sidebar {
    position: sticky;
    top: 132px;
  }

  .sgt-faq .sidebar-section {
    margin-bottom: 36px;
  }

  .sgt-faq .sidebar-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 10px;
  }

  .sgt-faq .sidebar-links { list-style: none; }

  .sgt-faq .sidebar-links li a {
    display: block;
    padding: 7px 12px;
    font-size: 13px;
    color: var(--mid);
    text-decoration: none;
    border-radius: 6px;
    border-left: 2px solid transparent;
    transition: all 0.15s;
  }

  .sgt-faq .sidebar-links li a:hover {
    color: var(--green);
    background: var(--green-pale);
    border-left-color: var(--green);
  }

  .sgt-faq .sidebar-links li a.active {
    color: var(--green);
    background: var(--green-pale);
    border-left-color: var(--green);
    font-weight: 600;
  }

  /* ── CTA CARD ── */
  .sgt-faq .cta-card {
    background: var(--green);
    border-radius: 12px;
    padding: 20px;
    margin-top: 8px;
  }

  .sgt-faq .cta-card p {
    color: rgba(255,255,255,0.8);
    font-size: 12.5px;
    margin-bottom: 14px;
    line-height: 1.5;
  }

  .sgt-faq .cta-card a {
    display: block;
    background: var(--yellow);
    color: var(--charcoal);
    text-align: center;
    padding: 10px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
    transition: opacity 0.15s;
  }

  .sgt-faq .cta-card a:hover { opacity: 0.88; }

  /* ── CONTENT ── */
  .sgt-faq .faq-content { min-height: 600px; }

  /* ── SECTION ── */
  .sgt-faq .faq-section {
    margin-bottom: 56px;
  }

  .sgt-faq .section-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--line);
  }

  .sgt-faq .section-badge {
    width: 44px; height: 44px;
    border-radius: 10px;
    background: var(--green);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    flex-shrink: 0;
  }

  .sgt-faq .section-title-wrap h2 {
    font-family: 'DM Serif Display', serif;
    font-size: 22px;
    color: var(--charcoal);
    margin-bottom: 2px;
  }

  .sgt-faq .section-title-wrap p {
    font-size: 12.5px;
    color: var(--muted);
  }

  /* ── ACCORDION ── */
  .sgt-faq .accordion { display: flex; flex-direction: column; gap: 6px; }

  .sgt-faq .acc-item {
    background: var(--white);
    border: 1px solid var(--line);
    border-radius: 10px;
    overflow: hidden;
    transition: box-shadow 0.2s, border-color 0.2s;
  }

  .sgt-faq .acc-item:hover {
    border-color: var(--green-light);
    box-shadow: 0 2px 12px rgba(27,107,61,0.08);
  }

  .sgt-faq .acc-item.open {
    border-color: var(--green);
    box-shadow: 0 4px 20px rgba(27,107,61,0.12);
  }

  .sgt-faq .acc-q {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 18px 20px;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    font-family: 'DM Sans', sans-serif;
    font-size: 14.5px;
    font-weight: 500;
    color: var(--charcoal);
    transition: color 0.15s;
  }

  .sgt-faq .acc-q:hover { color: var(--green); }

  .sgt-faq .acc-item.open .acc-q { color: var(--green); }

  .sgt-faq .q-number {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    color: var(--muted);
    background: var(--bg);
    border-radius: 4px;
    padding: 2px 7px;
    flex-shrink: 0;
    border: 1px solid var(--line);
  }

  .sgt-faq .acc-item.open .q-number {
    background: var(--green);
    color: var(--white);
    border-color: var(--green);
  }

  .sgt-faq .acc-arrow {
    margin-left: auto;
    color: var(--muted);
    flex-shrink: 0;
    transition: transform 0.3s ease;
    font-size: 12px;
  }

  .sgt-faq .acc-item.open .acc-arrow {
    transform: rotate(180deg);
    color: var(--green);
  }

  .acc-.sgt-faq {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.38s cubic-bezier(0.4,0,0.2,1);
  }

  .sgt-faq .acc-inner {
    padding: 0 20px 22px;
    color: var(--mid);
    font-size: 14px;
    line-height: 1.75;
    border-top: 1px solid var(--line);
    padding-top: 16px;
  }

  .sgt-faq .acc-inner strong { color: var(--charcoal); }

  .sgt-faq .acc-inner ul {
    margin: 10px 0;
    padding-left: 20px;
  }

  .sgt-faq .acc-inner ul li { margin-bottom: 6px; }

  .sgt-faq .acc-inner .highlight-box {
    background: var(--green-xpale);
    border-left: 3px solid var(--green);
    border-radius: 0 8px 8px 0;
    padding: 12px 16px;
    margin: 14px 0;
    font-size: 13.5px;
    color: var(--charcoal);
  }

  .sgt-faq .acc-inner .highlight-box strong { color: var(--green); }

  .sgt-faq .acc-inner .stat-row {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin: 14px 0;
  }

  .sgt-faq .stat-chip {
    background: var(--green-pale);
    border-radius: 6px;
    padding: 8px 14px;
    font-size: 12.5px;
    font-weight: 600;
    color: var(--green);
  }

  .sgt-faq .stat-chip span {
    display: block;
    font-size: 11px;
    font-weight: 400;
    color: var(--mid);
    margin-top: 1px;
  }

  .sgt-faq .acc-inner .tag-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 10px;
  }

  .sgt-faq .tag {
    font-size: 11px;
    padding: 3px 10px;
    border-radius: 20px;
    border: 1px solid var(--line);
    color: var(--mid);
    background: var(--white);
  }

  .sgt-faq .tag.green { border-color: var(--green); color: var(--green); background: var(--green-pale); }
  .sgt-faq .tag.yellow { border-color: #c9a900; color: #7a6200; background: var(--yellow-soft); }

  /* ── SEARCH EMPTY ── */
  .sgt-faq .empty-state {
    text-align: center;
    padding: 80px 20px;
    display: none;
  }

  .sgt-faq .empty-state .empty-icon { font-size: 48px; margin-bottom: 16px; }

  .sgt-faq .empty-state h3 {
    font-family: 'DM Serif Display', serif;
    font-size: 22px;
    color: var(--charcoal);
    margin-bottom: 8px;
  }

  .sgt-faq .empty-state p { color: var(--muted); font-size: 14px; }

  /* ── INTERACTIVE COMPARISON ── */
  .sgt-faq .comparison-widget {
    background: var(--white);
    border: 1px solid var(--line);
    border-radius: 10px;
    overflow: hidden;
    margin: 14px 0;
  }

  .sgt-faq .comp-header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1px;
    background: var(--line);
  }

  .sgt-faq .comp-header-cell {
    background: var(--white);
    padding: 10px 14px;
    font-size: 12px;
    font-weight: 600;
    color: var(--mid);
  }

  .sgt-faq .comp-header-cell.sgt { background: var(--green); color: white; }

  .sgt-faq .comp-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1px;
    background: var(--line);
  }

  .sgt-faq .comp-cell {
    background: var(--white);
    padding: 10px 14px;
    font-size: 12.5px;
    color: var(--mid);
  }

  .sgt-faq .comp-cell.sgt { background: var(--green-xpale); color: var(--charcoal); font-weight: 500; }

  .sgt-faq .comp-cell.yes::before { content: '✓ '; color: var(--green); font-weight: 700; }
  .sgt-faq .comp-cell.no::before { content: '✗ '; color: #c0392b; font-weight: 700; }

  /* ── PROCESS STEPS ── */
  .sgt-faq .process-steps {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin: 14px 0;
  }

  .sgt-faq .step {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12.5px;
    color: var(--mid);
  }

  .sgt-faq .step-num {
    width: 24px; height: 24px;
    border-radius: 50%;
    background: var(--green);
    color: white;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px;
    font-weight: 700;
    flex-shrink: 0;
  }

  .sgt-faq .step-arrow { color: var(--line); }

  /* ── NO-RESULTS COUNT ── */
  .sgt-faq .results-count {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    color: var(--muted);
    margin-bottom: 24px;
    letter-spacing: 0.05em;
  }

  /* ── FOOTER ── */
  

  

  

  

  /* ── HIGHLIGHT on search ── */
  .sgt-faq mark {
    background: var(--yellow);
    color: var(--charcoal);
    border-radius: 2px;
    padding: 0 1px;
  }

  /* ── RESPONSIVE ── */
  @media(max-width: 900px) {
    .sgt-faq .main-layout { grid-template-columns: 1fr; padding: 40px 24px 80px; }
    .sgt-faq .sidebar { position: static; }
    .sgt-faq header, .sgt-faq .hero, .sgt-faq .tabs-bar { padding-left: 24px; padding-right: 24px; }
  }

  @media(max-width: 600px) {
    .sgt-faq .hero { padding: 56px 24px 48px; }
    .sgt-faq .tab-btn { padding: 16px 14px 12px; font-size: 12px; }
  }

  /* ── FADE IN ── */
  .sgt-faq .faq-section {
    animation: fadeUp 0.4s ease both;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

// TODO(owner): Decarbonisation-as-a-Service is worded as "being built" (brief 4.6)
// until the owner confirms whether it is offered now.
const PAGE_HTML = `<!-- HERO -->
<section class="hero">
  <div class="hero-label">Knowledge Base</div>
  <h1>Everything you want to know about <em>Controlled Hydrogen Fuel Assist</em></h1>
  <p class="hero-sub">Whether you're evaluating our technology, exploring a partnership, or making an investment decision — your questions answered, clearly.</p>
  <div class="search-wrap">
    <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
    <input type="text" id="searchInput" placeholder="Search any question, topic, or keyword…">
    <button class="search-clear" id="searchClear">✕</button>
  </div>
</section>

<!-- TABS -->
<div class="tabs-bar" id="tabsBar">
  <button class="tab-btn active" data-section="all">
    <span class="tab-icon">◈</span> All Questions <span class="tab-count" id="cnt-all">32</span>
  </button>
  <button class="tab-btn" data-section="tech">
    <span class="tab-icon">⚙</span> Technology <span class="tab-count" id="cnt-tech">13</span>
  </button>
  <button class="tab-btn" data-section="commercial">
    <span class="tab-icon">₹</span> Commercial <span class="tab-count" id="cnt-commercial">7</span>
  </button>
  <button class="tab-btn" data-section="solutions">
    <span class="tab-icon">🏭</span> Solutions <span class="tab-count" id="cnt-solutions">6</span>
  </button>
  <button class="tab-btn" data-section="investor">
    <span class="tab-icon">📈</span> Investors <span class="tab-count" id="cnt-investor">3</span>
  </button>
  <button class="tab-btn" data-section="partner">
    <span class="tab-icon">🤝</span> Partners <span class="tab-count" id="cnt-partner">3</span>
  </button>
</div>

<!-- MAIN LAYOUT -->
<div class="main-layout">
  <!-- SIDEBAR -->
  <aside class="sidebar">
    <div class="sidebar-section">
      <p class="sidebar-label">Jump to section</p>
      <ul class="sidebar-links">
        <li><a href="#sec-tech" class="side-link" data-target="sec-tech">⚙ How the Technology Works</a></li>
        <li><a href="#sec-commercial" class="side-link" data-target="sec-commercial">₹ Commercial Questions</a></li>
        <li><a href="#sec-solutions" class="side-link" data-target="sec-solutions">🏭 Solutions by Application</a></li>
        <li><a href="#sec-investor" class="side-link" data-target="sec-investor">📈 For Investors</a></li>
        <li><a href="#sec-partner" class="side-link" data-target="sec-partner">🤝 Partnership</a></li>
      </ul>
    </div>

    <div class="sidebar-section">
      <p class="sidebar-label">Quick links</p>
      <ul class="sidebar-links">
        <li><a href="mailto:${COMPANY.email}">✉ ${COMPANY.email}</a></li>
        <li><a href="${ROUTES.downloads}">↗ Brochures &amp; downloads</a></li>
        <li><a href="${ROUTES.videos}">↗ Watch the films</a></li>
      </ul>
    </div>

    <div class="cta-card">
      <p>Still have questions? Our team is happy to walk you through any aspect of our technology.</p>
      <a href="${ROUTES.contact}">Get in touch →</a>
    </div>
  </aside>

  <!-- CONTENT -->
  <div class="faq-content">
    <p class="results-count" id="resultsCount"></p>
    <div id="emptyState" class="empty-state">
      <div class="empty-icon">🔍</div>
      <h3>No results found</h3>
      <p>Try a different keyword, or <button onclick="clearSearch()" style="background:none;border:none;color:var(--green);cursor:pointer;font-size:14px;font-weight:600;">browse all questions</button></p>
    </div>

    <section class="faq-section" id="sec-tech" data-section="tech">
      <div class="section-header">
        <div class="section-badge">⚙</div>
        <div class="section-title-wrap">
          <h2>How the Technology Works</h2>
          <p>For engineers, technical buyers, and the curious</p>
        </div>
      </div>
      <div class="accordion">

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T1</span>
            What exactly is CHFA, and how is it different from the HHO kits I have seen online?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p><strong>CHFA — Controlled Hydrogen Fuel Assist Technology</strong> is developed and patented by SGT HydroEdge (Patent No. ${TECHNOLOGY.patentNo}). Hydrogen is made from water, on demand, with nothing stored, and dosed precisely as a combustion booster. The key word is <em>controlled</em>.</p>
              <div class="highlight-box"><strong>Control is the technology.</strong> The dose follows the load. Too little hydrogen does nothing, too much does harm. A fixed-rate kit cannot follow the load; CHFA does.</div>
              <div class="tag-row"><span class="tag green">Patented · Patent No. ${TECHNOLOGY.patentNo}</span><span class="tag green">${CLAIMS.arai.testing}</span><span class="tag">Made on demand. Never stored.</span><span class="tag">No engine modification</span></div>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T2</span>
            Is this the same as hydrogen fuel cells or hydrogen cylinders?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>No. There are no fuel cells and no pressure cylinders. The gas is generated on demand, in small controlled volumes, and used immediately. Nothing is stored, and production stops when the engine stops.</p>
              <p>Your engine, burner or furnace keeps running on its usual fuel. Hydrogen is only a booster that helps that fuel burn more completely.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T3</span>
            How does a small dose of hydrogen save fuel?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <ul>
              <li>A small dose — under 5% of fuel energy — changes how the fuel burns. Hydrogen ignites sooner and burns about eight times faster, so peak heat arrives at the right crank angle and more work comes from every drop.</li>
              <li>It helps burn off soot that would otherwise escape.</li>
              <li>In burners and furnaces, a steadier flame needs less excess air, so less heat is lost up the stack.</li>
              <li>Less fuel burned means less CO₂ — without changing the engine, the burner, the furnace or the fuel.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T4</span>
            Does it work on engines and on burners and furnaces?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>Yes. It is one platform with two applications:</p>
              <ul>
              <li><strong>Engines (diesel):</strong> <a href="${ROUTES.greendrive}">GreenDrive</a> for road vehicles, <a href="${ROUTES.greenx}">GreenX</a> for diesel generator sets, and <a href="${ROUTES.greenmarine}">GreenMarine</a> for marine engines — our next frontier.</li>
              <li><strong>Burners and furnaces (any fuel):</strong> <a href="${ROUTES.greenedge}">GreenEdge</a>.</li>
              </ul>
              <p>The same CHFA technology serves both. See the <a href="${ROUTES.chfa}">CHFA Technology</a> page.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T5</span>
            What are the fuel-saving and emission figures?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <div class="stat-row">
              <div class="stat-chip">${CLAIMS.greendrive.fuelSaving}*<span>GreenDrive fuel saving</span></div>
              <div class="stat-chip">${CLAIMS.greenx.fuelSaving}*<span>GreenX fuel saving</span></div>
              <div class="stat-chip">${CLAIMS.greenedge.fuelSaving}*<span>GreenEdge fuel saving</span></div>
              <div class="stat-chip">${CLAIMS.greendrive.pm} · ${CLAIMS.greendrive.nox}<span>Engines: GreenDrive and GreenX</span></div>
              </div>
              <p>${CLAIMS.co2} For GreenEdge: ${CLAIMS.greenedge.emissions}</p>
              <p>In GreenEdge field trials we recorded a 3.6% fuel saving on a PNG furnace and 6.6% on a diesel-fired hot-water generator.</p>
              <div class="highlight-box">* ${DISCLAIMER}</div>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T6</span>
            What is the evidence behind these claims?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <ul>
              <li><strong>Patented technology</strong> — Patent No. ${TECHNOLOGY.patentNo}, “${TECHNOLOGY.patentTitle}”.</li>
              <li><strong>Peer-reviewed research</strong> — two papers published with ARAI in ARAI's journal, and R&amp;D testing with ARAI.</li>
              <li><strong>Tested for over three years on real engines</strong>, and validated across multiple customer sites — fleets, DG sets, boilers, furnaces.</li>
              <li><strong>1,000,000+ km</strong> driven with GreenDrive.</li>
              <li><strong>Selected for the CII Ascent Grant 2026</strong> — GreenX and GreenEdge field-validated at customer sites.</li>
              <li><strong>ISO 9001:2015 certified.</strong></li>
              </ul>
              <p>The patent documents and both research papers are on the <a href="${ROUTES.downloads}">Downloads</a> page.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T7</span>
            Is it safe?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <ul>
              <li><strong>No gas storage.</strong> Gas is produced only on demand, in low, variable volumes, and stops with the engine.</li>
              <li><strong>Multiple maker-checker safety checks</strong> — pressure, temperature, excess current, low battery and more.</li>
              <li><strong>Full telemetry, complete logs and real-time alerts</strong> — less downtime, rapid service.</li>
              <li><strong>No change to the engine or its wiring.</strong> Your usual fuel remains the fuel; hydrogen acts only as an enhancer.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T8</span>
            What fuels does it work with?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <ul>
              <li><strong>Engines — GreenDrive, GreenX, GreenMarine:</strong> diesel engines.</li>
              <li><strong>Burners and furnaces — GreenEdge:</strong> any hydrocarbon fuel — gas, oil, coal or biomass.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T9</span>
            What is SGT OS?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p><strong>SGT OS</strong> is the control layer. It handles safety, operation, support and maintenance, and data recording.</p>
              <ul>
              <li>It varies hydrogen flow with engine RPM and load when the vehicle's CAN interface is active; otherwise it runs at an optimal constant flow set on the system.</li>
              <li>An on-site app over Bluetooth gives guided setup and health diagnostics — no network needed.</li>
              </ul>
              <p>More on the <a href="${ROUTES.sgtos}">SGT OS</a> page.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T10</span>
            What is GreenVision and how does it fit in?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p><strong>GreenVision</strong> is the data layer: a cloud platform, connected over ${CLAIMS.connectivity}, that measures every litre saved and every tonne of CO₂ avoided.</p>
              <ul>
              <li>Fuel saved and CO₂ avoided</li>
              <li>System health and real-time alerts</li>
              <li>Route and fleet views</li>
              <li>MRV-ready for ESG/BRSR reporting and carbon credits</li>
              </ul>
              <p>Hardware + Controls + Software = Decarbonisation infrastructure. More on the <a href="${ROUTES.greenvision}">GreenVision</a> page.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T11</span>
            How long does installation take? Is the engine modified?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>${CLAIMS.greendrive.install}, with no engine modification and no change to wiring.</p>
              <p>A GreenDrive unit is compact enough to mount anywhere on the vehicle frame — most commonly beside the fuel tank, or beside the battery, or wherever space allows. It starts and stops from the alternator signal or battery-charging data. An auxiliary water tank refilled from the driver's cabin is available as an optional accessory.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T12</span>
            Which engines and generator sizes does it suit?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>${CLAIMS.norms}; it is not limited to any emission stage.</p>
              <ul>
              <li><strong>GreenDrive One</strong> (12 V) — small commercial vehicles, engines below 3.5 L.</li>
              <li><strong>GreenDrive Neo</strong> (24 V) — medium commercial vehicles, engines above 3.5 L.</li>
              <li><strong>GreenDrive Pro</strong> (24 V) — large engines above 7 L: heavy trucks, earthmovers, construction vehicles.</li>
              <li><strong>GreenX</strong> — field-tested on DG sets from 125 to 1,500 kVA across multiple makes. Each DG gets one, two or more units depending on its air intakes and engine size.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T13</span>
            What does the system need to keep running?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>DM water only, from time to time — it is almost free to operate. A GreenDrive unit uses about 1 L per 12–20 hours of engine running, so the 5 L tank lasts 60–100 hours per refill.</p>
              <div class="highlight-box"><strong>Use DM water.</strong> A filter protects the system, but sustained use of non-DM water is harmful.</div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="faq-section" id="sec-commercial" data-section="commercial">
      <div class="section-header">
        <div class="section-badge">₹</div>
        <div class="section-title-wrap">
          <h2>Commercial Questions</h2>
          <p>For procurement teams, CFOs, and operations buyers</p>
        </div>
      </div>
      <div class="accordion">

        <div class="acc-item" data-section="commercial">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">C1</span>
            What does it cost?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>Pricing depends on the product and on your asset — the engine, generator, burner or furnace, and how it is run. Tell us what you operate and we will assess it and come back with a proposal.</p>
              <p><a href="${ROUTES.contact}">Talk to us</a>, or try the <a href="${ROUTES.calculator}">savings calculator</a> first.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="commercial">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">C2</span>
            What return on investment should I expect?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <ul>
              <li><strong>GreenDrive:</strong> most likely within 6 to 24 months.</li>
              <li><strong>GreenX:</strong> attractive ROI, depending on DG running hours and operating load.</li>
              <li><strong>GreenEdge:</strong> attractive ROI, depending on running hours and operating load.</li>
              </ul>
              <div class="highlight-box">${DISCLAIMER}</div>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="commercial">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">C3</span>
            Do you offer Decarbonisation-as-a-Service?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>We are building Decarbonisation-as-a-Service — measured, verified decarbonisation rather than just a device. <a href="${ROUTES.contact}">Talk to us</a>.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="commercial">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">C4</span>
            Can it support ESG reporting and carbon credits?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>Yes. GreenVision measures fuel saved and CO₂ avoided, and is MRV-ready for ESG/BRSR reporting and carbon credits. It is an authentic MRV layer from which customers can generate their own carbon-saving records.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="commercial">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">C5</span>
            What warranty do you offer?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>GreenDrive carries a 1-year standard warranty. For GreenX and GreenEdge, warranty terms are set out in your proposal.</p>
              <p>Savings vary by engine, asset and operating conditions, which is why every system records its own data in GreenVision.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="commercial">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">C6</span>
            Where are the systems made?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>Made in India, end to end. The sensors, power electronics and SGT OS controls are designed in-house and built in India to SGT's specifications. SGT HydroEdge is ISO 9001:2015 certified.</p>
              <div class="tag-row"><span class="tag yellow">Made in India</span><span class="tag green">ISO 9001:2015</span><span class="tag green">Patented</span></div>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="commercial">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">C7</span>
            How do I get started?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <div class="process-steps" style="flex-wrap:wrap; gap:12px;">
              <div class="step"><div class="step-num">1</div><div><strong>Enquiry</strong><br><small>Tell us about your fleet, DG sets, burners or furnaces</small></div></div>
              <div class="step-arrow">→</div>
              <div class="step"><div class="step-num">2</div><div><strong>Assessment</strong><br><small>We review your assets and how they run</small></div></div>
              <div class="step-arrow">→</div>
              <div class="step"><div class="step-num">3</div><div><strong>Installation</strong><br><small>Installed in hours, with no engine modification</small></div></div>
              <div class="step-arrow">→</div>
              <div class="step"><div class="step-num">4</div><div><strong>Measure</strong><br><small>GreenVision records fuel saved and CO₂ avoided</small></div></div>
              </div>
              <p><a href="${ROUTES.contact}">Request an assessment</a>.</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="faq-section" id="sec-solutions" data-section="solutions">
      <div class="section-header">
        <div class="section-badge">🏭</div>
        <div class="section-title-wrap">
          <h2>Solutions by Application</h2>
          <p>For fleet operators, power users and plant managers</p>
        </div>
      </div>
      <div class="accordion">

        <div class="acc-item" data-section="solutions">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">S1</span>
            What does GreenDrive do for trucks, buses and construction equipment?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p><strong>GreenDrive</strong> is an intelligent hydrogen fuel-assist retrofit for diesel vehicles — installed in hours, with no engine modification. It is a system of three parts: the GreenDrive Energy Core (hardware), SGT OS (control) and GreenVision (software).</p>
              <div class="stat-row">
              <div class="stat-chip">${CLAIMS.greendrive.fuelSaving}*<span>Fuel saving</span></div>
              <div class="stat-chip">${CLAIMS.greendrive.pm}<span>${CLAIMS.greendrive.nox}</span></div>
              <div class="stat-chip">${CLAIMS.greendrive.km}<span>Driven with GreenDrive</span></div>
              </div>
              <p>Applications: long-haul and distribution trucks, buses, mining and quarry vehicles, earthmovers and construction equipment.</p>
              <div class="highlight-box">* ${DISCLAIMER}</div>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="solutions">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">S2</span>
            How does GreenX work for diesel generator sets?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p><strong>GreenX</strong> is the same CHFA platform, applied to DG sets. Metered hydrogen enters the generator's air intake. It uses the same unit design, SGT OS and GreenVision as GreenDrive, and adds RS485 inputs.</p>
              <div class="stat-row">
              <div class="stat-chip">${CLAIMS.greenx.fuelSaving}*<span>Fuel saving</span></div>
              <div class="stat-chip">${CLAIMS.greenx.pm}<span>${CLAIMS.greenx.nox}</span></div>
              <div class="stat-chip">125 to 1,500 kVA<span>Field-tested, across multiple makes</span></div>
              </div>
              <p>It is market-ready, field-tested across multiple DG sets and makes, and backed by a peer-reviewed ARAI study covering five generator platforms. Applications: industrial backup power, power rental, hospitals, data centres, telecom and manufacturing plants.</p>
              <div class="highlight-box">* ${DISCLAIMER}</div>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="solutions">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">S3</span>
            What can GreenEdge do for my boiler, furnace or kiln?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p><strong>GreenEdge</strong> is CHFA for industrial burners and furnaces, on any hydrocarbon fuel — gas, oil, coal or biomass. A steadier flame needs less excess air, so less heat is lost up the stack.</p>
              <ul>
              <li>One model: <strong>GE12</strong> — 12 kW, 3,300 LPH of HHO per module.</li>
              <li>Modules cluster in arrays to 10,000, 20,000 LPH and beyond — for redundancy, safety and efficiency.</li>
              <li>The power supply is a digital IGBT rectifier integrated with SGT's PLC and controls, designed in-house and built in India to our specifications.</li>
              </ul>
              <div class="stat-row">
              <div class="stat-chip">${CLAIMS.greenedge.fuelSaving}*<span>Fuel saving</span></div>
              <div class="stat-chip">Lower smoke and PM<span>At the chimney</span></div>
              <div class="stat-chip">Lower CO₂<span>In line with lower fuel consumption</span></div>
              </div>
              <p>Applications: boilers, hot-water generators, furnaces, kilns and smelters. Field-validated at customer sites under the CII Ascent Grant 2026.</p>
              <div class="highlight-box">* ${DISCLAIMER}</div>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="solutions">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">S4</span>
            Does it work for marine vessels?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>${GREENMARINE_COPY}</p>
              <p><a href="${ROUTES.contact}">Talk to us about a marine pilot</a>.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="solutions">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">S5</span>
            Is it available outside India?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>Yes. GreenDrive is a global product, and SGT HydroEdge serves customers across India and internationally, in all segments. Everything is Made in India.</p>
              <p>We also welcome partners in new markets — see the Partnership section below.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="solutions">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">S6</span>
            How is this different from switching to EVs or to full hydrogen?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <div class="highlight-box">We don't ask you to replace the engines, burners and furnaces you run — we make them cleaner, and we prove it.</div>
              <p>The world's trucks, generators, ships, boilers and furnaces will not be replaced any time soon. CHFA works on the assets you already own, without changing the engine, the burner, the furnace or the fuel.</p>
              <div class="tag-row"><span class="tag green">No new fuel infrastructure</span><span class="tag green">No fleet replacement</span><span class="tag green">No stored hydrogen</span></div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="faq-section" id="sec-investor" data-section="investor">
      <div class="section-header">
        <div class="section-badge">📈</div>
        <div class="section-title-wrap">
          <h2>For Investors and Institutions</h2>
          <p>What the company is, and how to reach us</p>
        </div>
      </div>
      <div class="accordion">

        <div class="acc-item" data-section="investor">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">I1</span>
            What kind of company is SGT HydroEdge?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>SGT HydroEdge is a decarbonisation infrastructure company and solutions provider — not a device or kit manufacturer. The platform has three layers:</p>
              <ul>
              <li><strong>Core</strong> — the patented CHFA electrolyser (hardware).</li>
              <li><strong>Enablers</strong> — sensors, power electronics and SGT OS controls, designed in-house and built in India to SGT's specifications.</li>
              <li><strong>Data</strong> — GreenVision, which measures every litre saved and every tonne of CO₂ avoided; MRV-ready for ESG/BRSR reporting and carbon credits.</li>
              </ul>
              <p>One platform. Two applications: engines, and burners and furnaces.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="investor">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">I2</span>
            What are the company's credentials?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <ul>
              <li>Patented technology — Patent No. ${TECHNOLOGY.patentNo}</li>
              <li>ISO 9001:2015 certified</li>
              <li>Selected for the CII Ascent Grant 2026</li>
              <li>Winner — RAK Innovation Challenge</li>
              <li>Winner — LEAP Energy Award</li>
              <li>Peer-reviewed research — two papers published with ARAI in ARAI's journal</li>
              <li>Tested for over three years on real engines</li>
              <li>1,000,000+ km driven with GreenDrive</li>
              <li>Made in India, end to end</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="investor">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">I3</span>
            How do I request a meeting?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>“${LINES.ceo}” — ${COMPANY.founder.name}, ${COMPANY.founder.shortTitle}</p>
              <div class="highlight-box">
              <strong>Contact:</strong> <a href="mailto:${COMPANY.email}">${COMPANY.email}</a><br>
              <strong>Website:</strong> ${COMPANY.website}<br>
              <strong>Subject line:</strong> "Investor Inquiry — [Your Name / Organisation]"
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="faq-section" id="sec-partner" data-section="partner">
      <div class="section-header">
        <div class="section-badge">🤝</div>
        <div class="section-title-wrap">
          <h2>Partnership</h2>
          <p>For distributors, dealers and referral partners</p>
        </div>
      </div>
      <div class="accordion">

        <div class="acc-item" data-section="partner">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">P1</span>
            What types of partnership does SGT HydroEdge offer?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>${LINES.partner}</p>
              <ul>
              <li><strong>Distributor</strong></li>
              <li><strong>Dealer</strong></li>
              <li><strong>Referral partner</strong></li>
              </ul>
              <p>Details and the enquiry form are on the <a href="${ROUTES.partners}">Partners</a> page.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="partner">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">P2</span>
            What training does SGT HydroEdge provide to partners?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>We run training and certification for the people who install and support our systems. See <a href="${ROUTES.certification}">Training &amp; Certification</a>.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="partner">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">P3</span>
            How do I get started? Who do I contact?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <div class="highlight-box">
              <strong>Write to us:</strong> <a href="mailto:${COMPANY.email}">${COMPANY.email}</a><br>
              <strong>Subject line:</strong> "Partnership Inquiry — [Your Organisation / Region]"<br>
              <strong>Include:</strong> a brief overview of your organisation, your target markets, and the type of partnership you have in mind.
              </div>
              <p>Or use the enquiry form on the <a href="${ROUTES.partners}">Partners</a> page.</p>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div><!-- end faq-content -->
</div><!-- end main-layout -->`;

export default function KnowledgeBaseClient() {
  const stylesRef = useRef(false);

  useEffect(() => {
    if (stylesRef.current) return;
    const style = document.createElement("style");
    style.setAttribute("data-page", "FAQPage");
    style.textContent = PAGE_CSS;
    document.head.appendChild(style);
    stylesRef.current = true;
    return () => {
      style.remove();
      stylesRef.current = false;
    };
  }, []);

  // Initialize accordion, tabs, search, sidebar after DOM renders
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        // ── ACCORDION ──
        function toggle(btn: Element) {
          const item = btn.closest(".acc-item");
          if (!item) return;
          const body = item.querySelector(".acc-body") as HTMLElement | null;
          if (!body) return;
          const isOpen = item.classList.contains("open");
          const siblings = item.closest(".accordion")?.querySelectorAll(".acc-item");
          siblings?.forEach((s) => {
            s.classList.remove("open");
            const b = s.querySelector(".acc-body") as HTMLElement | null;
            if (b) b.style.maxHeight = "0";
          });
          if (!isOpen) {
            item.classList.add("open");
            body.style.maxHeight = body.scrollHeight + "px";
          }
        }
        (window as any).toggle = toggle;

        // ── TABS ──
        const tabBtns = document.querySelectorAll(".sgt-faq .tab-btn");
        const sections = document.querySelectorAll(".sgt-faq .faq-section");

        tabBtns.forEach((btn) => {
          btn.addEventListener("click", () => {
            tabBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            const target = (btn as HTMLElement).dataset.section;
            if (target) filterBySection(target);
          });
        });

        function filterBySection(section: string) {
          sections.forEach((sec) => {
            const el = sec as HTMLElement;
            el.style.display = section === "all" || el.dataset.section === section ? "" : "none";
          });
          clearSearchFn();
        }

        // ── SEARCH ──
        const searchInput = document.getElementById("searchInput") as HTMLInputElement | null;
        const searchClear = document.getElementById("searchClear") as HTMLElement | null;
        const emptyState = document.getElementById("emptyState") as HTMLElement | null;
        const resultsCount = document.getElementById("resultsCount") as HTMLElement | null;

        if (searchInput) {
          searchInput.addEventListener("input", () => {
            const q = searchInput.value.trim().toLowerCase();
            if (searchClear) searchClear.style.display = q ? "flex" : "none";
            tabBtns.forEach((b) => b.classList.remove("active"));
            document.querySelector(".sgt-faq [data-section=\"all\"]")?.classList.add("active");
            if (!q) { clearSearchFn(); return; }
            let totalVisible = 0;
            sections.forEach((sec) => {
              (sec as HTMLElement).style.display = "";
              const items = sec.querySelectorAll(".acc-item");
              let secVisible = 0;
              items.forEach((item) => {
                const text = item.textContent?.toLowerCase() || "";
                if (text.includes(q)) {
                  (item as HTMLElement).style.display = "";
                  secVisible++;
                  totalVisible++;
                } else {
                  (item as HTMLElement).style.display = "none";
                }
              });
              (sec as HTMLElement).style.display = secVisible > 0 ? "" : "none";
            });
            if (emptyState) emptyState.style.display = totalVisible === 0 ? "block" : "none";
            if (resultsCount) resultsCount.textContent = totalVisible > 0 ? totalVisible + " results" : "";
          });
        }

        function clearSearchFn() {
          if (searchInput) searchInput.value = "";
          if (searchClear) searchClear.style.display = "none";
          if (emptyState) emptyState.style.display = "none";
          if (resultsCount) resultsCount.textContent = "";
          sections.forEach((sec) => {
            (sec as HTMLElement).style.display = "";
            sec.querySelectorAll(".acc-item").forEach((item) => {
              (item as HTMLElement).style.display = "";
            });
          });
        }
        (window as any).clearSearch = clearSearchFn;

        if (searchClear) {
          searchClear.addEventListener("click", () => {
            clearSearchFn();
            searchInput?.focus();
          });
        }

        // ── SIDEBAR ──
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                const id = e.target.id;
                document.querySelectorAll(".sgt-faq .side-link").forEach((link) => {
                  link.classList.toggle("active", (link as HTMLAnchorElement).getAttribute("href") === "#" + id);
                });
              }
            });
          },
          { threshold: 0.2, rootMargin: "-80px 0px -60% 0px" }
        );
        document.querySelectorAll(".sgt-faq .faq-section[id]").forEach((s) => observer.observe(s));
      } catch (e) {
        console.error("FAQ script error:", e);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return <div className="sgt-faq" dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />;
}