"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layout/section";
import { SectionTitle } from "@/components/ui/section-title";

const pillars = [
  {
    title: "Identity",
    description:
      "Understand who you are through intelligent personal analysis.",
  },
  {
    title: "Memory",
    description:
      "Capture your journey and build a living AI memory over time.",
  },
  {
    title: "Future",
    description:
      "Turn long-term goals into realistic future scenarios powered by AI.",
  },
];

export function VisionSection() {
  return (
    <Section id="vision">
      <Container>
        <SectionTitle
          badge="Vision"
          title={
            <>
              AI that grows
              <br />
              with people.
            </>
          }
          description="EON AI is building a new generation of personal intelligence products that evolve alongside every user."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D6B25E]/40 hover:bg-white/[0.05]"
            >
              <div className="mb-8 h-1 w-16 rounded-full bg-[#D6B25E]" />

              <h3 className="text-3xl font-semibold">
                {pillar.title}
              </h3>

              <p className="mt-6 leading-8 text-white/60">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}