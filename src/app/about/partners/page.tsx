'use client';

import { useState } from 'react';

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface TierCard {
  id: string;
  badge: string;
  badgeColor: 'green' | 'blue';
  title: string;
  desc: string;
  details: string[];
  isGlobal?: boolean;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const INDIA_TIERS: TierCard[] = [
  {
    id: 't1',
    badge: 'Tier 1 · Service Partner',
    badgeColor: 'green',
    title: 'Authorized Service Partner',
    desc: 'Garage or workshop certified to install & service SGT systems for end customers.',
    details: [
      'Install GreenDrive / GreenGen systems on customer vehicles & DG sets',
      'Perform routine servicing and warranty claim handling',
      'Collect service charges directly from end customers',
      'SGT provides initial + ongoing training and spare parts supply',
      'Use SGT branding with "Authorized Service Partner" designation',
    ],
  },
  {
    id: 't2',
    badge: 'Tier 2 · Sales Partner',
    badgeColor: 'green',
    title: 'Business / Channel Partner',
    desc: 'Drive sales in your territory. Earn commission on every deal regardless of who closes commercially.',
    details: [
      'Actively market and sell SGT systems to fleet owners & industries',
      'Earn commission on net deal value (Phase A: ~10%; Phase B: full margin)',
      'Partner always owns installation and after-sales — commission applies regardless of who closes the deal',
      'Phase A: SGT bills customer directly; Phase B: partner bills customer',
      'Register leads through SGT`s portal; exclusivity protects your pipeline',
    ],
  },
  {
    id: 't3',
    badge: 'Tier 3 · Distributor',
    badgeColor: 'green',
    title: 'Regional Distributor',
    desc: 'Own a geography. Build your own sub-partner network and distribution ecosystem.',
    details: [
      'Exclusive or semi-exclusive territory rights for your region',
      'Purchase at distributor price; earn on the margin you build',
      'Appoint sub-distributors, retailers, and installation partners within your ecosystem',
      'Responsible for market penetration, sales targets, and after-sales infrastructure',
      'Initial term of 3 years, renewable; financial stability and industry experience required',
    ],
  },
];

const GLOBAL_TIERS: TierCard[] = [
  {
    id: 'g1',
    badge: 'International · Distributor',
    badgeColor: 'blue',
    title: 'Country / Regional Distributor',
    desc: 'Full-rights distribution for your country or region. You own the market, we support you with technology.',
    details: [
      'Exclusive or defined-territory distribution rights',
      'Full end-to-end responsibility: sales, marketing, installation, servicing, customer support',
      'Purchase SGT systems at international distributor price; build your own pricing stack',
      'Must invest in local infrastructure: office, trained technical team, service capability',
      'POC units must be purchased by partner on a non-returnable basis; SGT provides training and oversight for all pilots',
      'All POC data shared with SGT for validation; full compliance with SGT POC policy required',
    ],
    isGlobal: true,
  },
  {
    id: 'g2',
    badge: 'International · Strategic',
    badgeColor: 'blue',
    title: 'Strategic / JV Partner',
    desc: 'Unique market position or technology synergy? Let\'s explore a deeper collaboration.',
    details: [
      'Joint ventures, licensing arrangements, or co-marketing explored on case-by-case basis',
      'Suitable for partners with strong fleet management, DaaS, or emission-tech platforms',
      'Requires NDA and detailed discovery discussion before any commercial terms',
      'SGT\'s IP, GreenVision architecture, and trade secrets are protected under strict confidentiality terms',
    ],
    isGlobal: true,
  },
];

const OFFER_ITEMS = [
  { icon: '🔧', bg: '#E1F5EE', title: 'Technical training', desc: 'Initial certification + ongoing upskilling for your installation team' },
  { icon: '📡', bg: '#E1F5EE', title: 'GreenVision access', desc: 'System health monitoring platform for all deployed units in your territory' },
  { icon: '🛡️', bg: '#E1F5EE', title: 'Lead protection', desc: 'Registered leads are protected — your pipeline is yours' },
  { icon: '📦', bg: '#E1F5EE', title: 'Genuine parts supply', desc: 'Reliable supply of SGT-authorized components for service & warranty work' },
  { icon: '📣', bg: '#E1F5EE', title: 'Marketing support', desc: 'Collateral, brand guidelines, and co-marketing for qualified partners' },
  { icon: '📊', bg: '#E1F5EE', title: 'Regulatory support', desc: 'Technical documentation, certifications, and compliance guidance' },
];

const COUNTRIES = [
  'India — North', 'India — South', 'India — East', 'India — West / Central',
  'Australia / New Zealand', 'Middle East', 'Southeast Asia', 'Europe', 'Africa', 'Other',
];

const PARTNER_TYPES = [
  'Service Partner (Tier 1 — India)',
  'Business / Channel Partner (Tier 2 — India)',
  'Regional Distributor (Tier 3 — India)',
  'International Distributor',
  'Strategic / JV Partner',
  'Not sure — want to discuss',
];

// ─── TIER CARD COMPONENT ──────────────────────────────────────────────────────

function TierCardItem({ card }: { card: TierCard }) {
  const [expanded, setExpanded] = useState(false);
  const isBlue = card.badgeColor === 'blue';

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      style={{
        background: 'var(--color-background-primary, #ffffff)',
        border: expanded
          ? `1.5px solid ${isBlue ? '#185FA5' : '#1D9E75'}`
          : '0.5px solid var(--color-border-tertiary, #e5e7eb)',
        borderRadius: 12,
        padding: '1.25rem',
        cursor: 'pointer',
        transition: 'border-color 0.15s',
        paddingTop: '12px',
      }}
    >
      {/* badge */}
      <div style={{
        display: 'inline-block',
        fontSize: 11,
        fontWeight: 500,
        padding: '3px 10px',
        borderRadius: 99,
        marginBottom: '0.75rem',
        background: isBlue ? '#E6F1FB' : '#E1F5EE',
        color: isBlue ? '#185FA5' : '#0F6E56',
      }}>
        {card.badge}
      </div>

      <h3 style={{ fontSize: 15, fontWeight: 500, marginBottom: '0.35rem', color: 'var(--color-text-primary, #111)' }}>
        {card.title}
      </h3>
      <p style={{ fontSize: 13, color: 'var(--color-text-secondary, #6b7280)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
        {card.desc}
      </p>

      {/* expandable details */}
      {expanded && (
        <div style={{ marginBottom: '0.5rem' }}>
          {card.details.map((d, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, fontSize: 12, color: 'var(--color-text-secondary, #6b7280)', marginBottom: '0.4rem', lineHeight: 1.5 }}>
              <span style={{ color: isBlue ? '#185FA5' : '#1D9E75', fontSize: 12, flexShrink: 0, marginTop: 1 }}>✓</span>
              <span>{d}</span>
            </div>
          ))}
        </div>
      )}

      {/* expand hint */}
      <div
        onClick={e => { e.stopPropagation(); setExpanded(!expanded); }}
        style={{ fontSize: 11, color: 'var(--color-text-secondary, #6b7280)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, marginTop: '0.5rem', fontFamily: "'Space Mono', monospace" }}
      >
        <span style={{ display: 'inline-block', transition: 'transform 0.2s', transform: expanded ? 'rotate(90deg)' : 'none' }}>›</span>
        <span>{expanded ? 'Hide details' : 'See details'}</span>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function PartnershipPage() {
  const [activeTab, setActiveTab] = useState<'india' | 'global'>('india');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', country: '', type: '', message: '' });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.type || !form.country) {
      alert('Please fill in all required fields (marked with *).');
      return;
    }
    setSubmitted(true);
  };

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');
        .partner-root * { box-sizing: border-box; margin: 0; padding: 0; }
        .partner-root { font-family: 'Sora', sans-serif; color: var(--color-text-primary, #111827); background: var(--color-background-primary, #ffffff); }
        .partner-input:focus { border-color: #1D9E75 !important; box-shadow: 0 0 0 2px rgba(29,158,117,0.12) !important; outline: none; }
        .partner-input::placeholder { color: #9ca3af; }
        .tab-india-btn:hover { color: var(--color-text-primary, #111) !important; }
        .tab-global-btn:hover { color: var(--color-text-primary, #111) !important; }
        .tier-card-hover:hover { border-color: var(--color-border-secondary, #d1d5db) !important; }
        .submit-btn-partner:hover { background: #0F6E56 !important; }
        .submit-btn-partner:active { transform: scale(0.98); }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }
        .dot-pulse { animation: pulse 2s ease-in-out infinite; }
        @media(max-width:540px){
          .form-grid-partner { grid-template-columns: 1fr !important; }
          .submit-row-partner { flex-direction: column !important; gap: 0.75rem !important; align-items: flex-start !important; }
          .tier-grid-partner { grid-template-columns: 1fr !important; }
          .hero-h1 { font-size: 24px !important; }
          .open-to-discuss-inner { flex-direction: column !important; }
        }
      `}</style>

      <div className="partner-root" style={{ maxWidth: 860, margin: '0 auto', padding: '2rem 1.25rem 3rem' }}>

        {/* ── HERO ── */}
        <div style={{ textAlign: 'center', padding: '3rem 1rem 2.5rem', borderBottom: '0.5px solid var(--color-border-tertiary, #e5e7eb)', marginBottom: '2.5rem' }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: '0.12em', color: 'var(--color-text-secondary, #6b7280)', textTransform: 'uppercase', marginBottom: '1rem' }}>
            SGT HydroEdge Pvt Ltd · Partner Programme
          </div>
          <h1 className="hero-h1" style={{ fontSize: 32, fontWeight: 500, lineHeight: 1.25, marginBottom: '1rem', fontFamily: "'Sora', sans-serif" }}>
            Grow with <span style={{ color: '#1D9E75' }}>hydrogen.</span><br />Grow with us.
          </h1>
          <p style={{ fontSize: 15, color: 'var(--color-text-secondary, #6b7280)', maxWidth: 560, margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            SGT HydroEdge builds Hydrogen-on-Demand retrofit systems that reduce fuel costs and emissions for commercial fleets. We're building a network of committed partners to bring this technology where it matters most.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E1F5EE', color: '#0F6E56', fontSize: 12, fontWeight: 500, padding: '6px 14px', borderRadius: 99, border: '0.5px solid #5DCAA5' }}>
            <span className="dot-pulse" style={{ width: 6, height: 6, background: '#1D9E75', borderRadius: '50%', display: 'inline-block' }} />
            Partnership model is evolving — open to new ideas
          </div>
        </div>

        {/* ── LIVE PARTNERSHIPS ── */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-secondary, #6b7280)', marginBottom: '0.5rem' }}>
            Live partnerships
          </div>
          <div style={{ fontSize: 20, fontWeight: 500, marginBottom: '0.5rem' }}>The network in motion</div>
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary, #6b7280)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
            Our international model isn't theoretical. Trident Nova is our first ASEAN integrator — and we're actively building the network across other geographies.
          </p>

          <a
            href="https://tridentnova.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              background: 'var(--color-background-primary, #ffffff)',
              border: '0.5px solid var(--color-border-tertiary, #e5e7eb)',
              borderRadius: 12,
              padding: '1.25rem',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'border-color 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#185FA5')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border-tertiary, #e5e7eb)')}
          >
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              {/* Logo block */}
              <div style={{
                flexShrink: 0,
                width: 96,
                height: 96,
                background: '#F3F8FD',
                border: '0.5px solid #D6E6F5',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
                <img
                  src="/images/about/partners/tridentnova_logo.png"
                  alt="Trident Nova"
                  style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }}
                />
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 220 }}>
                <div style={{
                  display: 'inline-block',
                  fontSize: 11,
                  fontWeight: 500,
                  padding: '3px 10px',
                  borderRadius: 99,
                  marginBottom: '0.6rem',
                  background: '#E6F1FB',
                  color: '#185FA5',
                }}>
                  ASEAN Integrator · Malaysia
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 500, marginBottom: '0.35rem', color: 'var(--color-text-primary, #111)' }}>
                  Trident Nova
                </h3>
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary, #6b7280)', lineHeight: 1.6, marginBottom: '0.85rem' }}>
                  Energy and decarbonisation platform serving transport, logistics, marine, and industrial customers across ASEAN. Trident Nova deploys SGT's GreenDrive™ technology under their Distributed service line — engineering-led pilots and measured deployments.
                </p>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 12, color: 'var(--color-text-secondary, #6b7280)', marginBottom: '0.85rem' }}>
                  <span><strong style={{ color: 'var(--color-text-primary, #111)', fontWeight: 500 }}>Coverage:</strong> Malaysia · ASEAN</span>
                  <span><strong style={{ color: 'var(--color-text-primary, #111)', fontWeight: 500 }}>Focus:</strong> GreenDrive (fleet · genset · marine)</span>
                </div>
                <div style={{ fontSize: 12, color: '#185FA5', fontFamily: "'Space Mono', monospace", display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  Visit tridentnova.com <span style={{ fontSize: 14 }}>↗</span>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* ── GEOGRAPHY TABS ── */}
        <div style={{ borderTop: '0.5px solid var(--color-border-tertiary, #e5e7eb)', paddingTop: '2rem' }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-secondary, #6b7280)', marginBottom: '0.5rem' }}>
            Partner geography
          </div>
          <div style={{ fontSize: 20, fontWeight: 500, marginBottom: '1.5rem' }}>Choose your region</div>

          {/* tab buttons */}
          <div style={{ display: 'flex', gap: 0, border: '0.5px solid var(--color-border-tertiary, #e5e7eb)', borderRadius: 12, overflow: 'hidden', marginBottom: '2rem', width: '100%' }}>
            <button
              className="tab-india-btn"
              onClick={() => setActiveTab('india')}
              style={{
                flex: 1, padding: '0.75rem 1rem', fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 500, cursor: 'pointer',
                border: 'none', borderRight: '0.5px solid var(--color-border-tertiary, #e5e7eb)',
                background: activeTab === 'india' ? 'var(--color-background-primary, #fff)' : 'var(--color-background-secondary, #f9fafb)',
                color: activeTab === 'india' ? 'var(--color-text-primary, #111)' : 'var(--color-text-secondary, #6b7280)',
                borderBottom: activeTab === 'india' ? '2px solid #1D9E75' : '2px solid transparent',
                transition: 'all 0.15s ease',
              }}
            >
              Partners in India
            </button>
            <button
              className="tab-global-btn"
              onClick={() => setActiveTab('global')}
              style={{
                flex: 1, padding: '0.75rem 1rem', fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 500, cursor: 'pointer',
                border: 'none', borderRight: 'none',
                background: activeTab === 'global' ? 'var(--color-background-primary, #fff)' : 'var(--color-background-secondary, #f9fafb)',
                color: activeTab === 'global' ? 'var(--color-text-primary, #111)' : 'var(--color-text-secondary, #6b7280)',
                borderBottom: activeTab === 'global' ? '2px solid #185FA5' : '2px solid transparent',
                transition: 'all 0.15s ease',
              }}
            >
              Partners outside India
            </button>
          </div>

          {/* ── INDIA TAB ── */}
          {activeTab === 'india' && (
            <div>
              <p style={{ fontSize: 14, color: 'var(--color-text-secondary, #6b7280)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Our India partner programme operates on a <strong style={{ color: 'var(--color-text-primary, #111)', fontWeight: 500 }}>3-tier model</strong>. SGT manages sales and billing during Phase A; partners focus on installation, customer relationships, and after-sales. As the model matures, partners progress toward direct billing and full margin ownership.
              </p>
              <div className="tier-grid-partner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                {INDIA_TIERS.map(card => <TierCardItem key={card.id} card={card} />)}
              </div>
            </div>
          )}

          {/* ── GLOBAL TAB ── */}
          {activeTab === 'global' && (
            <div>
              {/* blue info box */}
              <div style={{ background: '#E6F1FB', border: '0.5px solid #85B7EB', borderRadius: 12, padding: '1rem 1.25rem', marginBottom: '1.5rem', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 28, height: 28, background: '#185FA5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="white"><path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 1.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM7.25 5v.75H6V7h1.25v4h1.5V7H10V5.75H8.75V5h-1.5z" /></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 500, color: '#0C447C', marginBottom: 4 }}>International partnership requires end-to-end commitment</h4>
                  <p style={{ fontSize: 13, color: '#185FA5', lineHeight: 1.6 }}>
                    Outside India, partners must be independently capable of handling the full commercial lifecycle — sales, marketing, installation, technical support, and maintenance. SGT provides the technology, training, and oversight; the partner owns the market.
                  </p>
                </div>
              </div>
              <p style={{ fontSize: 14, color: 'var(--color-text-secondary, #6b7280)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                SGT does not operate direct in international markets. All territory relationships are through authorized partners who take complete in-country responsibility.
              </p>
              <div className="tier-grid-partner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                {GLOBAL_TIERS.map(card => <TierCardItem key={card.id} card={card} />)}
              </div>
            </div>
          )}

          {/* ── WHAT WE OFFER ── */}
          <div style={{ borderTop: '0.5px solid var(--color-border-tertiary, #e5e7eb)', paddingTop: '2rem', marginTop: '2rem' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-secondary, #6b7280)', marginBottom: '0.5rem' }}>
              What partners get
            </div>
            <div style={{ fontSize: 20, fontWeight: 500, marginBottom: '1.25rem' }}>SGT's commitment to partners</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
              {OFFER_ITEMS.map((item, i) => (
                <div key={i} style={{ background: 'var(--color-background-secondary, #f9fafb)', borderRadius: 8, padding: '0.85rem 1rem' }}>
                  <div style={{ width: 28, height: 28, borderRadius: 6, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, background: item.bg }}>
                    {item.icon}
                  </div>
                  <h4 style={{ fontSize: 13, fontWeight: 500, marginBottom: 3 }}>{item.title}</h4>
                  <p style={{ fontSize: 12, color: 'var(--color-text-secondary, #6b7280)', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── OPEN TO DISCUSS ── */}
          <div style={{ border: '0.5px solid var(--color-border-tertiary, #e5e7eb)', borderRadius: 12, padding: '1.25rem 1.5rem', margin: '2rem 0', background: 'var(--color-background-secondary, #f9fafb)' }}>
            <div className="open-to-discuss-inner" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
              <div style={{ flexShrink: 0, background: '#E1F5EE', color: '#0F6E56', borderRadius: 8, padding: '0.75rem 1rem', fontSize: 12, fontWeight: 500, textAlign: 'center', minWidth: 80 }}>
                Open<br />to discuss
              </div>
              <div>
                <h4 style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>Not seeing a perfect fit? Let's talk.</h4>
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary, #6b7280)', lineHeight: 1.6 }}>
                  Our partnership model is actively evolving. If you have a unique market position, an existing fleet network, or a technology that could complement what we do, we're open to exploring structures beyond what's listed here. Every serious inquiry gets a conversation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── FOOTER NOTE ── */}
        <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--color-text-secondary, #6b7280)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '0.5px solid var(--color-border-tertiary, #e5e7eb)', lineHeight: 1.7 }}>
          SGT HydroEdge Pvt Ltd &nbsp;·&nbsp; Hydrogen-on-Demand Retrofit Systems<br />
          Partnership enquiries: <a href="mailto:contact@sgthydroedge.com" style={{ color: '#1D9E75', textDecoration: 'none' }}>contact@sgthydroedge.com</a>
        </div>

      </div>
    </>
  );
}