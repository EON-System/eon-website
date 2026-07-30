"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/motion/reveal";



export default function TermsPage() {


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
          h-[520px]
          w-[800px]
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

            Legal

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

            Terms
            <br/>
            of Service


          </motion.h1>





          <p

            className="
              mt-8
              text-sm
              uppercase
              tracking-[0.4em]
              text-white/30
            "

          >

            Last updated July 2026

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

                Acceptance

              </h2>


              <p

                className="
                  mt-5
                  leading-8
                  text-white/50
                "

              >

                By accessing EON AI services,
                you agree to these terms and
                responsible usage principles.

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

                AI Services

              </h2>


              <p

                className="
                  mt-5
                  leading-8
                  text-white/50
                "

              >

                EON AI provides intelligent systems
                designed for reflection, creativity
                and personal growth.

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

                User Responsibility

              </h2>


              <p

                className="
                  mt-5
                  leading-8
                  text-white/50
                "

              >

                Users are responsible for their
                information, accounts and interactions
                with EON AI systems.

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

                Subscriptions

              </h2>


              <p

                className="
                  mt-5
                  leading-8
                  text-white/50
                "

              >

                Premium features may require
                subscriptions. Pricing and features
                may evolve over time.

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

              Building intelligence
              with responsibility.

            </h2>



          </div>


        </Reveal>




      </section>


    </main>

  );

}