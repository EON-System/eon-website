"use client";

import { motion } from "framer-motion";

export function Background() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        -z-10
        overflow-hidden
      "
    >

      {/* Deep black foundation */}
      <div className="absolute inset-0 bg-[#050505]" />


      {/* Global red cinematic atmosphere */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-20%]
          top-[20%]
          h-[900px]
          w-[1100px]
          rounded-[50%]
          bg-[#5B0F0F]/30
          blur-[220px]
        "
      />


      {/* Golden intelligence atmosphere */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 50, 0],
          scale: [1, 1.12, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-15%]
          top-[-10%]
          h-[800px]
          w-[900px]
          rounded-[50%]
          bg-[#D6B25E]/20
          blur-[240px]
        "
      />


      {/* Lower ambient warmth */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-300px]
          left-[20%]
          h-[700px]
          w-[900px]
          rounded-[50%]
          bg-[#7A1F1F]
          blur-[250px]
        "
      />


      {/* Slow light flow */}
      <motion.div
        animate={{
          x: [0, 180, 0],
          rotate: [15, 20, 15],
        }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-20%]
          top-[45%]
          h-px
          w-[1300px]
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]/10
          to-transparent
          blur-[1px]
        "
      />


      {/* Secondary light flow */}
      <motion.div
        animate={{
          x: [0, -200, 0],
          rotate: [-10, -15, -10],
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-25%]
          top-[65%]
          h-px
          w-[1200px]
          bg-gradient-to-r
          from-transparent
          via-white/[0.05]
          to-transparent
          blur-[1px]
        "
      />


      {/* Cinematic vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.85)_100%)]
        "
      />


      {/* Premium noise */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

    </div>
  );
}