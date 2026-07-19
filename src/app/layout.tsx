import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { EonIntro } from "@/components/core/eon-intro";



const inter = Inter({

  subsets: ["latin"],

  variable: "--font-inter",

  display: "swap",

});



export const metadata: Metadata = {

  title:
    "EON AI — Personal Intelligence Company",


  description:
    "Building AI companions for human evolution.",


};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html

      lang="en"

      className={inter.variable}

    >


      <body className="
        bg-[#050505]
        text-[#F4F1EA]
        antialiased
      ">



        <EonIntro />


        <Navbar />


        {children}


        <Footer />


      </body>


    </html>

  );

}