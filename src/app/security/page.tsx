"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/motion/reveal";



export default function SecurityPage() {


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



      {/* Ambient */}

      <div

        className="
          absolute
          left-1/2
          top-0
          h-[550px]
          w-[850px]
          -translate-x-1/2
          rounded-full
          bg-[#D6B25E]/10
          blur-[220px]
        "

      />





      <section

        className="
          relative
          mx-auto
          max-w-5xl
        "

      >




        <div className="text-center">





          <motion.p

            initial={{
              opacity:0,
              y:20
            }}

            animate={{
              opacity:1,
              y:0
            }}

            className="
              text-xs
              uppercase
              tracking-[0.6em]
              text-[#D6B25E]
            "

          >

            Security

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

            Security
            <br/>
            at EON AI


          </motion.h1>







          <p

            className="
              mx-auto
              mt-10
              max-w-3xl
              text-xl
              leading-9
              text-white/50
            "

          >

            Building trusted intelligence systems
            with privacy, safety and protection
            at the core.

          </p>



        </div>









        <Reveal>


          <div

            className="
              mt-32
              grid
              gap-8
              md:grid-cols-2
            "

          >






            <GlassCard>


              <h2

                className="
                  text-2xl
                  font-semibold
                  text-[#F4F1EA]
                "

              >

                Privacy First

              </h2>


              <p

                className="
                  mt-5
                  leading-8
                  text-white/50
                "

              >

                Personal intelligence requires
                responsible data handling.
                We focus on protecting user
                information and minimizing
                unnecessary collection.

              </p>


            </GlassCard>








            <GlassCard>


              <h2

                className="
                  text-2xl
                  font-semibold
                  text-[#F4F1EA]
                "

              >

                Data Protection

              </h2>


              <p

                className="
                  mt-5
                  leading-8
                  text-white/50
                "

              >

                Modern security practices,
                access controls and technical
                safeguards help protect
                EON AI systems.

              </p>


            </GlassCard>








            <GlassCard>


              <h2

                className="
                  text-2xl
                  font-semibold
                  text-[#F4F1EA]
                "

              >

                AI Safety

              </h2>


              <p

                className="
                  mt-5
                  leading-8
                  text-white/50
                "

              >

                Our AI systems are developed
                with reliability, transparency
                and responsible interaction
                in mind.

              </p>


            </GlassCard>








            <GlassCard>


              <h2

                className="
                  text-2xl
                  font-semibold
                  text-[#F4F1EA]
                "

              >

                Continuous Evolution

              </h2>


              <p

                className="
                  mt-5
                  leading-8
                  text-white/50
                "

              >

                Security is an ongoing process.
                EON AI continuously improves
                reliability and protection.

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

              Trust Layer

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

              Intelligence you can
              trust.

            </h2>



          </div>


        </Reveal>





      </section>



    </main>

  );

}