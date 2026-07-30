"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/motion/reveal";



export default function ContactPage() {


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



      {/* Contact atmosphere */}

      <div

        className="
          absolute
          left-1/2
          top-0
          h-[550px]
          w-[800px]
          -translate-x-1/2
          rounded-full
          bg-[#D6B25E]/10
          blur-[200px]
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

            Contact

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

            Let's build
            <br/>
            the future.


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

            Connect with EON AI and explore
            future collaborations, partnerships
            and research opportunities.

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

                Partnerships

              </h2>



              <p

                className="
                  mt-6
                  leading-8
                  text-white/50
                "

              >

                Working with companies and creators
                building the next generation of AI.

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

                Research

              </h2>



              <p

                className="
                  mt-6
                  leading-8
                  text-white/50
                "

              >

                Collaborate with EON AI
                on future intelligence systems.

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

                Media

              </h2>



              <p

                className="
                  mt-6
                  leading-8
                  text-white/50
                "

              >

                Press, interviews and
                company communication.

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
                text-xs
                uppercase
                tracking-[0.5em]
                text-white/30
              "

            >

              EON AI

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

              Building the next era
              of personal intelligence.

            </h2>




            <a

              href="mailto:eon.ai.inc@gmail.com"

              className="
                group
                relative
                mt-12
                inline-flex
                overflow-hidden
                rounded-2xl
                border
                border-[#D6B25E]/30
                bg-white/[0.03]
                px-10
                py-5
                text-sm
                font-medium
                text-[#F4F1EA]
                backdrop-blur-xl
                transition-all
                duration-700
                hover:border-[#D6B25E]
                hover:text-[#D6B25E]
                hover:shadow-[0_0_50px_rgba(214,178,94,0.2)]
              "

            >

              <span className="relative z-10">

                Contact EON AI →

              </span>


              <span

                className="
                  absolute
                  inset-0
                  translate-y-full
                  bg-[#D6B25E]/10
                  transition-transform
                  duration-700
                  group-hover:translate-y-0
                "

              />


            </a>



          </div>


        </Reveal>





      </section>



    </main>

  );

}