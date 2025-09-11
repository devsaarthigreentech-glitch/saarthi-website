// // src/components/GreenVision/Results.tsx
// 'use client'

// import React from 'react'

// const items = [
//   {
//     id: 1,
//     title: 'Emission Tracking',
//     body: 'Real-time CO₂ data from every asset — trucks, DGs, ships, and facilities.',
//     icon: (
//       <svg width="28" height="28" viewBox="0 0 24 24" className="fill-current" aria-hidden>
//         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
//       </svg>
//     ),
//   },
//   {
//     id: 2,
//     title: 'Carbon Accounting',
//     body: 'Scope 1, 2 & 3 reporting by asset, site, or enterprise with audit trails.',
//     icon: (
//       <svg width="28" height="28" viewBox="0 0 24 24" className="fill-current" aria-hidden>
//         <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zM3 5v2h2V5H3zm4 8h12v-2H7v2zm0 4h12v-2H7v2zM7 5v2h12V5H7z" />
//       </svg>
//     ),
//   },
//   {
//     id: 3,
//     title: 'Operational Savings',
//     body: 'Detect inefficiencies, reduce idle time and cut fuel & energy waste.',
//     icon: (
//       <svg width="28" height="28" viewBox="0 0 24 24" className="fill-current" aria-hidden>
//         <path d="M12 3L4 9v6c0 5.523 3.582 10.74 9 12 5.418-1.26 9-6.477 9-12V9l-8-6zM11 10h2v6h-2z" />
//       </svg>
//     ),
//   },
//   {
//     id: 4,
//     title: 'Automation & Control',
//     body: 'AI-driven optimization of assets, automated actions and retrofit control.',
//     icon: (
//       <svg width="28" height="28" viewBox="0 0 24 24" className="fill-current" aria-hidden>
//         <path d="M12 4c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm1 11h-2v-6h2v6z" />
//       </svg>
//     ),
//   },
//   {
//     id: 5,
//     title: 'Compliance',
//     body: 'Automated ESG, IMO, EU MRV and CPCB-ready reports for regulators & investors.',
//     icon: (
//       <svg width="28" height="28" viewBox="0 0 24 24" className="fill-current" aria-hidden>
//         <path d="M9 17L4 12l1.41-1.41L9 14.17 18.59 4.59 20 6l-11 11z" />
//       </svg>
//     ),
//   },
//   {
//     id: 6,
//     title: 'Insights & Alerts',
//     body: 'Actionable alerts, trends, and recommendations to prioritize interventions.',
//     icon: (
//       <svg width="28" height="28" viewBox="0 0 24 24" className="fill-current" aria-hidden>
//         <path d="M12 2L2 7l10 5 10-5-10-5zm0 13.5L4 10.5v6l8 4 8-4v-6l-8 5z" />
//       </svg>
//     ),
//   },
// ]

// export default function Results() {
//   return (
//     <section id="greenvision-results" className="py-16 md:py-20 lg:py-24 bg-white">
//       <div className="container mx-auto px-6 lg:px-8">
//         <div className="max-w-3xl mx-auto text-center mb-10">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
//             Results That Matter
//           </h2>
//           <p className="mt-3 text-lg text-slate-600">
//             What GreenVision delivers — operational clarity, verified emissions data, and faster decisions.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//           {items.map((it) => (
//             <div
//               key={it.id}
//               className="flex gap-4 items-start rounded-xl border border-slate-100 bg-white p-5 shadow-sm"
//             >
//               <div
//                 className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md"
//                 style={{ background: 'var(--accent, #98C948)', color: '#07121a' }}
//                 aria-hidden
//               >
//                 {it.icon}
//               </div>

//               <div>
//                 <h3 className="text-md font-semibold text-slate-900">{it.title}</h3>
//                 <p className="mt-1 text-sm text-slate-600">{it.body}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'

import React from 'react'

const rows = [
  {
    function: 'Emission Tracking',
    deliverable: 'Real-time CO₂ data from every asset — trucks, DGs, ships, and facilities.',
  },
  {
    function: 'Carbon Accounting',
    deliverable: 'Scope 1, 2, 3 reporting by asset, site, or enterprise with audit trails.',
  },
  {
    function: 'Operational Savings',
    deliverable: 'Detect inefficiencies, reduce idle time, and cut fuel & energy waste.',
  },
  {
    function: 'Automation & Control',
    deliverable: 'AI-driven optimization of assets, with automated actions and retrofit control.',
  },
  {
    function: 'Compliance',
    deliverable: 'ESG, IMO, EU MRV, and CPCB-ready reports for regulators & investors.',
  },
]

export default function Results() {
  return (
    <section id="greenvision-results" className="py-12 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Results That Matter
          </h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
            A single platform that tracks emissions, proves carbon reductions, and delivers measurable ROI.
          </p>
        </div>

        {/* Responsive table/grid */}
        <div className="overflow-x-auto rounded-xl shadow ring-1 ring-slate-200 dark:ring-slate-700">
          <table className="w-full divide-y divide-slate-200 dark:divide-slate-700">
            <thead className="bg-slate-100 dark:bg-slate-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Function
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">
                  What GreenVision Delivers
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-900">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                    {row.function}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                    {row.deliverable}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
