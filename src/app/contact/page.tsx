// import Breadcrumb from "@/components/Common/Breadcrumb";
// import Contact from "@/components/Contact";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Contact Page | Free Next.js Template for Startup and SaaS",
//   description: "This is Contact Page for Startup Nextjs Template",
//   // other metadata
// };

// const ContactPage = () => {
//   return (
//     <>
//       <Breadcrumb
//         pageName="Contact Page"
//         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
//       />

//       <Contact />
//     </>
//   );
// };

// export default ContactPage;
// src/app/contact/page.tsx

// src/app/contact/page.tsx
import ContactForm from "@/components/Contact/ContactForm";

export const metadata = {
  title: "Contact Us — Saarthi GreenTech",
  description: "Get in touch with Saarthi GreenTech for solutions, demos and partnerships.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">Contact Us</h1>
          <p className="mt-3 text-slate-200 max-w-2xl mx-auto">
            We’d love to hear from you. Reach out for demos, partnerships, or general enquiries.
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
                Saarthi GreenTech Pvt. Ltd.
                <br />
                A3-202, 1, Lunkad Sky Vie,
                Viman Nagar,

                <br />
                Pune, Maharashtra,  411014
              </p>
              <p>
                <strong>Factory Office</strong>
                <br />
                Saarthi GreenTech Pvt. Ltd.
                <br />
                Plot 14, Gat # 357/86, Waghjainagar,
                Kharabwadi, Chakan,

                <br />
                Pune, Maharashtra, 410501
              </p>
                <strong>Australia Office</strong>
                <br />
                
Saarthi GreenTech Pty Limited
                <br />
               <p>41 Pokolbin Avenue, The Ponds, NSW 2769
              </p>
              <p>
                <strong>Email:</strong> contact@saarthigreen.com
              </p>
              {/* <p>
                <strong>Phone:</strong> +91 90492 70404
              </p> */}
              <p>
                <strong>Working Hours:</strong> Friday - Wednesday, 9:30 AM - 6:30 PM IST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: Map placeholder */}
      {/* Optional: Map */}
      <section className="h-80 w-full">
        <iframe
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.381469114199!2d73.8201413751926!3d18.76631778243647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2cb080bada133%3A0x81eac66d3d22fdf4!2sSaarthi%20GreenTech%20Pvt%20Limited!5e0!3m2!1sen!2sin!4v1725700000000"
        ></iframe>
      </section>

    </main>
  );
}
