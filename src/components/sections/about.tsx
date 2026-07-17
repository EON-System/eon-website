"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/layout/section";


export function AboutSection() {
  return (
    <Section id="about">

      <Container>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-5xl text-center"
        >

          <span className="text-xs uppercase tracking-[0.4em] text-[#D6B25E]">
            About EON AI
          </span>


          <h2 className="mt-8 text-5xl font-semibold leading-tight md:text-7xl">
            Building the intelligence
            <br />
            layer for human evolution.
          </h2>


          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/60">
            EON AI is a personal intelligence company creating
            the next generation of AI systems designed around
            human identity, memory and future potential.
          </p>


          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/50">
            We believe the future of artificial intelligence
            is not only about making machines smarter.
            It is about creating technology that helps humans
            understand themselves and achieve more.
          </p>


        </motion.div>



        <div className="mt-20 grid gap-6 md:grid-cols-3">


          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">

            <h3 className="text-2xl font-semibold">
              Human First
            </h3>

            <p className="mt-4 text-white/50">
              Technology designed around people,
              not just algorithms.
            </p>

          </div>



          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">

            <h3 className="text-2xl font-semibold">
              Personal Intelligence
            </h3>

            <p className="mt-4 text-white/50">
              AI systems that understand context,
              goals and individual journeys.
            </p>

          </div>



          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">

            <h3 className="text-2xl font-semibold">
              Future Focused
            </h3>

            <p className="mt-4 text-white/50">
              Building products for the next era
              of human-AI interaction.
            </p>

          </div>


        </div>


      </Container>

    </Section>
  );
}