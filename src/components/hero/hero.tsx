"use client";

import { motion } from "framer-motion";

import { EonSymbol } from "@/components/core/eon-symbol";

import { HeroBackground } from "./hero-background";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";


export function Hero() {

  return (

    <Section className="
      relative
      min-h-screen
      overflow-hidden
      flex
      items-center
    ">


      <HeroBackground />


      <div className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_70%_50%,rgba(214,178,94,0.12),transparent_35%)]
      "/>



      <Container className="relative z-10">


        <div className="
          grid
          items-center
          gap-16
          lg:grid-cols-2
        ">



          <div>


            <motion.div

              initial={{
                opacity:0,
                y:30
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:1
              }}

            >

              <p className="
                text-sm
                uppercase
                tracking-[0.45em]
                text-[#D6B25E]
              ">
                Personal Intelligence Company
              </p>



              <h1 className="
                mt-8
                text-5xl
                font-semibold
                leading-[1.05]
                tracking-tight
                text-[#F4F1EA]
                md:text-7xl
              ">

                Building AI
                <br/>

                companions

                <br/>

                for human evolution.

              </h1>



              <p className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-white/50
              ">

                EON AI creates personal intelligence
                systems designed around memory,
                identity and human potential.

              </p>




              <div className="
                mt-12
                flex
                flex-wrap
                gap-5
              ">


                <button className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#D6B25E]/40
                  bg-black/40
                  px-8
                  py-4
                  text-sm
                  font-medium
                  text-[#F4F1EA]
                  backdrop-blur-xl
                  transition
                  hover:border-[#D6B25E]
                ">

                  <span className="
                    relative
                    z-10
                  ">
                    Explore Products →
                  </span>


                  <span className="
                    absolute
                    inset-0
                    translate-y-full
                    bg-[#D6B25E]/10
                    transition
                    group-hover:translate-y-0
                  "/>


                </button>




                <button className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-8
                  py-4
                  text-sm
                  text-white/70
                  backdrop-blur-xl
                  transition
                  hover:bg-white/[0.08]
                ">

                  About EON AI

                </button>


              </div>



            </motion.div>


          </div>





          <motion.div

            initial={{
              opacity:0,
              scale:0.8
            }}

            animate={{
              opacity:1,
              scale:1
            }}

            transition={{
              duration:1.4
            }}

            className="
              flex
              justify-center
            "

          >

            <EonSymbol />

          </motion.div>




        </div>


      </Container>


    </Section>

  );

}