import { HeroSection } from "@/components/sections/hero";
import { VisionSection } from "@/components/sections/vision";
import { ProductsSection } from "@/components/sections/products";
import { CoreSection } from "@/components/sections/core";
import { MissionSection } from "@/components/sections/mission";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <main className="bg-[#050505] text-white overflow-hidden">
      <HeroSection />
      <VisionSection />
      <ProductsSection />
      <CoreSection />
      <MissionSection />
      <ContactSection />
    </main>
  );
}