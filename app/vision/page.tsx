"use client";

import { motion } from "framer-motion";
import { Background } from "@/components/background";


export default function VisionPage() {
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
            EON AI Vision
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
            Building AI companions
            for human evolution.
          </h1>


          <p
            className="
              mt-10
              max-w-2xl
              text-lg
              leading-8
              text-white/50
              md:text-xl
            "
          >
            EON AI creates personal intelligence systems
            designed around memory, identity and human potential.
          </p>


        </motion.div>


      </section>




      {/* Vision Blocks */}

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


          {[
            {
              title:"Personal Intelligence",
              text:"AI systems that understand people beyond simple commands."
            },
            {
              title:"Human Memory",
              text:"Building technology that learns context, experiences and identity."
            },
            {
              title:"Future Interaction",
              text:"Creating a new generation of relationships between humans and AI."
            }
          ].map((item,index)=>(
            
            <motion.div
              key={item.title}
              initial={{
                opacity:0,
                y:30,
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
                  text-xl
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
          }}
          whileInView={{
            opacity:1,
          }}
          viewport={{
            once:true,
          }}
          className="
            text-3xl
            leading-tight
            md:text-5xl
          "
        >
          The future of AI is not only intelligence.
          It is understanding.
        </motion.h2>


      </section>


    </main>
  );
}