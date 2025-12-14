export const metadata = {
  title: "Privacy Policy | Saarthi GreenTech",
  description:
    "Privacy policy outlining how Saarthi GreenTech collects, uses, and protects data across its website, platforms, and analytics tools.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold mb-6">Privacy Policy</h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-10">
          Last updated: <strong>{new Date().toLocaleDateString()}</strong>
        </p>

        {/* INTRO */}
        <p className="mb-6 leading-relaxed">
          Saarthi GreenTech (“Saarthi”, “we”, “our”, or “us”) respects your
          privacy and is committed to protecting the information you share with
          us. This Privacy Policy explains how we collect, use, and safeguard
          information when you visit our website or interact with our platforms
          and services.
        </p>

        {/* INFORMATION WE COLLECT */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Information We Collect</h2>
        <p className="mb-4 leading-relaxed">
          We may collect limited information to operate our website, understand
          engagement, and improve our offerings. This may include:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Browser type, device type, and operating system</li>
          <li>Pages visited and time spent on the site</li>
          <li>Referring URLs and general location (city/country level)</li>
          <li>Information voluntarily submitted via contact forms</li>
        </ul>

        {/* ANALYTICS */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Analytics & Tracking Technologies
        </h2>

        <p className="mb-4 leading-relaxed">
          We use analytics and business intelligence tools to understand website
          usage and improve user experience.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Google Analytics</h3>
        <p className="mb-4 leading-relaxed">
          We use Google Analytics, a web analytics service provided by Google LLC.
          Google Analytics helps us understand how visitors interact with our
          website by collecting aggregated usage data such as page views and
          navigation patterns. This data is processed in accordance with
          Google’s privacy policy:
          <br />
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline font-medium"
          >
            https://policies.google.com/privacy
          </a>
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">RB2B (Business Analytics)</h3>
        <p className="mb-4 leading-relaxed">
          We use RB2B, a business analytics and identification platform, to
          understand engagement from organizations visiting our website. RB2B
          may process IP addresses and business-level metadata to provide
          aggregated insights into company-level website activity. Saarthi does
          not intentionally collect personally identifiable information through
          RB2B.
        </p>

        {/* USE OF INFORMATION */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          How We Use Information
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>To operate and maintain our website</li>
          <li>To improve content, performance, and user experience</li>
          <li>To respond to inquiries and contact requests</li>
          <li>To analyze engagement trends at an aggregated level</li>
        </ul>

        {/* DATA SHARING */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Data Sharing & Disclosure
        </h2>
        <p className="mb-6 leading-relaxed">
          We do not sell or rent personal information. Data may be processed by
          trusted service providers strictly for analytics, hosting, or
          operational purposes, and only to the extent necessary to provide
          those services.
        </p>

        {/* SECURITY */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Data Security</h2>
        <p className="mb-6 leading-relaxed">
          We implement appropriate technical and organizational measures to
          protect information against unauthorized access, alteration, or
          misuse. However, no internet transmission is completely secure, and
          we cannot guarantee absolute security.
        </p>

        {/* YOUR RIGHTS */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Your Rights</h2>
        <p className="mb-6 leading-relaxed">
          Depending on your jurisdiction, you may have the right to request
          access, correction, or deletion of your personal information. To make
          such a request, please contact us using the details below.
        </p>

        {/* CONTACT */}
        <h2 className="text-2xl font-bold mt-10 mb-4">Contact Us</h2>
        <p className="leading-relaxed">
          If you have any questions about this Privacy Policy or our data
          practices, you may contact us at:
        </p>
        <p className="mt-3 font-medium">
          📧 Email:{" "}
          <a
            href="mailto:contact@saarthigreen.com"
            className="text-green-600 hover:underline"
          >
            contact@saarthigreen.com
          </a>
        </p>
      </section>
    </main>
  );
}
