"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layout/section";

export function MissionSection() {
  return (
    <Section
      id="mission"
      className="overflow-hidden"
    >
      <Container>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-10 md:p-20 backdrop-blur-2xl"
        >

          {/* Background Glow */}
          <div className="absolute inset-0">

            <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6B25E]/10 blur-[180px]" />

            <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#4F8CFF]/10 blur-[150px]" />

          </div>

          <div className="relative z-10">

            <span className="inline-flex rounded-full border border-[#D6B25E]/30 bg-[#D6B25E]/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#D6B25E]">
              Mission
            </span>

            <h2 className="mt-10 max-w-5xl text-5xl font-semibold leading-tight md:text-7xl">
              Technology should
              <br />
              understand people —
              <br />
              not just answer them.
            </h2>

            <p className="mt-10 max-w-3xl text-lg leading-9 text-white/60">
              EON AI is building a new generation of personal intelligence
              products that help people understand themselves, preserve their
              memories and intentionally shape their future.
            </p>

          </div>

        </motion.div>

      </Container>
    </Section>
  );
}