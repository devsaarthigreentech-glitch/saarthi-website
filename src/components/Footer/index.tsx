import Link from 'next/link';
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
//     <footer className="bg-slate-900 dark:bg-black text-white py-8 md:py-10">
//       <div className="container mx-auto px-4 max-w-7xl">
        
//         {/* Footer Grid: Now using grid-cols-4 on desktop */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 border-b border-slate-700/50 pb-6 mb-4">
          
//           {/* Column 1: Brand & Tagline */}
//           <div className="space-y-3">
//             <h3 className="text-xl font-extrabold" style={{ color: brandColor }}>
//               Saarthi Green
//             </h3>
//             <p className="text-sm text-slate-400">
//               Engineering a Profitable Path to Net-Zero
//             </p>
//           </div>
          
//           {/* Column 2 & 3: Contextual Navigation Links */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:col-span-2 gap-x-12 gap-y-6">
//             {linkGroups.map((group) => (
//               <div key={group.title}>
//                 <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-3">
//                   {group.title}
//                 </h4>
//                 <div className="flex flex-col space-y-2 text-sm">
//                   {group.links.map((link) => (
//                     <a 
//                       key={link.name} 
//                       href={link.href}
//                       className="text-slate-400 hover:text-white transition-colors duration-200 w-fit"
//                       style={{ '--tw-text-hover': brandColor } as React.CSSProperties}
//                     >
//                       {link.name}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Column 4: Contact & Socials (Text Links) */}
//           <div className="space-y-4">
//             <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-3">
//               Get in Touch
//             </h4>
            
//             <p className="text-base font-medium">
//               <a 
//                 href="mailto:contact@saarthigreen.com"
//                 className="text-slate-200 hover:text-white transition-colors duration-200"
//                 style={{ '--tw-text-hover': brandColor } as React.CSSProperties}
//               >
//                 contact@saarthigreen.com
//               </a>
//             </p>
            
//             <p className="text-sm text-slate-400 mb-3">
//               India | Australia
//             </p>

//             {/* Social Text Links Section */}
//             <div className="flex flex-col space-y-2 pt-2">
//                 <h5 className="text-sm font-semibold text-slate-300">Follow Us</h5>
//                 {socialLinks.map(social => (
//                     <a 
//                         key={social.name}
//                         href={social.href} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="text-slate-400 text-sm hover:text-white transition-colors duration-200 w-fit"
//                         style={{ '--tw-text-hover': brandColor } as React.CSSProperties}
//                     >
//                         {social.name}
//                     </a>
//                 ))}
//             </div>
//           </div>

//         </div>

//         {/* Copyright and Legal */}
//         <div className="text-center text-sm text-slate-500 pt-3">
//           <p>&copy; {new Date().getFullYear()} Saarthi GreenTech Pvt Ltd. All rights reserved.</p>
//           <Link href="/privacy-policy" className="hover:underline">
//   Privacy Policy
// </Link>

//         </div>
        
//       </div>
//     </footer>
<footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-24 h-10">
                  <img 
                    src="/images/logo/company_logo2.png"
                    alt="SGT Logo" 
                    className="w-full h-full object-contain brightness-0 invert"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Patent-applied CHFA and CHCA technologies delivering proven emissions reduction at scale across industry, marine, and logistics.
              </p>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-white font-bold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/solutions/new-industrial" className="hover:text-sgt-green transition-colors">Industrial Solutions</a></li>
                <li><a href="/solutions/new-marine" className="hover:text-sgt-green transition-colors">Marine Solutions</a></li>
                <li><a href="/solutions/new-logistics" className="hover:text-sgt-green transition-colors">Logistics & Fleet</a></li>
                {/* <li><a href="#" className="hover:text-sgt-green transition-colors">DaaS Model</a></li> */}
              </ul>
            </div>

            {/* Technology */}
            <div>
              <h4 className="text-white font-bold mb-4">Technology</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/technology/chfa" className="hover:text-sgt-green transition-colors">CHFA Technology</a></li>
                <li><a href="/technology/chca" className="hover:text-sgt-green transition-colors">CHCA Technology</a></li>
                <li><a href="/technology/greenvision" className="hover:text-sgt-green transition-colors">GreenVision Platform</a></li>
                {/* <li><a href="#" className="hover:text-sgt-green transition-colors">Research & Validation</a></li> */}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about/journey" className="hover:text-sgt-green transition-colors">About Us</a></li>
                <li><a href="/about/leadership" className="hover:text-sgt-green transition-colors">Leadership</a></li>
                {/* <li><a href="#" className="hover:text-sgt-green transition-colors">Certifications</a></li> */}
                <li><a href="/about/partners" className="hover:text-sgt-green transition-colors">Partner With Us</a></li>
                <li><a href="/resources/media" className="hover:text-sgt-green transition-colors">Media</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2026 SGT HydroEdge. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="hover:text-sgt-green transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-sgt-green transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-sgt-green transition-colors">Contact</a>
            </div>
          </div>

          {/* <div className="mt-8 text-center">
            <a href="mailto:solutions@sgthydroedge.com" className="text-sgt-green font-semibold hover:text-sgt-yellow transition-colors">
              contact@sgthydroedge.com
            </a>
          </div> */}
        </div>
      </footer>
  );
};

export default Footer;