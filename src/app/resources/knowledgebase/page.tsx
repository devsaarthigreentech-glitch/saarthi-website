'use client';

import { useState, useRef, useEffect } from 'react';

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface FAQItem {
  id: string;
  section: string;
  number: string;
  question: string;
  content: React.ReactNode;
}

// ─── ATOMS ────────────────────────────────────────────────────────────────────

const Tag = ({ label, variant = 'default' }: { label: string; variant?: 'green' | 'yellow' | 'default' }) => {
  const cls =
    variant === 'green'  ? 'border-[#1B6B3D] text-[#1B6B3D] bg-[#e8f5ee]' :
    variant === 'yellow' ? 'border-[#c9a900] text-[#7a6200] bg-[#fff8d0]'  :
                           'border-[#d8e4dc] text-[#4a5550] bg-white';
  return <span className={`text-[11px] px-[10px] py-[3px] rounded-full border ${cls}`}>{label}</span>;
};

const StatChip = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-[#e8f5ee] rounded-[6px] px-[14px] py-2">
    <div className="font-semibold text-[#1B6B3D] text-[12.5px]">{value}</div>
    <div className="text-[11px] text-[#4a5550] mt-[1px]">{label}</div>
  </div>
);

const HBox = ({ children }: { children: React.ReactNode }) => (
  <div style={{ background: '#f2faf5', borderLeft: '3px solid #1B6B3D', borderRadius: '0 8px 8px 0', padding: '12px 16px', margin: '16px 0', fontSize: 13.5, color: '#1a1f1c', lineHeight: 1.6 }}>
    {children}
  </div>
);

const Steps = ({ steps }: { steps: { label: string; sub?: string }[] }) => (
  <div className="flex flex-wrap gap-3 my-[14px]">
    {steps.map((s, i) => (
      <div key={i} className="flex items-center gap-2">
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-[#1B6B3D] text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5">{i + 1}</div>
          <div className="text-[12.5px] text-[#4a5550]">
            {s.sub ? <><strong className="text-[#1a1f1c]">{s.label}</strong><br /><small>{s.sub}</small></> : s.label}
          </div>
        </div>
        {i < steps.length - 1 && <span className="text-[#d8e4dc] mx-1">→</span>}
      </div>
    ))}
  </div>
);

const CompTable = ({ rows }: { rows: { feature: string; sgt: string; other: string; sgtYes?: boolean; otherNo?: boolean }[] }) => (
  <div className="border border-[#d8e4dc] rounded-[10px] overflow-hidden my-[14px]">
    <div className="grid grid-cols-3 divide-x divide-[#d8e4dc]">
      <div className="bg-white px-[14px] py-[10px] text-[12px] font-semibold text-[#4a5550]">Feature</div>
      <div className="bg-[#1B6B3D] px-[14px] py-[10px] text-[12px] font-semibold text-white">SGT HydroEdge</div>
      <div className="bg-white px-[14px] py-[10px] text-[12px] font-semibold text-[#4a5550]">Scrubber / SCR</div>
    </div>
    {rows.map((r, i) => (
      <div key={i} className="grid grid-cols-3 divide-x divide-[#d8e4dc] border-t border-[#d8e4dc]">
        <div className="bg-white px-[14px] py-[10px] text-[12.5px] text-[#4a5550]">{r.feature}</div>
        <div className="bg-[#f2faf5] px-[14px] py-[10px] text-[12.5px] font-medium text-[#1a1f1c]">
          {r.sgtYes && <span className="text-[#1B6B3D] font-bold">✓ </span>}{r.sgt}
        </div>
        <div className="bg-white px-[14px] py-[10px] text-[12.5px] text-[#4a5550]">
          {r.otherNo && <span className="text-red-600 font-bold">✗ </span>}{r.other}
        </div>
      </div>
    ))}
  </div>
);

// ─── ACCORDION ────────────────────────────────────────────────────────────────

function AccItem({ item, q }: { item: FAQItem; q: string }) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(0);

  useEffect(() => {
    if (open && bodyRef.current) setH(bodyRef.current.scrollHeight);
    else setH(0);
  }, [open]);

  const borderColor = open ? '#1B6B3D' : hover ? '#2a8f53' : '#d8e4dc';
  const boxShadow   = open ? '0 4px 20px rgba(27,107,61,0.12)' : hover ? '0 2px 12px rgba(27,107,61,0.08)' : 'none';

  const hi = (text: string) => {
    if (!q.trim()) return <>{text}</>;
    const esc = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return <>{text.split(new RegExp(`(${esc})`, 'gi')).map((p, i) =>
      p.toLowerCase() === q.toLowerCase()
        ? <mark key={i} style={{ background: '#FFD700', color: '#1a1f1c', borderRadius: 2, padding: '0 1px' }}>{p}</mark>
        : p
    )}</>;
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#ffffff',
        border: `1px solid ${borderColor}`,
        borderRadius: 10,
        overflow: 'hidden',
        transition: 'box-shadow 0.2s, border-color 0.2s',
        boxShadow,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          padding: '18px 20px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* number badge */}
        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 10,
          color: open ? '#ffffff' : '#8a9490',
          background: open ? '#1B6B3D' : '#f7faf8',
          borderRadius: 4,
          padding: '2px 7px',
          flexShrink: 0,
          border: `1px solid ${open ? '#1B6B3D' : '#d8e4dc'}`,
          transition: 'all 0.15s',
        }}>
          {item.number}
        </span>

        {/* question text */}
        <span style={{
          flex: 1,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14.5,
          fontWeight: 500,
          color: open ? '#1B6B3D' : '#1a1f1c',
          transition: 'color 0.15s',
          lineHeight: 1.4,
        }}>
          {hi(item.question)}
        </span>

        {/* arrow */}
        <span style={{
          marginLeft: 'auto',
          color: open ? '#1B6B3D' : '#8a9490',
          flexShrink: 0,
          transition: 'transform 0.3s ease',
          transform: open ? 'rotate(180deg)' : 'none',
          fontSize: 12,
        }}>▼</span>
      </button>

      {/* body */}
      <div style={{ maxHeight: h, overflow: 'hidden', transition: 'max-height 0.38s cubic-bezier(0.4,0,0.2,1)' }}>
        <div
          ref={bodyRef}
          style={{ padding: '16px 20px 22px', borderTop: '1px solid #d8e4dc' }}
        >
          {item.content}
        </div>
      </div>
    </div>
  );
}

