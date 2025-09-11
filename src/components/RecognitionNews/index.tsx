// 'use client'
// import Image from 'next/image'
// import Link from 'next/link'
// import SectionTitle from '../Common/SectionTitle'

// type Partner = { id: number; src: string; alt: string }
// type NewsItem = {
//   id: number
//   slug: string
//   title: string
//   excerpt: string
//   date: string
//   image: string
// }

// const partners: Partner[] = [
//   { id: 1, src: '/images/partners/partner-a.png', alt: 'Partner A' },
//   { id: 2, src: '/images/partners/partner-b.png', alt: 'Partner B' },
//   { id: 3, src: '/images/partners/award-c.png', alt: 'Award C' },
//   { id: 4, src: '/images/partners/press-d.png', alt: 'Press D' },
// ]

// // sample news data — replace with real CMS-driven content later
// const newsData: NewsItem[] = [
//   {
//     id: 1,
//     slug: 'pilot-deployments-fleet',
//     title: 'Pilot deployments show measurable fuel savings',
//     excerpt:
//       'Live trials across logistics fleets and DGs report consistent fuel reduction and lower PM — validated with GreenVision telematics.',
//     date: '2024-10-12',
//     image: '/images/news/news-1.jpg',
//   },
//   {
//     id: 2,
//     slug: 'patent-filings-india-australia',
//     title: 'Patent filings strengthen IP across regions',
//     excerpt:
//       'Saarthi GreenTech secures IP protection in India and Australia for core hydrogen retrofit innovations.',
//     date: '2024-08-28',
//     image: '/images/news/news-2.jpg',
//   },
//   {
//     id: 3,
//     slug: 'certification-cpcb-imo',
//     title: 'Certification progress: CPCB & IMO Class',
//     excerpt:
//       'Certification activities on track — independent testing and documentation advancing for national and maritime authorities.',
//     date: '2024-07-04',
//     image: '/images/news/news-3.jpg',
//   },
// ]

// export default function RecognitionNews() {
//   return (
//     <section
//       id="recognition"
//       className="relative z-10 bg-gray-50 py-16 dark:bg-slate-900 md:py-20 lg:py-28 overflow-hidden"
//     >
//       <div className="container">
//         <SectionTitle
//           title="Recognition & News"
//           paragraph="Trusted across industries, backed by patents, certifications, and media coverage."
//           center
//         />

//         {/* Partner / award logos */}
//         <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
//           {partners.map((p) => (
//             <div key={p.id} className="relative h-12 w-28 grayscale transition hover:grayscale-0">
//               <Image src={p.src} alt={p.alt} fill className="object-contain" />
//             </div>
//           ))}
//         </div>

//         {/* News cards */}
//         <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
//           {newsData.map((item) => (
//             <Link
//               key={item.id}
//               href={`/news/${item.slug}`}
//               className="group block rounded-2xl bg-white p-0 shadow-sm transition hover:shadow-md dark:bg-slate-800"
//             >
//               <article className="flex flex-col h-full">
//                 <div className="relative h-44 w-full overflow-hidden rounded-t-2xl">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-500"
//                     sizes="(max-width: 640px) 100vw, 33vw"
//                   />
//                 </div>

//                 <div className="p-6 flex flex-col gap-4 flex-1">
//                   <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
//                     <time dateTime={item.date}>{new Date(item.date).toLocaleDateString()}</time>
//                     <span className="text-xs font-medium text-[var(--brand,#33A04A)]">News</span>
//                   </div>

//                   <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-[var(--brand,#33A04A)] transition">
//                     {item.title}
//                   </h3>

//                   <p className="text-sm text-slate-600 dark:text-slate-300 flex-grow">{item.excerpt}</p>

//                   <div className="mt-4">
//                     <span className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-2 text-[var(--brand,#33A04A)]">
//                       Read article →
//                     </span>
//                   </div>
//                 </div>
//               </article>
//             </Link>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="mt-10 text-center">
//           <Link
//             href="/news"
//             className="inline-flex items-center rounded-full bg-[var(--brand,#33A04A)] px-6 py-3 font-semibold text-white shadow hover:brightness-95"
//           >
//             See all news
//           </Link>
//         </div>
//       </div>

//       {/* subtle decorative gradient */}
//       <div className="absolute left-0 top-0 -z-10 h-40 w-full bg-gradient-to-r from-[var(--brand,#33A04A)]/8 to-transparent" />
//     </section>
//   )
// }
// src/components/RecognitionNews/index.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '../Common/SectionTitle'

type Partner = { id: number; src: string; alt: string }
type NewsItem = {
  id: number
  slug: string
  title: string
  excerpt: string
  date: string
  image: string
}

const partners: Partner[] = [
  { id: 1, src: '/images/partners/partner-a.png', alt: 'Partner A' },
  { id: 2, src: '/images/partners/partner-b.png', alt: 'Partner B' },
  { id: 3, src: '/images/partners/award-c.png', alt: 'Award C' },
  { id: 4, src: '/images/partners/press-d.png', alt: 'Press D' },
]

