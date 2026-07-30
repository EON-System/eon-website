"use client";

import { motion } from "framer-motion";


const pillars = [
  {
    title: "Memory",
    text:
      "AI systems that remember context, experiences and meaningful moments to create deeper interactions.",
  },
  {
    title: "Identity",
    text:
      "Technology designed around who you are, your personality, values and individual journey.",
  },
  {
    title: "Potential",
    text:
      "Intelligence that helps you explore possibilities and unlock new versions of yourself.",
  },
];


export function EonIntelligence() {
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
          mx-auto
          max-w-4xl
          text-center
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
          EON Intelligence
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
          The future of AI
          is personal.
        </h2>


        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-8
            text-white/50
          "
        >
          EON AI creates intelligence systems built around
          memory, identity and human potential.
        </p>


      </motion.div>




      {/* Pillars */}

      <div
        className="
          mt-24
          grid
          gap-8
          md:grid-cols-3
        "
      >

        {pillars.map((item,index)=>(
          <motion.div
            key={item.title}
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
              group
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-white/10
              bg-white/[0.03]
              p-10
              backdrop-blur-xl
              transition
              duration-500
              hover:border-[#D6B25E]/30
            "
          >

            {/* Glow */}

            <div
              className="
                absolute
                -right-20
                -top-20
                h-60
                w-60
                rounded-full
                bg-[#D6B25E]/10
                blur-[90px]
                transition
                duration-700
                group-hover:scale-125
              "
            />


            <div className="relative">


              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-[#D6B25E]
                "
              >
                0{index + 1}
              </p>


              <h3
                className="
                  mt-10
                  text-3xl
                  font-medium
                "
              >
                {item.title}
              </h3>


              <p
                className="
                  mt-6
                  leading-8
                  text-white/50
                "
              >
                {item.text}
              </p>


            </div>


          </motion.div>
        ))}


      </div>


    </section>
  );
}