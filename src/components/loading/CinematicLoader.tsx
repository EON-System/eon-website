"use client";

import { motion } from "framer-motion";

export function CinematicLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#050505]
      "
    >
      {/* Ambient Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#D6B25E]
          blur-[180px]
        "
      />

      <div className="relative z-10 text-center">

        {/* Logo */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
            letterSpacing: "0.8em",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            letterSpacing: "0.45em",
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="
            text-[72px]
            font-light
            uppercase
            text-[#F4F1EA]
            md:text-[96px]
          "
        >
          EON
        </motion.h1>

        {/* Golden Line */}

        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 120,
            opacity: 1,
          }}
          transition={{
            delay: 1.1,
            duration: 0.8,
          }}
          className="
            mx-auto
            mt-8
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#D6B25E]
            to-transparent
          "
        />

        {/* Tagline */}

        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="
            mt-8
            text-[11px]
            uppercase
            tracking-[0.45em]
            text-white/45
          "
        >
          Where Intelligence
          <br />
          Becomes Personal
        </motion.p>
      </div>
    </motion.div>
  );
}