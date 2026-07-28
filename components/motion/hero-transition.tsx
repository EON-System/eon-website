"use client";

import { motion } from "framer-motion";


export function HeroTransition() {
  return (
    <div
      className="
        relative
        h-40
        overflow-hidden
        pointer-events-none
      "
    >

      {/* Golden light bridge */}

      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/20
          blur-[180px]
        "
      />


      {/* Soft dark fade */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-[#050505]/50
          to-[#050505]
        "
      />


    </div>
  );
}