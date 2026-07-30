"use client";

import { motion } from "framer-motion";


const lines = [
  { x: "5%", height: "45%", delay: 0 },
  { x: "18%", height: "70%", delay: 0.3 },
  { x: "32%", height: "90%", delay: 0.6 },
  { x: "50%", height: "100%", delay: 0.9 },
  { x: "68%", height: "85%", delay: 1.2 },
  { x: "82%", height: "65%", delay: 1.5 },
  { x: "95%", height: "40%", delay: 1.8 },
];


const particles = Array.from({ length: 30 });


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


      {/* Intelligence field */}

      <motion.div

        animate={{
          opacity:[0.12,0.3,0.12],
          scale:[1,1.15,1],
        }}

        transition={{
          duration:10,
          repeat:Infinity,
          ease:"easeInOut",
        }}

        className="
          absolute
          h-72
          w-[500px]
          rounded-full
          bg-[#D6B25E]/10
          blur-[120px]
        "

      />



      {/* Energy architecture */}

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
              w-[2px]
              bg-gradient-to-t
              from-transparent
              via-[#D6B25E]
              to-transparent
              shadow-[0_0_25px_rgba(214,178,94,0.8)]
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
                0,
                1,
                0.35,
                1,
                0,
              ],
            }}

            transition={{
              duration:3.5,
              repeat:Infinity,
              delay:line.delay,
              ease:"easeInOut",
            }}

          />

        ))}



        {/* Floating intelligence particles */}

        {particles.map((_,index)=>(


          <motion.div

            key={index}

            className="
              absolute
              h-[3px]
              w-[3px]
              rounded-full
              bg-[#F4F1EA]
              shadow-[0_0_20px_#D6B25E]
            "

            style={{

              left:
                `${Math.random()*100}%`,

              bottom:
                `${Math.random()*90}%`,

            }}


            animate={{

              opacity:[
                0,
                1,
                0,
              ],

              y:[
                30,
                -60,
                -120,
              ],

            }}


            transition={{

              duration:
                3 + Math.random()*3,

              repeat:
                Infinity,

              delay:
                Math.random()*4,

            }}

          />


        ))}


      </div>


    </div>

  );
}