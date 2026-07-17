import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Background } from "@/components/core/background";


const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "EON AI — Personal Intelligence Company",

  description:
    "EON AI creates personal AI products that help people understand themselves, remember their journey and shape their future.",

  keywords: [
    "EON AI",
    "Artificial Intelligence",
    "Personal AI",
    "AI Companion",
    "SoulMirror AI",
    "FutureSelf AI",
  ],

  openGraph: {
    title: "EON AI — Personal Intelligence Company",

    description:
      "Building AI companions for human evolution.",

    type: "website",

    siteName: "EON AI",
  },
};


const jsonLd = {
  "@context": "https://schema.org",

  "@type": "Organization",

  name: "EON AI",

  description:
    "EON AI creates personal AI products that help people understand themselves, remember their journey and shape their future.",

  brand: {
    "@type": "Brand",
    name: "EON AI",
  },


  makesOffer: [
    {
      "@type": "SoftwareApplication",

      name: "SoulMirror AI",

      description:
        "AI companion for self-discovery, emotions, dreams and personal growth.",
    },

    {
      "@type": "SoftwareApplication",

      name: "FutureSelf AI",

      description:
        "AI experience for future planning, decisions and personal development.",
    },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body
        className={`${geist.variable} ${geistMono.variable} bg-[#050505] text-white antialiased`}
      >

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />


        <Background />


        <Navbar />


        <main>
          {children}
        </main>


        <Footer />


      </body>

    </html>

  );
}