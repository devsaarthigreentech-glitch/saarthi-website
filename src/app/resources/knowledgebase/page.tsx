// FAQPage.tsx
// Converted from standalone HTML → Next.js page component.
// All CSS scoped under .sgt-faq wrapper. No global leakage.

"use client";

import { useEffect, useRef } from "react";

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

const PAGE_HTML = `<!-- HERO -->
<section class="hero">
  <div class="hero-label">Help Centre</div>
  <h1>Everything you want to know about <em>Industrial Decarbonisation</em></h1>
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
    <span class="tab-icon">◈</span> All Questions <span class="tab-count" id="cnt-all">50</span>
  </button>
  <button class="tab-btn" data-section="tech">
    <span class="tab-icon">⚙</span> Technology <span class="tab-count" id="cnt-tech">12</span>
  </button>
  <button class="tab-btn" data-section="commercial">
    <span class="tab-icon">₹</span> Commercial <span class="tab-count" id="cnt-commercial">10</span>
  </button>
  <button class="tab-btn" data-section="solutions">
    <span class="tab-icon">🏭</span> Solutions <span class="tab-count" id="cnt-solutions">10</span>
  </button>
  <button class="tab-btn" data-section="investor">
    <span class="tab-icon">📈</span> Investors <span class="tab-count" id="cnt-investor">9</span>
  </button>
  <button class="tab-btn" data-section="partner">
    <span class="tab-icon">🤝</span> Partners <span class="tab-count" id="cnt-partner">9</span>
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
        <li><a href="#sec-commercial" class="side-link" data-target="sec-commercial">₹ Pricing & Commercials</a></li>
        <li><a href="#sec-solutions" class="side-link" data-target="sec-solutions">🏭 Solutions by Vertical</a></li>
        <li><a href="#sec-investor" class="side-link" data-target="sec-investor">📈 For Investors</a></li>
        <li><a href="#sec-partner" class="side-link" data-target="sec-partner">🤝 Partnership</a></li>
      </ul>
    </div>

    <div class="sidebar-section">
      <p class="sidebar-label">Quick links</p>
      <ul class="sidebar-links">
        <li><a href="/cdn-cgi/l/email-protection#2b4a4744406b584c5f43524f59444e4f4c4e05484446">✉ <span class="__cf_email__" data-cfemail="b3d2dfdcd8f3c0d4c7dbcad7c1dcd6d7d4d69dd0dcde">[email&#160;protected]</span></a></li>
        <li><a href="https://sgthydroedge.com">↗ sgthydroedge.com</a></li>
      </ul>
    </div>

    <div class="cta-card">
      <p>Still have questions? Our team is happy to walk you through any aspect of our technology or commercial model.</p>
      <a href="/cdn-cgi/l/email-protection#c0a3afaeb4a1a3b480b3a7b4a8b9a4b2afa5a4a7a5eea3afad">Get in touch →</a>
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

    <!-- ── SECTION 1: TECHNOLOGY ── -->
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
            What exactly is CHFA and how is it different from HHO kits I've seen online?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p><strong>CHFA (Controlled Hydrogen Fuel Assist)</strong> is SGT's proprietary patented technology for on-demand oxy-hydrogen (HHO) generation and injection into combustion systems. The key word is <em>controlled</em>.</p>
              <div class="highlight-box">
                <strong>The critical difference:</strong> Consumer HHO kits inject gas at a fixed, uncontrolled rate regardless of engine load. CHFA uses real-time load sensing and adaptive dosing logic to inject precisely the right amount of HHO for the operating condition — maximising efficiency while maintaining safety.
              </div>
              <p>The system electrolyses distilled water on-demand using DC power, producing HHO which is introduced upstream of the turbocharger or directly into the intake manifold. No hydrogen is stored — it is generated only when needed and consumed immediately.</p>
              <div class="tag-row">
                <span class="tag green">Patent Filed</span>
                <span class="tag green">ARAI Validated</span>
                <span class="tag">No Gas Storage</span>
                <span class="tag">No Engine Modification</span>
              </div>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T2</span>
            Does it work differently on engines vs. boilers vs. kilns?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>Yes. SGT operates two distinct technology platforms:</p>
              <ul>
                <li><strong>CHFA (Controlled Hydrogen Fuel Assist)</strong> — designed for reciprocating engines: DG sets, marine engines, trucks, mining/construction vehicles. HHO is injected into the air intake of the engine.</li>
                <li><strong>CHCA (Controlled Hydrogen Combustion Assist)</strong> — designed for industrial combustion systems: boilers and kilns. HHO is introduced into the combustion chamber or burner assembly and works alongside coal, biomass, diesel, CNG, LDO, HFO, or pet coke.</li>
              </ul>
              <p>Both platforms share the same core water electrolysis process but differ in gas flow rates, delivery mechanisms, and control architecture to match the specific combustion dynamics of each application.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T3</span>
            What are the actual fuel savings and emission reduction numbers?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <div class="stat-row">
                <div class="stat-chip">3–18%<span>Fuel savings range</span></div>
                <div class="stat-chip">Up to 95%<span>PM reduction</span></div>
                <div class="stat-chip">&gt;80%<span>CO reduction</span></div>
                <div class="stat-chip">Direct CO₂<span>proportional to fuel saved</span></div>
              </div>
              <p>Results vary by application, engine standard, fuel type, and operating conditions. DG set deployments (proven, deployed) show 3–12% fuel savings in real factory loads (Tested at real client factory locations). Vehicles tested across 3,00,000+ km show 4–18% depending on Euro standard and duty cycle.</p>
              <div class="highlight-box">
                <strong>Important context:</strong> Boiler and kiln solutions (CHCA) are currently in pilot development phase. Industrial-specific savings data will be available following ongoing pilot programmes.
              </div>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T4</span>
            Is there any scientific validation — not just claims?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>Yes. SGT has authored a peer-reviewed research paper in ARAI (Automotive Research Association of India) scientific journal, which is the Indian government's primary automotive testing authority. The paper documents controlled experiments on DG sets at multiple industrial facilities.</p>
              <ul>
                <li>Tested at Pharma company in Vizag (1010 kVA, 380 kVA)</li>
                <li>Tested at manufacturing company at Chennai</li>
                <li>NABL-accredited laboratory results</li>
                <li>All non-hydrogen variables controlled to isolate HHO effect</li>
              </ul>
              <p>Globally, hydrogen-in-combustion technology has been validated by multiple progressive industries globaly. SGT's technology makes this industrial-proven approach accessible outside China for the first time.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T5</span>
            What happens if the system malfunctions? Is it safe?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>Safety is architecturally embedded in every SGT system. Key safety mechanisms include:</p>
              <ul>
                <li><strong>No gas storage:</strong> HHO is generated on-demand and consumed immediately. There is no pressurised hydrogen cylinder or tank at any point.</li>
                <li><strong>Automatic shutdown:</strong> Over-temperature, over-pressure, low-water-level, and electrical fault detection trigger immediate shutdown.</li>
                <li><strong>No engine modification:</strong> The system is a bolt-on retrofit. Engine hardware, fuel injection, and combustion geometry are untouched — so removing the SGT unit makes no impact to the engine except that it might be running with more fuel and more emissions, like it did in normal state.</li>
                <li><strong>Fail-safe design:</strong> In the event of any system error, the unit shuts off and the host engine continues operating normally on its primary fuel. Diesel always remains the primary fuel for the engine and hydrogen acts only as an enhancer.</li>
              </ul>
              <div class="tag-row">
                <span class="tag green">CE Certified</span>
                <span class="tag green">UL Certified</span>
                <span class="tag green">RoHS Compliant</span>
                <span class="tag green">ISO 9001</span>
              </div>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T6</span>
            What fuels does the system work with?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>SGT's technology is fuel-agnostic by design. Supported primary fuels by application:</p>
              <ul>
                <li><strong>Industrial (CHCA):</strong> Coal, biomass, diesel, CNG, propane, LDO, HFO, pet coke</li>
                <li><strong>Marine (CHFA):</strong> HFO, MDO, MGO, diesel</li>
                <li><strong>Logistics / Engines on Wheels (CHFA):</strong> Diesel</li>
              </ul>
              <p>The HHO assist mechanism improves combustion completeness regardless of primary fuel type, which makes it applicable across a wide range of industrial and transportation assets.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T7</span>
            What is GreenVision and how does it fit in?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p><strong>GreenVision</strong> is SGT's AI-powered IoT and Digital Twin platform — the software layer that sits on top of the hardware. It provides:</p>
              <ul>
                <li>Real-time fuel monitoring and consumption tracking per asset (Whereever technically feasible)</li>
                <li>Emissions monitoring (CO₂, NOx, PM, SOx) with IPCC AR6 methodology</li>
                <li>Baseline normalisation and performance analytics</li>
                <li>Predictive maintenance alerts</li>
                <li>ESG-grade MRV (Measurement, Reporting, Verification) outputs</li>
                <li>Auto-generated compliance reports: BRSR, CBAM, IMO CII, CPCB</li>
                <li>Carbon credit documentation and market access support</li>
              </ul>
              <p>GreenVision transforms the hardware install into a continuous decarbonisation programme — giving customers verified data, not just a physical device.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T8</span>
            How long does installation take and is there engine downtime?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>Installation is designed to be minimally disruptive. The SGT system is a bolt-on retrofit that requires no modification to engine hardware, fuel systems, or combustion geometry.</p>
              <div class="process-steps">
                <div class="step"><div class="step-num">1</div> Site Assessment</div>
                <div class="step-arrow">→</div>
                <div class="step"><div class="step-num">2</div> Custom Engineering</div>
                <div class="step-arrow">→</div>
                <div class="step"><div class="step-num">3</div> Scheduled Install</div>
                <div class="step-arrow">→</div>
                <div class="step"><div class="step-num">4</div> Commissioning & Tuning</div>
                <div class="step-arrow">→</div>
                <div class="step"><div class="step-num">5</div> IoT Go-Live</div>
              </div>
              <p>For DG sets and vehicle applications, installation typically takes hours. For large industrial boilers and marine engines, installation is scheduled during planned maintenance windows to eliminate operational disruption.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T9</span>
            Does it work on all engine sizes and ages?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>SGT systems are custom-engineered to each application. The HHO dosing rate, flow control configuration, and injection point are all calibrated to the specific engine or combustion system.</p>
              <p>For vehicles, the system has been validated on Euro 3/ BS3 through Euro 6/ BS6 engines. Savings tend to be higher on older engines (Euro 3/4) due to less optimised combustion, and on engines under higher load conditions.</p>
              <p>For DG sets, the validated range spans 250 kVA to 1500 kVA in published testing, with the system scalable to larger installations. Industrial boiler and kiln solutions are engineered case-by-case given the wide variation in combustion temperatures, burner types, and fuel inputs.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T10</span>
            Why hasn't hydrogen assist been adopted everywhere already?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>A fair and important question. The honest answer has four parts:</p>
              <ul>
                <li><strong>It has been adopted — industrially.</strong> CEMEX, SCHOTT, Saint-Gobain, DR.Reddy's Lab, Coca Cola and Iris Ceramica all use hydrogen in combustion at scale for various industrial applications. What was missing was accessible equipment outside China.</li>
                <li><strong>Chinese monopoly.</strong> Industrial-grade on-demand HHO equipment was only manufactured in China. For global buyers concerned about supply chain, quality, or geopolitics, there was no alternative. SGT is the first manufacturer of industrial-grade HHO systems outside China.</li>
                <li><strong>Vehicle HHO had a bad reputation — for a reason.</strong> Uncontrolled injection on small engines showed inconsistent results. CHFA's controlled dosing solves this — documented in SGT's ARAI research paper.</li>
                <li><strong>Regulation just arrived.</strong> CPCB, IMO 2050, BRSR, and EU CBAM have created urgency that simply didn't exist 3 years ago. The cost of not decarbonising now exceeds the cost of our solution.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T11</span>
            What ongoing maintenance does the system require?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>The primary consumable is distilled water. The system generates HHO from water, so water levels need to be replenished periodically — typically daily to monthly depending on unit size and runtime.</p>
              <p>SGT offers Annual Maintenance Contracts (AMC) covering:</p>
              <ul>
                <li>Scheduled preventive maintenance visits</li>
                <li>Spare parts supply and replacement</li>
                <li>System calibration and performance optimisation</li>
                <li>24/7 remote monitoring via GreenVision IoT</li>
              </ul>
              <p>Under DaaS (Decarbonisation-as-a-Service) models, all maintenance is handled entirely by SGT — the customer simply consumes the fuel and emission savings. DaaS however is a service that is offered to selected enterprise based on SGT discretion.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="tech">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">T12</span>
            How does the comparison hold against scrubbers, SCR, or dual-fuel conversions?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <div class="comparison-widget">
                <div class="comp-header">
                  <div class="comp-header-cell">Feature</div>
                  <div class="comp-header-cell sgt">SGT HydroEdge</div>
                  <div class="comp-header-cell">Scrubber / SCR</div>
                </div>
                <div class="comp-row">
                  <div class="comp-cell">CapEx Model</div>
                  <div class="comp-cell sgt">Zero CapEx (DaaS) or outright</div>
                  <div class="comp-cell">High upfront investment</div>
                </div>
                <div class="comp-row">
                  <div class="comp-cell">Fuel Efficiency</div>
                  <div class="comp-cell sgt yes">Improved by 3–18%</div>
                  <div class="comp-cell no">Reduced (backpressure)</div>
                </div>
                <div class="comp-row">
                  <div class="comp-cell">CO₂ Reduction</div>
                  <div class="comp-cell sgt yes">Direct reduction</div>
                  <div class="comp-cell no">None (SOx/NOx only)</div>
                </div>
                <div class="comp-row">
                  <div class="comp-cell">Engine Modification</div>
                  <div class="comp-cell sgt">None required</div>
                  <div class="comp-cell">Structural changes needed</div>
                </div>
                <div class="comp-row">
                  <div class="comp-cell">ESG Data</div>
                  <div class="comp-cell sgt yes">Automated via GreenVision</div>
                  <div class="comp-cell no">Manual / third-party</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ── SECTION 2: COMMERCIAL ── -->
    <section class="faq-section" id="sec-commercial" data-section="commercial">
      <div class="section-header">
        <div class="section-badge">₹</div>
        <div class="section-title-wrap">
          <h2>Pricing & Commercial Model</h2>
          <p>For procurement teams, CFOs, and operations buyers</p>
        </div>
      </div>
      <div class="accordion">

        <div class="acc-item" data-section="commercial">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">C1</span>
            What does it cost and how is it priced?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>Pricing depends on the application. Indicative ranges:</p>
              <div class="stat-row">
                <div class="stat-chip">₹40K–₹1.8L<span>GreenDrive (vehicles)</span></div>
                <div class="stat-chip">₹50K–₹9L<span>GreenX (DG sets)</span></div>
                <div class="stat-chip">₹8L–₹60L+<span>GreenEdge (industrial)</span></div>
                <div class="stat-chip">₹1.5L–₹5L/mo<span>GreenMarine DaaS</span></div>
              </div>
              <p>Industrial solutions (boilers, kilns) are custom-engineered — pricing is case-specific based on capacity, fuel type, and deployment scope. We encourage an on-site assessment before quoting.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="commercial">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">C2</span>
            What is Decarbonisation-as-a-Service (DaaS)? How does the model work?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>DaaS is SGT's commercial model, designed to remove the biggest barrier to adoption — capital expenditure.</p>
              <div class="highlight-box">
                <strong>Under DaaS:</strong> You pay a small upfront. SGT installs, monitors, maintains, and optimises the system. You pay a monthly subscription fee thereafter. Your fuel savings are expected to exceed the subscription cost — delivering positive cash flow from day one.
              </div>
              <p>SGT manages all risk. You consume verified emission reductions and fuel savings. The GreenVision platform provides audit-ready data for your BRSR, CBAM, and sustainability reporting needs.</p>
              <div class="process-steps">
                <div class="step"><div class="step-num">1</div> Deploy</div>
                <div class="step-arrow">→</div>
                <div class="step"><div class="step-num">2</div> Optimise</div>
                <div class="step-arrow">→</div>
                <div class="step"><div class="step-num">3</div> Monitor</div>
                <div class="step-arrow">→</div>
                <div class="step"><div class="step-num">4</div> Maintain</div>
                <div class="step-arrow">→</div>
                <div class="step"><div class="step-num">5</div> Verify</div>
              </div>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="commercial">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">C3</span>
            What is the typical payback period if I buy outright?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>Payback depends on fuel costs, asset utilisation, and fuel savings achieved. Indicative payback timelines:</p>
              <div class="stat-row">
                <div class="stat-chip">6–24 months typically<span>DG sets (outright purchase)</span></div>
                <div class="stat-chip">3–6 months<span>Marine vessels (with DaaS breakeven) and expected ROI in 6 to 18 months in outright.</span></div>
                <div class="stat-chip">6–24 months<span>Heavy logistics vehicles</span></div>
              </div>
              <p>Marine payback is fastest because marine fuel (HFO/MDO) is expensive and vessels operate continuously. Contact us with your specific fuel consumption data and we'll provide a precise ROI calculation.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="commercial">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">C4</span>
            What if the savings don't materialise? What is SGT's commitment?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>Under DaaS, SGT's business model is aligned with your savings — we only succeed if you save. The GreenVision platform continuously monitors fuel consumption and system performance, providing an objective baseline for performance verification.</p>
              <p>For outright purchases, SGT conducts a paid Proof-of-Concept (POC) before any full deployment commitment. The POC validates savings at your specific site before you commit to full-scale rollout. </p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="commercial">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">C5</span>
            Can I get carbon credits for using your system?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>Yes — and this is a significant additional value stream. GreenVision generates verified, IPCC AR6-compliant emissions data that forms the basis for carbon credit claims. SGT's GreenMentor consulting arm provides end-to-end support for:</p>
              <ul>
                <li>Carbon credit documentation and methodology compliance</li>
                <li>Verification preparation under recognised standards</li>
                <li>Market access for selling generated credits</li>
              </ul>
              <p>The combination of real emission reductions + GreenVision's MRV data creates a documentable, monetisable carbon reduction programme — not just a hardware install.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="commercial">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">C6</span>
            Does your solution help with BRSR, CBAM, or IMO compliance?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>Directly yes. GreenVision auto-generates compliance-ready reports for:</p>
              <div class="tag-row">
                <span class="tag green">BRSR (India SEBI mandate)</span>
                <span class="tag green">EU CBAM</span>
                <span class="tag green">IMO CII ratings</span>
                <span class="tag green">CPCB emission norms</span>
                <span class="tag green">GHG Protocol Scope 1/2/3</span>
              </div>
              <p style="margin-top:12px">For large corporates under BRSR reporting obligations, the GreenVision platform transforms ESG data collection from a manual annual exercise into a continuous automated process — significantly reducing compliance cost and audit risk.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="commercial">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">C7</span>
            What's the process to get started? How long does it take?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <div class="process-steps" style="flex-wrap:wrap; gap:12px;">
                <div class="step"><div class="step-num">1</div><div><strong>Enquiry</strong><br><small>Share fuel consumption data + asset specs</small></div></div>
                <div class="step-arrow">→</div>
                <div class="step"><div class="step-num">2</div><div><strong>ROI Assessment</strong><br><small>SGT provides savings estimate within 48 hours</small></div></div>
                <div class="step-arrow">→</div>
                <div class="step"><div class="step-num">3</div><div><strong>Paid POC</strong><br><small>Site visit, installation, 30–60 day data collection</small></div></div>
                <div class="step-arrow">→</div>
                <div class="step"><div class="step-num">4</div><div><strong>Full Deployment</strong><br><small>Scale across fleet or facility</small></div></div>
              </div>
            </div>
          </div>
        </div>

        

        <div class="acc-item" data-section="commercial">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">C9</span>
            What warranties or guarantees do you offer?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>SGT hardware carries standard product warranty covering manufacturing defects. We are developing our product & technology and engaging with customers regularly, but do not give any gurantee for outcomes. Customer's are expected to measure and experiences changes and assess the ROI for their assets during POC. Products once sold cannot be returned. </p>
              <p>All systems include GreenVision IoT monitoring, which provides objective third-party-auditable performance data to verify savings continuously throughout the contract term.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="commercial">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">C10</span>
            Where are you manufactured? What is your supply chain?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>SGT HydroEdge manufactures at its <strong>GreenLabs facility in Chakan, Pune, Maharashtra</strong>. Phase 1 manufacturing capacity is designed for 100,000+ units per year.</p>
              <div class="highlight-box">
                <strong>Strategic advantage:</strong> SGT is the first manufacturer of industrial-grade on-demand HHO systems outside China. For global buyers seeking supply chain diversification, quality assurance, and non-China sourcing — SGT is currently the only credible alternative.
              </div>
              <div class="tag-row">
                <span class="tag yellow">Made in India</span>
                <span class="tag green">CE Certified</span>
                <span class="tag green">ISO 9001</span>
                <span class="tag green">ARAI Validated</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ── SECTION 3: SOLUTIONS ── -->
    <section class="faq-section" id="sec-solutions" data-section="solutions">
      <div class="section-header">
        <div class="section-badge">🏭</div>
        <div class="section-title-wrap">
          <h2>Solutions by Vertical</h2>
          <p>For plant managers, fleet operators, and vessel owners</p>
        </div>
      </div>
      <div class="accordion">

        <div class="acc-item" data-section="solutions">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">S1</span>
            What can your system do for my industrial boiler?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>SGT's <strong>GreenEdge</strong> boiler solution (CHCA technology) introduces HHO into the combustion chamber alongside your existing fuel — coal, biomass, diesel, CNG, LDO, or HFO. The expected benefits include improved combustion completeness, lower unburnt carbon, reduced soot and particulate emissions, and proportional CO₂ reduction.</p>
              <div class="highlight-box">
                <strong>Please note:</strong> Boiler solutions are currently in active pilot development with selected customers. We welcome enquiries from industrial boiler operators to participate in our pilot programme and access early pricing.
              </div>
              <p>Boiler sizes from small process boilers up to large steam generation plants can be evaluated. Custom engineering assessment required before deployment.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="solutions">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">S2</span>
            What about kilns — cement, ceramics, glass?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>Kilns represent one of the most compelling decarbonisation opportunities globally — and one of the hardest to address with conventional methods. SGT's CHCA technology for kilns is inspired by industrial deployments at CEMEX (cement, EU + Mexico), SCHOTT (glass, Germany), and Iris Ceramica (ceramics, Italy).</p>
              <div class="highlight-box">
                <strong>Please note:</strong> Kiln solutions (CHCA) are in pilot/development phase. We are actively seeking kiln operators in cement, ceramics, glass, and refractory industries for collaborative pilot programmes. These represent custom-engineered, project-specific solutions — not catalogue products.
              </div>
              <div class="tag-row">
                <span class="tag">Cement kilns</span>
                <span class="tag">Ceramics kilns</span>
                <span class="tag">Glass furnaces</span>
                <span class="tag">Refractory kilns</span>
                <span class="tag">Rotary kilns</span>
              </div>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="solutions">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">S3</span>
            How does it work for DG sets and power backup?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p><strong>GreenX</strong> is SGT's proven, commercially deployed DG set solution — the most validated product in the SGT portfolio. It uses CHFA technology to inject HHO into the DG engine's air intake, improving combustion and delivering 3–12% fuel savings alongside significant PM and CO emission reductions.</p>
              <div class="stat-row">
                <div class="stat-chip">3–12%<span>Diesel savings</span></div>
                <div class="stat-chip">Up to 95%<span>PM reduction</span></div>
                <div class="stat-chip">₹50K–₹9L<span>System cost range</span></div>
                <div class="stat-chip">250 kVA–1010 kVA+<span>Validated range</span></div>
              </div>
              <p>Primary markets: Telecom towers, data centres, pharmaceutical manufacturing, industrial facilities, hospitals. The DaaS model is available for large fleet installations with reputed companies. (10+ units).</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="solutions">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">S4</span>
            Does it work for marine vessels? What about IMO compliance?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p><strong>GreenMarine</strong> is SGT's solution for marine engines — designed for coastal, inland, and ocean-going vessels. The system is built for harsh marine environments with sealed, marine-grade construction and no hydrogen storage on board (eliminating SOLAS concerns).</p>
              <ul>
                <li>Fuel savings: 3–12% on HFO, MDO, or MGO</li>
                <li>Directly improves CII (Carbon Intensity Indicator) rating</li>
                <li>GreenVision provides auto-generated IMO CII and MARPOL Annex VI compliance reports</li>
                <li>DaaS (Small upfront & Zero Capex) available.</li>
              </ul>
              <p>With IMO 2050 net-zero targets and CII ratings creating commercial consequences for rated D/E vessels, GreenMarine provides immediate compliance improvement without dry-docking or engine replacement.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="solutions">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">S5</span>
            What about trucks, mining vehicles, and construction equipment?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p><strong>GreenDrive</strong> covers all diesel engines on wheels — from logistics fleets and long-haul trucks to mining haul trucks and construction equipment.</p>
              <div class="stat-row">
                <div class="stat-chip">3–15%<span>Diesel savings</span></div>
                <div class="stat-chip">Fast ROI capable <span>System cost range</span></div>
                <div class="stat-chip">3,00,000+ km<span>Tested distance</span></div>
              </div>
              <p> The GreenVision platform provides fleet-level emissions dashboards supporting BRSR and ESG disclosure requirements.</p>
              <p>Mining vehicles are a particularly compelling application: high fuel cost, heavy load operation, remote environments, and growing corporate sustainability mandates for mining firms.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="solutions">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">S6</span>
            Which industries and sectors are you targeting?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>SGT's three verticals address a wide range of industries:</p>
              <ul>
                <li><strong>Industrial:</strong> Cement, ceramics, glass, steel, textiles, chemicals, pharmaceuticals, food processing, refractory</li>
                <li><strong>Marine:</strong> Coastal shipping, international commercial shipping, fishing, ferry operators, navy, coast guard, port operations (tugs, dredgers)</li>
                <li><strong>Engines on Wheels:</strong> Logistics & trucking, mining, construction, municipal transport, last-mile delivery</li>
              </ul>
              <p>Across all sectors, the common thread is diesel or fossil fuel combustion under regulatory and cost pressure — the exact conditions where CHFA and CHCA create immediate, measurable value apart from reducing pollution significantly.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="solutions">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">S7</span>
            Is the solution available internationally or only in India?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>SGT is actively pursuing international markets, particularly where EU regulatory pressure (CBAM, emissions trading) and IMO 2050 create urgent demand.</p>
              <p>SGT is looking for capable partners to expand in global markets.</p>
              <div class="tag-row">
                <span class="tag green">India</span>
                <span class="tag green">South Asia</span>
                <span class="tag green">North America</span>
                <span class="tag">Middle East</span>
                <span class="tag">Europe (CE certified)</span>
                <span class="tag">Africa</span>
              </div>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="solutions">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">S8</span>
            What is the minimum fleet or asset size that makes economic sense?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>The minimum economically viable deployment depends on asset type:</p>
              <ul>
                <li><strong>DG sets:</strong> Even a single unit on a vehicle, DG, Marine or Industry asset is economically viable. </li>
                <li><strong>Marine vessels:</strong> Single vessel deployment is viable given high marine fuel costs. Payback under 6 months on most commercial vessels under DaaS monthly rental model.</li>
                <li><strong>Vehicles:</strong> Single unit retail purchase available. </li>
                <li><strong>Industrial (boiler/kiln):</strong> Single asset viability depends on fuel consumption — high-utilisation industrial boilers (running 20+ hours/day) typically see fastest payback. Custom assessment required.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="solutions">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">S9</span>
            How is this different from switching to EVs or full hydrogen?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <div class="highlight-box">
                <strong>The fundamental difference:</strong> EVs and full hydrogen are "decarbonise the future" strategies. SGT is a "decarbonise the present" strategy.
              </div>
              <p>EV transition requires new infrastructure, new vehicles, capital write-offs on existing fleets, and long procurement cycles. Full green hydrogen requires pipelines, storage, and supply chains that don't exist at scale today.</p>
              <p>SGT works on every fossil fuel asset you already own, today, without changing fuel or engine. It's the only decarbonisation solution that is immediately deployable at scale across existing industrial, marine, and transport assets — and delivers a financial return simultaneously.</p>
              <div class="tag-row">
                <span class="tag green">No new fuel infrastructure</span>
                <span class="tag green">No fleet replacement</span>
                <span class="tag green">Positive ROI from day 1</span>
                <span class="tag green">Deployable in weeks</span>
              </div>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="solutions">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">S10</span>
            Can you handle a pilot before committing to full rollout?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>Absolutely — and this is our preferred approach. Every engagement starts with a paid Proof-of-Concept (POC), which includes:</p>
              <ul>
                <li>Site/fleet assessment and engineering evaluation</li>
                <li>System installation on 1–3 representative assets</li>
                <li>7–60 day monitored operation with GreenVision data collection</li>
                <li>Detailed savings report with verified data before full deployment decision</li>
              </ul>
              <p>The POC is paid — depending on application — and the data gathered is yours regardless of the subsequent commercial decision. Several of our key enterprise relationships began as POCs. </p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ── SECTION 4: INVESTOR ── -->
    <section class="faq-section" id="sec-investor" data-section="investor">
      <div class="section-header">
        <div class="section-badge">📈</div>
        <div class="section-title-wrap">
          <h2>For Investors</h2>
          <p>Market opportunity, financials, and growth thesis</p>
        </div>
      </div>
      <div class="accordion">

        <div class="acc-item" data-section="investor">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">I1</span>
            What is the market size and addressable opportunity?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>The addressable market is vast across SGT's three verticals:</p>
              <ul>
                <li><strong>Industrial combustion:</strong> 50,000+ industrial boilers and kilns in India alone. CBAM and carbon pricing creating urgency in EU-connected supply chains globally.</li>
                <li><strong>Marine:</strong> 50,000+ ocean-going vessels globally facing IMO 2050 net-zero targets. India has 1,500+ coastal vessels under Sagarmala initiative.</li>
                <li><strong>DG sets:</strong> 15 million+ DG sets in India (telecom, data centres, industrial, commercial). Regulatory and cost pressure is acute.</li>
                <li><strong>Vehicles:</strong> Hundreds of millions of diesel commercial vehicles globally. India alone has 10M+ commercial trucks.</li>
              </ul>
              <p>SGT's non-China positioning creates an additional international opportunity — any market seeking supply chain diversification away from Chinese manufacturers is a natural target.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="investor">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">I2</span>
            What is SGT's revenue model and how does it scale?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>SGT has three revenue layers — each with different scaling characteristics:</p>
              <ul>
                <li><strong>GreenLabs (Hardware):</strong> Product sales (outright) and selective DaaS deployments. Hardware revenues grow with unit volume. High-ticket industrial and marine units drive non-linear revenue growth.</li>
                <li><strong>GreenVision (SaaS):</strong> Monthly/annual IoT platform subscription per connected unit. Scales directly with installed base — every hardware unit creates a recurring SaaS customer.</li>
                <li><strong>GreenMentor (Consulting):</strong> Decarbonisation strategy, regulatory compliance, carbon credit monetisation. Fee-based projects for enterprise clients.</li>
              </ul>
              <div class="highlight-box">
                Each installed hardware unit generates three revenue streams: hardware margin, AMC/maintenance, and GreenVision SaaS. This compounding dynamic creates significant per-unit lifetime value.
              </div>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="investor">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">I3</span>
            What is SGT's competitive moat? Why can't this be easily copied?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <ul>
                <li><strong>Patent protection:</strong> CHFA technology is patent-filed, covering the controlled dosing and adaptive load-sensing architecture.</li>
                <li><strong>First-mover outside China:</strong> No other non-Chinese manufacturer of industrial-grade on-demand HHO systems exists. Building this takes 3+ years of R&D and validation — not easily replicated.</li>
                <li><strong>ARAI validation:</strong> Peer-reviewed scientific validation creates a regulatory and credibility barrier that generic HHO kit suppliers cannot match.</li>
                <li><strong>GreenVision data lock-in:</strong> Once a customer's assets are monitored on GreenVision, the historical data, baselines, and ESG reports create significant switching costs.</li>
                <li><strong>Customer relationships:</strong> Enterprise relationships create reference customer advantages in each sector.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="investor">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">I4</span>
            What regulatory tailwinds support the business?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <div class="tag-row">
                <span class="tag green">Emission norms (Global)</span>
                <span class="tag green">IMO 2050 net-zero</span>
                <span class="tag green">EU CBAM (carbon border adjustment)</span>
                <span class="tag green">SEBI BRSR mandate</span>
                <span class="tag green">CII ratings (marine)</span>
                <span class="tag yellow">Carbon pricing globally</span>
              </div>
              <p style="margin-top:12px">Every one of these regulations creates a financial penalty for inaction — and a direct commercial case for SGT's solutions. The cost of non-compliance with CBAM alone for Indian exporters to Europe creates a multi-billion dollar incentive to reduce Scope 1 emissions at source.</p>
            </div>
          </div>
        </div>

        

        <div class="acc-item" data-section="investor">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">I6</span>
            What is the go-to-market strategy?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>SGT's GTM strategy is multi-channel, with priority on high-ticket industrial and marine deployments for revenue intensity:</p>
              <ul>
                <li><strong>Direct enterprise sales:</strong> Large industrial, marine, and fleet customers. High-value, long-term contracts.</li>
                <li><strong>Consulting firm partnerships:</strong> Global firms who serve decarbonisation clients. Revenue share on joint deployments.</li>
                <li><strong>Channel partners:</strong> Regional distributors in target markets (SE Asia, Middle East, EU, Africa).</li>
                <li><strong>Technology partnerships:</strong> IoT, cloud, and energy management firms who white-label GreenVision or co-deploy hardware.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="investor">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">I7</span>
            What are the key risks and how does SGT mitigate them?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <ul>
                <li><strong>Technology scepticism:</strong> Mitigated by ARAI-validated research paper, NABL testing, and paid POC model that lets customers verify results before committing.</li>
                <li><strong>Boiler/kiln development risk:</strong> CHFA (DG sets, vehicles, marine) is proven and deployed. Industrial combustion (CHCA) is in pilot development — revenue model is not dependent on CHCA succeeding in year 1.</li>
                <li><strong>Sales cycle length:</strong> Enterprise industrial and marine sales have long cycles. DG set and vehicle sales are faster. Portfolio diversification mitigates dependence on any single segment.</li>
                <li><strong>Competition:</strong> Chinese manufacturers are the primary alternative. SGT's non-China positioning is a differentiator in most international markets. Indian regulatory and enterprise preference also favours domestic supply.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="investor">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">I8</span>
            What is the long-term vision for SGT HydroEdge?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <div class="highlight-box">
                <strong>The vision:</strong> To be the global infrastructure company for industrial decarbonisation — delivering verified emission reductions across every fossil fuel asset on earth, through hardware, software, and consulting.
              </div>
              <p>The three-layer model (GreenLabs + GreenVision + GreenMentor) is designed to capture value at every level of the decarbonisation value chain — from the physical device to the carbon credit. By FY31, the target is a predominantly recurring revenue model where SaaS and consulting revenues represent a majority of total revenue, creating a defensible, high-margin business on top of a large installed hardware base.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="investor">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">I9</span>
            How do I access the investor deck or request a meeting?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>Please reach out directly to our founder and CEO, Alok Kumar, for investor discussions. We are actively engaging with strategic and financial investors aligned with our mission.</p>
              <div class="highlight-box">
                <strong>Contact:</strong> <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="e1808d8e8aa1928695899885938e84858684cf828e8c">[email&#160;protected]</a><br>
                <strong>Website:</strong> sgthydroedge.com<br>
                <strong>Use subject line:</strong> "Investor Inquiry — [Your Name / Fund]"
              </div>
              <p>Relevant materials available on request: Investor Presentation, Technology Pack (ARAI research paper), Financial Projections, and Product Brochures by vertical.</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ── SECTION 5: PARTNER ── -->
    <section class="faq-section" id="sec-partner" data-section="partner">
      <div class="section-header">
        <div class="section-badge">🤝</div>
        <div class="section-title-wrap">
          <h2>Partnership</h2>
          <p>For consulting firms, distributors, and technology integrators</p>
        </div>
      </div>
      <div class="accordion">

        <div class="acc-item" data-section="partner">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">P1</span>
            What types of partnerships does SGT offer?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>SGT operates three partnership categories:</p>
              <ul>
                <li><strong>Consulting Partners:</strong> Global and regional consulting firms (strategy, sustainability, engineering) who serve industrial, marine, or logistics clients needing decarbonisation solutions. Partners bring access to enterprise clients; SGT provides the technology, deployment, and GreenVision reporting platform.</li>
                <li><strong>Channel Partners:</strong> Regional distributors and systems integrators who deploy, install, and service SGT products in their territory. Particularly valued in SE Asia, Middle East, Africa, and Europe.</li>
                <li><strong>Technology Partners:</strong> IoT, cloud, energy management, and industrial automation firms who integrate with or white-label the GreenVision platform, or co-deploy hardware with their own solutions.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="partner">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">P2</span>
            What is the commercial model for consulting firm partners?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>Consulting partners earn across multiple revenue streams in a joint deployment:</p>
              <div class="stat-row">
                <div class="stat-chip">Consulting fees<span>Strategy & implementation</span></div>
                <div class="stat-chip">Technology referral<span>Hardware co-sell %</span></div>
                <div class="stat-chip">SaaS co-sell<span>GreenVision revenue share</span></div>
                <div class="stat-chip">Carbon advisory<span>Credit monetisation fees</span></div>
              </div>
              <p>The partnership is designed so that the consulting firm can offer a complete "Decarbonisation Programme" to their clients — strategy through implementation through monitoring — with SGT handling the technology layer while the partner manages the client relationship and advisory services.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="partner">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">P3</span>
            What does SGT need from a channel partner?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>Ideal channel partners have:</p>
              <ul>
                <li>Established customer relationships in industrial, marine, or logistics sectors</li>
                <li>Local market presence and regulatory knowledge in target territory</li>
                <li>Technical installation and service capabilities (or willingness to be trained)</li>
                <li>Access to decision-makers at fleet operators, plant managers, or vessel owners</li>
              </ul>
              <p>SGT provides: product training and certification, technical documentation, sales support, co-marketing materials, and the GreenVision platform for all customer monitoring and reporting.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="partner">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">P4</span>
            Can a partner white-label your technology?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>Yes, white-labelling arrangements are available for qualified partners, particularly for the GreenVision platform (which can be co-branded or privately labelled for enterprise deployments). Hardware white-labelling is available for channel partners managing significant volume.</p>
              <p>White-label terms are negotiated individually and include appropriate IP protections, exclusivity clauses (geographic or sector), and training and certification requirements. Contact us to discuss your specific use case.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="partner">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">P5</span>
            How does the partnership onboarding process work?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <div class="process-steps" style="flex-wrap:wrap; gap:14px;">
                <div class="step"><div class="step-num">1</div><div><strong>Discovery</strong><br><small>Initial call to understand partner capabilities and market fit</small></div></div>
                <div class="step-arrow">→</div>
                <div class="step"><div class="step-num">2</div><div><strong>Joint Design</strong><br><small>Define engagement model, territories, and revenue structure</small></div></div>
                <div class="step-arrow">→</div>
                <div class="step"><div class="step-num">3</div><div><strong>Pilot</strong><br><small>Joint deployment on 1–2 client accounts</small></div></div>
                <div class="step-arrow">→</div>
                <div class="step"><div class="step-num">4</div><div><strong>Formalise</strong><br><small>Sign partnership agreement</small></div></div>
                <div class="step-arrow">→</div>
                <div class="step"><div class="step-num">5</div><div><strong>Scale</strong><br><small>Expand across partner's client base</small></div></div>
              </div>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="partner">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">P6</span>
            What training and support does SGT provide to partners?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <ul>
                <li>Technical product training and installation certification for engineering teams</li>
                <li>Sales enablement: pitch decks, technical papers, ROI calculators, case studies</li>
                <li>GreenVision platform training for monitoring and ESG reporting</li>
                <li>Co-marketing support: joint events, content, and market development</li>
                <li>Dedicated partner account manager at SGT</li>
                <li>Access to ARAI research paper and scientific documentation for credibility</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="partner">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">P7</span>
            We are a sustainability consultancy — how do we position SGT to our clients?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <div class="highlight-box">
                <strong>Recommended framing:</strong> "Your clients need to decarbonise now — not when EV infrastructure arrives or green hydrogen becomes affordable. SGT makes existing assets cleaner, today, with a financial return. We bring the strategy and the relationships; they bring the technology and the data."
              </div>
              <p>Key client conversations where SGT is particularly relevant:</p>
              <ul>
                <li>Clients facing CBAM compliance pressure on India/Asia-to-Europe supply chains</li>
                <li>Listed companies under BRSR reporting obligations</li>
                <li>Shipping companies facing IMO CII rating deterioration</li>
                <li>Industrial clients with CPCB compliance deadlines</li>
                <li>Companies building carbon credit programmes</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="partner">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">P8</span>
            Are territorial exclusivity arrangements available?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <p>Yes, for channel and distribution partners meeting volume and capability thresholds, SGT can offer geographic or sector exclusivity. Exclusivity is typically structured with minimum annual volume commitments and performance milestones to ensure the market is being actively developed.</p>
              <p>Priority geographies currently being considered for exclusive arrangements: Southeast Asia (ex-Malaysia), Middle East, East Africa, and select European markets. Contact us to discuss your geography of interest.</p>
            </div>
          </div>
        </div>

        <div class="acc-item" data-section="partner">
          <button class="acc-q" onclick="toggle(this)">
            <span class="q-number">P9</span>
            How do I get started? Who do I contact?
            <span class="acc-arrow">▼</span>
          </button>
          <div class="acc-body">
            <div class="acc-inner">
              <div class="highlight-box">
                <strong>Write to us:</strong> <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="45262a2b31242631053622312d3c21372a202122206b262a28">[email&#160;protected]</a> or <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="d0b1bcbfbb90a3b7a4b8a9b4a2bfb5b4b7b5feb3bfbd">[email&#160;protected]</a><br>
                <strong>Subject line:</strong> "Partnership Inquiry — [Your Organisation / Region]"<br>
                <strong>Include:</strong> A brief overview of your organisation, your target markets, and the type of partnership you have in mind.
              </div>
              <p>We aim to respond within 48 hours and schedule a discovery call. A detailed Partnership Information Document is available on request.</p>
              <div class="tag-row">
                <span class="tag green">Partnership deck available</span>
                <span class="tag green">Technical documentation available</span>
                <span class="tag">Calendar booking available</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div><!-- end faq-content -->
</div><!-- end main-layout -->

<!-- FOOTER -->`;

export default function FAQPage() {
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