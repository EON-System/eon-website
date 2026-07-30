"use client";

import { motion } from "framer-motion";


export default function MissionPage() {
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
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            text-xs
            uppercase
            tracking-[0.5em]
            text-[#D6B25E]
          "
        >
          Our Mission
        </motion.p>



        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            mt-10
            text-5xl
            font-medium
            leading-tight
            md:text-8xl
          "
        >
          Creating AI
          that evolves with humanity.
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
          Our mission is to build personal intelligence
          systems that help people understand themselves,
          make better decisions and unlock their future potential.
        </motion.p>




        <div
          className="
            mt-24
            grid
            gap-8
            text-left
            md:grid-cols-3
          "
        >

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
            "
          >

            <h2
              className="
                text-2xl
                font-medium
              "
            >
              Human First
            </h2>

            <p
              className="
                mt-4
                leading-7
                text-white/50
              "
            >
              Technology should amplify human potential,
              not replace human identity.
            </p>

          </div>




          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
            "
          >

            <h2
              className="
                text-2xl
                font-medium
              "
            >
              Personal Intelligence
            </h2>

            <p
              className="
                mt-4
                leading-7
                text-white/50
              "
            >
              Every person deserves AI that understands
              their unique journey.
            </p>

          </div>




          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
            "
          >

            <h2
              className="
                text-2xl
                font-medium
              "
            >
              Future Evolution
            </h2>

            <p
              className="
                mt-4
                leading-7
                text-white/50
              "
            >
              Building the foundation for the next
              generation of human-AI relationships.
            </p>

          </div>


        </div>


      </section>


    </main>
  );
}