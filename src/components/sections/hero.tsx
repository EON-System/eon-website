"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EonOrb } from "@/components/core/eon-orb";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6B25E]/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
      </div>


      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">

        {/* EON Core Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-10"
        >
          <EonOrb />
        </motion.div>


        {/* Company Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#D6B25E]"
        >
          Personal Intelligence Company
        </motion.span>


        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="max-w-5xl text-6xl font-semibold leading-tight md:text-8xl"
        >
          Building AI companions
          <br />
          for human evolution.
        </motion.h1>


        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
          }}
          className="mt-8 max-w-2xl text-lg leading-8 text-white/60 md:text-xl"
        >
          We create AI products that help people understand themselves,
          remember their journey and build the future they truly want.
        </motion.p>


        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
          }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >

          <Link
            href="/products/soulmirror"
            className="rounded-full bg-[#D6B25E] px-8 py-4 text-black transition hover:scale-105"
          >
            Explore SoulMirror
          </Link>


          <Link
            href="#products"
            className="rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur transition hover:bg-white/10"
          >
            Discover EON AI
          </Link>

        </motion.div>

      </div>

    </section>
  );
}