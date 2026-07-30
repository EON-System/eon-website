"use client";

import { motion } from "framer-motion";


const lines = [
  {
    x: "20%",
    height: "55%",
    delay: 0,
  },
  {
    x: "35%",
    height: "85%",
    delay: 0.4,
  },
  {
    x: "50%",
    height: "100%",
    delay: 0.8,
  },
  {
    x: "65%",
    height: "75%",
    delay: 1.2,
  },
  {
    x: "80%",
    height: "50%",
    delay: 1.6,
  },
];


const particles = Array.from({ length: 18 });


export function EonSymbol() {


  return (

    <div
      className="
        relative
        flex
        h-[420px]
        w-[420px]
        items-center
        justify-center
        overflow-hidden
      "
    >


      {/* Energy glow */}

      <motion.div

        animate={{
          opacity:[0.15,0.35,0.15],
          scale:[1,1.2,1],
        }}

        transition={{
          duration:8,
          repeat:Infinity,
        }}

        className="
          absolute
          h-64
          w-64
          rounded-full
          bg-[#D6B25E]/10
          blur-[100px]
        "

      />



      {/* Vertical intelligence streams */}

      <div
        className="
          relative
          h-72
          w-48
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
              via-[#D6B25E]
              to-transparent
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
                0.4,
                1,
                0,
              ],
            }}

            transition={{
              duration:3,
              repeat:Infinity,
              delay:line.delay,
              ease:"easeInOut",
            }}

          />

        ))}



        {/* Particles */}

        {particles.map((_,index)=>(

          <motion.div

            key={index}

            className="
              absolute
              h-1
              w-1
              rounded-full
              bg-[#D6B25E]
              shadow-[0_0_20px_#D6B25E]
            "

            style={{
              left:`${10 + Math.random()*80}%`,
              bottom:`${10 + Math.random()*80}%`,
            }}

            animate={{

              opacity:[
                0,
                1,
                0,
              ],

              y:[
                20,
                -40,
                -80,
              ],

              scale:[
                0.5,
                1,
                0,
              ],

            }}

            transition={{

              duration:
                2 + Math.random()*3,

              repeat:Infinity,

              delay:
                Math.random()*3,

            }}

          />

        ))}


      </div>


    </div>

  );
}