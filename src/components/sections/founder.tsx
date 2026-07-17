"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layout/section";

export function FounderSection() {
  return (
    <Section id="founder">
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-10 rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl md:grid-cols-2 md:p-16"
        >

          {/* Text */}

          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-[#D6B25E]">
              Founder
            </span>

            <h2 className="mt-8 text-5xl font-semibold leading-tight">
              Building EON AI
              <br />
              from zero.
            </h2>

            <p className="mt-8 leading-8 text-white/60">
              EON AI started with a simple idea:
              personal artificial intelligence should help people
              understand themselves, preserve their memories and
              create the future they want.
            </p>

            <p className="mt-6 leading-8 text-white/60">
              We are building a new generation of AI companions
              focused on human growth.
            </p>
          </div>


          {/* Founder Card */}

          <div className="flex items-center justify-center">

            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-[#D6B25E]/30 bg-black">

              <div className="absolute inset-0 rounded-full bg-[#D6B25E]/10 blur-3xl" />

              <div className="relative text-center">

                <div className="text-4xl font-semibold">
                  EON
                </div>

                <div className="mt-2 text-xs uppercase tracking-[0.4em] text-[#D6B25E]">
                  AI
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </Container>
    </Section>
  );
}