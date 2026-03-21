import Link from 'next/link';
import React from 'react';

// --- NAV LINK DATA STRUCTURE (Grouped) ---
// const linkGroups = [
//   // {
//   //   title: "Ecosystem",
//   //   links: [
//   //     { name: "Ecosystem Overview", href: "/ecosystem" },
//   //     { name: "GreenMentor", href: "/ecosystem/greenmentor" },
//   //     { name: "GreenLabs", href: "/ecosystem/greenlabs" },
//   //     { name: "GreenVision", href: "/ecosystem/greenvision" },
//   //     { name: "DaaS Solution", href: "/solutions/daas" },
//   //   ]
//   // },
//   {
//     title: "Company & Resources",
//     links: [
//       { name: "Home", href: "/" },
//       { name: "Solutions", href: "/solutions" },
//       { name: "Evidence Hub", href: "/evidence/certificates" },
//       { name: "Resources", href: "/resources" },
//       { name: "About Saarthi", href: "/about/leadership" },
//     ]
//   },
// ];

// --- MAIN FOOTER COMPONENT ---
const Footer = () => {
  // Define a consistent Saarthi Green color variable for hover/brand
  const brandColor = 'var(--brand, #33A04A)';

  // Array for Social Links (Text based)
  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/sgthydroedge/" },
    { name: "Youtube", href: "https://www.youtube.com/@SGTHydroedge" },
    { name: "X (Twitter)", href: "https://x.com/SaarthiGreen" },
    { name: "Facebook", href: "https://www.facebook.com/people/Saarthi-GreenTech/61557879393946/" },
  ];


  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
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

          <div className="flex flex-col space-y-2">
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            {socialLinks.map(social => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 text-sm hover:text-white transition-colors duration-200 w-fit"
                style={{ '--tw-text-hover': brandColor } as React.CSSProperties}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2026 SGT HydroEdge. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <a href="/privacy-policy" className="hover:text-sgt-green transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-sgt-green transition-colors">Terms of Service</a>
            <a href="/contact" className="hover:text-sgt-green transition-colors">Contact</a>
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