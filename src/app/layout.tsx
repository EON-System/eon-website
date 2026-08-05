import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { EonIntro } from "@/components/core/eon-intro";
import { Schema } from "@/app/schema";


const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});


const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});



export const metadata: Metadata = {

  title: {
    default:
      "EON AI — Personal Intelligence Company",

    template:
      "%s | EON AI",
  },


  description:
    "EON AI builds personal intelligence systems designed around memory, identity and human potential.",



  keywords: [

    "EON AI",

    "Artificial Intelligence",

    "Personal AI",

    "AI Companion",

    "Personal Intelligence",

    "SoulMirror AI",

    "FutureSelf AI",

    "Dream Analysis",

    "Self Discovery",

    "AI Company",

    "Human AI Interaction",

  ],



  authors: [

    {
      name: "EON AI",
    },

  ],



  creator:
    "EON AI",



  publisher:
    "EON AI",



  category:
    "Technology",



  openGraph: {

    title:
      "EON AI — Personal Intelligence Company",


    description:
      "Building AI companions for human evolution.",


    siteName:
      "EON AI",


    type:
      "website",


    locale:
      "en_US",

  },



  twitter: {

    card:
      "summary_large_image",


    title:
      "EON AI — Personal Intelligence Company",


    description:
      "Building AI companions for human evolution.",

  },



  robots: {

    index:
      true,


    follow:
      true,


    googleBot: {

      index:
        true,


      follow:
        true,


      "max-image-preview":
        "large",


      "max-video-preview":
        -1,


      "max-snippet":
        -1,

    },

  },

};





export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html

      lang="en"

      className={`${geistSans.variable} ${geistMono.variable}`}

    >


      <body

        className="
          font-sans
          antialiased
          bg-[#050505]
          text-[#F4F1EA]
        "

      >


        <div className="eon-grid" />



        {/* SEO Structured Data */}

        <Schema />



        {/* Global EON loading experience */}

        <EonIntro />



        <Navbar />



        {children}



        <Footer />



      </body>


    </html>

  );

}