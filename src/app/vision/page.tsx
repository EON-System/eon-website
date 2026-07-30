"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/motion/reveal";



export default function VisionPage() {


  return (

    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        px-6
        py-40
      "
    >


      {/* Ambient light */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#D6B25E]/10
          blur-[180px]
        "
      />




      <section
        className="
          relative
          mx-auto
          max-w-6xl
        "
      >



        <div
          className="
            mx-auto
            max-w-5xl
            text-center
          "
        >



          <motion.p

            initial={{
              opacity:0,
              y:20
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:0.8
            }}

            className="
              text-xs
              uppercase
              tracking-[0.6em]
              text-[#D6B25E]
            "

          >

            Vision

          </motion.p>





          <motion.h1

            initial={{
              opacity:0,
              y:40
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:0.2,
              duration:1
            }}

            className="
              mt-10
              text-6xl
              font-semibold
              leading-[1.05]
              tracking-[-0.05em]
              text-[#F4F1EA]
              md:text-8xl
            "

          >

            Technology that
            <br/>
            understands humanity.


          </motion.h1>





          <motion.p

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            transition={{
              delay:0.6,
              duration:1
            }}

            className="
              mx-auto
              mt-10
              max-w-3xl
              text-xl
              leading-9
              text-white/50
            "

          >

            EON AI imagines a future where intelligence
            becomes personal — understanding memory,
            identity and human potential.

          </motion.p>



        </div>






        <Reveal>


          <div
            className="
              mt-32
              grid
              gap-8
              md:grid-cols-3
            "
          >



            <GlassCard>


              <h2
                className="
                  text-3xl
                  font-semibold
                  text-[#F4F1EA]
                "
              >

                Memory

              </h2>



              <p
                className="
                  mt-6
                  leading-8
                  text-white/50
                "
              >

                Intelligence that remembers
                what truly matters.

              </p>


            </GlassCard>





            <GlassCard>


              <h2
                className="
                  text-3xl
                  font-semibold
                  text-[#F4F1EA]
                "
              >

                Identity

              </h2>



              <p
                className="
                  mt-6
                  leading-8
                  text-white/50
                "
              >

                AI systems designed around
                individuality and human context.

              </p>


            </GlassCard>





            <GlassCard>


              <h2
                className="
                  text-3xl
                  font-semibold
                  text-[#F4F1EA]
                "
              >

                Potential

              </h2>



              <p
                className="
                  mt-6
                  leading-8
                  text-white/50
                "
              >

                Technology created to help
                humanity evolve.

              </p>


            </GlassCard>



          </div>


        </Reveal>





        <Reveal delay={0.2}>


          <div
            className="
              mt-32
              border-t
              border-white/10
              pt-20
              text-center
            "
          >


            <p
              className="
                text-sm
                uppercase
                tracking-[0.5em]
                text-white/30
              "
            >

              The next era of intelligence

            </p>



            <h2
              className="
                mt-8
                text-4xl
                font-semibold
                tracking-tight
                text-[#F4F1EA]
                md:text-6xl
              "
            >

              Intelligence designed
              around humans.

            </h2>


          </div>


        </Reveal>



      </section>


    </main>

  );

}