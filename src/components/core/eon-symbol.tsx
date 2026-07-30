"use client";

import { motion } from "framer-motion";


export function EonSymbol() {

  const rings = [
    {
      rotate: 0,
      scaleX: 1,
      scaleY: 0.45,
    },
    {
      rotate: 60,
      scaleX: 1,
      scaleY: 0.45,
    },
    {
      rotate: 120,
      scaleX: 1,
      scaleY: 0.45,
    },
    {
      rotate: 30,
      scaleX: 0.8,
      scaleY: 0.35,
    },
    {
      rotate: 90,
      scaleX: 0.8,
      scaleY: 0.35,
    },
    {
      rotate: 150,
      scaleX: 0.8,
      scaleY: 0.35,
    },
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

      {/* Ambient glow */}

      <motion.div

        animate={{
          opacity:[0.15,0.35,0.15],
          scale:[1,1.15,1],
        }}

        transition={{
          duration:8,
          repeat:Infinity,
          ease:"easeInOut",
        }}

        className="
          absolute
          inset-0
          rounded-full
          bg-[#D6B25E]/20
          blur-[100px]
        "

      />



      {/* Symbol */}

      <div
        className="
          relative
          h-[260px]
          w-[260px]
        "
      >


        {rings.map((ring,index)=>(

          <motion.div

            key={index}

            initial={{
              opacity:0,
              scale:0.7,
            }}

            animate={{
              opacity:1,
              scale:1,
            }}

            transition={{
              delay:index*0.12,
              duration:1.2,
              ease:"easeOut",
            }}

            style={{
              rotate:ring.rotate,
              scaleX:ring.scaleX,
              scaleY:ring.scaleY,
            }}

            className="
              absolute
              inset-0
              rounded-full
              border
              border-[#D6B25E]/60
            "

          />

        ))}


        {/* Core light */}

        <motion.div

          animate={{
            opacity:[0.4,0.8,0.4],
            scale:[1,1.2,1],
          }}

          transition={{
            duration:5,
            repeat:Infinity,
          }}

          className="
            absolute
            left-1/2
            top-1/2
            h-3
            w-3
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#D6B25E]
            blur-[1px]
            shadow-[0_0_40px_#D6B25E]
          "

        />

      </div>


    </div>

  );
}