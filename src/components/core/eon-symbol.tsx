"use client";

import { motion } from "framer-motion";


export function EonSymbol() {

  const paths = [
    "M130 40 C220 40 220 220 130 220 C40 220 40 40 130 40",
    "M130 40 C40 40 40 220 130 220 C220 220 220 40 130 40",
    "M55 130 C55 45 205 45 205 130 C205 215 55 215 55 130",
    "M130 55 C215 55 215 205 130 205 C45 205 45 55 130 55",
    "M80 80 C170 20 240 160 160 220 C80 280 20 140 80 80",
    "M180 80 C90 20 20 160 100 220 C180 280 240 140 180 80",
  ];


  return (

    <div
      className="
        relative
        flex
        h-[420px]
        w-[420px]
        items-center
        justify-center
      "
    >

      {/* Soft energy field */}

      <motion.div

        animate={{
          opacity:[0.15,0.3,0.15],
          scale:[1,1.08,1],
        }}

        transition={{
          duration:10,
          repeat:Infinity,
          ease:"easeInOut",
        }}

        className="
          absolute
          inset-0
          rounded-full
          bg-[#D6B25E]/10
          blur-[120px]
        "

      />



      <svg
        width="260"
        height="260"
        viewBox="0 0 260 260"
        fill="none"
        className="
          relative
        "
      >

        {paths.map((path,index)=>(

          <motion.path

            key={index}

            d={path}

            stroke="#D6B25E"

            strokeOpacity="0.75"

            strokeWidth="2"

            strokeLinecap="round"

            initial={{
              pathLength:0,
              opacity:0,
            }}

            animate={{
              pathLength:1,
              opacity:1,
            }}

            transition={{
              delay:index*0.15,
              duration:1.8,
              ease:"easeOut",
            }}

          />

        ))}


      </svg>


    </div>

  );
}