// TermsOfService.tsx
// Converted from standalone HTML. CSS scoped under .sgt-tos.

"use client";

import { useEffect, useRef } from "react";

const PAGE_CSS = `
    .sgt-tos, .sgt-tos *, .sgt-tos *::before, .sgt-tos *::after { box-sizing: border-box; margin: 0; padding: 0; }

    .sgt-tos {
      --green:       #1e9e4f;
      --green-light: #e8f7ee;
      --green-mid:   #b8dfc4;
      --dark:        #0f1f10;
      --dark-2:      #162818;
      --text:        #1a2b1c;
      --muted:       #5a7060;
      --border:      #d4e4d8;
      --bg:          #f7faf8;
      --white:       #ffffff;
      --amber:       #b45309;
      --amber-bg:    #fef3c7;
      --amber-border:#fcd34d;
    }

    

    .sgt-tos {
      font-family: 'Inter', sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.75;
      font-size: 15px;
      -webkit-font-smoothing: antialiased;
    }

    /* ── HEADER ── */
    
    
    .sgt-tos .logo-leaf {
      width: 28px; height: 28px;
      background: var(--green);
      border-radius: 50% 4px 50% 4px;
      display: flex; align-items: center; justify-content: center;
    }
    .sgt-tos .logo-leaf svg { width: 16px; height: 16px; color: #fff; }
    .sgt-tos .header-tag {
      font-size: 12px;
      color: rgba(255,255,255,0.45);
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    /* ── HERO ── */
    .sgt-tos .policy-hero {
      background: linear-gradient(135deg, var(--dark) 0%, #1a3d1e 100%);
      padding: 64px 48px 52px;
      text-align: center;
    }
    .sgt-tos .policy-hero-eyebrow {
      display: inline-block;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--green);
      background: rgba(30,158,79,0.15);
      border: 1px solid rgba(30,158,79,0.3);
      border-radius: 100px;
      padding: 5px 14px;
      margin-bottom: 20px;
    }
    .sgt-tos .policy-hero h1 {
      font-family: 'Syne', sans-serif;
      font-size: clamp(28px, 4vw, 42px);
      font-weight: 800;
      color: #fff;
      margin-bottom: 14px;
      line-height: 1.15;
    }
    .sgt-tos .policy-hero p {
      color: rgba(255,255,255,0.55);
      font-size: 14px;
      max-width: 520px;
      margin: 0 auto;
    }
    .sgt-tos .policy-hero p strong { color: rgba(255,255,255,0.8); font-weight: 500; }

    /* ── LAYOUT ── */
    .sgt-tos .policy-layout {
      max-width: 1100px;
      margin: 0 auto;
      padding: 56px 24px 80px;
      display: grid;
      grid-template-columns: 240px 1fr;
      gap: 48px;
      align-items: start;
    }

    /* ── SIDEBAR ── */
    .sgt-tos .policy-toc {
      position: sticky;
      top: 32px;
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px 0;
      overflow: hidden;
    }
    .sgt-tos .toc-title {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--muted);
      padding: 0 20px 12px;
      border-bottom: 1px solid var(--border);
      margin-bottom: 8px;
    }
    .sgt-tos .toc-list { list-style: none; }
    .sgt-tos .toc-list li a {
      display: block;
      padding: 7px 20px;
      font-size: 12.5px;
      color: var(--muted);
      text-decoration: none;
      border-left: 2px solid transparent;
      transition: all 0.15s;
      line-height: 1.4;
    }
    .sgt-tos .toc-list li a:hover {
      color: var(--green);
      border-left-color: var(--green);
      background: var(--green-light);
    }
    .sgt-tos .toc-num {
      display: inline-block;
      font-size: 10px;
      font-weight: 600;
      color: var(--green);
      margin-right: 4px;
      opacity: 0.7;
    }

    /* ── CONTENT ── */
    .sgt-tos .policy-content { min-width: 0; }

    /* Info strip */
    .sgt-tos .info-card {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1px;
      background: var(--border);
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      margin-bottom: 40px;
    }
    .sgt-tos .info-cell {
      background: var(--white);
      padding: 16px 20px;
    }
    .sgt-tos .info-cell-label {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--muted);
      font-weight: 600;
      margin-bottom: 4px;
    }
    .sgt-tos .info-cell-val {
      font-size: 13.5px;
      font-weight: 600;
      color: var(--text);
    }

    /* Section */
    .sgt-tos .policy-section {
      margin-bottom: 44px;
      scroll-margin-top: 32px;
    }
    .sgt-tos .section-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--green-light);
    }
    .sgt-tos .section-num {
      width: 32px; height: 32px;
      background: var(--green);
      color: #fff;
      border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      font-size: 13px;
      font-weight: 700;
      flex-shrink: 0;
    }
    .sgt-tos .section-header h2 {
      font-family: 'Syne', sans-serif;
      font-size: 19px;
      font-weight: 700;
      color: var(--dark);
    }

    .sgt-tos .policy-section p { margin-bottom: 12px; color: #2e3d30; }
    .sgt-tos .policy-section p:last-child { margin-bottom: 0; }

    .sgt-tos .policy-section h3 {
      font-size: 14px;
      font-weight: 700;
      color: var(--dark);
      margin: 20px 0 8px;
      padding-left: 12px;
      border-left: 3px solid var(--green);
    }

    .policy-section ul,
    .sgt-tos .policy-section ol {
      padding-left: 20px;
      margin-bottom: 12px;
      color: #2e3d30;
    }
    .sgt-tos .policy-section ul { list-style: none; padding-left: 0; }
    .sgt-tos .policy-section ul li {
      padding-left: 20px;
      position: relative;
      margin-bottom: 7px;
      line-height: 1.65;
    }
    .sgt-tos .policy-section ul li::before {
      content: '';
      position: absolute;
      left: 0; top: 9px;
      width: 6px; height: 6px;
      border-radius: 50%;
      background: var(--green);
      opacity: 0.6;
    }
    .sgt-tos .policy-section ol { padding-left: 22px; }
    .sgt-tos .policy-section ol li { margin-bottom: 7px; line-height: 1.65; }

    /* Highlight boxes */
    .sgt-tos .highlight-box {
      background: var(--green-light);
      border: 1px solid var(--green-mid);
      border-left: 4px solid var(--green);
      border-radius: 8px;
      padding: 16px 20px;
      margin: 16px 0;
      font-size: 14px;
      color: var(--text);
    }
    .sgt-tos .highlight-box strong { color: var(--green); }

    .sgt-tos .warning-box {
      background: var(--amber-bg);
      border: 1px solid var(--amber-border);
      border-left: 4px solid var(--amber);
      border-radius: 8px;
      padding: 16px 20px;
      margin: 16px 0;
      font-size: 14px;
      color: #78350f;
    }
    .sgt-tos .warning-box strong { color: var(--amber); }

    /* Table */
    .sgt-tos .policy-table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;
      font-size: 13.5px;
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid var(--border);
    }
    .sgt-tos .policy-table thead tr { background: var(--dark); color: #fff; }
    .sgt-tos .policy-table thead th {
      padding: 12px 16px;
      text-align: left;
      font-weight: 600;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .sgt-tos .policy-table tbody tr { background: var(--white); }
    .sgt-tos .policy-table tbody tr:nth-child(even) { background: var(--bg); }
    .sgt-tos .policy-table tbody td {
      padding: 11px 16px;
      border-bottom: 1px solid var(--border);
      vertical-align: top;
      color: #2e3d30;
    }
    .sgt-tos .policy-table tbody tr:last-child td { border-bottom: none; }

    /* Definition term */
    .sgt-tos .def-term {
      font-weight: 700;
      color: var(--dark);
    }

    /* Contact card */
    .sgt-tos .contact-card {
      background: var(--dark);
      border-radius: 12px;
      padding: 28px;
      color: #fff;
      margin-top: 16px;
    }
    .sgt-tos .contact-card h3 {
      font-family: 'Syne', sans-serif;
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      border-left: none;
      padding-left: 0;
      margin-top: 0;
      margin-bottom: 16px;
    }
    .sgt-tos .contact-row {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 10px;
      font-size: 14px;
      color: rgba(255,255,255,0.75);
    }
    .sgt-tos .contact-row:last-child { margin-bottom: 0; }
    .sgt-tos .contact-icon {
      width: 28px; height: 28px;
      background: rgba(30,158,79,0.2);
      border-radius: 6px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .sgt-tos .contact-icon svg { width: 14px; height: 14px; color: var(--green); }
    .sgt-tos .contact-row a { color: #6cd98a; text-decoration: none; }
    .sgt-tos .contact-row a:hover { text-decoration: underline; }

    /* Product tag badges */
    .sgt-tos .product-tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0; }
    .sgt-tos .ptag {
      display: inline-block;
      font-size: 11.5px;
      font-weight: 600;
      padding: 4px 12px;
      border-radius: 100px;
      background: var(--green-light);
      color: var(--green);
      border: 1px solid var(--green-mid);
    }

    /* ── FOOTER ── */
    
    
    

    /* ── RESPONSIVE ── */
    @media (max-width: 860px) {
      .sgt-tos .policy-layout { grid-template-columns: 1fr; padding: 40px 20px 60px; }
      .sgt-tos .policy-toc { position: static; }
      .sgt-tos .info-card { grid-template-columns: 1fr; }
      
      .sgt-tos .policy-hero { padding: 48px 24px 40px; }
    }
  `;

