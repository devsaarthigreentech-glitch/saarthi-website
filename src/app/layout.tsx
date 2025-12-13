"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X4N04SK58J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X4N04SK58J');
          `}
        </Script>
        <Script id="rb2b" strategy="afterInteractive">
          {`
            !function(key) {
              if (window.reb2b) return;
              window.reb2b = { loaded: true };
              var s = document.createElement("script");
              s.async = true;
              s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";
              document.getElementsByTagName("script")[0].parentNode.insertBefore(
                s,
                document.getElementsByTagName("script")[0]
              );
            }("W6Z57HZZL2OX");
          `}
        </Script>
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          {/* <ChatbotWidget /> */}
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import ChatbotWidget from "@/components/Chatbot/page";

