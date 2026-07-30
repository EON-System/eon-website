"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function EonIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 3,
        duration: 0.8,
      }}
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#050505]
      "
    >
      {/* Ambient Gold Glow */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
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

      <div className="relative flex flex-col items-center">

        {/* Logo */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 24,
            filter: "blur(14px)",
            letterSpacing: "0.7em",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            letterSpacing: "0.45em",
          }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
          className="
            text-[78px]
            font-light
            uppercase
            text-[#F4F1EA]
            md:text-[96px]
          "
        >
          EON
        </motion.h1>

        {/* Gold Line */}

        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 140,
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
          className="
            relative
            mt-8
            h-px
            overflow-hidden
            bg-gradient-to-r
            from-transparent
            via-[#D6B25E]
            to-transparent
          "
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "220%" }}
            transition={{
              delay: 1.2,
              duration: 1.3,
              ease: "easeInOut",
            }}
            className="
              absolute
              top-0
              h-px
              w-16
              bg-white
            "
          />
        </motion.div>

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
            duration: 0.8,
          }}
          className="
            mt-8
            text-center
            text-[11px]
            uppercase
            leading-7
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