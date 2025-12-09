// // src/components/Footer/index.tsx
// import Link from 'next/link'

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-12">
//       <div className="container">
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
//           <div>
//             <h4 className="text-white text-lg font-semibold mb-3">Saarthi GreenTech</h4>
//             <p className="text-sm text-gray-400 max-w-sm">
//               Smart hydrogen retrofits and IoT intelligence that cut emissions, save fuel, and deliver verifiable decarbonisation.
//             </p>
//           </div>

//           <div>
//             <h5 className="mb-3 font-semibold text-gray-200">Solutions</h5>
//             <ul className="space-y-2 text-sm text-gray-400">
//               <li><Link href="/products/greendrive" className="hover:text-white">GreenDrive</Link></li>
//               <li><Link href="/products/greengen" className="hover:text-white">GreenGen</Link></li>
//               <li><Link href="/products/greenmarine" className="hover:text-white">GreenMarine</Link></li>
//               <li><Link href="/greenvision" className="hover:text-white">GreenVision</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h5 className="mb-3 font-semibold text-gray-200">Company</h5>
//             <ul className="space-y-2 text-sm text-gray-400">
//               <li><Link href="/solutions" className="hover:text-white">Business Model</Link></li>
//               <li><Link href="/greenlabs" className="hover:text-white">GreenLabs</Link></li>
//               {/* <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li> */}
//               {/* <li><Link href="/news" className="hover:text-white">News</Link></li> */}
//             </ul>
//           </div>

//           <div>
//             <h5 className="mb-3 font-semibold text-gray-200">Contact</h5>
//             <ul className="space-y-2 text-sm text-gray-400">
//               <li><a href="mailto:contact@saarthigreentech.com" className="hover:text-white">contact@saarthigreentech.com</a></li>
//               {/* <li><a href="tel:+911234567890" className="hover:text-white">+91 90492 70404</a></li> */}
//               {/* <li><Link href="/contact" className="hover:text-white">Contact form</Link></li> */}
//             </ul>
//           </div>
//         </div>

//         <div className="mt-8 border-t border-white/6 pt-6 text-sm text-gray-500 flex flex-col items-center justify-between gap-4 md:flex-row">
//           <div>Smart Hydrogen. Cleaner Future. &copy; {new Date().getFullYear()} Saarthi GreenTech</div>
//           <div className="space-x-4">
//             <Link href="/privacy" className="hover:text-white">Privacy</Link>
//             <Link href="/terms" className="hover:text-white">Terms</Link>
//             <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }
import React from 'react';

// --- NAV LINK DATA STRUCTURE (Grouped) ---
const linkGroups = [
  {
    title: "Ecosystem",
    links: [
      { name: "Ecosystem Overview", href: "/ecosystem" },
      { name: "GreenMentor", href: "/ecosystem/greenmentor" },
      { name: "GreenLabs", href: "/ecosystem/greenlabs" },
      { name: "GreenVision", href: "/ecosystem/greenvision" },
      { name: "DaaS Solution", href: "/solutions/daas" },
    ]
  },
  {
    title: "Company & Resources",
    links: [
      { name: "Home", href: "/" },
      { name: "Solutions", href: "/solutions" },
      { name: "Evidence Hub", href: "/evidence/certificates" },
      { name: "Resources", href: "/resources" },
      { name: "About Saarthi", href: "/about/leadership" },
    ]
  },
];

// --- MAIN FOOTER COMPONENT ---
const Footer = () => {
  // Define a consistent Saarthi Green color variable for hover/brand
  const brandColor = 'var(--brand, #33A04A)';
  
  // Array for Social Links (Text based)
  const socialLinks = [
      { name: "LinkedIn", href: "https://linkedin.com/company/saarthigreentech/" },
      { name: "X (Twitter)", href: "https://x.com/SaarthiGreen" },
      { name: "Facebook", href: "https://www.facebook.com/people/Saarthi-GreenTech/61557879393946/" },
  ];


  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-8 md:py-10">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Footer Grid: Now using grid-cols-4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 border-b border-slate-700/50 pb-6 mb-4">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-3">
            <h3 className="text-xl font-extrabold" style={{ color: brandColor }}>
              Saarthi Green
            </h3>
            <p className="text-sm text-slate-400">
              Engineering a Profitable Path to Net-Zero
            </p>
          </div>
          
          {/* Column 2 & 3: Contextual Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:col-span-2 gap-x-12 gap-y-6">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-3">
                  {group.title}
                </h4>
                <div className="flex flex-col space-y-2 text-sm">
                  {group.links.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors duration-200 w-fit"
                      style={{ '--tw-text-hover': brandColor } as React.CSSProperties}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Column 4: Contact & Socials (Text Links) */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Get in Touch
            </h4>
            
            <p className="text-base font-medium">
              <a 
                href="mailto:contact@saarthigreen.com"
                className="text-slate-200 hover:text-white transition-colors duration-200"
                style={{ '--tw-text-hover': brandColor } as React.CSSProperties}
              >
                contact@saarthigreen.com
              </a>
            </p>
            
            <p className="text-sm text-slate-400 mb-3">
              India | Australia
            </p>

            {/* Social Text Links Section */}
            <div className="flex flex-col space-y-2 pt-2">
                <h5 className="text-sm font-semibold text-slate-300">Follow Us</h5>
                {socialLinks.map(social => (
                    <a 
                        key={social.name}
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 text-sm hover:text-white transition-colors duration-200 w-fit"
                        style={{ '--tw-text-hover': brandColor } as React.CSSProperties}
                    >
                        {social.name}
                    </a>
                ))}
            </div>
          </div>

        </div>

        {/* Copyright and Legal */}
        <div className="text-center text-sm text-slate-500 pt-3">
          <p>&copy; {new Date().getFullYear()} Saarthi GreenTech Pvt Ltd. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;