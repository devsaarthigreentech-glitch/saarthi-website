import type { Metadata } from 'next';
import Link from 'next/link';
import PartnerEnquiryForm from '@/components/Contact/PartnerEnquiryForm';
import { CLAIMS, COMPANY, LINES, ROUTES } from '@/data/siteContent';

export const metadata: Metadata = {
  title: `Partners | ${COMPANY.name}`,
  description:
    'Partner with SGT HydroEdge as a distributor, dealer or referral partner and take decarbonisation infrastructure for engines, burners and furnaces to your market.',
  alternates: { canonical: `${COMPANY.url}${ROUTES.partners}` },
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

const PARTNER_TYPES = [
  {
    id: 'distributor',
    badge: 'Partner type 1',
    title: 'Distributor',
    desc: 'For companies that want to take SGT HydroEdge solutions to their market.',
  },
  {
    id: 'dealer',
    badge: 'Partner type 2',
    title: 'Dealer',
    desc: 'For businesses that want to offer SGT HydroEdge solutions to their own customers.',
  },
  {
    id: 'referral',
    badge: 'Partner type 3',
    title: 'Referral partner',
    desc: 'For those who know an operator of engines, burners or furnaces who should be talking to us, and can make the introduction.',
  },
];

const eyebrow: React.CSSProperties = {
  fontFamily: "'Space Mono', monospace",
  fontSize: 10,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--color-text-secondary, #6b7280)',
  marginBottom: '0.5rem',
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function PartnershipPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');
        .partner-root * { box-sizing: border-box; margin: 0; padding: 0; }
        .partner-root { font-family: 'Sora', sans-serif; color: var(--color-text-primary, #111827); background: var(--color-background-primary, #ffffff); }
        .partner-input:focus { border-color: #1D9E75 !important; box-shadow: 0 0 0 2px rgba(29,158,117,0.12) !important; outline: none; }
        .partner-input::placeholder { color: #9ca3af; }
        .submit-btn-partner:hover { background: #0F6E56 !important; }
        .submit-btn-partner:active { transform: scale(0.98); }
        @media(max-width:540px){
          .form-grid-partner { grid-template-columns: 1fr !important; }
          .submit-row-partner { flex-direction: column !important; gap: 0.75rem !important; align-items: flex-start !important; }
          .tier-grid-partner { grid-template-columns: 1fr !important; }
          .hero-h1 { font-size: 24px !important; }
        }
      `}</style>

      <div className="partner-root" style={{ maxWidth: 860, margin: '0 auto', padding: '2rem 1.25rem 3rem' }}>

        {/* ── HERO ── */}
        <div style={{ textAlign: 'center', padding: '3rem 1rem 2.5rem', borderBottom: '0.5px solid var(--color-border-tertiary, #e5e7eb)', marginBottom: '2.5rem' }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: '0.12em', color: 'var(--color-text-secondary, #6b7280)', textTransform: 'uppercase', marginBottom: '1rem' }}>
            {COMPANY.name} · Partners
          </div>
          <h1 className="hero-h1" style={{ fontSize: 32, fontWeight: 500, lineHeight: 1.25, marginBottom: '1rem', fontFamily: "'Sora', sans-serif" }}>
            Partner with us — as a <span style={{ color: '#1D9E75' }}>distributor, dealer or referral partner.</span>
          </h1>
          <p style={{ fontSize: 15, color: 'var(--color-text-secondary, #6b7280)', maxWidth: 600, margin: '0 auto 1rem', lineHeight: 1.7 }}>
            {LINES.positioning}
          </p>
          <p style={{ fontSize: 15, color: 'var(--color-text-secondary, #6b7280)', maxWidth: 600, margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
            {LINES.core} Our market is pan-India and international, and we invite partners to take it there with us.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E1F5EE', color: '#0F6E56', fontSize: 12, fontWeight: 500, padding: '6px 14px', borderRadius: 99, border: '0.5px solid #5DCAA5' }}>
            {CLAIMS.madeIn} · Patented CHFA technology
          </div>
        </div>

        {/* ── PARTNER TYPES ── */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={eyebrow}>Three ways to partner</div>
          <h2 style={{ fontSize: 20, fontWeight: 500, marginBottom: '1.25rem' }}>Choose the partnership that fits you</h2>
          <div className="tier-grid-partner" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {PARTNER_TYPES.map((card) => (
              <div
                key={card.id}
                style={{
                  background: 'var(--color-background-primary, #ffffff)',
                  border: '0.5px solid var(--color-border-tertiary, #e5e7eb)',
                  borderRadius: 12,
                  padding: '1.25rem',
                }}
              >
                <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 500, padding: '3px 10px', borderRadius: 99, marginBottom: '0.75rem', background: '#E1F5EE', color: '#0F6E56' }}>
                  {card.badge}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 500, marginBottom: '0.35rem', color: 'var(--color-text-primary, #111)' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary, #6b7280)', lineHeight: 1.6 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── ENQUIRY FORM ── */}
        <div id="enquiry" style={{ borderTop: '0.5px solid var(--color-border-tertiary, #e5e7eb)', paddingTop: '2rem' }}>
          <div style={eyebrow}>Partner enquiry</div>
          <h2 style={{ fontSize: 20, fontWeight: 500, marginBottom: '0.5rem' }}>Tell us how you would like to work with us</h2>
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary, #6b7280)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Select a partner type and send us a short note. Our team will get back to you.
          </p>
          <div style={{ border: '0.5px solid var(--color-border-tertiary, #e5e7eb)', borderRadius: 12, padding: '1.5rem', background: 'var(--color-background-secondary, #f9fafb)' }}>
            <PartnerEnquiryForm />
          </div>
        </div>

        {/* ── CUSTOMER NOTE ── */}
        <div style={{ border: '0.5px solid var(--color-border-tertiary, #e5e7eb)', borderRadius: 12, padding: '1.25rem 1.5rem', margin: '2rem 0 0', background: 'var(--color-background-secondary, #f9fafb)' }}>
          <h2 style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>Looking to become a customer instead?</h2>
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary, #6b7280)', lineHeight: 1.6 }}>
            Talk to us about your engines, burners and furnaces on the{' '}
            <Link href={ROUTES.contact} style={{ color: '#1D9E75', textDecoration: 'none' }}>contact page</Link>.
          </p>
        </div>

        {/* ── FOOTER NOTE ── */}
        <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--color-text-secondary, #6b7280)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '0.5px solid var(--color-border-tertiary, #e5e7eb)', lineHeight: 1.7 }}>
          {COMPANY.name} &nbsp;·&nbsp; {COMPANY.positioning}<br />
          Partnership enquiries: <a href={`mailto:${COMPANY.email}`} style={{ color: '#1D9E75', textDecoration: 'none' }}>{COMPANY.email}</a>
        </div>

      </div>
    </>
  );
}
