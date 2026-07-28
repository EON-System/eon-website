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