"use client";

import { motion } from "framer-motion";


export function FutureSelfIntro() {


  return (

    <main

      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#050505]
      "

    >



      {/* Ambient golden energy */}


      <motion.div

        animate={{

          opacity:[
            0.08,
            0.22,
            0.08
          ],

          scale:[
            1,
            1.18,
            1
          ]

        }}

        transition={{

          duration:10,

          repeat:Infinity,

          ease:"easeInOut"

        }}

        className="
          absolute
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#D6B25E]/10
          blur-[180px]
        "

      />





      <div

        className="
          relative
          z-10
          flex
          flex-col
          items-center
          text-center
        "

      >




        {/* EON Logo */}


        <motion.div


          initial={{

            opacity:0,

            scale:0.92,

            letterSpacing:"0.05em"

          }}



          animate={{

            opacity:1,

            scale:1,

            letterSpacing:"0.28em"

          }}



          transition={{

            duration:1.8,

            ease:"easeOut"

          }}



          className="

            text-7xl

            font-semibold

            tracking-[0.28em]

            text-[#F4F1EA]

            drop-shadow-[0_0_40px_rgba(214,178,94,0.15)]

            md:text-9xl

          "


        >

          EON


        </motion.div>






        {/* Product name */}


        <motion.div


          initial={{

            opacity:0

          }}



          animate={{

            opacity:1

          }}



          transition={{

            delay:1,

            duration:1

          }}



          className="

            mt-8

            text-sm

            uppercase

            tracking-[0.8em]

            text-[#D6B25E]/70

          "


        >

          FutureSelf


        </motion.div>






        {/* Coming soon */}


        <motion.div


          initial={{

            opacity:0,

            y:20

          }}



          animate={{

            opacity:1,

            y:0

          }}



          transition={{

            delay:1.8,

            duration:1

          }}



          className="

            mt-16

          "


        >


          <p

            className="

              text-lg

              uppercase

              tracking-[0.55em]

              text-white/40

            "

          >

            Coming Soon

          </p>


        </motion.div>





        {/* Line */}


        <motion.div


          initial={{

            width:0,

            opacity:0

          }}



          animate={{

            width:140,

            opacity:1

          }}



          transition={{

            delay:2.3,

            duration:1.5

          }}



          className="

            mt-10

            h-px

            bg-gradient-to-r

            from-transparent

            via-[#D6B25E]/50

            to-transparent

          "


        />




      </div>


    </main>

  );

}