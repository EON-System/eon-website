"use client";

import { motion } from "framer-motion";


export default function VisionPage() {
  return (
    <main
      className="
        min-h-screen
        overflow-hidden
        px-6
        py-32
      "
    >

      <section
        className="
          mx-auto
          max-w-5xl
          text-center
        "
      >

        <motion.p
          initial={{
            opacity:0,
            y:20,
          }}
          animate={{
            opacity:1,
            y:0,
          }}
          className="
            text-xs
            uppercase
            tracking-[0.5em]
            text-[#D6B25E]
          "
        >
          Our Vision
        </motion.p>



        <motion.h1
          initial={{
            opacity:0,
            y:40,
          }}
          animate={{
            opacity:1,
            y:0,
          }}
          transition={{
            duration:1,
          }}
          className="
            mt-10
            text-5xl
            font-medium
            leading-tight
            md:text-8xl
          "
        >
          Building the future
          of personal intelligence.
        </motion.h1>



        <motion.p
          initial={{
            opacity:0,
          }}
          animate={{
            opacity:1,
          }}
          transition={{
            delay:0.4,
          }}
          className="
            mx-auto
            mt-10
            max-w-3xl
            text-lg
            leading-8
            text-white/50
          "
        >
          EON AI imagines a future where artificial intelligence
          is not just a tool, but a personal companion that
          understands, remembers and evolves with you.
        </motion.p>



        <div
          className="
            mx-auto
            mt-24
            h-px
            max-w-xl
            bg-white/10
          "
        />



        <div
          className="
            mt-24
            grid
            gap-10
            md:grid-cols-3
          "
        >

          <div>
            <h2
              className="
                text-3xl
                font-medium
              "
            >
              Memory
            </h2>

            <p
              className="
                mt-4
                text-white/50
              "
            >
              Intelligence that remembers what matters.
            </p>
          </div>



          <div>
            <h2
              className="
                text-3xl
                font-medium
              "
            >
              Identity
            </h2>

            <p
              className="
                mt-4
                text-white/50
              "
            >
              AI designed around your individuality.
            </p>
          </div>



          <div>
            <h2
              className="
                text-3xl
                font-medium
              "
            >
              Potential
            </h2>

            <p
              className="
                mt-4
                text-white/50
              "
            >
              Technology that helps humans evolve.
            </p>
          </div>


        </div>


      </section>


    </main>
  );
}