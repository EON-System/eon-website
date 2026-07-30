"use client";

import { motion } from "framer-motion";


const areas = [
  {
    title: "Personal Intelligence",
    text:
      "Researching AI systems that understand individual context, preferences and human experiences.",
  },
  {
    title: "Memory Systems",
    text:
      "Exploring how AI can build meaningful long-term memory while keeping humans in control.",
  },
  {
    title: "Human-AI Interaction",
    text:
      "Creating new ways for people to communicate and evolve together with artificial intelligence.",
  },
];


export default function ResearchPage() {
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
          max-w-6xl
        "
      >


        {/* Header */}

        <div
          className="
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
            EON Research
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
            Exploring the future
            of personal intelligence.
          </motion.h1>



          <p
            className="
              mx-auto
              mt-10
              max-w-3xl
              text-lg
              leading-8
              text-white/50
            "
          >
            EON AI researches the next generation of
            human-centered artificial intelligence systems
            designed around memory, identity and evolution.
          </p>


        </div>





        {/* Research areas */}

        <div
          className="
            mt-32
            grid
            gap-8
            md:grid-cols-3
          "
        >

          {areas.map((area,index)=>(

            <motion.div
              key={area.title}
              initial={{
                opacity:0,
                y:50,
              }}
              whileInView={{
                opacity:1,
                y:0,
              }}
              viewport={{
                once:true,
              }}
              transition={{
                duration:0.8,
                delay:index*0.15,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
              "
            >

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-[#D6B25E]
                "
              >
                0{index+1}
              </p>



              <h2
                className="
                  mt-8
                  text-2xl
                  font-medium
                "
              >
                {area.title}
              </h2>



              <p
                className="
                  mt-5
                  leading-7
                  text-white/50
                "
              >
                {area.text}
              </p>


            </motion.div>

          ))}


        </div>





        {/* Closing statement */}

        <div
          className="
            mt-32
            border-t
            border-white/10
            pt-16
            text-center
          "
        >

          <h2
            className="
              text-3xl
              font-medium
              md:text-5xl
            "
          >
            Building intelligence
            for the human future.
          </h2>


        </div>



      </section>


    </main>
  );
}