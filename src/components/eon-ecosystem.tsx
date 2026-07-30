"use client";

import { motion } from "framer-motion";


const nodes = [
  {
    title: "SoulMirror AI",
    text: "Understanding your present self.",
  },
  {
    title: "FutureSelf AI",
    text: "Exploring your future potential.",
  },
];


export function EonEcosystem() {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        px-6
        py-40
      "
    >

      {/* Central light */}

      <motion.div
        animate={{
          scale:[1,1.2,1],
          opacity:[0.15,0.3,0.15],
        }}
        transition={{
          duration:10,
          repeat:Infinity,
          ease:"easeInOut",
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


      <div
        className="
          relative
          mx-auto
          max-w-6xl
          text-center
        "
      >

        <motion.p
          initial={{
            opacity:0,
          }}
          whileInView={{
            opacity:1,
          }}
          viewport={{
            once:true,
          }}
          className="
            text-xs
            uppercase
            tracking-[0.5em]
            text-[#D6B25E]
          "
        >
          EON Ecosystem
        </motion.p>



        <motion.h2
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
            mt-10
            text-5xl
            font-medium
            tracking-tight
            md:text-8xl
          "
        >
          One intelligence.
          <br />
          Multiple dimensions.
        </motion.h2>



        <div
          className="
            relative
            mx-auto
            mt-32
            grid
            max-w-4xl
            gap-10
            md:grid-cols-2
          "
        >

          {nodes.map((node,index)=>(

            <motion.div
              key={node.title}
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
                duration:1,
                delay:index*0.2,
              }}
              className="
                rounded-[40px]
                border
                border-white/10
                bg-white/[0.03]
                p-10
                backdrop-blur-xl
              "
            >

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-[#D6B25E]
                "
              >
                0{index+1}
              </p>


              <h3
                className="
                  mt-8
                  text-3xl
                  font-medium
                "
              >
                {node.title}
              </h3>


              <p
                className="
                  mt-5
                  leading-7
                  text-white/50
                "
              >
                {node.text}
              </p>


            </motion.div>

          ))}

        </div>


      </div>


    </section>
  );
}