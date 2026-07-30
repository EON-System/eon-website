"use client";

import { motion } from "framer-motion";


const lines = [
  { x: "5%", height: "45%", delay: 0 },
  { x: "18%", height: "70%", delay: 0.35 },
  { x: "32%", height: "90%", delay: 0.7 },
  { x: "50%", height: "100%", delay: 1 },
  { x: "68%", height: "85%", delay: 1.35 },
  { x: "82%", height: "65%", delay: 1.7 },
  { x: "95%", height: "40%", delay: 2 },
];


const particles = Array.from({
  length: 32,
});


export function EonSymbol() {


  return (

    <div
      className="
        relative
        flex
        h-[420px]
        w-[620px]
        items-center
        justify-center
        overflow-hidden
      "
    >


      {/* Intelligence atmosphere */}

      <motion.div

        animate={{
          opacity:[0.1,0.25,0.1],
          scale:[1,1.15,1],
        }}

        transition={{
          duration:10,
          repeat:Infinity,
          ease:"easeInOut",
        }}

        className="
          absolute
          h-80
          w-[520px]
          rounded-full
          bg-[#D6B25E]/10
          blur-[150px]
        "

      />



      {/* Vertical energy architecture */}

      <div
        className="
          relative
          h-80
          w-[520px]
        "
      >


        {lines.map((line,index)=>(


          <motion.div

            key={index}

            className="
              absolute
              bottom-0
              w-px
              bg-gradient-to-t
              from-transparent
              via-[#D6B25E]/60
              to-transparent
              shadow-[0_0_28px_rgba(214,178,94,0.45)]
            "


            style={{
              left:line.x,
            }}


            initial={{
              height:0,
              opacity:0,
            }}


            animate={{

              height:line.height,

              opacity:[

                0.1,
                0.75,
                0.25,
                0.65,
                0.1,

              ],

            }}


            transition={{

              duration:4,

              repeat:Infinity,

              delay:line.delay,

              ease:"easeInOut",

            }}

          />

        ))}




        {/* Intelligence particles */}


        {particles.map((_,index)=>(


          <motion.div

            key={index}

            className="
              absolute
              h-[3px]
              w-[3px]
              rounded-full
              bg-[#D6B25E]/80
              shadow-[0_0_16px_rgba(214,178,94,0.7)]
            "


            style={{

              left:
                `${Math.random()*100}%`,

              bottom:
                `${Math.random()*85}%`,

            }}


            animate={{

              opacity:[

                0,
                0.9,
                0,

              ],


              y:[

                20,
                -60,
                -120,

              ],


              scale:[

                0.5,
                1,
                0,

              ],

            }}


            transition={{

              duration:
                4 + Math.random()*3,


              repeat:
                Infinity,


              delay:
                Math.random()*5,


              ease:"easeOut",

            }}

          />


        ))}


      </div>


    </div>

  );

}