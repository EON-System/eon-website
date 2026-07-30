import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { EonIntro } from "@/components/core/eon-intro";
import { PageTransition } from "@/components/core/page-transition";



const geistSans = Geist({

  subsets:["latin"],

  variable:"--font-geist-sans",

  display:"swap",

});


const geistMono = Geist_Mono({

  subsets:["latin"],

  variable:"--font-geist-mono",

  display:"swap",

});



export const metadata: Metadata = {

  title:
    "EON AI — Personal Intelligence Company",

  description:
    "Building AI companions for human evolution.",

};



export default function RootLayout({

  children,

}:Readonly<{

  children:React.ReactNode;

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



        {/* First website opening */}

        <EonIntro />



        {/* Page changing animation */}

        <PageTransition />



        <Navbar />



        {children}



        <Footer />



      </body>


    </html>

  );

}