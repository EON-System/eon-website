import { HeroSection } from "@/components/sections/hero-section";

import { AboutV2 } from "@/components/sections/about-v2";
import { ResearchV2 } from "@/components/sections/research-v2";
import { ProductsV2 } from "@/components/sections/products-v2";
import { CompanyV2 } from "@/components/sections/company-v2";
import { VisionV2 } from "@/components/sections/vision-v2";

import { ContactV2 } from "@/components/sections/contact-v2";
import { CareersV2 } from "@/components/sections/careers-v2";


export default function Home() {
  return (
    <main>

      <HeroSection />

      <AboutV2 />

      <ResearchV2 />

      <ProductsV2 />

      <CompanyV2 />

      <VisionV2 />

      <CareersV2 />

      <ContactV2 />

    </main>
  );
}