import { motion } from "framer-motion";


export default function FutureSelfPage(){


  return (

    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        justify-center
        bg-[#050505]
      "
    >


      {/* Ambient light */}

      <motion.div

        animate={{

          opacity:[
            0.08,
            0.2,
            0.08
          ],

          scale:[
            1,
            1.15,
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
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#D6B25E]/10
          blur-[160px]
        "

      />




      <div
        className="
          relative
          z-10
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
            duration:1
          }}

          className="
            text-sm
            uppercase
            tracking-[0.6em]
            text-[#D6B25E]
          "

        >

          EON AI

        </motion.p>





        <motion.h1

          initial={{
            opacity:0,
            scale:0.95
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            delay:0.4,
            duration:1.2
          }}

          className="
            mt-10
            text-6xl
            font-semibold
            tracking-[-0.05em]
            text-[#F4F1EA]
            md:text-8xl
          "

        >

          FutureSelf

        </motion.h1>





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
            mt-12
          "

        >

          <p

            className="
              text-xl
              tracking-[0.35em]
              uppercase
              text-white/40
            "

          >

            Coming Soon

          </p>



          <div

            className="
              mx-auto
              mt-8
              h-px
              w-32
              bg-gradient-to-r
              from-transparent
              via-[#D6B25E]/50
              to-transparent
            "

          />


          <p

            className="
              mt-8
              max-w-md
              text-sm
              leading-7
              text-white/30
            "

          >

            A new intelligence
            is preparing to emerge.

          </p>


        </motion.div>



      </div>



    </main>

  );

}