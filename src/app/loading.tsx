"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-[#050505]">

      <div className="relative flex h-40 w-40 items-center justify-center">

        {/* Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-[#D6B25E]/20 blur-3xl"
        />


        {/* Orb */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#D6B25E]/50 bg-black shadow-[0_0_80px_rgba(214,178,94,0.35)]"
        >

          <span className="text-2xl font-semibold tracking-[0.3em] text-[#D6B25E]">
            EON
          </span>

        </motion.div>


        {/* Rings */}
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-36 w-36 rounded-full border border-white/10"
        />

      </div>


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
          delay: 0.5,
        }}
        className="absolute bottom-24 text-center"
      >

        <p className="text-xs uppercase tracking-[0.5em] text-white/40">
          Personal Intelligence Company
        </p>

      </motion.div>

    </div>
  );
}