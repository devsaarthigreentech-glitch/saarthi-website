// // src/app/products/greendrive/page.tsx
// import Hero from "@/components/Products/GreenDrive/Hero";
// import Advantage from "@/components/Products/GreenDrive/Advantage";
// import ProductRange from "@/components/Products/GreenDrive/ProductRange";
// import Applications from "@/components/Products/GreenDrive/Applications";
// import Results from "@/components/Products/GreenDrive/Results";
// import FactSheets from "@/components/Products/GreenDrive/FactSheets";
// import Benefits from "@/components/Products/GreenDrive/Benefits";
// import CTA from "@/components/Products/GreenDrive/CTA";
// import { Metadata } from "next";

// const PRODUCT_SLUG = "greendrive";
// const PRODUCT_TITLE = "GreenDrive — Hydrogen retrofits for commercial diesel engines | Saarthi GreenTech";
// const PRODUCT_NAME = "GreenDrive";
// const PRODUCT_DESC =
//   "GreenDrive by Saarthi GreenTech: retrofit hydrogen systems for vans, buses and heavy trucks — reduce emissions and save fuel.";
// const PRODUCT_OG = `/images/${PRODUCT_SLUG}/og-image.jpg`;
// const PRODUCT_URL = `https://saarthigreentech.com/products/${PRODUCT_SLUG}`;

// export const metadata: Metadata = {
//   title: PRODUCT_TITLE,
//   description: PRODUCT_DESC,
//   openGraph: {
//     title: PRODUCT_NAME,
//     description: PRODUCT_DESC,
//     url: PRODUCT_URL,
//     siteName: "Saarthi GreenTech",
//     images: [
//       {
//         url: PRODUCT_OG,
//         width: 1200,
//         height: 630,
//         alt: `${PRODUCT_NAME} visual`,
//       },
//     ],
//     type: "product",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: PRODUCT_NAME,
//     description: PRODUCT_DESC,
//     images: [PRODUCT_OG],
//   },
//   metadataBase: new URL("https://saarthigreentech.com"),
//   alternates: { canonical: `/products/${PRODUCT_SLUG}` },
// };


// export default function GreenDrivePage() {
//   return (
//     <main>
//       <Hero />
//       <Advantage />
//       <ProductRange />
//       <Applications />
//       <Results />
//       {/* <FactSheets /> */}
//       <Benefits />
//       <CTA />
//     </main>
//   );
// }
// src/app/products/greendrive/page.tsx
import Hero from "@/components/Products/GreenDrive/Hero";
import Advantage from "@/components/Products/GreenDrive/Advantage";
import ProductRange from "@/components/Products/GreenDrive/ProductRange";
import Applications from "@/components/Products/GreenDrive/Applications";
import Results from "@/components/Products/GreenDrive/Results";
import FactSheets from "@/components/Products/GreenDrive/FactSheets";
import Benefits from "@/components/Products/GreenDrive/Benefits";
import CTA from "@/components/Products/GreenDrive/CTA";
import { Metadata } from "next";
import Script from "next/script";

const PRODUCT_SLUG = "greendrive";
const PRODUCT_TITLE = "GreenDrive — Hydrogen retrofits for commercial diesel engines | Saarthi GreenTech";
const PRODUCT_NAME = "GreenDrive";
const PRODUCT_DESC =
  "GreenDrive by Saarthi GreenTech: retrofit hydrogen systems for vans, buses and heavy trucks — reduce emissions and save fuel.";
const PRODUCT_OG = `/images/${PRODUCT_SLUG}/og-image.jpg`;
const PRODUCT_URL = `https://saarthigreentech.com/products/${PRODUCT_SLUG}`;

export const metadata: Metadata = {
  title: PRODUCT_TITLE,
  description: PRODUCT_DESC,
  openGraph: {
    title: PRODUCT_NAME,
    description: PRODUCT_DESC,
    url: PRODUCT_URL,
    siteName: "Saarthi GreenTech",
    images: [
      {
        url: PRODUCT_OG,
        width: 1200,
        height: 630,
        alt: `${PRODUCT_NAME} visual`,
      },
    ],
    videos: "product",
  },
  twitter: {
    card: "summary_large_image",
    title: PRODUCT_NAME,
    description: PRODUCT_DESC,
    images: [PRODUCT_OG],
  },
  metadataBase: new URL("https://saarthigreentech.com"),
  alternates: { canonical: `/products/${PRODUCT_SLUG}` },
};

const productJsonLd = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: PRODUCT_NAME,
  description: PRODUCT_DESC,
  image: [PRODUCT_OG],
  url: PRODUCT_URL,
  brand: {
    "@type": "Organization",
    name: "Saarthi GreenTech",
    url: "https://saarthigreentech.com",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://saarthigreentech.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Products",
      "item": "https://saarthigreentech.com/products"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": PRODUCT_NAME,
      "item": PRODUCT_URL
    }
  ]
};

export default function GreenDrivePage() {
  return (
    <>
      {/* JSON-LD: Product & Breadcrumbs */}
      <Script id="greendrive-product-jsonld" type="application/ld+json">
        {JSON.stringify(productJsonLd)}
      </Script>

      <Script id="greendrive-breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify(breadcrumbJsonLd)}
      </Script>

      <main role="main" className="bg-white text-slate-900">
        <Hero />

        {/* page sections */}
        <section aria-labelledby="greendrive-advantage" className="pt-12">
          <Advantage />
        </section>

        <section aria-labelledby="greendrive-range" className="pt-8">
          <ProductRange />
        </section>

        <section aria-labelledby="greendrive-applications" className="pt-8">
          <Applications />
        </section>

        <section aria-labelledby="greendrive-results" className="pt-8">
          <Results />
        </section>

        {/* optional */}
        {/* <FactSheets /> */}

        <section aria-labelledby="greendrive-benefits" className="pt-8">
          <Benefits />
        </section>

        <section aria-labelledby="greendrive-cta" className="pt-8">
          <CTA />
        </section>
      </main>
    </>
  );
}
