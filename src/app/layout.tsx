import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { EonIntro } from "@/components/core/eon-intro";



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


  title: {

    default:
      "EON AI — Personal Intelligence Company",

    template:
      "%s | EON AI",

  },



  description:

    "EON AI builds personal intelligence systems designed around memory, identity and human potential.",



  keywords:[

    "EON AI",

    "Artificial Intelligence",

    "Personal AI",

    "AI companions",

    "Future of AI",

    "Human AI interaction",

    "Personal intelligence",

  ],



  authors:[

    {

      name:"EON AI",

    },

  ],



  creator:"EON AI",



  openGraph:{


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



  twitter:{


    card:
      "summary_large_image",


    title:
      "EON AI — Personal Intelligence Company",


    description:
      "Building AI companions for human evolution.",


  },



  robots:{


    index:true,

    follow:true,


  },


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



        {/* Global EON loading experience */}

        <EonIntro />



        <Navbar />



        {children}



        <Footer />



      </body>


    </html>

  );

}