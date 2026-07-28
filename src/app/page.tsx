import { Hero } from "@/components/hero/hero";

import { ProductShowcase } from "@/components/product-showcase";
import { EonIntelligence } from "@/components/eon-intelligence";
import { IntelligenceEvolution } from "@/components/intelligence-evolution";
import { FutureIntelligence } from "@/components/future-intelligence";

import { AboutV2 } from "@/components/sections/about-v2";
import { ProductsV2 } from "@/components/sections/products-v2";
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


      <ProductShowcase />


      <EonIntelligence />


      <IntelligenceEvolution />


      <FutureIntelligence />


      <AboutV2 />


      <ProductsV2 />


      <ResearchV2 />


      <NewsV2 />


      <ContactV2 />


    </main>
  );
}