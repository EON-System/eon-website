"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/motion/reveal";



export default function CookiesPage() {


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

            Cookie
            <br/>
            Policy


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

                What Are Cookies?

              </h2>



              <p

                className="
                  mt-5
                  leading-8
                  text-white/50
                "

              >

                Cookies are small data files
                stored on your device that help
                websites remember information
                and provide better experiences.

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

                Usage

              </h2>



              <p

                className="
                  mt-5
                  leading-8
                  text-white/50
                "

              >

                EON AI may use cookies to maintain
                functionality, understand usage
                patterns and improve our services.

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

                Control

              </h2>



              <p

                className="
                  mt-5
                  leading-8
                  text-white/50
                "

              >

                You can manage cookie preferences
                through your browser settings.
                Some features may require cookies.

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

                Evolution

              </h2>



              <p

                className="
                  mt-5
                  leading-8
                  text-white/50
                "

              >

                As EON AI technology evolves,
                this policy may be updated
                to reflect new capabilities.

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

              Designed for
              a seamless experience.

            </h2>



          </div>


        </Reveal>





      </section>



    </main>

  );

}