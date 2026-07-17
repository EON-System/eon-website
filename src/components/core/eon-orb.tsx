"use client";

import { motion } from "framer-motion";

export function EonOrb() {
  return (
    <div className="relative flex h-[420px] w-[420px] items-center justify-center">

      {/* Outer Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-[#D6B25E]/20 blur-[100px]"
      />


      {/* Outer Ring */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[360px] w-[360px] rounded-full border border-[#D6B25E]/20"
      />


      {/* Second Ring */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[290px] w-[290px] rounded-full border border-white/10"
      />


      {/* Core */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex h-52 w-52 items-center justify-center rounded-full border border-[#D6B25E]/40 bg-black/80 shadow-[0_0_120px_rgba(214,178,94,0.35)] backdrop-blur-xl"
      >

        {/* Inner Light */}
        <div className="absolute inset-8 rounded-full bg-[#D6B25E]/10 blur-2xl" />


        <div className="relative text-center">

          <div className="text-4xl font-semibold tracking-[0.35em] text-[#D6B25E]">
            EON
          </div>

          <div className="mt-3 text-[10px] uppercase tracking-[0.5em] text-white/40">
            Intelligence
          </div>

        </div>

      </motion.div>


      {/* Particles */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[390px] w-[390px]"
      >

        <span className="absolute left-0 top-1/2 h-2 w-2 rounded-full bg-[#D6B25E]" />

        <span className="absolute right-10 top-20 h-1.5 w-1.5 rounded-full bg-white/60" />

        <span className="absolute bottom-20 left-20 h-1 w-1 rounded-full bg-[#4F8CFF]" />

      </motion.div>

    </div>
  );
}