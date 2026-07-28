"use client";

import { motion } from "framer-motion";


export function FutureIntelligence() {
  return (
    <section
      className="
        relative
        flex
        min-h-[80vh]
        items-center
        justify-center
        overflow-hidden
        px-6
        py-40
      "
    >

      {/* Golden atmosphere */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/20
          blur-[180px]
        "
      />


      {/* Content */}

      <motion.div
        initial={{
          opacity:0,
          y:40,
        }}
        whileInView={{
          opacity:1,
          y:0,
        }}
        viewport={{
          once:true,
        }}
        transition={{
          duration:1,
        }}
        className="
          relative
          max-w-5xl
          text-center
        "
      >

        <p
          className="
            text-xs
            uppercase
            tracking-[0.5em]
            text-[#D6B25E]
          "
        >
          The Future
        </p>


        <h2
          className="
            mt-10
            text-5xl
            font-medium
            leading-[1.05]
            tracking-tight
            md:text-8xl
          "
        >
          The next evolution
          of intelligence
          begins with understanding.
        </h2>


        <p
          className="
            mx-auto
            mt-10
            max-w-2xl
            text-lg
            leading-8
            text-white/50
          "
        >
          EON AI is building a future where artificial intelligence
          becomes a personal companion for human growth.
        </p>



        <motion.div
          animate={{
            y:[0,-10,0],
          }}
          transition={{
            duration:6,
            repeat:Infinity,
            ease:"easeInOut",
          }}
          className="
            mx-auto
            mt-16
            h-24
            w-24
            rounded-full
            border
            border-[#D6B25E]/30
            shadow-[0_0_80px_rgba(214,178,94,0.25)]
          "
        />


      </motion.div>


    </section>
  );
}