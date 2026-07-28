"use client";

import { motion } from "framer-motion";
import { Background } from "@/components/background";


const features = [
  {
    title: "Future Simulation",
    text: "Explore possible versions of your future through AI-powered scenarios and decisions.",
  },
  {
    title: "Life Intelligence",
    text: "Understand how your choices, habits and goals shape your next chapters.",
  },
  {
    title: "Personal Evolution",
    text: "Build a clearer path toward the person you want to become.",
  },
];


export default function FutureSelfPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-[#F4F1EA]">

      <Background />


      {/* Hero */}

      <section
        className="
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          flex-col
          justify-center
          px-6
          py-32
        "
      >

        <motion.div
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
        >

          <p
            className="
              mb-8
              text-xs
              uppercase
              tracking-[0.45em]
              text-[#D6B25E]
            "
          >
            Product by EON AI
          </p>


          <h1
            className="
              max-w-5xl
              text-5xl
              font-medium
              leading-[1.05]
              tracking-tight
              md:text-8xl
            "
          >
            Meet the intelligence
            of your future.
          </h1>


          <p
            className="
              mt-10
              max-w-3xl
              text-lg
              leading-8
              text-white/50
              md:text-xl
            "
          >
            FutureSelf AI helps you explore possibilities,
            visualize growth and understand the person you can become.
          </p>


        </motion.div>

      </section>




      {/* Features */}

      <section
        className="
          mx-auto
          max-w-7xl
          px-6
          pb-32
        "
      >

        <div
          className="
            grid
            gap-8
            md:grid-cols-3
          "
        >

          {features.map((item,index)=>(
            <motion.div
              key={item.title}
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
                delay:index*0.15,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
              "
            >

              <h2
                className="
                  text-2xl
                  font-medium
                "
              >
                {item.title}
              </h2>


              <p
                className="
                  mt-5
                  leading-7
                  text-white/50
                "
              >
                {item.text}
              </p>


            </motion.div>
          ))}

        </div>

      </section>




      {/* Closing */}

      <section
        className="
          mx-auto
          max-w-5xl
          px-6
          pb-40
          text-center
        "
      >

        <motion.h2
          initial={{
            opacity:0,
            scale:0.96,
          }}
          whileInView={{
            opacity:1,
            scale:1,
          }}
          viewport={{
            once:true,
          }}
          className="
            text-3xl
            leading-tight
            md:text-6xl
          "
        >
          Your future is not predicted.
          It is created.
        </motion.h2>


      </section>


    </main>
  );
}