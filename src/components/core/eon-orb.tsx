"use client";

import { motion } from "framer-motion";

export function EonOrb() {
  return (
    <div className="relative flex h-[420px] w-[420px] items-center justify-center">

      {/* Outer Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-full w-full rounded-full bg-[#D6B25E]/20 blur-[100px]"
      />

      {/* Core Ring */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[320px] w-[320px] rounded-full border border-[#D6B25E]/30"
      />

      {/* Inner Ring */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[230px] w-[230px] rounded-full border border-white/10"
      />

      {/* Core */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative h-[140px] w-[140px] rounded-full bg-gradient-to-br from-[#D6B25E] via-[#8B6B2F] to-black shadow-[0_0_80px_rgba(214,178,94,0.5)]"
      />

    </div>
  );
}