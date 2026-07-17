"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { EonOrb } from "@/components/core/eon-orb";


export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6">

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">


        {/* Text */}

        <div className="relative z-10">

          <motion.span
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="inline-flex rounded-full border border-[#D6B25E]/30 bg-[#D6B25E]/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#D6B25E]"
          >
            Personal Intelligence Company
          </motion.span>



          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="mt-8 text-6xl font-semibold leading-[1.05] md:text-8xl"
          >
            Building AI
            <br />
            companions
            <br />
            for human
            <br />
            evolution.
          </motion.h1>



          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
            }}
            className="mt-8 max-w-xl text-lg leading-8 text-white/60"
          >
            EON AI creates personal intelligence products
            that help people understand themselves,
            remember their journey and shape their future.
          </motion.p>



          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
            }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >

            <Link
              href="/products/soulmirror"
              className="rounded-full bg-[#D6B25E] px-8 py-4 text-center text-black transition hover:scale-105"
            >
              Explore SoulMirror
            </Link>


            <Link
              href="#products"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-center backdrop-blur-xl transition hover:bg-white/10"
            >
              Discover EON AI
            </Link>

          </motion.div>


        </div>



        {/* Orb */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.4,
            duration: 1,
          }}
          className="flex justify-center lg:justify-end"
        >
          <EonOrb />
        </motion.div>


      </div>

    </section>
  );
}