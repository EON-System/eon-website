import { HeroSection } from "@/components/sections/hero";
import { ProductsSection } from "@/components/sections/products";
import { TechnologySection } from "@/components/sections/technology";
import { VisionSection } from "@/components/sections/vision";
import { FounderSection } from "@/components/sections/founder";
import { SocialProofSection } from "@/components/sections/social-proof";
import { MissionSection } from "@/components/sections/mission";
import { ContactSection } from "@/components/sections/contact";
import { WaitlistSection } from "@/components/sections/waitlist";


export default function Home() {
  return (
    <main className="overflow-hidden">

      <HeroSection />

      <ProductsSection />

      <TechnologySection />

      <VisionSection />

      <FounderSection />

      <SocialProofSection />

      <MissionSection />

      <WaitlistSection />

      <ContactSection />

    </main>
  );
}