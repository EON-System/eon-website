"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/motion/reveal";



export default function MissionPage() {


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


      {/* Ambient Intelligence Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[520px]
          w-[720px]
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

            Mission

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

            Creating AI
            <br/>
            that evolves
            <br/>
            with humanity.


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

            Our mission is to create personal intelligence
            systems that help people understand themselves,
            make better decisions and unlock their future.

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

                Human First

              </h2>



              <p
                className="
                  mt-6
                  leading-8
                  text-white/50
                "
              >

                Technology designed to amplify
                human potential, creativity and identity.

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

                Personal Intelligence

              </h2>



              <p
                className="
                  mt-6
                  leading-8
                  text-white/50
                "
              >

                Building AI companions that understand
                context, memory and personal journeys.

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

                Future Evolution

              </h2>



              <p
                className="
                  mt-6
                  leading-8
                  text-white/50
                "
              >

                Creating the foundation for the next
                generation of human and AI relationships.

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

              EON AI Mission

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

              Building intelligence
              with purpose.

            </h2>



          </div>


        </Reveal>



      </section>


    </main>

  );

}