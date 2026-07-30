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



      {/* Golden atmosphere */}


      <motion.div

        animate={{

          opacity:[
            0.08,
            0.25,
            0.08
          ],

          scale:[
            1,
            1.2,
            1
          ]

        }}

        transition={{

          duration:8,

          repeat:Infinity,

          ease:"easeInOut"

        }}

        className="
          absolute
          h-[500px]
          w-[500px]
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

            duration:1.5,
            ease:"easeOut"

          }}

          className="
            text-6xl
            font-semibold
            tracking-[-0.08em]
            text-[#F4F1EA]
            md:text-8xl
          "

        >

          EON

        </motion.div>





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
            mt-6
            text-sm
            uppercase
            tracking-[0.7em]
            text-[#D6B25E]/70
          "

        >

          FutureSelf

        </motion.div>





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
            mt-14
          "

        >

          <p

            className="
              text-lg
              uppercase
              tracking-[0.5em]
              text-white/40
            "

          >

            Coming Soon

          </p>



        </motion.div>





        <motion.div

          initial={{

            width:0,
            opacity:0

          }}

          animate={{

            width:120,
            opacity:1

          }}

          transition={{

            delay:2.3,
            duration:1.5

          }}

          className="
            mt-10
            h-px
            bg-[#D6B25E]/40
          "

        />


      </div>


    </main>

  );

}