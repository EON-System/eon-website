"use client";

import { motion } from "framer-motion";


const stages = [
  {
    number: "01",
    title: "Understand",
    text:
      "AI begins by understanding you — your goals, experiences, personality and unique perspective.",
  },
  {
    number: "02",
    title: "Learn",
    text:
      "Through memory and interaction, intelligence becomes more personal and meaningful over time.",
  },
  {
    number: "03",
    title: "Evolve",
    text:
      "Technology becomes a companion that helps you explore possibilities and grow.",
  },
];


export function IntelligenceEvolution() {
  return (
    <section
      className="
        relative
        mx-auto
        max-w-7xl
        px-6
        py-40
      "
    >

      {/* Header */}

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
          duration:0.8,
        }}
        className="
          max-w-4xl
        "
      >

        <p
          className="
            text-xs
            uppercase
            tracking-[0.45em]
            text-[#D6B25E]
          "
        >
          Intelligence Evolution
        </p>


        <h2
          className="
            mt-8
            text-4xl
            font-medium
            leading-tight
            tracking-tight
            md:text-7xl
          "
        >
          From commands
          to companionship.
        </h2>


      </motion.div>




      {/* Timeline */}

      <div
        className="
          relative
          mt-32
        "
      >


        {/* Vertical line */}

        <div
          className="
            absolute
            left-5
            top-0
            h-full
            w-px
            bg-white/10
            md:left-1/2
          "
        />



        <div
          className="
            space-y-24
          "
        >

          {stages.map((stage,index)=>(

            <motion.div
              key={stage.number}
              initial={{
                opacity:0,
                y:60,
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
                delay:index*0.1,
              }}
              className={`
                relative
                grid
                md:grid-cols-2
                md:gap-20
                ${
                  index % 2 === 0
                  ? ""
                  : "md:text-right"
                }
              `}
            >


              {/* Number */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D6B25E]/40
                  bg-[#050505]
                  text-xs
                  text-[#D6B25E]
                  md:left-1/2
                  md:-translate-x-1/2
                "
              >
                {stage.number}
              </div>



              <div
                className={`
                  pl-20
                  md:pl-0
                  ${
                    index % 2 === 0
                    ? "md:pr-20"
                    : "md:col-start-2 md:pl-20"
                  }
                `}
              >

                <h3
                  className="
                    text-3xl
                    font-medium
                    md:text-5xl
                  "
                >
                  {stage.title}
                </h3>


                <p
                  className="
                    mt-6
                    max-w-md
                    leading-8
                    text-white/50
                  "
                >
                  {stage.text}
                </p>


              </div>


            </motion.div>

          ))}


        </div>


      </div>


    </section>
  );
}