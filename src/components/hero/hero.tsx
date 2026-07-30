"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

import { EonSymbol } from "@/components/core/eon-symbol";
import { HeroBackground } from "./hero-background";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";


export function Hero() {


  const heroRef = useRef<HTMLDivElement>(null);


  const { scrollYProgress } = useScroll({

    target: heroRef,

    offset:[
      "start start",
      "end start",
    ],

  });



  const contentY = useTransform(
    scrollYProgress,
    [0,1],
    [0,-120]
  );


  const contentOpacity = useTransform(
    scrollYProgress,
    [0,0.7],
    [1,0]
  );


  const symbolScale = useTransform(
    scrollYProgress,
    [0,1],
    [1,0.85]
  );


  const symbolOpacity = useTransform(
    scrollYProgress,
    [0,0.8],
    [1,0.25]
  );


  const heroScale = useTransform(
    scrollYProgress,
    [0,1],
    [1,0.96]
  );



  return (

    <motion.div
      ref={heroRef}
      style={{
        scale:heroScale,
      }}
    >


      <Section

        className="
          relative
          min-h-screen
          overflow-hidden
          flex
          items-center
          pt-28
          md:pt-0
        "

      >


        <HeroBackground />



        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_70%_50%,rgba(214,178,94,0.12),transparent_35%)]
          "
        />



        <Container className="relative z-10">


          <div

            className="
              grid
              items-center
              gap-10
              lg:grid-cols-2
              lg:gap-16
            "

          >



            {/* Content */}


            <motion.div

              style={{
                y:contentY,
                opacity:contentOpacity,
              }}

            >



              <p

                className="
                  text-[11px]
                  uppercase
                  tracking-[0.4em]
                  text-[#D6B25E]
                  md:text-sm
                  md:tracking-[0.45em]
                "

              >

                Personal Intelligence Company

              </p>




              <h1

                className="
                  mt-6
                  text-4xl
                  font-semibold
                  leading-[1.08]
                  tracking-[-0.04em]
                  text-[#F4F1EA]

                  sm:text-5xl
                  md:mt-8
                  md:text-7xl
                "

              >

                Building AI
                <br/>
                companions
                <br/>
                for human evolution.

              </h1>




              <p

                className="
                  mt-6
                  max-w-xl
                  text-base
                  leading-7
                  text-white/50

                  md:mt-8
                  md:text-lg
                  md:leading-8
                "

              >

                EON AI creates personal intelligence
                systems designed around memory,
                identity and human potential.

              </p>




              <div

                className="
                  mt-9
                  flex
                  flex-wrap
                  gap-4

                  md:mt-12
                  md:gap-5
                "

              >



                <a

                  href="#products"

                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#D6B25E]/30
                    bg-white/[0.025]
                    px-6
                    py-3
                    text-sm
                    font-medium
                    text-[#F4F1EA]
                    backdrop-blur-xl

                    md:px-8
                    md:py-4

                    transition-all
                    duration-700
                    hover:border-[#D6B25E]/80
                    hover:text-[#D6B25E]
                    hover:shadow-[0_0_45px_rgba(214,178,94,0.2)]
                  "

                >

                  <span className="relative z-10">
                    Explore Products →
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





                <a

                  href="#about"

                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.12]
                    bg-white/[0.03]
                    px-6
                    py-3
                    text-sm
                    font-medium
                    text-white/70
                    backdrop-blur-xl

                    md:px-8
                    md:py-4

                    transition-all
                    duration-700
                    hover:border-[#D6B25E]/60
                    hover:text-[#D6B25E]
                  "

                >

                  <span className="relative z-10">
                    About EON AI
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



            </motion.div>







            {/* Symbol */}


            <motion.div


              style={{
                scale:symbolScale,
                opacity:symbolOpacity,
              }}



              initial={{
                opacity:0,
                scale:0.8,
              }}



              animate={{
                opacity:1,
                scale:1,
              }}



              transition={{
                duration:1.4,
              }}



              className="
                flex
                justify-center
                scale-75

                md:scale-100
              "

            >

              <EonSymbol />

            </motion.div>



          </div>


        </Container>



      </Section>


    </motion.div>

  );

}