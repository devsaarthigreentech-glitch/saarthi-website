// PrivacyPolicy.tsx
// Converted from standalone HTML. CSS scoped under .sgt-privacy.

"use client";

import { useEffect, useRef } from "react";

const PAGE_CSS = `
    .sgt-privacy, .sgt-privacy *, .sgt-privacy *::before, .sgt-privacy *::after { box-sizing: border-box; margin: 0; padding: 0; }

    .sgt-privacy {
      --green:      #1e9e4f;
      --green-light:#e8f7ee;
      --dark:       #0f1f10;
      --text:       #1a2b1c;
      --muted:      #5a7060;
      --border:     #d4e4d8;
      --bg:         #f7faf8;
      --white:      #ffffff;
    }

    

    .sgt-privacy {
      font-family: 'Inter', sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.7;
      font-size: 15px;
      -webkit-font-smoothing: antialiased;
    }

    /* ── HEADER ── */
    
    
    .sgt-privacy .logo-leaf {
      width: 28px; height: 28px;
      background: var(--green);
      border-radius: 50% 4px 50% 4px;
      display: flex; align-items: center; justify-content: center;
    }
    .sgt-privacy .logo-leaf svg { width: 16px; height: 16px; color: #fff; }
    .sgt-privacy .header-tag {
      font-size: 12px;
      color: rgba(255,255,255,0.45);
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    /* ── HERO BAND ── */
    .sgt-privacy .policy-hero {
      background: linear-gradient(135deg, var(--dark) 0%, #1a3d1e 100%);
      padding: 64px 48px 52px;
      text-align: center;
    }
    .sgt-privacy .policy-hero-eyebrow {
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
    .sgt-privacy .policy-hero h1 {
      font-family: 'Syne', sans-serif;
      font-size: clamp(28px, 4vw, 42px);
      font-weight: 800;
      color: #fff;
      margin-bottom: 14px;
      line-height: 1.15;
    }
    .sgt-privacy .policy-hero p {
      color: rgba(255,255,255,0.55);
      font-size: 14px;
      max-width: 480px;
      margin: 0 auto;
    }
    .sgt-privacy .policy-hero p strong { color: rgba(255,255,255,0.8); font-weight: 500; }

    /* ── LAYOUT ── */
    .sgt-privacy .policy-layout {
      max-width: 1100px;
      margin: 0 auto;
      padding: 56px 24px 80px;
      display: grid;
      grid-template-columns: 240px 1fr;
      gap: 48px;
      align-items: start;
    }

    /* ── SIDEBAR TOC ── */
    .sgt-privacy .policy-toc {
      position: sticky;
      top: 32px;
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px 0;
      overflow: hidden;
    }
    .sgt-privacy .toc-title {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--muted);
      padding: 0 20px 12px;
      border-bottom: 1px solid var(--border);
      margin-bottom: 8px;
    }
    .sgt-privacy .toc-list { list-style: none; }
    .sgt-privacy .toc-list li a {
      display: block;
      padding: 7px 20px;
      font-size: 12.5px;
      color: var(--muted);
      text-decoration: none;
      border-left: 2px solid transparent;
      transition: all 0.15s;
      line-height: 1.4;
    }
    .sgt-privacy .toc-list li a:hover {
      color: var(--green);
      border-left-color: var(--green);
      background: var(--green-light);
    }
    .sgt-privacy .toc-num {
      display: inline-block;
      font-size: 10px;
      font-weight: 600;
      color: var(--green);
      margin-right: 4px;
      opacity: 0.7;
    }

    /* ── MAIN CONTENT ── */
    .sgt-privacy .policy-content { min-width: 0; }

    /* Info card */
    .sgt-privacy .info-card {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1px;
      background: var(--border);
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      margin-bottom: 40px;
    }
    .sgt-privacy .info-cell {
      background: var(--white);
      padding: 16px 20px;
    }
    .sgt-privacy .info-cell-label {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--muted);
      font-weight: 600;
      margin-bottom: 4px;
    }
    .sgt-privacy .info-cell-val {
      font-size: 13.5px;
      font-weight: 600;
      color: var(--text);
    }

    /* Sections */
    .sgt-privacy .policy-section {
      margin-bottom: 44px;
      scroll-margin-top: 32px;
    }
    .sgt-privacy .section-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--green-light);
    }
    .sgt-privacy .section-num {
      width: 32px; height: 32px;
      background: var(--green);
      color: #fff;
      border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      font-size: 13px;
      font-weight: 700;
      flex-shrink: 0;
    }
    .sgt-privacy .section-header h2 {
      font-family: 'Syne', sans-serif;
      font-size: 19px;
      font-weight: 700;
      color: var(--dark);
    }

    .sgt-privacy .policy-section p {
      margin-bottom: 12px;
      color: #2e3d30;
    }
    .sgt-privacy .policy-section p:last-child { margin-bottom: 0; }

    /* Sub-heading */
    .sgt-privacy .policy-section h3 {
      font-size: 14px;
      font-weight: 700;
      color: var(--dark);
      margin: 20px 0 8px;
      padding-left: 12px;
      border-left: 3px solid var(--green);
    }

    /* Lists */
    .policy-section ul,
    .sgt-privacy .policy-section ol {
      padding-left: 20px;
      margin-bottom: 12px;
      color: #2e3d30;
    }
    .policy-section ul li,
    .sgt-privacy .policy-section ol li {
      margin-bottom: 6px;
      line-height: 1.65;
    }
    .sgt-privacy .policy-section ul { list-style: none; padding-left: 0; }
    .sgt-privacy .policy-section ul li {
      padding-left: 20px;
      position: relative;
    }
    .sgt-privacy .policy-section ul li::before {
      content: '';
      position: absolute;
      left: 0; top: 9px;
      width: 6px; height: 6px;
      border-radius: 50%;
      background: var(--green);
      opacity: 0.6;
    }

    /* Highlight box */
    .sgt-privacy .highlight-box {
      background: var(--green-light);
      border: 1px solid #b8dfc4;
      border-left: 4px solid var(--green);
      border-radius: 8px;
      padding: 16px 20px;
      margin: 16px 0;
      font-size: 14px;
      color: var(--text);
    }
    .sgt-privacy .highlight-box strong { color: var(--green); }

    /* Table */
    .sgt-privacy .policy-table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;
      font-size: 13.5px;
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid var(--border);
    }
    .sgt-privacy .policy-table thead tr {
      background: var(--dark);
      color: #fff;
    }
    .sgt-privacy .policy-table thead th {
      padding: 12px 16px;
      text-align: left;
      font-weight: 600;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .sgt-privacy .policy-table tbody tr { background: var(--white); }
    .sgt-privacy .policy-table tbody tr:nth-child(even) { background: var(--bg); }
    .sgt-privacy .policy-table tbody td {
      padding: 11px 16px;
      border-bottom: 1px solid var(--border);
      vertical-align: top;
      color: #2e3d30;
    }
    .sgt-privacy .policy-table tbody tr:last-child td { border-bottom: none; }

    /* Contact card */
    .sgt-privacy .contact-card {
      background: var(--dark);
      border-radius: 12px;
      padding: 28px 28px;
      color: #fff;
      margin-top: 16px;
    }
    .sgt-privacy .contact-card h3 {
      font-family: 'Syne', sans-serif;
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      border-left: none;
      padding-left: 0;
      margin-top: 0;
      margin-bottom: 16px;
    }
    .sgt-privacy .contact-row {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 10px;
      font-size: 14px;
      color: rgba(255,255,255,0.75);
    }
    .sgt-privacy .contact-row:last-child { margin-bottom: 0; }
    .sgt-privacy .contact-icon {
      width: 28px; height: 28px;
      background: rgba(30,158,79,0.2);
      border-radius: 6px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .sgt-privacy .contact-icon svg { width: 14px; height: 14px; color: var(--green); }
    .sgt-privacy .contact-row a { color: #6cd98a; text-decoration: none; }
    .sgt-privacy .contact-row a:hover { text-decoration: underline; }

    /* ── FOOTER ── */
    
    
    

    /* ── RESPONSIVE ── */
    @media (max-width: 860px) {
      .sgt-privacy .policy-layout {
        grid-template-columns: 1fr;
        padding: 40px 20px 60px;
      }
      .sgt-privacy .policy-toc { position: static; }
      .sgt-privacy .info-card { grid-template-columns: 1fr; }
      
      .sgt-privacy .policy-hero { padding: 48px 24px 40px; }
    }
  `;
  // Legal &amp; Compliance
  const PAGE_HTML = `<!-- HERO -->
  <div class="policy-hero">
  <div class="policy-hero-eyebrow"></div>
  <h1>Privacy Policy</h1>
  <p>We are committed to protecting your personal information.<br>
  <strong>Last updated: March 2026</strong> &nbsp;·&nbsp; Effective: March 20, 2026</p>
</div>

<!-- MAIN LAYOUT -->
<div class="policy-layout">

  <!-- SIDEBAR TOC -->
  <nav class="policy-toc" aria-label="Table of Contents">
    <div class="toc-title">Contents</div>
    <ul class="toc-list">
      <li><a href="#s1"><span class="toc-num">01</span> About This Policy</a></li>
      <li><a href="#s2"><span class="toc-num">02</span> Information We Collect</a></li>
      <li><a href="#s3"><span class="toc-num">03</span> How We Use Your Data</a></li>
      <li><a href="#s4"><span class="toc-num">04</span> Legal Basis</a></li>
      <li><a href="#s5"><span class="toc-num">05</span> Cookies &amp; Tracking</a></li>
      <li><a href="#s6"><span class="toc-num">06</span> Sharing Your Data</a></li>
      <li><a href="#s7"><span class="toc-num">07</span> GreenVision Platform</a></li>
      <li><a href="#s8"><span class="toc-num">08</span> Data Retention</a></li>
      <li><a href="#s9"><span class="toc-num">09</span> Your Rights</a></li>
      <li><a href="#s10"><span class="toc-num">10</span> Data Security</a></li>
      <li><a href="#s11"><span class="toc-num">11</span> Third-Party Links</a></li>
      <li><a href="#s12"><span class="toc-num">12</span> Children's Privacy</a></li>
      <li><a href="#s13"><span class="toc-num">13</span> Policy Updates</a></li>
      <li><a href="#s14"><span class="toc-num">14</span> Contact Us</a></li>
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
        <div class="info-cell-val">IT Act 2000 · DPDP Act 2023</div>
      </div>
    </div>

    <!-- S1 -->
    <section class="policy-section" id="s1">
      <div class="section-header">
        <div class="section-num">1</div>
        <h2>About This Policy</h2>
      </div>
      <p>SGT HydroEdge Private Limited ("SGT HydroEdge", "we", "us", or "our") is a Decarbonisation Infrastructure Company headquartered in Pune, Maharashtra, India. We operate the website <strong>www.sgthydroedge.com</strong> and related digital platforms including the GreenVision IoT platform (collectively, the "Services").</p>
      <p>This Privacy Policy explains what personal information we collect, how we use it, with whom we share it, and the rights you have over your data. It applies to all visitors, customers, business partners, and users of our Services.</p>
      <div class="highlight-box">
        <strong>Indian Law Applicability:</strong> This policy is governed by the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023 (DPDP Act). Where we process data of individuals located in other jurisdictions, we apply equivalent standards of data protection.
      </div>
    </section>

    <!-- S2 -->
    <section class="policy-section" id="s2">
      <div class="section-header">
        <div class="section-num">2</div>
        <h2>Information We Collect</h2>
      </div>
      <p>We collect information in the following categories:</p>

      <h3>A. Information You Provide Directly</h3>
      <ul>
        <li><strong>Contact details</strong> — name, email address, phone number, job title, and company name when you fill in contact forms, request a demo, subscribe to updates, or submit partnership enquiries.</li>
        <li><strong>Business information</strong> — fleet size, industry vertical, energy consumption data, and operational details you share during a commercial engagement or assessment.</li>
        <li><strong>Communications</strong> — content of emails, enquiries, or feedback you send to us.</li>
      </ul>

      <h3>B. Information Collected Automatically</h3>
      <ul>
        <li><strong>Usage data</strong> — pages visited, time spent, links clicked, referring URLs, and browser/device type collected via cookies and analytics tools.</li>
        <li><strong>Technical data</strong> — IP address, operating system, browser version, and approximate geographic location derived from IP.</li>
      </ul>

      <h3>C. IoT and Platform Data (GreenVision Users)</h3>
      <ul>
        <li><strong>Device telemetry</strong> — HHO system performance metrics, fuel flow rates, engine parameters, emission sensor readings, and operating conditions transmitted by installed GreenDrive, GreenEdge, GreenMarine, or GreenX devices.</li>
        <li><strong>Fleet and operational data</strong> — GPS-derived trip data, vehicle identifiers, route information, and driver performance scores where applicable.</li>
        <li><strong>Account data</strong> — platform login credentials, user roles, and access logs.</li>
      </ul>

      <h3>D. Information from Third Parties</h3>
      <ul>
        <li>Publicly available company information and business contact details for B2B prospecting and partnership outreach.</li>
        <li>Data from analytics partners (e.g. Google Analytics) in aggregated and anonymised form.</li>
      </ul>
    </section>

    <!-- S3 -->
    <section class="policy-section" id="s3">
      <div class="section-header">
        <div class="section-num">3</div>
        <h2>How We Use Your Information</h2>
      </div>
      <table class="policy-table">
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Data Used</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Responding to enquiries &amp; providing quotations</strong></td>
            <td>Name, email, phone, company, operational details</td>
          </tr>
          <tr>
            <td><strong>Delivering and managing the GreenVision platform</strong></td>
            <td>IoT telemetry, account credentials, fleet data</td>
          </tr>
          <tr>
            <td><strong>Generating ESG &amp; emission reports</strong></td>
            <td>Device telemetry, fuel and emission data</td>
          </tr>
          <tr>
            <td><strong>Sending product updates, newsletters &amp; case studies</strong></td>
            <td>Email address (with consent)</td>
          </tr>
          <tr>
            <td><strong>Improving our website and platform</strong></td>
            <td>Usage and technical data (anonymised)</td>
          </tr>
          <tr>
            <td><strong>Processing partnership applications</strong></td>
            <td>Business and contact information</td>
          </tr>
          <tr>
            <td><strong>Complying with legal obligations</strong></td>
            <td>As required by applicable law</td>
          </tr>
          <tr>
            <td><strong>Fraud prevention and security</strong></td>
            <td>IP address, login logs, device data</td>
          </tr>
        </tbody>
      </table>
      <p>We do <strong>not</strong> use your personal data for automated decision-making that produces legal effects on you, nor do we sell your personal data to any third party for their marketing purposes.</p>
    </section>

    <!-- S4 -->
    <section class="policy-section" id="s4">
      <div class="section-header">
        <div class="section-num">4</div>
        <h2>Legal Basis for Processing</h2>
      </div>
      <p>Under the Digital Personal Data Protection Act, 2023 and applicable data protection law, we process your personal data on the following bases:</p>
      <ul>
        <li><strong>Consent</strong> — for sending marketing communications and newsletters. You may withdraw consent at any time.</li>
        <li><strong>Contract performance</strong> — to fulfil obligations under a service agreement, hardware supply, or DaaS contract with you or your organisation.</li>
        <li><strong>Legitimate interests</strong> — to operate and improve our website, respond to B2B enquiries, and maintain platform security, where these do not override your privacy rights.</li>
        <li><strong>Legal obligation</strong> — where processing is required to comply with applicable Indian law, regulatory requirements (BRSR, CPCB), or court orders.</li>
      </ul>
    </section>

    <!-- S5 -->
    <section class="policy-section" id="s5">
      <div class="section-header">
        <div class="section-num">5</div>
        <h2>Cookies &amp; Tracking Technologies</h2>
      </div>
      <p>Our website uses cookies and similar technologies to enhance your browsing experience and collect analytical data.</p>
      <table class="policy-table">
        <thead>
          <tr>
            <th>Cookie Type</th>
            <th>Purpose</th>
            <th>Can Be Disabled?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Essential</strong></td>
            <td>Required for the website to function (session management, form submission)</td>
            <td>No — required</td>
          </tr>
          <tr>
            <td><strong>Analytics</strong></td>
            <td>Measure traffic and usage patterns (Google Analytics 4)</td>
            <td>Yes — via cookie banner</td>
          </tr>
          <tr>
            <td><strong>Marketing / Remarketing</strong></td>
            <td>Display relevant ads on third-party platforms</td>
            <td>Yes — via cookie banner</td>
          </tr>
          <tr>
            <td><strong>Preference</strong></td>
            <td>Remember your language and display preferences</td>
            <td>Yes — via cookie banner</td>
          </tr>
        </tbody>
      </table>
      <p>You can manage cookie preferences through our cookie consent banner on your first visit, or via your browser settings. Disabling analytics cookies will not affect your ability to use the website.</p>
    </section>

    <!-- S6 -->
    <section class="policy-section" id="s6">
      <div class="section-header">
        <div class="section-num">6</div>
        <h2>Sharing Your Data</h2>
      </div>
      <p>We do not sell, rent, or trade your personal data. We may share it in the following limited circumstances:</p>
      <ul>
        <li><strong>Service providers</strong> — cloud hosting providers, CRM software, email delivery services, and analytics platforms that process data on our behalf under strict contractual data processing agreements.</li>
        <li><strong>Business partners</strong> — consulting, technology, or channel partners involved in delivering a specific project you are part of, only with your knowledge and as required for service delivery.</li>
        <li><strong>Regulatory and legal compliance</strong> — government bodies, regulatory authorities (CPCB, MoEFCC, SEBI), or law enforcement when required by law, court order, or to protect our legal rights.</li>
        <li><strong>Corporate transactions</strong> — in the event of a merger, acquisition, or asset sale, data may be transferred to successor entities, subject to equivalent privacy protections.</li>
      </ul>
      <div class="highlight-box">
        All third-party processors we engage are contractually bound to process your data only as instructed by us and to maintain appropriate security standards. We do not allow them to use your data for their own purposes.
      </div>
    </section>

    <!-- S7 -->
    <section class="policy-section" id="s7">
      <div class="section-header">
        <div class="section-num">7</div>
        <h2>GreenVision Platform Data</h2>
      </div>
      <p>The GreenVision IoT Digital Twin platform processes operational and telemetry data from SGT HydroEdge devices installed at customer sites or on customer vehicles. The following applies specifically to GreenVision data:</p>
      <ul>
        <li><strong>Ownership:</strong> Operational and fuel performance data generated by your equipment remains your property. SGT HydroEdge processes this data solely to deliver the platform service, generate reports, and improve system performance.</li>
        <li><strong>Aggregation &amp; anonymisation:</strong> We may use anonymised, aggregated operational data across the installed base for benchmarking, product improvement, and research. This data cannot be used to identify individual customers or operations.</li>
        <li><strong>ESG and carbon reports:</strong> Reports generated on the GreenVision platform for BRSR, CBAM, or carbon credit documentation are your property and are not shared with any third party without your explicit consent.</li>
        <li><strong>Data access:</strong> Your authorised team members may access platform data via role-based access controls. SGT HydroEdge support staff may access your data solely for troubleshooting and service delivery purposes.</li>
        <li><strong>Data hosting:</strong> GreenVision data is hosted on secure cloud infrastructure in India. Where data is processed or stored outside India, we ensure adequate protections are in place as required under the DPDP Act.</li>
      </ul>
    </section>

    <!-- S8 -->
    <section class="policy-section" id="s8">
      <div class="section-header">
        <div class="section-num">8</div>
        <h2>Data Retention</h2>
      </div>
      <p>We retain your personal data only for as long as necessary to fulfil the purposes described in this policy, unless a longer retention period is required or permitted by law.</p>
      <table class="policy-table">
        <thead>
          <tr>
            <th>Data Category</th>
            <th>Retention Period</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Website enquiry / contact form data</td>
            <td>3 years from last contact, unless a commercial relationship begins</td>
          </tr>
          <tr>
            <td>Customer account and contract data</td>
            <td>Duration of contract + 7 years (statutory requirement)</td>
          </tr>
          <tr>
            <td>GreenVision platform telemetry data</td>
            <td>Duration of service subscription + 2 years for audit purposes</td>
          </tr>
          <tr>
            <td>Marketing opt-in records</td>
            <td>Until consent is withdrawn, then deleted within 30 days</td>
          </tr>
          <tr>
            <td>Website analytics (anonymised)</td>
            <td>26 months (Google Analytics default)</td>
          </tr>
          <tr>
            <td>Financial and transaction records</td>
            <td>8 years (as required under Indian tax law)</td>
          </tr>
        </tbody>
      </table>
      <p>When data is no longer required, it is securely deleted or anonymised in a manner that makes identification impossible.</p>
    </section>

    <!-- S9 -->
    <section class="policy-section" id="s9">
      <div class="section-header">
        <div class="section-num">9</div>
        <h2>Your Rights</h2>
      </div>
      <p>Under the Digital Personal Data Protection Act, 2023 and applicable law, you have the following rights regarding your personal data:</p>
      <ul>
        <li><strong>Right to access</strong> — request a copy of the personal data we hold about you.</li>
        <li><strong>Right to correction</strong> — request that inaccurate or incomplete data be corrected.</li>
        <li><strong>Right to erasure</strong> — request deletion of your personal data where it is no longer necessary for the purpose it was collected, subject to legal retention obligations.</li>
        <li><strong>Right to withdraw consent</strong> — where processing is based on consent (e.g. marketing emails), you may withdraw at any time without affecting the lawfulness of prior processing.</li>
        <li><strong>Right to grievance redressal</strong> — raise a complaint with our Data Protection Officer and receive a response within a reasonable timeframe.</li>
        <li><strong>Right to nominate</strong> — nominate another individual to exercise rights on your behalf in the event of your death or incapacity.</li>
      </ul>
      <p>To exercise any of these rights, please contact us using the details in Section 14. We will respond within <strong>30 days</strong> of receiving your request. We may need to verify your identity before processing your request.</p>
      <p>You also have the right to lodge a complaint with the <strong>Data Protection Board of India</strong> if you believe your data rights have been violated.</p>
    </section>

    <!-- S10 -->
    <section class="policy-section" id="s10">
      <div class="section-header">
        <div class="section-num">10</div>
        <h2>Data Security</h2>
      </div>
      <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, accidental loss, alteration, or disclosure. These include:</p>
      <ul>
        <li>HTTPS encryption for all data transmitted to and from our website and platform.</li>
        <li>Role-based access controls ensuring only authorised personnel can access personal data.</li>
        <li>Secure cloud infrastructure with regular security assessments and patches.</li>
        <li>Encrypted storage for sensitive operational and account data on the GreenVision platform.</li>
        <li>Employee confidentiality obligations and data handling training.</li>
      </ul>
      <p>While we take all reasonable precautions, no transmission over the internet is completely secure. If you suspect any misuse or breach of your data, please contact us immediately at the address in Section 14 and we will investigate promptly.</p>
    </section>

    <!-- S11 -->
    <section class="policy-section" id="s11">
      <div class="section-header">
        <div class="section-num">11</div>
        <h2>Third-Party Links</h2>
      </div>
      <p>Our website may contain links to third-party websites, partner pages, media publications (e.g. CNBC-TV18, ABP News), or platform integrations. This Privacy Policy applies only to <strong>www.sgthydroedge.com</strong> and SGT HydroEdge-operated platforms.</p>
      <p>We are not responsible for the privacy practices of third-party websites and encourage you to review their privacy policies before submitting any personal data to them.</p>
    </section>

    <!-- S12 -->
    <section class="policy-section" id="s12">
      <div class="section-header">
        <div class="section-num">12</div>
        <h2>Children's Privacy</h2>
      </div>
      <p>Our Services are directed exclusively at business professionals and are not intended for individuals under the age of 18. We do not knowingly collect personal data from minors. If we become aware that we have inadvertently collected data from a minor, we will delete it promptly. If you believe we have such data, please contact us immediately.</p>
    </section>

    <!-- S13 -->
    <section class="policy-section" id="s13">
      <div class="section-header">
        <div class="section-num">13</div>
        <h2>Changes to This Policy</h2>
      </div>
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices, the Services we offer, or applicable law. When we make material changes, we will:</p>
      <ul>
        <li>Update the "Last Updated" date at the top of this page.</li>
        <li>Post a notice on our website homepage for a reasonable period.</li>
        <li>Where required by law or where we have your email address, notify you directly.</li>
      </ul>
      <p>We encourage you to review this page periodically. Your continued use of our Services after a policy update constitutes your acceptance of the revised terms, to the extent permitted by applicable law.</p>
    </section>

    <!-- S14 -->
    <section class="policy-section" id="s14">
      <div class="section-header">
        <div class="section-num">14</div>
        <h2>Contact Us</h2>
      </div>
      <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection Officer:</p>
      <div class="contact-card">
        <h3>SGT HydroEdge — Data Protection Contact</h3>
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
          <div>Email: <a href="/cdn-cgi/l/email-protection#78080a110e191b01380b1f0c10011c0a171d1c1f1d561b1715"><span class="__cf_email__" data-cfemail="4c3c3e253a2d2f350c3f2b382435283e2329282b29622f2321">[email&#160;protected]</span></a><br>
          General: <a href="/cdn-cgi/l/email-protection#f7969b989cb78490839f8e93859892939092d994989a"><span class="__cf_email__" data-cfemail="c7a6aba8ac87b4a0b3afbea3b5a8a2a3a0a2e9a4a8aa">[email&#160;protected]</span></a></div>
        </div>
        <div class="contact-row">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
          <div>Website: <a href="https://www.sgthydroedge.com" target="_blank">www.sgthydroedge.com</a></div>
        </div>
      </div>
      <p style="margin-top:16px; font-size:13.5px; color:var(--muted);">We aim to respond to all privacy-related queries within <strong>30 business days</strong>. If you are not satisfied with our response, you may escalate to the <strong>Data Protection Board of India</strong> once it is constituted under the DPDP Act, 2023.</p>
    </section>

  </main>
</div>

<!-- FOOTER -->
<footer class="site-footer">
  <p>© 2026 SGT HydroEdge Private Limited · Pune, India &nbsp;|&nbsp;
     <a href="https://www.sgthydroedge.com">`;

export default function PrivacyPolicy() {
  const stylesRef = useRef(false);

  useEffect(() => {
    if (stylesRef.current) return;
    const style = document.createElement("style");
    style.setAttribute("data-page", "PrivacyPolicy");
    style.textContent = PAGE_CSS;
    document.head.appendChild(style);
    stylesRef.current = true;
    return () => {
      style.remove();
      stylesRef.current = false;
    };
  }, []);

  return <div className="sgt-privacy" dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />;
}