// ─── SECTION ──────────────────────────────────────────────────────────────────

const META: Record<string, { title: string; sub: string; icon: string }> = {
  tech:       { title: 'How the Technology Works',   sub: 'For engineers, technical buyers, and the curious',               icon: '⚙'  },
  commercial: { title: 'Pricing & Commercial Model', sub: 'For procurement teams, CFOs, and operations buyers',             icon: '₹'  },
  solutions:  { title: 'Solutions by Vertical',      sub: 'For plant managers, fleet operators, and vessel owners',         icon: '🏭' },
  investor:   { title: 'For Investors',              sub: 'Market opportunity, financials, and growth thesis',              icon: '📈' },
  partner:    { title: 'Partnership',                sub: 'For consulting firms, distributors, and technology integrators', icon: '🤝' },
};

function Section({ id, items, q }: { id: string; items: FAQItem[]; q: string }) {
  const m = META[id];
  if (!items.length) return null;
  return (
    <section id={`sec-${id}`} className="mb-[56px] animate-fadeUp">
      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#d8e4dc]">
        <div className="w-11 h-11 rounded-[10px] bg-[#1B6B3D] flex items-center justify-center text-xl flex-shrink-0">{m.icon}</div>
        <div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: '#1a1f1c', marginBottom: 2 }}>{m.title}</h2>
          <p className="text-[12.5px] text-[#8a9490]">{m.sub}</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {items.map(item => <AccItem key={item.id} item={item} q={q} />)}
      </div>
    </section>
  );
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const DATA: FAQItem[] = [
  { id:'T1', section:'tech', number:'T1', question:"What exactly is CHFA and how is it different from HHO kits I've seen online?",
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><p><strong className="text-[#1a1f1c]">CHFA (Controlled Hydrogen Fuel Assist)</strong> is SGT's proprietary technology for on-demand oxy-hydrogen (HHO) generation and injection into combustion systems. The key word is <em>controlled</em>.</p><HBox><strong className="text-[#1B6B3D]">The critical difference:</strong> Consumer HHO kits inject gas at a fixed, uncontrolled rate. CHFA uses real-time load sensing and adaptive dosing logic to inject precisely the right amount of HHO for the operating condition.</HBox><p>No hydrogen is stored — it is generated only when needed and consumed immediately.</p><div style={{display:'flex',flexWrap:'wrap',gap:6,marginTop:12}}><Tag label="Patent Filed" variant="green"/><Tag label="ARAI Validated" variant="green"/><Tag label="No Gas Storage"/><Tag label="No Engine Modification"/></div></div> },
  { id:'T2', section:'tech', number:'T2', question:'Does it work differently on engines vs. boilers vs. kilns?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><p>Yes. SGT operates two distinct technology platforms:</p><ul className="list-disc pl-5 space-y-1"><li><strong className="text-[#1a1f1c]">CHFA</strong> — designed for reciprocating engines: DG sets, marine engines, trucks, mining/construction vehicles.</li><li><strong className="text-[#1a1f1c]">CHCA</strong> — designed for industrial combustion systems: boilers and kilns. Works alongside coal, biomass, diesel, CNG, LDO, HFO, or pet coke.</li></ul></div> },
  { id:'T3', section:'tech', number:'T3', question:'What are the actual fuel savings and emission reduction numbers?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><div className="flex flex-wrap gap-3"><StatChip value="2–18%" label="Fuel savings range"/><StatChip value="Up to 95%" label="PM reduction"/><StatChip value=">50%" label="CO reduction"/><StatChip value="Direct CO₂" label="proportional to fuel saved"/></div><p>DG set deployments show 3–12% fuel savings (Dr. Reddy's Laboratories, Turbo Energy). Vehicles tested across 3,00,000+ km show 2–15%.</p><HBox><strong className="text-[#1B6B3D]">Important context:</strong> Boiler and kiln solutions (CHCA) are currently in pilot development phase.</HBox></div> },
  { id:'T4', section:'tech', number:'T4', question:'Is there any scientific validation — not just claims?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><p>Yes. SGT has submitted a peer-reviewed research paper to ARAI (Automotive Research Association of India).</p><ul className="list-disc pl-5 space-y-1"><li>Tested at Dr. Reddy's Laboratories, Visakhapatnam (1010 kVA, 380 kVA)</li><li>Tested at Turbo Energy, Paiyanoor, Chennai</li><li>NABL-accredited laboratory results</li><li>All non-hydrogen variables controlled to isolate HHO effect</li></ul><p>Globally validated by CEMEX, SCHOTT, Saint-Gobain, and Iris Ceramica.</p></div> },
  { id:'T5', section:'tech', number:'T5', question:'What happens if the system malfunctions? Is it safe?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><ul className="list-disc pl-5 space-y-1"><li><strong className="text-[#1a1f1c]">No gas storage:</strong> HHO generated on-demand and consumed immediately.</li><li><strong className="text-[#1a1f1c]">Automatic shutdown:</strong> Fault detection triggers immediate shutdown.</li><li><strong className="text-[#1a1f1c]">No engine modification:</strong> Bolt-on retrofit — removal returns engine to original state.</li><li><strong className="text-[#1a1f1c]">Fail-safe design:</strong> Host engine continues on primary fuel on any system error.</li></ul><div style={{display:"flex",flexWrap:"wrap",gap:6,marginTop:12}}><Tag label="CE Certified" variant="green"/><Tag label="UL Certified" variant="green"/><Tag label="RoHS Compliant" variant="green"/><Tag label="ISO 9001" variant="green"/></div></div> },
  { id:'T6', section:'tech', number:'T6', question:'What fuels does the system work with?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><ul className="list-disc pl-5 space-y-1"><li><strong className="text-[#1a1f1c]">Industrial (CHCA):</strong> Coal, biomass, diesel, CNG, propane, LDO, HFO, pet coke</li><li><strong className="text-[#1a1f1c]">Marine (CHFA):</strong> HFO, MDO, MGO, diesel</li><li><strong className="text-[#1a1f1c]">Logistics / Engines on Wheels (CHFA):</strong> Diesel</li></ul></div> },
  { id:'T7', section:'tech', number:'T7', question:'What is GreenVision and how does it fit in?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><p><strong className="text-[#1a1f1c]">GreenVision</strong> is SGT's AI-powered IoT and Digital Twin platform. It provides real-time fuel monitoring, emissions tracking (IPCC AR6), predictive maintenance, ESG-grade MRV outputs, and auto-generated compliance reports: BRSR, CBAM, IMO CII, CPCB.</p></div> },
  { id:'T8', section:'tech', number:'T8', question:'How long does installation take and is there engine downtime?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><p>Installation is a bolt-on retrofit requiring no modification to engine hardware, fuel systems, or combustion geometry.</p><Steps steps={[{label:'Site Assessment'},{label:'Custom Engineering'},{label:'Scheduled Install'},{label:'Commissioning & Tuning'},{label:'IoT Go-Live'}]}/><p>For DG sets and vehicles, installation typically takes hours. For large industrial or marine assets, scheduled during planned maintenance windows.</p></div> },
  { id:'T9', section:'tech', number:'T9', question:'Does it work on all engine sizes and ages?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><p>SGT systems are custom-engineered to each application. For vehicles, validated on Euro 3 through Euro 6 engines. For DG sets, the validated range spans 250 kVA to 1010 kVA, scalable to larger installations.</p></div> },
  { id:'T10', section:'tech', number:'T10', question:"Why hasn't hydrogen assist been adopted everywhere already?",
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><ul className="list-disc pl-5 space-y-2"><li><strong className="text-[#1a1f1c]">It has been adopted — industrially.</strong> CEMEX, SCHOTT, Saint-Gobain all use hydrogen in combustion at scale. What was missing was accessible equipment outside China.</li><li><strong className="text-[#1a1f1c]">Chinese monopoly.</strong> SGT is the first manufacturer of industrial-grade HHO systems outside China.</li><li><strong className="text-[#1a1f1c]">Vehicle HHO had a bad reputation.</strong> CHFA's controlled dosing solves the inconsistency — documented in the ARAI paper.</li><li><strong className="text-[#1a1f1c]">Regulation just arrived.</strong> CPCB, IMO 2050, BRSR, and EU CBAM created urgency that didn't exist 3 years ago.</li></ul></div> },
  { id:'T11', section:'tech', number:'T11', question:'What ongoing maintenance does the system require?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><p>Primary consumable is distilled water, replenished fortnightly to monthly. SGT offers Annual Maintenance Contracts (AMC) covering preventive maintenance, spare parts, calibration, and 24/7 remote monitoring via GreenVision. Under DaaS, all maintenance is handled by SGT.</p></div> },
  { id:'T12', section:'tech', number:'T12', question:'How does the comparison hold against scrubbers, SCR, or dual-fuel conversions?',
    content:<div className="text-[14px] text-[#4a5550] leading-[1.75]"><CompTable rows={[{feature:'CapEx Model',sgt:'Zero CapEx (DaaS) or outright',other:'High upfront investment'},{feature:'Fuel Efficiency',sgt:'Improved by 2–18%',other:'Reduced (backpressure)',sgtYes:true,otherNo:true},{feature:'CO₂ Reduction',sgt:'Direct reduction',other:'None (SOx/NOx only)',sgtYes:true,otherNo:true},{feature:'Engine Modification',sgt:'None required',other:'Structural changes needed'},{feature:'ESG Data',sgt:'Automated via GreenVision',other:'Manual / third-party',sgtYes:true,otherNo:true}]}/></div> },

  { id:'C1', section:'commercial', number:'C1', question:'What does it cost and how is it priced?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><div className="flex flex-wrap gap-3"><StatChip value="₹40K–₹1.8L" label="GreenDrive (vehicles)"/><StatChip value="₹50K–₹9L" label="GreenX (DG sets)"/><StatChip value="₹8L–₹60L+" label="GreenEdge (industrial)"/><StatChip value="₹1.5L–₹5L/mo" label="GreenMarine DaaS"/></div><p>Industrial solutions are custom-engineered — pricing is case-specific based on capacity, fuel type, and deployment scope.</p></div> },
  { id:'C2', section:'commercial', number:'C2', question:'What is Decarbonisation-as-a-Service (DaaS)? How does the model work?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><HBox><strong className="text-[#1B6B3D]">Under DaaS:</strong> You pay zero upfront. SGT installs, monitors, maintains, and optimises the system. You pay a monthly subscription fee. Your fuel savings are guaranteed to exceed the subscription cost — delivering positive cash flow from day one.</HBox><Steps steps={[{label:'Deploy'},{label:'Optimise'},{label:'Monitor'},{label:'Maintain'},{label:'Verify'}]}/></div> },
  { id:'C3', section:'commercial', number:'C3', question:'What is the typical payback period if I buy outright?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><div className="flex flex-wrap gap-3"><StatChip value="6–18 months" label="DG sets (outright purchase)"/><StatChip value="1–2 months" label="Marine vessels (DaaS breakeven)"/><StatChip value="12–24 months" label="Heavy logistics vehicles"/></div></div> },
  { id:'C4', section:'commercial', number:'C4', question:"What if the savings don't materialise? What is SGT's commitment?",
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><p>Under DaaS, SGT's business model is aligned with your savings — we only succeed if you save. For outright purchases, SGT conducts a paid Proof-of-Concept (POC) before any full deployment commitment. Several key enterprise relationships — Dr. Reddy's, Turbo Energy, Coca-Cola — began as POCs.</p></div> },
  { id:'C5', section:'commercial', number:'C5', question:'Can I get carbon credits for using your system?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><p>Yes. GreenVision generates verified, IPCC AR6-compliant emissions data that forms the basis for carbon credit claims. SGT's GreenMentor consulting arm provides end-to-end support for documentation, verification, and market access.</p></div> },
  { id:'C6', section:'commercial', number:'C6', question:'Does your solution help with BRSR, CBAM, or IMO compliance?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><p>Directly yes. GreenVision auto-generates compliance-ready reports for:</p><div className="flex flex-wrap gap-[6px]"><Tag label="BRSR (India SEBI mandate)" variant="green"/><Tag label="EU CBAM" variant="green"/><Tag label="IMO CII ratings" variant="green"/><Tag label="CPCB emission norms" variant="green"/><Tag label="GHG Protocol Scope 1/2/3" variant="green"/></div></div> },
  { id:'C7', section:'commercial', number:'C7', question:"What's the process to get started? How long does it take?",
    content:<div className="text-[14px] text-[#4a5550] leading-[1.75]"><Steps steps={[{label:'Enquiry',sub:'Share fuel consumption data + asset specs'},{label:'ROI Assessment',sub:'SGT provides savings estimate within 48 hours'},{label:'Paid POC',sub:'Site visit, installation, 30–60 day data collection'},{label:'Full Deployment',sub:'Scale across fleet or facility'}]}/></div> },
  { id:'C8', section:'commercial', number:'C8', question:'Who are your existing customers?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><div className="flex flex-wrap gap-[6px]">{["Dr. Reddy's Laboratories","Turbo Energy","Coca-Cola India","Toyota Kirloskar Motor","CUMI","Kirloskar Oil Engines"].map(c=><Tag key={c} label={c} variant="green"/>)}{["DP World (Marine POC)","Vopak Singapore (DG POC)","Mount Meru Group (Africa)","Malaysia (3 Customers)"].map(c=><Tag key={c} label={c}/>)}</div><p className="mt-3">Commercial sales commenced January 2026. 27 systems sold since November 2025.</p></div> },
  { id:'C9', section:'commercial', number:'C9', question:'What warranties or guarantees do you offer?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><p>SGT hardware carries standard product warranty. Under DaaS, the monthly subscription fee is structured to be lower than monthly fuel savings achieved — ensuring positive cash flow. All systems include GreenVision IoT monitoring for continuous, auditable performance verification.</p></div> },
  { id:'C10', section:'commercial', number:'C10', question:'Where are you manufactured? What is your supply chain?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><p>SGT HydroEdge manufactures at its <strong className="text-[#1a1f1c]">GreenLabs facility in Chakan, Pune, Maharashtra</strong>. Phase 1 capacity: 100,000+ units per year.</p><HBox><strong className="text-[#1B6B3D]">Strategic advantage:</strong> SGT is the first manufacturer of industrial-grade on-demand HHO systems outside China.</HBox><div className="flex flex-wrap gap-[6px]"><Tag label="Made in India" variant="yellow"/><Tag label="CE Certified" variant="green"/><Tag label="ISO 9001" variant="green"/><Tag label="ARAI Validated" variant="green"/></div></div> },

  { id:'S1', section:'solutions', number:'S1', question:'What can your system do for my industrial boiler?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><p>SGT's <strong className="text-[#1a1f1c]">GreenEdge</strong> boiler solution (CHCA) introduces HHO alongside coal, biomass, diesel, CNG, LDO, or HFO for improved combustion completeness and reduced emissions.</p><HBox><strong className="text-[#1B6B3D]">Please note:</strong> Boiler solutions are currently in active pilot development. We welcome enquiries from operators to participate in our pilot programme.</HBox></div> },
  { id:'S2', section:'solutions', number:'S2', question:'What about kilns — cement, ceramics, glass?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><p>Kilns represent one of the most compelling decarbonisation opportunities globally. SGT's CHCA technology is inspired by deployments at CEMEX, SCHOTT, and Iris Ceramica.</p><HBox><strong className="text-[#1B6B3D]">Please note:</strong> Kiln solutions (CHCA) are in pilot/development phase. We are actively seeking operators in cement, ceramics, glass, and refractory industries for collaborative pilot programmes.</HBox><div className="flex flex-wrap gap-[6px]">{["Cement kilns","Ceramics kilns","Glass furnaces","Refractory kilns","Rotary kilns"].map(t=><Tag key={t} label={t}/>)}</div></div> },
  { id:'S3', section:'solutions', number:'S3', question:'How does it work for DG sets and power backup?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><p><strong className="text-[#1a1f1c]">GreenX</strong> is SGT's proven, commercially deployed DG set solution.</p><div className="flex flex-wrap gap-3"><StatChip value="3–12%" label="Diesel savings"/><StatChip value="Up to 95%" label="PM reduction"/><StatChip value="₹50K–₹9L" label="System cost range"/><StatChip value="250–1010 kVA+" label="Validated range"/></div><p>Primary markets: Telecom towers, data centres, pharmaceutical manufacturing, hospitals.</p></div> },
  { id:'S4', section:'solutions', number:'S4', question:'Does it work for marine vessels? What about IMO compliance?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><p><strong className="text-[#1a1f1c]">GreenMarine</strong> is SGT's solution for marine engines — built for harsh marine environments with no hydrogen storage on board (eliminating SOLAS concerns).</p><ul className="list-disc pl-5 space-y-1"><li>Fuel savings: 3–15% on HFO, MDO, or MGO</li><li>Directly improves CII (Carbon Intensity Indicator) rating</li><li>Auto-generated IMO CII and MARPOL Annex VI compliance reports via GreenVision</li><li>Zero CapEx DaaS available: ₹1.5L–₹5L/month with 1–2 month payback</li></ul></div> },
  { id:'S5', section:'solutions', number:'S5', question:'What about trucks, mining vehicles, and construction equipment?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><p><strong className="text-[#1a1f1c]">GreenDrive</strong> covers all diesel engines on wheels — logistics fleets, long-haul trucks, mining haul trucks, and construction equipment.</p><div className="flex flex-wrap gap-3"><StatChip value="2–15%" label="Diesel savings"/><StatChip value="₹40K–₹1.8L" label="System cost range"/><StatChip value="3,00,000+ km" label="Tested distance"/></div><p>For large fleet operators (50+ vehicles), DaaS is available — zero CapEx, SGT manages everything.</p></div> },
  { id:'S6', section:'solutions', number:'S6', question:'Which industries and sectors are you targeting?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><ul className="list-disc pl-5 space-y-1"><li><strong className="text-[#1a1f1c]">Industrial:</strong> Cement, ceramics, glass, steel, textiles, chemicals, pharmaceuticals, food processing, refractory</li><li><strong className="text-[#1a1f1c]">Marine:</strong> Coastal shipping, international commercial shipping, fishing, ferry operators, navy, coast guard, port operations</li><li><strong className="text-[#1a1f1c]">Engines on Wheels:</strong> Logistics & trucking, mining, construction, municipal transport, last-mile delivery</li></ul></div> },
  { id:'S7', section:'solutions', number:'S7', question:'Is the solution available internationally or only in India?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><p>SGT is actively pursuing international markets. Ongoing engagements: Malaysia (3 paid POCs), Africa (Mount Meru Group), Singapore (Vopak DG POC, DP World Marine POC), and Middle East.</p><div className="flex flex-wrap gap-[6px]">{["India","Malaysia","Singapore"].map(t=><Tag key={t} label={t} variant="green"/>)}{["Middle East","Europe (CE certified)","Africa"].map(t=><Tag key={t} label={t}/>)}</div></div> },
  { id:'S8', section:'solutions', number:'S8', question:'What is the minimum fleet or asset size that makes economic sense?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><ul className="list-disc pl-5 space-y-1"><li><strong className="text-[#1a1f1c]">DG sets:</strong> Even a single unit (250 kVA+) is economically viable.</li><li><strong className="text-[#1a1f1c]">Marine:</strong> Single vessel viable. Payback under 2 months on most commercial vessels.</li><li><strong className="text-[#1a1f1c]">Vehicles:</strong> Single unit retail available. Fleet DaaS requires 10+ vehicles.</li><li><strong className="text-[#1a1f1c]">Industrial:</strong> High-utilisation industrial boilers typically see fastest payback. Custom assessment required.</li></ul></div> },
  { id:'S9', section:'solutions', number:'S9', question:'How is this different from switching to EVs or full hydrogen?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><HBox><strong className="text-[#1B6B3D]">The fundamental difference:</strong> EVs and full hydrogen are "decarbonise the future" strategies. SGT is a "decarbonise the present" strategy.</HBox><p>SGT works on every fossil fuel asset you already own, today, without changing fuel or engine — and delivers a financial return simultaneously.</p><div className="flex flex-wrap gap-[6px]"><Tag label="No new fuel infrastructure" variant="green"/><Tag label="No fleet replacement" variant="green"/><Tag label="Positive ROI from day 1" variant="green"/><Tag label="Deployable in weeks" variant="green"/></div></div> },
  { id:'S10', section:'solutions', number:'S10', question:'Can you handle a pilot before committing to full rollout?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><p>Absolutely — and this is our preferred approach. Every engagement starts with a paid POC including site assessment, installation on 1–3 representative assets, 30–60 day monitored operation, and a detailed savings report. The POC is paid — typically ₹50K to ₹5L depending on application.</p></div> },

  { id:'I1', section:'investor', number:'I1', question:'What is the market size and addressable opportunity?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><ul className="list-disc pl-5 space-y-1"><li><strong className="text-[#1a1f1c]">Industrial combustion:</strong> 500,000+ industrial boilers and kilns in India alone.</li><li><strong className="text-[#1a1f1c]">Marine:</strong> 50,000+ ocean-going vessels globally facing IMO 2050 net-zero targets.</li><li><strong className="text-[#1a1f1c]">DG sets:</strong> 15 million+ DG sets in India.</li><li><strong className="text-[#1a1f1c]">Vehicles:</strong> Hundreds of millions of diesel commercial vehicles globally.</li></ul></div> },
  { id:'I2', section:'investor', number:'I2', question:"What is SGT's revenue model and how does it scale?",
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><ul className="list-disc pl-5 space-y-1"><li><strong className="text-[#1a1f1c]">GreenLabs (Hardware):</strong> Product sales and DaaS deployments.</li><li><strong className="text-[#1a1f1c]">GreenVision (SaaS):</strong> Monthly/annual IoT platform subscription per connected unit.</li><li><strong className="text-[#1a1f1c]">GreenMentor (Consulting):</strong> ₹10L–₹50L per engagement.</li></ul><HBox>Each installed hardware unit generates three revenue streams: hardware margin, AMC/maintenance, and GreenVision SaaS. This compounding dynamic creates significant per-unit lifetime value.</HBox></div> },
  { id:'I3', section:'investor', number:'I3', question:"What is SGT's competitive moat? Why can't this be easily copied?",
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><ul className="list-disc pl-5 space-y-1"><li><strong className="text-[#1a1f1c]">Patent protection:</strong> CHFA technology is patent-filed.</li><li><strong className="text-[#1a1f1c]">First-mover outside China:</strong> Building this takes 3+ years of R&D — not easily replicated.</li><li><strong className="text-[#1a1f1c]">ARAI validation:</strong> Peer-reviewed scientific validation creates a credibility barrier.</li><li><strong className="text-[#1a1f1c]">GreenVision data lock-in:</strong> Historical ESG reports create significant switching costs.</li></ul></div> },
  { id:'I4', section:'investor', number:'I4', question:'What regulatory tailwinds support the business?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><div className="flex flex-wrap gap-[6px]"><Tag label="CPCB emission norms (India)" variant="green"/><Tag label="IMO 2050 net-zero" variant="green"/><Tag label="EU CBAM" variant="green"/><Tag label="SEBI BRSR mandate" variant="green"/><Tag label="CII ratings (marine)" variant="green"/><Tag label="Carbon pricing globally" variant="yellow"/></div><p className="mt-3">Every one of these regulations creates a financial penalty for inaction — and a direct commercial case for SGT's solutions.</p></div> },
  { id:'I5', section:'investor', number:'I5', question:'What stage is the company at? What is the current traction?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><div className="flex flex-wrap gap-3"><StatChip value="Jan 2026" label="Commercial sales launched"/><StatChip value="27 systems" label="Sold since Nov 2025"/><StatChip value="3,00,000+ km" label="Vehicle testing completed"/><StatChip value="10+ brands" label="Paid POCs completed"/></div><p>SGT is transitioning from proof-and-pilot phase to early commercial scale.</p></div> },
  { id:'I6', section:'investor', number:'I6', question:"What is the go-to-market strategy?",
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><ul className="list-disc pl-5 space-y-1"><li><strong className="text-[#1a1f1c]">Direct enterprise sales:</strong> Large industrial, marine, and fleet customers.</li><li><strong className="text-[#1a1f1c]">Consulting firm partnerships:</strong> Global firms (Capgemini, KPMG, Deloitte, EY).</li><li><strong className="text-[#1a1f1c]">Channel partners:</strong> Regional distributors in target markets.</li><li><strong className="text-[#1a1f1c]">Technology partnerships:</strong> IoT, cloud, and energy management firms.</li></ul></div> },
  { id:'I7', section:'investor', number:'I7', question:'What are the key risks and how does SGT mitigate them?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><ul className="list-disc pl-5 space-y-2"><li><strong className="text-[#1a1f1c]">Technology scepticism:</strong> Mitigated by ARAI-validated research paper and paid POC model.</li><li><strong className="text-[#1a1f1c]">Boiler/kiln development risk:</strong> CHFA (DG sets, vehicles, marine) is proven and deployed. Revenue model is not dependent on CHCA succeeding in year 1.</li><li><strong className="text-[#1a1f1c]">Sales cycle length:</strong> Portfolio diversification mitigates dependence on any single segment.</li></ul></div> },
  { id:'I8', section:'investor', number:'I8', question:'What is the long-term vision for SGT HydroEdge?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><HBox><strong className="text-[#1B6B3D]">The vision:</strong> To be the global infrastructure company for industrial decarbonisation — delivering verified emission reductions across every fossil fuel asset on earth, through hardware, software, and consulting.</HBox><p>By FY31, the target is a predominantly recurring revenue model where SaaS and consulting revenues represent a majority of total revenue.</p></div> },
  { id:'I9', section:'investor', number:'I9', question:'How do I access the investor deck or request a meeting?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><HBox><strong className="text-[#1B6B3D]">Contact:</strong> alok@sgthydroedge.com<br/><strong className="text-[#1B6B3D]">Website:</strong> sgthydroedge.com<br/><strong className="text-[#1B6B3D]">Use subject line:</strong> "Investor Inquiry — [Your Name / Fund]"</HBox><p>Relevant materials available on request: Investor Presentation, Technology Pack, Financial Projections, and Product Brochures by vertical.</p></div> },

  { id:'P1', section:'partner', number:'P1', question:'What types of partnerships does SGT offer?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><ul className="list-disc pl-5 space-y-2"><li><strong className="text-[#1a1f1c]">Consulting Partners:</strong> Global and regional consulting firms who serve industrial, marine, or logistics clients.</li><li><strong className="text-[#1a1f1c]">Channel Partners:</strong> Regional distributors and systems integrators who deploy and service SGT products.</li><li><strong className="text-[#1a1f1c]">Technology Partners:</strong> IoT, cloud, and energy management firms who integrate with or white-label the GreenVision platform.</li></ul></div> },
  { id:'P2', section:'partner', number:'P2', question:'What is the commercial model for consulting firm partners?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><div className="flex flex-wrap gap-3"><StatChip value="Consulting fees" label="Strategy & implementation"/><StatChip value="Technology referral" label="Hardware co-sell %"/><StatChip value="SaaS co-sell" label="GreenVision revenue share"/><StatChip value="Carbon advisory" label="Credit monetisation fees"/></div><p>Partners can offer a complete "Decarbonisation Programme" — strategy through implementation through monitoring — with SGT handling the technology layer.</p></div> },
  { id:'P3', section:'partner', number:'P3', question:'What does SGT need from a channel partner?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><ul className="list-disc pl-5 space-y-1"><li>Established customer relationships in industrial, marine, or logistics sectors</li><li>Local market presence and regulatory knowledge</li><li>Technical installation and service capabilities</li><li>Access to decision-makers at fleet operators, plant managers, or vessel owners</li></ul></div> },
  { id:'P4', section:'partner', number:'P4', question:'Can a partner white-label your technology?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><p>Yes, white-labelling arrangements are available for qualified partners — particularly for the GreenVision platform (co-branded or privately labelled) and hardware for channel partners managing significant volume. Terms negotiated individually including IP protections, exclusivity clauses, and training requirements.</p></div> },
  { id:'P5', section:'partner', number:'P5', question:'How does the partnership onboarding process work?',
    content:<div className="text-[14px] text-[#4a5550] leading-[1.75]"><Steps steps={[{label:'Discovery',sub:'Initial call to understand partner capabilities and market fit'},{label:'Joint Design',sub:'Define engagement model, territories, and revenue structure'},{label:'Pilot',sub:'Joint deployment on 1–2 client accounts'},{label:'Formalise',sub:'Sign partnership agreement'},{label:'Scale',sub:"Expand across partner's client base"}]}/></div> },
  { id:'P6', section:'partner', number:'P6', question:'What training and support does SGT provide to partners?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><ul className="list-disc pl-5 space-y-1"><li>Technical product training and installation certification</li><li>Sales enablement: pitch decks, technical papers, ROI calculators, case studies</li><li>GreenVision platform training for monitoring and ESG reporting</li><li>Co-marketing support: joint events, content, and market development</li><li>Dedicated partner account manager at SGT</li></ul></div> },
  { id:'P7', section:'partner', number:'P7', question:'We are a sustainability consultancy — how do we position SGT to our clients?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><HBox><strong className="text-[#1B6B3D]">Recommended framing:</strong> "Your clients need to decarbonise now — not when EV infrastructure arrives or green hydrogen becomes affordable. SGT makes existing assets cleaner, today, with a financial return."</HBox><ul className="list-disc pl-5 space-y-1"><li>Clients facing CBAM compliance pressure on India/Asia-to-Europe supply chains</li><li>Listed companies under BRSR reporting obligations</li><li>Shipping companies facing IMO CII rating deterioration</li><li>Industrial clients with CPCB compliance deadlines</li></ul></div> },
  { id:'P8', section:'partner', number:'P8', question:'Are territorial exclusivity arrangements available?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><p>Yes, for channel and distribution partners meeting volume and capability thresholds, SGT can offer geographic or sector exclusivity with minimum annual volume commitments.</p><p>Priority geographies: Southeast Asia (ex-Malaysia), Middle East, East Africa, and select European markets.</p></div> },
  { id:'P9', section:'partner', number:'P9', question:'How do I get started? Who do I contact?',
    content:<div style={{fontSize:14,color:"#4a5550",lineHeight:1.75,display:"flex",flexDirection:"column",gap:12}}><HBox><strong className="text-[#1B6B3D]">Write to us:</strong> contact@sgthydroedge.com or alok@sgthydroedge.com<br/><strong className="text-[#1B6B3D]">Subject line:</strong> "Partnership Inquiry — [Your Organisation / Region]"</HBox><div style={{display:"flex",flexWrap:"wrap",gap:6,marginTop:12}}><Tag label="Partnership deck available" variant="green"/><Tag label="Technical documentation available" variant="green"/><Tag label="Calendar booking available"/></div></div> },
];

const SECTIONS = [
  { id:'tech',       label:'Technology', icon:'⚙',  count:12 },
  { id:'commercial', label:'Commercial', icon:'₹',  count:10 },
  { id:'solutions',  label:'Solutions',  icon:'🏭', count:10 },
  { id:'investor',   label:'Investors',  icon:'📈', count:9  },
  { id:'partner',    label:'Partners',   icon:'🤝', count:9  },
];

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  const filtered = DATA.filter(item => {
    const matchTab    = activeTab === 'all' || item.section === activeTab;
    const matchSearch = !searchQuery.trim() || item.question.toLowerCase().includes(searchQuery.toLowerCase());
    return matchTab && matchSearch;
  });

  const grouped = SECTIONS.reduce((acc, s) => { acc[s.id] = filtered.filter(i => i.section === s.id); return acc; }, {} as Record<string, FAQItem[]>);

  const visible = activeTab === 'all'
    ? SECTIONS.filter(s => grouped[s.id].length > 0)
    : SECTIONS.filter(s => s.id === activeTab && grouped[s.id].length > 0);

  const total = filtered.length;
  const empty = total === 0 && searchQuery.trim() !== '';

  const handleTab = (id: string) => { setActiveTab(id); setSearchQuery(''); };
  const clear = () => { setSearchQuery(''); searchRef.current?.focus(); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');
        .faq-root { font-family:'DM Sans',sans-serif; background:#f7faf8; color:#1a1f1c; font-size:15px; line-height:1.65; overflow-x:hidden; }
        .faq-root * { box-sizing:border-box; margin:0; padding:0; }
        .faq-root ul,.faq-root ol { padding-left:1.25rem; }
        .faq-root li { margin-bottom:0.25rem; }
        .faq-tab:hover { color:#1B6B3D !important; }
        .sidebar-a { display:block; padding:7px 12px; font-size:13px; color:#4a5550; text-decoration:none; border-radius:6px; border-left:2px solid transparent; transition:all 0.15s; }
        .sidebar-a:hover { color:#1B6B3D; background:#e8f5ee; border-left-color:#1B6B3D; }
        .faq-search::placeholder { color:rgba(255,255,255,0.4); }
        .faq-search:focus { background:rgba(255,255,255,0.18) !important; outline:none; }
        .acc-btn:hover span.acc-q-text { color:#1B6B3D; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .fade-up { animation:fadeUp 0.4s ease both; }
        @media(max-width:900px){
          .faq-layout { grid-template-columns:1fr !important; padding:40px 24px 80px !important; }
          .faq-sidebar { position:static !important; }
          .faq-hero,.faq-tabs,.faq-footer { padding-left:24px !important; padding-right:24px !important; }
        }
        @media(max-width:600px){
          .faq-hero { padding-top:56px !important; padding-bottom:48px !important; }
          .faq-tab { padding:16px 14px 12px !important; font-size:12px !important; }
        }
      `}</style>

      <div className="faq-root pt-8">

        {/* HERO */}
        <section className="faq-hero" style={{background:'#1B6B3D',padding:'80px 48px 64px',position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',top:-80,right:-80,width:400,height:400,borderRadius:'50%',background:'rgba(255,215,0,0.07)',pointerEvents:'none'}}/>
          <div style={{position:'absolute',bottom:-60,left:'20%',width:260,height:260,borderRadius:'50%',background:'rgba(255,255,255,0.04)',pointerEvents:'none'}}/>
          <div style={{position:'relative'}}>
            <div style={{fontFamily:"'Space Mono',monospace",fontSize:10,letterSpacing:'0.18em',textTransform:'uppercase',color:'#FFD700',marginBottom:20,display:'flex',alignItems:'center',gap:10}}>
              <span style={{display:'block',width:32,height:1,background:'#FFD700'}}/>Help Centre
            </div>
            <h1 style={{fontFamily:"'DM Serif Display',serif",fontSize:'clamp(36px,5vw,58px)',color:'#ffffff',lineHeight:1.1,maxWidth:680,marginBottom:20}}>
              Everything you want to know about{' '}<em style={{color:'#FFD700',fontStyle:'italic'}}>Industrial Decarbonisation</em>
            </h1>
            <p style={{color:'rgba(255,255,255,0.65)',maxWidth:560,fontSize:15,fontWeight:300}}>
              Whether you're evaluating our technology, exploring a partnership, or making an investment decision — your questions answered, clearly.
            </p>
            <div style={{maxWidth:560,marginTop:36,position:'relative'}}>
              <svg style={{position:'absolute',left:16,top:'50%',transform:'translateY(-50%)',color:'rgba(255,255,255,0.45)',pointerEvents:'none'}} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              <input ref={searchRef} className="faq-search" type="text" value={searchQuery} onChange={e=>{setSearchQuery(e.target.value);setActiveTab('all');}} placeholder="Search any question, topic, or keyword…"
                style={{width:'100%',padding:'14px 20px 14px 48px',borderRadius:8,border:'none',background:'rgba(255,255,255,0.12)',color:'#ffffff',fontFamily:"'DM Sans',sans-serif",fontSize:14,backdropFilter:'blur(8px)',transition:'background 0.2s'}}/>
              {searchQuery&&<button onClick={clear} style={{position:'absolute',right:14,top:'50%',transform:'translateY(-50%)',background:'rgba(255,255,255,0.2)',border:'none',color:'white',borderRadius:'50%',width:20,height:20,fontSize:11,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>✕</button>}
            </div>
          </div>
        </section>

        {/* TABS */}
        <div className="faq-tabs" style={{background:'#ffffff',borderBottom:'1px solid #d8e4dc',padding:'0 48px',display:'flex',gap:0,overflowX:'auto',scrollbarWidth:'none',position:'sticky',top:0,zIndex:90}}>
          {[{id:'all',label:'All Questions',icon:'◈',count:DATA.length},...SECTIONS].map(tab=>(
            <button key={tab.id} className="faq-tab" onClick={()=>handleTab(tab.id)} style={{display:'flex',alignItems:'center',gap:8,padding:'18px 24px 14px',border:'none',background:'none',cursor:'pointer',fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:activeTab===tab.id?600:500,color:activeTab===tab.id?'#1B6B3D':'#8a9490',borderBottom:`3px solid ${activeTab===tab.id?'#FFD700':'transparent'}`,whiteSpace:'nowrap',transition:'color 0.2s,border-color 0.2s'}}>
              <span style={{fontSize:16}}>{tab.icon}</span>{tab.label}
              <span style={{background:activeTab===tab.id?'#FFD700':'#e8f5ee',color:activeTab===tab.id?'#1a1f1c':'#1B6B3D',fontSize:10,fontFamily:"'Space Mono',monospace",padding:'1px 6px',borderRadius:20,fontWeight:700}}>{tab.count}</span>
            </button>
          ))}
        </div>

        {/* LAYOUT */}
        <div className="faq-layout" style={{maxWidth:1100,margin:'0 auto',padding:'56px 48px 100px',display:'grid',gridTemplateColumns:'240px 1fr',gap:56,alignItems:'start'}}>

          {/* SIDEBAR */}
          <aside className="faq-sidebar" style={{position:'sticky',top:64}}>
            <div style={{marginBottom:36}}>
              <p style={{fontFamily:"'Space Mono',monospace",fontSize:9,letterSpacing:'0.15em',textTransform:'uppercase',color:'#8a9490',marginBottom:10}}>Jump to section</p>
              <ul style={{listStyle:'none'}}>
                {SECTIONS.map(s=>(
                  <li key={s.id}><a href={`#sec-${s.id}`} className="sidebar-a">{s.icon} {s.label}</a></li>
                ))}
              </ul>
            </div>
            <div style={{marginBottom:36}}>
              <p style={{fontFamily:"'Space Mono',monospace",fontSize:9,letterSpacing:'0.15em',textTransform:'uppercase',color:'#8a9490',marginBottom:10}}>Quick links</p>
              <ul style={{listStyle:'none'}}>
                <li><a href="mailto:contact@sgthydroedge.com" className="sidebar-a">✉ contact@sgthydroedge.com</a></li>
                <li><a href="https://sgthydroedge.com" className="sidebar-a">↗ sgthydroedge.com</a></li>
              </ul>
            </div>
            <div style={{background:'#1B6B3D',borderRadius:12,padding:20}}>
              <p style={{color:'rgba(255,255,255,0.8)',fontSize:12.5,marginBottom:14,lineHeight:1.5}}>Still have questions? Our team is happy to walk you through any aspect of our technology or commercial model.</p>
              <a href="mailto:contact@sgthydroedge.com" style={{display:'block',background:'#FFD700',color:'#1a1f1c',textAlign:'center',padding:10,borderRadius:6,fontSize:12,fontWeight:600,textDecoration:'none'}}>Get in touch →</a>
            </div>
          </aside>

          {/* CONTENT */}
          <div style={{minHeight:600}}>
            {searchQuery&&total>0&&<p style={{fontFamily:"'Space Mono',monospace",fontSize:11,color:'#8a9490',marginBottom:24,letterSpacing:'0.05em'}}>{total} result{total!==1?'s':''} for &ldquo;{searchQuery}&rdquo;</p>}
            {empty?(
              <div style={{textAlign:'center',padding:'80px 20px'}}>
                <div style={{fontSize:48,marginBottom:16}}>🔍</div>
                <h3 style={{fontFamily:"'DM Serif Display',serif",fontSize:22,color:'#1a1f1c',marginBottom:8}}>No results found</h3>
                <p style={{color:'#8a9490',fontSize:14}}>Try a different keyword, or <button onClick={clear} style={{background:'none',border:'none',color:'#1B6B3D',cursor:'pointer',fontSize:14,fontWeight:600,fontFamily:'inherit'}}>browse all questions</button></p>
              </div>
            ):(
              visible.map(s=><Section key={s.id} id={s.id} items={grouped[s.id]} q={searchQuery}/>)
            )}
          </div>
        </div>

        {/* FOOTER */}
        <footer className="faq-footer" style={{background:'#1a1f1c',padding:'40px 48px',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:16}}>
          <div>
            <div style={{fontFamily:"'DM Serif Display',serif",color:'white',fontSize:16}}>SGT <span style={{color:'#FFD700'}}>HydroEdge</span></div>
            <p style={{color:'rgba(255,255,255,0.4)',fontSize:12,marginTop:6}}>Industrial Decarbonisation Infrastructure</p>
          </div>
          <div style={{fontSize:13,color:'rgba(255,255,255,0.6)'}}>
            Questions? <a href="mailto:contact@sgthydroedge.com" style={{color:'#FFD700',textDecoration:'none'}}>contact@sgthydroedge.com</a> &nbsp;|&nbsp; <a href="https://sgthydroedge.com" style={{color:'rgba(255,255,255,0.6)',textDecoration:'none'}}>sgthydroedge.com</a>
          </div>
        </footer>

      </div>
    </>
  );
}