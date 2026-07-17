"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layout/section";
import { SectionTitle } from "@/components/ui/section-title";

const layers = [
  {
    number: "01",
    title: "Identity Engine",
    description:
      "Builds a dynamic understanding of each person's personality, behavior and values.",
  },
  {
    number: "02",
    title: "Memory Engine",
    description:
      "Creates a long-term memory layer that evolves with every interaction.",
  },
  {
    number: "03",
    title: "Future Engine",
    description:
      "Transforms goals into future scenarios and personalized guidance.",
  },
];

export function TechnologySection() {
  return (
    <Section id="technology">
      <Container>
        <SectionTitle
          badge="Technology"
          title={
            <>
              One intelligence.
              <br />
              Multiple AI products.
            </>
          }
          description="Every EON AI product is powered by the same technology foundation — EON Core."
        />

        <div className="relative mt-24">

          <div className="absolute left-6 top-0 hidden h-full w-px bg-white/10 lg:block" />

          <div className="space-y-12">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl transition-all duration-500 hover:border-[#D6B25E]/40 hover:bg-white/[0.05]"
              >
                <div className="absolute -left-[14px] top-10 hidden h-7 w-7 rounded-full border-4 border-[#050505] bg-[#D6B25E] lg:block" />

                <span className="text-sm tracking-[0.3em] text-[#D6B25E]">
                  {layer.number}
                </span>

                <h3 className="mt-4 text-3xl font-semibold">
                  {layer.title}
                </h3>

                <p className="mt-6 max-w-3xl leading-8 text-white/60">
                  {layer.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
}