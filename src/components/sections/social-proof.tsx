"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layout/section";

const stats = [
  {
    value: "2",
    label: "AI Products in Development",
  },
  {
    value: "∞",
    label: "Future Possibilities",
  },
  {
    value: "1",
    label: "Vision",
  },
];

export function SocialProofSection() {
  return (
    <Section id="community">
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-xl md:p-16"
        >

          <span className="text-xs uppercase tracking-[0.35em] text-[#D6B25E]">
            Community
          </span>


          <h2 className="mx-auto mt-8 max-w-4xl text-5xl font-semibold leading-tight md:text-6xl">
            Join the journey of
            <br />
            building the future.
          </h2>


          <p className="mx-auto mt-8 max-w-2xl leading-8 text-white/60">
            EON AI is creating a new generation of personal AI products.
            Follow our journey as we build the future of human intelligence.
          </p>


          <div className="mt-16 grid gap-6 md:grid-cols-3">

            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-black/20 p-8"
              >
                <div className="text-5xl font-semibold text-[#D6B25E]">
                  {stat.value}
                </div>

                <div className="mt-3 text-sm text-white/50">
                  {stat.label}
                </div>

              </div>
            ))}

          </div>


          <button
            className="mt-12 rounded-full bg-[#D6B25E] px-8 py-4 text-black transition hover:scale-105"
          >
            Join Early Access
          </button>

        </motion.div>

      </Container>
    </Section>
  );
}