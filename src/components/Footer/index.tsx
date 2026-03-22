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
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/sgthydroedge/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@SGTHydroedge",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/SaarthiGreen",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/people/Saarthi-GreenTech/61557879393946/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
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
            <div className="flex items-center gap-3">
            {socialLinks.map(social => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 text-sm hover:text-white transition-colors duration-200 w-fit"
                style={{ '--tw-text-hover': brandColor } as React.CSSProperties}
              >
                {social.icon}
              </a>
            ))}
            </div>
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