// import Image from "next/image";

// const AboutSectionTwo = () => {
//   return (
//     <section className="py-16 md:py-20 lg:py-28">
//       <div className="container">
//         <div className="-mx-4 flex flex-wrap items-center">
//           <div className="w-full px-4 lg:w-1/2">
//             <div
//               className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
//               data-wow-delay=".15s"
//             >
//               <Image
//                 src="/images/about/about-image-2.svg"
//                 alt="about image"
//                 fill
//                 className="drop-shadow-three dark:hidden dark:drop-shadow-none"
//               />
//               <Image
//                 src="/images/about/about-image-2-dark.svg"
//                 alt="about image"
//                 fill
//                 className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
//               />
//             </div>
//           </div>
//           <div className="w-full px-4 lg:w-1/2">
//             <div className="max-w-[470px]">
//               <div className="mb-9">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                   Bug free code
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                 </p>
//               </div>
//               <div className="mb-9">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                   Premier support
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt.
//                 </p>
//               </div>
//               <div className="mb-1">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                   Next.js
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                   Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
//                   consectetur adipiscing elit setim.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSectionTwo;
// src/components/About/AboutSectionTwo.tsx
'use client'
import Image from "next/image"
import React from "react"

const AboutSectionTwo: React.FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0" data-wow-delay=".15s">
              <Image
                src="/images/about/about-2.png"
                alt="GreenLabs research and prototyping"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none object-contain"
              />
              <Image
                src="/images/about/about-2.png"
                alt="GreenLabs research and prototyping dark"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none object-contain"
              />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  GreenLabs — R&D & OEM Partnerships
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our R&D hub for custom hardware, sensor electronics, hydrogen storage research and OEM integrations to keep solutions future-ready.
                </p>
              </div>

              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Outcome-as-a-Service
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We offer outcome-driven projects where Saarthi installs, operates, and maintains systems — customers pay based on verified outcomes and savings.
                </p>
              </div>

              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  IoT, AI & Auditable Reporting
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  GreenVision provides automated emissions monitoring, validation, and configurable reports for ESG compliance (Scope 1/2/3).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSectionTwo
