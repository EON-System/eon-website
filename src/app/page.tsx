import type { Metadata } from "next";

import { Hero } from "@/components/hero/hero";

import { ProductShowcase } from "@/components/product-showcase";
import { EonEcosystem } from "@/components/eon-ecosystem";
import { EonIntelligence } from "@/components/eon-intelligence";
import { IntelligenceEvolution } from "@/components/intelligence-evolution";
import { FutureIntelligence } from "@/components/future-intelligence";

import { HeroTransition } from "@/components/motion/hero-transition";

import { AboutV2 } from "@/components/sections/about-v2";
import { ResearchV2 } from "@/components/sections/research-v2";
import { NewsV2 } from "@/components/sections/news-v2";
import { ContactV2 } from "@/components/sections/contact-v2";



export const metadata: Metadata = {


  title:
    "EON AI — Building AI Companions for Human Evolution",



  description:
    "EON AI creates personal intelligence systems designed around memory, identity and human potential.",



  openGraph:{


    title:
      "EON AI — Personal Intelligence Company",


    description:
      "Building AI companions designed around memory, identity and human evolution.",


    type:
      "website",


    siteName:
      "EON AI",


  },



  twitter:{


    card:
      "summary_large_image",


    title:
      "EON AI — Personal Intelligence Company",


    description:
      "Building AI companions designed around memory, identity and human potential.",


  },


};





export default function Home() {

  return (

    <main
      className="
        overflow-hidden
      "
    >


      <Hero />



      {/* Cinematic bridge */}

      <HeroTransition />



      {/* Product universe */}

      <ProductShowcase />



      {/* One AI ecosystem */}

      <EonEcosystem />



      {/* Philosophy */}

      <EonIntelligence />



      {/* AI evolution story */}

      <IntelligenceEvolution />



      {/* Company vision */}

      <AboutV2 />



      {/* Research */}

      <ResearchV2 />



      {/* Future statement */}

      <FutureIntelligence />



      {/* Updates */}

      <NewsV2 />



      {/* Contact */}

      <ContactV2 />



    </main>

  );

}