const PAGE_HTML = `<!-- HERO -->
<div class="policy-hero">
  <div class="policy-hero-eyebrow"></div>
  <h1>Terms of Service</h1>
  <p>Please read these terms carefully before using our website, products, or platforms.<br>
  <strong>Last Updated: March 2026</strong> &nbsp;·&nbsp; Effective: March 20, 2026</p>
</div>

<!-- LAYOUT -->
<div class="policy-layout">

  <!-- SIDEBAR -->
  <nav class="policy-toc" aria-label="Table of Contents">
    <div class="toc-title">Contents</div>
    <ul class="toc-list">
      <li><a href="#s1"><span class="toc-num">01</span> Definitions</a></li>
      <li><a href="#s2"><span class="toc-num">02</span> Acceptance of Terms</a></li>
      <li><a href="#s3"><span class="toc-num">03</span> Products &amp; Services</a></li>
      <li><a href="#s4"><span class="toc-num">04</span> Website Use</a></li>
      <li><a href="#s5"><span class="toc-num">05</span> GreenVision Platform</a></li>
      <li><a href="#s6"><span class="toc-num">06</span> DaaS &amp; Rental Terms</a></li>
      <li><a href="#s7"><span class="toc-num">07</span> Purchase &amp; Payment</a></li>
      <li><a href="#s8"><span class="toc-num">08</span> Installation &amp; Maintenance</a></li>
      <li><a href="#s9"><span class="toc-num">09</span> Performance Claims</a></li>
      <li><a href="#s10"><span class="toc-num">10</span> Intellectual Property</a></li>
      <li><a href="#s11"><span class="toc-num">11</span> Confidentiality</a></li>
      <li><a href="#s12"><span class="toc-num">12</span> Disclaimers</a></li>
      <li><a href="#s13"><span class="toc-num">13</span> Limitation of Liability</a></li>
      <li><a href="#s14"><span class="toc-num">14</span> Indemnification</a></li>
      <li><a href="#s15"><span class="toc-num">15</span> Term &amp; Termination</a></li>
      <li><a href="#s16"><span class="toc-num">16</span> Governing Law</a></li>
      <li><a href="#s17"><span class="toc-num">17</span> Amendments</a></li>
      <li><a href="#s18"><span class="toc-num">18</span> Contact Us</a></li>
    </ul>
  </nav>

  <!-- CONTENT -->
  <main class="policy-content">

    <!-- Info strip -->
    <div class="info-card">
      <div class="info-cell">
        <div class="info-cell-label">Company</div>
        <div class="info-cell-val">SGT HydroEdge Private Limited</div>
      </div>
      <div class="info-cell">
        <div class="info-cell-label">Jurisdiction</div>
        <div class="info-cell-val">Republic of India</div>
      </div>
      <div class="info-cell">
        <div class="info-cell-label">Governing Law</div>
        <div class="info-cell-val">Laws of India · Pune Courts</div>
      </div>
    </div>

    <!-- S1 -->
    <section class="policy-section" id="s1">
      <div class="section-header">
        <div class="section-num">1</div>
        <h2>Definitions</h2>
      </div>
      <p>The following terms are used throughout this document with the meanings set out below:</p>
      <ul>
        <li><span class="def-term">"SGT HydroEdge" / "we" / "us" / "our"</span> — SGT HydroEdge Private Limited, a company incorporated under the Companies Act, 2013, with its principal place of business in Pune, Maharashtra, India.</li>
        <li><span class="def-term">"You" / "User" / "Customer"</span> — any individual or legal entity that accesses the Website, uses our Products, or enters into a Service agreement with SGT HydroEdge.</li>
        <li><span class="def-term">"Website"</span> — the website located at <strong>www.sgthydroedge.com</strong> and all associated sub-domains and pages.</li>
        <li><span class="def-term">"Products"</span> — all SGT HydroEdge hardware devices, including GreenEdge (industrial boilers/kilns), GreenMarine (marine vessels), GreenX (DG sets and power backup), and GreenDrive (engines on wheels: logistics, mining, and construction), as well as any future products.</li>
        <li><span class="def-term">"Platform" / "GreenVision"</span> — the AI-powered IoT Digital Twin software platform operated by SGT HydroEdge, including web dashboards, mobile applications, APIs, and associated services.</li>
        <li><span class="def-term">"DaaS"</span> — Decarbonisation-as-a-Service, SGT HydroEdge's subscription-based rental and managed service model where hardware is deployed without upfront capital expenditure in exchange for a recurring monthly fee.</li>
        <li><span class="def-term">"GreenMentor Services"</span> — decarbonisation consulting, regulatory advisory, carbon credit documentation, and training services provided by SGT HydroEdge.</li>
        <li><span class="def-term">"Agreement"</span> — these Terms of Service together with any specific Order Form, Service Schedule, DaaS Agreement, or Supply Contract entered into between you and SGT HydroEdge.</li>
        <li><span class="def-term">"Content"</span> — all text, graphics, images, data, documents, software, and other material available on the Website or Platform.</li>
      </ul>
    </section>

    <!-- S2 -->
    <section class="policy-section" id="s2">
      <div class="section-header">
        <div class="section-num">2</div>
        <h2>Acceptance of Terms</h2>
      </div>
      <p>By accessing the Website, using the GreenVision Platform, purchasing our Products, or entering into any service arrangement with SGT HydroEdge, you confirm that you have read, understood, and agree to be bound by these Terms of Service and our <a href="privacy-policy.html" style="color:var(--green)">Privacy Policy</a>.</p>
      <p>If you are acting on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms. If you do not have such authority, or if you do not agree to these Terms, you must not use our Services.</p>
      <div class="highlight-box">
        <strong>Business Users:</strong> These Terms apply to B2B engagements between SGT HydroEdge and corporate customers, fleet operators, industrial facilities, shipping companies, and institutional partners. Where a separate written contract (such as a DaaS Agreement or Supply Contract) exists, that contract governs and these Terms apply to matters not covered therein.
      </div>
    </section>

    <!-- S3 -->
    <section class="policy-section" id="s3">
      <div class="section-header">
        <div class="section-num">3</div>
        <h2>Products &amp; Services Overview</h2>
      </div>
      <p>SGT HydroEdge offers a hardware + software + consulting model across three industry verticals:</p>
      <div class="product-tags">
        <span class="ptag">GreenEdge — Industry</span>
        <span class="ptag">GreenMarine — Marine</span>
        <span class="ptag">GreenX — DG &amp; Power</span>
        <span class="ptag">GreenDrive — Engines on Wheels</span>
        <span class="ptag">GreenVision — IoT Platform</span>
        <span class="ptag">GreenMentor — Consulting</span>
      </div>
      <p>Our Products and Services are offered under three commercial models:</p>
      <table class="policy-table">
        <thead>
          <tr>
            <th>Model</th>
            <th>Description</th>
            <th>Ownership</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Direct Sale (CapEx)</strong></td>
            <td>Outright purchase of hardware with optional Annual Maintenance Contract (AMC) and GreenVision subscription</td>
            <td>Customer owns the hardware upon full payment</td>
          </tr>
          <tr>
            <td><strong>DaaS — Decarbonisation-as-a-Service</strong></td>
            <td>No upfront cost. SGT HydroEdge installs and maintains the hardware; customer pays a monthly subscription. Includes GreenVision platform access</td>
            <td>SGT HydroEdge retains ownership of hardware throughout the DaaS term</td>
          </tr>
          <tr>
            <td><strong>Hybrid / Pilot</strong></td>
            <td>A pilot phase commences on DaaS terms, with an option to convert to outright purchase upon performance validation</td>
            <td>Ownership transfers to customer on full purchase payment</td>
          </tr>
        </tbody>
      </table>
      <p>Specific terms for each commercial model will be detailed in the relevant Order Form or Service Schedule, which forms part of the Agreement between you and SGT HydroEdge.</p>
    </section>

    <!-- S4 -->
    <section class="policy-section" id="s4">
      <div class="section-header">
        <div class="section-num">4</div>
        <h2>Website Use</h2>
      </div>
      <p>Access to and use of the Website is governed by the following conditions:</p>

      <h3>Permitted Use</h3>
      <ul>
        <li>You may browse, download, and print content from the Website solely for your personal and internal business purposes relating to evaluating or using SGT HydroEdge products and services.</li>
        <li>You may submit enquiries and contact forms for legitimate business purposes.</li>
      </ul>

      <h3>Prohibited Use</h3>
      <ul>
        <li>Reproducing, redistributing, or commercially exploiting any Website Content without our prior written consent.</li>
        <li>Using automated tools, scrapers, or bots to extract data from the Website.</li>
        <li>Attempting to gain unauthorised access to any part of the Website, GreenVision Platform, or underlying systems.</li>
        <li>Uploading or transmitting malicious code, viruses, or any material that is unlawful, defamatory, or harmful.</li>
        <li>Impersonating SGT HydroEdge, its employees, or partners in any communication.</li>
        <li>Using the Website in any manner that could damage, disable, or impair its operation.</li>
      </ul>

      <p>SGT HydroEdge reserves the right to suspend or restrict access to the Website for any user who violates these conditions, without prior notice.</p>
    </section>

    <!-- S5 -->
    <section class="policy-section" id="s5">
      <div class="section-header">
        <div class="section-num">5</div>
        <h2>GreenVision Platform Terms</h2>
      </div>
      <p>Access to and use of the GreenVision IoT Digital Twin platform is subject to the following additional terms:</p>

      <h3>Access and Accounts</h3>
      <ul>
        <li>Access is granted to authorised users designated by the Customer organisation. You are responsible for maintaining the confidentiality of login credentials and for all activity under your account.</li>
        <li>You must notify SGT HydroEdge immediately if you suspect any unauthorised access to your account.</li>
        <li>SGT HydroEdge reserves the right to suspend platform access in the event of non-payment, breach of these Terms, or security threats.</li>
      </ul>

      <h3>Data and Reports</h3>
      <ul>
        <li>Operational and telemetry data generated by your installed equipment remains your property. SGT HydroEdge processes this data solely to deliver platform services and improve product performance.</li>
        <li>ESG reports, BRSR documentation, and carbon credit records generated on the Platform for your operations are your property and will not be shared with third parties without your explicit consent.</li>
        <li>SGT HydroEdge may use anonymised and aggregated data derived from the installed base for benchmarking, product development, and general analytics, provided such use cannot identify you or your operations.</li>
      </ul>

      <h3>Service Availability</h3>
      <ul>
        <li>SGT HydroEdge will use commercially reasonable efforts to maintain platform availability. Planned maintenance windows will be notified in advance where practicable.</li>
        <li>SGT HydroEdge does not guarantee uninterrupted, error-free platform operation and shall not be liable for losses arising from temporary unavailability due to maintenance, connectivity issues, or force majeure.</li>
      </ul>

      <h3>Subscription and Fees</h3>
      <ul>
        <li>Platform access fees are set out in your Order Form or DaaS Agreement. Fees are invoiced monthly or annually as agreed.</li>
        <li>Continued access to the Platform is contingent on timely payment of applicable subscription fees.</li>
      </ul>
    </section>

    <!-- S6 -->
    <section class="policy-section" id="s6">
      <div class="section-header">
        <div class="section-num">6</div>
        <h2>DaaS &amp; Rental Terms</h2>
      </div>
      <p>Where SGT HydroEdge Products are deployed under a Decarbonisation-as-a-Service (DaaS) or rental arrangement, the following terms apply in addition to any specific DaaS Agreement:</p>

      <h3>Equipment Ownership</h3>
      <ul>
        <li>All hardware deployed under a DaaS arrangement remains the exclusive property of SGT HydroEdge at all times. The Customer acquires no ownership interest in the equipment.</li>
        <li>The Customer may not sell, transfer, pledge, sub-lease, or encumber the equipment in any manner without SGT HydroEdge's prior written consent.</li>
      </ul>

      <h3>Customer Obligations</h3>
      <ul>
        <li>Provide reasonable access to the installation site and equipment for installation, maintenance, inspection, and retrieval by SGT HydroEdge personnel or authorised service partners.</li>
        <li>Maintain the installation environment in accordance with SGT HydroEdge's technical specifications (water supply, power supply, ambient conditions).</li>
        <li>Not attempt to modify, tamper with, repair, or relocate the equipment without SGT HydroEdge's prior written authorisation.</li>
        <li>Report any malfunction, damage, or performance anomaly to SGT HydroEdge promptly.</li>
        <li>Take reasonable care to prevent damage to the equipment from negligent use, misuse, or third-party interference.</li>
      </ul>

      <h3>Monthly Fees and Payment</h3>
      <ul>
        <li>Monthly DaaS fees are as set out in the applicable Service Schedule and are payable in advance unless otherwise agreed in writing.</li>
        <li>Invoices unpaid beyond 30 days of the due date may attract interest at 1.5% per month on the outstanding balance, and SGT HydroEdge reserves the right to suspend services until all outstanding amounts are cleared.</li>
      </ul>

      <h3>Equipment Return</h3>
      <ul>
        <li>On expiry or termination of the DaaS Agreement, the Customer must permit SGT HydroEdge to retrieve the equipment within 30 days. The equipment must be returned in good working condition, subject to fair wear and tear.</li>
        <li>Any damage beyond fair wear and tear will be assessed and charged to the Customer at prevailing repair or replacement costs.</li>
      </ul>
    </section>

    <!-- S7 -->
    <section class="policy-section" id="s7">
      <div class="section-header">
        <div class="section-num">7</div>
        <h2>Purchase &amp; Payment Terms</h2>
      </div>
      <p>The following terms apply to outright purchases of SGT HydroEdge Products:</p>

      <h3>Orders and Pricing</h3>
      <ul>
        <li>All orders are subject to SGT HydroEdge's written order confirmation. Prices quoted are valid for 30 days unless otherwise stated.</li>
        <li>Prices are exclusive of GST and applicable taxes unless expressly stated otherwise. All applicable taxes will be added to the invoice.</li>
        <li>SGT HydroEdge reserves the right to revise pricing for new orders. Confirmed orders are not subject to price revision.</li>
      </ul>

      <h3>Payment</h3>
      <ul>
        <li>Standard payment terms are 50% advance on order confirmation and 50% prior to dispatch, unless a credit facility has been separately agreed in writing.</li>
        <li>Payment shall be made by bank transfer (NEFT / RTGS / IMPS) to the SGT HydroEdge bank account specified on the invoice. SGT HydroEdge is not liable for payments made to incorrect accounts provided by third parties.</li>
        <li>Title in and risk of the goods passes to the Customer upon full payment and delivery/installation.</li>
      </ul>

      <h3>Cancellations and Refunds</h3>
      <ul>
        <li>Order cancellations requested before production commences may be subject to an administrative charge. Cancellations after production commences will forfeit the advance payment.</li>
        <li>Returns of installed or customised equipment will not be accepted except where equipment is found to be defective on delivery. Any defects must be reported in writing within 7 days of delivery.</li>
      </ul>
    </section>

    <!-- S8 -->
    <section class="policy-section" id="s8">
      <div class="section-header">
        <div class="section-num">8</div>
        <h2>Installation &amp; Maintenance</h2>
      </div>

      <h3>Installation</h3>
      <ul>
        <li>Installation of SGT HydroEdge Products will be carried out by trained SGT HydroEdge engineers or authorised service partners. Installation timelines will be agreed at the time of order.</li>
        <li>The Customer is responsible for ensuring that the installation site meets all pre-installation requirements communicated by SGT HydroEdge, including adequate water supply, electrical connections, and unobstructed access.</li>
        <li>Any delay caused by the Customer's failure to meet site readiness requirements may result in installation rescheduling and additional charges.</li>
      </ul>

      <h3>Annual Maintenance Contracts (AMC)</h3>
      <ul>
        <li>AMC coverage, frequency of service visits, response times, and exclusions will be detailed in the applicable AMC Schedule.</li>
        <li>AMC does not cover damage caused by misuse, unauthorised modification, external interference, force majeure, or failure to maintain the installation environment per SGT HydroEdge specifications.</li>
        <li>Spare parts required under AMC will be covered as specified in the AMC Schedule. Parts required outside the scope of AMC will be charged separately.</li>
      </ul>

      <h3>Warranty</h3>
      <ul>
        <li>All SGT HydroEdge Products carry a limited warranty as specified in the product documentation and Order Form. Standard warranty covers manufacturing defects for a period of 12 months from the date of installation.</li>
        <li>Warranty is void if the equipment is tampered with, modified, or serviced by an unauthorised party.</li>
      </ul>
    </section>

    <!-- S9 -->
    <section class="policy-section" id="s9">
      <div class="section-header">
        <div class="section-num">9</div>
        <h2>Performance Claims &amp; Results</h2>
      </div>
      <div class="warning-box">
        <strong>Important Notice:</strong> Fuel savings and emission reduction figures referenced in SGT HydroEdge marketing materials, website content, and product literature represent ranges observed across research studies and customer deployments. Actual results will vary depending on application, fuel type, engine condition, operating load, maintenance practices, and other site-specific factors.
      </div>
      <ul>
        <li>SGT HydroEdge does not guarantee specific fuel savings percentages or emission reduction figures for any individual installation. Performance projections provided during pre-sales assessments are estimates based on available data and are not contractual commitments unless explicitly stated in a signed Service Level Agreement.</li>
        <li>GreenVision platform data, baselines, and efficiency calculations are derived from IoT sensor readings and AI-normalised models. While these provide commercially reasonable measurement and verification, they are not a substitute for formal third-party audit where required for regulatory or carbon credit purposes.</li>
        <li>Any performance guarantees or minimum savings thresholds, if applicable, will be explicitly stated in a signed Performance Guarantee Schedule forming part of the relevant Agreement.</li>
        <li>SGT HydroEdge's ARAI-validated research and NABL laboratory results represent tested conditions and do not constitute a warranty of identical results in all operational environments.</li>
      </ul>
    </section>

    <!-- S10 -->
    <section class="policy-section" id="s10">
      <div class="section-header">
        <div class="section-num">10</div>
        <h2>Intellectual Property</h2>
      </div>
      <p>All intellectual property rights in and relating to SGT HydroEdge Products, the GreenVision Platform, the Website, and associated Content are and remain the exclusive property of SGT HydroEdge Private Limited or its licensors.</p>
      <ul>
        <li><strong>Patent rights:</strong> SGT HydroEdge's HHO generation cell design, IGBT power supply architecture, and related technology are the subject of patent applications. Any unauthorised replication, reverse engineering, or copying of the technology is strictly prohibited.</li>
        <li><strong>Brand and trademarks:</strong> "SGT HydroEdge", "GreenEdge", "GreenMarine", "GreenX", "GreenDrive", "GreenVision", "GreenMentor", and associated logos are trademarks of SGT HydroEdge Private Limited. You may not use these marks without prior written consent.</li>
        <li><strong>Website content:</strong> You may not reproduce, republish, distribute, or create derivative works from Website Content without express written permission.</li>
        <li><strong>Customer data:</strong> Notwithstanding the above, operational and performance data generated by your equipment on the GreenVision Platform remains your property as detailed in Section 5.</li>
        <li><strong>Feedback:</strong> Any feedback, suggestions, or ideas you provide regarding our Products or Services may be used by SGT HydroEdge without restriction or compensation.</li>
      </ul>
    </section>

    <!-- S11 -->
    <section class="policy-section" id="s11">
      <div class="section-header">
        <div class="section-num">11</div>
        <h2>Confidentiality</h2>
      </div>
      <p>Each party acknowledges that in the course of the commercial relationship, they may receive or have access to confidential information of the other party ("Confidential Information"), including but not limited to technical specifications, pricing, business plans, customer data, and operational information.</p>
      <ul>
        <li>Each party agrees to keep Confidential Information strictly confidential, to use it solely for the purpose of the commercial relationship, and not to disclose it to any third party without the prior written consent of the disclosing party.</li>
        <li>These confidentiality obligations do not apply to information that is or becomes publicly available through no breach of this clause, was already known to the receiving party, or is required to be disclosed by law or regulatory authority.</li>
        <li>Confidentiality obligations survive the termination of any Agreement for a period of 3 years.</li>
      </ul>
      <div class="highlight-box">
        <strong>Note on Technical Information:</strong> All technical documentation, product specifications, GreenVision platform architecture, and pricing shared by SGT HydroEdge during pre-sales, pilot, or partnership discussions is confidential and may not be shared with competitors or used for any purpose other than evaluating SGT HydroEdge solutions.
      </div>
    </section>

    <!-- S12 -->
    <section class="policy-section" id="s12">
      <div class="section-header">
        <div class="section-num">12</div>
        <h2>Disclaimers</h2>
      </div>
      <p>To the fullest extent permitted by applicable law:</p>
      <ul>
        <li>The Website and its Content are provided on an "as is" and "as available" basis. SGT HydroEdge makes no representations or warranties, express or implied, regarding the accuracy, completeness, or fitness for any particular purpose of the Website Content.</li>
        <li>SGT HydroEdge does not warrant that the Website will be continuously available, uninterrupted, or free from errors or malware, or that any defects will be corrected.</li>
        <li>While we take reasonable steps to ensure that product specifications and performance data on the Website are accurate, they are subject to change without notice. Up-to-date specifications are those provided in the applicable Order Form or product documentation.</li>
        <li>References to global validation by CEMEX, SCHOTT, Saint-Gobain, and others on our Website describe third-party adoption of hydrogen combustion technology generally, and do not constitute endorsements of SGT HydroEdge by those entities.</li>
        <li>GreenMentor consulting advice is provided in good faith based on available regulatory and technical information. It does not constitute legal, financial, or investment advice.</li>
      </ul>
    </section>

    <!-- S13 -->
    <section class="policy-section" id="s13">
      <div class="section-header">
        <div class="section-num">13</div>
        <h2>Limitation of Liability</h2>
      </div>
      <div class="warning-box">
        <strong>Please read this section carefully.</strong> It limits SGT HydroEdge's liability to you in connection with your use of our Website, Products, and Services.
      </div>
      <p>To the maximum extent permitted by applicable Indian law:</p>
      <ul>
        <li>SGT HydroEdge shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of revenue, loss of profits, loss of data, loss of business opportunity, or production downtime, arising from or related to your use of our Products, Services, or Platform, even if we have been advised of the possibility of such damages.</li>
        <li>SGT HydroEdge's total aggregate liability to you for any claim arising under or in connection with any Agreement shall not exceed the total fees paid or payable by you to SGT HydroEdge under that Agreement in the 12 months immediately preceding the event giving rise to the claim.</li>
        <li>SGT HydroEdge shall not be liable for any failure to perform its obligations to the extent such failure is caused by factors beyond its reasonable control, including acts of God, war, government action, labour disputes, supply chain disruptions, or natural disasters.</li>
        <li>Nothing in these Terms limits liability for death or personal injury caused by SGT HydroEdge's negligence, or for fraud or fraudulent misrepresentation.</li>
      </ul>
    </section>

    <!-- S14 -->
    <section class="policy-section" id="s14">
      <div class="section-header">
        <div class="section-num">14</div>
        <h2>Indemnification</h2>
      </div>
      <p>You agree to indemnify, defend, and hold harmless SGT HydroEdge Private Limited, its directors, officers, employees, agents, and authorised service partners from and against any claims, liabilities, damages, losses, penalties, and expenses (including reasonable legal fees) arising out of or relating to:</p>
      <ul>
        <li>Your breach of these Terms of Service or any Agreement with SGT HydroEdge.</li>
        <li>Your negligent or wilful misuse of any SGT HydroEdge Product or the GreenVision Platform.</li>
        <li>Your violation of any applicable law, regulation, or third-party rights in connection with your use of our Products or Services.</li>
        <li>Any third-party claims arising from data or information you provide to SGT HydroEdge.</li>
        <li>Damage to SGT HydroEdge equipment caused by your negligence, misuse, or failure to maintain the installation environment as required.</li>
      </ul>
    </section>

    <!-- S15 -->
    <section class="policy-section" id="s15">
      <div class="section-header">
        <div class="section-num">15</div>
        <h2>Term &amp; Termination</h2>
      </div>

      <h3>Website and Platform Access</h3>
      <ul>
        <li>These Terms remain in effect for as long as you access the Website or use the GreenVision Platform.</li>
        <li>SGT HydroEdge may terminate or suspend your access at any time without notice if you breach these Terms or engage in conduct that is harmful to SGT HydroEdge, other users, or third parties.</li>
      </ul>

      <h3>Commercial Agreements (Supply / DaaS / AMC)</h3>
      <ul>
        <li>The term of each commercial agreement is as specified in the applicable Order Form or Service Schedule.</li>
        <li>Either party may terminate a commercial agreement for material breach if the breach is not remedied within 30 days of written notice.</li>
        <li>SGT HydroEdge may terminate a DaaS Agreement immediately upon non-payment of fees overdue by more than 60 days, or in the event the Customer becomes insolvent, enters liquidation, or makes arrangements with creditors.</li>
        <li>Upon termination of a DaaS Agreement, the Customer must cooperate with SGT HydroEdge for prompt retrieval of all SGT-owned equipment as described in Section 6.</li>
      </ul>

      <h3>Effect of Termination</h3>
      <ul>
        <li>Termination does not relieve either party of obligations that accrued prior to the termination date, including payment of outstanding fees.</li>
        <li>Sections on Intellectual Property, Confidentiality, Limitation of Liability, Indemnification, and Governing Law survive termination of any Agreement.</li>
      </ul>
    </section>

    <!-- S16 -->
    <section class="policy-section" id="s16">
      <div class="section-header">
        <div class="section-num">16</div>
        <h2>Governing Law &amp; Dispute Resolution</h2>
      </div>
      <p>These Terms of Service and all Agreements between you and SGT HydroEdge shall be governed by and construed in accordance with the <strong>laws of the Republic of India</strong>, without regard to conflict of law principles.</p>

      <h3>Negotiation</h3>
      <p>In the event of any dispute, the parties shall first attempt to resolve the matter amicably through good-faith negotiations at a senior management level within 30 days of one party notifying the other of the dispute.</p>

      <h3>Arbitration</h3>
      <p>If the dispute cannot be resolved through negotiation within the 30-day period, it shall be referred to and finally resolved by binding arbitration under the <strong>Arbitration and Conciliation Act, 1996</strong> (as amended). The arbitration shall be conducted by a sole arbitrator mutually appointed by the parties, or failing agreement, appointed in accordance with the Act. The seat and venue of arbitration shall be <strong>Pune, Maharashtra, India</strong>. The language of arbitration shall be English.</p>

      <h3>Courts</h3>
      <p>Subject to the arbitration clause above, the parties submit to the exclusive jurisdiction of the courts at <strong>Pune, Maharashtra, India</strong> for any matter not subject to arbitration, including interim relief.</p>
    </section>

    <!-- S17 -->
    <section class="policy-section" id="s17">
      <div class="section-header">
        <div class="section-num">17</div>
        <h2>Amendments &amp; Severability</h2>
      </div>

      <h3>Amendments</h3>
      <p>SGT HydroEdge reserves the right to revise these Terms of Service at any time. When we make material changes, we will update the "Last Updated" date at the top of this page and, where appropriate, notify registered users or platform customers by email or in-platform notification.</p>
      <p>Your continued use of the Website or Platform following publication of revised Terms constitutes acceptance of the updated Terms. If you do not agree to the revised Terms, you must stop using our Services and notify us in writing.</p>

      <h3>Severability</h3>
      <p>If any provision of these Terms is found to be unlawful, void, or unenforceable for any reason, that provision shall be deemed severed from these Terms without affecting the validity and enforceability of the remaining provisions.</p>

      <h3>Entire Agreement</h3>
      <p>These Terms, together with any applicable Order Form, DaaS Agreement, AMC Schedule, or Service Schedule, constitute the entire agreement between you and SGT HydroEdge with respect to the subject matter hereof and supersede all prior discussions, representations, and agreements.</p>

      <h3>Waiver</h3>
      <p>Any failure by SGT HydroEdge to enforce any provision of these Terms shall not constitute a waiver of SGT HydroEdge's right to enforce that or any other provision in the future.</p>
    </section>

    <!-- S18 -->
    <section class="policy-section" id="s18">
      <div class="section-header">
        <div class="section-num">18</div>
        <h2>Contact Us</h2>
      </div>
      <p>For any questions, clarifications, or notices regarding these Terms of Service, or to exercise rights under any Agreement, please contact us:</p>
      <div class="contact-card">
        <h3>SGT HydroEdge Private Limited — Legal Contact</h3>
        <div class="contact-row">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <div>SGT HydroEdge Private Limited<br>Chakan Industrial Area, Pune, Maharashtra, India</div>
        </div>
        <div class="contact-row">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <div>Legal enquiries: <a href="/cdn-cgi/l/email-protection#18747d7f7974586b7f6c70617c6a777d7c7f7d367b7775"><span class="__cf_email__" data-cfemail="cfa3aaa8aea38fbca8bba7b6abbda0aaaba8aae1aca0a2">[email&#160;protected]</span></a><br>
          General: <a href="/cdn-cgi/l/email-protection#42232e2d29023125362a3b26302d272625276c212d2f"><span class="__cf_email__" data-cfemail="2b4a4744406b584c5f43524f59444e4f4c4e05484446">[email&#160;protected]</span></a></div>
        </div>
        <div class="contact-row">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
          <div><a href="https://www.sgthydroedge.com" target="_blank">www.sgthydroedge.com</a></div>
        </div>
      </div>
      <p style="margin-top:16px; font-size:13.5px; color:var(--muted);">Formal legal notices must be sent in writing to the registered office address above or by email to <a href="/cdn-cgi/l/email-protection#f69a9391979ab68591829e8f92849993929193d895999b" style="color:var(--green)"><span class="__cf_email__" data-cfemail="e48881838588a49783908c9d80968b81808381ca878b89">[email&#160;protected]</span></a> with "Legal Notice" in the subject line. We aim to acknowledge receipt within 5 business days.</p>
    </section>

  </main>
</div>

<!-- FOOTER -->
<footer class="site-footer">
  <p>© 2026 SGT HydroEdge Private Limited · Pu`;

export default function TermsOfService() {
  const stylesRef = useRef(false);

  useEffect(() => {
    if (stylesRef.current) return;
    const style = document.createElement("style");
    style.setAttribute("data-page", "TermsOfService");
    style.textContent = PAGE_CSS;
    document.head.appendChild(style);
    stylesRef.current = true;
    return () => {
      style.remove();
      stylesRef.current = false;
    };
  }, []);

  return <div className="sgt-tos" dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />;
}