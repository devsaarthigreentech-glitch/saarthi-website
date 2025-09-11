// import Image from "next/image";
// import SectionTitle from "../Common/SectionTitle";

// const checkIcon = (
//   <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
//     <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
//   </svg>
// );

// const AboutSectionOne = () => {
//   const List = ({ text }) => (
//     <p className="text-body-color mb-5 flex items-center text-lg font-medium">
//       <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
//         {checkIcon}
//       </span>
//       {text}
//     </p>
//   );

//   return (
//     <section id="about" className="pt-16 md:pt-20 lg:pt-28">
//       <div className="container">
//         <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
//           <div className="-mx-4 flex flex-wrap items-center">
//             <div className="w-full px-4 lg:w-1/2">
//               <SectionTitle
//                 title="Crafted for Startup, SaaS and Business Sites."
//                 paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
//                 mb="44px"
//               />

//               <div
//                 className="mb-12 max-w-[570px] lg:mb-0"
//                 data-wow-delay=".15s"
//               >
//                 <div className="mx-[-12px] flex flex-wrap">
//                   <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
//                     <List text="Premium quality" />
//                     <List text="Tailwind CSS" />
//                     <List text="Use for lifetime" />
//                   </div>

//                   <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
//                     <List text="Next.js" />
//                     <List text="Rich documentation" />
//                     <List text="Developer friendly" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="w-full px-4 lg:w-1/2">
//               <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0">
//                 <Image
//                   src="/images/about/about-image.svg"
//                   alt="about-image"
//                   fill
//                   className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
//                 />
//                 <Image
//                   src="/images/about/about-image-dark.svg"
//                   alt="about-image"
//                   fill
//                   className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSectionOne;
// src/components/About/AboutSectionOne.tsx
'use client'
import Image from "next/image"
import SectionTitle from "../Common/SectionTitle"
import React from "react"

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current" aria-hidden>
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
)

type ListProps = { text: string }
const List: React.FC<ListProps> = ({ text }) => (
  <p className="text-body-color mb-5 flex items-center text-lg font-medium">
    <span className="bg-[var(--brand,#33A04A)]/10 text-[var(--brand,#33A04A)] mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
      {checkIcon}
    </span>
    {text}
  </p>
)

const AboutSectionOne: React.FC = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Left: copy */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="We make decarbonisation practical, profitable, and provable."
                paragraph="Practical → Easy-to-install hydrogen retrofits. Profitable → Fuel savings + ROI. Provable → IoT & AI GreenVision for auditable reporting."
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Easy-to-install hydrogen retrofits — no engine redesigns." />
                    <List text="IoT-connected GreenVision for verifiable emissions data." />
                    <List text="Outcome-driven commercial models (Outcome-as-a-Service)." />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Proven fuel savings in trials (vehicles & DGs)." />
                    <List text="Compact retrofits that beat bulky post-treatment systems." />
                    <List text="R&D & OEM partnerships via GreenLabs." />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: image */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about.png"
                  alt="GreenVision dashboard connecting trucks, ships, and buildings"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden lg:mr-0 object-contain"
                />
                <Image
                  src="/images/about/about.png"
                  alt="GreenVision dashboard dark"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block lg:mr-0 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSectionOne
