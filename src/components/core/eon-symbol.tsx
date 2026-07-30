"use client";

import { motion } from "framer-motion";


const lines = [
  { x: "5%", height: "45%", delay: 0 },
  { x: "18%", height: "70%", delay: 0.4 },
  { x: "32%", height: "90%", delay: 0.8 },
  { x: "50%", height: "100%", delay: 1.1 },
  { x: "68%", height: "85%", delay: 1.4 },
  { x: "82%", height: "60%", delay: 1.8 },
  { x: "95%", height: "40%", delay: 2.1 },
];


const particles = Array.from({ length: 28 });


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


      {/* Soft intelligence glow */}

      <motion.div

        animate={{
          opacity:[0.08,0.18,0.08],
          scale:[1,1.12,1],
        }}

        transition={{
          duration:12,
          repeat:Infinity,
          ease:"easeInOut",
        }}

        className="
          absolute
          h-80
          w-[520px]
          rounded-full
          bg-[#D6B25E]/5
          blur-[160px]
        "

      />



      {/* Energy lines */}

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
              via-[#D6B25E]/40
              to-transparent
              shadow-[0_0_20px_rgba(214,178,94,0.35)]
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

                0.05,
                0.5,
                0.15,
                0.45,
                0.05,

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



        {/* Floating data particles */}

        {particles.map((_,index)=>(


          <motion.div

            key={index}

            className="
              absolute
              h-[2px]
              w-[2px]
              rounded-full
              bg-[#D6B25E]/60
              shadow-[0_0_12px_rgba(214,178,94,0.5)]
            "


            style={{

              left:
                `${Math.random()*100}%`,

              bottom:
                `${Math.random()*80}%`,

            }}


            animate={{

              opacity:[

                0,
                0.7,
                0,

              ],

              y:[

                20,
                -50,
                -100,

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