// sample news data — replace with real CMS-driven content later
const newsData: NewsItem[] = [
  {
    id: 1,
    slug: 'pilot-deployments-fleet',
    title: 'Pilot deployments show measurable fuel savings',
    excerpt:
      'Live trials across logistics fleets and DGs report consistent fuel reduction and lower PM — validated with GreenVision telematics.',
    date: '2024-10-12',
    image: '/images/news/news-1.jpg',
  },
  {
    id: 2,
    slug: 'patent-filings-india-australia',
    title: 'Patent filings strengthen IP across regions',
    excerpt:
      'Saarthi GreenTech secures IP protection in India and Australia for core hydrogen retrofit innovations.',
    date: '2024-08-28',
    image: '/images/news/news-2.jpg',
  },
  {
    id: 3,
    slug: 'certification-cpcb-imo',
    title: 'Certification progress: CPCB & IMO Class',
    excerpt:
      'Certification activities on track — independent testing and documentation advancing for national and maritime authorities.',
    date: '2024-07-04',
    image: '/images/news/news-3.jpg',
  },
]

// Credentials content (from your pasted text)
const credentials = {
  intro:
    'At Saarthi GreenTech, we pride ourselves on quality, innovation, and compliance. Our achievements reflect our commitment to building practical and auditable decarbonisation solutions.',
  items: [
    {
      id: 'iso',
      title: 'ISO 9001 — Quality Management',
      body:
        'ISO 9001 certification underscores our commitment to consistent quality across R&D, manufacturing and operations — ensuring reliable, high-standard products.',
      // optional logo: '/images/credentials/iso9001.png'
    },
    {
      id: 'patent',
      title: 'Patents & IP',
      body:
        'Patent granted in Australia for our GreenDrive Technology. Patent pending in India — confirming our position as pioneers in hybrid hydrogen retrofit innovation.',
      // optional logo: '/images/credentials/patent.png'
    },
    {
      id: 'gist',
      title: 'GIST — Electronics Certifications',
      body:
        'Electronics powering GIST (GreenDrive IoT Smart Technology) carry compliance credentials including IEC, FCC, UL, EMC, CE and ROHS — ensuring global safety and interoperability standards.',
      // optional logos array or folder
    },
  ],
}

export default function RecognitionNews() {
  return (
    <section
      id="recognition"
      className="relative z-10 bg-gray-50 py-16 dark:bg-slate-900 md:py-20 lg:py-28 overflow-hidden"
    >
      <div className="container">
        <SectionTitle
          title="Recognition & News"
          paragraph="Trusted across industries, backed by patents, certifications, and media coverage."
          center
        />

        {/* Partner / award logos */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
          {partners.map((p) => (
            <div key={p.id} className="relative h-12 w-28 grayscale transition hover:grayscale-0">
              <Image src={p.src} alt={p.alt} fill className="object-contain" />
            </div>
          ))}
        </div>

        {/* News cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {newsData.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="group block rounded-2xl bg-white p-0 shadow-sm transition hover:shadow-md dark:bg-slate-800"
            >
              <article className="flex flex-col h-full">
                <div className="relative h-44 w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                    <time dateTime={item.date}>{new Date(item.date).toLocaleDateString()}</time>
                    <span className="text-xs font-medium text-[var(--brand,#33A04A)]">News</span>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-[var(--brand,#33A04A)] transition">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 flex-grow">{item.excerpt}</p>

                  <div className="mt-4">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-2 text-[var(--brand,#33A04A)]">
                      Read article →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/news"
            className="inline-flex items-center rounded-full bg-[var(--brand,#33A04A)] px-6 py-3 font-semibold text-white shadow hover:brightness-95"
          >
            See all news
          </Link>
        </div>

        {/* Credentials / Achievements */}
        <div className="mt-14 max-w-6xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-extrabold text-slate-900">Our Credentials</h3>
          <p className="mt-2 text-slate-600">{credentials.intro}</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {credentials.items.map((c) => (
              <div key={c.id} className="flex gap-4 items-start">
                {/* optional: logo slot */}
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-[var(--accent,#98C948)]/10 flex items-center justify-center text-[var(--brand,#33A04A)]">
                  {/* simple icon — can be replaced with Image */}
                  <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current" aria-hidden>
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L4.2 7 12 3.5 19.8 7 12 9.5zM2 17l10 5 10-5V9.5L12 14 2 9.5V17z" />
                  </svg>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">{c.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{c.body}</p>
                  {/* optional download / logos */}
                  {c.id === 'iso' && (
                    <div className="mt-3 flex gap-2 items-center">
                      {/* add certificate image in /public/images/credentials/iso9001.png and uncomment below */}
                      {/* <Image src="/images/credentials/iso9001.png" alt="ISO 9001" width={120} height={36} /> */}
                      <a href="/downloads/iso9001.pdf" className="text-sm text-[var(--brand,#33A04A)] underline">Download certificate</a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm text-slate-600">
            <p>
              We continue to work on independent testing and certifications for both electronics and marine/industrial deployments — documentation and fact sheets are available on request.
            </p>
            <div className="mt-4">
              <Link href="/contact" className="text-[var(--brand,#33A04A)] underline">
                Contact us for certificates & technical data
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* subtle decorative gradient */}
      <div className="absolute left-0 top-0 -z-10 h-40 w-full bg-gradient-to-r from-[var(--brand,#33A04A)]/8 to-transparent" />
    </section>
  )
}
