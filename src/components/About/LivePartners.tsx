import Link from 'next/link';

type LivePartner = {
  id: string;
  name: string;
  badge: string;
  tone: 'green' | 'blue';
  logo: string;
  desc: string;
  meta: { label: string; value: string }[];
  offices?: string;
  email?: string;
  href?: string;
  linkLabel?: string;
  storeSlug?: string;
  photo?: { src: string; alt: string; caption: string };
};

const LIVE_PARTNERS: LivePartner[] = [
  {
    id: 'lp-cps-triumph',
    name: 'Continental Power System & Triumph Engineer',
    badge: 'Authorised Dealer · Rajasthan, India',
    tone: 'green',
    logo: '/images/about/partners/continental-power-system-logo.png',
    desc: "Our exclusive authorised dealer for Rajasthan, bringing SGT HydroEdge's Controlled Hydrogen Fuel Assist systems to diesel generator and industrial customers across the state. Backed by an established power systems and engineering practice operating out of Jaipur.",
    meta: [
      { label: 'Coverage', value: 'Exclusive — Rajasthan' },
      { label: 'Focus', value: 'GreenX (DG sets · industrial)' },
    ],
    offices:
      'Registered office: Chitrakoot Scheme, Ajmer Road, Jaipur 302021, Rajasthan · Branch office: Vishwakarma Colony, New Delhi 110044',
    email: 'cpsdgsets@gmail.com',
    storeSlug: 'continental-power-systems',
    photo: {
      src: '/images/gallery/event-7/6.jpeg',
      alt: 'SGT HydroEdge and Continental Power Systems teams at the dealership certificate handover, Pune',
      caption: 'Dealership certificate handover at our Pune facility, July 2026',
    },
  },
  {
    id: 'lp-tridentnova',
    name: 'Trident Nova',
    badge: 'ASEAN Integrator · Malaysia',
    tone: 'blue',
    logo: '/images/about/partners/tridentnova_logo.png',
    desc: 'Energy and decarbonisation platform serving transport, logistics and industrial customers across ASEAN. Trident Nova deploys SGT HydroEdge GreenDrive technology through engineering-led pilots and measured deployments.',
    meta: [
      { label: 'Coverage', value: 'Malaysia · ASEAN' },
      { label: 'Focus', value: 'GreenDrive' },
    ],
    href: 'https://tridentnova.com',
    linkLabel: 'Visit tridentnova.com',
  },
];

const secondary = 'var(--color-text-secondary, #6b7280)';
const primary = 'var(--color-text-primary, #111)';

/** The partners already working with SGT HydroEdge, shown on the Partners page. */
export default function LivePartners() {
  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {LIVE_PARTNERS.map((p) => {
        const blue = p.tone === 'blue';
        const accent = blue ? '#185FA5' : '#1D9E75';
        return (
          <div
            key={p.id}
            style={{
              background: 'var(--color-background-primary, #ffffff)',
              border: '0.5px solid var(--color-border-tertiary, #e5e7eb)',
              borderRadius: 12,
              padding: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div
                style={{
                  flexShrink: 0,
                  width: 96,
                  height: 96,
                  background: blue ? '#F3F8FD' : '#F2FAF7',
                  border: `0.5px solid ${blue ? '#D6E6F5' : '#CDEBE0'}`,
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  loading="lazy"
                  style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }}
                />
              </div>

              <div style={{ flex: 1, minWidth: 220 }}>
                <div
                  style={{
                    display: 'inline-block',
                    fontSize: 11,
                    fontWeight: 500,
                    padding: '3px 10px',
                    borderRadius: 99,
                    marginBottom: '0.6rem',
                    background: blue ? '#E6F1FB' : '#E1F5EE',
                    color: blue ? '#185FA5' : '#0F6E56',
                  }}
                >
                  {p.badge}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 500, marginBottom: '0.35rem', color: primary }}>{p.name}</h3>
                <p style={{ fontSize: 13, color: secondary, lineHeight: 1.6, marginBottom: '0.85rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 12, color: secondary, marginBottom: '0.6rem' }}>
                  {p.meta.map((m) => (
                    <span key={m.label}>
                      <strong style={{ color: primary, fontWeight: 500 }}>{m.label}:</strong> {m.value}
                    </span>
                  ))}
                </div>
                {p.email && (
                  <div style={{ fontSize: 12, color: secondary, lineHeight: 1.6, marginBottom: '0.35rem' }}>
                    <strong style={{ color: primary, fontWeight: 500 }}>Contact:</strong>{' '}
                    <a href={`mailto:${p.email}`} style={{ color: accent, textDecoration: 'none' }}>
                      {p.email}
                    </a>
                  </div>
                )}
                {p.offices && <div style={{ fontSize: 11.5, color: secondary, lineHeight: 1.6 }}>{p.offices}</div>}
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: '0.75rem' }}>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: 12, color: accent, fontFamily: "'Space Mono', monospace", textDecoration: 'none' }}
                    >
                      {p.linkLabel} ↗
                    </a>
                  )}
                  {p.storeSlug && (
                    <Link
                      href={`/partners/${p.storeSlug}`}
                      style={{ fontSize: 12, color: accent, fontFamily: "'Space Mono', monospace", textDecoration: 'none' }}
                    >
                      Visit partner store →
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {p.photo && (
              <figure style={{ marginTop: '1rem' }}>
                <img
                  src={p.photo.src}
                  alt={p.photo.alt}
                  loading="lazy"
                  style={{ width: '100%', maxHeight: 360, objectFit: 'cover', borderRadius: 10 }}
                />
                <figcaption style={{ fontSize: 11.5, color: secondary, marginTop: 6 }}>{p.photo.caption}</figcaption>
              </figure>
            )}
          </div>
        );
      })}
    </div>
  );
}
