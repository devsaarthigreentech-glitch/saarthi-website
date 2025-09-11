// src/components/Footer/index.tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h4 className="text-white text-lg font-semibold mb-3">Saarthi GreenTech</h4>
            <p className="text-sm text-gray-400 max-w-sm">
              Smart hydrogen retrofits and IoT intelligence that cut emissions, save fuel, and deliver verifiable decarbonisation.
            </p>
          </div>

          <div>
            <h5 className="mb-3 font-semibold text-gray-200">Solutions</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/products/greendrive" className="hover:text-white">GreenDrive</Link></li>
              <li><Link href="/products/greengen" className="hover:text-white">GreenGen</Link></li>
              <li><Link href="/products/greenmarine" className="hover:text-white">GreenMarine</Link></li>
              <li><Link href="/greenvision" className="hover:text-white">GreenVision</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-3 font-semibold text-gray-200">Company</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/solutions" className="hover:text-white">Business Model</Link></li>
              <li><Link href="/greenlabs" className="hover:text-white">GreenLabs</Link></li>
              {/* <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li> */}
              {/* <li><Link href="/news" className="hover:text-white">News</Link></li> */}
            </ul>
          </div>

          <div>
            <h5 className="mb-3 font-semibold text-gray-200">Contact</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="mailto:contact@saarthigreentech.com" className="hover:text-white">contact@saarthigreentech.com</a></li>
              {/* <li><a href="tel:+911234567890" className="hover:text-white">+91 90492 70404</a></li> */}
              {/* <li><Link href="/contact" className="hover:text-white">Contact form</Link></li> */}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/6 pt-6 text-sm text-gray-500 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>Smart Hydrogen. Cleaner Future. &copy; {new Date().getFullYear()} Saarthi GreenTech</div>
          <div className="space-x-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
