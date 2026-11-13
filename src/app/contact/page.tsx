import ContactForm from "@/components/Contact/ContactForm";

import type { Metadata } from "next";
import { COMPANY, ROUTES } from "@/data/siteContent";

export const metadata: Metadata = {
  title: `Contact Us | ${COMPANY.name}`,
  description:
    "Talk to SGT HydroEdge about decarbonisation infrastructure for engines, burners and furnaces — as a customer, distributor, dealer or referral partner.",
  alternates: { canonical: `${COMPANY.url}${ROUTES.contact}` },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="py-20 bg-slate-900 text-white mt-10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">Contact Us</h1>
          <p className="mt-3 text-slate-200 max-w-2xl mx-auto">
            We’d love to hear from you. Reach out as a customer or a partner, or with a general enquiry.
          </p>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid gap-12 lg:grid-cols-2">
          {/* Client-side form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <ContactForm />
          </div>

          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
            <div className="space-y-4 text-slate-700">
              <p>
                <strong>Head Office</strong>
                <br />
                SGT Hydroedge Pvt. Ltd.
                <br />
                A3-202, 1, Lunkad Sky Vie,
                Viman Nagar,

                <br />
                Pune, Maharashtra,  411014
              </p>
              {/* TODO(owner): confirm factory address stays public; confirm whether to add phone numbers */}
              <p>
                <strong>Factory Office</strong>
                <br />
                SGT Hydroedge Pvt. Ltd.
                <br />
                Plot 14, Gat # 357/86, Waghjainagar,
                Kharabwadi, Chakan,

                <br />
                Pune, Maharashtra, 410501
              </p>
              {/* TODO(owner): confirm registered legal entity name of the Australia office (still shown under the old company name) */}
              <strong>Australia Office</strong>
              <br />

              Saarthi GreenTech Pty Limited
              <br />
              <p>41 Pokolbin Avenue, The Ponds, NSW 2769
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-[#1B6B3D] hover:underline">
                  {COMPANY.email}
                </a>
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a href={COMPANY.url} className="text-[#1B6B3D] hover:underline">
                  {COMPANY.website}
                </a>
              </p>
              {/* TODO(owner): working days look like an error — confirm */}
              <p>
                <strong>Working Hours:</strong> Friday - Wednesday, 9:30 AM - 6:30 PM IST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TODO(owner): the Google Maps listing embedded here is still registered under the old company name — update the listing, then this embed URL */}
      <section className="h-80 w-full">
        <iframe
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Map showing the SGT HydroEdge factory office, Chakan, Pune"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.381469114199!2d73.8201413751926!3d18.76631778243647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2cb080bada133%3A0x81eac66d3d22fdf4!2sSaarthi%20GreenTech%20Pvt%20Limited!5e0!3m2!1sen!2sin!4v1725700000000"
        ></iframe>
      </section>

    </main>
  );
}
