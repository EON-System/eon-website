"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layout/section";

export function WaitlistSection() {
  return (
    <Section id="waitlist">

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
          className="rounded-[40px] border border-[#D6B25E]/20 bg-[#D6B25E]/5 p-10 text-center backdrop-blur-xl md:p-16"
        >


          <span className="text-xs uppercase tracking-[0.4em] text-[#D6B25E]">
            Early Access
          </span>



          <h2 className="mt-8 text-5xl font-semibold md:text-6xl">
            Be part of the
            <br />
            future of AI.
          </h2>



          <p className="mx-auto mt-6 max-w-2xl text-white/60">
            Join the EON AI early community and get updates
            about our upcoming products.
          </p>



          <form
            className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row"
          >

            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 flex-1 rounded-full border border-white/10 bg-black/40 px-6 text-white outline-none placeholder:text-white/30 focus:border-[#D6B25E]"
            />


            <button
              type="submit"
              className="h-14 rounded-full bg-[#D6B25E] px-8 text-black transition hover:scale-105"
            >
              Join Waitlist
            </button>


          </form>



          <p className="mt-5 text-xs text-white/30">
            No spam. Only important EON AI updates.
          </p>


        </motion.div>

      </Container>

    </Section>
  );
}